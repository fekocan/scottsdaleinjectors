import { useMemo } from 'react';
import { Therapist } from '../providers/DirectoryProvider';

export interface TherapistFilters {
  services?: string[];
  languages?: string[];
  query?: string;
}

export function useFilteredTherapists(
  therapists: Therapist[],
  filters: TherapistFilters
): Therapist[] {
  return useMemo(() => {
    let filtered = [...therapists];

    if (filters.services && filters.services.length > 0) {
      filtered = filtered.filter((therapist) =>
        filters.services!.every((service) =>
          therapist.services.includes(service)
        )
      );
    }

    if (filters.languages && filters.languages.length > 0) {
      filtered = filtered.filter((therapist) =>
        filters.languages!.some((language) =>
          therapist.languages.includes(language)
        )
      );
    }

    if (filters.query && filters.query.trim() !== '') {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(
        (therapist) =>
          therapist.firstName.toLowerCase().includes(query) ||
          therapist.lastName.toLowerCase().includes(query) ||
          `${therapist.firstName} ${therapist.lastName}`
            .toLowerCase()
            .includes(query)
      );
    }

    return filtered;
  }, [therapists, filters]);
}
