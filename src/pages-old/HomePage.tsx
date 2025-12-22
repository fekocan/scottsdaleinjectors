import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { CityGrid } from '../components/CityGrid';
import { useTopCities } from '../hooks/useTopCities';
import { useDirectory } from '../providers/DirectoryProvider';
import { Brain, Heart, Users, Shield, Clock, MessageCircle } from 'lucide-react';

export function HomePage() {
  const { loading, error } = useDirectory();
  const topCities = useTopCities(10);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  const services = [
    {
      icon: Brain,
      title: 'Anxiety & Depression',
      description: 'Evidence-based treatment for anxiety disorders, depression, and mood-related challenges with compassionate care.',
    },
    {
      icon: Heart,
      title: 'Couples Therapy',
      description: 'Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.',
    },
    {
      icon: Users,
      title: 'Family Therapy',
      description: 'Navigate family dynamics, improve relationships, and create healthier patterns for the whole family.',
    },
    {
      icon: Shield,
      title: 'Trauma & PTSD',
      description: 'Specialized trauma-informed care using EMDR and other proven methods to process and heal from traumatic experiences.',
    },
    {
      icon: MessageCircle,
      title: 'Teen & Child Therapy',
      description: 'Age-appropriate therapy approaches including play therapy to help young people navigate challenges and emotions.',
    },
    {
      icon: Clock,
      title: 'Stress Management',
      description: 'Develop practical coping strategies to manage work stress, life transitions, and daily pressures effectively.',
    },
  ];

  const benefits = [
    {
      title: 'Licensed Professionals',
      description: 'All therapists in our directory are licensed, verified mental health professionals with proven expertise.',
    },
    {
      title: 'Diverse Specialties',
      description: 'Find therapists specializing in CBT, EMDR, family systems, play therapy, and many other evidence-based approaches.',
    },
    {
      title: 'Multilingual Support',
      description: 'Connect with therapists who speak English, Spanish, Mandarin, Korean, Vietnamese, Hindi, and other languages.',
    },
    {
      title: 'Convenient Locations',
      description: 'Access quality mental health care across Houston, Sugar Land, The Woodlands, Katy, and surrounding communities.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Houston Therapy Directory - Find Trusted Mental Health Professionals</title>
        <meta
          name="description"
          content="Find licensed therapists and mental health professionals across the Houston metro area. Quality care for anxiety, depression, couples therapy, and more."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Hero />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Mental Health Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our directory connects you with experienced therapists offering a wide range of services
              to support your mental health and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Find Therapists in Your Area
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Browse our directory by city to discover licensed mental health professionals in your community.
              From Houston to surrounding suburbs, quality care is closer than you think.
            </p>
          </div>

          <CityGrid cities={topCities} />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Directory
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We make it easy to find the right mental health professional for your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Taking the first step toward better mental health is courageous. Browse our directory
            to find a licensed therapist who can support you on your path to wellness.
          </p>
          <a
            href="#cities"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('cities')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg shadow-xl"
          >
            Find a Therapist Near You
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            About Mental Health Therapy in Houston
          </h2>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Comprehensive Mental Health Care Across the Houston Metro Area
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Houston and the surrounding communities offer access to some of the finest mental health professionals
                in Texas. Whether you're seeking therapy for anxiety, depression, relationship issues, or trauma,
                our directory connects you with licensed therapists who can provide the specialized care you need.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Mental health therapy is an investment in your well-being. Our listed therapists use evidence-based
                approaches including Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR),
                family systems therapy, and other proven methods to help you achieve your mental health goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Serving Communities Throughout Greater Houston
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our directory includes mental health professionals serving Houston, Sugar Land, The Woodlands,
                Pearland, League City, Katy, Spring, Missouri City, Pasadena, Baytown, Conroe, Friendswood,
                and surrounding areas. No matter where you live in the Houston metro area, quality mental health
                care is accessible and available.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Many of our listed therapists offer flexible scheduling, accept various insurance plans, and provide
                services in multiple languages to better serve Houston's diverse population. Start your search today
                to find the right therapist for your unique needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
