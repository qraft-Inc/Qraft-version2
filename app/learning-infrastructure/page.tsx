import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle, 
  Server, 
  Shield, 
  Users, 
  BarChart3, 
  Zap,
  Building2,
  GraduationCap,
  Globe,
  Award,
  Settings,
  Lock,
  Database,
  TrendingUp,
  MessageCircle,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learning Infrastructure | Qraft Academy',
  description: 'Secure, scalable Moodle-powered learning systems for NGOs, government and institutions — deployment, customization, analytics, training, and managed support.',
  openGraph: {
    title: 'Learning Infrastructure | Qraft Academy',
    description: 'Secure, scalable Moodle-powered learning systems for NGOs, government and institutions — deployment, customization, analytics, training, and managed support.',
  },
};

export default function LearningInfrastructurePage() {
  // TODO: Confirm WhatsApp number with client
  const whatsappNumber = '256755017384';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I\'m interested in Learning Infrastructure services.')}`;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
              <Server className="w-4 h-4 inline-block mr-2" />
              Enterprise Learning Systems
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Qraft Learning Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
              Secure, Scalable Digital Learning Systems Powered by Moodle
            </p>
            <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-95">
              We design, deploy, secure, and manage your learning platform — so your team can focus on delivering impact, not managing servers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#get-started" 
                className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg"
              >
                Start Your Learning Infrastructure Blueprint
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-6">
              Qraft Learning Infrastructure is our enterprise-grade Moodle development and managed hosting service designed for institutions delivering education and workforce programs at scale.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-6">
              We design, deploy, secure, and manage your learning platform — so your team can focus on delivering impact, not managing servers.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
              Whether you are running a donor-funded initiative, a national workforce program, or a university training platform, we provide the full digital learning infrastructure required to scale sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left: Use Cases */}
            <div className="card p-8 sm:p-10">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Ideal If You:
              </h3>
              <ul className="space-y-4">
                {[
                  'Deliver structured training programs to 500+ learners',
                  'Require completion tracking and certification',
                  'Report to donors, ministries, or management boards',
                  'Need secure, audit-ready reporting systems',
                  'Lack an internal LMS technical team',
                  'Want a long-term infrastructure partner'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Client Types */}
            <div className="card p-8 sm:p-10 bg-gradient-to-br from-primary-50 to-accent-50">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Ideal Clients:
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Globe, text: 'NGOs & Development Agencies' },
                  { icon: Building2, text: 'Government & Public Sector Programs' },
                  { icon: GraduationCap, text: 'Universities & Training Institutions' },
                  { icon: Award, text: 'Workforce & Skills Development Initiatives' },
                  { icon: Users, text: 'Corporate Learning & Development Teams' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              What We Build
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4">
              Enterprise Moodle Deployments (Self-Hosted)
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Server, text: 'Secure cloud-based Moodle installation' },
                { icon: Settings, text: 'Custom branding & theme configuration' },
                { icon: Users, text: 'Role-based access control' },
                { icon: Zap, text: 'Cohort and enrollment automation' },
                { icon: GraduationCap, text: 'Learning pathways & structured programs' },
                { icon: Award, text: 'Automated certificates & completion tracking' },
                { icon: Database, text: 'SCORM integration for interactive modules' },
                { icon: Globe, text: 'Zoom & BigBlueButton integration' },
                { icon: BarChart3, text: 'Custom dashboards & analytics reporting' },
                { icon: Shield, text: 'Backup & disaster recovery systems' },
                { icon: TrendingUp, text: 'Performance monitoring & optimization' },
                { icon: CheckCircle, text: 'Ongoing upgrades following Moodle best practices' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="card p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
              <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-600" />
                Moodle Documentation & Best Practices
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://docs.moodle.org/en/Installing_Moodle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Moodle Installation Guide →
                </a>
                <a 
                  href="https://docs.moodle.org/en/Upgrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Moodle Upgrading Guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Approach
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Discovery & LMS Blueprint',
                  description: 'We map your program structure, learner journey, reporting needs, and technical requirements.'
                },
                {
                  step: '2',
                  title: 'Infrastructure Deployment',
                  description: 'We configure secure hosting, install Moodle, and apply your branding and theme.'
                },
                {
                  step: '3',
                  title: 'Customization & Integration',
                  description: 'We build custom dashboards, integrate third-party tools, and configure automation.'
                },
                {
                  step: '4',
                  title: 'Training & Go-Live',
                  description: 'We train your team on administration, content creation, and reporting workflows.'
                },
                {
                  step: '5',
                  title: 'Managed Support & Optimization',
                  description: 'We monitor, maintain, upgrade, and optimize your system for long-term success.'
                }
              ].map((item, idx) => (
                <div key={idx} className="card p-6 sm:p-8 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Qraft Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Why Qraft Learning Infrastructure
            </h2>
            <p className="text-2xl sm:text-3xl font-semibold mb-8">
              Pedagogy + Technology + Infrastructure
            </p>
            <div className="space-y-6 text-lg sm:text-xl leading-relaxed">
              <p>
                Unlike generic IT agencies, we understand instructional design, workforce learning systems, donor and government reporting requirements, low-bandwidth deployment environments, and course production and multimedia integration.
              </p>
              <p>
                Through CourseMasters, we already build world-class learning content. Through Learning Infrastructure, we power that content at scale.
              </p>
              <p className="font-semibold text-xl sm:text-2xl">
                You get one partner for both content and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Our Service Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Foundation LMS */}
            <div className="card p-8 border-2 border-neutral-200 hover:border-primary-300 transition-all">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                Foundation LMS
              </h3>
              <p className="text-neutral-600 mb-6">
                Complete setup for launching your learning platform
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Moodle setup & branding',
                  'Roles & course structure',
                  'Completion & certificates',
                  'Admin training',
                  'Managed hosting & updates'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Learning Ecosystem */}
            <div className="card p-8 border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-accent-50 hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-4">
                MOST POPULAR
              </div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                Professional Learning Ecosystem
              </h3>
              <p className="text-neutral-600 mb-6">
                Everything in Foundation plus advanced capabilities
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'All Foundation features',
                  'Custom dashboards',
                  'SCORM & multimedia integration',
                  'Zoom & BigBlueButton',
                  'Advanced reporting',
                  'Performance optimization',
                  'Priority support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Learning Infrastructure */}
            <div className="card p-8 border-2 border-neutral-200 hover:border-accent-300 transition-all">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                Enterprise Learning Infrastructure
              </h3>
              <p className="text-neutral-600 mb-6">
                Everything in Professional plus enterprise features
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'All Professional features',
                  'Dedicated architecture',
                  'Separate DB layer',
                  'SSO & API integrations',
                  'High availability config',
                  'Security documentation',
                  'SLA & monitoring',
                  'Dedicated account manager'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-neutral-600 italic mt-4">
                Custom enterprise proposals available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
                Security & Reliability
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Lock, text: 'HTTPS encryption' },
                { icon: Shield, text: 'Firewall & server hardening' },
                { icon: Database, text: 'Automated daily backups' },
                { icon: CheckCircle, text: 'Restore testing protocols' },
                { icon: Users, text: 'Role-based access controls' },
                { icon: TrendingUp, text: 'Structured upgrade cycles' },
                { icon: BarChart3, text: 'Monitoring & uptime alerts' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white card">
                  <item.icon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-xl text-center font-semibold text-neutral-900">
              We treat your learning infrastructure as mission-critical.
            </p>
          </div>
        </div>
      </section>

      {/* Already Working With CourseMasters Section */}
      <section className="section-padding bg-gradient-to-br from-accent-50 via-purple-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Already Working With CourseMasters?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
              <p>
                If we are producing your courses, we can deploy them directly into your Moodle ecosystem — fully optimized, SCORM-compliant, and analytics-ready.
              </p>
              <p className="font-semibold text-neutral-900 text-xl">
                Seamless content-to-platform integration ensures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Faster launch timelines',
                  'Cleaner reporting',
                  'Higher learner engagement',
                  'Scalable program growth'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 justify-center sm:justify-start">
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="font-medium text-neutral-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Design Your Learning Infrastructure
            </h2>
            <p className="text-xl sm:text-2xl mb-10 leading-relaxed">
              Book a discovery call and receive a <span className="font-bold underline">Free LMS Readiness Assessment</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#get-started" 
                className="px-8 py-4 bg-white text-primary-700 text-lg font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Start Your Learning Infrastructure Blueprint
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a 
                href="mailto:drew@qraftacademy.com?subject=Enterprise%20Learning%20Infrastructure%20Proposal%20Request"
                className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border-2 border-white flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request an Enterprise Proposal
              </a>
            </div>
            <p className="text-sm mt-8 opacity-90">
              Qraft Academy — Shaping the Future of Work Through Education, Technology & Finance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
