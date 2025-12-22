import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow flex items-center justify-center py-20">
                <div className="text-center px-4">
                    <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileQuestion className="w-10 h-10 text-slate-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                        The page you are looking for does not exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
