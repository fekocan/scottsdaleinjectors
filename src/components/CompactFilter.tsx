'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

interface CompactFilterProps {
  availableServices: string[];
  selectedServices: string[];
  onToggleService: (service: string) => void;
  onClearFilters: () => void;
  citySlug?: string;
}

export function CompactFilter({
  availableServices,
  selectedServices,
  onToggleService,
  onClearFilters,
  citySlug,
}: CompactFilterProps) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 8;

  if (availableServices.length === 0) return null;

  const displayedServices = showAll
    ? availableServices
    : availableServices.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMore = availableServices.length > INITIAL_DISPLAY_COUNT;

  return (
    <div className="mt-6 pt-6 border-t border-slate-200">
      <div className="flex items-center flex-wrap gap-2">
        <Filter className="w-4 h-4 text-slate-500" />
        <span className="text-sm font-medium text-slate-700">Filter by:</span>

        {displayedServices.map((service) => {
          const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
          const isSelected = selectedServices.includes(service);

          if (citySlug) {
            return (
              <Link
                key={service}
                href={`/city/${citySlug}/${serviceSlug}`}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${isSelected
                    ? 'bg-rose-500 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-rose-50'
                  }`}
              >
                {service}
              </Link>
            );
          }

          return (
            <button
              key={service}
              onClick={() => onToggleService(service)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${isSelected
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-rose-50'
                }`}
            >
              {service}
            </button>
          );
        })}

        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-3 h-3" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3" />
                View More ({availableServices.length - INITIAL_DISPLAY_COUNT} more)
              </>
            )}
          </button>
        )}

        {selectedServices.length > 0 && (
          <button
            onClick={onClearFilters}
            className="ml-auto text-xs text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
