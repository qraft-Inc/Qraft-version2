import { NextResponse } from 'next/server';
import { MailerNotConfiguredError, sendInquiryEmail } from '@/lib/mailer';
import { assessmentMetaSchema, assessmentSchema, CONSENT_TEXT, type AssessmentInput } from '@/lib/talentmasters/assessment';

export const runtime = 'nodejs';

const MIN_FILL_MS = 4000; // faster than this is almost certainly a bot
const RATE_LIMIT = 5; // submissions per IP per window
const RATE_WINDOW_MS = 60 * 60 * 1000;
const DEDUPE_WINDOW_MS = 30 * 60 * 1000;

// Best-effort, per-instance protection. The client also blocks double submits.
const recentIds = new Map<string, number>();
const ipHits = new Map<string, number[]>();

function prune(now: number) {
  recentIds.forEach((t, id) => {
    if (now - t > DEDUPE_WINDOW_MS) recentIds.delete(id);
  });
  ipHits.forEach((hits, ip) => {
    const fresh = hits.filter((t) => now - t < RATE_WINDOW_MS);
    if (fresh.length) ipHits.set(ip, fresh);
    else ipHits.delete(ip);
  });
}

/** Simple, explainable lead classification for the sales inbox. */
function classify(data: AssessmentInput) {
  const ready = data.budgetStatus === 'Budget approved' || data.budgetStatus === 'Need a quotation for approval';
  const soon = data.startTimeline === 'Within 1 month' || data.startTimeline === '1–3 months';
  const priority = ready && soon ? 'High' : ready || soon ? 'Medium' : 'Nurture';
  const service =
    data.programmeType === 'Annual workforce partnership'
      ? 'Annual partnership'
      : data.programmeType === '90-day programme'
        ? '90-Day Accelerator'
        : data.programmeType === 'One-time workshop'
          ? 'Corporate workshop'
          : 'To be recommended';
  return { priority, service };
}

export async function POST(request: Request) {
  const now = Date.now();
  prune(now);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const metaResult = assessmentMetaSchema.safeParse(raw.meta);
  if (!metaResult.success) {
    return NextResponse.json({ message: 'Invalid request. Please refresh the page and try again.' }, { status: 400 });
  }
  const meta = metaResult.data;

  // Bots: honeypot filled or impossibly fast. Return success without sending.
  if (meta.website || meta.elapsedMs < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  // Duplicate submission (double click / retry after success)
  if (recentIds.has(meta.submissionId)) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const hits = ipHits.get(ip) ?? [];
  if (hits.length >= RATE_LIMIT) {
    return NextResponse.json(
      { message: 'Too many submissions from this connection. Please try again later or contact us on WhatsApp.' },
      { status: 429 }
    );
  }

  const parsed = assessmentSchema.safeParse(raw.data);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ message: 'Please check the highlighted fields.', fieldErrors }, { status: 400 });
  }
  const data = parsed.data;
  const { priority, service } = classify(data);
  const consentAt = new Date(now).toISOString();
  const src = meta.source;
  const sourceSummary =
    [src.utm_source, src.utm_medium, src.utm_campaign].filter(Boolean).join(' / ') || src.referrer || 'Direct / unknown';

  try {
    await sendInquiryEmail({
      to: process.env.TALENTMASTERS_LEADS_EMAIL || undefined,
      subject: `[TalentMasters lead · ${priority}] ${data.organizationName} — ${service}`,
      heading: 'New TalentMasters™ Workforce Needs Assessment',
      replyTo: data.email,
      fields: [
        ['Lead status', 'New'],
        ['Priority (auto)', priority],
        ['Requested next action', data.nextStep],
        ['Requested service', service],
        ['— Organization —', ''],
        ['Organization', data.organizationName],
        ['Industry / sector', data.industry],
        ['Organization size', data.organizationSize],
        ['Contact person', data.contactName],
        ['Position', data.jobTitle],
        ['Work email', data.email],
        ['Phone / WhatsApp', data.phone],
        ['— Needs —', ''],
        ['Areas to improve', data.challengeAreas.join(', ') + (data.otherChallenge ? ` (Other: ${data.otherChallenge})` : '')],
        ['Who needs development', data.audiences.join(', ')],
        ['Approx. participants', data.participants],
        ['Preferred programme', data.programmeType],
        ['Preferred start', data.startTimeline],
        ['Budget status', data.budgetStatus],
        ['— Attribution —', ''],
        ['Source', sourceSummary],
        ['UTM term / content', [src.utm_term, src.utm_content].filter(Boolean).join(' / ') || '—'],
        ['Landing page', src.landingPage || '—'],
        ['Offer link used', src.offerParam || '—'],
        ['— Consent —', ''],
        ['Follow-up consent', `Yes — ${consentAt}`],
        ['Consent wording', CONSENT_TEXT],
        ['Submission ID', meta.submissionId],
      ],
      longField: [
        'Biggest challenge / desired improvement',
        `BIGGEST CHALLENGE:\n${data.biggestChallenge}\n\nWHAT THEY WANT EMPLOYEES OR MANAGERS TO DO BETTER:\n${data.desiredImprovement}`,
      ],
    });
  } catch (error) {
    console.error('[talentmasters-assessment] email delivery failed', {
      submissionId: meta.submissionId,
      reason: error instanceof MailerNotConfiguredError ? 'mailer_not_configured' : 'send_failed',
    });
    return NextResponse.json(
      {
        message:
          'We could not submit your assessment right now. Your answers are still on this page — please try again, or contact us on WhatsApp or by email.',
      },
      { status: 502 }
    );
  }

  recentIds.set(meta.submissionId, now);
  ipHits.set(ip, [...hits, now]);

  return NextResponse.json({ ok: true, priority, service });
}
