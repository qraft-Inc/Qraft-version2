'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  event: string;
  params?: Record<string, unknown>;
  className?: string;
  external?: boolean;
  children: React.ReactNode;
}

// Link that fires a GA4 event on click, usable from server components
export default function TrackedLink({ href, event, params, className, external, children }: TrackedLinkProps) {
  const onClick = () => trackEvent(event, params);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
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
