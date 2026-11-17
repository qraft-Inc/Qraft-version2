import { type Metadata } from 'next';
import TallyAssessment from '@/components/talentmasters/tally-assessment';
import { TmPageView, TrackedLink } from '@/components/talentmasters/tracked-link';
import { CheckList, Eyebrow, TmWordmark } from '@/components/talentmasters/ui';
import { freeOffer, tmWhatsappHref } from '@/lib/talentmasters/offers';

const title = 'Free Workforce Needs Assessment | TalentMasters™';
const description =
  'Tell us about your team’s challenges and get an initial recommendation on the right training or workforce development approach. Free, and takes about 5 minutes.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://qraftacademy.com/solutions/talentmasters/assessment' },
  openGraph: { title, description, url: 'https://qraftacademy.com/solutions/talentmasters/assessment' },
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-tm-alabaster">
      <TmPageView page="talentmasters_assessment" />
      <section className="bg-tm-teal py-14 text-white sm:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-6">
              <TmWordmark dark />
            </div>
            <Eyebrow dark>Free · About 5 minutes</Eyebrow>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              TalentMasters Workforce Performance &amp; Training Needs Assessment
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/85">{freeOffer.headline}</p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <TallyAssessment />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="mb-3 font-display font-bold text-tm-slate">What you get</p>
              <CheckList items={freeOffer.included} />
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-600">
              <p className="mb-2 font-display font-bold text-tm-slate">What happens next</p>
              <p>
                A TalentMasters advisor reviews your answers and replies, usually within two working days, with an initial
                recommendation or an invitation to a short discovery call.
              </p>
              <p className="mt-3">
                This is a starting point, not a full organizational audit. There is no obligation to buy.
              </p>
            </div>
            <div className="rounded-2xl bg-tm-teal-light p-6 text-sm">
              <p className="font-semibold text-tm-slate">Prefer to talk first?</p>
              <TrackedLink
                href={tmWhatsappHref()}
                external
                event="tm_whatsapp_click"
                params={{ location: 'assessment_sidebar' }}
                className="mt-2 inline-block font-semibold text-tm-teal underline"
              >
                {freeOffer.secondaryCta} on WhatsApp
              </TrackedLink>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
