import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  BarChart3,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'List Your Practice | Scottsdale Injectors',
  description: 'Grow your aesthetic practice with enhanced visibility, AI-powered referrals, and access to thousands of potential clients.',
};

export default function ListYourPracticePage() {
  const benefits = [
    {
      icon: TrendingUp,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
      title: 'Enhanced SEO Visibility',
      description: 'Your practice gets indexed by search engines with brand mentions and backlinks, improving your local SEO rankings.',
    },
    {
      icon: MessageSquare,
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      title: 'AI-Powered Referrals',
      description: 'Get recommended by ChatGPT and other AI assistants when users search for local aesthetic services.',
    },
    {
      icon: Users,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
      title: '10,000+ Monthly Visitors',
      description: 'Gain exposure to thousands of monthly visitors actively searching for aesthetic professionals.',
    },
    {
      icon: Globe,
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      title: 'Professional Profile Page',
      description: 'Showcase your practice with photos, specialties, contact information, and client reviews.',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
      title: 'Analytics & Insights',
      description: 'Track profile views, contact clicks, and referral sources to understand client engagement.',
    },
    {
      icon: Award,
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      title: 'Verified & Trusted',
      description: 'Build credibility with a verified badge and authentic client reviews on your profile.',
    },
  ];

  const features = [
    'Dedicated practice profile page with custom URL',
    'Photo gallery and image carousel for your practice',
    'Display specialties, services, and areas of expertise',
    'Contact information with click-to-call and email links',
    'Client reviews and ratings display',
    'SEO optimization with structured data markup',
    'Mobile-responsive design for all devices',
    'Priority placement in search results',
    'Monthly performance analytics reports',
    'Free profile updates and photo changes anytime',
    '24/7 online visibility',
    'Cancel anytime with no long-term commitment',
  ];

  const monthlyFeatures = [
    'All features included',
    'Cancel anytime',
    'No setup fees',
    'Update profile anytime',
  ];

  const annualFeatures = [
    'All features included',
    'Save over 47% vs monthly',
    'No setup fees',
    'Priority support',
    'Update profile anytime',
  ];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://scottsdaleinjectors.com';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'List Your Practice', url: `${baseUrl}/list-your-practice` },
        ]}
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-rose-50 border-b border-rose-100 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 border border-rose-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-semibold text-rose-600">Limited Time: Save Up To $500</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 drop-shadow-sm">
                Grow Your Aesthetic Practice
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Connect with thousands of clients actively seeking botox, fillers, and skincare services in the Valley
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all font-semibold text-lg shadow-lg hover:shadow-rose-500/20 transform hover:-translate-y-1"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-all font-semibold text-lg shadow-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why List Your Practice?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join Scottsdale's premier aesthetic directory and experience measurable growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`${benefit.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What's Included
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to grow your practice and reach more clients
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-xl shadow-slate-200/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-green-50 rounded-full p-1">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      </div>
                      <span className="text-base text-slate-700 leading-relaxed font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the plan that works best for your practice
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Standard Plan */}
              <div className="bg-white rounded-3xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Plan</h3>
                <p className="text-base text-slate-600 mb-8">Perfect for starting out</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-bold text-slate-900">$25</span>
                    <span className="text-lg text-slate-600 font-medium">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {monthlyFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <span className="text-base text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={process.env.NEXT_PUBLIC_POLAR_STANDARD_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200 transition-colors font-bold text-lg text-center cursor-pointer"
                >
                  Subscribe to Standard
                </a>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-700">
                <div className="absolute top-6 right-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  POPULAR
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">Premium Plan</h3>
                <p className="text-base text-slate-300 mb-8">For established med spas</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-bold text-white">$250</span>
                    <span className="text-lg text-slate-300 font-medium">/year</span>
                  </div>
                  <p className="text-sm text-green-400 font-medium">Save $50/year compared to monthly</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {annualFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0" />
                      <span className="text-base font-medium text-slate-100">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={process.env.NEXT_PUBLIC_POLAR_PREMIUM_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transition-all font-bold text-lg text-center cursor-pointer"
                >
                  Subscribe to Premium
                </a>
              </div>
            </div>

            <p className="text-center text-slate-500 mt-12 text-sm">
              All plans include a 30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-rose-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-slate-900 font-medium mb-8 leading-relaxed">
                  "Listing my practice on Scottsdale Injectors has been one of the best investments for my business.
                  I've received dozens of quality referrals and my schedule is now fully booked."
                </p>
                <footer className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-lg">SJ</div>
                  <div className="text-left">
                    <div className="text-base text-slate-900 font-bold">Sarah Johnson, RN</div>
                    <div className="text-sm text-slate-500">Aesthetic Nurse in Scottsdale</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of injectors who trust Scottsdale Injectors to connect with new clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all font-semibold text-lg shadow-xl"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-all font-semibold text-lg"
              >
                Browse Directory
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
