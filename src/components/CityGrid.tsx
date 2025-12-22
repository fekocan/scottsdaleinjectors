import { City } from '../providers/DirectoryProvider';
import { CityCard } from './CityCard';
import { useDirectory } from '../providers/DirectoryProvider';

interface CityGridProps {
  cities: City[];
}

export function CityGrid({ cities }: CityGridProps) {
  const { data } = useDirectory();

  const getTherapistCount = (cityId: string) => {
    if (!data?.therapists) return 0;
    return data.therapists.filter((t) => t.cityId === cityId).length;
  };

  if (cities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No cities found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cities.map((city) => (
        <CityCard
          key={city.id}
          city={city}
          therapistCount={getTherapistCount(city.id)}
        />
      ))}
    </div>
  );
}
