import Link from "next/link";
import { type Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Briefcase,
  BookOpen,
  Zap,
  Monitor,
  TrendingUp,
  Heart,
  Search,
  PenTool,
  Hammer,
  Layers,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SystemMasters™ | Systems Transformation | Qraft Academy",
  description:
    "Qraft Academy helps organizations design, build, and embed practical systems for productivity, leadership, governance, operations, workforce development, digital transformation, and financial sustainability.",
  openGraph: {
    title: "SystemMasters™ | Systems Transformation | Qraft Academy",
    description:
      "We help organizations design, build, and embed the systems that drive productivity, accountability, performance, growth, and long-term sustainability.",
  },
};

const systems = [
  {
    title: "Leadership Systems",
    icon: <Users className="w-5 h-5" />,
    description:
      "Decision-making, delegation, accountability, leadership development, and management routines.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&fit=crop",
  },
  {
    title: "Governance Systems",
    icon: <Shield className="w-5 h-5" />,
    description:
      "Governance frameworks, committee structures, policies, reporting lines, risk management, and accountability tools.",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80&fit=crop",
  },
  {
    title: "Workforce Systems",
    icon: <Briefcase className="w-5 h-5" />,
    description:
      "Work readiness, competency frameworks, staff development, performance management, and career pathways.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80&fit=crop",
  },
  {
    title: "Learning Systems",
    icon: <BookOpen className="w-5 h-5" />,
    description:
      "Learning academies, e-learning platforms, training frameworks, learning journeys, and knowledge management systems.",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80&fit=crop",
  },
  {
    title: "Productivity Systems",
    icon: <Zap className="w-5 h-5" />,
    description:
      "Workflow design, SOPs, planning systems, execution rhythms, project management, and continuous improvement.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80&fit=crop",
  },
  {
    title: "Digital Systems",
    icon: <Monitor className="w-5 h-5" />,
    description:
      "Digital workflows, data collection tools, dashboards, reporting systems, automation, and AI-enabled productivity tools.",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80&fit=crop",
  },
  {
    title: "Financial Systems",
    icon: <TrendingUp className="w-5 h-5" />,
    description:
      "Budgeting, cost recovery models, financial controls, revenue tracking, investment readiness, and capital management.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80&fit=crop",
  },
  {
    title: "Safety & Well-being Systems",
    icon: <Heart className="w-5 h-5" />,
    description:
      "Occupational health and safety systems, incident reporting, workplace well-being, compliance, and safe work practices.",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
    img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&q=80&fit=crop",
  },
];

const frameworkSteps = [
  {
    step: "01",
    title: "Assess",
    icon: <Search className="w-7 h-7" />,
    description: "We identify gaps, risks, opportunities, and priorities within your organization.",
    color: "border-primary-300 bg-primary-50",
    numberColor: "text-primary-300",
  },
  {
    step: "02",
    title: "Design",
    icon: <PenTool className="w-7 h-7" />,
    description: "We co-create practical systems tailored to the organization's context and goals.",
    color: "border-accent-300 bg-accent-50",
    numberColor: "text-accent-300",
  },
  {
    step: "03",
    title: "Build",
    icon: <Hammer className="w-7 h-7" />,
    description: "We develop SOPs, templates, workflows, dashboards, toolkits, and playbooks.",
    color: "border-primary-300 bg-primary-50",
    numberColor: "text-primary-300",
  },
  {
    step: "04",
    title: "Embed",
    icon: <Layers className="w-7 h-7" />,
    description: "We train teams, coach leaders, and support adoption across the organization.",
    color: "border-accent-300 bg-accent-50",
    numberColor: "text-accent-300",
  },
  {
    step: "05",
    title: "Sustain",
    icon: <RefreshCw className="w-7 h-7" />,
    description: "We monitor implementation, measure results, and improve continuously.",
    color: "border-primary-300 bg-primary-50",
    numberColor: "text-primary-300",
  },
];

const deliverables = [
  "Standard Operating Procedures",
  "Governance Toolkits",
  "Leadership Playbooks",
  "Dashboards and Reporting Systems",
  "Performance Management Frameworks",
  "Digital Workflows",
  "Learning Platforms",
  "Operational Manuals",
  "Workforce Development Frameworks",
  "Occupational Health and Safety Systems",
  "Financial Controls and Templates",
  "Monitoring and Evaluation Systems",
];

const applications = [
  {
    title: "WorkMasters",
    icon: "⚡",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    description:
      "Productivity, execution, accountability, and personal leadership systems for professionals and teams.",
  },
  {
    title: "CourseMasters",
    icon: "🎓",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    description:
      "Learning systems, course design, digital learning, and knowledge transfer systems for organizations.",
  },
  {
    title: "CapitalMasters",
    icon: "💰",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    description:
      "Financial literacy, investment readiness, and capital management systems for enterprises.",
  },
  {
    title: "Future of Work & Leadership Forum",
    icon: "🌍",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    description:
      "Workforce transformation, policy dialogue, leadership, and future-of-work systems at scale.",
  },
  {
    title: "Community Enterprise Systems",
    icon: "🏗️",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    description:
      "Governance, operations, records, safety, and financial systems for community-based enterprises and SMEs.",
  },
];

export default function BuildingSystemsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero — photo background with gradient overlay */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&fit=crop&crop=center"
          alt="Systems transformation workshop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 via-primary-700/80 to-accent-600/80" />
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              ⚙️ SystemMasters™
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Building the Systems That Make Organizations Work
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-white/90 max-w-3xl mx-auto">
              Most organizations do not fail because of a lack of talent. They struggle because of weak systems. Qraft Academy helps organizations design, build, and embed the systems that drive productivity, accountability, performance, growth, and long-term sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-bold">
                Work With Us
              </Link>
              <Link href="#systems" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Explore Our Systems Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-100">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-700 font-display font-semibold leading-relaxed">
              Learning develops people.{" "}
              <span className="text-primary-600">Systems enable people to perform.</span>{" "}
              Capital helps organizations scale.
            </p>
            <p className="text-lg text-neutral-500 mt-6 max-w-2xl mx-auto">
              At Qraft Academy, we help organizations build all three.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Grid — cards with photo thumbnails */}
      <section id="systems" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              The Systems We Help Build
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Eight interconnected system domains, designed to make your organization function at its best.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system) => (
              <div
                key={system.title}
                className={`card overflow-hidden bg-gradient-to-br ${system.color} border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Photo thumbnail */}
                <div className="h-36 overflow-hidden relative">
                  <img
                    src={system.img}
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon badge over image */}
                  <div className={`absolute bottom-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center shadow-md ${system.iconColor}`}>
                    {system.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-display font-bold text-neutral-900 mb-2 leading-snug">
                    {system.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{system.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Systems Transformation Framework
            </h2>
            <p className="text-lg text-neutral-600">
              A proven five-step process from diagnosis to sustained impact.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
              {frameworkSteps.map((step, index) => (
                <div key={step.step} className="relative flex flex-col items-center text-center px-2">
                  {index < frameworkSteps.length - 1 && (
                    <div className="hidden sm:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-200 to-accent-200 z-0" />
                  )}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl border-2 ${step.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <span className="text-primary-600">{step.icon}</span>
                  </div>
                  <p className={`text-4xl font-display font-black mb-1 ${step.numberColor}`}>{step.step}</p>
                  <h3 className="text-lg font-display font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables — photo on left */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4 leading-tight">
                    What We Build With You
                  </h2>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Every engagement produces tangible, practical deliverables your team can use immediately — not presentations that gather dust.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-56 sm:h-64">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop"
                    alt="Team working on systems deliverables"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 card p-4 hover:shadow-md transition-all duration-200">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Apply Systems Thinking */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Where We Apply Systems Thinking
            </h2>
            <p className="text-white/80 text-lg">
              Systems thinking is embedded across every pillar of the Qraft Academy ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {applications.slice(0, 3).map((app) => (
              <div
                key={app.title}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{app.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
            {applications.slice(3).map((app) => (
              <div
                key={app.title}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{app.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
              Built for Organizations That Mean Business
            </h2>
            <p className="text-neutral-600 text-lg">Our systems work applies across sectors and organization types.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { label: "NGOs", icon: "🌱" },
              { label: "Government Agencies", icon: "🏛️" },
              { label: "Development Partners", icon: "🤝" },
              { label: "Universities", icon: "🎓" },
              { label: "SMEs & Enterprises", icon: "🏢" },
              { label: "Community Organizations", icon: "🏘️" },
            ].map((org) => (
              <div key={org.label} className="card p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{org.icon}</div>
                <p className="text-sm font-semibold text-neutral-900 leading-snug">{org.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Ready to strengthen the systems behind your organization?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you are building a workforce program, improving operations, strengthening governance, digitizing processes, or developing leaders — Qraft Academy can help you turn ideas into working systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-bold">
              Book a Consultation
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center gap-2">
              Contact Qraft Academy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
