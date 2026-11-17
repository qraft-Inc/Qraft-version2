import { type Metadata } from 'next';
import Link from 'next/link';
import { FinalCta, SubHero } from '@/components/talentmasters/sections';
import { TmPageView, TrackedLink } from '@/components/talentmasters/tracked-link';
import { CheckList, SectionHeading, StatusBadge, tmBtn } from '@/components/talentmasters/ui';
import { careProgrammes, crossSectorWellbeing, ncci, statusLabels } from '@/lib/talentmasters/content';
import { assessmentHref } from '@/lib/talentmasters/offers';

const title = 'Care Economy & Healthcare Workforce Development | TalentMasters™';
const description =
  'Healthcare workforce development in Uganda: wellbeing, occupational safety, supervision, leadership and professional development for healthcare and care workers — plus workplace wellbeing programmes for any sector.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['healthcare workforce development Uganda', 'employee wellbeing programmes', 'care economy Uganda', 'healthcare leadership training'],
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters/care-economy' },
  openGraph: { title, description, url: 'https://qraftacademy.com/solutions/talentmasters/care-economy' },
};

export default function CareEconomyPage() {
  return (
    <main className="min-h-screen bg-white">
      <TmPageView page="talentmasters_care_economy" />

      <SubHero
        eyebrow="Care Economy & Healthcare Workforce Development"
        title="Better care starts with better support for care workers."
        intro="We help healthcare organizations and care institutions strengthen workforce wellbeing, safety, leadership, professional development, and sustainable performance."
      >
        <TrackedLink
          href={assessmentHref('unsure', 'consultation')}
          event="tm_consultation_request"
          params={{ location: 'care_hero' }}
          className={tmBtn.primary}
        >
          Discuss Your Healthcare Workforce Needs
        </TrackedLink>
        <a href="#programmes" className={tmBtn.secondaryDark}>
          View Programmes
        </a>
      </SubHero>

      <section className="py-16 md:py-20">
        <div className="container-custom max-w-4xl text-center">
          <SectionHeading
            eyebrow="Why it matters"
            title="Supported staff provide better, more consistent care"
            intro="Fatigue, stress, unsafe conditions and weak supervision affect care workers first — and then the patients and clients they serve. Investing in the wellbeing and capability of care workers supports staff retention, team performance and the quality and continuity of care."
          />
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {(['available', 'proposal', 'opportunity'] as const).map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-500">
            Each programme below is labelled so you can see clearly what we deliver today ({statusLabels.available.toLowerCase()}),
            what is a proposal, and what is an opportunity for partners and funders.
          </p>
        </div>
      </section>

      {/* NCCI */}
      <section id="ncci" className="scroll-mt-24 bg-tm-alabaster py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <StatusBadge status={ncci.status} />
            <h2 className="mt-4 font-display text-2xl font-bold text-tm-slate sm:text-3xl">{ncci.title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-700">{ncci.summary}</p>

            <h3 className="mt-8 font-display text-lg font-bold text-tm-slate">Four proposed pillars</h3>
            <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ncci.pillars.map((p, i) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-tm-teal-light p-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-tm-teal text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-tm-slate">{p}</span>
                </li>
              ))}
            </ol>

            <h3 className="mt-8 font-display text-lg font-bold text-tm-slate">Areas of emphasis</h3>
            <CheckList items={ncci.emphasis} className="mt-4 sm:columns-2 sm:gap-8 [&>li]:break-inside-avoid" />

            <p className="mt-8 text-sm leading-relaxed text-neutral-600">{ncci.pilotNote}</p>
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{ncci.disclaimer}</p>
            <div className="mt-6">
              <TrackedLink
                href={assessmentHref(undefined, 'consultation')}
                event="tm_consultation_request"
                params={{ location: 'ncci' }}
                className={tmBtn.secondaryLight}
              >
                Discuss Partnership on NCCI
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes B–E */}
      <section id="programmes" className="scroll-mt-24 py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="Programmes" title="Healthcare and care workforce programmes" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {careProgrammes.map((p) => (
              <article key={p.id} id={p.id} className="flex flex-col rounded-2xl border border-neutral-200 p-6 sm:p-8">
                <StatusBadge status={p.status} />
                <h3 className="mt-4 font-display text-xl font-bold text-tm-slate">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.text}</p>
                <CheckList items={p.items} className="mt-5" />
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-neutral-500">
            Healthcare and care economy programmes are priced by quotation based on scope, number of facilities and participants.
            Case studies will be added here once engagements are completed and approved for publication.
          </p>
        </div>
      </section>

      {/* F. Cross-sector wellbeing */}
      <section id="workplace-wellbeing" className="scroll-mt-24 bg-tm-teal py-16 text-white md:py-20">
        <div className="container-custom max-w-4xl text-center">
          <SectionHeading dark eyebrow="Beyond healthcare" title={crossSectorWellbeing.title} intro={crossSectorWellbeing.text} />
          <ul className="flex flex-wrap justify-center gap-2">
            {crossSectorWellbeing.sectors.map((s) => (
              <li key={s} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                {s}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-white/75">
            We also share ideas and connect with the wider future-of-work community through the{' '}
            <Link href="/future-of-work-forum" className="font-semibold text-white underline">
              Future of Work Forum
            </Link>
            , a separate initiative.
          </p>
        </div>
      </section>

      <FinalCta
        location="care_final"
        title="Ready to support your care workforce?"
        text="Tell us about your facility or organization, the staff involved and the challenges you face. We’ll suggest a practical starting point."
      />
    </main>
  );
}
