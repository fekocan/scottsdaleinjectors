import { Link } from 'react-router-dom';
import { Phone, Languages } from 'lucide-react';
import { Therapist } from '../providers/DirectoryProvider';

interface TherapistCardProps {
  therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  const displayServices = therapist.services.slice(0, 3);
  const hasMoreServices = therapist.services.length > 3;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row">
        <Link
          to={`/therapist/${therapist.id}`}
          className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden"
        >
          <img
            src={therapist.photo}
            alt={`${therapist.firstName} ${therapist.lastName}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="flex-1 p-6">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <Link to={`/therapist/${therapist.id}`} className="block mb-3">
                <h3 className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  {therapist.firstName} {therapist.lastName}
                </h3>
              </Link>

              <p className="text-slate-600 mb-4 line-clamp-2">
                {therapist.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {displayServices.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                  >
                    {service}
                  </span>
                ))}
                {hasMoreServices && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600">
                    +{therapist.services.length - 3} more
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 mb-4">
                {therapist.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
                    <a
                      href={`tel:${therapist.phone}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {therapist.phone}
                    </a>
                  </div>
                )}

                {therapist.languages.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
                    <span>{therapist.languages.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/therapist/${therapist.id}`}
                className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Full Profile
              </Link>
              {therapist.website && (
                <a
                  href={therapist.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
