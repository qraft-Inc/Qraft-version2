import { Fragment } from 'react';
import Link from 'next/link';
import { CMS_PAGE_HREF } from '@/lib/cms';

const CAPABILITIES = [
  {
    step: '01',
    title: 'Create Learning',
    text: 'Course design, curriculum digitisation, multimedia, animations, assessments and interactive learning.',
    href: '/coursemasters#flagship',
    cta: 'Digital courses',
  },
  {
    step: '02',
    title: 'Deliver Learning',
    text: 'Moodle and other LMS platforms, learner management, analytics, certificates and integrations.',
    href: '/coursemasters#lms-offer',
    cta: 'Learning platforms',
  },
  {
    step: '03',
    title: 'Publish Knowledge',
    text: 'CMS development, digital magazines, online publications, searchable archives, research libraries and content portals.',
    href: CMS_PAGE_HREF,
    cta: 'CMS & digital publishing',
  },
];

interface CapabilitiesProps {
  id?: string;
  tone?: 'light' | 'muted';
}

// "One Partner. Three Connected Capabilities." — shared by the CourseMasters overview and CMS pages
export default function CourseMastersCapabilities({ id, tone = 'light' }: CapabilitiesProps) {
  return (
    <section id={id} className={`section-padding ${tone === 'muted' ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
            One Partner. Three Connected Capabilities.
          </h2>
          <p className="text-slate-600 sm:text-lg">
            Commission a standalone course, LMS, digital magazine or CMS — or combine them into one integrated digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 md:gap-3">
          {CAPABILITIES.map((cap, i) => (
            <Fragment key={cap.title}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col">
                <p className="text-xs font-bold text-blue-600 mb-2">{cap.step}</p>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 uppercase tracking-wide mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-600 mb-5 flex-1">{cap.text}</p>
                <Link href={cap.href} className="text-sm text-blue-600 font-semibold hover:text-blue-700">
                  {cap.cta} →
                </Link>
              </div>
              {i < CAPABILITIES.length - 1 && (
                <span aria-hidden="true" className="flex items-center justify-center text-2xl text-slate-300 md:rotate-0 rotate-90">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
