import { type Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { TrackedLink } from '@/components/talentmasters/tracked-link';
import { tmBtn } from '@/components/talentmasters/ui';
import { TM_ROUTES, tmWhatsappHref } from '@/lib/talentmasters/offers';

export const metadata: Metadata = {
  title: { absolute: 'Thank You | TalentMasters™' },
  description: 'Your TalentMasters workforce needs assessment has been received.',
  robots: { index: false, follow: false },
};

const nextCopy: Record<string, string> = {
  quotation: 'We will review your needs and send an indicative quotation for you to share internally.',
  consultation: 'We will contact you to agree a convenient time for a short consultation.',
  annual: 'We will contact you to discuss the annual workforce partnership and what it would cover for your organization.',
  recommend: 'We will review your answers and send an initial recommendation on the most suitable programme.',
};

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  const message = nextCopy[next ?? ''] ?? nextCopy.recommend;

  return (
    <main className="min-h-screen bg-tm-alabaster py-16 sm:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-8 text-center sm:p-12">
          <CheckCircle2 className="mx-auto h-14 w-14 text-tm-teal" aria-hidden="true" />
          <h1 className="mt-5 font-display text-3xl font-bold text-tm-slate sm:text-4xl">Thank you — we’ve received your assessment</h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">{message}</p>

          <ol className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm text-neutral-700">
            <li><span className="font-semibold text-tm-slate">1. Review:</span> a TalentMasters advisor reads your answers.</li>
            <li><span className="font-semibold text-tm-slate">2. Response:</span> we get back to you, usually within two working days.</li>
            <li><span className="font-semibold text-tm-slate">3. Next step:</span> together we agree whether a workshop, 90-day programme or annual partnership fits best — or none at all.</li>
          </ol>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={tmWhatsappHref('Hello TalentMasters, I have just submitted the workforce needs assessment.')}
              external
              event="tm_whatsapp_click"
              params={{ location: 'thank_you' }}
              className={tmBtn.teal}
            >
              Message Us on WhatsApp
            </TrackedLink>
            <Link href={`${TM_ROUTES.home}#offers`} className={tmBtn.secondaryLight}>
              Review Our Programmes
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
