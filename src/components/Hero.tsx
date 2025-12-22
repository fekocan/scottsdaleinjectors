import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Find trusted therapy practices{' '}
                <span className="text-blue-600">across Houston</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Connect with licensed mental health professionals in your area.
                Quality care for anxiety, depression, couples therapy, and more.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Licensed and verified therapists</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Multiple specialties and approaches</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Multilingual professionals available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="#cities"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cities')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg shadow-blue-600/20"
              >
                Browse Cities
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop"
                alt="Professional therapist in a consultation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-2xl">20+</div>
                  <div className="text-sm text-slate-600">Verified Therapists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
