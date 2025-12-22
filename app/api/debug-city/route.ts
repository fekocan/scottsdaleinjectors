import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const citySlug = searchParams.get('city') || 'pearland';

  try {
    // Get city
    const { data: city, error: cityError } = await supabase!
      .from('cities')
      .select('*')
      .eq('slug', citySlug)
      .single();

    if (cityError) {
      return NextResponse.json({ error: 'City not found', details: cityError }, { status: 404 });
    }

    // Get therapists in that city
    const { data: therapists, error: therapistError } = await supabase!
      .from('therapists')
      .select('id, first_name, last_name, services, city_id')
      .eq('city_id', city.id);

    if (therapistError) {
      return NextResponse.json({ error: 'Failed to get therapists', details: therapistError }, { status: 500 });
    }

    // Get all unique services
    const allServices = new Set<string>();
    therapists?.forEach(t => {
      t.services?.forEach((s: string) => allServices.add(s));
    });

    return NextResponse.json({
      city: city,
      therapist_count: therapists?.length || 0,
      therapists: therapists?.map(t => ({
        name: `${t.first_name} ${t.last_name}`,
        service_count: t.services?.length || 0,
        services: t.services
      })),
      all_services: Array.from(allServices).sort(),
      service_count: allServices.size
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Internal error',
      details: error
    }, { status: 500 });
  }
}

