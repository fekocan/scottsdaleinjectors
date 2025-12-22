import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ImageCarousel } from '@/components/ImageCarousel';
import { getTherapistBySlug, getCities, getAllTherapistSlugs } from '@/lib/supabase-server';
import { Phone, Mail, MapPin, ArrowLeft, CheckCircle, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

interface TherapistPageProps {
  params: Promise<{
    therapistSlug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllTherapistSlugs();
  return slugs.map((slug) => ({
    therapistSlug: slug,
  }));
}

export async function generateMetadata({ params }: TherapistPageProps): Promise<Metadata> {
  const { therapistSlug } = await params;
  const therapist = await getTherapistBySlug(therapistSlug);

  if (!therapist) {
    return {
      title: 'Therapist Not Found',
    };
  }

  // Get city information for the title
  const cities = await getCities();
  const city = cities.find(c => c.id === therapist.city_id);

  return {
    title: `${therapist.first_name} ${therapist.last_name} - ${city?.name || 'Scottsdale'} - Scottsdale Injectors`,
    description: `${therapist.bio.substring(0, 155)}...`,
  };
}

export default async function TherapistPage({ params }: TherapistPageProps) {
  const { therapistSlug } = await params;
  const therapist = await getTherapistBySlug(therapistSlug);

  if (!therapist) {
    notFound();
  }

  // Get city information
  const cities = await getCities();
  const city = cities.find(c => c.id === therapist.city_id);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://besthoustunchiros.com';
  const therapistName = `${therapist.first_name} ${therapist.last_name}`;

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          ...(city ? [{ name: city.name, url: `${baseUrl}/city/${city.slug}` }] : []),
          { name: therapistName, url: `${baseUrl}/therapist/${therapist.slug}` },
        ]}
      />
      <Header />

      <main className="flex-grow bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {city && (
            <Link
              href={`/city/${city.slug}`}
              className="inline-flex items-center text-slate-600 hover:text-rose-500 mb-6 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {city.name} injectors
            </Link>
          )}

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {therapist.first_name} {therapist.last_name}
                </h1>
                <p className="text-lg text-slate-600 mb-3">Licensed Aesthetic Nurse Injector</p>

                {therapist.rating && therapist.review_count && (
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-slate-900">{therapist.rating}</span>
                    </div>
                    <span className="text-slate-600">
                      ({therapist.review_count} {therapist.review_count === 1 ? 'review' : 'reviews'})
                    </span>
                  </div>
                )}
              </div>

              <div className="w-full rounded-xl overflow-hidden mb-6" style={{ height: '400px', maxHeight: '400px' }}>
                <ImageCarousel
                  images={therapist.images && therapist.images.length > 0 ? therapist.images : [therapist.photo]}
                  alt={`${therapist.first_name} ${therapist.last_name}`}
                />
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {therapist.bio}
                </p>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {therapist.phone && (
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-5 h-5 text-rose-500" />
                        <span className="font-semibold text-slate-900">Phone</span>
                      </div>
                      <a
                        href={`tel:${therapist.phone}`}
                        className="text-rose-500 hover:text-rose-600 font-medium"
                      >
                        {therapist.phone}
                      </a>
                    </div>
                  )}

                  {therapist.email && (
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-5 h-5 text-rose-500" />
                        <span className="font-semibold text-slate-900">Email</span>
                      </div>
                      <a
                        href={`mailto:${therapist.email}`}
                        className="text-rose-500 hover:text-rose-600 font-medium break-all"
                      >
                        {therapist.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {city && therapist.address && (
                <div className="mb-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-rose-500" />
                      <span className="font-semibold text-slate-900">Address</span>
                    </div>
                    <div className="text-slate-700">
                      <div>{therapist.address}</div>
                      <div>{city.name}, Arizona</div>
                    </div>
                  </div>
                </div>
              )}

              {therapist.website && (
                <div className="border-t border-slate-200 pt-6">
                  <a
                    href={therapist.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-semibold"
                  >
                    Contact {therapist.first_name}
                  </a>
                </div>
              )}
            </div>
          </div>

          {therapist.services.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 md:p-8 mt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Services & Specialties
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {therapist.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {therapist.analysis && therapist.analysis.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 md:p-8 mt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Clients Say</h2>
              <div className="space-y-4">
                {therapist.analysis.map((paragraph, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {city && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Looking for more injectors in {city.name}?
              </h2>
              <p className="text-slate-600 mb-6">
                Browse our directory of licensed aesthetic nurses
              </p>
              <Link
                href={`/city/${city.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
              >
                View All {city.name} Injectors
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
