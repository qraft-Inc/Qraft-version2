import { type Metadata } from 'next';
import Link from 'next/link';
import { AcceleratorTimeline, AcceleratorVsAnnual, FinalCta, SubHero } from '@/components/talentmasters/sections';
import { TmPageView, TrackedLink } from '@/components/talentmasters/tracked-link';
import { SectionHeading, tmBtn } from '@/components/talentmasters/ui';
import { PRICING_DISCLAIMER, acceleratorOffer, assessmentHref } from '@/lib/talentmasters/offers';

const title = '90-Day Workforce Performance Accelerator | TalentMasters™';
const description =
  'A 90-day workforce development programme for organizations in Uganda: assess one priority performance challenge, train your people, apply the skills at work, and review progress. $3,450–$5,150.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['workforce development Uganda', 'workplace productivity training', 'leadership development Uganda'],
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters/90-day-accelerator' },
  openGraph: { title, description, url: 'https://qraftacademy.com/solutions/talentmasters/90-day-accelerator' },
};

export default function AcceleratorPage() {
  return (
    <main className="min-h-screen bg-white">
      <TmPageView page="talentmasters_90_day" />

      <SubHero eyebrow={acceleratorOffer.name} title={acceleratorOffer.tagline} intro={acceleratorOffer.forWho}>
        <TrackedLink
          href={assessmentHref('accelerator', 'quotation')}
          event="tm_accelerator_enquiry"
          params={{ location: 'accelerator_hero' }}
          className={tmBtn.primary}
        >
          {acceleratorOffer.secondaryCta}
        </TrackedLink>
        <Link href="#how-it-works" className={tmBtn.secondaryDark}>
          How It Works
        </Link>
      </SubHero>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why it is different"
            title="Not another one-day workshop"
            intro="You choose one priority workforce challenge. We work on it with you for 90 days — from understanding the problem, to training, to supporting people as they apply new skills, to reviewing what changed."
          />
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="Three months" title="Assess & Equip → Apply & Improve → Reinforce & Measure" />
          <AcceleratorTimeline />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="What you receive" title="Five clear deliverables" />
            <ol className="space-y-3">
              {acceleratorOffer.deliverables.map((d, i) => (
                <li key={d} className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-tm-teal text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-tm-slate">{d}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border-2 border-tm-teal p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-tm-teal">Indicative investment</p>
              <p className="mt-2 text-3xl font-extrabold text-tm-slate">{acceleratorOffer.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{acceleratorOffer.priceBasis}</p>
              <p className="mt-3 text-xs text-neutral-500">{PRICING_DISCLAIMER}</p>
            </div>
            <div className="rounded-2xl bg-tm-alabaster p-6">
              <p className="font-semibold text-tm-slate">What we need from you</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{acceleratorOffer.clientRole}</p>
            </div>
            <div className="rounded-2xl bg-tm-alabaster p-6">
              <p className="font-semibold text-tm-slate">How progress is measured</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{acceleratorOffer.measurementNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tm-alabaster py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="90-day programme or annual partnership?" />
          <AcceleratorVsAnnual />
        </div>
      </section>

      <FinalCta
        location="accelerator_final"
        title="Have one workforce challenge you want to fix properly?"
        text="Complete the free assessment and tell us about it. We’ll tell you honestly whether a 90-day programme is the right fit."
      />
    </main>
  );
}
