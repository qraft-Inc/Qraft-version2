import { type Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { portfolio } from '@/lib/talentmasters/content';
import {
  COMPANY_NAME,
  PARTNERSHIP_HREF,
  capitalDimensions,
  connectedInitiatives,
  impact,
  platforms,
  solutions,
} from '@/lib/qraft-group';

const title = 'Qraft Group | Rata Qraft Solutions Limited';
const description =
  'Rata Qraft Solutions Limited (Qraft Group) operates Qraft Academy and Qraft Capital: CourseMasters, TalentMasters, SystemMasters and CapitalMasters — developing human and enterprise capital for the future of work.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://qraftacademy.com/qraft-group' },
  openGraph: { title, description, url: 'https://qraftacademy.com/qraft-group', siteName: 'Qraft Academy', type: 'website' },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_NAME,
  alternateName: 'Qraft Group',
  url: 'https://qraftacademy.com/qraft-group',
  address: { '@type': 'PostalAddress', addressLocality: 'Kampala', addressCountry: 'UG' },
  subOrganization: platforms.map((p) => ({ '@type': 'Organization', name: p.name })),
};

const container = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600';
const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-900 transition-colors hover:border-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900';

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-700">{children}</p>;
}

function Heading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: ReactNode }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-14">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{title}</h2>
      {intro ? <div className="mt-4 space-y-3 text-lg leading-relaxed text-neutral-600">{intro}</div> : null}
    </div>
  );
}

function SolutionLink({ href, children, className }: { href: string; children: ReactNode; className: string }) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/* Diagram node */
function Node({ label, sub, tone = 'solid' }: { label: string; sub?: string; tone?: 'root' | 'solid' | 'leaf' | 'ghost' }) {
  const tones = {
    root: 'bg-neutral-900 text-white border-neutral-900',
    solid: 'bg-primary-600 text-white border-primary-600',
    leaf: 'bg-white text-neutral-900 border-neutral-300',
    ghost: 'bg-white text-neutral-900 border-dashed border-neutral-400',
  };
  return (
    <div className={`min-w-0 rounded-xl border-2 text-center ${tone === 'leaf' ? 'px-2 py-2.5' : 'px-4 py-3'} ${tones[tone]}`}>
      <p className={`break-words font-semibold leading-tight ${tone === 'leaf' ? 'text-xs sm:text-sm' : ''}`}>{label}</p>
      {sub ? <p className={`mt-0.5 text-xs ${tone === 'leaf' || tone === 'ghost' ? 'text-neutral-500' : 'text-white/75'}`}>{sub}</p> : null}
    </div>
  );
}

export default function QraftGroupPage() {
  const solutionList = [solutions.coursemasters, solutions.talentmasters, solutions.systemmasters, solutions.capitalmasters];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* 1. Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 sm:py-28">
        <div className={container}>
          <div className="max-w-4xl">
            <Eyebrow>{COMPANY_NAME}</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl lg:text-6xl">
              Building Capital. Creating Value. Shaping the Future of Work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              We develop the capabilities, systems and opportunities that enable people, organisations and enterprises to create
              value, grow sustainably and thrive in the future of work.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#businesses" className={btnPrimary}>
                Explore Our Businesses
              </a>
              <Link href={PARTNERSHIP_HREF} className={btnSecondary}>
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who we are */}
      <section className="py-20 sm:py-24">
        <div className={`${container} grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]`}>
          <Heading
            eyebrow="Who we are"
            title="One Vision. Two Business Platforms. Four Specialised Solutions."
            intro={
              <>
                <p>{COMPANY_NAME} brings together complementary business capabilities through Qraft Academy and Qraft Capital.</p>
                <p>
                  Our work connects learning and workforce development with business systems and financial capability, helping
                  institutions and enterprises move from potential to measurable performance.
                </p>
              </>
            }
          />
          <dl className="self-start rounded-2xl border border-neutral-200 p-6 sm:p-8">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">Registered company</dt>
              <dd className="mt-1 font-semibold text-neutral-900">{COMPANY_NAME}</dd>
            </div>
            <div className="mt-5">
              <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">Group identity</dt>
              <dd className="mt-1 text-neutral-700">Qraft Group is the name we use for the company and its two business platforms.</dd>
            </div>
            <div className="mt-5">
              <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">Business platforms</dt>
              <dd className="mt-1 text-neutral-700">Qraft Academy and Qraft Capital, each delivering two specialised solutions.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 3. Corporate businesses */}
      <section id="businesses" className="scroll-mt-24 bg-neutral-50 py-20 sm:py-24">
        <div className={container}>
          <Heading eyebrow="Our corporate businesses" title="Two business platforms" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {platforms.map((p) => (
              <article id={p.id} key={p.id} className="flex scroll-mt-24 flex-col rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-700">{p.capital}</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-neutral-900">{p.name}</h3>
                <p className="mt-4 leading-relaxed text-neutral-600">{p.description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {p.solutions.map((s) => (
                    <li key={s.name} className="rounded-xl bg-neutral-50 p-4">
                      <p className="font-semibold text-neutral-900">{s.name}</p>
                      <p className="text-sm text-neutral-500">{s.category}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <SolutionLink href={p.href} className={`${btnPrimary} w-full sm:w-auto`}>
                    {p.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </SolutionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Four solutions */}
      <section id="solutions" className="scroll-mt-24 py-20 sm:py-24">
        <div className={container}>
          <Heading eyebrow="What we deliver" title="Our four specialised solutions" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutionList.map((s) => (
              <article key={s.name} className="flex flex-col rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-display text-xl font-bold text-neutral-900">{s.name}</h3>
                <p className="text-sm font-semibold text-primary-700">{s.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{s.value}</p>
                <p className="mt-4 text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-700">For: </span>
                  {s.audience}
                </p>
                {s.note ? <p className="mt-3 text-xs italic text-neutral-500">{s.note}</p> : null}
                <SolutionLink
                  href={s.href}
                  className="mt-6 inline-flex items-center gap-1 pt-2 text-sm font-semibold text-primary-700 hover:underline"
                >
                  {s.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </SolutionLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Capital development philosophy */}
      <section className="bg-neutral-900 py-20 text-white sm:py-24">
        <div className={container}>
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-300">Our philosophy</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Developing the Capital That Powers the Future of Work</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Value is created when four kinds of capital grow together. These are strategic development categories that guide
              our work — not four registered corporate divisions.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {capitalDimensions.map((c, i) => (
              <li key={c.name} className="bg-neutral-900 p-6 sm:p-8">
                <p className="text-sm font-semibold text-primary-300">0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{c.text}</p>
                <p className="mt-4 text-xs text-white/50">Developed through {c.home}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Connected ecosystem */}
      <section id="ecosystem" className="scroll-mt-24 py-20 sm:py-24">
        <div className={container}>
          <Heading eyebrow="Our connected ecosystem" title="Beyond our corporate businesses" />
          <p className="-mt-6 mb-10 inline-block rounded-full border border-dashed border-neutral-400 px-4 py-1.5 text-sm text-neutral-600">
            Founder-led and ecosystem initiatives connected through a shared capital development vision.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {connectedInitiatives.map((c) => (
              <article key={c.name} className="flex flex-col rounded-3xl border-2 border-dashed border-neutral-300 p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{c.capital}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-neutral-900">{c.name}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{c.text}</p>
                <ul className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
                  {c.programmes.map((p) => (
                    <li key={p.name}>
                      <p className="font-semibold text-neutral-900">
                        {p.name} <span className="font-normal text-neutral-500">· {p.category}</span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">{p.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {c.external ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                      {c.cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={c.href} className={btnSecondary}>
                      {c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How everything connects */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className={container}>
          <Heading eyebrow="How everything connects" title="Capital Development Ecosystem" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Corporate structure: solid connectors */}
            <figure className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <figcaption className="mb-6 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <span className="inline-block h-0.5 w-8 bg-neutral-900" aria-hidden="true" /> Corporate structure (ownership)
              </figcaption>
              <div className="mx-auto max-w-xs">
                <Node label={COMPANY_NAME} sub="Qraft Group" tone="root" />
              </div>
              <div className="mx-auto h-6 w-0.5 bg-neutral-900" aria-hidden="true" />
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="absolute left-1/4 right-1/4 top-0 hidden h-0.5 bg-neutral-900 sm:block" aria-hidden="true" />
                {platforms.map((p) => (
                  <div key={p.id} className="flex flex-col items-stretch">
                    <div className="mx-auto hidden h-6 w-0.5 bg-neutral-900 sm:block" aria-hidden="true" />
                    <Node label={p.name} sub={p.capital} tone="solid" />
                    <div className="mx-auto h-5 w-0.5 bg-primary-600" aria-hidden="true" />
                    <div className="grid grid-cols-2 gap-2">
                      {p.solutions.map((s) => (
                        <Node key={s.name} label={s.name} tone="leaf" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </figure>

            {/* Connected ecosystem: dashed, grouped containers */}
            <figure className="rounded-3xl border-2 border-dashed border-neutral-300 bg-white p-6 sm:p-8">
              <figcaption className="mb-6 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <span className="inline-block w-8 border-t-2 border-dashed border-neutral-500" aria-hidden="true" /> Connected
                ecosystem (strategic relationship)
              </figcaption>
              <div className="space-y-5">
                {connectedInitiatives.map((c) => (
                  <div key={c.name} className="rounded-2xl bg-neutral-50 p-4">
                    <Node label={c.name} sub={c.capital} tone="ghost" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {c.programmes.map((p) => (
                        <Node key={p.name} label={p.name} tone="leaf" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </figure>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            Solid lines show businesses operated by {COMPANY_NAME}. Dashed containers show independent initiatives linked by a
            shared vision; they are not subsidiaries of the company.
          </p>
        </div>
      </section>

      {/* 8. Work and impact */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <Heading eyebrow="Our work" title="Work and impact" intro="A selection of work delivered through Qraft Academy." />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-semibold text-neutral-900">Digital learning · CourseMasters™</h3>
              <ul className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
                {impact.digitalLearning.map((d) => (
                  <li key={d.title} className="p-5">
                    <p className="font-semibold text-neutral-900">{d.title}</p>
                    <p className="mt-1 text-sm text-neutral-500">{d.partner}</p>
                  </li>
                ))}
              </ul>
              <Link href="/coursemasters" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:underline">
                More CourseMasters work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-neutral-900">Workforce development · TalentMasters™</h3>
              <ul className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
                {portfolio
                  .filter((p) => p.ownerVerified)
                  .map((p) => (
                    <li key={p.organization} className="p-5">
                      <p className="font-semibold text-neutral-900">{p.organization}</p>
                      <p className="mt-1 text-sm text-neutral-500">{p.focus}</p>
                    </li>
                  ))}
              </ul>
              <Link href="/solutions/talentmasters#portfolio" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:underline">
                More TalentMasters work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-28">
        <div className={`${container} text-center`}>
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-5xl">Let&apos;s Build What Comes Next.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Whether you are an institution developing people, an enterprise strengthening its systems, or a partner shaping the
            future of work, there is a place to collaborate within our ecosystem.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#solutions" className={btnSecondary}>
              Explore Our Solutions
            </a>
            <Link href={PARTNERSHIP_HREF} className={btnPrimary}>
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
