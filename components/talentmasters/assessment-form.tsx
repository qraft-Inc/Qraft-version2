'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  AUDIENCES,
  BUDGET_STATUSES,
  CHALLENGE_AREAS,
  CONSENT_TEXT,
  NEXT_PARAM_TO_STEP,
  NEXT_STEPS,
  OFFER_PARAM_TO_PROGRAMME,
  ORG_SIZES,
  PARTICIPANT_RANGES,
  PROGRAMME_TYPES,
  START_TIMELINES,
  assessmentSchema,
} from '@/lib/talentmasters/assessment';
import { trackTm } from '@/lib/talentmasters/analytics';
import { TM_CONTACT_EMAIL, TM_ROUTES, tmWhatsappHref } from '@/lib/talentmasters/offers';
import { captureAttribution } from './tracked-link';
import { tmBtn } from './ui';

type FormState = {
  organizationName: string;
  industry: string;
  organizationSize: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  challengeAreas: string[];
  otherChallenge: string;
  biggestChallenge: string;
  desiredImprovement: string;
  audiences: string[];
  participants: string;
  programmeType: string;
  startTimeline: string;
  budgetStatus: string;
  nextStep: string;
  consent: boolean;
};

const empty: FormState = {
  organizationName: '',
  industry: '',
  organizationSize: '',
  contactName: '',
  jobTitle: '',
  email: '',
  phone: '',
  challengeAreas: [],
  otherChallenge: '',
  biggestChallenge: '',
  desiredImprovement: '',
  audiences: [],
  participants: '',
  programmeType: '',
  startTimeline: '',
  budgetStatus: '',
  nextStep: '',
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

const FIELD_ORDER: (keyof FormState)[] = Object.keys(empty) as (keyof FormState)[];

const inputClass =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-tm-slate focus:border-tm-teal focus:outline-none focus:ring-2 focus:ring-tm-teal/30 aria-[invalid=true]:border-red-500';
const labelClass = 'mb-1.5 block text-sm font-semibold text-tm-slate';

function newId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  // RFC4122 v4 fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} <span className="text-red-600" aria-hidden="true">*</span>
      </label>
      {hint ? <p className="mb-2 text-xs text-neutral-500">{hint}</p> : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Fieldset({ letter, title, children }: { letter: string; title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7">
      <legend className="sr-only">{title}</legend>
      <p className="mb-5 flex items-center gap-3 font-display text-lg font-bold text-tm-slate" aria-hidden="true">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tm-teal text-sm text-white">{letter}</span>
        {title}
      </p>
      <div className="space-y-5">{children}</div>
    </fieldset>
  );
}

export default function AssessmentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const offerParam = searchParams?.get('offer') ?? '';
  const nextParam = searchParams?.get('next') ?? '';

  const [form, setForm] = useState<FormState>(() => ({
    ...empty,
    programmeType: OFFER_PARAM_TO_PROGRAMME[offerParam] ?? '',
    nextStep: NEXT_PARAM_TO_STEP[nextParam] ?? '',
  }));
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const startedAt = useRef<number>(Date.now());
  const started = useRef(false);
  const submissionId = useRef<string>('');
  const submitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    submissionId.current = newId();
    startedAt.current = Date.now();
  }, []);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackTm('tm_assessment_start', { offer: offerParam || 'none' });
  };

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    markStarted();
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggle = (key: 'challengeAreas' | 'audiences', value: string) => {
    const list = form[key];
    set(key, list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const focusFirstError = (errs: Errors) => {
    const first = FIELD_ORDER.find((key) => errs[key]);
    if (!first) return;
    const el = formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`);
    el?.focus();
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return; // block double submits
    setServerMessage('');

    const result = assessmentSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const next: Errors = {};
      (Object.keys(fieldErrors) as (keyof FormState)[]).forEach((key) => {
        next[key] = fieldErrors[key as keyof typeof fieldErrors]?.[0];
      });
      setErrors(next);
      focusFirstError(next);
      return;
    }

    submitting.current = true;
    setStatus('submitting');

    try {
      const attribution = captureAttribution();
      const response = await fetch('/api/talentmasters-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: result.data,
          meta: {
            submissionId: submissionId.current,
            website: honeypot,
            elapsedMs: Date.now() - startedAt.current,
            source: { ...attribution, offerParam: offerParam || undefined },
          },
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (payload?.fieldErrors) {
          const next: Errors = {};
          Object.entries(payload.fieldErrors as Record<string, string[]>).forEach(([key, msgs]) => {
            next[key as keyof FormState] = msgs?.[0];
          });
          setErrors(next);
          focusFirstError(next);
        }
        throw new Error(payload?.message || 'We could not submit your assessment. Please try again.');
      }

      // Categorical, non-personal parameters only
      trackTm('tm_assessment_complete', {
        programme_type: result.data.programmeType,
        next_step: result.data.nextStep,
        org_size: result.data.organizationSize,
        participants: result.data.participants,
        budget_status: result.data.budgetStatus,
      });
      if (result.data.nextStep === 'Schedule a consultation') trackTm('tm_consultation_request', { location: 'assessment' });
      if (result.data.nextStep === 'Send a quotation') trackTm('tm_proposal_request', { location: 'assessment' });
      if (result.data.programmeType === 'One-time workshop') trackTm('tm_workshop_enquiry', { location: 'assessment' });
      if (result.data.programmeType === '90-day programme') trackTm('tm_accelerator_enquiry', { location: 'assessment' });
      if (result.data.programmeType === 'Annual workforce partnership' || result.data.nextStep === 'Discuss an annual partnership')
        trackTm('tm_annual_enquiry', { location: 'assessment' });

      const step = Object.entries(NEXT_PARAM_TO_STEP).find(([, v]) => v === result.data.nextStep)?.[0] ?? 'recommend';
      router.push(`${TM_ROUTES.thankYou}?next=${step}`);
    } catch (error) {
      submitting.current = false;
      setStatus('error');
      setServerMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const err = (key: keyof FormState) =>
    errors[key] ? { 'aria-invalid': true as const, 'aria-describedby': `tm-${key}-error` } : {};

  const select = (key: keyof FormState, options: readonly string[], placeholder: string) => (
    <select
      id={`tm-${key}`}
      data-field={key}
      className={inputClass}
      value={form[key] as string}
      onChange={(e) => set(key, e.target.value as never)}
      {...err(key)}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );

  const text = (key: keyof FormState, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <input
      id={`tm-${key}`}
      data-field={key}
      className={inputClass}
      value={form[key] as string}
      onChange={(e) => set(key, e.target.value as never)}
      {...err(key)}
      {...props}
    />
  );

  const radioGroup = (key: 'programmeType' | 'nextStep' | 'budgetStatus', options: readonly string[], label: string) => (
    <div role="radiogroup" aria-labelledby={`tm-${key}-label`} {...err(key)}>
      <p id={`tm-${key}-label`} className={labelClass}>
        {label} <span className="text-red-600" aria-hidden="true">*</span>
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o, i) => (
          <label
            key={o}
            className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${form[key] === o ? 'border-tm-teal bg-tm-teal-light' : 'border-neutral-300 hover:border-tm-teal'}`}
          >
            <input
              type="radio"
              name={key}
              value={o}
              checked={form[key] === o}
              onChange={() => set(key, o)}
              data-field={i === 0 ? key : undefined}
              className="h-4 w-4 accent-[#0F4C5C]"
            />
            {o}
          </label>
        ))}
      </div>
      {errors[key] ? (
        <p id={`tm-${key}-error`} className="mt-1.5 text-sm text-red-600">
          {errors[key]}
        </p>
      ) : null}
    </div>
  );

  const checkboxGroup = (key: 'challengeAreas' | 'audiences', options: readonly string[], label: string, hint?: string) => (
    <div role="group" aria-labelledby={`tm-${key}-label`}>
      <p id={`tm-${key}-label`} className={labelClass}>
        {label} <span className="text-red-600" aria-hidden="true">*</span>
      </p>
      {hint ? <p className="mb-2 text-xs text-neutral-500">{hint}</p> : null}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o, i) => (
          <label
            key={o}
            className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${form[key].includes(o) ? 'border-tm-teal bg-tm-teal-light' : 'border-neutral-300 hover:border-tm-teal'}`}
          >
            <input
              type="checkbox"
              checked={form[key].includes(o)}
              onChange={() => toggle(key, o)}
              data-field={i === 0 ? key : undefined}
              aria-describedby={errors[key] ? `tm-${key}-error` : undefined}
              className="h-4 w-4 accent-[#0F4C5C]"
            />
            {o}
          </label>
        ))}
      </div>
      {errors[key] ? (
        <p id={`tm-${key}-error`} className="mt-1.5 text-sm text-red-600">
          {errors[key]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" onFocus={markStarted}>
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="tm-website">Website</label>
        <input id="tm-website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <Fieldset letter="A" title="Organization details">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="tm-organizationName" label="Organization name" error={errors.organizationName}>
            {text('organizationName', { autoComplete: 'organization', maxLength: 150 })}
          </Field>
          <Field id="tm-industry" label="Industry or sector" error={errors.industry}>
            {text('industry', { placeholder: 'e.g. Banking, Healthcare, NGO', maxLength: 100 })}
          </Field>
        </div>
        <Field id="tm-organizationSize" label="Organization size" error={errors.organizationSize}>
          {select('organizationSize', ORG_SIZES, 'Select organization size')}
        </Field>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="tm-contactName" label="Contact person" error={errors.contactName}>
            {text('contactName', { autoComplete: 'name', maxLength: 100 })}
          </Field>
          <Field id="tm-jobTitle" label="Position or job title" error={errors.jobTitle}>
            {text('jobTitle', { autoComplete: 'organization-title', maxLength: 100 })}
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="tm-email" label="Work email" error={errors.email}>
            {text('email', { type: 'email', autoComplete: 'email', inputMode: 'email', placeholder: 'you@organization.com' })}
          </Field>
          <Field id="tm-phone" label="Phone / WhatsApp" error={errors.phone}>
            {text('phone', { type: 'tel', autoComplete: 'tel', inputMode: 'tel', placeholder: '+256 700 000 000' })}
          </Field>
        </div>
      </Fieldset>

      <Fieldset letter="B" title="Workforce challenges">
        {checkboxGroup('challengeAreas', CHALLENGE_AREAS, 'Which areas need improvement?', 'Choose all that apply.')}
        {form.challengeAreas.includes('Other') ? (
          <div>
            <label htmlFor="tm-otherChallenge" className={labelClass}>
              Other area (optional)
            </label>
            <input
              id="tm-otherChallenge"
              className={inputClass}
              value={form.otherChallenge}
              maxLength={150}
              onChange={(e) => set('otherChallenge', e.target.value)}
            />
          </div>
        ) : null}
        <Field id="tm-biggestChallenge" label="What is the biggest workforce challenge you want to solve?" error={errors.biggestChallenge}>
          <textarea
            id="tm-biggestChallenge"
            data-field="biggestChallenge"
            rows={4}
            maxLength={1500}
            className={inputClass}
            value={form.biggestChallenge}
            onChange={(e) => set('biggestChallenge', e.target.value)}
            {...err('biggestChallenge')}
          />
        </Field>
        <Field
          id="tm-desiredImprovement"
          label="What would you like your employees or managers to do better?"
          error={errors.desiredImprovement}
        >
          <textarea
            id="tm-desiredImprovement"
            data-field="desiredImprovement"
            rows={4}
            maxLength={1500}
            className={inputClass}
            value={form.desiredImprovement}
            onChange={(e) => set('desiredImprovement', e.target.value)}
            {...err('desiredImprovement')}
          />
        </Field>
      </Fieldset>

      <Fieldset letter="C" title="Training requirements">
        {checkboxGroup('audiences', AUDIENCES, 'Who needs development?')}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="tm-participants" label="Approximate number of participants" error={errors.participants}>
            {select('participants', PARTICIPANT_RANGES, 'Select a range')}
          </Field>
          <Field id="tm-startTimeline" label="When would you like to begin?" error={errors.startTimeline}>
            {select('startTimeline', START_TIMELINES, 'Select a timeframe')}
          </Field>
        </div>
        {radioGroup('programmeType', PROGRAMME_TYPES, 'Preferred programme type')}
      </Fieldset>

      <Fieldset letter="D" title="Next steps">
        {radioGroup('budgetStatus', BUDGET_STATUSES, 'What is the status of your training budget?')}
        {radioGroup('nextStep', NEXT_STEPS, 'What would you like TalentMasters to do next?')}
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-neutral-700">
            <input
              type="checkbox"
              data-field="consent"
              checked={form.consent}
              onChange={(e) => set('consent', e.target.checked)}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? 'tm-consent-error' : undefined}
              className="mt-0.5 h-5 w-5 flex-shrink-0 accent-[#0F4C5C]"
            />
            <span>
              {CONSENT_TEXT} <span className="text-red-600" aria-hidden="true">*</span>
            </span>
          </label>
          {errors.consent ? (
            <p id="tm-consent-error" className="mt-1.5 text-sm text-red-600">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </Fieldset>

      {Object.values(errors).some(Boolean) ? (
        <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          Please complete the highlighted fields above.
        </p>
      ) : null}

      {status === 'error' && serverMessage ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
          <p>{serverMessage}</p>
          <p className="mt-2">
            <a href={tmWhatsappHref('Hello TalentMasters, I tried to submit the workforce needs assessment on your website.')} className="font-semibold underline" target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>{' '}
            or email{' '}
            <a href={`mailto:${TM_CONTACT_EMAIL}?subject=TalentMasters%20workforce%20needs%20assessment`} className="font-semibold underline">
              {TM_CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      ) : null}

      <button type="submit" disabled={status === 'submitting'} className={`${tmBtn.primary} w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto`}>
        {status === 'submitting' ? 'Submitting…' : 'Submit My Free Assessment'}
      </button>
      <p className="text-xs text-neutral-500">
        We use your answers only to respond to this enquiry. We never publish or share your details.
      </p>
    </form>
  );
}
