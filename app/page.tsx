import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { DevelopmentTracks } from '@/components/sections/development-tracks'
import GetInvolved from '@/components/sections/get-involved'
import TechMastersSection from '@/components/sections/techmasters-section'
import WhyQraft from '@/components/sections/why-qraft'

export default function Home() {
  return (
    <main className="min-h-screen">
        <div className="relative w-full h-[100svh] min-h-[600px]">
          <Image
            alt="Qraft Academy Hero"
            className="object-cover"
            fill
            priority
            src="/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center">
            <div className="text-center text-white w-full max-w-6xl px-4 sm:px-6 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 md:mb-8 animate-slide-up leading-tight">
                Achieve Excellence in Work and Leadership through Continuous Learning, System Building, and Strategic Capital Management.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Learn. Work. Achieve
              </p>
              
              {/* Dual Path Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-8 sm:mb-10 max-w-2xl mx-auto">
                <a href="/contact" className="btn-primary w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold group flex items-center justify-center">
                  Work With Us
                  <svg className="inline-block w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#services" className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white text-neutral-900 text-base sm:text-lg font-bold rounded-xl hover:bg-white/90 transition-all duration-300 active:scale-95 sm:hover:scale-105 flex items-center justify-center">
                  Explore Our Services
                  <svg className="inline-block w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Trust Signal */}
              <p className="text-sm sm:text-base text-neutral-300 font-medium">
                Trusted by NGOs, governments, and institutions across 15+ countries
              </p>
            </div>
          </div>
          <div className="hidden sm:block absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-600 mb-3">
                  10,000+
                </div>
                <p className="text-base sm:text-lg font-semibold text-neutral-700">Learners Trained</p>
              </div>
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-accent-600 mb-3">
                  150+
                </div>
                <p className="text-base sm:text-lg font-semibold text-neutral-700">Courses Built</p>
              </div>
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-600 mb-3">
                  25+
                </div>
                <p className="text-base sm:text-lg font-semibold text-neutral-700">Partner Organizations</p>
              </div>
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-accent-600 mb-3">
                  15+
                </div>
                <p className="text-base sm:text-lg font-semibold text-neutral-700">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="section-padding bg-neutral-950">
          <div className="container-custom px-4">

            {/* Header */}
            <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-neutral-300 text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                Our Core Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                Building People, Systems, and Capital
              </h2>
              <p className="text-white/70 text-base sm:text-lg">
                Three flagship services. One integrated mission.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* CourseMasters */}
              <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 hover:border-accent-400/30 transition-all duration-300 flex flex-col">
                <div className="h-0.5 w-16 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mb-8 group-hover:w-full transition-all duration-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">01</p>
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">📚</div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">CourseMasters™</h3>
                <p className="text-accent-400 font-semibold text-sm mb-5">Course Development & Learning Design</p>
                <p className="text-neutral-300 text-sm leading-relaxed mb-7">
                  End-to-end course production, instructional design, and digital learning content for organizations building structured workforce programs.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Instructional design & curriculum architecture', 'Multimedia course production', 'SCORM / xAPI e-learning modules', 'LMS integration & deployment'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-neutral-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/coursemasters" className="mt-auto inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm group-hover:shadow-lg group-hover:shadow-accent-900/50">
                  Explore CourseMasters
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>

              {/* SystemMasters */}
              <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300 flex flex-col">
                <div className="h-0.5 w-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-8 group-hover:w-full transition-all duration-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">02</p>
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">SystemMasters™</h3>
                <p className="text-primary-400 font-semibold text-sm mb-5">Systems Design & Organisational Transformation</p>
                <p className="text-neutral-300 text-sm leading-relaxed mb-7">
                  We help organizations design, build, and embed the practical systems that drive productivity, governance, accountability, and long-term sustainability.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Leadership & governance systems', 'Workforce & productivity frameworks', 'Digital workflows & automation', 'SOPs, playbooks & operational manuals'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-neutral-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/SystemMasters" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm group-hover:shadow-lg group-hover:shadow-primary-900/50">
                  Explore SystemMasters
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>

              {/* CapitalMasters */}
              <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 hover:border-green-400/30 transition-all duration-300 flex flex-col">
                <div className="h-0.5 w-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-8 group-hover:w-full transition-all duration-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">03</p>
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">💰</div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">CapitalMasters™</h3>
                <p className="text-green-400 font-semibold text-sm mb-5">Financial Capability & Investment Readiness</p>
                <p className="text-neutral-300 text-sm leading-relaxed mb-7">
                  Helping individuals, entrepreneurs, and organizations build the financial knowledge, systems, and discipline required to create and grow sustainable capital.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Financial capability & planning', 'Investment readiness & pitch preparation', 'Capital management systems', 'Financial governance & stewardship'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-neutral-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/capitalmasters" className="mt-auto inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm group-hover:shadow-lg group-hover:shadow-green-900/50">
                  Explore CapitalMasters
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Featured CourseMasters Work */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs uppercase tracking-widest mb-5 border border-accent-200">
                📚 CourseMasters™ — Featured Work
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 leading-tight">
                E-Learning Programs We Have Built
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                A selection of digital learning programs designed, produced, and deployed for leading institutions, development agencies, and government partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'D4GW Understanding Digital Rights Course',
                  partner: 'Enabel — Belgian Development Agency',
                  tag: 'Digital Rights',
                  img: '/images/Understanding Digital Rights D4GW.png',
                },
                {
                  title: 'Business and Human Rights E-Learning Course',
                  partner: 'Enabel · EU · Ministry of Gender, Labour & Economic Development',
                  tag: 'Human Rights',
                  img: '/images/WhatsApp%20Image%202025-08-04%20at%2016.26.03_2aeab8e2.jpg',
                },
                {
                  title: 'Decent Work And Social Protection',
                  partner: 'Enabel — Belgian Development Agency',
                  tag: 'Decent Work',
                  img: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1782317227/DWSP_COVER_11zon_1_bg4v9r.png',
                },
              ].map((card) => (
                <div key={card.title} className="group bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="relative h-52 overflow-hidden bg-neutral-100">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-accent-700 text-xs font-bold rounded-full border border-accent-100">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-neutral-900 text-base sm:text-lg mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-5 leading-relaxed flex-1">{card.partner}</p>
                    <a
                      href="https://ulearn.enabel.be/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors group-hover:gap-3"
                    >
                      View Course
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/coursemasters" className="btn-primary px-8 py-4 text-base font-bold inline-flex items-center gap-2">
                Explore CourseMasters™
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* SystemMasters Section */}
        <section className="section-padding bg-neutral-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="container-custom px-4 relative">

            <div className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
                ⚙️ SystemMasters™ — Systems Transformation
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight">
                We Build the Systems<br className="hidden sm:block" /> Your Organization Runs On
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                From leadership and governance to digital workflows and financial controls — we design, build, and embed the practical operating systems that make organizations actually work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
              {[
                { icon: '👥', title: 'Leadership Systems', desc: 'Decision-making, delegation, accountability, and management routines.' },
                { icon: '🛡️', title: 'Governance Systems', desc: 'Frameworks, committee structures, policies, and risk management.' },
                { icon: '💼', title: 'Workforce Systems', desc: 'Competency frameworks, performance management, and career pathways.' },
                { icon: '📚', title: 'Learning Systems', desc: 'Learning academies, e-learning platforms, and knowledge management.' },
                { icon: '⚡', title: 'Productivity Systems', desc: 'Workflow design, SOPs, planning systems, and execution rhythms.' },
                { icon: '💰', title: 'Financial Systems', desc: 'Budgeting, cost recovery models, financial controls, and investment readiness.' },
              ].map((system) => (
                <div key={system.title} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-2xl mb-3">{system.icon}</div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2 group-hover:text-accent-300 transition-colors">{system.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{system.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 mb-10">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-white/50 mb-8">Our Systems Transformation Framework</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { step: '01', label: 'Assess', desc: 'Identify gaps, risks, and priorities' },
                  { step: '02', label: 'Design', desc: 'Co-create systems for your context' },
                  { step: '03', label: 'Build', desc: 'Develop SOPs, workflows & toolkits' },
                  { step: '04', label: 'Embed', desc: 'Train teams and support adoption' },
                  { step: '05', label: 'Sustain', desc: 'Measure, iterate, and improve' },
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center mb-3">
                      <span className="text-accent-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <p className="font-display font-bold text-white text-sm mb-1">{item.label}</p>
                    <p className="text-neutral-500 text-xs leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a href="/SystemMasters" className="inline-flex items-center gap-3 bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-accent-900/50">
                Explore SystemMasters™
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

          </div>
        </section>

        {/* Integrated Model - Simplified */}
        <section className="section-padding bg-gradient-to-b from-white to-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                An Integrated Workforce Model
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {/* Future of Work Forum */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-accent-50 to-accent-100/50 border-2 border-accent-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🌍
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-accent-700 transition-colors">
                  Future of Work Forum
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Ecosystem activation and workforce intelligence through institutional convening.
                </p>
                <a href="/future-of-work-forum" className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Institutional Systems */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏛️
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  Institutional Systems
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Course development and learning infrastructure for organizations.
                </p>
                <a href="/for-organizations" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Digital Skills Programs */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-purple-700 transition-colors">
                  Digital Skills Programs
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  AI and digital capabilities for professionals and entrepreneurs.
                </p>
                <a href="/courses/techmasters" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* CapitalMasters */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  💰
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-green-700 transition-colors">
                  CapitalMasters™
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Financial capability, investment readiness, and capital management for individuals and organizations.
                </p>
                <a href="/capitalmasters" className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Clients Logos */}
        <section className="py-12 sm:py-16 bg-white border-t border-neutral-100">
          <div className="container-custom px-4">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
              Trusted by our partners &amp; clients
            </p>
            {(() => {
              const row1 = [
                { src: "https://www.enabel.be/app/uploads/2023/04/Enabel_Logo_Color_RGB-1.jpg", alt: "Enabel", fill: true },
                { src: "https://innovationvillage.africa/wp-content/uploads/2024/05/Innovation-Village-New-Logo-2048x844-1.png", alt: "Innovation Village" },
                { src: "https://cdn.prod.website-files.com/62074f85df1c01befa19b0b6/6208fa86b3a3550aced179a4_Element%201logo-web-.png", alt: "Partner 3" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbPbci_KDAXm5-yrAq1yorcbhGlv6Lp8CQcYOwm8i6A&s=10", alt: "Partner 4", fill: true, zoom: true },
              ];
              const row2 = [
                { src: "https://mbale.ucu.ac.ug/wp-content/uploads/2026/05/logo-scaled.png", alt: "Uganda Christian University", fill: true },
                { src: "https://media.licdn.com/dms/image/v2/D4D0BAQG2FIk0qG6YBg/company-logo_200_200/company-logo_200_200/0/1737731218388?e=2147483647&v=beta&t=-f2cdT64fP4ODIU3aIs8li-qqwTe-FfrELOk_PODJx0", alt: "Partner 6", fill: true, zoom: true },
                { src: "https://res.cloudinary.com/dwa3soopc/image/upload/v1781785206/frankmar_vknyzg.jpg", alt: "Frankmar", fill: true },
                { src: "https://res.cloudinary.com/dwa3soopc/image/upload/v1781785938/chariot_leadership_hersrs.jpg", alt: "Chariot Leadership", fill: true, zoom: true },
              ];
              const LogoCard = ({ logo, i }: { logo: typeof row1[0], i: number }) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-28 h-14 sm:w-36 sm:h-16 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 hover:border-primary-200 transition-all duration-200 overflow-hidden"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-full h-full object-contain ${logo.fill ? "" : "p-2 sm:p-3"} ${logo.zoom ? "scale-150" : ""}`}
                  />
                </div>
              );
              return (
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex items-center gap-6 sm:gap-10 w-max" style={{ animation: "marquee 24s linear infinite" }}>
                      {[...row1, ...row1].map((logo, i) => <LogoCard key={i} logo={logo} i={i} />)}
                    </div>
                  </div>
                  <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex items-center gap-6 sm:gap-10 w-max" style={{ animation: "marquee 24s linear infinite reverse" }}>
                      {[...row2, ...row2].map((logo, i) => <LogoCard key={i} logo={logo} i={i} />)}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        <TechMastersSection />

        <WhyQraft />

        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative overflow-hidden group">
            <Image
              alt="Digital entrepreneurs learning"
              className="object-cover size-full group-hover:scale-110 transition-transform duration-700"
              height={600}
              priority
              src="/images/rect3.png"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="max-w-xl w-full">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                🎓 Start Learning Today
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                Master Your Craft
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                Your Skill Is Your Career. Whether you're an employee advancing your career, a freelancer expanding your services, an entrepreneur building your business, or a job seeker entering the workforce—transform your passion into expertise with our comprehensive learning programs.
              </p>
              <a href="https://lms.qraftacademy.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group inline-flex items-center justify-center">
                Join Qraft Academy
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 order-2 lg:order-1">
            <div className="max-w-xl w-full">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                🚀 TechMasters Apprenticeship — Success Stories
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-3 sm:mb-4 leading-tight">
                Hear From Our Graduates
              </h2>
              <p className="text-sm sm:text-base text-neutral-500 mb-6 sm:mb-8 leading-relaxed">
                Through our TechMasters Apprenticeship we build <span className="font-semibold text-neutral-700">Tech Skills</span>, <span className="font-semibold text-neutral-700">Tech Products</span>, and help graduates <span className="font-semibold text-neutral-700">Launch Tech Companies</span>.
              </p>
              <div className="card-glass p-6 sm:p-8 mb-6">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-neutral-700 mb-4 sm:mb-6 italic leading-relaxed">
                  &quot;The apprenticeship program gave me the hands-on skills I needed to get ahead in my career as an engineer&quot;
                </blockquote>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                    C
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg text-neutral-900">Collin</p>
                    <p className="text-xs sm:text-sm text-neutral-600">TechMasters Apprenticeship Graduate · Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative overflow-hidden group order-1 lg:order-2">
            <Image
              alt="Success Story"
              className="object-cover size-full group-hover:scale-110 transition-transform duration-700"
              height={600}
              priority
              src="/images/WhatsApp%20Image%202025-07-03%20at%2019.35.13_a0b68414.jpg"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-accent-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <GetInvolved />

        {/* Final Dual-Path CTA Section */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-neutral-900 via-primary-900 to-accent-900">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Build Workforce Strength. Unlock Digital Opportunity.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Whether you're strengthening an institution or advancing your career, Qraft Academy provides the systems and skills to thrive in the modern economy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {/* For Organizations Card */}
              <div className="card p-8 sm:p-10 bg-white/95 backdrop-blur-md hover:shadow-2xl transition-all duration-300 group">
                <div className="text-5xl mb-6">🏛️</div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">
                  For Organizations
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Design structured workforce capability systems that strengthen productivity, governance, and digital transformation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">Custom e-learning development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">Workforce transformation programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">Institutional learning systems</span>
                  </li>
                </ul>
                <Link href="/for-organizations" className="btn-primary w-full text-center py-4 group-hover:scale-105 transition-transform">
                  Partner With Us
                </Link>
              </div>

              {/* For Individuals Card */}
              <div className="card p-8 sm:p-10 bg-white/95 backdrop-blur-md hover:shadow-2xl transition-all duration-300 group">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">
                  For Individuals
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Future-proof your skills with digital, data, and AI capabilities that translate into income and opportunity.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">TechMasters digital skills programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">Future of Work Forum access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">Career & business mastery tracks</span>
                  </li>
                </ul>
                <Link href="/for-individuals" className="btn-primary w-full text-center py-4 bg-accent-600 hover:bg-accent-700 group-hover:scale-105 transition-transform">
                  Start Learning Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
