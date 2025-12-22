import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Therapist } from '@/lib/supabase-server';
import { ImageCarousel } from './ImageCarousel';

interface TherapistCardNextProps {
  therapist: Therapist;
  cityName?: string;
}

export function TherapistCardNext({ therapist }: TherapistCardNextProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-0 md:items-center">
        {/* Image - Full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-[300px] md:flex-shrink-0 overflow-hidden h-48 md:h-[200px]">
          <Link href={`/therapist/${therapist.slug}`} className="block h-full">
            <ImageCarousel
              images={therapist.images && therapist.images.length > 0 ? therapist.images : [therapist.photo]}
              alt={`${therapist.first_name} ${therapist.last_name}`}
            />
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 p-4 md:p-6">
          <div className="mb-2">
            <Link href={`/therapist/${therapist.slug}`} className="block">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 hover:text-rose-500 transition-colors">
                {therapist.first_name} {therapist.last_name}
              </h3>
            </Link>
          </div>

          <p className="text-slate-600 mb-3 line-clamp-2 text-sm leading-relaxed">
            {therapist.short_bio || therapist.bio}
          </p>

          {therapist.services.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {therapist.services.slice(0, 5).map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200"
                >
                  {service}
                </span>
              ))}
              {therapist.services.length > 5 && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-slate-500">
                  +{therapist.services.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Button - Full width on mobile, auto on desktop */}
        <div className="md:flex-shrink-0 p-4 md:px-6 md:py-0 border-t md:border-t-0 border-slate-100">
          <Link
            href={`/therapist/${therapist.slug}`}
            className="flex md:inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-rose-500 text-white text-sm rounded-lg hover:bg-rose-600 transition-all hover:gap-3 font-medium shadow-sm w-full md:w-auto"
          >
            View Full Profile
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
