'use client';

import { TherapistCardNext } from './TherapistCardNext';
import { Therapist } from '@/lib/supabase-server';

interface CityTherapistListProps {
  therapists: Therapist[];
  cityName: string;
}

export function CityTherapistList({ therapists, cityName }: CityTherapistListProps) {
  return (
    <div className="space-y-4">
      {therapists.map((therapist) => (
        <TherapistCardNext
          key={therapist.id}
          therapist={therapist}
          cityName={cityName}
        />
      ))}
    </div>
  );
}
