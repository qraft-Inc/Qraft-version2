import { ArrowRight, MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { TESTIMONIAL_PLACEHOLDER_COUNT, faqs, portfolio, processSteps, publicTestimonials } from '@/lib/talentmasters/content';
import {
  PRICING_DISCLAIMER,
  TM_ROUTES,
  acceleratorOffer,
  acceleratorVsAnnual,
  annualOffer,
  annualQuarters,
  assessmentHref,
  freeOffer,
  partnershipTerms,
  partnershipTiers,
  quarterRhythm,
  tmWhatsappHref,
  workshopOffer,
  workshopPrices,
} from '@/lib/talentmasters/offers';
import { TrackedLink } from './tracked-link';
import { CheckList, Eyebrow, SectionHeading, TmWordmark, tmBtn } from './ui';

/* ---------- Page hero for sub-pages ---------- */
export function SubHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-tm-teal py-16 text-white sm:py-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="mb-6">
            <TmWordmark dark />
          </div>
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{intro}</p>
          {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

/* ---------- Assess → Develop → Apply → Measure ---------- */
export function ProcessSteps() {
  return (
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((item, index) => (
        <li key={item.step} className="relative rounded-2xl border border-neutral-200 bg-white p-6">
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-tm-teal font-bold text-white" aria-hidden="true">
            {index + 1}
          </span>
          <h3 className="font-display text-xl font-bold text-tm-slate">{item.step}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{item.text}</p>
          {index < processSteps.length - 1 ? (
            <ArrowRight
              className="absolute -right-3.5 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-tm-alabaster text-tm-coral lg:block"
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ---------- The four-level offer ladder ---------- */
export function OfferLadder() {
  const cards = [
    {
      level: 'Start here',
      name: freeOffer.shortName,
      price: 'Free',
      text: 'A short questionnaire and an initial recommendation on the right approach for your team.',
      points: ['About 5 minutes to complete', 'Preliminary review of your priorities', 'A clear proposed next step'],
      href: assessmentHref('unsure'),
      cta: 'Take the Free Assessment',
      event: 'tm_cta_click' as const,
      params: { offer: 'free_assessment', location: 'offer_ladder' } as Record<string, string>,
      highlight: true,
    },
    {
      level: 'Solve one problem',
      name: workshopOffer.name,
      price: workshopOffer.priceSummary,
      text: 'Half-day, full-day or two-day workshops on a single priority topic.',
      points: ['Pre-training consultation', 'Professional facilitator & materials', 'Workplace action plan'],
      href: TM_ROUTES.corporateTraining,
      cta: 'View Workshops & Prices',
      event: 'tm_workshop_enquiry' as const,
      params: { offer: 'none', location: 'offer_ladder' } as Record<string, string>,
    },
    {
      level: 'Improve performance',
      name: acceleratorOffer.shortName,
      price: acceleratorOffer.priceSummary,
      text: 'A 90-day project on one priority challenge: assess, train, apply and review.',
      points: ['Baseline and agreed goals', 'Training plus implementation follow-up', '90-Day Performance Review Report'],
      href: TM_ROUTES.accelerator,
      cta: acceleratorOffer.cta,
      event: 'tm_accelerator_enquiry' as const,
      params: { offer: 'none', location: 'offer_ladder' } as Record<string, string>,
    },
    {
      level: 'Build long-term capability',
      name: annualOffer.shortName,
      price: annualOffer.priceSummary,
      text: 'A 12-month programme across four quarterly themes for employees, managers and executives.',
      points: ['Monthly practical sessions', 'Quarterly reviews and reports', 'Annual workforce review'],
      href: TM_ROUTES.annual,
      cta: 'Explore the Annual Partnership',
      event: 'tm_annual_enquiry' as const,
      params: { offer: 'none', location: 'offer_ladder' } as Record<string, string>,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.name}
            className={`flex flex-col rounded-2xl border-2 bg-white p-6 ${card.highlight ? 'border-tm-coral shadow-lg' : 'border-neutral-200'}`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-tm-teal">{card.level}</p>
            <h3 className="mt-2 font-display text-xl font-bold leading-snug text-tm-slate">{card.name}</h3>
            <p className="mt-3 text-2xl font-extrabold text-tm-slate">{card.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{card.text}</p>
            <CheckList items={card.points} className="mb-6 mt-4 flex-1" />
            <TrackedLink
              href={card.href}
              event={card.event}
              params={card.params}
              className={card.highlight ? tmBtn.primary : tmBtn.secondaryLight}
            >
              {card.cta}
            </TrackedLink>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-4xl text-center text-xs text-neutral-500 sm:text-sm">{PRICING_DISCLAIMER}</p>
    </>
  );
}

/* ---------- Workshop price list ---------- */
export function WorkshopPrices() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm sm:text-base">
        <caption className="sr-only">Indicative workshop prices</caption>
        <thead className="bg-tm-teal-light text-tm-slate">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold sm:px-6">Format</th>
            <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell sm:px-6">Duration</th>
            <th scope="col" className="px-4 py-3 font-semibold sm:px-6">Indicative price</th>
          </tr>
        </thead>
        <tbody>
          {workshopPrices.map((row) => (
            <tr key={row.format} className="border-t border-neutral-100">
              <th scope="row" className="px-4 py-4 font-semibold text-tm-slate sm:px-6">{row.format}</th>
              <td className="hidden px-4 py-4 text-neutral-600 sm:table-cell sm:px-6">{row.duration}</td>
              <td className="px-4 py-4 font-bold text-tm-slate sm:px-6">{row.price}</td>
            </tr>
          ))}
          <tr className="border-t border-neutral-100">
            <th scope="row" className="px-4 py-4 font-semibold text-tm-slate sm:px-6">Longer or custom programmes</th>
            <td className="hidden px-4 py-4 text-neutral-600 sm:table-cell sm:px-6">As agreed</td>
            <td className="px-4 py-4 font-bold text-tm-slate sm:px-6">By quotation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ---------- 90-day timeline ---------- */
export function AcceleratorTimeline() {
  return (
    <ol className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {acceleratorOffer.months.map((month) => (
        <li key={month.label} className="rounded-2xl border border-neutral-200 bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-tm-coral-dark">{month.label}</p>
          <h3 className="mb-4 mt-1 font-display text-xl font-bold text-tm-slate">{month.title}</h3>
          <CheckList items={month.items} />
        </li>
      ))}
    </ol>
  );
}

/* ---------- Four-quarter journey ---------- */
export function AnnualJourney({ detailed }: { detailed?: boolean }) {
  return (
    <>
      <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {annualQuarters.map((q, index) => (
          <li key={q.theme} className="relative flex flex-col rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-tm-sage">{q.quarter}</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-white">{q.theme}</h3>
            <p className="mt-1 text-sm text-white/75">{q.focus}</p>
            {detailed ? <CheckList items={q.topics} dark className="mt-5" /> : null}
            {index < annualQuarters.length - 1 ? (
              <ArrowRight
                className="absolute -right-3.5 top-10 hidden h-6 w-6 rounded-full bg-tm-teal text-tm-coral lg:block"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-2xl border border-white/15 p-5 text-sm text-white/85 sm:text-base">
        <span className="font-semibold text-white">Every quarter follows the same rhythm: </span>
        {quarterRhythm.map((r, i) => (
          <span key={r.month}>
            {r.month}: {r.label}
            {i < quarterRhythm.length - 1 ? ' → ' : '.'}
          </span>
        ))}{' '}
        Themes are standard; the content is tailored to your organization.
      </div>
    </>
  );
}

/* ---------- Foundation / Enterprise partnership tiers ---------- */
export function PartnershipTiers({ location }: { location: string }) {
  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        {partnershipTiers.map((tier) => (
          <article
            key={tier.name}
            className={`flex flex-col rounded-2xl border-2 bg-white p-7 sm:p-8 ${tier.featured ? 'border-tm-teal shadow-lg' : 'border-neutral-200'}`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-tm-teal">For {tier.forWho.toLowerCase()}</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-tm-slate">{tier.name}</h3>
            <p className="mt-4 text-2xl font-extrabold text-tm-slate sm:text-3xl">{tier.monthly}</p>
            <p className="mt-1 text-sm font-semibold text-neutral-600">{tier.annual} · 12-month agreement</p>
            <CheckList items={tier.scope} className="mb-8 mt-6 flex-1" />
            <TrackedLink
              href={assessmentHref('annual', 'annual')}
              event="tm_annual_enquiry"
              params={{ tier: tier.name, location }}
              className={tier.featured ? tmBtn.teal : tmBtn.secondaryLight}
            >
              {annualOffer.secondaryCta}
            </TrackedLink>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-6 max-w-5xl rounded-2xl bg-tm-alabaster p-5 sm:p-6">
        <p className="mb-3 font-semibold text-tm-slate">Contract terms and exclusions</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-neutral-700">
          {partnershipTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-neutral-500">{PRICING_DISCLAIMER}</p>
      </div>
    </>
  );
}

/* ---------- 90-day vs annual distinction ---------- */
export function AcceleratorVsAnnual() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {acceleratorVsAnnual.map((item) => (
        <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white p-5">
          <p className="font-display font-bold text-tm-slate">{item.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Portfolio ---------- */
export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Organizations We've Worked With"
          title="Real organizations. Real workplace challenges. Practical development."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.organization} className="flex flex-col rounded-2xl border border-neutral-200 bg-tm-alabaster p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-tm-teal">{item.sector}</p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-tm-slate">{item.organization}</h3>
              {item.programmeTitle ? <p className="mt-2 text-sm font-semibold italic text-tm-slate">“{item.programmeTitle}”</p> : null}
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.focus}</p>
              {item.outcomes ? (
                <p className="mt-3 text-sm text-neutral-700">
                  <span className="font-semibold">Outcomes: </span>
                  {item.outcomes}
                </p>
              ) : null}
            </article>
          ))}
        </div>
        <Testimonials />
      </div>
    </section>
  );
}

function Testimonials() {
  const items = publicTestimonials();
  if (items.length === 0) {
    // Placeholder cards: no invented quotes or names. Replaced automatically once approved testimonials exist.
    return (
      <div className="mt-12">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-tm-teal">What our clients say</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {Array.from({ length: TESTIMONIAL_PLACEHOLDER_COUNT }, (_, i) => (
            <figure key={i} className="flex flex-col rounded-2xl border-2 border-dashed border-tm-teal/30 bg-tm-teal-light p-7">
              <span className="font-display text-5xl leading-none text-tm-teal/40" aria-hidden="true">“</span>
              <blockquote className="mt-2 text-base italic leading-relaxed text-neutral-600">
                Client testimonial coming soon.
              </blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500">TalentMasters™ client</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((t) => (
        <figure key={`${t.name}-${t.organization}`} className="rounded-2xl bg-tm-teal p-7 text-white">
          <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm text-white/80">
            <span className="font-semibold text-white">{t.name}</span>, {t.position}, {t.organization}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  return (
    <section id="faq" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-24">
      <div className="container-custom">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {items.map((item) => (
            <details key={item.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-tm-slate [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="mt-0.5 text-xl leading-none text-tm-teal transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-neutral-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function faqJsonLd(items: readonly { q: string; a: string }[] = faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/* ---------- Final conversion band ---------- */
export function FinalCta({
  title = 'Ready to build a better-performing team?',
  text = 'Tell us where your employees or managers need support. We’ll help you identify the right development priorities and the next steps towards measurable workplace improvements.',
  location,
}: {
  title?: string;
  text?: string;
  location: string;
}) {
  return (
    <section id="get-started" className="scroll-mt-24 bg-tm-slate py-16 text-white md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={assessmentHref()}
              event="tm_cta_click"
              params={{ offer: 'free_assessment', location }}
              className={tmBtn.primary}
            >
              Complete Your Free Workforce Needs Assessment
            </TrackedLink>
            <TrackedLink
              href={assessmentHref(undefined, 'quotation')}
              event="tm_proposal_request"
              params={{ location }}
              className={tmBtn.secondaryDark}
            >
              Request a Corporate Training Proposal
            </TrackedLink>
          </div>
          <TrackedLink
            href={tmWhatsappHref()}
            external
            event="tm_whatsapp_click"
            params={{ location }}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tm-sage hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Prefer to chat? Talk to a TalentMasters advisor on WhatsApp
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
