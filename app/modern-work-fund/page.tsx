import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle, 
  Target,
  Users,
  TrendingUp,
  FileText,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modern Work Fund | Qraft Academy',
  description: 'Organization grants from $1,000 to deliver demand-led workforce programs with measurable work outcomes.',
  openGraph: {
    title: 'Modern Work Fund | Qraft Academy',
    description: 'Organization grants from $1,000 to deliver demand-led workforce programs with measurable work outcomes.',
  },
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <details className="group card p-6 sm:p-8 border-2 border-neutral-200 group-open:border-primary-300 group-open:bg-primary-50 transition-all duration-300">
      <summary className="flex cursor-pointer items-center justify-between font-semibold text-neutral-900 text-lg sm:text-xl">
        {question}
        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
        {answer}
      </p>
    </details>
  );
};

export default function ModernWorkFundPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              <Target className="w-4 h-4 inline-block mr-2" />
              Organization Grants
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Modern Work Fund
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
              Organization Grants for Workforce Programs (from $1,000)
            </p>
            <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-95 max-w-3xl mx-auto">
              The Qraft Modern Work Fund invests in organizations building practical, market-relevant training programs that lead to real work outcomes—jobs, contracts, income growth, and stronger business performance. We fund partners who can deliver structured programs, connect learners to opportunity, and report measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a 
                href="/contact?topic=modern-work-fund-application" 
                className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Apply for a Grant
              </a>
              <a 
                href="/modern-work-fund#faq" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Download Guidelines
              </a>
              <a 
                href="/contact?topic=partnerships" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Fund Exists */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Why This Fund Exists
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              Modern work requires more than training—it requires pathways: skills → experience → opportunity → income.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'Demand-led', desc: 'aligned to real employer and market needs' },
                { icon: Users, title: 'Partner-delivered', desc: 'implemented by capable organizations with community reach' },
                { icon: CheckCircle, title: 'Inclusive', desc: 'expanding access for underserved groups' },
                { icon: TrendingUp, title: 'Measurable', desc: 'tied to clear outcomes and reporting' },
              ].map((item, index) => (
                <div key={index} className="card p-6 sm:p-8 flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-neutral-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card p-6 sm:p-8 bg-primary-50 border-2 border-primary-200 mt-8 flex gap-4">
              <TrendingUp className="w-8 h-8 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-2">Scalable</h3>
                <p className="text-neutral-700">designed to grow beyond one cohort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Who Can Apply
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              We fund organizations that deliver workforce development and can manage grants responsibly, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'SMEs and private training providers',
                'NGOs and community-based organizations',
                'Universities and vocational institutions',
                'Innovation hubs and accelerators',
                'Professional associations and sector networks',
                'Youth, women, PWD, and refugee-serving organizations'
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Grant Size */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight">
              Minimum Grant Size
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="card p-6 sm:p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200">
                <p className="text-sm font-semibold text-primary-700 uppercase mb-2">Minimum Award</p>
                <p className="text-3xl sm:text-4xl font-display font-bold text-neutral-900">$1,000</p>
                <p className="text-neutral-700 mt-3">USD</p>
              </div>
              <div className="card p-6 sm:p-8 bg-gradient-to-br from-accent-50 to-accent-100/50 border-2 border-accent-200">
                <p className="text-sm font-semibold text-accent-700 uppercase mb-2">Typical Award Size</p>
                <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">(Insert range if available)</p>
              </div>
              <div className="card p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200">
                <p className="text-sm font-semibold text-emerald-700 uppercase mb-2">Funding Type</p>
                <p className="text-lg sm:text-xl font-semibold text-neutral-900">Grant Only</p>
                <p className="text-neutral-700 text-sm mt-2">No loans, scholarships, or matching funds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Areas */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Priority Areas
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              Each funding cycle focuses on specific areas based on labour-market needs. Typical priorities include:
            </p>
            <div className="space-y-3">
              {[
                'Digital skills & productivity',
                'Employability & career readiness',
                'Entrepreneurship & SME growth',
                'Sector workforce programs (e.g., care economy, creative economy, green skills)'
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Target className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Fund */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              What We Fund
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              We fund programs that clearly connect training to real economic outcomes.
            </p>

            <div className="mb-10">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">Eligible Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Structured training cohorts (bootcamps, short courses, workplace-based learning)',
                  'Curriculum development/adaptation aligned to job roles',
                  'Employer engagement (industry sessions, placement pipelines, apprenticeships)',
                  'Assessment, certification, and quality assurance',
                  'Mentorship and coaching tied to work outcomes',
                  'Job readiness + portfolio building (especially for digital and freelance pathways)',
                  'Participant completion support tied directly to learning outcomes (e.g., transport stipends)',
                  'Monitoring, evaluation, and outcome reporting'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 sm:p-8 bg-primary-50 border-2 border-primary-200">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">Strong Proposals Usually Include</h3>
              <ul className="space-y-3">
                {[
                  'A clear target group and recruitment plan',
                  'Employer or market linkages (letters/MOUs where possible)',
                  'A practical learning model and delivery plan',
                  'Outcome targets beyond attendance',
                  'A realistic budget and cost-per-participant logic'
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                    <span className="text-neutral-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Fund */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              What We Don't Fund
            </h2>
            <div className="space-y-3">
              {[
                'General operational costs not linked to program delivery',
                'Cash grants for unrelated business expenses (rent, debt repayment, inventory, salaries not tied to delivery)',
                'One-off events without a training pathway or measurable outcomes',
                'Programs without a clear curriculum, workplan, and budget',
                'Political, partisan, or discriminatory activities',
                'Duplicate funding for the same activity already fully funded elsewhere (unless clearly justified)'
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight">
              Selection Criteria
            </h2>
            <div className="space-y-4">
              {[
                { num: 1, title: 'Demand Alignment', weight: '20%', desc: 'Evidence the program matches real hiring needs or market opportunities.' },
                { num: 2, title: 'Outcome Design', weight: '25%', desc: 'Clear targets for completion and outcomes (jobs, contracts, income, productivity).' },
                { num: 3, title: 'Delivery Capacity', weight: '20%', desc: 'Team strength, track record, and ability to execute at quality.' },
                { num: 4, title: 'Inclusion & Access', weight: '15%', desc: 'Intentional design for underserved groups and barrier reduction.' },
                { num: 5, title: 'Value for Money', weight: '10%', desc: 'Strong budget logic and cost effectiveness.' },
                { num: 6, title: 'Scalability & Learning', weight: '10%', desc: 'Potential to replicate, improve, and scale through partnerships.' },
              ].map((item) => (
                <div key={item.num} className="card p-6 sm:p-8 border-l-4 border-primary-600">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="flex gap-4 items-start flex-1">
                      <span className="font-display font-bold text-2xl text-primary-600 flex-shrink-0">{item.num}.</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-neutral-900">{item.title}</h3>
                        <p className="text-neutral-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary-700 uppercase">Weight: {item.weight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestone-Based Disbursement */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Milestone-Based Disbursement
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              Funding is released in stages based on verified progress.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { milestone: 'Milestone 1 – Start-up', desc: 'Contract signed + approved workplan and budget' },
                { milestone: 'Milestone 2 – Delivery', desc: 'Cohort onboarded + training underway (verified)' },
                { milestone: 'Milestone 3 – Completion & Outcomes', desc: 'Completion evidence + outcome reporting submitted' },
              ].map((item, index) => (
                <div key={index} className="card p-6 sm:p-8 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">{item.milestone}</h3>
                    <p className="text-neutral-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card p-6 sm:p-8 bg-blue-50 border-2 border-blue-200">
              <p className="text-neutral-700 italic">
                Note: Milestones may vary by project size and risk level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Reporting */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Outcome Reporting
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              We track outcomes beyond attendance to understand what works and improve future cycles.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">Required Indicators (Typical)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '# participants enrolled and completed',
                  'Competency results / certification outcomes (where applicable)',
                  '# placed into jobs / internships / apprenticeships',
                  '# freelancers winning contracts or earning income',
                  '# entrepreneurs increasing revenue/customers or productivity',
                  'Inclusion metrics (women, youth, PWDs, refugees—where relevant)'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <TrendingUp className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 sm:p-8 bg-primary-50 border-2 border-primary-200">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">Reporting Schedule</h3>
              <ul className="space-y-3">
                {[
                  'Baseline (start)',
                  'Midline (mid-program)',
                  'Endline (completion)',
                  'Follow-up (e.g., 60–90 days post-completion, where feasible)'
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                    <span className="text-neutral-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight">
              How to Apply
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { step: 1, title: 'Complete the application form', desc: '/contact?topic=modern-work-fund-application' },
                { step: 2, title: 'Upload required documents', desc: 'workplan, budget, organization profile, partner letters, delivery timeline (where applicable)' },
                { step: 3, title: 'Submit before the deadline', desc: 'Applications received after the deadline will not be reviewed' },
                { step: 4, title: 'Shortlisted applicants may be contacted', desc: 'for verification or clarification' },
                { step: 5, title: 'Successful applicants receive an award letter', desc: 'and onboarding guidance' },
              ].map((item) => (
                <div key={item.step} className="card p-6 sm:p-8 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6 sm:p-8 bg-blue-50 border-2 border-blue-200 mb-8">
              <p className="text-lg text-neutral-900 mb-2"><span className="font-semibold">Next Deadline:</span> (Insert date)</p>
              <p className="text-lg text-neutral-900"><span className="font-semibold">Results Notification:</span> (Insert timeline)</p>
            </div>

            <div className="text-center">
              <a 
                href="/contact?topic=modern-work-fund-application" 
                className="btn-primary bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
              >
                Apply for a Grant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-10 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FaqItem 
                question="What is the minimum grant size?"
                answer="Organization grants start at $1,000 USD. We have no fixed maximum, but awards are typically sized based on program scope, risk profile, and organizational capacity."
              />
              <FaqItem 
                question="Do you offer scholarships or loans?"
                answer="No. The Fund currently offers organization grants only. We do not provide scholarships to individuals or loans to organizations."
              />
              <FaqItem 
                question="What makes a proposal strong?"
                answer="Demand alignment, clear work outcomes, credible delivery capacity, intentional inclusion design, and a realistic budget with transparent cost-per-participant logic. Strong proposals also include evidence of employer engagement or market linkages."
              />
              <FaqItem 
                question="Can new organizations apply?"
                answer="Yes—if you can demonstrate delivery capability, a strong team, and reliable financial management. We assess organizational readiness and track record, not tenure alone."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Get Support */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Need Support?
            </h2>
            <p className="text-lg sm:text-xl mb-4">
              Preparing your submission or have questions about the fund? Our team is here to help.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg">
                <span className="font-semibold">Email:</span> info@qraftacademy.org
              </p>
              <p className="text-lg">
                <span className="font-semibold">Phone/WhatsApp:</span> (Your number)
              </p>
              <p className="text-lg">
                <span className="font-semibold">Office Hours:</span> (Days/Time)
              </p>
            </div>
            <a 
              href="/contact?topic=modern-work-fund" 
              className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
            >
              Talk to the Fund Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
