import { NextResponse } from 'next/server';
import { MailerNotConfiguredError, sendInquiryEmail } from '@/lib/mailer';
import { CMS_ADD_ONS, CMS_BUDGET_OPTIONS, CMS_CONTENT_VOLUME_OPTIONS, CMS_PACKAGE_NAMES, CMS_PROJECT_TYPES } from '@/lib/cms';

export const runtime = 'nodejs';

interface CmsEnquiryRequest {
  name?: string;
  organization?: string;
  email?: string;
  country?: string;
  projectType?: string;
  existingWebsite?: string;
  contentVolume?: string;
  languages?: string;
  budget?: string;
  launchDate?: string;
  description?: string;
  selectedPackage?: string;
  addOns?: unknown;
  company_website?: string; // honeypot
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;

const clean = (value?: string) => value?.trim().slice(0, MAX_LEN) || '';
const isOneOf = (list: readonly string[], value: string) => list.includes(value);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CmsEnquiryRequest;

    // Silently accept bot submissions that fill the hidden honeypot field
    if (clean(body.company_website)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name);
    const organization = clean(body.organization);
    const email = clean(body.email);
    const country = clean(body.country);
    const projectType = clean(body.projectType);
    const existingWebsite = clean(body.existingWebsite);
    const contentVolume = clean(body.contentVolume);
    const languages = clean(body.languages);
    const budget = clean(body.budget);
    const launchDate = clean(body.launchDate);
    const description = clean(body.description);
    const selectedPackage = clean(body.selectedPackage);
    const addOns = Array.isArray(body.addOns)
      ? body.addOns.filter((a): a is string => typeof a === 'string' && isOneOf(CMS_ADD_ONS, a))
      : [];

    if (!name || !organization || !email || !country || !projectType || !contentVolume || !languages || !budget || !launchDate || !description) {
      return NextResponse.json({ message: 'Please fill in all required fields.' }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid work email address.' }, { status: 400 });
    }

    if (!isOneOf(CMS_PROJECT_TYPES, projectType)) {
      return NextResponse.json({ message: 'Please select a valid project type.' }, { status: 400 });
    }

    if (!isOneOf(CMS_BUDGET_OPTIONS, budget)) {
      return NextResponse.json({ message: 'Please select a valid budget range.' }, { status: 400 });
    }

    if (!isOneOf(CMS_CONTENT_VOLUME_OPTIONS, contentVolume)) {
      return NextResponse.json({ message: 'Please select an approximate content volume.' }, { status: 400 });
    }

    if (selectedPackage && !isOneOf(CMS_PACKAGE_NAMES, selectedPackage)) {
      return NextResponse.json({ message: 'Please select a valid package.' }, { status: 400 });
    }

    await sendInquiryEmail({
      subject: `CMS enquiry: ${organization} — ${projectType} (${budget})`,
      heading: 'New CourseMasters™ CMS project enquiry',
      replyTo: email,
      fields: [
        ['Full Name', name],
        ['Organisation', organization],
        ['Work Email', email],
        ['Country', country],
        ['Project Type', projectType],
        ['Package of Interest', selectedPackage || 'Not specified'],
        ['Existing Website', existingWebsite || 'N/A'],
        ['Approximate Content Volume', contentVolume],
        ['Required Languages', languages],
        ['Estimated Budget', budget],
        ['Desired Launch Date', launchDate],
        ['Additional Services of Interest', addOns.length ? addOns.join(', ') : 'None selected'],
      ],
      longField: ['Project Description', description],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof MailerNotConfiguredError) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Unable to send your enquiry right now.' }, { status: 500 });
  }
}
