import { CheckCircle } from 'lucide-react';

const differentiators = [
  {
    title: 'Workforce Systems Thinking',
    description: 'We design integrated capability systems — not isolated training events'
  },
  {
    title: 'Instructional Design Depth',
    description: 'Structured curriculum architecture aligned with measurable outcomes'
  },
  {
    title: 'Development-Sector Specialization',
    description: 'Deep experience with NGOs, government agencies, and institutional partners'
  },
  {
    title: 'Ecosystem Integration',
    description: 'Learning programs connected to broader workforce transformation initiatives'
  },
  {
    title: 'Blended Learning Expertise',
    description: 'Flexible delivery combining digital, cohort-based, and in-person models'
  },
  {
    title: 'Localization Capability',
    description: 'Cross-border adaptation and multilingual program deployment'
  }
];

export default function WhyQraft() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Beyond Training. We Build Workforce Infrastructure.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600">
            Most providers deliver courses. We design integrated workforce systems that strengthen institutions and unlock economic opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pl-10 sm:pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
            We're Infrastructure Partners, Not Training Vendors
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            Our engagements are collaborative, structured, and aligned with measurable institutional outcomes. We strengthen productivity, governance, digital transformation, and long-term economic resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/for-organizations" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-base sm:text-lg w-full sm:w-auto">
              Partner With Us
            </a>
            <a href="/coursemasters" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 w-full sm:w-auto">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
