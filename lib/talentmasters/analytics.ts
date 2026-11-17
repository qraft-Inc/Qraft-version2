import { trackEvent } from '@/lib/analytics';

/**
 * TalentMasters conversion events (Google Analytics via the existing gtag setup).
 * Only send categorical, non-personal parameters — never names, emails, phone numbers or free text.
 */
export const TM_EVENTS = {
  pageView: 'tm_page_view',
  assessmentStart: 'tm_assessment_start',
  assessmentComplete: 'tm_assessment_complete',
  workshopEnquiry: 'tm_workshop_enquiry',
  acceleratorEnquiry: 'tm_accelerator_enquiry',
  annualEnquiry: 'tm_annual_enquiry',
  consultationRequest: 'tm_consultation_request',
  whatsappClick: 'tm_whatsapp_click',
  proposalRequest: 'tm_proposal_request',
  ctaClick: 'tm_cta_click',
} as const;

export type TmEvent = (typeof TM_EVENTS)[keyof typeof TM_EVENTS];

export function trackTm(event: TmEvent, params?: Record<string, string | number | boolean>) {
  trackEvent(event, params);
}
