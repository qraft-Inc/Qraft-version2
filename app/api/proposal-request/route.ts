import { NextResponse } from 'next/server';
import { MailerNotConfiguredError, sendInquiryEmail } from '@/lib/mailer';
import { ORGANIZATION_TYPES, SOLUTIONS_OF_INTEREST } from '@/lib/proposal';

export const runtime = 'nodejs';

interface ProposalRequest {
  name?: string;
  email?: string;
  organizationName?: string;
  organizationType?: string;
  solution?: string;
  projectScope?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ProposalRequest;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const organizationName = body.organizationName?.trim();
    const organizationType = body.organizationType?.trim();
    const solution = body.solution?.trim();
    const projectScope = body.projectScope?.trim();

    if (!name || !email || !organizationName || !organizationType || !solution || !projectScope) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!(ORGANIZATION_TYPES as readonly string[]).includes(organizationType)) {
      return NextResponse.json(
        { message: 'Please select a valid organization type.' },
        { status: 400 }
      );
    }

    if (!(SOLUTIONS_OF_INTEREST as readonly string[]).includes(solution)) {
      return NextResponse.json(
        { message: 'Please select a valid solution of interest.' },
        { status: 400 }
      );
    }

    await sendInquiryEmail({
      subject: `Institutional RFP: ${organizationName} — ${solution}`,
      heading: 'New institutional RFP / diagnostic request',
      replyTo: email,
      fields: [
        ['Full Name', name],
        ['Work Email', email],
        ['Organization / Institution', organizationName],
        ['Organization Type', organizationType],
        ['Solution of Interest', solution],
      ],
      longField: ['Project Scope / Overview', projectScope],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof MailerNotConfiguredError) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: 'Unable to send your request right now.' },
      { status: 500 }
    );
  }
}
