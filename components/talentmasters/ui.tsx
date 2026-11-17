import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { statusLabels, type InitiativeStatus } from '@/lib/talentmasters/content';

export const tmBtn = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-xl bg-tm-coral px-6 py-3.5 text-base font-bold text-tm-slate shadow-sm transition-colors hover:bg-tm-coral-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tm-coral',
  secondaryDark:
    'inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  secondaryLight:
    'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-tm-teal px-6 py-3 text-base font-semibold text-tm-teal transition-colors hover:bg-tm-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tm-teal',
  teal:
    'inline-flex items-center justify-center gap-2 rounded-xl bg-tm-teal px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-tm-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tm-teal',
};

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 text-xs font-bold uppercase tracking-widest sm:text-sm ${dark ? 'text-tm-sage' : 'text-tm-teal'}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl ${dark ? 'text-white' : 'text-tm-slate'}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/80' : 'text-neutral-600'}`}>{intro}</p>
      ) : null}
    </div>
  );
}

export function CheckList({ items, className = '', dark }: { items: readonly string[]; className?: string; dark?: boolean }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2.5 text-sm sm:text-base ${dark ? 'text-white/90' : 'text-neutral-700'}`}>
          <Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${dark ? 'text-tm-sage' : 'text-tm-teal'}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const statusStyles: Record<InitiativeStatus, string> = {
  available: 'bg-tm-sage-light text-[#2F5A3A] border-tm-sage',
  proposal: 'bg-amber-50 text-amber-900 border-amber-300',
  opportunity: 'bg-tm-teal-light text-tm-teal border-tm-teal/30',
};

export function StatusBadge({ status }: { status: InitiativeStatus }) {
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}

export function TmWordmark({ dark }: { dark?: boolean }) {
  // Text wordmark only. Replace with the official, unaltered TalentMasters logo file once it is added to /public.
  return (
    <p className={`font-display text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-tm-slate'}`}>
      TalentMasters<sup className="text-xs">™</sup>{' '}
      <span className={`ml-1 text-sm font-normal ${dark ? 'text-white/70' : 'text-neutral-500'}`}>A Qraft Academy Solution</span>
    </p>
  );
}
