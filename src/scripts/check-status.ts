
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkStatus() {
    const { count: total, error: tError } = await supabase
        .from('therapists')
        .select('*', { count: 'exact', head: true });

    const { count: enriched, error: eError } = await supabase
        .from('therapists')
        .select('*', { count: 'exact', head: true })
        .not('description', 'is', null);

    if (tError || eError) {
        console.error('Error fetching status:', tError || eError);
        return;
    }

    console.log(`Total Clinics: ${total}`);
    console.log(`Enriched Clinics: ${enriched}`);
    console.log(`Remaining: ${total! - enriched!}`);
}

checkStatus();
