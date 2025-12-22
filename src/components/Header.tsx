import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors"
            aria-label="Houston Therapy Directory Home"
          >
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xl font-semibold">Houston Therapy</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
