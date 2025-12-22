import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Scottsdale Injectors - Find Trusted Aesthetic Nurse Injectors',
  description: 'Find licensed aesthetic nurse injectors and wellness professionals in Scottsdale. Quality care for botox, fillers, and more.',
  verification: {
    google: '',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
