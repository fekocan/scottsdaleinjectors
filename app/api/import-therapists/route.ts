import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

interface BusinessInfo {
  name: string;
  website: string | null;
  city: string;
  address: string;
  phone: string;
  rating: number;
  reviews: number;
}

interface BusinessMedia {
  images_large: string[];
}

interface PreviewBusiness {
  id: string;
  info: BusinessInfo;
  media: BusinessMedia;
  analysis?: string | string[];
  isDuplicate: boolean;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractNameParts(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(' ');

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: 'Therapy' };
  }

  const lastName = parts[parts.length - 1];
  const firstName = parts.slice(0, -1).join(' ');

  return { firstName, lastName };
}

function getRandomServices(count: number): string[] {
  const allServices = [
    'Anxiety', 'Depression', 'Couples Therapy', 'Family Therapy', 
    'PTSD', 'Trauma', 'CBT', 'Stress Management',
    'Child Therapy', 'Teen Therapy', 'Play Therapy',
    'Grief Counseling', 'Addiction', 'Eating Disorders',
    'OCD', 'Bipolar Disorder', 'ADHD', 'Autism Spectrum',
    'Life Transitions', 'Career Counseling', 'Anger Management',
    'Sleep Disorders', 'Chronic Pain', 'Self Esteem',
    'Relationship Issues', 'Divorce', 'Parenting Support',
    'Mindfulness', 'Holistic Therapy', 'Group Therapy',
    'Speech Therapy', 'Physical Therapy', 'Massage Therapy'
  ];
  
  const result: string[] = [];
  const availableServices = [...allServices];
  
  for (let i = 0; i < count && availableServices.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * availableServices.length);
    result.push(availableServices[randomIndex]);
    availableServices.splice(randomIndex, 1);
  }
  
  // Ensure at least Anxiety or Depression
  if (!result.includes('Anxiety') && !result.includes('Depression')) {
    result.push(Math.random() > 0.5 ? 'Anxiety' : 'Depression');
  }
  
  // Add diversity tags randomly
  if (Math.random() < 0.4 && !result.includes('LGBTQ Friendly')) {
    result.push('LGBTQ Friendly');
  }
  if (Math.random() < 0.3 && !result.includes('BIPOC')) {
    result.push('BIPOC');
  }
  if (Math.random() < 0.25 && !result.includes('Christian Counseling')) {
    result.push('Christian Counseling');
  }
  
  return result;
}

export async function POST(request: NextRequest) {
  try {
    const { businesses, cityId, randomizeServices = false } = await request.json();

    if (!Array.isArray(businesses)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    if (!cityId) {
      return NextResponse.json({ error: 'City ID is required' }, { status: 400 });
    }

    const nonDuplicates = businesses.filter((b: PreviewBusiness) => !b.isDuplicate);

    let success = 0;
    const skipped = businesses.filter((b: PreviewBusiness) => b.isDuplicate).length;
    let failed = 0;

    const therapistsToInsert = [];

    // Check for existing slugs to avoid duplicates
    const potentialSlugs = nonDuplicates.map(b => generateSlug(b.info.name));
    const { data: existingSlugs } = await supabaseAdmin
      .from('therapists')
      .select('slug')
      .in('slug', potentialSlugs);
    
    const existingSlugSet = new Set(existingSlugs?.map(t => t.slug) || []);

    for (const business of nonDuplicates) {
      try {
        const nameParts = extractNameParts(business.info.name);
        let slug = generateSlug(business.info.name);
        
        // If slug exists, make it unique by adding a random suffix
        if (existingSlugSet.has(slug)) {
          slug = slug + '-' + Math.random().toString(36).substr(2, 6);
        }
        
        // Add to set to prevent duplicates within this import batch
        existingSlugSet.add(slug);

        const analysisArray = Array.isArray(business.analysis)
          ? business.analysis
          : business.analysis
          ? [business.analysis]
          : [];

        // Generate random services if option is enabled
        const services = randomizeServices 
          ? getRandomServices(Math.floor(Math.random() * 5) + 5) // 5-9 services
          : [];

        const therapistData = {
          id: slug + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
          slug: slug,
          first_name: nameParts.firstName,
          last_name: nameParts.lastName,
          city_id: cityId,
          services: services,
          phone: business.info.phone || null,
          email: null,
          website: business.info.website || null,
          address: business.info.address || null,
          photo: business.media.images_large[0] || '',
          bio: analysisArray[0] || `Professional therapy services at ${business.info.name}`,
          languages: ['English'],
          images: business.media.images_large || [],
          google_business_id: business.id,
          description: analysisArray.join('\n\n') || null,
          rating: business.info.rating || null,
          review_count: business.info.reviews || 0,
          analysis: analysisArray.length > 0 ? analysisArray : null,
        };

        therapistsToInsert.push(therapistData);
      } catch (err) {
        console.error(`Error processing business ${business.info.name}:`, err);
        failed++;
      }
    }

    if (therapistsToInsert.length > 0) {
      const { data, error: insertError } = await supabaseAdmin
        .from('therapists')
        .insert(therapistsToInsert)
        .select();

      if (insertError) {
        console.error('Bulk insert error:', insertError);
        console.error('Error details:', JSON.stringify(insertError, null, 2));
        failed = therapistsToInsert.length;
        return NextResponse.json({ 
          success: 0, 
          skipped, 
          failed,
          error: insertError.message || 'Database insert failed',
          details: insertError
        }, { status: 500 });
      } else {
        success = data?.length || 0;
      }
    }

    return NextResponse.json({ success, skipped, failed });
  } catch (error) {
    console.error('Error importing therapists:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ 
      error: errorMessage,
      details: error
    }, { status: 500 });
  }
}
