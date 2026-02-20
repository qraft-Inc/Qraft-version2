import Image from 'next/image'
import React from 'react'
import CourseMastersSummary from '@/components/sections/coursemasters-summary'
import { DevelopmentTracks } from '@/components/sections/development-tracks'
import GetInvolved from '@/components/sections/get-involved'

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
            <div className="text-center text-white w-full max-w-5xl px-4 sm:px-6 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 md:mb-8 animate-slide-up leading-tight">
                Welcome to <span className="block sm:inline text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">Qraft Academy</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 font-light tracking-wide text-primary-100">
                Learn. Work. Achieve.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 font-normal text-white/90">
                For Employees • Freelancers • Entrepreneurs • Job Seekers
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto px-4 sm:px-0">
                <button className="btn-primary w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg group">
                  Start Your Journey
                  <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 active:scale-95 sm:hover:scale-105">
                  Explore Courses
                </button>
              </div>
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

        <CourseMastersSummary />

        <div className="relative w-full section-padding bg-gradient-to-b from-neutral-50 to-white">
          <DevelopmentTracks />
        </div>

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

        <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="container-custom flex flex-col items-center">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                The Future of <span className="text-gradient">Education</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600">
                Join thousands of learners transforming their careers through innovative education
              </p>
            </div>
            <div className="w-full max-w-5xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-glow-lg transition-all duration-500 group mb-8 sm:mb-10 md:mb-12">
              <Image
                alt="Future of Education"
                className="object-cover size-full group-hover:scale-105 transition-transform duration-700"
                height={600}
                priority
                quality={100}
                src="/images/image.webp"
                width={1200}
              />
            </div>
            <div className="text-center max-w-3xl px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                Join the Future of Work Forum
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 mb-6 sm:mb-8">
                Liberate your potential through innovative learning experiences
              </p>
              <button className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </main>
  )
}
