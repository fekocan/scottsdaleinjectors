import { useMemo } from 'react';
import { useDirectory } from '../providers/DirectoryProvider';
import { City } from '../providers/DirectoryProvider';

export function useTopCities(count: number = 10): City[] {
  const { data } = useDirectory();

  return useMemo(() => {
    if (!data?.cities) return [];

    return [...data.cities]
      .sort((a, b) => b.population - a.population)
      .slice(0, count);
  }, [data?.cities, count]);
}
