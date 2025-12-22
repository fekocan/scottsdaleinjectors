// app/api/check-duplicates/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Gelen veri tipleri
interface Business {
  id: string;
  info?: {
    name: string;
    city: string;
  };
}

interface TherapistRow {
  google_business_id: string;
  slug: string;
}

export async function POST(request: NextRequest) {
  try {
    // 1) Env değişkenlerini al
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase API anahtarları eksik!');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API keys' },
        { status: 500 }
      );
    }

    // 2) Her istek için Supabase client oluştur
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 3) Body’i al ve doğrula
    const body = await request.json();
    const { businesses } = body;

    if (!Array.isArray(businesses)) {
      return NextResponse.json(
        { error: 'Invalid data format: businesses must be an array' },
        { status: 400 }
      );
    }

    if (businesses.length === 0) {
      return NextResponse.json({ duplicates: {} });
    }

    const businessIds = (businesses as Business[]).map((b) => b.id);

    // 4) Veritabanı sorgusu
    const { data, error } = await supabase!
      .from('therapists')
      .select('google_business_id, slug')
      .in('google_business_id', businessIds);

    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json(
        { error: 'Database query failed' },
        { status: 500 }
      );
    }

    const existingTherapists = (data ?? []) as TherapistRow[];

    // 5) Sonuçları duplicates objesine çevir
    const duplicates: Record<string, string> = {};

    existingTherapists.forEach((therapist) => {
      if (therapist.google_business_id) {
        duplicates[therapist.google_business_id] = therapist.slug;
      }
    });

    return NextResponse.json({ duplicates });
  } catch (error) {
    console.error('Unexpected error checking duplicates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
