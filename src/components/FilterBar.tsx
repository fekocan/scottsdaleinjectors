import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: {
    services: string[];
    languages: string[];
    query: string;
  }) => void;
  initialServices?: string[];
  initialLanguages?: string[];
  initialQuery?: string;
}

const AVAILABLE_SERVICES = [
  'CBT',
  'Couples Therapy',
  'Anxiety',
  'Depression',
  'PTSD',
  'Trauma',
  'Family Therapy',
  'Child Therapy',
  'Teen Therapy',
  'Stress Management',
  'Anger Management',
];

const AVAILABLE_LANGUAGES = [
  'English',
  'Spanish',
  'Mandarin',
  'Korean',
  'Vietnamese',
  'Hindi',
];

export function FilterBar({
  onFilterChange,
  initialServices = [],
  initialLanguages = [],
  initialQuery = '',
}: FilterBarProps) {
  const [services, setServices] = useState<string[]>(initialServices);
  const [languages, setLanguages] = useState<string[]>(initialLanguages);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    onFilterChange({ services, languages, query });
  }, [services, languages, query, onFilterChange]);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleLanguage = (language: string) => {
    setLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const clearFilters = () => {
    setServices([]);
    setLanguages([]);
    setQuery('');
  };

  const hasActiveFilters = services.length > 0 || languages.length > 0 || query !== '';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Filter Therapists</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-2">
            Search by name
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., Ava Martinez"
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700 mb-3">Services</p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_SERVICES.map((service) => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  services.includes(service)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700 mb-3">Languages</p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_LANGUAGES.map((language) => (
              <button
                key={language}
                onClick={() => toggleLanguage(language)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  languages.includes(language)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
