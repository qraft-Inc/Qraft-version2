import { type Metadata } from 'next';
import { AcceleratorVsAnnual, AnnualJourney, FinalCta, PartnershipTiers, SubHero } from '@/components/talentmasters/sections';
import { TmPageView, TrackedLink } from '@/components/talentmasters/tracked-link';
import { SectionHeading, tmBtn } from '@/components/talentmasters/ui';
import { annualOffer, assessmentHref, learningPaths } from '@/lib/talentmasters/offers';

const title = 'Annual Workforce Development Partnership | TalentMasters™';
const description =
  'A 12-month corporate training and workforce development partnership in Uganda: Lead Yourself, Lead Others, Work Together, Work Smarter. Foundation from $1,000 per month.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['workforce development Uganda', 'leadership development Uganda', 'corporate training Uganda', 'employee wellbeing programmes'],
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters/annual-workforce-programme' },
  openGraph: { title, description, url: 'https://qraftacademy.com/solutions/talentmasters/annual-workforce-programme' },
};

export default function AnnualProgrammePage() {
  return (
    <main className="min-h-screen bg-white">
      <TmPageView page="talentmasters_annual" />

      <SubHero
        eyebrow={annualOffer.name}
        title={annualOffer.tagline}
        intro="A 12-month workforce development partnership — your outsourced training and performance team, without the cost of building a full in-house training department."
      >
        <TrackedLink
          href={assessmentHref('annual', 'annual')}
          event="tm_annual_enquiry"
          params={{ location: 'annual_hero' }}
          className={tmBtn.primary}
        >
          {annualOffer.secondaryCta}
        </TrackedLink>
        <a href="#pricing" className={tmBtn.secondaryDark}>
          See Partnership Pricing
        </a>
      </SubHero>

      <section className="bg-tm-teal py-16 text-white md:py-20">
        <div className="container-custom">
          <SectionHeading dark eyebrow="The four quarters" title="Lead Yourself → Lead Others → Work Together → Work Smarter" />
          <AnnualJourney detailed />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="Learning paths" title="The right content for each level" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {learningPaths.map((path) => (
              <div key={path.audience} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-display text-xl font-bold text-tm-slate">{path.audience}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{path.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="Pricing" title="Two partnership levels" intro="Billed monthly or quarterly on a 12-month agreement." />
          <PartnershipTiers location="annual_page" />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="How this differs from the 90-Day Accelerator" />
          <AcceleratorVsAnnual />
        </div>
      </section>

      <FinalCta
        location="annual_final"
        title="Planning next year’s training budget?"
        text="Tell us about your workforce priorities and we’ll propose a 12-month plan with a clear scope and price."
      />
    </main>
  );
}
