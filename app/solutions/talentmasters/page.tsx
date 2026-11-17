import { type Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  AcceleratorVsAnnual,
  AnnualJourney,
  FaqSection,
  FinalCta,
  OfferLadder,
  PartnershipTiers,
  PortfolioSection,
  ProcessSteps,
  faqJsonLd,
} from '@/components/talentmasters/sections';
import { TmPageView, TrackedLink } from '@/components/talentmasters/tracked-link';
import { CheckList, Eyebrow, SectionHeading, TmWordmark, tmBtn } from '@/components/talentmasters/ui';
import {
  deliveryPartnersNote,
  improvementOutcomes,
  serviceAreas,
  specialisedProgrammes,
  workplaceChallenges,
} from '@/lib/talentmasters/content';
import { TM_ROUTES, annualOffer, assessmentHref, freeOffer, tmWhatsappHref } from '@/lib/talentmasters/offers';

const title = 'TalentMasters™ | Corporate Training & Workforce Development in Uganda';
const description =
  'Practical corporate training, leadership development and workplace wellbeing programmes for employees, managers and executives in Uganda and East Africa. Workshops, 90-day programmes and annual workforce partnerships. Start with a free needs assessment.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'corporate training Uganda',
    'employee training Kampala',
    'leadership development Uganda',
    'workforce development Uganda',
    'management training Uganda',
    'team building Uganda',
    'workplace productivity training',
    'employee wellbeing programmes',
    'corporate AI training Uganda',
  ],
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters' },
  openGraph: { title, description, url: 'https://qraftacademy.com/solutions/talentmasters' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TalentMasters™ Workforce Development',
  serviceType: 'Corporate training and workforce development',
  provider: { '@type': 'Organization', name: 'Qraft Academy', url: 'https://qraftacademy.com' },
  areaServed: ['Uganda', 'East Africa'],
  url: 'https://qraftacademy.com/solutions/talentmasters',
  description,
};

const heroPath = [
  { label: 'Free Needs Assessment', note: 'Free' },
  { label: 'Corporate Workshop', note: 'From $850' },
  { label: '90-Day Accelerator', note: '$3,450–$5,150' },
  { label: 'Annual Partnership', note: 'From $1,000 / month' },
];

export default function TalentMastersPage() {
  return (
    <main className="min-h-screen bg-white">
      <TmPageView page="talentmasters_home" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      {/* 1. Hero */}
      <section className="bg-tm-teal py-16 text-white sm:py-20 lg:py-24">
        <div className="container-custom grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-6">
              <TmWordmark dark />
            </div>
            <Eyebrow dark>Modern Workforce Development</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Better Employees. Stronger Managers. More Productive Teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Practical training and workforce development that helps your people work better, lead effectively, and deliver
              measurable workplace improvements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={assessmentHref()}
                event="tm_cta_click"
                params={{ offer: 'free_assessment', location: 'hero' }}
                className={tmBtn.primary}
              >
                {freeOffer.cta}
              </TrackedLink>
              <Link href="#offers" className={tmBtn.secondaryDark}>
                Explore Our Training Programmes
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/75">
              Corporate Workshops • 90-Day Improvement Programmes • Annual Workforce Partnerships
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/15 sm:p-8">
            <p className="mb-5 text-sm font-semibold text-white/80">Start small or commit for the year — your choice.</p>
            <ol className="space-y-3">
              {heroPath.map((step, index) => (
                <li key={step.label} className="flex items-center gap-4 rounded-xl bg-white/5 px-4 py-3">
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? 'bg-tm-coral text-tm-slate' : 'bg-white/15 text-white'}`}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="flex-1 font-semibold">{step.label}</span>
                  <span className="text-sm text-tm-sage">{step.note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 2. Workplace challenges */}
      <section className="bg-tm-alabaster py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The challenge"
            title="Your people are working hard. But could your teams be performing better?"
            intro="Most organizations we speak to recognise at least a few of these:"
          />
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workplaceChallenges.map((item) => (
              <li key={item} className="rounded-xl border border-neutral-200 bg-white px-5 py-4 font-medium text-tm-slate">
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold text-tm-slate">
            These challenges require more than another generic workshop.
          </p>
        </div>
      </section>

      {/* 3. What we help you improve */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading eyebrow="Results we work towards" title="What we help you improve" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {improvementOutcomes.map((item) => (
              <div key={item.title} className="rounded-2xl border-t-4 border-tm-sage bg-tm-alabaster p-6">
                <h3 className="font-display text-lg font-bold text-tm-slate">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service areas */}
      <section id="services" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading eyebrow="What we do" title="Our four service areas" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {serviceAreas.map((area, index) => (
              <article key={area.title} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-tm-coral-dark">Area {index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-tm-slate">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{area.text}</p>
                <p className="mt-4 flex flex-wrap gap-2">
                  {area.examples.map((example) => (
                    <span key={example} className="rounded-full bg-tm-teal-light px-3 py-1 text-xs font-semibold text-tm-teal">
                      {example}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-neutral-600">{deliveryPartnersNote}</p>
        </div>
      </section>

      {/* 5. How we work */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How we work"
            title="Assess → Develop → Apply → Measure"
            intro="Training only matters if people use it at work. Every programme follows the same four steps."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* 6. Choose your offer */}
      <section id="offers" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Programmes & pricing"
            title="Choose the right starting point"
            intro="Start with a free assessment, solve one problem with a workshop, run a focused 90-day programme, or partner with us for the year."
          />
          <OfferLadder />
          <div className="mx-auto mt-10 max-w-4xl">
            <p className="mb-3 text-center text-sm font-semibold text-tm-slate">90-day programme or annual partnership?</p>
            <AcceleratorVsAnnual />
          </div>
        </div>
      </section>

      {/* 7. Annual workforce partnership */}
      <section id="annual" className="scroll-mt-24 bg-tm-teal py-16 text-white md:py-24">
        <div className="container-custom">
          <SectionHeading
            dark
            eyebrow="Our annual partnership"
            title={annualOffer.name}
            intro="One year. Four development pillars. Continuous workplace improvement — with separate learning paths for employees, managers and executives."
          />
          <AnnualJourney />
        </div>
      </section>
      <section className="bg-tm-alabaster py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading title="Annual partnership pricing" intro="Paid monthly. Committed for 12 months. Scope defined up front." />
          <PartnershipTiers location="tm_home_annual" />
          <p className="mt-8 text-center">
            <Link href={TM_ROUTES.annual} className="inline-flex items-center gap-1 font-semibold text-tm-teal hover:underline">
              See the full four-quarter programme <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* 8. Specialised programmes */}
      <section id="specialised" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Specialised programmes"
            title="Focused programmes for specific needs"
            intro="Available on their own or alongside a workshop, 90-day programme or annual partnership. Priced by quotation."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specialisedProgrammes.map((item) => {
              const body = (
                <>
                  <h3 className="font-display text-lg font-bold text-tm-slate">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                  {'href' in item ? (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tm-teal">
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              );
              return 'href' in item ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-tm-teal"
                >
                  {body}
                </Link>
              ) : (
                <div key={item.title} className="rounded-2xl border border-neutral-200 p-6">
                  {body}
                </div>
              );
            })}
          </div>

          {/* Kept for existing links from the CourseMasters™ page; this service belongs to CourseMasters. */}
          <aside
            id="coursemasters-clinic"
            className="mt-10 scroll-mt-24 rounded-2xl border border-neutral-200 bg-tm-alabaster p-6 sm:flex sm:items-center sm:gap-8 sm:p-8"
          >
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">From CourseMasters™</p>
              <h3 className="mt-1 font-display text-lg font-bold text-tm-slate">Institutional CourseMasters™ Clinic</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Need to build digital courses or an LMS in-house? The 3–5 day CourseMasters™ Clinic ($4,300 per organization)
                equips your HR, L&amp;D and programme teams to design and build digital learning. Digital course and LMS work
                is handled by CourseMasters™.
              </p>
              <CheckList
                items={['Team-based course development', 'Tools, templates & checklists', 'Moodle/course-authoring workflow']}
                className="mt-3"
              />
            </div>
            <Link href="/coursemasters" className={`${tmBtn.secondaryLight} mt-6 sm:mt-0`}>
              Visit CourseMasters™
            </Link>
          </aside>
        </div>
      </section>

      {/* 9. Portfolio */}
      <PortfolioSection />

      {/* 10. FAQ */}
      <FaqSection />

      {/* 11. Final conversion */}
      <div id="diagnostic" className="scroll-mt-24">
        <FinalCta location="tm_home_final" />
      </div>

      {/* Mobile quick-contact bar */}
      <div className="sticky bottom-0 z-30 flex gap-2 border-t border-neutral-200 bg-white p-3 sm:hidden">
        <TrackedLink
          href={assessmentHref()}
          event="tm_cta_click"
          params={{ offer: 'free_assessment', location: 'mobile_bar' }}
          className={`${tmBtn.primary} flex-1 px-3 py-3 text-sm`}
        >
          Free Needs Assessment
        </TrackedLink>
        <TrackedLink
          href={tmWhatsappHref()}
          external
          event="tm_whatsapp_click"
          params={{ location: 'mobile_bar' }}
          className="inline-flex items-center justify-center rounded-xl border-2 border-tm-teal px-4 text-tm-teal"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Chat on WhatsApp</span>
        </TrackedLink>
      </div>
    </main>
  );
}
