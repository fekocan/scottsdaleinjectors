import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { City } from '../providers/DirectoryProvider';

interface CityCardProps {
  city: City;
  therapistCount: number;
}

export function CityCard({ city, therapistCount }: CityCardProps) {
  return (
    <Link
      to={`/city/${city.slug}`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={city.image}
          alt={`${city.name} cityscape`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
          <p className="text-sm text-slate-200">
            Pop. {city.population.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-700">
            <Users className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <span className="font-medium">
              {therapistCount} {therapistCount === 1 ? 'therapist' : 'therapists'}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
