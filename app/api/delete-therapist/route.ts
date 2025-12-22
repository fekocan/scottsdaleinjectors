import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function DELETE(request: Request) {
  try {
    const { businessId } = await request.json();

    if (!businessId) {
      return NextResponse.json(
        { error: 'Business ID is required' },
        { status: 400 }
      );
    }

    // Delete the therapist by google_business_id
    const { error, count } = await supabaseAdmin!
      .from('therapists')
      .delete()
      .eq('google_business_id', businessId);

    if (error) {
      console.error('Error deleting therapist:', error);
      return NextResponse.json(
        { error: `Failed to delete therapist: ${error.message}` },
        { status: 500 }
      );
    }

    if (count === 0) {
      return NextResponse.json(
        { error: 'Therapist not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in delete-therapist API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

