import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom E-Learning Development',
    description: 'Transform institutional expertise into structured digital learning experiences',
    features: [
      'Curriculum architecture & instructional design',
      'Multimedia course production',
      'SCORM/xAPI-ready modules',
      'LMS integration & deployment',
      'Localization & translation'
    ]
  },
  {
    title: 'Workforce Transformation Programs',
    description: 'Build strategic capability aligned with measurable institutional outcomes',
    features: [
      'Digital capability development',
      'AI literacy programs',
      'Leadership & governance tracks',
      'Productivity & performance programs',
      'Sector-specific workforce initiatives'
    ]
  },
  {
    title: 'Institutional Learning Systems',
    description: 'Design integrated systems — not one-off workshops',
    features: [
      'Learning management implementation',
      'Cohort-based accelerator models',
      'Blended learning deployment',
      'Capacity-building frameworks',
      'Monitoring & evaluation alignment'
    ]
  }
];

const clientTypes = [
  'NGOs & Development Agencies',
  'Government Ministries & Departments',
  'Enterprises & Corporate Teams',
  'International Implementing Partners',
  'Educational Institutions'
];

const differentiators = [
  'Workforce systems thinking',
  'Development-sector experience',
  'Cross-border digital delivery',
  'Localization capability',
  'Measurable program outcomes',
  'Integrated ecosystem platform'
];

export default function ForOrganizationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              🏛️ For Organizations
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Build Structured Workforce Systems That Scale
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed opacity-95">
              Qraft Academy partners with institutions to design and deploy custom digital workforce programs. We move beyond isolated training to build structured, measurable learning systems aligned with your institutional goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg">
                Book a Consultation
              </Link>
              <Link href="#services" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12 sm:py-16 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-neutral-600">Learners Trained</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold text-accent-600 mb-2">150+</div>
              <p className="text-neutral-600">Courses Built</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold text-primary-600 mb-2">25+</div>
              <p className="text-neutral-600">Institutional Partners</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold text-accent-600 mb-2">15+</div>
              <p className="text-neutral-600">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Institutional Services
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Comprehensive workforce capability solutions for modern organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Who We Partner With
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {clientTypes.map((type, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-all duration-300">
                <p className="font-semibold text-neutral-900">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Why Partner With Qraft Academy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="card p-6 flex items-center gap-3 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="font-semibold text-neutral-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Selected Institutional Work
            </h2>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <h4 className="font-bold text-neutral-900 mb-2">D4GW Digital Rights</h4>
                <p className="text-sm text-neutral-600">Enabel, Belgian Development Agency</p>
              </div>
              <div className="card p-6">
                <h4 className="font-bold text-neutral-900 mb-2">Business & Human Rights</h4>
                <p className="text-sm text-neutral-600">EU & Ministry of Gender</p>
              </div>
              <div className="card p-6">
                <h4 className="font-bold text-neutral-900 mb-2">French Digital Rights</h4>
                <p className="text-sm text-neutral-600">Localized Program</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/coursemasters" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 text-lg">
                View Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Build Your Workforce System
          </h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            Whether you need a single course or a multi-year workforce transformation program, we design structured learning infrastructure tailored to your institutional objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@qraftacademy.com" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg">
              Book a Consultation
            </a>
            <a href="/coursemasters" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Download Capability Statement
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
