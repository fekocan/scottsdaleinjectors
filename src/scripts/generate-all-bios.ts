
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';

// Load env
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const geminiKey = process.env.GEMINI_API_KEY;

if (!supabaseUrl || !supabaseAnonKey || !geminiKey) {
    console.error('Missing environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const genAI = new GoogleGenerativeAI(geminiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function generateAllBios() {
    console.log('Fetching injectors...');
    // Fetch all therapists
    const { data: therapists, error } = await supabase
        .from('therapists')
        .select('*, city:city_id(name)')
    // .is('short_bio', null) // Uncomment to only generate missing ones

    if (error || !therapists) {
        console.error('Error fetching:', error);
        return;
    }

    console.log(`Found ${therapists.length} injectors. Starting generation...`);

    for (const therapist of therapists) {
        const cityName = therapist.city?.name || 'Houston';
        const fullName = `${therapist.first_name} ${therapist.last_name}`;

        console.log(`Generating for ${fullName}...`);

        try {
            const prompt = `
        You are a professional copywriter for an aesthetic nurse directory.
        Write a profile for an aesthetic nurse injector named "${fullName}" located in "${cityName}".
        Their services include: ${(therapist.services || []).join(", ")}.

        Please generate a JSON object with exactly these 3 fields:
        1. "short_bio": A concise, 1-2 sentence professional summary (max 150 chars).
        2. "bio": A detailed, welcoming professional biography (approx 150-200 words). Focus on their expertise in ${(therapist.services || [])[0] || "aesthetic injectables"} and commitment to patient beauty and confidence in ${cityName}.
        3. "description": An SEO-optimized meta description for their profile page (max 160 chars).

        Output ONLY valid JSON. Do not include markdown formatting like \`\`\`json.
      `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
            const aiData = JSON.parse(text);

            // Update DB
            const { error: updateError } = await supabase
                .from('therapists')
                .update({
                    short_bio: aiData.short_bio,
                    bio: aiData.bio,
                    description: aiData.description,
                })
                .eq('id', therapist.id);

            if (updateError) console.error(`Failed to update ${fullName}:`, updateError);
            else console.log(`✓ Updated ${fullName}`);

            // Rate limit protection (Free tier is 5 RPM => 1 request every 12s. Using 20s for safety)
            await new Promise(resolve => setTimeout(resolve, 20000));

        } catch (e: any) {
            console.error(`Error processing ${fullName}:`, e.message);
        }
    }

    console.log('Batch generation complete!');
}

generateAllBios();
