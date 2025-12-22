
import { createClient } from '@supabase/supabase-js';
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

const POSTS = [
    {
        title: "The Ultimate Guide to Botox & Dermal Fillers in Scottsdale",
        slug: "guide-to-botox-dermal-fillers-scottsdale",
        excerpt: "Everything you need to know about starting your aesthetic journey in the Valley. From pricing to procedure details, we decode the most popular non-surgical treatments.",
        cover_image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        tags: ["Botox", "Fillers", "Guide", "Anti-Aging"],
        content: `
## Welcome to the World of Aesthetics

Scottsdale is renowned as a hub for beauty and wellness, offering some of the most advanced aesthetic treatments in the country. Whether you're a local or visiting for a "beauty vacation," navigating the options for neurotoxins and fillers can vary from exciting to overwhelming.

### Understanding Neurotoxins (Botox, Dysport, Jeuveau)

Neurotoxins work by temporarily relaxing the facial muscles that cause wrinkles. They are famously used for:
*   **Forehead Lines**: Creating a smooth, unbothered look.
*   **Crow's Feet**: Softening lines around the eyes.
*   **Frown Lines**: Reducing the "11s" between eyebrows.

In Scottsdale, the "frozen" look is out. The trend is now **"Baby Botox"**—micro-doses that soften lines while maintaining natural expression.

### The Power of Dermal Fillers

While Botox relaxes, fillers restore. As we age, we lose collagen and fat pads in our face, leading to sagging and hollowness. Hyaluronic Acid (HA) fillers are the gold standard for:
*   **Lip Plumping**: From subtle hydration to full augmentation.
*   **Cheek Contouring**: Restoring the "apple" of the cheek for a lifted effect.
*   **Jawline Definition**: creating a sharp, snatched profile.

### How to Choose Your Provider in Scottsdale

Safety is paramount. Ensure your injector is:
1.  **Licensed**: Look for RNs, NPs, PAs, or MDs.
2.  **Specialized**: Choose someone who does injections daily, not just occasionally.
3.  **Verified**: Check reviews and before/after photos (like those in our directory!).

Ready to book? Browse our trusted list of Scottsdale injectors to find your perfect match.
    `
    },
    {
        title: "Top 5 Questions to Ask Your Aesthetic Nurse Injector",
        slug: "5-questions-ask-aesthetic-nurse-injector",
        excerpt: "Don't book an appointment without reading this first. Here are the essential questions to ensure you get safe results and the look you want.",
        cover_image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=1200",
        tags: ["Consultation", "Safety", "Tips"],
        content: `
## Your Consultation Matters

The consultation is the most critical part of your aesthetic journey. It's not just about pricing; it's an interview. Here are the top 5 questions you should ask during your next visit.

### 1. "What represents your signature style?"
Some injectors love big, bold lips. Others specialize in undetectable, natural refinement. Make sure their aesthetic aligns with yours by looking at their portfolio.

### 2. "How often do you perform this specific procedure?"
You don't want a "jack of all trades, master of none." If you're getting a liquid rhinoplasty or tear trough filler, you want an expert who performs that specific treatment daily.

### 3. "What product are you using, and why?"
Not all fillers are created equal. Restylane Kysse might be great for lips, while Juvederm Voluma is better for cheeks. An educated injector will explain *why* they chose a product for your specific anatomy.

### 4. "What is your plan for complications?"
It's rare, but knowing your provider has safety protocols (like having Hyaluronidase on hand to dissolve filler) provides peace of mind.

### 5. "What is the maintenance plan?"
Beauty is an investment. Ask upfront about how often you'll need touch-ups so you can budget accordingly. Botox typically lasts 3-4 months, while fillers can last 6-18 months.

**Pro Tip:** Use the Scottsdale Injectors directory to find profiles that list this information upfront!
    `
    },
    {
        title: "Ageless Beauty: Why Preventative Aesthetics is Taking Over",
        slug: "preventative-aesthetics-prejuvenation-trend",
        excerpt: "Why wait for wrinkles to set in? Discover the 'Prejuvenation' trend that's sweeping Scottsdale, focusing on collagen banking and early maintenance.",
        cover_image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200",
        tags: ["Trends", "Prejuvenation", "Skincare"],
        content: `
## The Rise of "Prejuvenation"

Gone are the days when medical aesthetics were only for reversing deep signs of aging. Today, patients in their 20s and 30s are flocking to medspas for **Prejuvenation**—preventative treatments designed to delay the aging process.

### What is Collagen Banking?
Collagen banking refers to treatments that stimulate your body's own collagen production *before* it significantly declines. By "banking" this collagen now, you maintain skin laxity and firmness for longer. Poplular treatments include:
*   **Microneedling**: Creates micro-injuries to trigger healing and collagen growth.
*   **Sculptra**: An injectable biostimulator that rebuilds facial structure over time.
*   **Laser Facials**: For maintaining tone and texture.

### The "Tweakment" Culture
Subtle changes, or "tweakments," are preferred over drastic overhauls. A sprinkle of Botox here, a drop of lip filler there—it's about looking like the best version of yourself, not a different person.

### Skincare: The Foundation
No amount of needles can replace a good home routine. Medical-grade skincare (SPFs, Retinols, Vitamin C) acts as insurance for your in-office investments.

**Conclusion**
Whether you're 25 or 55, it's never too early (or too late) to invest in your skin health. Consult with a qualified injector to build a long-term plan that grows with you.
    `
    }
];

async function seedBlog() {
    console.log('Starting blog seed process...');

    try {
        // 1. Clear existing posts because user said "delete old posts"
        console.log('Deleting legacy posts...');
        const { error: deleteError } = await supabase
            .from('posts')
            .delete()
            .neq('slug', 'keep-all') // Delete all lines. using neq on a likely non-existent slug is a way to delete all if no where clause works better.
            // Actually, standard delete without where needs filter. 
            // safer: .gt('id', '00000000-0000-0000-0000-000000000000') uuid check.
            .neq('title', 'DO_NOT_DELETE');

        if (deleteError) {
            console.warn('Warning deleting posts (table might be empty or RLS):', deleteError.message);
        } else {
            console.log('Legacy posts deleted.');
        }

        // 2. Insert new posts
        console.log(`Seeding ${POSTS.length} new aesthetic posts...`);

        for (const post of POSTS) {
            const { error } = await supabase
                .from('posts')
                .insert({
                    title: post.title,
                    slug: post.slug,
                    excerpt: post.excerpt,
                    content: post.content,
                    cover_image: post.cover_image,
                    tags: post.tags,
                    author_name: 'Scottsdale Injectors Team',
                    published_at: new Date().toISOString()
                })
                .select()
                .single();

            if (error) {
                console.error(`Error inserting ${post.slug}:`, error.message);
            } else {
                console.log(`Created post: ${post.title}`);
            }
        }

        console.log('Blog seed complete!');

    } catch (err: any) {
        console.error('Seed error:', err.message);
    }
}

seedBlog();
