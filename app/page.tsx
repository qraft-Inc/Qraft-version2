import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import CourseMastersSummary from '@/components/sections/coursemasters-summary'
import { DevelopmentTracks } from '@/components/sections/development-tracks'
import GetInvolved from '@/components/sections/get-involved'
import TechMastersSection from '@/components/sections/techmasters-section'
import WhyQraft from '@/components/sections/why-qraft'
import RevenueModel from '@/components/sections/revenue-model'

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 md:mb-8 animate-slide-up leading-tight">
                We Design Workforce Infrastructure for the Modern Economy
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                We partner with institutions to build structured learning systems, activate talent ecosystems, and strengthen organizational capability at scale.
              </p>
              
              {/* Dual Path Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-8 sm:mb-10 max-w-2xl mx-auto">
                <a href="/for-organizations" className="btn-primary w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold group flex items-center justify-center">
                  For Organizations
                  <svg className="inline-block w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="/for-individuals" className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white text-neutral-900 text-base sm:text-lg font-bold rounded-xl hover:bg-white/90 transition-all duration-300 active:scale-95 sm:hover:scale-105 flex items-center justify-center">
                  For Individuals
                  <svg className="inline-block w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Trust Signal */}
              <p className="text-sm sm:text-base text-white/80 font-medium">
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

        {/* Three Pillar Framework Section */}
        <section className="section-padding bg-gradient-to-b from-white to-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                An Integrated Workforce Model
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600">
                We operate an integrated system that connects ecosystem activation, institutional transformation, and scalable digital skilling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Pillar 1: Future of Work Forum */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-accent-50 to-accent-100/50 border-2 border-accent-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🌍
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-accent-700 transition-colors">
                  Future of Work Forum
                </h3>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
                  <span className="font-semibold">Ecosystem Activation & Workforce Intelligence</span>
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  We convene institutions, employers, and professionals to identify workforce gaps, activate partnerships, and drive strategic workforce transformation.
                </p>
                <a href="/future-of-work-forum" className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Pillar 2: CourseMasters */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏛️
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  Institutional Course Creation
                </h3>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
                  <span className="font-semibold">Custom Learning Systems for Organizations</span>
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  We design and deploy high-impact digital workforce programs for NGOs, government institutions, enterprises, and development partners.
                </p>
                <a href="/coursemasters" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Pillar 3: TechMasters */}
              <div className="card p-8 sm:p-10 bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 group-hover:text-purple-700 transition-colors">
                  TechMasters Online
                </h3>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
                  <span className="font-semibold">Scalable Digital & AI Skills for Individuals</span>
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  We equip professionals and entrepreneurs with digital fluency, data literacy, AI capability, and global freelancing readiness.
                </p>
                <a href="/courses/techmasters" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CourseMastersSummary />

        <div className="relative w-full section-padding bg-gradient-to-b from-neutral-50 to-white">
          <div id="future-of-work" className="container-custom">
            <div className="mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                🎯 Future of Work Skills Agenda
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                The Future of Work Forum Spreads the Future of Work Skills Agenda
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-6">
                Through our four integrated learning tracks, we equip professionals and entrepreneurs with holistic, future-ready competencies that drive impact, influence, and long-term sustainability.
              </p>
            </div>
          </div>
          <DevelopmentTracks />
        </div>

        <TechMastersSection />

        <WhyQraft />

        <RevenueModel />

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
              <a href="https://classroom.qraftacademy.com/" className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group inline-flex items-center justify-center">
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
                💬 Success Stories
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight">
                Hear From Our Graduates
              </h2>
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
                    <p className="text-xs sm:text-sm text-neutral-600">Software Engineer Graduate</p>
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
              src="/images/WhatsApp Image 2025-07-03 at 19.35.13_a0b68414.jpg"
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
