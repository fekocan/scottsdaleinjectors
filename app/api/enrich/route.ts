import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { scrapeWebsiteContent } from '@/lib/scraper';
import { summarizeTherapistContent } from '@/lib/gemini';

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'Therapist ID is required' }, { status: 400 });
        }

        // 1. Fetch Therapist from DB
        const { data: therapist, error: fetchError } = await supabaseAdmin
            .from('therapists')
            .select('id, first_name, last_name, website, description')
            .eq('id', id)
            .single();

        if (fetchError || !therapist) {
            return NextResponse.json({ error: 'Therapist not found' }, { status: 404 });
        }

        if (!therapist.website) {
            return NextResponse.json({ error: 'Therapist has no website URL' }, { status: 400 });
        }

        // 2. Scrape Website
        console.log(`Scraping website: ${therapist.website}`);
        const scrapedContent = await scrapeWebsiteContent(therapist.website);

        if (!scrapedContent) {
            return NextResponse.json({ error: 'Failed to scrape website or no content found' }, { status: 502 }); // Bad Gateway
        }

        // 3. Summarize with AI
        const therapistName = `${therapist.first_name || ''} ${therapist.last_name || ''}`.trim();
        console.log(`Summarizing content for: ${therapistName}`);

        // Pass the scraped content to Gemini
        const bio = await summarizeTherapistContent(scrapedContent, therapistName);

        if (!bio) {
            return NextResponse.json({ error: 'Failed to generate summary with AI' }, { status: 500 });
        }

        // 4. Update Database
        const { error: updateError } = await supabaseAdmin
            .from('therapists')
            .update({
                description: bio,
                // Optionally mark as enriched? For now just content.
            })
            .eq('id', id);

        if (updateError) {
            console.error('Update error:', updateError);
            return NextResponse.json({ error: 'Failed to update database' }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            id,
            old_description: therapist.description,
            new_description: bio
        });

    } catch (error) {
        console.error('Enrichment API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
