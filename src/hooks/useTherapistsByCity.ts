import { useMemo } from 'react';
import { useDirectory } from '../providers/DirectoryProvider';
import { Therapist } from '../providers/DirectoryProvider';

export function useTherapistsByCity(cityId: string): Therapist[] {
  const { data } = useDirectory();

  return useMemo(() => {
    if (!data?.therapists) return [];
    return data.therapists.filter((therapist) => therapist.cityId === cityId);
  }, [data?.therapists, cityId]);
}
