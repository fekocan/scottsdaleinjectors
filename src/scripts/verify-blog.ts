
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) { process.exit(1); }

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    const { data: posts, error } = await supabase.from('posts').select('title, slug');
    if (error) console.error(error);
    else {
        console.log('Current Blog Posts in DB:');
        posts.forEach(p => console.log(`- ${p.title} (${p.slug})`));
    }
}

verify();
