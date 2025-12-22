import Link from 'next/link';
import { Sparkles, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Scottsdale Injectors Home"
          >
            <div className="bg-rose-500 rounded-xl p-2 group-hover:bg-rose-600 transition-colors">
              <Sparkles className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-tight">Scottsdale Injectors</span>
              <span className="text-xs text-slate-600 hidden sm:block">Scottsdale Aesthetic Directory</span>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            <Link
              href="/#directory"
              className="text-slate-700 hover:text-rose-500 transition-colors font-medium"
            >
              Find an Injector
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 hover:text-rose-500 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/list-your-practice"
              className="px-5 py-2.5 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-semibold"
            >
              List Your Practice
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
