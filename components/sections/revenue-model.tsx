import { ArrowDown } from 'lucide-react';

const revenueStreams = [
  {
    number: '1',
    title: 'Ecosystem Activation',
    subtitle: 'Future of Work Forum',
    description: 'We convene institutions, professionals, and partners to identify workforce gaps and generate strategic partnerships.',
    outcomes: [
      'Institutional pipeline',
      'Talent funnel',
      'Workforce intelligence'
    ]
  },
  {
    number: '2',
    title: 'Institutional Workforce Systems',
    subtitle: 'Custom Course Creation & Program Deployment',
    description: 'We design and deploy high-impact workforce learning systems for NGOs, governments, and enterprises.',
    outcomes: [
      'Course development contracts',
      'Multi-program engagements',
      'Retainer partnerships'
    ]
  },
  {
    number: '3',
    title: 'Productized Digital Assets',
    subtitle: 'Proprietary LMS Courses & Certifications',
    description: 'We transform intellectual capital into scalable digital products delivered through our platform.',
    outcomes: [
      'Course fees & certifications',
      'Cohort-based training',
      'Recurring income streams'
    ]
  },
  {
    number: '4',
    title: 'Royalties & Licensing',
    subtitle: 'Revenue-Sharing Partnerships',
    description: 'Strategic agreements that generate royalties from continued course usage and licensing.',
    outcomes: [
      'Enrollment-based royalties',
      'Annual licensing fees',
      'Localized curriculum revenue'
    ]
  }
];

export default function RevenueModel() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Layered Revenue Architecture
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600">
            An IP-driven workforce infrastructure company combining institutional contracts, proprietary digital products, and recurring revenue streams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {revenueStreams.map((stream, index) => (
            <div key={index}>
              <div className="card p-6 sm:p-8 mb-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl flex-shrink-0">
                    {stream.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 mb-1">
                      {stream.title}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-primary-600 mb-3">
                      {stream.subtitle}
                    </p>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {stream.description}
                    </p>
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-neutral-700 mb-2">Revenue Model:</p>
                      <ul className="space-y-1">
                        {stream.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-neutral-600 flex items-start gap-2">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {index < revenueStreams.length - 1 && (
                <div className="flex justify-center mb-6">
                  <ArrowDown className="w-6 h-6 text-primary-600 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-primary-100">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-6 text-center">
            Why This Architecture Matters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Stable institutional revenue</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Scalable intellectual property</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Recurring income streams</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Geographic expansion</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Increased capital efficiency</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Compounding growth</p>
            </div>
          </div>
          <p className="text-center text-neutral-700 mt-8 text-base sm:text-lg font-medium max-w-3xl mx-auto">
            We combine ecosystem activation, institutional transformation, and scalable digital distribution into one integrated growth system.
          </p>
        </div>
      </div>
    </section>
  );
}
