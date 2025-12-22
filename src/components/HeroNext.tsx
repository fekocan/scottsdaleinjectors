import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Find top aesthetic injectors{' '}
                <span className="text-rose-500">in Scottsdale</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Connect with licensed aesthetic nurses in Phoenix Valley.
                Quality care for botox, fillers, microneedling, and more.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Licensed and verified aesthetic injectors</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Multiple specialties and approaches</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Multilingual professionals available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-colors font-semibold text-lg shadow-lg shadow-rose-500/20"
              >
                Browse Cities
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hide entire image section on mobile, show on lg and up */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-aesthetic.png"
                alt="Professional aesthetic nurse injector in a modern luxury clinic"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-rose-100 rounded-full p-3">
                  <CheckCircle className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-2xl">50+</div>
                  <div className="text-sm text-slate-600">Verified Injectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
