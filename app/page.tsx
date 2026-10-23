import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import ProposalRequestForm from '@/components/forms/proposal-request-form'
import { proposalHrefFor } from '@/lib/proposal'

export const metadata: Metadata = {
  title: "Qraft Academy | Digital Learning Infrastructure & Retained Corporate Capability",
  description: "Production-grade e-learning systems for development partners and turnkey, retained Learning & Development departments for growing enterprises across East Africa.",
  openGraph: {
    title: "Qraft Academy | Digital Learning Infrastructure & Retained Corporate Capability",
    description: "CourseMasters™ digital learning infrastructure and TalentMasters™ retained L&D-as-a-Service for institutions and enterprises across East Africa.",
    url: "https://qraftacademy.com",
    siteName: "Qraft Academy",
    type: "website",
  },
};

const arrowIcon = (
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const stats = [
  { value: '15+', label: 'Countries Deployed' },
  { value: 'SCORM / LMS', label: 'Production-Grade Deployments' },
  { value: '100%', label: 'Compliance & MEAL-Auditable' },
];

const deployments = [
  {
    title: 'D4GW Understanding Digital Rights Course',
    partner: 'Enabel — Belgian Development Agency',
    img: '/images/Understanding Digital Rights D4GW.png',
  },
  {
    title: 'Business and Human Rights E-Learning Course',
    partner: 'Enabel · EU · Ministry of Gender, Labour & Economic Development',
    img: '/images/WhatsApp%20Image%202025-08-04%20at%2016.26.03_2aeab8e2.jpg',
  },
  {
    title: 'Decent Work And Social Protection',
    partner: 'Enabel — Belgian Development Agency',
    img: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1782317227/DWSP_COVER_11zon_1_bg4v9r.png',
  },
];

type Offer = {
  id: 'coursemasters' | 'talentmasters';
  name: string;
  category: string;
  tagline: string;
  audience: string;
  value: string;
  deliverables: string[];
  cta: string;
  accent: { badge: string; icon: string; button: string; border: string };
  learnMore?: { href: string; label: string };
};

const offers: Offer[] = [
  {
    id: 'coursemasters',
    name: 'CourseMasters™',
    category: 'Digital Learning Infrastructure',
    tagline: 'Turnkey E-Learning, SCORM Design & Institutional LMS Architecture',
    audience: 'INGOs, USAID / Enabel / GIZ Implementing Partners, Financial Institutions, Industry Bodies',
    value: 'Convert static technical manuals, policies, and donor curricula into interactive, mobile-responsive, and auditable digital learning systems.',
    deliverables: [
      'Pedagogical curriculum architecture & micro-learning pathways',
      'Interactive SCORM / xAPI modules with scenario assessments & voiceovers',
      'Turnkey lightweight LMS deployment with real-time MEAL analytics dashboards',
      'Offline-ready and low-bandwidth mobile optimization',
    ],
    cta: 'Inquire About CourseMasters',
    accent: {
      badge: 'bg-primary-100 text-primary-700 border-primary-200',
      icon: 'text-primary-600',
      button: 'bg-primary-600 hover:bg-primary-700',
      border: 'border-primary-200',
    },
    learnMore: { href: '/coursemasters', label: 'View CourseMasters™ in detail' },
  },
  {
    id: 'talentmasters',
    name: 'TalentMasters™',
    category: 'Retained L&D-as-a-Service',
    tagline: 'Your Turnkey Outsourced Training & Capability Department',
    audience: 'Mid-Market Companies (50–300 staff), Regional Enterprises, Fast-Growing Firms',
    value: 'Continuous, predictable workforce upskilling for less than the cost of a single junior HR hire.',
    deliverables: [
      'Quarterly Training Needs Assessment (TNA) tied to operational KPIs',
      'Automated 30-60-90 day digital onboarding workflows for new hires',
      'Ready-Made Corporate Clinics (Power BI / Analytics, Applied Workplace AI, Operational Execution)',
      'Custom Needs-Based Programs built to resolve diagnosed departmental bottlenecks',
    ],
    cta: 'Inquire About TalentMasters Retainers',
    accent: {
      badge: 'bg-accent-100 text-accent-700 border-accent-200',
      icon: 'text-accent-600',
      button: 'bg-accent-600 hover:bg-accent-700',
      border: 'border-accent-200',
    },
    learnMore: { href: '/solutions/talentmasters', label: 'View TalentMasters™ in detail' },
  },
];

const comparison = [
  {
    dimension: 'Delivery',
    traditional: '1–2 day hotel-based training events',
    qraft: 'Digital learning infrastructure deployed to your workforce',
  },
  {
    dimension: 'Materials',
    traditional: 'Paper slides and handouts, discarded after the event',
    qraft: 'Reusable SCORM modules and operational playbooks you own',
  },
  {
    dimension: 'Evidence',
    traditional: 'Subjective end-of-session feedback forms',
    qraft: 'MEAL-auditable, objective completion and assessment data',
  },
  {
    dimension: 'Retention',
    traditional: 'Rapid behavioral decay once the event ends',
    qraft: 'Retained skill reinforcement through ongoing programs',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* A. Hero */}
        <div className="relative w-full h-[100svh] min-h-[600px]">
          <Image
            alt="Qraft Academy Hero"
            className="object-cover"
            fill
            priority
            src="/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center">
            <div className="text-center text-white w-full max-w-6xl px-4 sm:px-6 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 md:mb-8 animate-slide-up leading-tight">
                Digital Learning Infrastructure &amp; Retained Corporate Capability
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                We engineer production-grade e-learning systems for development partners and provide turnkey, retained Learning &amp; Development departments for growing enterprises across East Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center max-w-3xl mx-auto">
                <Link href="#rfp" className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold group flex items-center justify-center gap-2">
                  Request Institutional Proposal
                  {arrowIcon}
                </Link>
                <Link href="#solutions" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-neutral-900 text-base sm:text-lg font-bold rounded-xl hover:bg-white/90 transition-all duration-300 active:scale-95 sm:hover:scale-105 flex items-center justify-center">
                  Explore Our 2 Core Solutions
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      {/* B. Social Proof & Trust Bar */}
      <section id="partners" className="py-14 sm:py-20 bg-white border-b border-neutral-100 scroll-mt-24">
        <div className="container-custom px-4">
          <p className="text-center text-sm sm:text-base font-bold uppercase tracking-widest text-neutral-500 mb-10 max-w-3xl mx-auto">
            Trusted by Bilateral Development Partners, Regulated Institutions &amp; Regional Enterprises
          </p>
            {(() => {
              type Logo = { src: string; alt: string; fill?: boolean; zoom?: boolean; href?: string };
              const row1: Logo[] = [
                { src: "https://www.enabel.be/app/uploads/2023/04/Enabel_Logo_Color_RGB-1.jpg", alt: "Enabel", fill: true },
                { src: "https://res.cloudinary.com/dwa3soopc/image/upload/c_crop,x_270,y_570,w_1000,h_470/v1741593610/WhatsApp_Image_2025-02-03_at_18.40.33_ogqttb.jpg", alt: "Future of Work Forum and Consortium", href: "/future-of-work-forum" },
                { src: "https://innovationvillage.africa/wp-content/uploads/2024/05/Innovation-Village-New-Logo-2048x844-1.png", alt: "Innovation Village" },
                { src: "https://cdn.prod.website-files.com/62074f85df1c01befa19b0b6/6208fa86b3a3550aced179a4_Element%201logo-web-.png", alt: "Partner 3" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbPbci_KDAXm5-yrAq1yorcbhGlv6Lp8CQcYOwm8i6A&s=10", alt: "Partner 4", fill: true, zoom: true },
              ];
              const row2: Logo[] = [
                { src: "https://mbale.ucu.ac.ug/wp-content/uploads/2026/05/logo-scaled.png", alt: "Uganda Christian University", fill: true },
                { src: "https://media.licdn.com/dms/image/v2/D4D0BAQG2FIk0qG6YBg/company-logo_200_200/company-logo_200_200/0/1737731218388?e=2147483647&v=beta&t=-f2cdT64fP4ODIU3aIs8li-qqwTe-FfrELOk_PODJx0", alt: "Partner 6", fill: true, zoom: true },
                { src: "https://res.cloudinary.com/dwa3soopc/image/upload/v1781785206/frankmar_vknyzg.jpg", alt: "Frankmar", fill: true },
                { src: "https://res.cloudinary.com/dwa3soopc/image/upload/v1781785938/chariot_leadership_hersrs.jpg", alt: "Chariot Leadership", fill: true, zoom: true },
              ];
              const logoCardClass = "flex-shrink-0 w-28 h-14 sm:w-36 sm:h-16 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 hover:border-primary-200 transition-all duration-200 overflow-hidden";
              const LogoCard = ({ logo }: { logo: Logo }) => {
                const img = (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-full h-full object-contain ${logo.fill ? "" : "p-2 sm:p-3"} ${logo.zoom ? "scale-150" : ""}`}
                  />
                );
                return logo.href ? (
                  <Link href={logo.href} title={logo.alt} className={`${logoCardClass} cursor-pointer`}>
                    {img}
                  </Link>
                ) : (
                  <div className={logoCardClass}>{img}</div>
                );
              };
              return (
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex items-center gap-6 sm:gap-10 w-max" style={{ animation: "marquee 24s linear infinite" }}>
                      {[...row1, ...row1].map((logo, i) => <LogoCard key={i} logo={logo} />)}
                    </div>
                  </div>
                  <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex items-center gap-6 sm:gap-10 w-max" style={{ animation: "marquee 24s linear infinite reverse" }}>
                      {[...row2, ...row2].map((logo, i) => <LogoCard key={i} logo={logo} />)}
                    </div>
                  </div>
                </div>
              );
            })()}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary-600 mb-2">{stat.value}</div>
                <p className="text-sm sm:text-base font-semibold text-neutral-700">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 sm:mt-20">
            <h2 className="text-center text-xl sm:text-2xl font-display font-bold text-neutral-900 mb-8">
              Recent Institutional Deployments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deployments.map((item) => (
                <a
                  key={item.title}
                  href="https://ulearn.enabel.be/"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden bg-neutral-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-neutral-900 text-base mb-1 leading-snug">{item.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.partner}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C. Core Solutions */}
      <section id="solutions" className="section-padding bg-gradient-to-b from-neutral-50 to-white scroll-mt-24">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-xs uppercase tracking-widest mb-5 border border-primary-200">
              Our 2 Core Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 leading-tight">
              Learning Infrastructure. Retained Capability.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Two institutional offers, each scoped to your mandate, procurement process, and reporting requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {offers.map((offer) => (
              <article
                id={offer.id}
                key={offer.id}
                className={`card p-8 sm:p-10 flex flex-col border-2 ${offer.accent.border} scroll-mt-24`}
              >
                <div className={`self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-5 ${offer.accent.badge}`}>
                  {offer.category}
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-2">{offer.name}</h3>
                <p className="text-lg font-semibold text-neutral-800 mb-6 leading-snug">{offer.tagline}</p>

                <dl className="space-y-4 mb-6">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Built For</dt>
                    <dd className="text-neutral-700 text-sm sm:text-base">{offer.audience}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Core Value</dt>
                    <dd className="text-neutral-700 text-sm sm:text-base">{offer.value}</dd>
                  </div>
                </dl>

                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Key Deliverables</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${offer.accent.icon}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-auto">
                  <Link
                    href={proposalHrefFor(offer.id)}
                    className={`group inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 ${offer.accent.button}`}
                  >
                    {offer.cta}
                    {arrowIcon}
                  </Link>
                  {offer.learnMore ? (
                    <Link href={offer.learnMore.href} className={`text-sm font-semibold hover:underline ${offer.accent.icon}`}>
                      {offer.learnMore.label}
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* D. Why Partner With Qraft Academy */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Why Partner With Qraft Academy
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              Training events fade. Learning infrastructure compounds.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 overflow-hidden">
            <div className="hidden md:grid grid-cols-[160px_1fr_1fr] bg-white/5 border-b border-white/10">
              <div className="p-5" />
              <div className="p-5 text-sm font-bold uppercase tracking-widest text-neutral-400">Traditional Trainers</div>
              <div className="p-5 text-sm font-bold uppercase tracking-widest text-accent-300">Qraft Academy</div>
            </div>
            {comparison.map((row, index) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] ${index < comparison.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <div className="px-5 pt-5 md:p-5 font-display font-bold text-white">{row.dimension}</div>
                <div className="px-5 pt-3 md:p-5 flex items-start gap-3 text-neutral-400 text-sm sm:text-base">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><span className="md:hidden font-semibold text-neutral-300">Traditional: </span>{row.traditional}</span>
                </div>
                <div className="px-5 pt-3 pb-5 md:p-5 flex items-start gap-3 text-white text-sm sm:text-base md:bg-white/5">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><span className="md:hidden font-semibold text-accent-300">Qraft: </span>{row.qraft}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Institutional Lead Capture / RFP */}
      <section id="rfp" className="section-padding bg-gradient-to-b from-primary-50 to-white scroll-mt-24">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Request Institutional Proposal
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg">
                Share your organization, solution of interest, and project scope. We respond with a structured proposal or diagnostic aligned to your procurement requirements.
              </p>
            </div>
            <div className="card p-6 sm:p-8 md:p-10">
              <ProposalRequestForm />
            </div>
            <p className="text-center text-sm text-neutral-500 mt-6">
              Prefer email? Write to{' '}
              <a href="mailto:drew@qraftacademy.com" className="text-primary-600 font-semibold hover:underline">drew@qraftacademy.com</a>
              {' '}· <Link href="/contact" className="text-primary-600 font-semibold hover:underline">Other contact options</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
