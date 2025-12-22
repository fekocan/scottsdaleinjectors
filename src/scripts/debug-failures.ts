
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function analyze() {
    const { data: therapists } = await supabase
        .from('therapists')
        .select('first_name, last_name, website')
        .is('description', null)
        .limit(5);

    console.log('Sample Failed URLs:');
    therapists?.forEach(t => console.log(`- ${t.first_name} ${t.last_name}: ${t.website}`));
}

analyze();
