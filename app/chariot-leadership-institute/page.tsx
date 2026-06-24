import Link from "next/link";
import { CheckCircle, ArrowRight, Users, Building2, TrendingUp, BookOpen, Lightbulb, Target, Globe, Shield } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Chariot Leadership Institute | Leadership Development | Qraft Academy",
  description:
    "Developing leaders, managers, executives, and institution builders through leadership development, executive education, governance, and organizational excellence programs.",
};

const framework = [
  {
    level: "1",
    title: "Personal Leadership",
    subtitle: "Lead Yourself",
    icon: <Shield className="w-7 h-7" />,
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
    items: ["Self-awareness", "Character", "Discipline", "Emotional Intelligence", "Personal Productivity"],
  },
  {
    level: "2",
    title: "Team Leadership",
    subtitle: "Lead Others",
    icon: <Users className="w-7 h-7" />,
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
    items: ["Communication", "Coaching", "Delegation", "Team Building", "Conflict Management"],
  },
  {
    level: "3",
    title: "Organizational Leadership",
    subtitle: "Lead Systems",
    icon: <Building2 className="w-7 h-7" />,
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
    items: ["Strategy", "Management", "Governance", "Culture", "Change Leadership"],
  },
  {
    level: "4",
    title: "Societal Leadership",
    subtitle: "Lead Impact",
    icon: <Globe className="w-7 h-7" />,
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
    items: ["Public Leadership", "Community Engagement", "Nation Building", "Sustainability", "Stewardship"],
  },
];

const programs = [
  {
    title: "Leadership Foundations Program",
    audience: "For students, graduates, and emerging leaders",
    icon: "🌱",
    color: "border-t-4 border-t-primary-400",
    topics: ["Leadership Fundamentals", "Communication", "Decision Making", "Time Management", "Teamwork"],
  },
  {
    title: "Modern Leadership Development Program",
    audience: "For supervisors, managers, and team leaders",
    icon: "🚀",
    color: "border-t-4 border-t-accent-400",
    topics: ["Strategic Thinking", "Managing Performance", "Building Culture", "Leading Change", "Productivity and Execution"],
  },
  {
    title: "Executive Leadership Program",
    audience: "For senior leaders, executives, and founders",
    icon: "👑",
    color: "border-t-4 border-t-primary-600",
    topics: ["Vision and Strategy", "Governance", "Organizational Growth", "Institutional Leadership", "Succession Planning"],
  },
  {
    title: "Leadership Masterclasses",
    audience: "Open to all professionals and leaders",
    icon: "🎯",
    color: "border-t-4 border-t-accent-600",
    topics: ["Leadership", "Management", "Productivity", "Execution", "Governance", "Innovation"],
  },
];

const whoWeServe = [
  {
    title: "Individuals",
    icon: <Users className="w-8 h-8" />,
    description: "Professionals, students, entrepreneurs, and aspiring leaders seeking to grow their leadership capacity.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
  {
    title: "Organizations",
    icon: <Building2 className="w-8 h-8" />,
    description: "Companies, NGOs, schools, hospitals, and government institutions building leadership pipelines.",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
  },
  {
    title: "Executives",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Senior leaders seeking strategic leadership development, executive coaching, and governance training.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
];

const impactAreas = [
  { label: "Better Leadership", icon: "🧭" },
  { label: "Stronger Teams", icon: "🤝" },
  { label: "Improved Productivity", icon: "⚡" },
  { label: "Effective Governance", icon: "🏛️" },
  { label: "Sustainable Growth", icon: "🌱" },
  { label: "Institution Building", icon: "🏗️" },
];

const partnerTypes = [
  "Companies",
  "Universities",
  "TVET Institutions",
  "NGOs",
  "Government Agencies",
  "Professional Associations",
];

const resources = [
  { label: "Articles", icon: <BookOpen className="w-6 h-6" /> },
  { label: "Leadership Guides", icon: <Target className="w-6 h-6" /> },
  { label: "Workbooks", icon: <Lightbulb className="w-6 h-6" /> },
  { label: "Research Reports", icon: <TrendingUp className="w-6 h-6" /> },
  { label: "Videos", icon: <Globe className="w-6 h-6" /> },
  { label: "Podcasts", icon: <Users className="w-6 h-6" /> },
];

const philosophyPillars = [
  { label: "Influence people", icon: "🤝" },
  { label: "Create clarity", icon: "🔍" },
  { label: "Build systems", icon: "⚙️" },
  { label: "Drive execution", icon: "🚀" },
  { label: "Steward resources responsibly", icon: "🛡️" },
];

export default function ChariotLeadershipInstitutePage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              🏛️ An Institution under Qraft Academy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Developing Leaders for a Changing World
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-white/90 max-w-3xl mx-auto">
              We equip emerging and established leaders with the mindset, skills, systems, and stewardship required to lead people, organizations, and societies in the 21st century.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-white/90 px-8 py-4 text-lg font-bold">
                Apply for a Program
              </Link>
              <Link href="#partner" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                What is Chariot Leadership Institute?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Chariot Leadership Institute is the leadership development arm of Qraft Academy dedicated to preparing leaders for today's challenges and tomorrow's opportunities.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                We develop leaders who can:
              </p>
              <ul className="space-y-3">
                {[
                  "Lead themselves effectively",
                  "Lead teams successfully",
                  "Build high-performing organizations",
                  "Drive sustainable impact in society",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200 rounded-3xl p-8 sm:p-10">
              <p className="text-primary-800 text-lg sm:text-xl font-semibold leading-relaxed italic">
                "Chariot Leadership Institute develops leaders, managers, and executives who can lead people, build systems, and create lasting impact in organizations and society."
              </p>
              <p className="text-primary-600 font-bold mt-6 text-sm uppercase tracking-widest">Positioning Statement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Leadership Beyond Position
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              We believe leadership is not a title.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {philosophyPillars.slice(0, 3).map((pillar) => (
                <div key={pillar.label} className="card p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{pillar.icon}</span>
                  <span className="font-semibold text-neutral-900">{pillar.label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {philosophyPillars.slice(3).map((pillar) => (
                <div key={pillar.label} className="card p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{pillar.icon}</span>
                  <span className="font-semibold text-neutral-900">{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Framework */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              The Chariot Leadership Model
            </h2>
            <p className="text-lg text-neutral-600">A four-level framework for total leadership development</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {framework.map((tier) => (
              <div key={tier.title} className={`card p-7 bg-gradient-to-br ${tier.color} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${tier.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {tier.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Level {tier.level}</p>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-1">{tier.title}</h3>
                <p className="text-sm font-semibold text-primary-600 mb-5">{tier.subtitle}</p>
                <ul className="space-y-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-neutral-600">Structured leadership development for every stage of your journey</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div key={program.title} className={`card p-7 hover:shadow-xl transition-all duration-300 group ${program.color}`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{program.icon}</div>
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-2 leading-snug">{program.title}</h3>
                <p className="text-sm text-neutral-500 mb-5 leading-relaxed">{program.audience}</p>
                <ul className="space-y-2">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700 group-hover:gap-2 transition-all">
                  Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 leading-tight">
                Research and Insights
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We conduct research and publish insights on:
              </p>
              <ul className="space-y-3 mb-8">
                {["Leadership Trends", "Management Practices", "Organizational Performance", "Workforce Leadership", "Future-Ready Institutions"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white/70 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-white/90 px-6 py-3 font-bold text-center">
                  Read Reports
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-center">
                  Explore Resources
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Leadership Trends", "Management Practices", "Organizational Performance", "Workforce Leadership"].map((topic) => (
                <div key={topic} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-white/70 mb-3" />
                  <p className="text-white font-semibold text-sm leading-snug">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Who We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whoWeServe.map((group) => (
              <div key={group.title} className={`card p-8 sm:p-10 bg-gradient-to-br ${group.color} border-2 hover:shadow-xl transition-all duration-300 group text-center`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${group.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {group.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">{group.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Creating Lasting Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {impactAreas.map((area) => (
              <div key={area.label} className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <p className="text-sm font-semibold text-neutral-900 leading-snug">{area.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section id="partner" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
              We collaborate with organizations across sectors to build leadership capacity at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {partnerTypes.map((type) => (
                <span key={type} className="px-5 py-2 bg-white border border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 shadow-sm">
                  {type}
                </span>
              ))}
            </div>
            <Link href="/contact" className="btn-primary px-10 py-4 text-lg font-bold">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
              Resource Hub
            </h2>
            <p className="text-neutral-600 text-lg">Tools and insights to accelerate your leadership growth</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <div key={resource.label} className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                  {resource.icon}
                </div>
                <p className="text-sm font-semibold text-neutral-900">{resource.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
        <div className="container-custom text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Build the Leadership Capacity Your Future Requires
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join a growing community of leaders committed to excellence, impact, and stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-white/90 px-8 py-4 text-lg font-bold">
              Apply Now
            </Link>
            <Link href="#partner" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Partner With Us
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
