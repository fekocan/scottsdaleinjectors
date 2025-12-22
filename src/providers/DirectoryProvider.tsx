import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

export interface City {
  id: string;
  name: string;
  slug: string;
  population: number;
  image: string;
}

export interface Therapist {
  id: string;
  firstName: string;
  lastName: string;
  cityId: string;
  services: string[];
  phone: string;
  email: string;
  website: string;
  address: string;
  photo: string;
  bio: string;
  languages: string[];
}

export interface DirectoryData {
  cities: City[];
  therapists: Therapist[];
}

interface DirectoryContextValue {
  data: DirectoryData | null;
  loading: boolean;
  error: string | null;
}

const DirectoryContext = createContext<DirectoryContextValue | undefined>(undefined);

export function DirectoryProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DirectoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [citiesResponse, therapistsResponse] = await Promise.all([
          supabase.from('cities').select('*').order('population', { ascending: false }),
          supabase.from('therapists').select('*').order('last_name', { ascending: true }),
        ]);

        if (citiesResponse.error) {
          throw citiesResponse.error;
        }

        if (therapistsResponse.error) {
          throw therapistsResponse.error;
        }

        const cities: City[] = citiesResponse.data.map((city) => ({
          id: city.id,
          name: city.name,
          slug: city.slug,
          population: city.population,
          image: city.image,
        }));

        const therapists: Therapist[] = therapistsResponse.data.map((therapist) => ({
          id: therapist.id,
          firstName: therapist.first_name,
          lastName: therapist.last_name,
          cityId: therapist.city_id,
          services: therapist.services,
          phone: therapist.phone,
          email: therapist.email,
          website: therapist.website,
          address: therapist.address,
          photo: therapist.photo,
          bio: therapist.bio,
          languages: therapist.languages,
        }));

        setData({ cities, therapists });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DirectoryContext.Provider value={{ data, loading, error }}>
      {children}
    </DirectoryContext.Provider>
  );
}

export function useDirectory() {
  const context = useContext(DirectoryContext);
  if (context === undefined) {
    throw new Error('useDirectory must be used within a DirectoryProvider');
  }
  return context;
}
