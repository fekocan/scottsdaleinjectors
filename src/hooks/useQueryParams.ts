import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getServices = useCallback(() => {
    const services = searchParams.get('services');
    return services ? services.split(',').filter(Boolean) : [];
  }, [searchParams]);

  const getLanguages = useCallback(() => {
    const languages = searchParams.get('lang');
    return languages ? languages.split(',').filter(Boolean) : [];
  }, [searchParams]);

  const getQuery = useCallback(() => {
    return searchParams.get('q') || '';
  }, [searchParams]);

  const getPage = useCallback(() => {
    const page = searchParams.get('page');
    return page ? parseInt(page, 10) : 1;
  }, [searchParams]);

  const updateParams = useCallback(
    (updates: Record<string, string | string[] | number | null>) => {
      const newParams = new URLSearchParams(searchParams);

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
          newParams.delete(key);
        } else if (Array.isArray(value)) {
          newParams.set(key, value.join(','));
        } else {
          newParams.set(key, String(value));
        }
      });

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  return {
    services: getServices(),
    languages: getLanguages(),
    query: getQuery(),
    page: getPage(),
    updateParams,
  };
}
