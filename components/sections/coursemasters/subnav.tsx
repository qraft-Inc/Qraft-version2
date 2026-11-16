'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CMS_PAGE_HREF } from '@/lib/cms';

const ITEMS = [
  { label: 'Overview', href: '/coursemasters' },
  { label: 'Digital Courses', href: '/coursemasters#flagship' },
  { label: 'Moodle LMS', href: '/coursemasters#lms-offer' },
  { label: 'CMS & Digital Publishing', href: CMS_PAGE_HREF, isNew: true },
  { label: 'Support', href: '/coursemasters#support' },
  { label: 'Free Assessment', href: '/coursemasters/assessment' },
];

// Secondary navigation across the CourseMasters™ service pages
export default function CourseMastersSubnav() {
  const pathname = usePathname() ?? '';

  return (
    <nav aria-label="CourseMasters services" className="bg-white border-b border-slate-100">
      <div className="container-custom">
        <ul className="flex gap-1 overflow-x-auto py-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center [scrollbar-width:none]">
          {ITEMS.map((item) => {
            const isActive = !item.href.includes('#') && pathname === item.href;
            return (
              <li key={item.label} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {item.isNew && (
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        isActive ? 'bg-amber-400 text-slate-900' : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      New
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
