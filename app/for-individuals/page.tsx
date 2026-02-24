import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, Users, Award, TrendingUp } from 'lucide-react';

const techSkills = [
  'Digital workflow mastery',
  'Data literacy & applied analytics',
  'AI literacy & practical AI tools',
  'Remote collaboration systems',
  'Global freelancing readiness',
  'Design thinking & problem-solving'
];

const futureOfWorkDomains = [
  'Personal Development & Wellbeing',
  'Productivity & Professional Excellence',
  'Leadership, Governance & Advocacy',
  'Strategic Business & Organizational Growth'
];

const benefits = [
  {
    icon: Zap,
    title: 'Structured Learning Systems',
    description: 'Not random courses — integrated skill pathways designed for real-world application'
  },
  {
    icon: Users,
    title: 'Cohort-Based Accountability',
    description: 'Learn alongside professionals and entrepreneurs in structured, supportive cohorts'
  },
  {
    icon: Award,
    title: 'Real-World Digital Tools',
    description: 'Practical skills using the tools and platforms that power the modern economy'
  },
  {
    icon: TrendingUp,
    title: 'Cross-Border Opportunity',
    description: 'Build capabilities that translate into income and employability globally'
  }
];

const audience = [
  'Employees advancing their careers',
  'Freelancers expanding digital services',
  'Entrepreneurs scaling businesses',
  'Job seekers entering the workforce',
  'Professionals preparing for AI transformation'
];

export default function ForIndividualsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-accent-600 via-purple-600 to-primary-600">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              🚀 For Individuals
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Future-Proof Your Skills. Expand Your Opportunity.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed opacity-95">
              The world of work is changing rapidly. AI is transforming industries. Digital systems are redefining productivity. Qraft Academy equips you with structured skills to thrive — not just survive — in the modern economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#programs" className="btn-primary bg-white text-accent-700 hover:bg-white/90 px-8 py-4 text-lg">
                Explore Programs
              </Link>
              <Link href="#forum" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Join the Forum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Paths */}
      <section id="programs" className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Choose Your Growth Path
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Two integrated pathways for individual growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TechMasters */}
            <div className="card p-8 sm:p-10 bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3">
                TechMasters
              </h3>
              <p className="text-lg font-semibold text-purple-700 mb-4">
                Digital, Data & AI Skills for the Modern Professional
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Build practical technical capabilities that translate directly into income, employability, and performance.
              </p>
              
              <h4 className="font-bold text-neutral-900 mb-3">You Will Learn:</h4>
              <ul className="space-y-2 mb-8">
                {techSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/courses/techmasters" className="btn-primary px-6 py-3 text-center">
                  Explore Tech Programs
                </Link>
              </div>
            </div>

            {/* Future of Work Forum */}
            <div id="forum" className="card p-8 sm:p-10 bg-gradient-to-br from-accent-50 to-accent-100/50 border-2 border-accent-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3">
                Future of Work Forum
              </h3>
              <p className="text-lg font-semibold text-accent-700 mb-4">
                Free & Community-Based Programs
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Your entry point into a larger professional ecosystem.
              </p>
              
              <h4 className="font-bold text-neutral-900 mb-3">Through the Forum, You Can:</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">Attend free future-of-work sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">Join innovation challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">Participate in structured cohort discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">Develop leadership and strategic influence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">Build resilience and long-term career clarity</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/future-of-work-forum" className="btn-primary px-6 py-3 text-center bg-accent-600 hover:bg-accent-700">
                  Join the Forum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Skill Framework */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Integrated Skill Framework
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Develop technical capability, strategic thinking, and professional resilience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureOfWorkDomains.map((domain, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {index + 1}
                </div>
                <p className="font-semibold text-neutral-900">{domain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Why Learn With Qraft Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card p-8 hover:shadow-lg transition-all duration-300">
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {audience.map((item, index) => (
              <div key={index} className="card p-6 flex items-center gap-3 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0" />
                <span className="font-semibold text-neutral-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-primary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Start Your Growth Journey Today
          </h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            Your skill is your career infrastructure. Build it intentionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses/techmasters" className="btn-primary bg-white text-accent-700 hover:bg-white/90 px-8 py-4 text-lg">
              Explore Tech Programs
            </Link>
            <Link href="/future-of-work-forum" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Join the Future of Work Forum
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
