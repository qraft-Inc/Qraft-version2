export const ORGANIZATION_TYPES = [
  'INGO / Development Partner',
  'Corporate / Financial Institution',
  'Mid-Market SME',
  'Other',
] as const;

export const SOLUTIONS_OF_INTEREST = [
  'CourseMasters™ — Digital Learning Infrastructure',
  'TalentMasters™ — Retained L&D Retainer',
  'Both',
  'Co-Delivery / Consortium Partnership',
] as const;

// Maps the `?interest=` query value used by CTAs to a dropdown option
export const INTEREST_PARAM_TO_SOLUTION: Record<string, (typeof SOLUTIONS_OF_INTEREST)[number]> = {
  coursemasters: 'CourseMasters™ — Digital Learning Infrastructure',
  talentmasters: 'TalentMasters™ — Retained L&D Retainer',
  both: 'Both',
  partnership: 'Co-Delivery / Consortium Partnership',
};

export const EMPLOYEE_COUNT_OPTIONS = ['30–50', '51–150', '151–300', '300+'] as const;

export const INTEREST_AREA_OPTIONS = [
  'Leadership, Execution & Mindset',
  'Workplace Health, Safety & Wellbeing (OHS)',
  'Employability & New-Hire Transition',
  'Digital Fluency (AI, Power BI & Automation)',
  'Team Building & Skilling In The Wild™',
  'Tech Talent Pipelines, Bootcamps & Placements',
] as const;

export const PROPOSAL_HREF = '/#rfp';

export const TALENTMASTERS_HREF = '/solutions/talentmasters';

export const PARTNERSHIP_HREF = '/contact?interest=partnership#rfp';

export const proposalHrefFor = (interest: keyof typeof INTEREST_PARAM_TO_SOLUTION) =>
  `/?interest=${interest}#rfp`;
