import nodemailer from 'nodemailer';

export class MailerNotConfiguredError extends Error {}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

interface InquiryEmail {
  subject: string;
  heading: string;
  replyTo: string;
  fields: [string, string][];
  longField?: [string, string];
}

// Sends a lead-capture inquiry to the partnerships inbox using the SMTP_* env vars
export async function sendInquiryEmail({ subject, heading, replyTo, fields, longField }: InquiryEmail) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!host || !port || !user || !pass || !from) {
    throw new MailerNotConfiguredError('Email service is not configured.');
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

  const textLong = longField ? `\n\n${longField[0]}:\n${longField[1]}` : '';
  const htmlLong = longField
    ? `<p><strong>${longField[0]}:</strong></p>\n<p>${escapeHtml(longField[1]).replace(/\n/g, '<br />')}</p>`
    : '';

  await transporter.sendMail({
    from,
    to: 'drew@qraftacademy.com',
    replyTo,
    subject,
    text: fields.map(([label, value]) => `${label}: ${value}`).join('\n') + textLong,
    html: `
      <h2>${heading}</h2>
      ${fields.map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`).join('\n')}
      ${htmlLong}
    `.trim()
  });
}
