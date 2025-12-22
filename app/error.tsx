'use client';

import { useEffect } from 'react';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow flex items-center justify-center py-20">
                <div className="text-center px-4">
                    <div className="bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertTriangle className="w-10 h-10 text-rose-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                        We apologize for the inconvenience. Please try refreshing the page or try again later.
                    </p>
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-rose-500 hover:bg-rose-600 transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
