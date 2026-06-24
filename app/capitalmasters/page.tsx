import Link from "next/link";
import { type Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  BarChart3,
  Shield,
  BookOpen,
  Target,
  Lightbulb,
  Globe,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CapitalMasters™ | Financial Capability, Investment Readiness & Capital Development | Qraft Academy",
  description:
    "CapitalMasters helps professionals, entrepreneurs, investors, and organizations build financial capability, investment readiness, and capital management systems for sustainable growth.",
  openGraph: {
    title: "CapitalMasters™ | Financial Capability & Investment Readiness | Qraft Academy",
    description:
      "Build financial capability, investment readiness, and capital management systems through structured learning, mentorship, and practical implementation.",
  },
};

interface WhoWeServeCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  iconColor: string;
}

interface FocusArea {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  iconColor: string;
}

interface Service {
  title: string;
  icon: string;
  description: string;
  includes: string[];
  color: string;
}

interface Metric {
  value: string;
  label: string;
  color: string;
}

const whoWeServe: WhoWeServeCard[] = [
  {
    title: "Professionals",
    icon: <Users className="w-8 h-8" />,
    description: "Individuals seeking to improve financial decision-making, build wealth, and strengthen financial discipline.",
    color: "from-green-50 to-green-100/50 border-green-200",
    iconColor: "text-green-700 bg-green-100",
  },
  {
    title: "Entrepreneurs & Founders",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Business owners preparing for growth, fundraising, investment opportunities, and stronger financial management.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
  {
    title: "Investors",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Individuals looking to build investment knowledge, portfolio management skills, and long-term wealth strategies.",
    color: "from-green-50 to-green-100/50 border-green-200",
    iconColor: "text-green-700 bg-green-100",
  },
  {
    title: "Organizations",
    icon: <Building2 className="w-8 h-8" />,
    description: "Companies, NGOs, cooperatives, SACCOs, and institutions seeking stronger financial capability, governance, and capital stewardship systems.",
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
];

const focusAreas: FocusArea[] = [
  {
    title: "Financial Capability",
    subtitle: "Build the knowledge and habits required to make informed financial decisions.",
    icon: <BookOpen className="w-7 h-7" />,
    items: ["Personal finance", "Financial planning", "Budgeting", "Cash flow management", "Financial discipline", "Wealth creation"],
    color: "from-green-50 to-green-100/50 border-green-200",
    iconColor: "text-green-700 bg-green-100",
  },
  {
    title: "Investment Readiness",
    subtitle: "Prepare individuals and businesses to attract and manage investment effectively.",
    icon: <Target className="w-7 h-7" />,
    items: ["Investment fundamentals", "Business valuation", "Investor expectations", "Pitch readiness", "Fundraising preparation", "Growth planning"],
    color: "from-primary-50 to-primary-100/50 border-primary-200",
    iconColor: "text-primary-600 bg-primary-100",
  },
  {
    title: "Capital Management Systems",
    subtitle: "Develop systems that protect, govern, and grow capital.",
    icon: <Shield className="w-7 h-7" />,
    items: ["Financial governance", "Capital allocation", "Risk management", "Performance monitoring", "Stewardship frameworks", "Investment oversight"],
    color: "from-green-50 to-green-100/50 border-green-200",
    iconColor: "text-green-700 bg-green-100",
  },
];

const services: Service[] = [
  {
    title: "CapitalMasters Academy",
    icon: "🎓",
    description: "Learning programs designed to build financial capability and investment literacy.",
    includes: ["Workshops", "Masterclasses", "Cohort programs", "Online learning"],
    color: "border-t-4 border-t-green-400",
  },
  {
    title: "CapitalMasters Advisory",
    icon: "🧭",
    description: "Practical support for organizations and entrepreneurs navigating capital and investment decisions.",
    includes: ["Investment readiness assessments", "Financial systems reviews", "Governance support", "Growth strategy"],
    color: "border-t-4 border-t-primary-400",
  },
  {
    title: "CapitalMasters Community",
    icon: "🤝",
    description: "A network of professionals, entrepreneurs, and investors committed to continuous learning and responsible capital growth.",
    includes: ["Monthly meetups", "Expert sessions", "Investment discussions", "Peer learning"],
    color: "border-t-4 border-t-green-600",
  },
];

const outcomes: string[] = [
  "Improved financial decision-making",
  "Stronger financial governance",
  "Greater investment readiness",
  "Better capital allocation",
  "Sustainable wealth-building strategies",
  "Stronger financial systems",
  "Increased organizational resilience",
  "Long-term value creation",
];

const metrics: Metric[] = [
  { value: "500+", label: "Professionals Reached", color: "text-green-700" },
  { value: "50+", label: "Organizations Supported", color: "text-primary-600" },
  { value: "25+", label: "Investment Readiness Engagements", color: "text-green-700" },
  { value: "100+", label: "Financial Capability Sessions Delivered", color: "text-primary-600" },
];

export default function CapitalMastersPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-green-800 via-green-700 to-primary-700">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30 tracking-widest uppercase">
              CapitalMasters™
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Master Capital. Build Wealth. Create Long-Term Value.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-white/90 max-w-3xl mx-auto">
              CapitalMasters helps individuals and organizations build financial capability, investment readiness, and capital management systems through structured learning, mentorship, advisory support, and practical implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-green-800 hover:bg-white/90 px-8 py-4 text-lg font-bold">
                Apply to CapitalMasters
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CapitalMasters */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Building Financial Capability, Investment Readiness & Capital Stewardship
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                CapitalMasters exists to help professionals, entrepreneurs, investors, and organizations develop the financial knowledge, systems, and discipline needed to create sustainable growth and long-term value.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                Whether you are building personal wealth, preparing a business for investment, strengthening organizational financial systems, or developing investment skills — CapitalMasters provides practical frameworks and expert guidance to support your journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-3xl p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4">Our Approach</p>
              <ul className="space-y-4">
                {[
                  { label: "Structured Learning", desc: "Knowledge frameworks that build real financial capability" },
                  { label: "Mentorship", desc: "Guidance from practitioners with real-world experience" },
                  { label: "Advisory Support", desc: "Practical help with investment readiness and capital systems" },
                  { label: "Implementation", desc: "Tools and frameworks you can apply immediately" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      <span className="font-semibold text-neutral-900">{item.label}:</span> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-neutral-600">
              CapitalMasters is built for anyone serious about creating and stewarding capital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whoWeServe.map((group) => (
              <div key={group.title} className={`card p-8 bg-gradient-to-br ${group.color} border-2 hover:shadow-xl transition-all duration-300 group text-center`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${group.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">{group.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-neutral-600">
              Three interconnected domains that together build complete capital mastery.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {focusAreas.map((area) => (
              <div key={area.title} className={`card p-8 sm:p-10 bg-gradient-to-br ${area.color} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${area.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">{area.title}</h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{area.subtitle}</p>
                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600">
              Three pillars of support — learning, advisory, and community.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className={`card p-8 hover:shadow-xl transition-all duration-300 group ${service.color}`}>
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Includes</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:text-green-800 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                What Success Looks Like
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                CapitalMasters is built for outcomes, not attendance. Every programme, engagement, and advisory session is designed to produce measurable change.
              </p>
              <Link href="/contact" className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center gap-2">
                Apply to CapitalMasters <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outcomes.map((outcome) => (
                <div key={outcome} className="card p-4 flex items-start gap-3 hover:shadow-md transition-all duration-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why CapitalMasters */}
      <section className="section-padding bg-gradient-to-br from-green-800 via-green-700 to-primary-700 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Capital Is More Than Money
            </h2>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-6 max-w-3xl mx-auto">
              Capital is the ability to create opportunities, fund growth, manage risk, and generate long-term value.
            </p>
            <p className="text-lg text-white/75 leading-relaxed max-w-3xl mx-auto">
              CapitalMasters exists to help individuals and organizations move beyond financial survival toward intentional wealth creation, disciplined investing, and responsible stewardship of resources.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-100">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className={`text-4xl sm:text-5xl font-display font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-neutral-600 text-sm sm:text-base">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-green-800 via-green-700 to-primary-700">
        <div className="container-custom text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Ready to Strengthen Your Financial Capability and Investment Readiness?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are building personal wealth, preparing a business for investment, or strengthening organizational financial systems, CapitalMasters can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-green-800 hover:bg-white/90 px-8 py-4 text-lg font-bold">
              Apply to CapitalMasters
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2">
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
