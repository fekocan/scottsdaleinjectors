import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    // Get all therapists with their business name and ID
    const { data, error } = await supabase!
      .from('therapists')
      .select('id, google_business_id, first_name, last_name, city_id')
      .order('last_name', { ascending: true });

    if (error) {
      console.error('Error fetching therapists:', error);
      return NextResponse.json(
        { error: 'Failed to fetch therapists' },
        { status: 500 }
      );
    }

    // Combine first_name and last_name into name, filter out entries without business_id
    const therapists = (data || [])
      .filter(therapist => therapist.google_business_id) // Only include therapists with business IDs
      .map(therapist => ({
        business_id: therapist.google_business_id,
        name: `${therapist.first_name} ${therapist.last_name}`,
        city_id: therapist.city_id,
        internal_id: therapist.id,
      }));

    return NextResponse.json({ therapists });
  } catch (error) {
    console.error('Error in list-therapists API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

