import Link from 'next/link';
import { MapPin, Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const resources = [
    { name: 'National Suicide Prevention Lifeline', info: '988' },
    { name: 'Crisis Text Line', info: 'Text HOME to 741741' },
    { name: 'SAMHSA National Helpline', info: '1-800-662-4357' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-rose-400" />
              <h3 className="text-xl font-bold text-white">Scottsdale Injectors</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Connecting you with trusted, licensed aesthetic injectors across the Valley.
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>Serving Scottsdale & Phoenix Valley, AZ</span>
            </div>
          </div>

          {/* Popular Cities column removed */}

          <div>
            <h4 className="text-white font-semibold mb-4">For Injectors</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-rose-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/list-your-practice"
                  className="text-slate-400 hover:text-rose-400 transition-colors"
                >
                  List Your Practice
                </Link>
              </li>
              <li className="text-slate-500 text-sm">Starting at $79/month</li>
              <li className="text-slate-500 text-sm pt-2">Reach 10,000+ monthly visitors</li>
              <li className="text-slate-500 text-sm">Enhanced SEO visibility</li>
              <li className="text-slate-500 text-sm">AI-powered referrals</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Crisis Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index} className="text-sm">
                  <div className="font-medium text-slate-300">{resource.name}</div>
                  <div className="text-rose-400">{resource.info}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Scottsdale Injectors. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-rose-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-rose-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-rose-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-xs text-slate-500">
              This directory provides information about aesthetic professionals. It is not a substitute for
              professional medical advice, diagnosis, or treatment. If you have a medical emergency,
              visit your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
