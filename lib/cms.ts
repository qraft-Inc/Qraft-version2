// Shared constants for CourseMasters™ CMS Development & Digital Publishing

export const CMS_PAGE_HREF = '/coursemasters/cms-development';
export const CMS_ENQUIRY_ANCHOR = 'cms-enquiry';

export const CMS_PROJECT_TYPES = [
  'Digital Magazine',
  'Publication Archive',
  'Resource Library',
  'Institutional CMS',
  'Advanced Content Platform',
  'CMS Maintenance',
  'Other',
] as const;

export const CMS_BUDGET_OPTIONS = [
  'Under USD 1,500',
  'USD 1,500–4,499',
  'USD 4,500–7,999',
  'USD 8,000–14,999',
  'USD 15,000+',
  'Need guidance',
] as const;

export const CMS_CONTENT_VOLUME_OPTIONS = [
  'Fewer than 10 items',
  '10–50 items',
  '51–200 items',
  '201–1,000 items',
  'More than 1,000 items',
  'Not sure yet',
] as const;

export const CMS_ADD_ONS = [
  'Additional content migration',
  'PDF-to-HTML article conversion',
  'Editorial content production',
  'Content publishing retainer',
  'English–Kiswahili localisation',
  'Accessibility improvements',
  'Advanced analytics',
  'CMS–LMS integration',
  'Staff training',
  'Ongoing platform maintenance',
  'Digital course development',
  'Moodle LMS',
] as const;

export type CmsPackageId = 'starter' | 'magazine' | 'advanced' | 'care';

export interface CmsPackage {
  id: CmsPackageId;
  name: string;
  price: string;
  priceSuffix?: string;
  audience: string;
  items: string[];
  delivery?: string;
  cta: string;
  popular?: boolean;
  projectType: (typeof CMS_PROJECT_TYPES)[number];
  budget?: (typeof CMS_BUDGET_OPTIONS)[number];
}

export const CMS_PACKAGES: CmsPackage[] = [
  {
    id: 'starter',
    name: 'Starter CMS',
    price: 'USD 1,500',
    audience: 'For small organisations and businesses that need to manage their own content.',
    items: [
      'CMS setup and configuration',
      'Responsive template-based design',
      'Up to 5 core pages',
      'Articles or resource publishing',
      'Categories and basic search',
      'Basic SEO setup',
      'Migration or upload of up to 10 content items',
      'Editor training',
      'Launch support',
    ],
    delivery: '2–4 weeks',
    cta: 'Request Starter CMS',
    projectType: 'Institutional CMS',
    budget: 'USD 1,500–4,499',
  },
  {
    id: 'magazine',
    name: 'Digital Magazine & Publication CMS',
    price: 'USD 4,500',
    audience: 'For publishers, NGOs, associations and institutions.',
    items: [
      'Magazine-focused CMS architecture',
      'Branded magazine homepage',
      'Digital issue and edition archive',
      'Individual searchable article pages',
      'PDF viewing or reading experience',
      'Categories, tags and search',
      'Mobile-first reading interface',
      'Editorial management dashboard',
      'Basic editorial roles',
      'Migration of up to 2 existing issues and 20 articles',
      'Analytics setup',
      'Editor training and handover',
    ],
    delivery: '4–8 weeks',
    cta: 'Build My Digital Magazine',
    popular: true,
    projectType: 'Digital Magazine',
    budget: 'USD 4,500–7,999',
  },
  {
    id: 'advanced',
    name: 'Advanced Content Platform',
    price: 'USD 8,000',
    audience: 'For organisations with complex publishing requirements.',
    items: [
      'Custom content architecture',
      'Multiple publications or content collections',
      'Advanced search and filtering',
      'Editorial approval workflows',
      'Role-based permissions',
      'CMS integrations',
      'Multilingual publishing architecture',
      'Advanced analytics configuration',
      'Migration planning and testing',
      'Staff training and handover',
    ],
    delivery: '8–12+ weeks',
    cta: 'Discuss Advanced Platform',
    projectType: 'Advanced Content Platform',
    budget: 'USD 8,000–14,999',
  },
  {
    id: 'care',
    name: 'CMS Care & Support',
    price: 'USD 150',
    priceSuffix: '/month',
    audience: 'For organisations that need reliable ongoing platform support.',
    items: [
      'CMS software updates',
      'Security and maintenance checks',
      'Backup monitoring',
      'Technical issue support',
      'Basic performance monitoring',
      'Monthly maintenance summary',
    ],
    cta: 'Request CMS Support',
    projectType: 'CMS Maintenance',
  },
];

export const CMS_PACKAGE_NAMES = CMS_PACKAGES.map((p) => p.name);

export const cmsEnquiryHref = (packageId?: CmsPackageId | 'combined') =>
  `${CMS_PAGE_HREF}${packageId ? `?package=${packageId}` : ''}#${CMS_ENQUIRY_ANCHOR}`;
