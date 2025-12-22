import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useMemo, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FilterBar } from '../components/FilterBar';
import { TherapistCard } from '../components/TherapistCard';
import { Pagination } from '../components/Pagination';
import { useCityBySlug } from '../hooks/useCityBySlug';
import { useTherapistsByCity } from '../hooks/useTherapistsByCity';
import { useFilteredTherapists } from '../hooks/useFilteredTherapists';
import { useQueryParams } from '../hooks/useQueryParams';
import { useDirectory } from '../providers/DirectoryProvider';

const ITEMS_PER_PAGE = 12;

export function CityPage() {
  const { slug } = useParams<{ slug: string }>();
  const { loading, error } = useDirectory();
  const city = useCityBySlug(slug || '');
  const therapists = useTherapistsByCity(city?.id || '');
  const { services, languages, query, page, updateParams } = useQueryParams();

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const filteredTherapists = useFilteredTherapists(therapists, {
    services,
    languages,
    query,
  });

  const totalPages = Math.ceil(filteredTherapists.length / ITEMS_PER_PAGE);

  const paginatedTherapists = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredTherapists.slice(start, end);
  }, [filteredTherapists, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    updateParams({ page: null });
  }, [services, languages, query]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    updateParams({ page: newPage > 1 ? newPage : null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (filters: {
    services: string[];
    languages: string[];
    query: string;
  }) => {
    updateParams({
      services: filters.services.length > 0 ? filters.services : null,
      lang: filters.languages.length > 0 ? filters.languages : null,
      q: filters.query || null,
      page: null,
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Therapists in {city.name} - Houston Therapy Directory</title>
        <meta
          name="description"
          content={`Find licensed therapists and mental health professionals in ${city.name}. Browse ${therapists.length} local providers offering CBT, anxiety treatment, couples therapy, and more.`}
        />
        <link rel="canonical" href={`/city/${city.slug}`} />
      </Helmet>

      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={city.image}
            alt={`${city.name} cityscape`}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: city.name },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Therapists in {city.name}
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              {filteredTherapists.length} {filteredTherapists.length === 1 ? 'therapist' : 'therapists'} found
            </p>
            <p className="text-lg text-slate-300">
              Connect with licensed mental health professionals in your community
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4 mb-8 lg:mb-0">
            <div className="sticky top-8">
              <FilterBar
                onFilterChange={handleFilterChange}
                initialServices={services}
                initialLanguages={languages}
                initialQuery={query}
              />
            </div>
          </aside>

          <main className="lg:col-span-8">
            {paginatedTherapists.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl">
                <p className="text-lg text-slate-600 mb-2">No therapists match your filters</p>
                <p className="text-sm text-slate-500">Try adjusting your search criteria</p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {paginatedTherapists.map((therapist) => (
                    <TherapistCard key={therapist.id} therapist={therapist} />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
