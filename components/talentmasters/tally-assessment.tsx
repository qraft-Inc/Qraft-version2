'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { trackTm } from '@/lib/talentmasters/analytics';
import { TM_ROUTES } from '@/lib/talentmasters/offers';

const TALLY_FORM_ID = 'peo4o1';
const TALLY_SCRIPT_SRC = 'https://tally.so/widgets/embed.js';

// Forwarded to Tally as query params. Each must exist as a matching hidden field
// in the Tally form builder to be saved with the submission.
const PASSTHROUGH_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'offer', 'next', 'ref'];

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export default function TallyAssessment() {
  const router = useRouter();
  const started = useRef(false);
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const params = new URLSearchParams(window.location.search);
    const tallyParams = new URLSearchParams({
      alignLeft: '1',
      hideTitle: '1',
      transparentBackground: '1',
      dynamicHeight: '1',
    });
    PASSTHROUGH_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) tallyParams.set(key, value.slice(0, 100));
    });
    setEmbedSrc(`https://tally.so/embed/${TALLY_FORM_ID}?${tallyParams.toString()}`);
    trackTm('tm_assessment_start', { offer: params.get('offer') || 'none' });
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
      if (event.origin !== 'https://tally.so') return;
      let data: unknown = event.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (!data || typeof data !== 'object') return;
      const { event: name, payload } = data as { event?: string; payload?: { formId?: string } };
      if (name !== 'Tally.FormSubmitted') return;
      if (payload?.formId && payload.formId !== TALLY_FORM_ID) return;

      const offer = new URLSearchParams(window.location.search).get('offer') || 'none';
      trackTm('tm_assessment_complete', { form_id: TALLY_FORM_ID, offer });
      router.push(TM_ROUTES.thankYou);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  if (!embedSrc) return <p className="text-neutral-600">Loading the assessment…</p>;

  return (
    <iframe
      key={embedSrc}
      data-tally-src={embedSrc}
      loading="lazy"
      width="100%"
      height={800}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="TalentMasters Workforce Performance & Training Needs Assessment"
      className="w-full"
    />
  );
}
