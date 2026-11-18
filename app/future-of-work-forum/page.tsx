import Link from 'next/link';
import { PARTNERSHIP_HREF } from '@/lib/proposal';

/*
 * Content flags. Entries below stay in the code but are only shown once confirmed.
 * - Board: only members with `confirmed: true` are listed (the others are placeholders).
 * - Members: set SHOW_MEMBERS to true once the organisations listed have confirmed membership.
 */
const SHOW_MEMBERS = false;

const boardMembers = [
  { name: 'Andrew Tugume', position: 'Chairman of the Board', confirmed: true },
  { name: 'Member 2', position: 'Vice Chairman', confirmed: false },
  { name: 'Member 3', position: 'Treasurer', confirmed: false },
  { name: 'Member 4', position: 'Secretary', confirmed: false },
];

const committees = [
  { name: 'Workforce Development Committee', description: 'Focuses on training and skill development programmes' },
  { name: 'Innovation & Technology Committee', description: 'Drives digital transformation and innovation initiatives' },
  { name: 'Advocacy & Policy Committee', description: 'Develops policies and represents member interests' },
  { name: 'Events & Engagement Committee', description: 'Organises conferences, tours and community events' },
];

const policies2026 = [
  { title: 'Digital Skills for All', description: 'Advocating for accessible digital literacy programmes across all economic sectors' },
  { title: 'Flexible Work Standards', description: 'Promoting policies that support flexible and remote working arrangements' },
  { title: 'Gig Economy Protection', description: 'Ensuring fair treatment and protection for gig workers and freelancers' },
  { title: 'Youth Employment Initiative', description: 'Creating pathways for young professionals to enter the job market' },
  { title: 'Women in Leadership', description: 'Advancing gender equality and women’s representation in decision-making roles' },
  { title: 'PWD Inclusion Program', description: 'Ensuring persons with disabilities have equal access to work opportunities' },
  { title: 'Refugee Employment Support', description: 'Supporting economic integration of refugees through skills training' },
  { title: 'Green Economy Jobs', description: 'Creating sustainable employment in the green and circular economy sectors' },
];

const members = [
  { name: 'Tech Innovation Hub', sector: 'Technology' },
  { name: 'Kenya Financial Services', sector: 'Finance' },
  { name: 'East Africa Manufacturing Corp', sector: 'Manufacturing' },
  { name: 'Digital Solutions Ltd', sector: 'IT Services' },
  { name: 'Sustainable Energy Group', sector: 'Green Energy' },
  { name: 'Creative Industries Alliance', sector: 'Creative Economy' },
  { name: 'Healthcare Professionals Network', sector: 'Care Economy' },
  { name: 'Agricultural Innovation Center', sector: 'Agriculture' },
  { name: 'Trade Commerce Federation', sector: 'Trade' },
  { name: 'Knowledge Management Institute', sector: 'Education' },
  { name: 'Freelancer Network East Africa', sector: 'Gig Economy' },
  { name: 'Startup Ecosystem Accelerator', sector: 'Entrepreneurship' },
];

const events = [
  { title: 'Future of Work Tour — Ethiopia', year: 2025, location: 'Addis Ababa, Ethiopia', description: 'Annual tour showcasing best practices and networking opportunities across East Africa', type: 'Tour' },
  { title: 'Future of Work Tour — Ethiopia', year: 2026, location: 'Addis Ababa, Ethiopia', description: 'Annual tour showcasing best practices and networking opportunities across East Africa', type: 'Tour' },
  { title: 'Future of Work Conference', year: 2026, location: 'Kampala, Uganda', description: 'One-week annual conference bringing together leaders, professionals and innovators to shape the future of work', type: 'Conference' },
  { title: 'Future of Work Awards', year: 2026, location: 'Kampala, Uganda', description: 'Recognition of outstanding contributions to workforce development and innovation', type: 'Awards' },
  { title: 'Digital Skills Workshop Series', year: 2026, location: 'Multiple locations', description: 'Quarterly workshops on emerging skills and workplace trends', type: 'Workshop' },
  { title: 'Women in Work Symposium', year: 2026, location: 'Kampala, Uganda', description: 'Focused discussion on advancing women in the modern workplace', type: 'Symposium' },
];

const economies = ['Care Economy', 'Gig Economy', 'Digital Economy', 'Green Economy', 'Experience Economy', 'Creative Economy', 'Trade Economy', 'Knowledge Economy'];

const initiatives = [
  {
    name: 'Future of Work Tour',
    role: 'Ecosystem Engagement & Activation',
    text: 'Engaging institutions, communities, associations and enterprises to discover opportunities, share knowledge, build relationships and catalyse collaboration.',
  },
  {
    name: 'Future of Work Awards',
    role: 'Ecosystem Recognition & Excellence',
    text: 'Recognising and celebrating individuals, organisations and initiatives demonstrating outstanding contributions to the future of work.',
  },
];

const container = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
const sectionClass = `${container} py-14 border-t border-slate-200`;
const h2 = 'font-display text-3xl sm:text-4xl font-bold text-slate-900';

export default function FutureOfWorkForumPage() {
  const board = boardMembers.filter((m) => m.confirmed);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`${container} py-16 md:py-24`}>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Ecosystem Capital Development</p>
        <h1 className="font-display text-5xl font-bold text-slate-900 md:text-6xl">Future of Work Forum</h1>
        <p className="mt-4 text-xl font-semibold text-slate-600 md:text-2xl">Join Us in Shaping the Future of Work</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
          A multi-stakeholder platform connecting individuals, institutions, businesses and partners to shape the future of work —
          empowering economies, enhancing careers and fostering innovation.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={PARTNERSHIP_HREF} className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Partner With the Forum
          </Link>
          <a href="#initiatives" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-slate-900">
            Tour &amp; Awards
          </a>
        </div>
      </section>

      {/* Mission */}
      <section className={sectionClass}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ['Our Mission', 'Empower economies, enhance careers and foster innovation.'],
            ['Our Vision', 'A thriving future of work that is inclusive, sustainable and empowering for all.'],
            ['Our Commitment', 'Affirmative action for PWDs, youths, refugees and women.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="mb-2 text-xl font-bold text-slate-900">{t}</h3>
              <p className="text-slate-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tour & Awards */}
      <section id="initiatives" className={`${sectionClass} scroll-mt-24`}>
        <h2 className={h2}>Two Initiatives, Two Roles</h2>
        <p className="mb-8 mt-3 max-w-2xl text-slate-600">The Tour activates the ecosystem; the Awards recognise excellence within it.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {initiatives.map((i) => (
            <article key={i.name} className="rounded-2xl border-l-4 border-blue-600 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{i.role}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{i.name}</h3>
              <p className="mt-3 leading-relaxed text-slate-700">{i.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Focus economies */}
      <section className={sectionClass}>
        <h2 className={h2}>2026 Focus Economies</h2>
        <p className="mb-8 mt-3 text-slate-600">Economies shaping the future of work</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {economies.map((economy) => (
            <div key={economy} className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center">
              <p className="font-semibold text-slate-900">{economy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board and committees */}
      <section className={sectionClass}>
        <h2 className={`${h2} mb-10`}>Board and Committees</h2>
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Board of Directors</h3>
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((member) => (
            <div key={member.name} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-lg font-bold text-slate-900">{member.name}</p>
              <p className="mt-1 text-slate-600">{member.position}</p>
            </div>
          ))}
        </div>
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Active Committees</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {committees.map((committee) => (
            <div key={committee.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="mb-2 text-lg font-bold text-slate-900">{committee.name}</h4>
              <p className="text-slate-600">{committee.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className={sectionClass}>
        <h2 className={h2}>Policies and Advocacy</h2>
        <p className="mb-8 mt-3 text-slate-600">2026 policy focus areas</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {policies2026.map((policy) => (
            <div key={policy.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900">{policy.title}</h3>
              <p className="text-slate-700">{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Members (hidden until confirmed) */}
      {SHOW_MEMBERS ? (
        <section className={sectionClass}>
          <h2 className={h2}>Forum Members</h2>
          <p className="mb-8 mt-3 text-slate-600">Organisations shaping the future of work with us</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <div key={member.name} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-blue-700">{member.sector}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Events */}
      <section className={sectionClass}>
        <h2 className={h2}>Our Events</h2>
        <p className="mb-8 mt-3 text-slate-600">Upcoming and annual events</p>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={`${event.title}-${event.year}`} className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">{event.type}</span>
                <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                <span className="text-slate-600">
                  {event.year} · {event.location}
                </span>
              </div>
              <p className="mt-3 text-slate-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join + ecosystem link */}
      <section className={`${sectionClass} mb-12`}>
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
          <h2 className="font-display text-3xl font-bold">Join the Forum</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            The Forum is open to organisations that want to take part in shaping the future of work — as members, partners,
            sponsors or Tour hosts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={PARTNERSHIP_HREF} className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-white/90">
              Enquire About Membership
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">
            The Forum is a connected ecosystem initiative within the wider{' '}
            <Link href="/qraft-group#ecosystem" className="font-semibold text-white underline">
              Qraft Group capital development vision
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
