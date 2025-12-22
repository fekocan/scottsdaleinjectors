'use client';

import { useState, useMemo, createContext, useContext, ReactNode } from 'react';
import { CompactFilter } from './CompactFilter';
import { Therapist } from '@/lib/supabase-server';

const COMMON_SERVICES = [
  'Botox',
  'Dysport',
  'Dermal Fillers',
  'Lip Fillers',
  'Cheek Fillers',
  'Jawline Contouring',
  'Kybellla',
  'Microneedling',
  'PRP Therapy',
  'Chemical Peels',
  'Skin Rejuvenation',
  'Laser Hair Removal',
  'CoolSculpting',
  'IV Therapy',
  'Vitamin B12 Shots',
  'HydraFacial',
  'Dermaplaning',
];

interface FilterContextType {
  filteredTherapists: Therapist[];
  availableServices: string[];
  selectedServices: string[];
  toggleService: (service: string) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

export function useTherapistFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useTherapistFilter must be used within FilterProvider');
  }
  return context;
}

interface FilterProviderProps {
  therapists: Therapist[];
  children: ReactNode;
}

export function FilterProvider({ therapists, children }: FilterProviderProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const allServices = useMemo(() => {
    const servicesSet = new Set<string>();
    therapists.forEach((therapist) => {
      therapist.services.forEach((service) => servicesSet.add(service));
    });
    return Array.from(servicesSet).sort();
  }, [therapists]);

  const availableServices = useMemo(() => {
    return COMMON_SERVICES.filter((service) => allServices.includes(service));
  }, [allServices]);

  const filteredTherapists = useMemo(() => {
    if (selectedServices.length === 0) {
      return therapists;
    }
    return therapists.filter((therapist) =>
      selectedServices.every((service) => therapist.services.includes(service))
    );
  }, [therapists, selectedServices]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const clearFilters = () => {
    setSelectedServices([]);
  };

  return (
    <FilterContext.Provider
      value={{
        filteredTherapists,
        availableServices,
        selectedServices,
        toggleService,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

interface CityHeroFilterProps {
  citySlug?: string;
}

export function CityHeroFilter({ citySlug }: CityHeroFilterProps) {
  const { availableServices, selectedServices, toggleService, clearFilters } =
    useTherapistFilter();

  return (
    <CompactFilter
      availableServices={availableServices}
      selectedServices={selectedServices}
      onToggleService={toggleService}
      onClearFilters={clearFilters}
      citySlug={citySlug}
    />
  );
}
