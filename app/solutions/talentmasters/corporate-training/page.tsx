import { type Metadata } from 'next';
import Link from 'next/link';
import { FaqSection, FinalCta, SubHero, WorkshopPrices, faqJsonLd } from '@/components/talentmasters/sections';
import { TmPageView, TrackedLink } from '@/components/talentmasters/tracked-link';
import { CheckList, SectionHeading, tmBtn } from '@/components/talentmasters/ui';
import { faqs } from '@/lib/talentmasters/content';
import { PRICING_DISCLAIMER, TM_ROUTES, assessmentHref, workshopOffer } from '@/lib/talentmasters/offers';

const title = 'Corporate Training Workshops in Uganda | TalentMasters™';
const description =
  'Half-day, full-day and two-day corporate training workshops in Kampala and across Uganda: leadership, communication, productivity, wellbeing, teamwork and applied AI. From $850.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['corporate training Uganda', 'employee training Kampala', 'management training Uganda', 'corporate AI training Uganda'],
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters/corporate-training' },
  openGraph: { title, description, url: 'https://qraftacademy.com/solutions/talentmasters/corporate-training' },
};

const pageFaqs = faqs.filter((f) =>
  ['Do you offer one-day workshops?', 'Can you customize a programme?', 'How much does corporate training cost?', 'Can you support organizations outside Uganda?'].includes(f.q)
);

export default function CorporateTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <TmPageView page="talentmasters_corporate_training" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pageFaqs)) }} />

      <SubHero eyebrow="Corporate Training Workshops" title="Solve one important workforce problem." intro={workshopOffer.forWho + ' Practical, tailored sessions your team can apply the next day.'}>
        <TrackedLink href={assessmentHref('workshop', 'quotation')} event="tm_workshop_enquiry" params={{ location: 'workshop_hero' }} className={tmBtn.primary}>
          {workshopOffer.cta}
        </TrackedLink>
        <Link href="#prices" className={tmBtn.secondaryDark}>
          See Prices
        </Link>
      </SubHero>

      <section className="py-16 md:py-20">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="What's included" title="Every workshop includes" />
            <CheckList items={workshopOffer.included} />
          </div>
          <div>
            <SectionHeading center={false} eyebrow="Popular topics" title="Choose a topic — or tell us your challenge" />
            <ul className="flex flex-wrap gap-2">
              {workshopOffer.topics.map((topic) => (
                <li key={topic} className="rounded-full bg-tm-teal-light px-4 py-2 text-sm font-semibold text-tm-teal">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="prices" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <SectionHeading eyebrow="Indicative prices" title="Simple, transparent starting prices" />
          <WorkshopPrices />
          <p className="mt-4 text-xs text-neutral-500 sm:text-sm">{PRICING_DISCLAIMER}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="font-semibold text-tm-slate">What we need from you</p>
              <p className="mt-1 text-sm text-neutral-600">{workshopOffer.clientRole}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="font-semibold text-tm-slate">After you book</p>
              <p className="mt-1 text-sm text-neutral-600">{workshopOffer.afterPurchase}</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-tm-teal-light p-6 text-sm leading-relaxed text-tm-slate">
            <span className="font-semibold">Want results that last beyond one day?</span> A workshop is a good start. If the
            challenge needs ongoing follow-through, consider the{' '}
            <Link href={TM_ROUTES.accelerator} className="font-semibold text-tm-teal underline">90-Day Accelerator</Link> or our{' '}
            <Link href={TM_ROUTES.annual} className="font-semibold text-tm-teal underline">annual workforce partnership</Link>.
          </div>
        </div>
      </section>

      <FaqSection items={pageFaqs} />
      <FinalCta location="workshop_final" />
    </main>
  );
}
