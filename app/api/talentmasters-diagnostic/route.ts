import { NextResponse } from 'next/server';
import { MailerNotConfiguredError, sendInquiryEmail } from '@/lib/mailer';
import { EMPLOYEE_COUNT_OPTIONS, INTEREST_AREA_OPTIONS } from '@/lib/proposal';

export const runtime = 'nodejs';

interface DiagnosticRequest {
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  employeeCount?: string;
  interestArea?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DiagnosticRequest;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const companyName = body.companyName?.trim();
    const employeeCount = body.employeeCount?.trim();
    const interestArea = body.interestArea?.trim();

    if (!name || !email || !phone || !companyName || !employeeCount || !interestArea) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (
      !(EMPLOYEE_COUNT_OPTIONS as readonly string[]).includes(employeeCount) ||
      !(INTEREST_AREA_OPTIONS as readonly string[]).includes(interestArea)
    ) {
      return NextResponse.json(
        { message: 'Please choose from the listed options.' },
        { status: 400 }
      );
    }

    await sendInquiryEmail({
      subject: `TalentMasters™ diagnostic request: ${companyName} (${employeeCount} staff)`,
      heading: 'New TalentMasters™ capability diagnostic request',
      replyTo: email,
      fields: [
        ['Full Name', name],
        ['Work Email', email],
        ['Phone / WhatsApp', phone],
        ['Organization Name', companyName],
        ['Staff Count', employeeCount],
        ['Primary Area of Interest', interestArea],
      ],
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
