/**
 * TalentMasters™ commercial offers and pricing — the single source of truth.
 *
 * All figures are PROPOSED, indicative USD rates (converted at UGX 3,500 = $1, rounded to the nearest $50) pending internal approval.
 * Edit prices here only; every TalentMasters page reads from this file.
 */

export const TM_BASE = '/solutions/talentmasters';

export const TM_ROUTES = {
  home: TM_BASE,
  assessment: `${TM_BASE}/assessment`,
  thankYou: `${TM_BASE}/assessment/thank-you`,
  corporateTraining: `${TM_BASE}/corporate-training`,
  accelerator: `${TM_BASE}/90-day-accelerator`,
  annual: `${TM_BASE}/annual-workforce-programme`,
  careEconomy: `${TM_BASE}/care-economy`,
} as const;

/** Values accepted by `?offer=` on the assessment page; they pre-select the preferred programme type. */
export type OfferKey = 'workshop' | 'accelerator' | 'annual' | 'unsure';

export const assessmentHref = (offer?: OfferKey, nextStep?: 'quotation' | 'consultation' | 'annual') => {
  const params = new URLSearchParams();
  if (offer) params.set('offer', offer);
  if (nextStep) params.set('next', nextStep);
  const query = params.toString();
  return `${TM_ROUTES.assessment}${query ? `?${query}` : ''}`;
};

export const TM_CONTACT_EMAIL = 'drew@qraftacademy.com';
export const TM_WHATSAPP_NUMBER = '256755017384';
export const tmWhatsappHref = (message = 'Hello TalentMasters, I would like to talk to an advisor about training for our team.') =>
  `https://wa.me/${TM_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PRICING_DISCLAIMER =
  'Indicative starting prices in US dollars (USD), subject to scope and confirmation in a written quotation. Venue, travel, accommodation, specialist equipment, software subscriptions, statutory taxes and additional participants are quoted separately where applicable.';

export const workshopPrices = [
  { format: 'Half-day workshop', duration: 'Approx. 3–4 hours', price: 'From $850' },
  { format: 'Full-day workshop', duration: 'Approx. 6–7 hours', price: 'From $1,450' },
  { format: 'Two-day workshop', duration: '2 full days', price: 'From $2,450' },
] as const;

export const workshopOffer = {
  name: 'Corporate Training Workshops',
  tagline: 'Solve one important workforce problem.',
  forWho: 'Organizations with a specific, immediate training or development need.',
  priceSummary: 'From $850',
  included: [
    'Brief pre-training needs consultation',
    'Customized session objectives',
    'Professional facilitator',
    'Practical learning activities',
    'Participant materials',
    'Immediate workplace action plan',
    'Post-training recommendations',
  ],
  topics: [
    'Personal and professional development',
    'Emotional intelligence',
    'Leadership and management',
    'Employee productivity',
    'Teamwork and collaboration',
    'Effective communication',
    'Workplace wellbeing',
    'Accountability and execution',
    'Digital productivity and applied AI',
    'Organizational change',
  ],
  clientRole: 'Share your goals in a short call, confirm participants and dates, and provide a training space (or we quote for a venue).',
  afterPurchase: 'We confirm objectives with you, deliver the session, and send a short summary with recommended next steps.',
  cta: 'Request a Corporate Training Quotation',
} as const;

export const acceleratorOffer = {
  name: 'The 90-Day Workforce Performance Accelerator™',
  shortName: '90-Day Accelerator',
  tagline: 'Identify the problem. Develop your people. Improve performance.',
  forWho: 'Organizations with one priority performance challenge they want to work on properly — not just talk about in a workshop.',
  price: '$3,450 – $5,150 per programme',
  priceSummary: '$3,450–$5,150',
  priceBasis:
    'Final price depends on the number of participants, departments, sessions, delivery partners, locations and specialist support required.',
  months: [
    {
      label: 'Month 1',
      title: 'Assess & Equip',
      items: [
        'Review the workforce challenge',
        'Establish a baseline',
        'Agree on performance goals',
        'Deliver relevant training',
        'Develop practical action plans',
      ],
    },
    {
      label: 'Month 2',
      title: 'Apply & Improve',
      items: [
        'Employees apply the skills at work',
        'Managers support implementation',
        'Teams complete practical improvement assignments',
        'TalentMasters reviews implementation challenges',
      ],
    },
    {
      label: 'Month 3',
      title: 'Reinforce & Measure',
      items: [
        'Follow up with participants and managers',
        'Review progress against the baseline',
        'Identify gaps that remain',
        'Document observations and recommendations',
        'Agree on next steps',
      ],
    },
  ],
  deliverables: [
    'Workforce Performance Assessment',
    'Customized Training Programme',
    'Workplace Improvement Action Plan',
    'Implementation Follow-up',
    '90-Day Performance Review Report',
  ],
  clientRole:
    'Nominate a sponsor and a small coordinating team, give access to relevant managers and staff, and agree realistic measures of progress with us at the start.',
  measurementNote:
    'We agree realistic measures with each client at the start. We do not guarantee specific performance improvements.',
  cta: 'Explore the 90-Day Accelerator',
  secondaryCta: 'Request a Tailored Proposal',
} as const;

export const annualQuarters = [
  {
    quarter: 'Quarter 1',
    theme: 'Lead Yourself',
    focus: 'Personal and professional effectiveness',
    topics: [
      'Self-awareness and personal mastery',
      'Professionalism and work ethic',
      'Emotional intelligence',
      'Personal productivity',
      'Ownership and accountability',
      'Growth mindset and change readiness',
    ],
  },
  {
    quarter: 'Quarter 2',
    theme: 'Lead Others',
    focus: 'Leadership and people management',
    topics: [
      'Effective supervision',
      'Delegation',
      'Coaching and feedback',
      'Communication',
      'Conflict management',
      'Leadership accountability',
      'Building capable teams',
    ],
  },
  {
    quarter: 'Quarter 3',
    theme: 'Work Together',
    focus: 'Teamwork and operational excellence',
    topics: [
      'Team collaboration',
      'Customer service',
      'Cross-department communication',
      'Better execution and fewer mistakes',
      'Less waste and responsible resource use',
      'Workplace wellbeing and team relationships',
    ],
  },
  {
    quarter: 'Quarter 4',
    theme: 'Work Smarter',
    focus: 'Digital productivity and continuous improvement',
    topics: [
      'Digital productivity',
      'Applied workplace AI',
      'Workflow automation',
      'Data-informed decision-making',
      'Digital reporting',
      'Continuous improvement and future-of-work readiness',
    ],
  },
] as const;

export const quarterRhythm = [
  { month: 'Month 1', label: 'Assess and train' },
  { month: 'Month 2', label: 'Apply and improve' },
  { month: 'Month 3', label: 'Reinforce and measure' },
] as const;

export const learningPaths = [
  { audience: 'Employees', text: 'Practical skills for everyday work: productivity, ownership, communication and teamwork.' },
  { audience: 'Managers', text: 'Supervision, delegation, coaching and the tools to help teams apply what they learn.' },
  { audience: 'Executives', text: 'Leadership priorities, accountability and quarterly reporting on workforce progress.' },
] as const;

export type PartnershipTier = {
  name: string;
  monthly: string;
  annual: string;
  forWho: string;
  scope: string[];
  featured?: boolean;
};

export const partnershipTiers: PartnershipTier[] = [
  {
    name: 'Foundation Partnership',
    monthly: '$1,000 / month',
    annual: '$12,000 annual contract value',
    forWho: 'Growing organizations',
    scope: [
      'One 3-hour practical training session per month',
      'Up to 20 participants per session',
      'Quarterly workforce needs review',
      'One agreed workplace improvement challenge per quarter',
      'Manager implementation tools',
      'Quarterly performance report',
      'Annual workforce development review',
    ],
  },
  {
    name: 'Enterprise Partnership',
    monthly: '$1,850 – $2,150 / month',
    annual: '$22,200 – $25,800 annual contract value',
    forWho: 'Larger organizations and multiple departments',
    scope: [
      'Two practical training sessions per month',
      'Up to 20 participants per session',
      'Quarterly workforce reviews',
      'Department-based improvement challenges',
      'Scheduled manager coaching (hours agreed in contract)',
      'Implementation support',
      'Quarterly executive reports',
      'Annual workforce performance review',
    ],
    featured: true,
  },
];

export const partnershipTerms = [
  '12-month agreement, billed monthly or quarterly.',
  'Sessions are scheduled in advance; unused sessions do not roll over beyond the quarter unless agreed in writing.',
  'Additional participants, extra sessions, off-site retreats and specialist programmes are quoted separately.',
  'Not included: unlimited training or coaching, digital course or LMS development (see CourseMasters™), venue, travel, accommodation and statutory taxes.',
] as const;

export const annualOffer = {
  name: 'The TalentMasters 4-Quarter Workforce Transformation Programme™',
  shortName: 'Annual Workforce Partnership',
  tagline: 'One year. Four development pillars. Continuous workplace improvement.',
  priceSummary: 'From $1,000 / month',
  cta: 'Explore Our Annual Workforce Partnership',
  secondaryCta: 'Request an Annual Training Proposal',
} as const;

/** How the 90-day project differs from the annual partnership — shown wherever both appear. */
export const acceleratorVsAnnual = [
  {
    label: '90-Day Accelerator',
    text: 'An intensive, specially scoped project focused on one priority performance challenge, with a baseline and a 90-day review report.',
  },
  {
    label: 'Annual Partnership',
    text: 'Continuous, defined development support across four quarterly themes, with a fixed number of sessions each month and quarterly reporting.',
  },
] as const;

export const freeOffer = {
  name: 'Free Workforce Performance & Training Needs Assessment',
  shortName: 'Free Workforce Needs Assessment',
  headline: 'Before you invest in another training programme, find out what your team actually needs.',
  included: [
    'A short needs assessment form (about 5 minutes)',
    'A preliminary review of your priorities',
    'An initial recommendation — or a brief discovery call for qualified enquiries',
    'A proposed next step',
  ],
  cta: 'Take Your Free Workforce Needs Assessment',
  secondaryCta: 'Talk to a TalentMasters Advisor',
} as const;

/** Summary price table (for quick reference and FAQ). */
export const priceTable = [
  { offer: 'Free Workforce Needs Assessment', price: 'Free' },
  { offer: 'Half-day workshop', price: 'From $850' },
  { offer: 'Full-day workshop', price: 'From $1,450' },
  { offer: 'Two-day workshop', price: 'From $2,450' },
  { offer: '90-Day Workforce Performance Accelerator', price: '$3,450–$5,150' },
  { offer: 'Annual Foundation Partnership', price: '$1,000 / month' },
  { offer: 'Annual Enterprise Partnership', price: '$1,850–$2,150 / month' },
  { offer: 'Custom technical bootcamps', price: 'By quotation' },
  { offer: 'Care economy & healthcare programmes', price: 'By quotation' },
  { offer: 'Team Building In The Wild™', price: 'By quotation' },
] as const;
