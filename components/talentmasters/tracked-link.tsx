'use client';

import Link from 'next/link';
import { useEffect, type ReactNode } from 'react';
import { trackTm, type TmEvent } from '@/lib/talentmasters/analytics';

interface TrackedLinkProps {
  href: string;
  event: TmEvent;
  params?: Record<string, string>;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

/** A link that records a TalentMasters conversion event (no personal data) when clicked. */
export function TrackedLink({ href, event, params, className, children, external }: TrackedLinkProps) {
  const onClick = () => trackTm(event, params);

  if (external) {
    return (
      <a href={href} className={className} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

const ATTRIBUTION_KEY = 'tm_attribution';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number] | 'referrer' | 'landingPage', string>>;

/** First-touch attribution for this browser session (campaign parameters, referrer, landing page). */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) fromUrl[key] = value.slice(0, 100);
  });

  let stored: Attribution | null = null;
  try {
    stored = JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_KEY) || 'null');
  } catch {
    stored = null;
  }

  // New campaign parameters replace older ones; otherwise keep the first touch.
  if (stored && Object.keys(fromUrl).length === 0) return stored;

  const attribution: Attribution = {
    ...fromUrl,
    referrer: document.referrer ? document.referrer.slice(0, 300) : undefined,
    landingPage: window.location.pathname.slice(0, 300),
  };
  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Storage unavailable (private mode) — attribution is best effort.
  }
  return attribution;
}

/** Fires a single `tm_page_view` event for the given page and records session attribution. */
export function TmPageView({ page }: { page: string }) {
  useEffect(() => {
    captureAttribution();
    trackTm('tm_page_view', { page });
  }, [page]);
  return null;
}
