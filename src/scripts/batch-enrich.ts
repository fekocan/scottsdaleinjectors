
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';
import { scrapeWebsiteContent } from '../lib/scraper';
import { summarizeTherapistContent } from '../lib/gemini';

// Load env from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);



async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function batchEnrich() {
    console.log('Starting batch enrichment process...');

    try {
        // 1. Fetch all therapists (optionally filter for those without description)
        // For now, we'll process everyone that has a website
        const { data: therapists, error } = await supabase
            .from('therapists')
            .select('id, first_name, last_name, website, description')
            .not('website', 'is', null);

        if (error) throw error;

        console.log(`Found ${therapists.length} therapists to process.`);

        let successCount = 0;
        let skipCount = 0;
        let failCount = 0;

        for (const therapist of therapists) {
            console.log(`\nProcessing: ${therapist.first_name} ${therapist.last_name} (${therapist.id})`);

            // Skip if description is already long enough (e.g., > 100 chars)
            // Uncomment this if you only want to process empty ones
            if (therapist.description && therapist.description.length > 100) {
                console.log('- Skipping: Already has description.');
                skipCount++;
                continue;
            }

            if (!therapist.website) {
                console.log('- Skipping: No website.');
                skipCount++;
                continue;
            }

            try {
                // 2. Scrape
                console.log(`- Scraping ${therapist.website}...`);
                const content = await scrapeWebsiteContent(therapist.website);

                if (!content) {
                    console.log('- Failed to scrape content.');
                    failCount++;
                    continue;
                }

                // 3. Summarize with Retry Logic
                const name = `${therapist.first_name} ${therapist.last_name}`;
                console.log('- Summarizing with AI...');

                let bio = await summarizeTherapistContent(content, name);

                // Simple check if bio failed due to rate limit (simulated) or just null
                // Ideally summarizeTherapistContent should throw or return detail, but here we just check properly
                // Since summarizeTherapistContent catches errors, we need to modify it to surface 429 or handle inside.
                // Actually, let's just make the delay massive between successes for now to be safe.

                if (!bio) {
                    console.log('- Failed to generate bio (possibly rate limited). Waiting 60s...');
                    await delay(60000); // 1 minute cool down
                    bio = await summarizeTherapistContent(content, name); // Retry once
                }

                if (!bio) {
                    console.log('- Failed again. Skipping.');
                    failCount++;
                    continue;
                }

                // 4. Update
                const { error: updateError } = await supabase
                    .from('therapists')
                    .update({ description: bio })
                    .eq('id', therapist.id);

                if (updateError) {
                    console.log(`- Update Error: ${updateError.message}`);
                    failCount++;
                } else {
                    console.log('- Success! Updated description.');
                    successCount++;
                }

            } catch (err: any) {
                console.error(`- Error processing ${therapist.id}:`, err.message);
                failCount++;
            }

            // Wait before next (Optimized delay)
            await delay(3000);
        }

        console.log('\n--- Batch Complete ---');
        console.log(`Success: ${successCount}`);
        console.log(`Skipped: ${skipCount}`);
        console.log(`Failed:  ${failCount}`);

    } catch (err: any) {
        console.error('Batch script fatal error:', err.message);
    }
}

batchEnrich();
