import CmsEnquiryForm from '@/components/forms/cms-enquiry-form';
import CourseMastersCapabilities from '@/components/sections/coursemasters/capabilities';
import TrackedLink from '@/components/sections/coursemasters/tracked-link';
import { CMS_ENQUIRY_ANCHOR, CMS_PACKAGES, cmsEnquiryHref } from '@/lib/cms';

const WHATSAPP_HREF = `https://wa.me/256755017384?text=${encodeURIComponent(
  'Hello! I would like to talk to CourseMasters about a CMS or digital publishing project.'
)}`;

const PROBLEMS = [
  { title: 'Content buried in PDF archives', text: 'Valuable reports and issues sit in downloads few people open, and search engines cannot read.' },
  { title: 'Poor mobile reading', text: 'Most of your audience reads on a phone, but large PDFs are slow and awkward to read on small screens.' },
  { title: 'Hard to search or discover', text: 'Readers cannot find the article, report or resource they need, so they leave.' },
  { title: 'Websites that are hard to update', text: 'Every small change waits for a developer, so content goes stale.' },
  { title: 'Disorganised archives', text: 'Past editions and publications are scattered across folders, drives and old pages.' },
  { title: 'Inefficient editorial workflows', text: 'Drafts, reviews and approvals happen over email, with no clear owner or status.' },
  { title: 'No view of engagement', text: 'You cannot tell which content is read, shared or ignored, so planning is guesswork.' },
];

const SOLUTIONS = [
  {
    tag: 'Flagship',
    title: 'Digital Magazines & Publications',
    text: 'Every issue gets a branded home, every article gets its own searchable, shareable page, and readers can still view the original PDF. Your editors publish new editions themselves.',
    outcome: 'More readers, longer reading time, and a permanent searchable archive.',
  },
  {
    title: 'Knowledge & Resource Libraries',
    text: 'Research, reports, toolkits and institutional resources organised by topic, type and year, with search and filters that help people find the right document quickly.',
    outcome: 'Your knowledge becomes easy to find, cite and reuse.',
  },
  {
    title: 'Institutional CMS Platforms',
    text: 'One platform to manage your organisational website, news, publications and other content types, with roles so the right people can edit the right sections.',
    outcome: 'Your team updates the website without waiting on developers.',
  },
  {
    title: 'Multilingual Content Platforms',
    text: 'Publish and manage content in English, Kiswahili and other languages, with linked translations and language switching for readers.',
    outcome: 'Reach every audience you serve, in the language they read.',
  },
];

const UPSELLS = [
  'Additional content migration',
  'PDF-to-HTML article conversion',
  'Editorial content production',
  'Content publishing retainers',
  'English–Kiswahili localisation',
  'Accessibility improvements',
  'Advanced analytics',
  'CMS–LMS integration',
  'Staff training',
  'Ongoing platform maintenance',
];

const PROCESS = [
  { title: 'Discover', text: 'Audit your content, audience and goals.' },
  { title: 'Architect', text: 'Plan content types, structure and workflows.' },
  { title: 'Build', text: 'Design and develop the platform.' },
  { title: 'Migrate', text: 'Move agreed content into the new system.' },
  { title: 'Train', text: 'Equip your editors to publish independently.' },
  { title: 'Launch & Support', text: 'Go live, then keep the platform healthy.' },
];

const FAQS = [
  {
    q: 'How much does a CMS or digital magazine platform cost?',
    a: 'CourseMasters CMS packages start from USD 1,500 for a Starter CMS. Our Digital Magazine & Publication CMS starts from USD 4,500, and Advanced Content Platforms start from USD 8,000. Final quotations depend on content volume, complexity, migration, languages, integrations and hosting.',
  },
  {
    q: 'Can our team update content without a developer?',
    a: 'Yes. Every package includes editor training so your team can publish articles, issues and resources independently.',
  },
  {
    q: 'Can you convert our existing PDF magazines and reports?',
    a: 'Yes. Each package includes a defined amount of migration. Larger archives and PDF-to-HTML article conversion are quoted as additional services.',
  },
  {
    q: 'Can the CMS connect with our LMS or existing website?',
    a: 'Yes. CMS integrations with existing websites and learning platforms, including Moodle, can be scoped into your project.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. CMS Care & Support starts from USD 150 per month and covers updates, security and maintenance checks, backup monitoring, technical support and a monthly maintenance summary.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'CMS Development & Digital Publishing',
      serviceType: 'CMS development and digital magazine platforms',
      provider: { '@type': 'Organization', name: 'Qraft Academy', url: 'https://qraftacademy.com' },
      areaServed: 'Africa',
      offers: CMS_PACKAGES.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        priceCurrency: 'USD',
        price: pkg.price.replace(/[^\d]/g, ''),
        description: pkg.audience,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

const Check = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-blue-600">
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function CmsDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
        <div className="container-custom py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
            <div className="text-white">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-amber-400 mb-4">
                CourseMasters™ CMS Development &amp; Digital Publishing
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
                Your Content Deserves More Than a PDF Download.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl">
                Turn your magazines, articles, reports and knowledge resources into searchable, mobile-friendly digital experiences that your audience can easily access and your team can independently manage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <TrackedLink
                  href={`#${CMS_ENQUIRY_ANCHOR}`}
                  event="coursemasters_cms_cta_click"
                  params={{ location: 'hero', cta: 'get_proposal' }}
                  className="btn-primary text-center px-7 py-3.5 text-base"
                >
                  Get a CMS Proposal
                </TrackedLink>
                <a
                  href="#packages"
                  className="px-7 py-3.5 text-base font-semibold text-center rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Explore Our Packages
                </a>
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400">Packages from USD 1,500 · Delivery from 2–4 weeks</p>
            </div>

            {/* Before / after illustration */}
            <div aria-hidden="true" className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">Today</p>
                <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <span className="rounded-md bg-red-500/80 px-2 py-1 text-[10px] font-bold text-white">PDF</span>
                  <div className="min-w-0">
                    <p className="truncate text-sm text-slate-200">Annual_Magazine_Issue_12_FINAL_v3.pdf</p>
                    <p className="text-xs text-slate-500">48 MB · not searchable · hard to read on mobile</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-2xl text-amber-400">↓</p>
              <div className="rounded-2xl bg-white p-5 shadow-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600 mb-3">With CourseMasters</p>
                <div className="mb-3 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-400">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <circle cx="9" cy="9" r="6" />
                    <path d="m14 14 4 4" strokeLinecap="round" />
                  </svg>
                  Search articles, issues and reports…
                </div>
                <div className="space-y-2">
                  {['Issue 12 · Feature article', 'Issue 12 · Interview', 'Issue 11 · Research brief'].map((t, i) => (
                    <div key={t} className="flex items-center gap-3 rounded-lg bg-slate-50 p-2.5">
                      <span className={`h-10 w-10 shrink-0 rounded-md ${['bg-blue-200', 'bg-amber-200', 'bg-slate-200'][i]}`} />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-slate-500">{t}</p>
                        <span className="mt-1 block h-2 w-3/4 rounded bg-slate-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Great Content Is Only Valuable if People Can Find It.
            </h2>
            <p className="text-lg text-slate-600">Most organisations we speak to recognise at least three of these.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.text}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-slate-900 p-6 flex flex-col justify-center">
              <p className="font-semibold text-white mb-3">A CMS built around your content fixes all of these.</p>
              <a href="#solutions" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                See our solutions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section-padding bg-slate-50 scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Publishing Platforms Built Around Your Content
            </h2>
            <p className="text-lg text-slate-600">Four solutions, each designed for a different kind of publishing organisation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s, i) => (
              <article key={s.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 sm:p-8 flex flex-col">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl font-display font-bold text-slate-200">{String(i + 1).padStart(2, '0')}</span>
                  {s.tag && <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">{s.tag}</span>}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 mb-5 flex-1">{s.text}</p>
                <p className="text-sm font-semibold text-slate-900 border-t border-slate-100 pt-4">
                  <span className="text-blue-600">Result:</span> {s.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3">Packages &amp; Pricing</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Clear Starting Points for Every Publishing Need
            </h2>
            <p className="text-lg text-slate-600">Compare packages, then tell us about your project for a tailored quotation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {CMS_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  pkg.popular ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`text-lg font-display font-bold uppercase tracking-wide mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-5 ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>{pkg.audience}</p>
                <p className={`text-xs uppercase tracking-widest ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>From</p>
                <p className={`text-3xl font-display font-bold mb-1 ${pkg.popular ? 'text-amber-400' : 'text-amber-600'}`}>
                  {pkg.price}
                  {pkg.priceSuffix && <span className="text-base font-semibold">{pkg.priceSuffix}</span>}
                </p>
                <p className={`text-xs mb-6 ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {pkg.delivery ? `Estimated delivery: ${pkg.delivery}` : 'Ongoing monthly plan'}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${pkg.popular ? 'text-slate-200' : 'text-slate-600'}`}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href={cmsEnquiryHref(pkg.id)}
                  event="coursemasters_cms_package_click"
                  params={{ package: pkg.id }}
                  className={
                    pkg.popular
                      ? 'btn-primary text-center px-5 py-3'
                      : 'text-center px-5 py-3 rounded-xl font-semibold border border-slate-300 text-slate-900 hover:bg-slate-50 transition'
                  }
                >
                  {pkg.cta}
                </TrackedLink>
              </article>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-center text-xs sm:text-sm text-slate-500 mt-10">
            All prices are starting estimates in USD. Final quotations depend on content volume, platform complexity, migration requirements, languages, integrations and hosting. Taxes, hosting, third-party licences, content production and extensive customisation are quoted separately.
          </p>
        </div>
      </section>

      {/* UPSELLS */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Need More Than the Platform?</h2>
              <p className="text-slate-600 mb-6">
                Add any of these services to your CMS package, or combine your platform with a digital course or Moodle LMS. We&apos;ll scope everything as one project with one team and one quotation.
              </p>
              <TrackedLink
                href={cmsEnquiryHref('combined')}
                event="coursemasters_cms_cta_click"
                params={{ location: 'upsells', cta: 'combined_project' }}
                className="btn-primary inline-block px-7 py-3.5"
              >
                Scope a Combined Project
              </TrackedLink>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {UPSELLS.map((u) => (
                <li key={u} className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-100 px-4 py-3.5">
                  <span className="text-sm font-semibold text-slate-800">{u}</span>
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Custom Quote</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONCEPT DEMONSTRATION */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="inline-block rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 mb-4">
              Concept Demonstration
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              What a Digital Magazine Platform Looks Like
            </h2>
            <p className="text-slate-600">
              An illustrative concept of the reader experience our Digital Magazine &amp; Publication CMS is designed to deliver. It is not a client project.
            </p>
          </div>

          <figure className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-400 border border-slate-200">
                  magazine.your-organisation.org
                </span>
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <p className="font-display text-xl font-bold text-slate-900">Your Magazine</p>
                  <div className="flex gap-4 text-xs font-semibold text-slate-500">
                    <span>Latest Issue</span>
                    <span>Archive</span>
                    <span>Topics</span>
                    <span>EN | SW</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">
                  <div className="rounded-xl bg-slate-900 p-6 text-white flex flex-col justify-end min-h-[220px]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">Issue 12 · Cover story</p>
                    <p className="font-display text-2xl font-bold mb-2">The headline of your lead feature article</p>
                    <p className="text-sm text-slate-300">Read online on any device · Download the full issue as PDF</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      ['Searchable articles', 'Every article has its own page, indexed by search engines.'],
                      ['Issue archive', 'Browse past editions by year, theme or topic.'],
                      ['Editorial dashboard', 'Editors draft, review and publish without a developer.'],
                      ['Engagement analytics', 'See what readers open, read and share.'],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-900">{title}</p>
                        <p className="text-xs text-slate-600">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-center text-xs text-slate-500">
              Illustrative concept only. Final design follows your brand and content.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">How We Deliver Your Platform</h2>
          </div>
          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                <p className="text-xs font-bold text-blue-600 mb-1">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-sm font-semibold text-slate-900 mb-1">{step.title}</p>
                <p className="text-xs text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INTEGRATED SOLUTION */}
      <CourseMastersCapabilities />

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 text-center mb-12">
            CMS Development FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-slate-100 shadow-sm p-5 sm:p-6">
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span aria-hidden="true" className="text-blue-600 shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm sm:text-base text-slate-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id={CMS_ENQUIRY_ANCHOR} className="section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3">Get a CMS Proposal</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Tell Us About Your Content</h2>
              <p className="text-slate-600 mb-6">
                Share a few details and we&apos;ll respond with a recommended approach, scope and quotation for your platform.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-700">
                {['No obligation', 'Clear scope and pricing in USD', 'Combine CMS, LMS and course development in one proposal'].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <p className="text-sm font-semibold text-slate-900 mb-3">Prefer to talk first?</p>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                  <TrackedLink
                    href={WHATSAPP_HREF}
                    external
                    event="coursemasters_whatsapp_click"
                    params={{ context: 'cms_enquiry' }}
                    className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl"
                  >
                    WhatsApp Us
                  </TrackedLink>
                  <a
                    href="mailto:drew@qraftacademy.com?subject=CMS%20Development%20Enquiry"
                    className="flex-1 text-center border border-slate-200 hover:bg-white text-slate-700 font-semibold py-3 px-5 rounded-xl"
                  >
                    Email Us
                  </a>
                </div>
                <p className="text-xs text-slate-500 mt-3">+256 755 017 384 · Kampala, Uganda</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <CmsEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
