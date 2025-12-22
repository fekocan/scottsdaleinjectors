import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Houston', path: '/city/houston' },
    { name: 'Sugar Land', path: '/city/sugar-land' },
    { name: 'The Woodlands', path: '/city/the-woodlands' },
    { name: 'Pearland', path: '/city/pearland' },
    { name: 'Katy', path: '/city/katy' },
    { name: 'League City', path: '/city/league-city' },
  ];

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
              <Heart className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Houston Therapy</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Connecting you with trusted, licensed mental health professionals across the Houston metro area.
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>Serving Greater Houston, TX</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Cities</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Anxiety & Depression</li>
              <li>Couples Therapy</li>
              <li>Family Therapy</li>
              <li>Trauma & PTSD</li>
              <li>Child & Teen Therapy</li>
              <li>Stress Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Crisis Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index} className="text-sm">
                  <div className="font-medium text-slate-300">{resource.name}</div>
                  <div className="text-blue-400">{resource.info}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Houston Therapy Directory. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-xs text-slate-500">
              This directory provides information about mental health professionals. It is not a substitute for
              professional medical advice, diagnosis, or treatment. If you are in crisis, please call 988 or visit
              your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
