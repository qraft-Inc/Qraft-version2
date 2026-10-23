import { type Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle } from 'lucide-react';
import DiagnosticRequestForm from '@/components/forms/diagnostic-request-form';
import { PARTNERSHIP_HREF } from '@/lib/proposal';

export const metadata: Metadata = {
  title: { absolute: 'TalentMasters™ | Retained L&D-as-a-Service for Growing Enterprises' },
  description:
    'Outsourced Learning & Development department for mid-market businesses in Uganda and East Africa, delivered with TeachNations Uganda, Networth Consult, AniScholar, and Qraft Academy’s Tech Talent Studio. 90-day operational audits, monthly execution sprints, and onboarding engines from UGX 3.5M/month.',
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters' },
  openGraph: {
    title: 'TalentMasters™ | Retained L&D-as-a-Service for Growing Enterprises',
    description:
      'Your turnkey modern L&D department: 90-day operational leak audits, 30-day onboarding engines, and monthly execution sprints from UGX 3.5M/month.',
    url: 'https://qraftacademy.com/solutions/talentmasters',
  },
};

type CostColumn = {
  title: string;
  items: string[];
  total: string;
  highlight?: boolean;
};

const costColumns: CostColumn[] = [
  {
    title: 'The In-House Trap',
    items: [
      'L&D Director: UGX 8M – 12M/mo',
      'Content Designer: UGX 4M – 6M/mo',
      'Training Officer: UGX 2M – 4M/mo',
      'Payroll Tax, NSSF, Medical & Gear',
    ],
    total: 'UGX 14M – 22M+ every month',
  },
  {
    title: 'The Traditional Seminar Drain',
    items: [
      'UGX 10M – 20M per weekend retreat',
      'Huge venue & per diem bills',
      '80%+ knowledge decay in 30 days',
      'Zero ongoing reinforcement',
    ],
    total: 'High cost, near-zero ROI',
  },
  {
    title: 'The TalentMasters™ Retainer',
    items: [
      'Predictable UGX 3.5M / month',
      'Zero payroll tax or overhead',
      'Continuous monthly reinforcement',
      'Permanent digital onboarding assets',
    ],
    total: '1/4 the cost of a full in-house L&D team',
    highlight: true,
  },
];

type Pillar = {
  pillar: string;
  partner: string;
  ledBy?: boolean;
  focus: string;
  text: string;
  trackRecord?: string;
  allianceNote?: string;
  border: string;
  color: string;
};

const consortium: Pillar[] = [
  {
    pillar: 'Leadership, Execution & Mindset',
    partner: 'TeachNations Uganda',
    focus: 'Mindset, Personal Mastery & Organizational Effectiveness',
    text: 'Personal mastery, supervisory coaching, organizational effectiveness, and building disciplined “10X Teams.”',
    border: 'border-accent-400',
    color: 'text-accent-700',
  },
  {
    pillar: 'Workplace Health, Safety & Immersion',
    partner: 'Networth Consult',
    focus: 'Workplace Safety, OHS/ESG Safeguards & Psychosocial Wellbeing',
    text: 'Occupational Health & Safety (OHS), psychosocial wellness, ESG safeguards, and signature off-site tracks: Skilling In The Wild™ and Team Building In The Wild™.',
    border: 'border-green-500',
    color: 'text-green-700',
  },
  {
    pillar: 'Employability & Transition Systems',
    partner: 'AniScholar',
    focus: 'Institutional Transition, Employability & Workforce Readiness',
    text: 'Institutional work-readiness, graduate onboarding, professional ethics, and foundational career readiness.',
    border: 'border-primary-500',
    color: 'text-primary-700',
  },
  {
    pillar: 'Tech Bootcamps, Apprenticeships & Placements',
    partner: 'Qraft Academy',
    ledBy: true,
    focus: 'Tech Talent Studio',
    text: 'Custom Hire-Train-Deploy (HTD) pipelines, intensive technical bootcamps, software development, data analytics, and pre-vetted apprentice placements for tech companies and digital teams.',
    trackRecord: 'Trusted by enterprise IT leaders like Spidd Africa to source, train, and place job-ready technical talent.',
    allianceNote: 'Currently led by Qraft Academy — actively open to ecosystem co-delivery and consortium partners.',
    border: 'border-amber-500',
    color: 'text-amber-700',
  },
];

const deliverables = [
  {
    name: 'The 90-Day Operational Leak Audit™',
    formerly: 'Quarterly TNA',
    text: 'We audit your workflows every quarter to find where managers are bottlenecked, where staff are losing time, and where safety risks and skill deficits sit. No generic slide decks; only high-priority operational fixes.',
  },
  {
    name: 'The 30-Day Zero-Drag Onboarding Engine™',
    formerly: 'Modern Onboarding',
    text: 'We map and build an automated, self-paced digital onboarding journey for your core business roles so new staff become profitable contributors in weeks, not months.',
  },
  {
    name: 'The Monthly 10X Team Execution Sprint™',
    formerly: 'Applied Capability Clinics',
    text: 'One 3-hour, laptop-open intensive workshop each month. Staff don’t listen to lectures — they build live spreadsheets, automate reports, and practice management simulations.',
  },
  {
    name: 'The Future-Proof Digital Fluency Toolkit™',
    formerly: 'Digital Upskilling',
    text: 'Ready-made operational upgrades: Power BI dashboards, Applied Workplace AI, prompt engineering, and modern delegation systems.',
  },
  {
    name: 'The C-Suite ROI & Competency Scorecard™',
    formerly: 'Executive Reports',
    text: 'Clear, executive-level summaries sent directly to the MD and HR Head tracking employee participation, skill mastery benchmarks, and operational time saved.',
  },
];

const portfolio = [
  {
    sector: 'Enterprise Technology & Infrastructure',
    client: 'Spidd Africa',
    program: 'Technical Talent Acceleration, Custom Apprenticeships & Job Placements.',
  },
  {
    sector: 'Enterprise Technology & Infrastructure',
    client: 'Neptune Financial Software (U) Ltd',
    program: 'Building 10X Teams through Better Leadership, Systems, and Flawless Execution.',
  },
  {
    sector: 'Diplomatic & Sovereign Missions',
    client: 'Embassy of Ireland in Uganda',
    program: 'Executive Track: Personal & Professional Mastery — Leading Yourself First.',
  },
  {
    sector: 'Applied Research & Academia',
    client: 'Centre for Research in Energy and Energy Conservation (CREEC - Makerere University)',
    program: 'Organizational Effectiveness & Team Synergy.',
  },
  {
    sector: 'International Non-Profit / INGOs',
    client: 'Forgotten Children Worldwide (FCW Uganda)',
    program: 'Frontline Resilience & Holistic Employee Wellbeing.',
  },
  {
    sector: 'Operations & Frontline Workforce',
    client: 'Splendor of the Home',
    program: 'Modern Sales, Innovation & Work-Readiness for Frontline Teams.',
  },
  {
    sector: 'Employability & Ecosystems',
    client: 'AniScholar',
    program: 'Institutional Transition & Workplace Employability Pipelines.',
  },
];

type Tier = {
  name: string;
  price: string;
  target: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Foundation Retainer',
    price: 'UGX 3.5M',
    target: '30–80 staff',
    features: [
      '1 Monthly 10X Execution Sprint (up to 20 pax)',
      '1 Core Role 30-Day Zero-Drag Onboarding Engine',
      '1 Quarterly 90-Day Operational Leak Audit',
      'Monthly & Quarterly C-Suite Scorecards',
    ],
  },
  {
    name: 'Enterprise Accelerator',
    price: 'UGX 6.5M – 7.5M',
    target: '80–250+ staff',
    features: [
      '2 Monthly Execution Sprints (across tech, leadership, or OHS tracks)',
      'Multi-Department Onboarding Tracks',
      'Quarterly Audits + Dedicated Line Manager Coaching',
      'Board-Ready ROI Reporting',
    ],
    featured: true,
  },
];

const courseMastersClinicItems = [
  'Team-based course development',
  'Tools, templates & checklists',
  'Moodle/course-authoring workflow',
  'Prototype development',
  'Optional mentorship',
];

export default function TalentMastersPage() {
  return (
    <main className="min-h-screen">
      {/* A. Hero */}
      <section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-br from-neutral-950 via-accent-900 to-primary-900 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-xs sm:text-sm uppercase tracking-widest mb-6 border border-white/20">
              Retained L&amp;D-as-a-Service | A Multi-Disciplinary Capability Consortium
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Your Turnkey Modern L&amp;D Department For Less Than The Cost of a Single Junior Hire
            </h1>
            <p className="text-lg sm:text-xl mb-10 leading-relaxed text-white/85 max-w-3xl mx-auto">
              Delivered in joint capability partnership with <strong className="text-white">TeachNations Uganda</strong>,{' '}
              <strong className="text-white">Networth Consult</strong>, <strong className="text-white">AniScholar</strong>, and{' '}
              <strong className="text-white">Qraft Academy&apos;s Tech Talent Studio</strong>. We diagnose operational leaks, automate onboarding, upskill teams, and deploy pre-vetted tech apprentices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#diagnostic" className="px-8 py-4 rounded-xl bg-white text-accent-800 hover:bg-white/90 text-base sm:text-lg font-bold shadow-lg transition-all duration-200">
                Schedule a 30-Minute Capability Diagnostic
              </Link>
              <Link href="#consortium" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Explore Our 4 Capability Pillars
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Retainers from <strong className="text-white">UGX 3.5M / month</strong>
            </p>
          </div>
        </div>
      </section>

      {/* B. Consortium Delivery Pillars */}
      <section id="consortium" className="section-padding bg-neutral-50 scroll-mt-24">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs uppercase tracking-widest mb-5 border border-accent-200">
              The Delivery Consortium
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 leading-tight">
              4 Capability Pillars. One Retainer.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Specialist partners and our own Tech Talent Studio, covering the complete workforce capability spectrum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consortium.map((item, index) => (
              <article key={item.pillar} className={`card p-7 sm:p-8 flex flex-col border-t-4 ${item.border}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Pillar {index + 1}</p>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 leading-snug">{item.pillar}</h3>
                <p className={`text-sm font-semibold mb-4 ${item.color}`}>
                  {item.ledBy ? 'Led by' : 'with'} {item.partner}
                </p>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
                  {item.trackRecord ? <span className="font-semibold text-neutral-900">Mandate: </span> : null}
                  {item.text}
                </p>
                {item.trackRecord ? (
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
                    <span className="font-semibold text-neutral-900">Enterprise Track Record: </span>
                    {item.trackRecord}
                  </p>
                ) : null}
                {item.allianceNote ? (
                  <p className="text-sm italic text-amber-800 bg-amber-50 border border-amber-100 rounded-xl p-3 mb-4">
                    {item.allianceNote}
                  </p>
                ) : null}
                <p className="mt-auto text-xs text-neutral-500 border-t border-neutral-100 pt-4">
                  <span className="font-semibold text-neutral-700">{item.partner}:</span> {item.focus}
                </p>
              </article>
            ))}
          </div>

          {/* C. Open Consortium Partnership Callout */}
          <aside className="mt-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-primary-900 text-white p-8 sm:p-10 md:flex md:items-center md:gap-10">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                Built on Collaborative Capability &amp; Strategic Alliances
              </h3>
              <p className="text-white/80 leading-relaxed">
                TalentMasters™ is founded on the belief that modern workforce development requires deep, specialized expertise. While our technical talent studio delivers bespoke bootcamps and placement pipelines directly, we welcome strategic co-delivery alliances with tech hubs, donor programs, and institutional partners.
              </p>
            </div>
            <Link
              href={PARTNERSHIP_HREF}
              className="mt-6 md:mt-0 inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-xl bg-white text-primary-800 hover:bg-white/90 font-semibold transition-colors"
            >
              Partner With Us as a Co-Delivery Ally →
            </Link>
          </aside>
        </div>
      </section>

      {/* Value-for-Money Math */}
      <section id="roi" className="section-padding bg-white scroll-mt-24">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs uppercase tracking-widest mb-5 border border-accent-200">
              The Value-for-Money Math
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight">
              The Unit Economics of Workforce Capability
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {costColumns.map((column) => (
              <div
                key={column.title}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col ${
                  column.highlight
                    ? 'bg-gradient-to-br from-accent-700 to-primary-800 text-white shadow-xl lg:scale-[1.03]'
                    : 'card'
                }`}
              >
                <h3 className={`text-xl font-display font-bold mb-6 ${column.highlight ? 'text-white' : 'text-neutral-900'}`}>
                  {column.title}
                </h3>
                <ul className="space-y-4 flex-1 mb-6">
                  {column.items.map((item) => (
                    <li key={item} className={`flex items-start gap-3 ${column.highlight ? 'text-white/90' : 'text-neutral-700'}`}>
                      {column.highlight ? (
                        <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className={`rounded-xl p-4 font-bold ${
                    column.highlight ? 'bg-white/15 text-white' : 'bg-red-50 border border-red-100 text-red-800'
                  }`}
                >
                  Total: {column.total}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 max-w-4xl mx-auto text-center rounded-2xl border-2 border-accent-200 bg-accent-50 p-6 sm:p-8 text-lg sm:text-xl font-semibold text-neutral-900 leading-relaxed">
            You save over UGX 100M annually while getting an entire multidisciplinary team of curriculum architects, data experts, and executive facilitators on tap.
          </blockquote>
        </div>
      </section>

      {/* The 5 M.A.G.I.C. Deliverables */}
      <section id="how-it-works" className="section-padding bg-neutral-950 scroll-mt-24">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
              What&apos;s Included in Your Retainer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              5 Concrete Assets, Delivered Every Quarter
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {deliverables.map((item, index) => (
              <li key={item.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center mb-5">
                  <span className="text-accent-300 font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1 leading-snug">{item.name}</h3>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Formerly {item.formerly}</p>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* D. Track Record & Social Proof */}
      <section id="track-record" className="section-padding bg-white scroll-mt-24">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-xs uppercase tracking-widest mb-5 border border-primary-200">
              Verified Institutional Case Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 leading-tight">
              Real-World Validation Across Every Sector
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <article key={item.client} className="card p-6 sm:p-7 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-3">{item.sector}</p>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-2 leading-snug">{item.client}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.program}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E. Retainer Tiers */}
      <section id="pricing" className="section-padding bg-gradient-to-b from-neutral-50 to-white scroll-mt-24">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 leading-tight">
              Simple, Transparent Retainers
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">Two tiers. One predictable monthly fee. No payroll overhead.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`card p-8 sm:p-10 flex flex-col border-2 ${tier.featured ? 'border-accent-400 shadow-xl' : 'border-neutral-200'}`}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">For {tier.target}</p>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">{tier.name}</h3>
                <p className="mb-6">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-neutral-900">{tier.price}</span>
                  <span className="text-neutral-500"> / month</span>
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base">
                      <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#diagnostic"
                  className={`inline-flex justify-center px-6 py-3 rounded-xl font-semibold transition-colors ${
                    tier.featured
                      ? 'bg-accent-600 hover:bg-accent-700 text-white'
                      : 'bg-white border-2 border-accent-600 text-accent-700 hover:bg-accent-50'
                  }`}
                >
                  Start with a Free Diagnostic
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-5 sm:p-6 text-neutral-800">
              <span className="block font-bold text-amber-800 mb-1">Custom Technical Pipeline Add-On</span>
              Dedicated apprentice recruiting, custom bootcamps, and cohort placements — priced per project or cohort.
            </p>
            <p className="rounded-2xl border-2 border-dashed border-green-300 bg-green-50 p-5 sm:p-6 text-neutral-800">
              <span className="block font-bold text-green-800 mb-1">Optional Add-On: In The Wild™</span>
              <strong>Team Building &amp; Skilling In The Wild™</strong> retreats, delivered in partnership with Networth Consult.
            </p>
          </div>

          {/* Institutional CourseMasters™ Clinic (moved from the CourseMasters™ page) */}
          <article id="coursemasters-clinic" className="mt-6 max-w-5xl mx-auto card p-8 sm:p-10 scroll-mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">Add-On Clinic · Build In-House Capability</p>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">Institutional CourseMasters™ Clinic</h3>
              <p className="text-neutral-600 mb-5">
                Equip your HR, L&amp;D, programme, communications, academic and technical teams to design and build digital learning in-house.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {courseMastersClinicItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-accent-50 border border-accent-100 p-6 text-center">
              <p className="text-2xl font-display font-bold text-accent-700">UGX 15M</p>
              <p className="text-sm text-neutral-600 mb-1">per organization</p>
              <p className="text-sm text-neutral-500 mb-5">3–5 day clinic</p>
              <Link href="#diagnostic" className="inline-flex w-full justify-center px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold transition-colors">
                Inquire for Teams
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* F. Diagnostic Call Booking */}
      <section id="diagnostic" className="section-padding bg-gradient-to-b from-accent-50 to-white scroll-mt-24">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Request a 30-Minute Modern Workforce Capability Audit (MWCA)
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg">
                Let&apos;s identify where manual spreadsheets, onboarding lag, or supervisory bottlenecks are slowing your organization down.
              </p>
            </div>
            <div className="card p-6 sm:p-8 md:p-10">
              <DiagnosticRequestForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
