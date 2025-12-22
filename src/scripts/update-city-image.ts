
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function updateCity() {
    const { error } = await supabase
        .from('cities')
        .update({ image: '/images/cities/houston.jpg' })
        .eq('slug', 'houston');

    if (error) console.error("Error updating:", error);
    else console.log("Success! Updated Houston image.");
}

updateCity();
