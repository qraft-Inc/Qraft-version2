# TalentMasters™ Lead Measurement Plan

Internal reference for tracking TalentMasters lead generation. No figures here are targets or results — fill them in from real data.

## Where data comes from

| Source | What it records |
|---|---|
| Google Analytics 4 (`NEXT_PUBLIC_GOOGLE_ANALYTICS`) | Page views and the `tm_*` events below. No personal data is sent. |
| Tally form `peo4o1` (embedded on `/solutions/talentmasters/assessment`) | Every assessment submission. Notifications and storage are configured in Tally (lead inbox: drew@qraftacademy.com). |
| Sales tracker (to be chosen) | Lead status, proposal value and outcome. There is no CRM connected yet, so pipeline value has to be tracked manually. |

## Events

| Event | Fired when | Parameters (non-personal only) |
|---|---|---|
| `tm_page_view` | Any TalentMasters page loads | `page` |
| `tm_cta_click` | Free-assessment CTAs are clicked | `offer`, `location` |
| `tm_assessment_start` | Assessment page loads the Tally form | `offer` (from `?offer=`) |
| `tm_assessment_complete` | Tally reports the form was submitted | `form_id`, `offer` |
| `tm_workshop_enquiry` | Workshop CTA click, or assessment with "One-time workshop" | `location` |
| `tm_accelerator_enquiry` | 90-day CTA click, or assessment with "90-day programme" | `location` |
| `tm_annual_enquiry` | Annual CTA/tier click, or assessment choosing annual | `location`, `tier` |
| `tm_consultation_request` | Consultation CTA, or assessment choosing "Schedule a consultation" | `location` |
| `tm_proposal_request` | Proposal CTA, or assessment choosing "Send a quotation" | `location` |
| `tm_whatsapp_click` | Any TalentMasters WhatsApp link | `location` |

`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `offer`, `next` and `ref` are passed from the page URL to Tally. **Add each as a hidden field in the Tally form** so it is saved with the submission. GA4 records UTM parameters on its own.

**Setup in GA4:** mark `tm_assessment_complete`, `tm_consultation_request` and `tm_proposal_request` as key events (conversions). Register `offer` and `location` as custom dimensions.

## Monthly scorecard

| Metric | How to calculate |
|---|---|
| Visitors | Users with `tm_page_view` |
| Assessment starts | `tm_assessment_start` |
| Assessment completions | `tm_assessment_complete` |
| Start → completion rate | completions ÷ starts |
| Visitor → lead rate | completions ÷ visitors |
| Qualified enquiries | Tally submissions with budget approved/quotation needed, confirmed after review |
| Consultation requests | `tm_consultation_request` clicks plus Tally submissions requesting a consultation |
| Proposal requests | `tm_proposal_request` clicks plus Tally submissions requesting a quotation |
| Leads by offer | Preferred programme answer in Tally submissions (or `offer` on `tm_assessment_complete`) |
| Leads by sector | Industry answer in Tally submissions (kept out of analytics on purpose) |
| Pipeline value | Sum of proposal values in the sales tracker — only once one exists |

## Known limits

- Submissions, notifications, spam protection and storage are handled by Tally. Check the form's notification settings send to drew@qraftacademy.com.
- `tm_assessment_complete` relies on Tally's `Tally.FormSubmitted` message; if Tally changes it, use Tally's submission count instead.
