# TalentMasters™ Lead Measurement Plan

Internal reference for tracking TalentMasters lead generation. No figures here are targets or results — fill them in from real data.

## Where data comes from

| Source | What it records |
|---|---|
| Google Analytics 4 (`NEXT_PUBLIC_GOOGLE_ANALYTICS`) | Page views and the `tm_*` events below. No personal data is sent. |
| Lead emails (`/api/talentmasters-assessment`) | Every assessment submission, with lead classification and attribution. Sent to `TALENTMASTERS_LEADS_EMAIL` if set, otherwise `drew@qraftacademy.com`. |
| Sales tracker (to be chosen) | Lead status, proposal value and outcome. There is no CRM connected yet, so pipeline value has to be tracked manually. |

## Events

| Event | Fired when | Parameters (non-personal only) |
|---|---|---|
| `tm_page_view` | Any TalentMasters page loads | `page` |
| `tm_cta_click` | Free-assessment CTAs are clicked | `offer`, `location` |
| `tm_assessment_start` | First interaction with the assessment form | `offer` (from `?offer=`) |
| `tm_assessment_complete` | Assessment submitted successfully | `programme_type`, `next_step`, `org_size`, `participants`, `budget_status` |
| `tm_workshop_enquiry` | Workshop CTA click, or assessment with "One-time workshop" | `location` |
| `tm_accelerator_enquiry` | 90-day CTA click, or assessment with "90-day programme" | `location` |
| `tm_annual_enquiry` | Annual CTA/tier click, or assessment choosing annual | `location`, `tier` |
| `tm_consultation_request` | Consultation CTA, or assessment choosing "Schedule a consultation" | `location` |
| `tm_proposal_request` | Proposal CTA, or assessment choosing "Send a quotation" | `location` |
| `tm_whatsapp_click` | Any TalentMasters WhatsApp link | `location` |

Campaign attribution (UTM parameters, referrer, landing page) is captured per browser session and included in the **lead email only**. GA4 records UTM parameters on its own.

**Setup in GA4:** mark `tm_assessment_complete`, `tm_consultation_request` and `tm_proposal_request` as key events (conversions). Register `programme_type`, `next_step`, `org_size` and `location` as custom dimensions.

## Monthly scorecard

| Metric | How to calculate |
|---|---|
| Visitors | Users with `tm_page_view` |
| Assessment starts | `tm_assessment_start` |
| Assessment completions | `tm_assessment_complete` |
| Start → completion rate | completions ÷ starts |
| Visitor → lead rate | completions ÷ visitors |
| Qualified enquiries | Lead emails marked Priority High/Medium, confirmed after review |
| Consultation requests | `tm_consultation_request` (from the assessment) |
| Proposal requests | `tm_proposal_request` (from the assessment) |
| Leads by offer | `tm_assessment_complete` broken down by `programme_type` |
| Leads by sector | Industry field in lead emails (kept out of analytics on purpose) |
| Pipeline value | Sum of proposal values in the sales tracker — only once one exists |

## Lead classification (in each lead email)

- **Lead status:** always starts as `New`.
- **Priority (auto):** `High` = budget approved or quotation needed **and** start within 3 months. `Medium` = one of those two. `Nurture` = neither.
- **Requested service:** derived from the preferred programme type.
- **Next action:** the visitor's chosen next step.

## Known limits

- Leads are delivered by email only. There is no database or CRM, so the inbox is the system of record. If the email service fails, the visitor sees an error with WhatsApp and email fallbacks, and their answers stay in the form.
- Duplicate and rate-limit protection is held in memory on each server instance, so it is best-effort. The form also blocks double submission on the visitor's side.
