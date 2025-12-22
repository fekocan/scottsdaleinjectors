'use client';

import { useState, useEffect } from 'react';
import { TherapistCardNext } from './TherapistCardNext';
import { useTherapistFilter } from './CityHeroFilter';
import { Filter, ChevronDown } from 'lucide-react';

interface FilteredTherapistListProps {
  cityName: string;
}

export function FilteredTherapistList({ cityName }: FilteredTherapistListProps) {
  const { filteredTherapists, clearFilters } = useTherapistFilter();
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [filteredTherapists.length]);

  const showLoadMore = filteredTherapists.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  if (filteredTherapists.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
        <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          No injectors match your filters
        </h3>
        <p className="text-slate-600 mb-4">
          Try adjusting your filter criteria to see more results.
        </p>
        <button
          onClick={clearFilters}
          className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-medium"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {filteredTherapists.slice(0, visibleCount).map((therapist) => (
          <TherapistCardNext
            key={therapist.id}
            therapist={therapist}
            cityName={cityName}
          />
        ))}
      </div>

      {showLoadMore && (
        <div className="text-center pt-4">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all font-medium shadow-sm hover:shadow-md"
          >
            Load More Injectors
            <ChevronDown className="w-4 h-4" />
          </button>
          <p className="text-sm text-slate-400 mt-3">
            Showing {visibleCount} of {filteredTherapists.length} injectors in Scottsdale
          </p>
        </div>
      )}
    </div>
  );
}
