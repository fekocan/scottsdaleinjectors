import { useMemo } from 'react';
import { useDirectory } from '../providers/DirectoryProvider';
import { City } from '../providers/DirectoryProvider';

export function useCityBySlug(slug: string): City | undefined {
  const { data } = useDirectory();

  return useMemo(() => {
    if (!data?.cities) return undefined;
    return data.cities.find((city) => city.slug === slug);
  }, [data?.cities, slug]);
}
