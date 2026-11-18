/**
 * Qraft Group ecosystem content.
 *
 * Legal structure: Rata Qraft Solutions Limited (trading as Qraft Group) operates two business platforms,
 * Qraft Academy and Qraft Capital. AndrewTugume.com and the Future of Work Forum are connected initiatives,
 * NOT subsidiaries. The four "capitals" are a strategic philosophy, NOT corporate divisions.
 */
import { PARTNERSHIP_HREF } from '@/lib/proposal';

export const COMPANY_NAME = 'Rata Qraft Solutions Limited';
export const QRAFT_CAPITAL_ENQUIRY_HREF = '/contact?interest=qraftcapital#rfp';
export const ANDREW_TUGUME_URL = 'https://www.andrewtugume.com';
export const FORUM_HREF = '/future-of-work-forum';
export { PARTNERSHIP_HREF };

export type Solution = {
  name: string;
  category: string;
  value: string;
  audience: string;
  href: string;
  cta: string;
  note?: string;
};

export const solutions: Record<'coursemasters' | 'talentmasters' | 'systemmasters' | 'capitalmasters', Solution> = {
  coursemasters: {
    name: 'CourseMasters™',
    category: 'Digital Learning Solutions',
    value: 'We design and build digital courses, learning experiences and learning management systems for institutions and organisations.',
    audience: 'Development partners, INGOs, public institutions and employers',
    href: '/coursemasters',
    cta: 'Explore CourseMasters',
  },
  talentmasters: {
    name: 'TalentMasters™',
    category: 'Workforce Development',
    value: 'We develop employees, managers and leaders through practical programmes that improve capability, productivity and performance.',
    audience: 'Companies, NGOs, healthcare and public institutions',
    href: '/solutions/talentmasters',
    cta: 'Explore TalentMasters',
  },
  systemmasters: {
    name: 'SystemMasters™',
    category: 'Operational Systems & Automation',
    value: 'We help enterprises build the systems, processes, technology and automation that reduce dependence on individuals and improve execution.',
    audience: 'Founders and growing enterprises',
    href: QRAFT_CAPITAL_ENQUIRY_HREF,
    cta: 'Enquire About SystemMasters',
  },
  capitalmasters: {
    name: 'CapitalMasters™',
    category: 'Financial Capability & Capital Readiness',
    value: 'We help entrepreneurs and enterprises strengthen financial management, cash flow, decision-making and readiness for responsible growth.',
    audience: 'Entrepreneurs, SMEs and growing enterprises',
    href: QRAFT_CAPITAL_ENQUIRY_HREF,
    cta: 'Enquire About CapitalMasters',
    note: 'Advisory and capability development only. CapitalMasters is not a lender, investment manager or fund.',
  },
};

export const platforms = [
  {
    id: 'qraft-academy',
    name: 'Qraft Academy',
    capital: 'Human Capital Development',
    positioning: 'Developing the capabilities people and organisations need to learn, perform and thrive in a changing world of work.',
    description:
      'We help institutions and employers develop the knowledge, skills, learning systems and workforce capabilities required for measurable results.',
    solutions: [solutions.coursemasters, solutions.talentmasters],
    href: '/',
    cta: 'Explore Qraft Academy',
  },
  {
    id: 'qraft-capital',
    name: 'Qraft Capital',
    capital: 'Enterprise Capital Development',
    positioning:
      'Building the operational systems and financial capacity that help founders and enterprises become more productive, resilient, scalable and investment-ready.',
    description:
      'We help founders and enterprises strengthen their operational infrastructure and financial capacity for sustainable growth.',
    solutions: [solutions.systemmasters, solutions.capitalmasters],
    href: QRAFT_CAPITAL_ENQUIRY_HREF,
    cta: 'Explore Qraft Capital',
  },
] as const;

export const capitalDimensions = [
  { name: 'Personal Capital', text: 'Helping individuals develop productive assets and credible influence.', home: 'AndrewTugume.com' },
  { name: 'Human Capital', text: 'Building the knowledge, skills and capabilities required for performance.', home: 'Qraft Academy' },
  { name: 'Enterprise Capital', text: 'Strengthening operational systems and financial capacity.', home: 'Qraft Capital' },
  { name: 'Ecosystem Capital', text: 'Connecting people, institutions and enterprises through partnerships and collective action.', home: 'Future of Work Forum' },
] as const;

export const connectedInitiatives = [
  {
    name: 'AndrewTugume.com',
    capital: 'Personal Capital Development',
    text: 'A founder-led platform for developing the productive and influence capital of individuals.',
    programmes: [
      {
        name: 'WorkMasters',
        category: 'Productive Capital Development',
        text: 'Helping professionals, consultants and entrepreneurs turn their expertise into valuable offers, productive systems and income-generating assets.',
      },
      {
        name: 'InfluenceMasters',
        category: 'Influence Capital Development',
        text: 'Helping individuals find their voice, create intellectual assets, build credible authority and multiply their influence and impact.',
      },
    ],
    href: ANDREW_TUGUME_URL,
    cta: 'Visit AndrewTugume.com',
    external: true,
  },
  {
    name: 'Future of Work Forum',
    capital: 'Ecosystem Capital Development',
    text: 'A multi-stakeholder platform connecting individuals, institutions, businesses and partners to shape the future of work.',
    programmes: [
      {
        name: 'Future of Work Tour',
        category: 'Ecosystem Engagement & Activation',
        text: 'Engaging institutions, communities, associations and enterprises to discover opportunities, share knowledge and catalyse collaboration.',
      },
      {
        name: 'Future of Work Awards',
        category: 'Ecosystem Recognition & Excellence',
        text: 'Recognising individuals, organisations and initiatives making outstanding contributions to the future of work.',
      },
    ],
    href: FORUM_HREF,
    cta: 'Explore the Forum',
    external: false,
  },
] as const;

/** Work already published elsewhere on this site. Names only — no invented metrics. */
export const impact = {
  digitalLearning: [
    { title: 'D4GW Understanding Digital Rights e-learning course', partner: 'Enabel — Belgian Development Agency' },
    { title: 'Business and Human Rights e-learning course', partner: 'Enabel · EU · Ministry of Gender, Labour & Economic Development' },
    { title: 'Decent Work and Social Protection e-learning course', partner: 'Enabel — Belgian Development Agency' },
  ],
};
