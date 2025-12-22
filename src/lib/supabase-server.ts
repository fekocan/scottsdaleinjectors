import { createClient } from '@supabase/supabase-js';

import { MOCK_CITIES, MOCK_THERAPISTS } from './mock-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create client if credentials exist
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface City {
  id: string;
  name: string;
  slug: string;
  population: number;
  image: string;
}

export interface Therapist {
  id: string;
  first_name: string;
  last_name: string;
  slug: string;
  city_id: string;
  services: string[];
  phone: string;
  email: string;
  website: string;
  address: string;
  photo: string;
  images?: string[];
  bio: string;
  short_bio?: string;
  description?: string;
  languages: string[];
  google_business_id?: string;
  rating?: number;
  review_count?: number;
  analysis?: string[];
}

export async function getCities(): Promise<City[]> {
  if (!supabase) return MOCK_CITIES;

  try {
    const { data: cities, error } = await supabase
      .from('cities')
      .select('*')
      .order('name');

    if (error || !cities) {
      console.warn('Supabase error or no data, falling back to mock data', error);
      return MOCK_CITIES;
    }

    return cities;
  } catch (e) {
    console.warn('Exception fetching cities, falling back to mock data', e);
    return MOCK_CITIES;
  }
}

export async function getTherapists(): Promise<Therapist[]> {
  if (!supabase) return MOCK_THERAPISTS;

  try {
    const { data: therapists, error } = await supabase
      .from('therapists')
      .select('*');

    if (error || !therapists) {
      return MOCK_THERAPISTS;
    }

    return therapists;
  } catch (e) {
    return MOCK_THERAPISTS;
  }
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  if (!supabase) return MOCK_CITIES.find(c => c.slug === slug) || null;

  try {
    const { data: city, error } = await supabase
      .from('cities')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !city) {
      return MOCK_CITIES.find(c => c.slug === slug) || null;
    }

    return city;
  } catch (e) {
    return MOCK_CITIES.find(c => c.slug === slug) || null;
  }
}

export async function getTherapistsByCity(cityId: string): Promise<Therapist[]> {
  if (!supabase) return MOCK_THERAPISTS.filter(t => t.city_id === cityId);

  try {
    const { data: therapists, error } = await supabase
      .from('therapists')
      .select('*')
      .eq('city_id', cityId);

    if (error || !therapists) {
      return MOCK_THERAPISTS.filter(t => t.city_id === cityId);
    }

    return therapists;
  } catch (e) {
    return MOCK_THERAPISTS.filter(t => t.city_id === cityId);
  }
}

export async function getTherapistById(id: string): Promise<Therapist | null> {
  if (!supabase) return MOCK_THERAPISTS.find(t => t.id === id) || null;

  try {
    const { data: therapist, error } = await supabase
      .from('therapists')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !therapist) {
      return MOCK_THERAPISTS.find(t => t.id === id) || null;
    }

    return therapist;
  } catch (e) {
    return MOCK_THERAPISTS.find(t => t.id === id) || null;
  }
}

export async function getTherapistBySlug(slug: string): Promise<Therapist | null> {
  if (!supabase) return MOCK_THERAPISTS.find(t => t.slug === slug) || null;

  try {
    const { data: therapist, error } = await supabase
      .from('therapists')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !therapist) {
      return MOCK_THERAPISTS.find(t => t.slug === slug) || null;
    }

    return therapist;
  } catch (e) {
    return MOCK_THERAPISTS.find(t => t.slug === slug) || null;
  }
}

// Blog Functions
const useMockData = !supabase;

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  published_at: string;
  author_name: string;
  tags?: string[];
  created_at: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    if (useMockData) {
      // Return dummy posts if offline
      return [
        {
          id: '1',
          title: '5 Benefits of Chiropractic Care',
          slug: 'benefits-of-chiropractic-care',
          excerpt: 'Discover how regular adjustments can improve your overall health and wellness.',
          content: 'Full content here...',
          cover_image: 'https://images.unsplash.com/photo-1579126031936-e60c9e045a0b?q=80&w=2070&auto=format&fit=crop',
          published_at: new Date().toISOString(),
          author_name: 'Dr. Smith',
          created_at: new Date().toISOString()
        }
      ]
    }

    const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('published_at', { ascending: false });

    return (data as BlogPost[]) || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (useMockData) {
      return {
        id: '1',
        title: '5 Benefits of Chiropractic Care',
        slug: 'benefits-of-chiropractic-care',
        excerpt: 'Discover how regular adjustments can improve your overall health and wellness.',
        content: '<p>Chiropractic care is more than just back cracking...</p>',
        cover_image: 'https://images.unsplash.com/photo-1579126031936-e60c9e045a0b?q=80&w=2070&auto=format&fit=crop',
        published_at: new Date().toISOString(),
        author_name: 'Dr. Smith',
        created_at: new Date().toISOString()
      }
    }

    const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();

    return (data as BlogPost) || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
export async function getAllTherapistSlugs(): Promise<string[]> {
  if (!supabase) return MOCK_THERAPISTS.map(t => t.slug);

  try {
    const { data: therapists, error } = await supabase
      .from('therapists')
      .select('slug');

    if (error || !therapists) {
      return MOCK_THERAPISTS.map(t => t.slug);
    }

    return therapists.map((t) => t.slug);
  } catch (e) {
    return MOCK_THERAPISTS.map(t => t.slug);
  }
}

export async function getTherapistsByCityAndService(
  cityId: string,
  service: string
): Promise<Therapist[]> {
  if (!supabase) {
    return MOCK_THERAPISTS.filter(t => t.city_id === cityId && t.services.includes(service));
  }

  try {
    // Supabase implementation usually mimics this logic, but for simplicity/robustness we can filter safely in memory if needed,
    // but assuming the original query was fine:
    // Note: Original code text search logic might be complex.
    // Simplified robust fallback:
    const therapists = await getTherapistsByCity(cityId);
    return therapists.filter(t => t.services.includes(service));
  } catch (e) {
    const therapists = MOCK_THERAPISTS.filter(t => t.city_id === cityId);
    return therapists.filter(t => t.services.includes(service));
  }
}

export async function getAllServicesInCity(cityId: string): Promise<string[]> {
  const therapists = await getTherapistsByCity(cityId);
  const servicesSet = new Set<string>();

  therapists.forEach(therapist => {
    therapist.services.forEach(service => {
      servicesSet.add(service);
    });
  });

  return Array.from(servicesSet).sort();
}

export async function getAllCityServiceCombinations(): Promise<Array<{ citySlug: string; serviceSlug: string }>> {
  const cities = await getCities();
  const combinations: Array<{ citySlug: string; serviceSlug: string }> = [];

  for (const city of cities) {
    const services = await getAllServicesInCity(city.id);
    services.forEach(service => {
      const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
      combinations.push({
        citySlug: city.slug,
        serviceSlug,
      });
    });
  }

  return combinations;
}
