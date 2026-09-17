import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface AssessmentRequest {
  name?: string;
  organization?: string;
  role?: string;
  email?: string;
  phone?: string;
  needs?: string[];
  content?: string[];
  hasLms?: string;
  learnerCount?: string;
  timeline?: string;
  message?: string;
  interest?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssessmentRequest;
    const name = body.name?.trim();
    const organization = body.organization?.trim();
    const role = body.role?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const needs = Array.isArray(body.needs) ? body.needs : [];
    const content = Array.isArray(body.content) ? body.content : [];
    const hasLms = body.hasLms?.trim() || 'Not specified';
    const learnerCount = body.learnerCount?.trim() || 'Not specified';
    const timeline = body.timeline?.trim() || 'Not specified';
    const message = body.message?.trim() || 'N/A';
    const interest = body.interest?.trim();

    if (!name || !organization || !email || !phone) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    if (!host || !port || !user || !pass || !from) {
      return NextResponse.json(
        { message: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      }
    });

    const needsText = needs.length ? needs.join(', ') : 'Not specified';
    const contentText = content.length ? content.join(', ') : 'Not specified';

    await transporter.sendMail({
      from,
      to: 'drew@qraftacademy.com',
      replyTo: email,
      subject: `CourseMasters Digital Learning Assessment request from ${name} (${organization})`,
      text:
        `Name: ${name}\n` +
        `Organization: ${organization}\n` +
        `Role/Title: ${role || 'N/A'}\n` +
        `Email: ${email}\n` +
        `Phone/WhatsApp: ${phone}\n` +
        `Referring interest: ${interest || 'N/A'}\n\n` +
        `Wants help with: ${needsText}\n` +
        `Current content: ${contentText}\n` +
        `Has LMS: ${hasLms}\n` +
        `Approximate learners: ${learnerCount}\n` +
        `Desired launch: ${timeline}\n\n` +
        `Goals:\n${message}`,
      html: `
        <h2>New CourseMasters Digital Learning Assessment request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Role/Title:</strong> ${role || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
        <p><strong>Referring interest:</strong> ${interest || 'N/A'}</p>
        <p><strong>Wants help with:</strong> ${needsText}</p>
        <p><strong>Current content:</strong> ${contentText}</p>
        <p><strong>Has LMS:</strong> ${hasLms}</p>
        <p><strong>Approximate learners:</strong> ${learnerCount}</p>
        <p><strong>Desired launch:</strong> ${timeline}</p>
        <p><strong>Goals:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `.trim()
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'Unable to send your request right now.' },
      { status: 500 }
    );
  }
}
