import Link from "next/link";
import { type Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  AlertTriangle,
  FileText,
  Users,
  TrendingUp,
  Target,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SystemMasters™ Governance Framework | Qraft Academy",
  description:
    "Build practical governance, financial control, accountability, and leadership systems with Qraft Academy's SystemMasters™ Governance Framework.",
};

const problems = [
  "Unclear roles and responsibilities",
  "Weak decision-making processes",
  "Poor financial controls",
  "Limited accountability",
  "Inconsistent reporting",
  "Lack of leadership routines",
  "Weak documentation",
  "Low institutional trust",
];

const frameworkStages = [
  {
    step: "01",
    label: "Assess",
    description:
      "Understand current governance structures, leadership roles, financial controls, risks, and accountability gaps.",
    border: "border-primary-300",
    bg: "bg-primary-50",
    badge: "bg-primary-100 text-primary-700",
    heading: "text-primary-700",
  },
  {
    step: "02",
    label: "Design",
    description:
      "Create practical governance structures, roles, policies, controls, and reporting systems.",
    border: "border-accent-300",
    bg: "bg-accent-50",
    badge: "bg-accent-100 text-accent-700",
    heading: "text-accent-700",
  },
  {
    step: "03",
    label: "Equip",
    description:
      "Train leaders, committees, staff, and members to understand and apply good governance practices.",
    border: "border-primary-300",
    bg: "bg-primary-50",
    badge: "bg-primary-100 text-primary-700",
    heading: "text-primary-700",
  },
  {
    step: "04",
    label: "Build",
    description:
      "Develop governance toolkits, financial management templates, decision registers, meeting tools, accountability systems, and control procedures.",
    border: "border-accent-300",
    bg: "bg-accent-50",
    badge: "bg-accent-100 text-accent-700",
    heading: "text-accent-700",
  },
  {
    step: "05",
    label: "Embed",
    description:
      "Coach leaders and teams as they begin using the governance systems in real organizational routines.",
    border: "border-primary-300",
    bg: "bg-primary-50",
    badge: "bg-primary-100 text-primary-700",
    heading: "text-primary-700",
  },
  {
    step: "06",
    label: "Sustain",
    description:
      "Support continuous improvement through reviews, reporting, monitoring, and governance performance routines.",
    border: "border-accent-300",
    bg: "bg-accent-50",
    badge: "bg-accent-100 text-accent-700",
    heading: "text-accent-700",
  },
];

const buildItems = [
  {
    title: "Governance Framework",
    description:
      "Clear structures, committees, roles, responsibilities, and decision-making processes.",
    icon: <Shield className="w-6 h-6" />,
    iconClass: "text-primary-600 bg-primary-100",
  },
  {
    title: "Roles and Responsibilities Matrix",
    description:
      "A practical tool that clarifies who does what, who approves what, and who is accountable.",
    icon: <Users className="w-6 h-6" />,
    iconClass: "text-accent-600 bg-accent-100",
  },
  {
    title: "Financial Controls System",
    description:
      "Simple controls for budgeting, approvals, spending, cash management, documentation, and reporting.",
    icon: <TrendingUp className="w-6 h-6" />,
    iconClass: "text-primary-600 bg-primary-100",
  },
  {
    title: "Governance Toolkit",
    description:
      "Meeting agendas, minutes templates, decision registers, action trackers, committee TORs, and review checklists.",
    icon: <FileText className="w-6 h-6" />,
    iconClass: "text-accent-600 bg-accent-100",
  },
  {
    title: "Accountability Framework",
    description:
      "Clear reporting routines, responsibilities, escalation pathways, and performance review practices.",
    icon: <Target className="w-6 h-6" />,
    iconClass: "text-primary-600 bg-primary-100",
  },
  {
    title: "90-Day Governance Improvement Roadmap",
    description:
      "A practical implementation plan that helps the organization adopt and sustain new governance systems.",
    icon: <Layers className="w-6 h-6" />,
    iconClass: "text-accent-600 bg-accent-100",
  },
];

const audiences = [
  "Community enterprises",
  "SMEs and growing businesses",
  "Cooperatives and SACCOs",
  "NGOs and social enterprises",
  "Incubation hubs and innovation centres",
  "Associations and member-based organizations",
  "Development programmes strengthening local partners",
  "Organizations preparing for funding, investment, or institutional growth",
];

const deliverySteps = [
  {
    number: "1",
    title: "Governance Assessment",
    description:
      "We review current structures, documents, practices, risks, and decision-making processes.",
  },
  {
    number: "2",
    title: "Systems Design",
    description:
      "We design practical governance, financial control, and accountability systems tailored to the organization.",
  },
  {
    number: "3",
    title: "Training and Facilitation",
    description:
      "We equip leaders and teams through practical sessions, scenarios, templates, and real organizational cases.",
  },
  {
    number: "4",
    title: "Coaching and Embedding",
    description:
      "We support implementation so the systems become part of how the organization actually works.",
  },
];

const deliverables = [
  "Governance Assessment Report",
  "Governance Framework",
  "Roles and Responsibilities Matrix",
  "Committee Terms of Reference",
  "Decision-Making Framework",
  "Financial Control Procedures",
  "Budget Template",
  "Cashbook Template",
  "Payment Approval Workflow",
  "Meeting Agenda and Minutes Templates",
  "Decision Register",
  "Action Tracker",
  "Risk Register",
  "Compliance Checklist",
  "Governance Improvement Action Plan",
  "Final Implementation Report",
];

const outcomes = [
  "Clearer leadership and decision-making",
  "Stronger financial accountability",
  "Better documentation and reporting",
  "Reduced governance and financial risk",
  "Improved trust among stakeholders",
  "Stronger readiness for funding and partnerships",
  "More consistent execution",
  "Sustainable organizational systems",
];

const differentiators = [
  {
    title: "Systems-first approach",
    description:
      "We do not only train people. We help organizations build the systems that support consistent performance.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Practical tools",
    description:
      "Every engagement leaves behind templates, frameworks, routines, and operating tools that can be used immediately.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Implementation support",
    description:
      "We support adoption through coaching, review, and continuous improvement.",
    icon: <Target className="w-6 h-6" />,
  },
];

export default function GovernanceFrameworkPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              ⚙️ SystemMasters™ — Governance Framework
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              SystemMasters™ Governance Framework
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build strong governance, financial controls, accountability systems, and leadership routines that help organizations operate with clarity, transparency, and long-term sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-base font-bold"
              >
                Request Governance Systems Support
              </Link>
              <Link
                href="/SystemMasters"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2"
              >
                Explore SystemMasters™ <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-left">
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Most organizations do not fail because they lack people or ambition. They struggle because roles are unclear, decisions are undocumented, financial controls are weak, accountability is inconsistent, and leadership routines are not embedded. The SystemMasters™ Governance Framework helps organizations move from informal management to structured, transparent, and accountable operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              The Governance Challenge
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
            {problems.map((problem) => (
              <div
                key={problem}
                className="card p-5 flex items-start gap-4 hover:shadow-md transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <p className="text-neutral-700 font-medium text-sm leading-snug">{problem}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-100">
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed text-center">
              When governance systems are weak, organizations become dependent on individuals instead of reliable structures. This creates confusion, delays, mistrust, financial risk, and poor execution.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Governance Systems Framework
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg">
              A six-stage process from diagnosis to sustained governance performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {frameworkStages.map((stage) => (
              <div
                key={stage.step}
                className={`rounded-2xl border-2 ${stage.border} ${stage.bg} p-6 sm:p-7`}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${stage.badge}`}>
                  {stage.step}
                </span>
                <h3 className={`text-xl font-display font-bold mb-3 ${stage.heading}`}>
                  {stage.label}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              What We Help You Build
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buildItems.map((item) => (
              <div
                key={item.title}
                className="card p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.iconClass} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Who This Framework Is For
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-start gap-3 card p-5 hover:shadow-md transition-all duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium text-sm sm:text-base">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              How We Deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliverySteps.map((step) => (
              <div
                key={step.number}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Typical Deliverables
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 card p-4 hover:shadow-md transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Expected Outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="card p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-neutral-700 font-semibold text-sm leading-snug">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qraft Academy */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-5">
              Why Qraft Academy
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
              Qraft Academy helps organizations move from training to systems. Through SystemMasters™, we design, build, and embed practical organizational systems that improve governance, operations, leadership, accountability, and long-term performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center mb-5 text-accent-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom text-center text-white px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-5 leading-tight max-w-3xl mx-auto">
            Ready to Strengthen Your Governance Systems?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you are preparing for funding, scaling operations, improving accountability, or strengthening institutional performance, the SystemMasters™ Governance Framework helps you build the structures and controls required for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-base font-bold"
            >
              Request Governance Systems Support
            </Link>
            <Link
              href="/SystemMasters"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2"
            >
              Back to SystemMasters™ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
