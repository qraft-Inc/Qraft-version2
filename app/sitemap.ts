import type { MetadataRoute } from 'next';

const BASE = 'https://qraftacademy.com';

// Public, indexable routes only (thank-you pages and unlinked drafts are excluded).
const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/qraft-group', priority: 0.9 },
  { path: '/coursemasters', priority: 0.9 },
  { path: '/coursemasters/assessment', priority: 0.7 },
  { path: '/coursemasters/build-your-course', priority: 0.6 },
  { path: '/coursemasters/cms-development', priority: 0.7 },
  { path: '/solutions/talentmasters', priority: 0.9 },
  { path: '/solutions/talentmasters/assessment', priority: 0.8 },
  { path: '/solutions/talentmasters/corporate-training', priority: 0.8 },
  { path: '/solutions/talentmasters/90-day-accelerator', priority: 0.7 },
  { path: '/solutions/talentmasters/annual-workforce-programme', priority: 0.7 },
  { path: '/solutions/talentmasters/care-economy', priority: 0.7 },
  { path: '/future-of-work-forum', priority: 0.6 },
  { path: '/about', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({ url: `${BASE}${path}`, changeFrequency: 'monthly', priority }));
}
