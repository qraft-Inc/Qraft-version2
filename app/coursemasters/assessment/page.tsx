'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const TALLY_FORM_ID = 'RGOoYp';
const TALLY_SCRIPT_SRC = 'https://tally.so/widgets/embed.js';

// Forwarded as query params on the embed URL. Each must be added as a
// matching "hidden field" inside the Tally form builder to actually
// land in the submission data.
const PASSTHROUGH_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'interest', 'ref'];

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export default function CourseMastersAssessmentPage() {
  const router = useRouter();
  const hasTrackedStart = useRef(false);
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;

    const params = new URLSearchParams(window.location.search);
    const tallyParams = new URLSearchParams({
      alignLeft: '1',
      hideTitle: '1',
      transparentBackground: '1',
      dynamicHeight: '1'
    });
    PASSTHROUGH_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) tallyParams.set(key, value);
    });
    setEmbedSrc(`https://tally.so/embed/${TALLY_FORM_ID}?${tallyParams.toString()}`);

    const interestParam = params.get('interest');
    trackEvent('coursemasters_assessment_start', interestParam ? { interest: interestParam } : undefined);
  }, []);

  useEffect(() => {
    if (!embedSrc) return;

    const loadEmbeds = () => window.Tally?.loadEmbeds();

    if (window.Tally) {
      loadEmbeds();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TALLY_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener('load', loadEmbeds);
      return () => existing.removeEventListener('load', loadEmbeds);
    }

    const script = document.createElement('script');
    script.src = TALLY_SCRIPT_SRC;
    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    document.body.appendChild(script);
  }, [embedSrc]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      let payload: unknown = event.data;
      if (typeof payload === 'string') {
        try {
          payload = JSON.parse(payload);
        } catch {
          return;
        }
      }
      if (!payload || typeof payload !== 'object') return;
      const tallyEvent = (payload as { event?: string }).event;
      if (tallyEvent === 'Tally.FormSubmitted') {
        trackEvent('coursemasters_assessment_submit', { formId: TALLY_FORM_ID });
        router.push('/coursemasters/assessment/thank-you');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3">
              CourseMasters™ by Qraft Academy
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Digital Learning Assessment
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Discover how your organization can transform its knowledge, training materials and programmes into scalable digital learning.
            </p>
          </div>

          {embedSrc && (
            // eslint-disable-next-line jsx-a11y/iframe-has-title -- title provided below
            <iframe
              key={embedSrc}
              data-tally-src={embedSrc}
              loading="lazy"
              width="100%"
              height={800}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="CourseMasters Digital Learning Assessment"
              className="w-full"
            />
          )}

          <div className="text-center mt-8">
            <Link href="/coursemasters" className="text-sm font-semibold text-slate-500 hover:text-slate-800">
              ← Back to CourseMasters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
