import Link from "next/link";
import { type Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  Zap,
  Award,
  FileText,
  Target,
  BookOpen,
  DollarSign,
  Laptop,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Business Accelerator | Qraft Academy",
  description:
    "A practical accelerator by Qraft Academy in partnership with MUBS ICT Centre and MUBS EIIC, preparing students, graduates and professionals for freelancing, consulting, remote work and BPO opportunities.",
  openGraph: {
    title: "Freelance Business Accelerator | Qraft Academy",
    description:
      "Build the mindset, skillset, toolset and assets you need to succeed as a freelancer, consultant or digital professional in the future of work.",
  },
};

const audience = [
  { label: "Final Year ICT Students", icon: "🎓" },
  { label: "Recent Graduates", icon: "📜" },
  { label: "Aspiring Freelancers", icon: "💻" },
  { label: "Consultants", icon: "🤝" },
  { label: "Creative & Technical Professionals", icon: "🎨" },
  { label: "Young Professionals Seeking Independent Work", icon: "🚀" },
];

const learningTopics = [
  {
    label: "Future of Work & Modern Work Principles",
    icon: <Globe className="w-5 h-5" />,
    color: "text-primary-600 bg-primary-50",
  },
  {
    label: "Business Model You",
    icon: <Target className="w-5 h-5" />,
    color: "text-accent-600 bg-accent-50",
  },
  {
    label: "Personal Branding & LinkedIn",
    icon: <Award className="w-5 h-5" />,
    color: "text-primary-600 bg-primary-50",
  },
  {
    label: "Freelance Business Models",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-accent-600 bg-accent-50",
  },
  {
    label: "Client Acquisition & Proposal Writing",
    icon: <FileText className="w-5 h-5" />,
    color: "text-primary-600 bg-primary-50",
  },
  {
    label: "Pricing & Negotiation",
    icon: <DollarSign className="w-5 h-5" />,
    color: "text-accent-600 bg-accent-50",
  },
  {
    label: "Financial Management",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-primary-600 bg-primary-50",
  },
  {
    label: "Compliance & Business Support",
    icon: <Shield className="w-5 h-5" />,
    color: "text-accent-600 bg-accent-50",
  },
  {
    label: "Remote Work & BPO Readiness",
    icon: <Laptop className="w-5 h-5" />,
    color: "text-primary-600 bg-primary-50",
  },
];

const outputs = [
  { label: "Business Model You Canvas", icon: "🗺️" },
  { label: "Professional CV", icon: "📄" },
  { label: "LinkedIn Profile", icon: "🔗" },
  { label: "Freelance Portfolio", icon: "💼" },
  { label: "Service Packages", icon: "📦" },
  { label: "Proposal Templates", icon: "📝" },
  { label: "Pricing Framework", icon: "💰" },
  { label: "Client Acquisition Plan", icon: "🎯" },
  { label: "Compliance Checklist", icon: "✅" },
  { label: "Freelance Marketplace Profiles", icon: "🌐" },
];

const partners = [
  {
    name: "MUBS ICT Centre",
    role: "Programme Sponsor & Technical Skills Partner",
    description:
      "Providing the technical infrastructure, ICT skills ecosystem, and institutional sponsorship that powers the accelerator.",
    icon: "🖥️",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
  {
    name: "MUBS EIIC",
    role: "Entrepreneurship, Compliance & Business Development",
    description:
      "Makerere University Business School's Entrepreneurship, Innovation and Incubation Centre supporting participants with business formation, compliance and growth.",
    icon: "🏛️",
    color: "from-accent-50 to-accent-100/50 border-accent-200",
    iconColor: "text-accent-600 bg-accent-100",
  },
  {
    name: "Qraft Academy",
    role: "Programme Design, Training Delivery & Mentorship",
    description:
      "Leading programme design, work readiness training, mentorship, and equipping participants with the tools and mindset to thrive in the modern economy.",
    icon: "🎓",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
];

const outcomes = [
  { label: "Work-ready participants", icon: "⚡" },
  { label: "Employable graduates", icon: "🎓" },
  { label: "Freelancers ready for the gig economy", icon: "💻" },
  { label: "Consultants ready to serve clients", icon: "🤝" },
  { label: "Participants ready for remote work", icon: "🌍" },
  { label: "MUBS freelance talent pool for BPO opportunities", icon: "🏗️" },
];

export default function FreelanceBusinessAcceleratorPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-accent-600 via-purple-700 to-primary-700">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              💼 Freelance Business Accelerator
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Building Work-Ready Freelancers, Consultants and Digital Professionals
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-white/90 max-w-3xl mx-auto">
              A practical accelerator by Qraft Academy in partnership with MUBS ICT Centre and MUBS EIIC, designed to prepare students, graduates and professionals for freelancing, consulting, remote work and BPO opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-accent-700 hover:bg-white/90 px-8 py-4 text-lg font-bold">
                Apply / Register Interest
              </Link>
              <Link href="#partners" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Programme Overview
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                The Freelance Business Accelerator is a structured programme that prepares participants for the modern world of work by combining work readiness, freelancing, consulting, digital skills, entrepreneurship and business development support.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                Participants leave the programme not just with knowledge — but with a complete set of professional assets, business tools and a concrete plan to launch and grow their independent work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary px-6 py-3 font-bold text-center">
                  Register Interest
                </Link>
                <Link href="#learn" className="px-6 py-3 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 text-center">
                  See the Curriculum
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200 rounded-3xl p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-accent-600 mb-4">At a Glance</p>
              <ul className="space-y-4">
                {[
                  { label: "Format", value: "Cohort-based, blended learning" },
                  { label: "Delivery", value: "In-person & online" },
                  { label: "Partners", value: "MUBS ICT Centre, MUBS EIIC" },
                  { label: "Focus", value: "Freelancing, consulting & remote work" },
                  { label: "Output", value: "10 professional assets per participant" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      <span className="font-semibold text-neutral-900">{item.label}:</span> {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Who It Is For
            </h2>
            <p className="text-lg text-neutral-600">
              Designed for anyone ready to build an independent professional career.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {audience.map((group) => (
              <div key={group.label} className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{group.icon}</div>
                <p className="text-sm font-semibold text-neutral-900 leading-snug">{group.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Participants Will Learn */}
      <section id="learn" className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              What Participants Will Learn
            </h2>
            <p className="text-lg text-neutral-600">
              A practical, applied curriculum built for the real world of independent work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {learningTopics.map((topic, index) => (
              <div key={topic.label} className="card p-5 flex items-center gap-4 hover:shadow-md transition-all duration-200 group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${topic.color} group-hover:scale-110 transition-transform duration-200`}>
                  {topic.icon}
                </div>
                <span className="font-semibold text-neutral-900 text-sm leading-snug">{topic.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participant Outputs */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Participant Outputs
            </h2>
            <p className="text-lg text-neutral-600">
              Every participant leaves with a complete suite of professional assets — not just a certificate.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {outputs.map((output) => (
              <div key={output.label} className="card p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{output.icon}</div>
                <p className="text-sm font-semibold text-neutral-900 leading-snug">{output.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Partners */}
      <section id="partners" className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Programme Partners
            </h2>
            <p className="text-lg text-neutral-600">
              A powerful collaboration between leading institutions and Qraft Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.name} className={`card p-8 sm:p-10 bg-gradient-to-br ${partner.color} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${partner.iconColor} group-hover:scale-110 transition-transform duration-300 text-3xl`}>
                  {partner.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">{partner.name}</h3>
                <p className="text-sm font-semibold text-primary-600 mb-4">{partner.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800 text-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Expected Outcomes
            </h2>
            <p className="text-white/80 text-lg">
              The Freelance Business Accelerator produces tangible, measurable results for participants, MUBS, and the broader economy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/20 transition-all duration-300 group flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{outcome.icon}</div>
                <p className="text-white font-semibold leading-snug">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-600 via-purple-700 to-primary-700">
        <div className="container-custom text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Ready to Build Your Freelance Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the Freelance Business Accelerator and develop the mindset, skillset, toolset and assets needed to succeed in the future of work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-accent-700 hover:bg-white/90 px-8 py-4 text-lg font-bold">
              Register Interest
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2">
              Contact Qraft Academy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
