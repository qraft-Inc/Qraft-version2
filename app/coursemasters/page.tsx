'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '256755017384';

function openWhatsApp(message: string, context: string) {
  trackEvent('coursemasters_whatsapp_click', { context });
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

function trackAssessmentClick(location: string) {
  trackEvent('coursemasters_assessment_click', { location });
}

function trackCaseStudyView(study: string) {
  trackEvent('coursemasters_case_study_view', { study });
}

const PILLARS = [
  {
    number: '01',
    tag: 'BUILD',
    title: 'We Build Your Digital Courses',
    text: 'You provide the knowledge. We design, develop, test and deploy the learning experience.',
    price: 'From UGX 15M',
    href: '#flagship',
    cta: 'Explore Course Development'
  },
  {
    number: '02',
    tag: 'PLATFORM',
    title: 'We Build Your Moodle LMS',
    text: 'Create a professional environment to host courses, enrol learners, track progress, administer assessments and issue certificates.',
    price: 'From UGX 5M',
    href: '#lms-offer',
    cta: 'Explore Moodle LMS'
  },
  {
    number: '03',
    tag: 'CAPABILITY',
    title: 'We Teach You to Build',
    text: 'Equip your people to design, develop and deploy quality digital courses internally.',
    price: 'From UGX 3M / participant',
    href: '#capability-offer',
    cta: 'Explore CourseMasters Training'
  },
  {
    number: '04',
    tag: 'SCALE',
    title: 'We Help You Maintain & Grow',
    text: 'Keep your digital-learning ecosystem working through updates, LMS administration, learner analytics, technical support and new content.',
    price: 'Annual support from UGX 3M',
    href: '#support',
    cta: 'Explore Support'
  }
];

const PROBLEM_CARDS = [
  {
    title: 'Knowledge trapped in documents',
    text: 'Policies, manuals, curricula and technical resources often remain difficult to access and apply.'
  },
  {
    title: 'Repeated training costs',
    text: 'Organizations repeatedly spend on venues, facilitators, travel and delivery.'
  },
  {
    title: 'Inconsistent learning',
    text: 'Training quality can vary across facilitators, locations and cohorts.'
  },
  {
    title: 'Limited reach',
    text: 'Physical delivery restricts when, where and how many people can learn.'
  }
];

const FLAGSHIP_INCLUDED = [
  'Content analysis & learning architecture',
  'Instructional design & storyboarding',
  'Professional multimedia development',
  'Interactive learning activities',
  'Knowledge checks & final assessment',
  'Moodle/LMS implementation',
  'Testing & quality assurance',
  'Two consolidated review cycles',
  'Deployment & handover'
];

const VALUE_ITEMS = [
  { title: 'Engaged Learners', text: 'Interactive multimedia learning experiences.' },
  { title: 'Consistent Quality', text: 'Standardized learning across cohorts and locations.' },
  { title: 'Cost Efficiency', text: 'Reuse learning instead of rebuilding the same training repeatedly.' },
  { title: 'Wider Reach', text: 'Make learning accessible across locations and schedules.' },
  { title: 'Long-Term Value', text: 'Update, reuse and scale your learning assets.' },
  { title: 'Measurable Learning', text: 'Track participation, completion and learner progress.' }
];

const BUILD_STEPS = [
  'Content Analysis',
  'Learning Architecture',
  'Instructional Design',
  'Storyboarding',
  'Multimedia Development',
  'Interactive Digital Course',
  'Assessment',
  'LMS Deployment',
  'Testing',
  'Handover'
];

const WORK_STEPS = ['Discover', 'Design', 'Develop', 'Deploy', 'Validate', 'Scale'];

const CASE_STUDIES = [
  {
    title: 'D4GW — Understanding Digital Rights',
    client: 'Enabel / Belgian Development Agency',
    delivered: 'Digital course development, instructional design, multimedia, interactive learning, assessment, Moodle deployment and localization.',
    img: '/images/Understanding Digital Rights D4GW.png'
  },
  {
    title: 'Business & Human Rights',
    client: 'Enabel / EU / Ministry of Gender, Labour and Economic Development',
    delivered: 'Technical institutional knowledge transformed into structured digital learning.',
    img: '/images/WhatsApp%20Image%202025-08-04%20at%2016.26.03_2aeab8e2.jpg'
  },
  {
    title: 'French D4GW',
    client: 'Enabel / Belgian Development Agency',
    delivered: 'French localization and deployment to expand learner accessibility.',
    img: '/images/Understanding Digital Rights D4GW_11zon.png'
  }
];

const LMS_TIERS = [
  {
    tag: 'STARTER',
    tier: 'LAUNCH',
    price: 'From UGX 5M',
    items: ['Basic Moodle setup', 'Basic branding', 'User configuration', 'Certificate setup', 'Admin orientation'],
    popular: false
  },
  {
    tag: 'PROFESSIONAL',
    tier: 'MANAGE',
    price: 'From UGX 10M',
    items: ['Branded organizational LMS', 'Roles & permissions', 'Multiple courses', 'Reporting', 'Administrator training'],
    popular: true
  },
  {
    tag: 'ENTERPRISE',
    tier: 'SCALE',
    price: 'From UGX 20M+',
    items: ['Advanced customization', 'Complex user structures', 'Integrations', 'Extended support', 'Institutional learning architecture'],
    popular: false
  }
];

const PRODUCTION_SKILLS = [
  'Instructional Design',
  'Learning Architecture',
  'Storyboarding',
  'Graphic Design',
  'Voice-over',
  'Animation',
  'Video Production',
  'Interactive Authoring',
  'LMS Implementation',
  'Quality Assurance'
];

const PRODUCTION_PHOTOS = [
  'https://res.cloudinary.com/dwa3soopc/image/upload/v1779656895/coursemasters/coursemasters_audio_studio_cq9zxq.jpg',
  'https://res.cloudinary.com/dwa3soopc/image/upload/v1779657762/coursemasters/Real_life_image_of_an_202605250022_hsmvk2.jpg',
  'https://res.cloudinary.com/dwa3soopc/image/upload/v1779657282/coursemasters/coursemasters_video_studio_peuauv.jpg',
  '/images/rect3.png'
];

const SUPPORT_ITEMS = [
  'Course updates',
  'LMS administration',
  'Technical support',
  'Content refresh',
  'New modules',
  'Multimedia updates',
  'Learner analytics',
  'Administrator support',
  'Annual maintenance'
];

const FAQS = [
  {
    q: 'How much does it cost to develop an online course?',
    a: 'CourseMasters™ digital course development starts from UGX 15M. Our flagship Standard package is UGX 20M for a standard course of up to six modules and approximately 2–3 learning hours. Complex institutional programmes are scoped separately.'
  },
  {
    q: 'How long does course development take?',
    a: 'A Standard CourseMasters project typically takes approximately 8–12 weeks, depending on content readiness, complexity and client feedback.'
  },
  {
    q: 'Do we need an LMS already?',
    a: 'No. CourseMasters can develop your course for an existing LMS or establish a Moodle learning platform for your organization.'
  },
  {
    q: 'Can you work with our existing manuals and training materials?',
    a: 'Yes. CourseMasters is specifically designed to transform existing institutional knowledge — including manuals, policies, curricula, technical materials and facilitator resources — into structured digital learning.'
  },
  {
    q: 'Can you train our internal team instead?',
    a: 'Yes. CourseMasters offers both individual course-creator training and institutional team bootcamps.'
  },
  {
    q: 'Can courses be multilingual?',
    a: 'Yes. Localization and additional languages can be scoped into the engagement.'
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Annual support can include LMS administration, technical support, course updates, analytics, new modules and content maintenance.'
  }
];

export default function CourseMastersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
        <div className="container-custom py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-white">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-amber-400 mb-4">
                CourseMasters™ by Qraft Academy
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
                Turn Your Organization&apos;s Knowledge Into Scalable Digital Learning
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl">
                Transform your policies, curricula, manuals, technical knowledge and training programmes into professional digital courses — with the platforms, capabilities and support to deliver learning at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <Link
                  href="/coursemasters/assessment"
                  onClick={() => trackAssessmentClick('hero')}
                  className="btn-primary text-center px-7 py-3.5 text-base"
                >
                  Book a Free Digital Learning Assessment
                </Link>
                <a
                  href="#solutions"
                  className="px-7 py-3.5 text-base font-semibold text-center rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Explore Our Solutions
                </a>
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400">
                Digital Courses • Moodle LMS • Team Capability • Ongoing Support
              </p>
            </div>
            <div className="relative h-[280px] sm:h-[360px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://res.cloudinary.com/dwa3soopc/image/upload/v1779659947/coursemasters/COURSE_TELEPROMPTER_mfatk0.jpg"
                alt="CourseMasters production in progress"
                fill
                className="object-cover"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="container-custom py-10 sm:py-12">
          <p className="text-center text-sm sm:text-base font-semibold text-slate-700 mb-8">
            Digital learning solutions for organizations that need knowledge to travel further.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Institutional Experience', text: 'Digital learning developed for organizational programmes.' },
              { title: 'End-to-End Capability', text: 'From content analysis to deployment.' },
              { title: 'Built for Scale', text: 'Reusable learning that reaches people repeatedly.' }
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Your Organization Already Has the Knowledge.
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">But is it reaching everyone who needs it?</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROBLEM_CARDS.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl font-semibold text-slate-900 mt-12">
            CourseMasters™ transforms institutional knowledge into structured digital learning that can be delivered consistently, repeatedly and at scale.
          </p>
        </div>
      </section>

      {/* 4. THE NEW COURSEMASTERS MODEL */}
      <section id="solutions" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              One Digital Learning Partner. Four Ways We Help.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.tag} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 sm:p-8 flex flex-col">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl font-display font-bold text-slate-200">{pillar.number}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">{pillar.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-slate-600 mb-5 flex-1">{pillar.text}</p>
                <p className="text-amber-600 font-bold mb-4">{pillar.price}</p>
                <a href={pillar.href} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                  {pillar.cta} →
                </a>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">Need the complete system?</h3>
            <p className="text-slate-300 mb-1">Digital Courses + Moodle LMS + Team Capability + Ongoing Support</p>
            <p className="text-amber-400 font-bold mb-6">Custom institutional engagements from UGX 30M+</p>
            <Link
              href="/coursemasters/assessment?interest=complete-system"
              onClick={() => trackAssessmentClick('complete_system')}
              className="btn-primary inline-block px-7 py-3.5"
            >
              Discuss Your Digital Learning System →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FLAGSHIP OFFER */}
      <section id="flagship" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3">Our Flagship Offer</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">CourseMasters™ Standard</h2>
            <p className="text-lg sm:text-xl text-slate-600">One complete digital course. Ready to deploy.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
            <div className="text-center mb-10">
              <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-amber-400">UGX 20,000,000</p>
              <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-slate-400 mt-2">Per Standard Course</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-10 text-center">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xl sm:text-2xl font-bold text-amber-400">Up to 6</p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Modules</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xl sm:text-2xl font-bold text-amber-400">2–3 hrs</p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Learning Content</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xl sm:text-2xl font-bold text-amber-400">8–12 wks</p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Indicative Delivery</p>
              </div>
            </div>
            <h4 className="font-semibold mb-4 text-slate-200 uppercase tracking-wide text-sm">Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
              {FLAGSHIP_INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-slate-200 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/coursemasters/assessment?interest=flagship-course"
                onClick={() => trackEvent('coursemasters_flagship_interest', { location: 'flagship_section' })}
                className="btn-primary inline-block px-8 py-3.5"
              >
                Assess My Course Idea
              </Link>
              <p className="text-xs sm:text-sm text-slate-400 mt-4 max-w-xl mx-auto">
                Final scope and investment depend on content volume, complexity, multimedia requirements, languages and technical integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VALUE SECTION */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">
              More Than a Course. A Long-Term Learning Asset.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-16">
            {VALUE_ITEMS.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 rounded-3xl py-14 sm:py-20 px-6 text-center">
            <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">YOUR CONTENT.</p>
            <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">OUR EXPERTISE.</p>
            <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-amber-400 leading-tight">REAL IMPACT.</p>
          </div>
        </div>
      </section>

      {/* 7. HOW A COURSE IS BUILT */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              From Your Content to a Ready-to-Use Digital Learning Experience
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {BUILD_STEPS.map((step, i) => (
              <div key={step} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center min-h-[92px] flex flex-col justify-center">
                <p className="text-xs font-bold text-blue-600 mb-1">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-sm font-semibold text-slate-900">{step}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-center text-lg font-semibold text-slate-900 mt-12">
            You bring the subject-matter knowledge. We bring the instructional design, multimedia, technology and production expertise.
          </p>
        </div>
      </section>

      {/* 8. PROOF / CASE STUDIES */}
      <section id="proof" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">We&apos;ve Already Done This.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="relative h-44">
                  <Image src={cs.img} alt={cs.title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{cs.title}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">Client: {cs.client}</p>
                  <p className="text-sm text-slate-600 mb-5 flex-1">{cs.delivered}</p>
                  <button
                    onClick={() => {
                      trackCaseStudyView(cs.title);
                      window.open('https://ulearn.enabel.be/', '_blank');
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700 text-left"
                  >
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MID-FUNNEL CTA */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
            What Knowledge Could Your Organization Digitize?
          </h2>
          <p className="text-slate-600 mb-1">
            Policies? Training manuals? Staff induction? Technical programmes? Partner training? Professional development?
          </p>
          <p className="text-slate-900 font-semibold mb-8">You don&apos;t need to know exactly what the solution should look like.</p>
          <p className="text-slate-600 mb-6">We&apos;ll help you identify the opportunity.</p>
          <Link
            href="/coursemasters/assessment"
            onClick={() => trackAssessmentClick('mid_funnel')}
            className="btn-primary inline-block px-8 py-3.5"
          >
            Book a Free Digital Learning Assessment
          </Link>
        </div>
      </section>

      {/* 10. MOODLE OFFER */}
      <section id="lms-offer" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Don&apos;t Have an LMS? We&apos;ll Build It.
            </h2>
            <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-3">CourseMasters™ Moodle LMS</p>
            <p className="text-slate-600">
              Create a branded environment where your organization can deliver courses, enrol learners, administer assessments, monitor completion, issue certificates and manage learning over time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LMS_TIERS.map((tier) => (
              <div
                key={tier.tag}
                className={`relative bg-white rounded-2xl border p-7 flex flex-col ${
                  tier.popular ? 'border-blue-600 shadow-lg ring-2 ring-blue-100' : 'border-slate-100 shadow-sm'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 mb-1">{tier.tag}</p>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{tier.tier}</h3>
                <p className="text-amber-600 font-bold mb-5">{tier.price}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/coursemasters/assessment?interest=moodle-lms"
              onClick={() => trackEvent('coursemasters_lms_interest', { location: 'lms_section' })}
              className="btn-primary inline-block px-8 py-3.5"
            >
              Assess My LMS Requirements
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 mt-4 max-w-xl mx-auto">
              Hosting, domain registration, premium plugins, third-party licences and specialized integrations are scoped separately.
            </p>
          </div>
        </div>
      </section>

      {/* 11. CAPABILITY / DIY OFFER */}
      <section id="capability-offer" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">
              Want to Build Courses Yourself?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-1">Individual Course Creator Programme</h3>
              <p className="text-sm text-slate-500 mb-4">For trainers, consultants, lecturers, subject-matter experts and professionals.</p>
              <p className="text-2xl font-display font-bold text-amber-600 mb-5">UGX 3,000,000 / participant</p>
              <p className="text-sm font-semibold text-slate-700 mb-2">Learn to:</p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {['Course idea & learner definition', 'Learning architecture', 'Module design', 'Storyboarding', 'Multimedia planning', 'Assessment design', 'Course building', 'Deployment'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-slate-900 mb-6">
                Leave with a practical digital course prototype — not just course-creation theory.
              </p>
              <Link
                href="/coursemasters/assessment?interest=individual-training"
                onClick={() => trackEvent('coursemasters_training_interest', { offer: 'individual' })}
                className="btn-primary text-center px-6 py-3"
              >
                Join CourseMasters
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-1">Institutional CourseMasters™ Bootcamp</h3>
              <p className="text-sm text-slate-500 mb-4">For HR, L&amp;D, programme, communications, academic and technical teams.</p>
              <p className="text-2xl font-display font-bold text-amber-600 mb-1">UGX 15M / organization</p>
              <p className="text-sm text-slate-500 mb-5">3–5 Day Practical Bootcamp</p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {['Team-based course development', 'Tools, templates & checklists', 'Moodle/course-authoring workflow', 'Prototype development', 'Optional mentorship'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/coursemasters/assessment?interest=team-bootcamp"
                onClick={() => trackEvent('coursemasters_training_interest', { offer: 'institutional' })}
                className="btn-primary text-center px-6 py-3"
              >
                Train My Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRODUCTION CAPABILITY */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">
              One Engagement. A Multidisciplinary Team Behind It.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {PRODUCTION_SKILLS.map((skill) => (
              <div key={skill} className="bg-white rounded-xl border border-slate-100 shadow-sm py-4 px-3 text-center">
                <p className="text-sm font-semibold text-slate-700">{skill}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTION_PHOTOS.map((src) => (
              <div key={src} className="relative h-36 sm:h-44 rounded-xl overflow-hidden">
                <Image src={src} alt="CourseMasters production" fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. HOW WE WORK */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">How We Work</h2>
          </div>
          <p className="max-w-2xl mx-auto text-center text-sm text-slate-500 mb-12">
            The ten-step process above explains how a course is produced. This framework explains how CourseMasters works with you, the client.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {WORK_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-slate-900 text-white rounded-xl px-6 py-4 text-center min-w-[120px]">
                  <p className="text-xs text-amber-400 font-bold mb-1">{String(i + 1).padStart(2, '0')}</p>
                  <p className="font-semibold">{step}</p>
                </div>
                {i < WORK_STEPS.length - 1 && <span className="hidden sm:block text-slate-300 text-lg">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. SUPPORT & SCALE */}
      <section id="support" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Keep Your Digital Learning Working.
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {SUPPORT_ITEMS.map((item) => (
                  <p key={item} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Annual Support</p>
              <p className="text-2xl sm:text-3xl font-display font-bold text-amber-600 mb-6">From UGX 3M–10M+ / year</p>
              <Link
                href="/coursemasters/assessment?interest=ongoing-support"
                onClick={() => trackAssessmentClick('support')}
                className="btn-primary inline-block px-6 py-3"
              >
                Discuss Ongoing Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section id="faq" className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-slate-100 shadow-sm p-5 sm:p-6">
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-blue-600 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm sm:text-base text-slate-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FINAL CONVERSION SECTION */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-display font-bold mb-3">Not Sure What to Digitize First?</h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-amber-400 mb-6 leading-tight">
            Start With a Complimentary Digital Learning Opportunity Assessment.
          </p>
          <p className="text-slate-300 mb-3 max-w-xl mx-auto">
            In a short discovery session, we&apos;ll assess your existing training content, target learners, delivery challenges, LMS situation and digital-learning opportunities.
          </p>
          <p className="text-slate-200 font-semibold mb-8">
            You&apos;ll receive an initial recommendation on the most suitable way forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/coursemasters/assessment"
              onClick={() => trackAssessmentClick('final_cta')}
              className="btn-primary px-8 py-3.5 text-center"
            >
              Book My Free Assessment
            </Link>
            <button
              onClick={() =>
                openWhatsApp('Hello! I would like to talk to CourseMasters about a digital learning project.', 'final_cta')
              }
              className="px-8 py-3.5 text-center font-semibold rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Talk to CourseMasters on WhatsApp
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            +256 755 017 384 · <a className="underline hover:text-white" href="mailto:drew@qraftacademy.com">drew@qraftacademy.com</a> · Kampala, Uganda
          </p>
        </div>
      </section>
    </main>
  );
}
