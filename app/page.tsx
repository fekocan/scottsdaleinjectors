import { Metadata } from 'next';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { Hero } from '@/components/HeroNext';
import { getCityBySlug, getTherapistsByCity } from '@/lib/supabase-server';
import { FilterProvider, CityHeroFilter } from '@/components/CityHeroFilter';
import { FilteredTherapistList } from '@/components/FilteredTherapistList';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Scottsdale Injectors - Find Trusted Aesthetic Nurse Injectors',
  description: 'The premier directory for licensed aesthetic nurse injectors in Scottsdale. Browse top-rated medical spas for Botox, fillers, and skin rejuvenation.',
};

export default async function HomePage() {
  // Hardcoded to Scottsdale for single-city architecture
  const city = await getCityBySlug('scottsdale');
  const therapists = city ? await getTherapistsByCity(city.id) : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Directory Section */}
        <section id="directory" className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Premier Aesthetic Specialist Directory
              </h2>
              <p className="text-lg text-slate-600">
                Browse our curated list of verified aesthetic nurse injectors in Scottsdale.
                Filter by treatment to find the perfect specialist for your needs.
              </p>
            </div>

            <FilterProvider therapists={therapists}>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 mb-8">
                <CityHeroFilter />
              </div>

              <FilteredTherapistList cityName="Scottsdale" />
            </FilterProvider>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why Choose A Specialist from Our Directory?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-rose-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Verified Credentials</h3>
                      <p className="text-slate-600">
                        We prioritize listing licensed aesthetic nurses (RN, BSN, NP) who specialize specifically in injectables.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-rose-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Aesthetic Focus</h3>
                      <p className="text-slate-600">
                        Unlike general directories, we focus exclusively on aesthetic medicine, ensuring you find experts in facial balancing and rejuvenation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-rose-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Real Patient Reviews</h3>
                      <p className="text-slate-600">
                        See aggregated ratings and reviews to make an informed decision about your aesthetic care provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-rose-100 rounded-3xl transform rotate-3" />
                <img
                  src="/images/aesthetic-clinic.png"
                  alt="Aesthetic nurse consultation"
                  className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Comprehensive Aesthetic Care Across the Valley
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Scottsdale and the surrounding communities offer access to some of the finest aesthetic professionals
                in the world. Whether you're seeking subtle enhancement, rejuvenation, or preventative treatments,
                our directory connects you with licensed nurse injectors who can provide the specialized care you need.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-rose-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Are you a Scottsdale Injector?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join the fastest-growing network of aesthetic professionals in Arizona.
              Get listed today and connect with patients looking for your expertise.
            </p>
            <Link
              href="/list-your-practice"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              List Your Practice
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
