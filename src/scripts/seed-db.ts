
import { createClient } from '@supabase/supabase-js';
import { MOCK_THERAPISTS, MOCK_CITIES } from '../lib/mock-data';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log('Starting seed process...');

    try {
        // 1. Create/Get City
        // We treat "1" as Scottsdale
        const mockCity = MOCK_CITIES.find(c => c.id === "1")!;

        // Check if city exists by slug
        let { data: existingCity } = await supabase
            .from('cities')
            .select('id')
            .eq('slug', mockCity.slug)
            .single();

        let cityId: string;

        if (existingCity) {
            console.log(`City ${mockCity.name} already exists. ID: ${existingCity.id}`);
            cityId = existingCity.id;
        } else {
            console.log(`Creating city ${mockCity.name}...`);
            const { data: newCity, error: cityError } = await supabase
                .from('cities')
                .insert({
                    name: mockCity.name,
                    slug: mockCity.slug,
                    population: mockCity.population,
                    image: mockCity.image
                })
                .select()
                .single();

            if (cityError) throw cityError;
            cityId = newCity.id;
            console.log(`Created city. ID: ${cityId}`);
        }

        // 2. Insert Therapists
        console.log(`Seeding ${MOCK_THERAPISTS.length} therapists...`);

        let successCount = 0;

        for (const therapist of MOCK_THERAPISTS) {
            // Check if exists
            const { data: existingT } = await supabase
                .from('therapists')
                .select('id')
                .eq('slug', therapist.slug)
                .single();

            if (existingT) {
                // Optional: Update? For now, skip to avoid duplicates
                // console.log(`Therapist ${therapist.slug} exists, skipping.`);
                continue;
            }

            const { error: tError } = await supabase
                .from('therapists')
                .insert({
                    first_name: therapist.first_name,
                    last_name: therapist.last_name,
                    slug: therapist.slug,
                    city_id: cityId, // Use real UUID
                    services: therapist.services,
                    phone: therapist.phone,
                    email: therapist.email,
                    website: therapist.website,
                    address: therapist.address,
                    photo: therapist.photo,
                    images: therapist.images,
                    bio: therapist.bio,
                    rating: therapist.rating,
                    review_count: therapist.review_count,
                    languages: therapist.languages
                });

            if (tError) {
                console.error(`Failed to insert ${therapist.slug}:`, tError.message);
            } else {
                successCount++;
            }
        }

        console.log(`Seed complete! Added ${successCount} new therapists.`);

    } catch (err: any) {
        console.error('Seed error:', err.message);
    }
}

seed();
