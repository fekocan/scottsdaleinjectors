import { MetadataRoute } from 'next';
import { getCities, getAllTherapistSlugs, getAllCityServiceCombinations, getPosts } from '@/lib/supabase-server';

// Revalidate every week (7 days)
export const revalidate = 604800;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://besthoustonchiros.com';

  // Get all data
  const cities = await getCities();
  const therapistSlugs = await getAllTherapistSlugs();
  const cityServiceCombinations = await getAllCityServiceCombinations();
  const posts = await getPosts();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/list-your-practice`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // City pages
  cities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // City-service pages
  cityServiceCombinations.forEach((combo) => {
    routes.push({
      url: `${baseUrl}/city/${combo.citySlug}/${combo.serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Therapist pages
  therapistSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/therapist/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // Blog posts
  posts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.published_at),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return routes;
}

