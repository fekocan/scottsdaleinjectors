import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Globe, MapPin, ArrowLeft, Languages } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useDirectory } from '../providers/DirectoryProvider';

export function TherapistPage() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useDirectory();

  const therapist = data?.therapists.find((t) => t.id === id);
  const city = data?.cities.find((c) => c.id === therapist?.cityId);

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

  if (!therapist || !city) {
    return <Navigate to="/404" replace />;
  }

  const fullName = `${therapist.firstName} ${therapist.lastName}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    therapist.address
  )}`;

  return (
    <>
      <Helmet>
        <title>{fullName} - Therapy in {city.name} - Houston Therapy Directory</title>
        <meta
          name="description"
          content={`${fullName} is a licensed therapist in ${city.name} specializing in ${therapist.services.slice(0, 3).join(', ')}. ${therapist.bio.substring(0, 150)}...`}
        />
        <link rel="canonical" href={`/therapist/${therapist.id}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: city.name, href: `/city/${city.slug}` },
            { label: fullName },
          ]}
        />

        <Link
          to={`/city/${city.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {city.name}
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src={therapist.photo}
                  alt={fullName}
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
              </div>

              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {fullName}
                </h1>
                <p className="text-lg text-slate-600 mb-6">
                  Licensed Therapist in {city.name}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {therapist.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {therapist.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      <a
                        href={`tel:${therapist.phone}`}
                        className="text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {therapist.phone}
                      </a>
                    </div>
                  )}

                  {therapist.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${therapist.email}`}
                        className="text-slate-900 hover:text-blue-600 transition-colors break-all"
                      >
                        {therapist.email}
                      </a>
                    </div>
                  )}

                  {therapist.website && (
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      <a
                        href={therapist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-blue-600 transition-colors break-all"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}

                  {therapist.address && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {therapist.address}
                      </a>
                    </div>
                  )}

                  {therapist.languages.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Languages className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="text-slate-900">
                          {therapist.languages.join(', ')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {therapist.bio && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">About</h2>
                <p className="text-slate-700 leading-relaxed">{therapist.bio}</p>
              </div>
            )}
          </div>

          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4">
              {therapist.phone && (
                <a
                  href={`tel:${therapist.phone}`}
                  className="flex-1 text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Call Now
                </a>
              )}
              {therapist.email && (
                <a
                  href={`mailto:${therapist.email}`}
                  className="flex-1 text-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Send Email
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
