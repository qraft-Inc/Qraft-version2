/** Options and validation for the TalentMasters Workforce Needs Assessment (shared by the form and the API). */
import { z } from 'zod';

export const ORG_SIZES = [
  'Micro organization (1–10 staff)',
  'Small organization (11–50 staff)',
  'Medium-sized organization (51–250 staff)',
  'Large organization (250+ staff)',
] as const;

export const CHALLENGE_AREAS = [
  'Employee productivity',
  'Leadership and management',
  'Teamwork and collaboration',
  'Communication',
  'Employee wellbeing',
  'Workplace safety',
  'Digital skills and AI',
  'Professional development',
  'Employee onboarding',
  'Organizational culture',
  'Other',
] as const;

export const AUDIENCES = ['Employees', 'Managers', 'Executives', 'A combination'] as const;

export const PARTICIPANT_RANGES = ['1–10', '11–20', '21–50', '51–100', '100+'] as const;

export const PROGRAMME_TYPES = [
  'One-time workshop',
  '90-day programme',
  'Annual workforce partnership',
  'Not sure; recommend a suitable option',
] as const;

export const START_TIMELINES = ['Within 1 month', '1–3 months', '3–6 months', 'Not yet decided'] as const;

export const BUDGET_STATUSES = [
  'Budget approved',
  'Budget being considered',
  'Need a quotation for approval',
  'Exploring options',
] as const;

export const NEXT_STEPS = [
  'Recommend a suitable training programme',
  'Send a quotation',
  'Schedule a consultation',
  'Discuss an annual partnership',
] as const;

/** Maps `?offer=` to a programme type and `?next=` to a next step. */
export const OFFER_PARAM_TO_PROGRAMME: Record<string, (typeof PROGRAMME_TYPES)[number]> = {
  workshop: 'One-time workshop',
  accelerator: '90-day programme',
  annual: 'Annual workforce partnership',
  unsure: 'Not sure; recommend a suitable option',
};

export const NEXT_PARAM_TO_STEP: Record<string, (typeof NEXT_STEPS)[number]> = {
  quotation: 'Send a quotation',
  consultation: 'Schedule a consultation',
  annual: 'Discuss an annual partnership',
};

export const CONSENT_TEXT =
  'I agree that Qraft Academy / TalentMasters may contact me by email, phone or WhatsApp about this enquiry. My details will not be shared with third parties.';

const text = (max: number) => z.string().trim().min(1, 'This field is required.').max(max, `Please keep this under ${max} characters.`);

export const assessmentSchema = z.object({
  organizationName: text(150),
  industry: text(100),
  organizationSize: z.enum(ORG_SIZES, { errorMap: () => ({ message: 'Please choose an organization size.' }) }),
  contactName: text(100),
  jobTitle: text(100),
  email: z.string().trim().email('Please enter a valid email address.').max(150),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d\s-]{7,20}$/, 'Please enter a valid phone or WhatsApp number.'),

  challengeAreas: z.array(z.enum(CHALLENGE_AREAS)).min(1, 'Please choose at least one area.'),
  otherChallenge: z.string().trim().max(150).optional().default(''),
  biggestChallenge: text(1500),
  desiredImprovement: text(1500),

  audiences: z.array(z.enum(AUDIENCES)).min(1, 'Please choose who needs development.'),
  participants: z.enum(PARTICIPANT_RANGES, { errorMap: () => ({ message: 'Please choose a participant range.' }) }),
  programmeType: z.enum(PROGRAMME_TYPES, { errorMap: () => ({ message: 'Please choose a programme type.' }) }),
  startTimeline: z.enum(START_TIMELINES, { errorMap: () => ({ message: 'Please choose a start time.' }) }),

  budgetStatus: z.enum(BUDGET_STATUSES, { errorMap: () => ({ message: 'Please choose your budget status.' }) }),
  nextStep: z.enum(NEXT_STEPS, { errorMap: () => ({ message: 'Please choose a next step.' }) }),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm we may contact you about this enquiry.' }) }),
});

export type AssessmentInput = z.infer<typeof assessmentSchema>;

/** Metadata sent alongside the answers. Not personal data; never forwarded to analytics. */
export const assessmentMetaSchema = z.object({
  submissionId: z.string().uuid(),
  website: z.string().max(1000).optional().default(''), // honeypot — real users leave it empty
  elapsedMs: z.number().int().nonnegative(),
  source: z
    .object({
      utm_source: z.string().max(100).optional(),
      utm_medium: z.string().max(100).optional(),
      utm_campaign: z.string().max(100).optional(),
      utm_term: z.string().max(100).optional(),
      utm_content: z.string().max(100).optional(),
      referrer: z.string().max(300).optional(),
      landingPage: z.string().max(300).optional(),
      offerParam: z.string().max(30).optional(),
    })
    .default({}),
});

export type AssessmentMeta = z.infer<typeof assessmentMetaSchema>;
