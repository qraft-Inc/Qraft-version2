/**
 * TalentMasters™ page content: challenges, services, portfolio, testimonials, FAQs and care economy.
 * Keep claims factual. Do not add results, quotes or partnerships without evidence and client approval.
 */
import { PRICING_DISCLAIMER, TM_ROUTES } from './offers';

export const workplaceChallenges = [
  'Low productivity',
  'Weak or overstretched management',
  'Poor communication between teams',
  'Repeated mistakes',
  'Team conflict',
  'Skills gaps',
  'Slow onboarding of new staff',
  'Workplace stress and burnout',
  'Limited digital readiness',
] as const;

export const improvementOutcomes = [
  { title: 'Better service', text: 'Staff who understand customers and take ownership of service quality.' },
  { title: 'Faster execution', text: 'Clearer priorities, follow-through and fewer delays between teams.' },
  { title: 'Fewer mistakes', text: 'Better routines, checklists and accountability for quality work.' },
  { title: 'Less waste', text: 'Smarter use of time, materials and budgets across departments.' },
  { title: 'Stronger leadership', text: 'Managers who delegate, coach and give useful feedback.' },
  { title: 'Better teamwork', text: 'Teams that communicate openly and resolve conflict constructively.' },
  { title: 'Healthier workplaces', text: 'Attention to wellbeing, safety and sustainable workloads.' },
  { title: 'Responsible spending', text: 'Training investment focused on the problems that matter most.' },
] as const;

export const serviceAreas = [
  {
    title: 'Leadership & Professional Development',
    text: 'Personal effectiveness, emotional intelligence, supervision, coaching and leadership for employees, managers and executives.',
    examples: ['Leading Yourself First', 'Supervisory skills', 'Management coaching', 'Executive leadership'],
  },
  {
    title: 'Team Productivity & Organizational Effectiveness',
    text: 'Teamwork, communication, accountability and execution — plus structured onboarding so new staff become productive sooner.',
    examples: ['Team effectiveness', 'Customer service', 'Employee onboarding', 'Workforce readiness'],
  },
  {
    title: 'Workplace Wellbeing, Safety & Care Economy',
    text: 'Psychosocial wellbeing, occupational health and safety, and dedicated programmes for healthcare and care workers.',
    examples: ['Stress and resilience', 'Occupational safety', 'Healthcare workforce', 'Team Building In The Wild™'],
  },
  {
    title: 'Digital Skills, AI & Technical Talent Development',
    text: 'Digital productivity, applied workplace AI and reporting skills, plus technical bootcamps and apprenticeships.',
    examples: ['Applied workplace AI', 'Data and reporting', 'Tech bootcamps', 'Apprenticeships'],
  },
] as const;

export const deliveryPartnersNote =
  'Programmes are delivered by Qraft Academy with specialist partners where needed — including TeachNations Uganda (leadership and personal effectiveness), Networth Consult (workplace safety and wellbeing) and AniScholar (work-readiness and employability) — so each topic is led by people with relevant expertise.';

export const processSteps = [
  { step: 'Assess', text: 'Understand the challenge, the people involved and what “better” looks like.' },
  { step: 'Develop', text: 'Deliver practical, tailored training for employees, managers or executives.' },
  { step: 'Apply', text: 'Turn learning into action plans and real workplace assignments.' },
  { step: 'Measure', text: 'Follow up, review progress against agreed measures and plan next steps.' },
] as const;

export const specialisedProgrammes = [
  {
    title: 'Healthcare Workforce Development',
    text: 'Leadership, wellbeing and team effectiveness for hospitals, clinics and health facilities.',
    href: TM_ROUTES.careEconomy,
  },
  {
    title: 'Care Economy & Wellbeing',
    text: 'Support for care workers and wellbeing programmes for any workplace.',
    href: `${TM_ROUTES.careEconomy}#workplace-wellbeing`,
  },
  {
    title: 'Team Building In The Wild™',
    text: 'Outdoor team development experiences, delivered with Networth Consult. By quotation.',
  },
  {
    title: 'Tech Bootcamps & Apprenticeships',
    text: 'Intensive technical training and apprentice pipelines for digital teams. By quotation.',
  },
  {
    title: 'Management Coaching',
    text: 'Structured one-to-one or small-group coaching for supervisors and managers.',
  },
  {
    title: 'Employee Onboarding',
    text: 'Structured onboarding programmes that help new hires settle in and contribute sooner.',
  },
] as const;

/**
 * Client portfolio. Every entry below already appears on the live TalentMasters page.
 * `ownerVerified` must be set to true once the owner has confirmed scope and permission to list.
 * Optional fields render only when provided — never fill them with estimates.
 */
export type PortfolioEntry = {
  organization: string;
  sector: string;
  focus: string;
  programmeTitle?: string;
  challenge?: string;
  delivered?: string;
  participants?: string;
  outputs?: string;
  outcomes?: string;
  ownerVerified: boolean;
};

export const portfolio: PortfolioEntry[] = [
  {
    organization: 'Neptune Financial Software (U) Ltd',
    sector: 'Financial technology',
    focus: 'Leadership, strategic planning, organizational productivity, and developing high-performing teams through better leadership, systems and execution.',
    ownerVerified: true,
  },
  {
    organization: 'Embassy of Ireland in Uganda',
    sector: 'Diplomatic mission',
    programmeTitle: 'Leading Yourself First — Unlocking Personal Growth for Greater Professional Impact',
    focus: 'Personal and professional development for Embassy staff.',
    ownerVerified: true,
  },
  {
    organization: 'Centre for Research in Energy and Energy Conservation (CREEC), Makerere University',
    sector: 'Research & academia',
    focus: 'Personal development, organizational effectiveness, communication, accountability, teamwork and productivity.',
    ownerVerified: true,
  },
  {
    organization: 'Forgotten Children Worldwide',
    sector: 'Non-profit',
    focus: 'Employee wellbeing, resilience and thriving in the workplace.',
    ownerVerified: true,
  },
  {
    organization: 'Splendor of the Home',
    sector: 'Retail & frontline services',
    focus: 'Sales, professional development, workforce readiness and frontline team capability.',
    ownerVerified: true,
  },
  {
    organization: 'AniScholar',
    sector: 'Employability',
    focus: 'Work-readiness, professionalism and employability learning development.',
    ownerVerified: true,
  },
  {
    organization: 'Spidd Africa',
    sector: 'Technology',
    focus: 'Technical skills development, apprenticeships and employment-related talent pipeline services.',
    ownerVerified: true,
  },
];

/**
 * Testimonials. Only entries with permission === 'approved' are shown publicly.
 * Add real, client-approved quotes here; record where the quote came from in `source`.
 */
export type Testimonial = {
  name: string;
  position: string;
  organization: string;
  quote: string;
  permission: 'approved' | 'pending' | 'declined';
  source: string;
};

export const testimonials: Testimonial[] = [];

export const publicTestimonials = () => testimonials.filter((t) => t.permission === 'approved');

/**
 * Shown only while there are no approved testimonials. Deliberately contains no quotes or names,
 * so nothing is attributed to a client who has not said it.
 */
export const TESTIMONIAL_PLACEHOLDER_COUNT = 3;

export const faqs = [
  {
    q: 'What is TalentMasters?',
    a: 'TalentMasters™ is Qraft Academy’s workforce development service. We provide practical corporate training, leadership development, workplace wellbeing and ongoing improvement programmes for employees, managers and executives.',
  },
  {
    q: 'Do you offer one-day workshops?',
    a: 'Yes. We run half-day, full-day and two-day workshops on a specific topic, starting from $850 for a half day. Each includes a short pre-training consultation and a workplace action plan.',
  },
  {
    q: 'Can you train managers and executives?',
    a: 'Yes. We run separate learning paths for employees, managers and executives, so each group works on the skills that matter for their role.',
  },
  {
    q: 'Can you train our entire organization?',
    a: 'Yes. Larger organizations usually work with us through the Annual Enterprise Partnership or a series of workshops planned across departments. Additional sessions and participants are quoted in advance.',
  },
  {
    q: 'Can you customize a programme?',
    a: 'Yes. Every engagement starts with a short needs consultation. Topics, examples and activities are adapted to your sector, your people and the challenge you want to solve.',
  },
  {
    q: 'How does the 90-day programme work?',
    a: 'Month 1 is assess and equip (baseline, goals and training). Month 2 is apply and improve (workplace assignments supported by managers). Month 3 is reinforce and measure (follow-up and a 90-day review report). It focuses on one priority challenge.',
  },
  {
    q: 'What is included in an annual partnership?',
    a: 'A 12-month programme across four quarterly themes — Lead Yourself, Lead Others, Work Together and Work Smarter — with a fixed number of monthly sessions, quarterly reviews and reports, and an annual review. Foundation starts at $1,000 per month.',
  },
  {
    q: 'How much does corporate training cost?',
    a: `Workshops start from $850 (half day), $1,450 (full day) and $2,450 (two days). The 90-Day Accelerator is $3,450–$5,150, and annual partnerships start at $1,000 per month. ${PRICING_DISCLAIMER}`,
  },
  {
    q: 'Do you offer workplace wellbeing programmes?',
    a: 'Yes. We offer stress and resilience, psychosocial wellbeing, healthy workplace relationships and occupational safety programmes for any sector.',
  },
  {
    q: 'Do you train healthcare workers?',
    a: 'Yes. Our care economy and healthcare workforce programmes cover wellbeing, safety, supervision, leadership and team effectiveness for health facilities and care organizations.',
  },
  {
    q: 'Can you support organizations outside Uganda?',
    a: 'Yes. We work with organizations across East Africa. Travel and accommodation for in-person delivery outside Kampala are quoted separately, and some sessions can be delivered online.',
  },
  {
    q: 'How do you measure training results?',
    a: 'We agree practical measures with you at the start — for example manager observations, completed action plans, team feedback or operational indicators you already track — and report on them. We do not promise guaranteed results.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Care economy & healthcare workforce                                  */
/* ------------------------------------------------------------------ */

export type InitiativeStatus = 'available' | 'proposal' | 'opportunity';

export const statusLabels: Record<InitiativeStatus, string> = {
  available: 'Service available',
  proposal: 'Programme proposal / development initiative',
  opportunity: 'Programme opportunity',
};

export const ncci = {
  title: 'National Care for Caretakers Initiative (NCCI)',
  status: 'proposal' as InitiativeStatus,
  summary:
    'A proposed five-year national programme to support the wellbeing, safety, welfare and professional growth of healthcare workers and the institutions they serve in Uganda.',
  pillars: [
    'Psychosocial Support & Mental Wellness',
    'Occupational Safety, Rest-Cycle Protocols & Wellness Infrastructure',
    'Socio-Economic Welfare Protection',
    'Professional Recognition, Continuous Learning & Leadership',
  ],
  emphasis: [
    'Whole-person healthcare worker wellbeing',
    'Healthcare workforce resilience',
    'Fatigue management and occupational safety',
    'Staff welfare and financial wellbeing',
    'Professional development, leadership and mentorship',
    'Healthcare workforce innovation',
    'Institutional performance, monitoring and improvement',
  ],
  pilotNote:
    'The concept proposes pilots across different levels of the health system (national and regional referral hospitals, general hospitals, Health Centre IVs and Health Centre IIIs in Northern Uganda). Pilot sites have not been confirmed.',
  disclaimer:
    'NCCI was developed by SHHMU in partnership with Qraft Academy and Consortium Partners. It is a proposal and has not been adopted, funded, endorsed or commissioned by the Government of Uganda, the Ministry of Health or any public institution.',
};

export const careProgrammes = [
  {
    id: 'healthcare-wellbeing',
    title: 'Healthcare Worker Wellbeing & Performance Programmes',
    status: 'available' as InitiativeStatus,
    text: 'Practical interventions for health facilities that support staff and strengthen teams.',
    items: [
      'Psychosocial wellbeing',
      'Emotional intelligence',
      'Healthy workplace relationships',
      'Managing stress and fatigue',
      'Occupational safety',
      'Better supervisory communication',
      'Leadership development',
      'Healthcare team effectiveness',
      'Staff recognition and engagement',
    ],
  },
  {
    id: 'care-accelerator',
    title: 'Care Economy Workforce Accelerator',
    status: 'opportunity' as InitiativeStatus,
    text: 'A care workforce development concept for healthcare, domestic and community care workers.',
    items: [
      'Healthcare workforce development',
      'Domestic and community care workforce development',
      'Care worker professional skills',
      'Digital capability',
      'Employability and career development',
      'Workplace safety',
      'Financial and professional wellbeing',
    ],
  },
  {
    id: 'care-innovation',
    title: 'Care Workforce Innovation & Digital Transformation',
    status: 'opportunity' as InitiativeStatus,
    text: 'Programme opportunities for partners and funders interested in modernising care work.',
    items: [
      'Digital healthcare innovation challenges',
      'Domestic care workforce innovation',
      'Healthcare workforce digital skills',
      'Better workplace systems',
      'Workforce productivity tools',
      'Future-of-work readiness in care services',
    ],
  },
  {
    id: 'healthcare-leadership',
    title: 'Healthcare Leadership & Professional Development',
    status: 'available' as InitiativeStatus,
    text: 'Practical leadership and professional development focused on day-to-day workplace outcomes.',
    items: [
      'Healthcare managers',
      'Hospital supervisors',
      'Clinical team leaders',
      'Administrative teams',
      'Support staff',
      'Healthcare executives',
    ],
  },
] as const;

export const crossSectorWellbeing = {
  title: 'Workplace Wellbeing Across Sectors',
  text: 'Wellbeing is not only a healthcare issue. Our wellbeing and employee support programmes are also available to NGOs, financial institutions, professional services firms, educational organizations and other workplaces.',
  sectors: ['NGOs and development organizations', 'Financial institutions', 'Professional services', 'Schools and universities', 'Corporate and public workplaces'],
};
