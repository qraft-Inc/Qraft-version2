import React from 'react';

export default function WorkMastersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100/40 text-slate-900 pt-32 pb-20 md:pt-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-5 sm:space-y-7">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/50 text-blue-700 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Empowering Uganda's Digital Future
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-[1.1]">
                <span className="block">Your Partner in <span className="inline lg:block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Lifelong</span></span>
                <span className="block"><span className="inline lg:block bg-gradient-to-r from-blue-700 via-blue-800 to-slate-800 bg-clip-text text-transparent">Professional</span> <span className="inline lg:block text-slate-900">Growth</span></span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Empowering youth with cutting-edge tools and opportunities for meaningful employment and entrepreneurship across Uganda's digital economy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95" href="/apply">
                  <span>Join the Program</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
                <a className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/90 backdrop-blur-sm border-2 border-blue-200/60 rounded-2xl text-slate-700 font-semibold text-sm sm:text-base hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md" href="#programs">
                  <span>Explore Programs</span>
                  <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-blue-500/25 bg-gradient-to-br from-white/70 to-blue-50/60 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition-all duration-700 group">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Work Masters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-3xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3,000+</div>
              <div className="text-slate-600 text-sm">Youth Trained Annually</div>
            </div>
            <div className="text-center p-6 bg-white rounded-3xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100</div>
              <div className="text-slate-600 text-sm">Participants with Disabilities</div>
            </div>
            <div className="text-center p-6 bg-white rounded-3xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,000</div>
              <div className="text-slate-600 text-sm">Women Participants</div>
            </div>
            <div className="text-center p-6 bg-white rounded-3xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-slate-600 text-sm">Coaches & Talent Managers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-snug">
              Empowering Uganda's Digital Future
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Transforming youth through innovative work readiness and deployment opportunities across Uganda's growing digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-6">We bridge the gap between education and employment by providing practical skills, real-world experience, and comprehensive support to Uganda's youth.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Program Overview</h3>
              <p className="text-slate-700 mb-6">Work Masters is an innovative program designed to enhance work readiness, employability, and deployment opportunities for unemployed or underemployed youth in Uganda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transformative Learning
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Practical, hands-on programs designed to build essential skills and connect talent to meaningful opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Internship Program */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">WorkMasters Internship</h3>
              <p className="text-sm text-slate-600 mb-4">Hybrid Short-Term Training & Internship</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>

            {/* Apprenticeship Program */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Apprenticeship Program</h3>
              <p className="text-sm text-slate-600 mb-4">Long-term skills development</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>

            {/* Readiness Bootcamp */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Readiness Bootcamp</h3>
              <p className="text-sm text-slate-600 mb-4">Intensive preparation program</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>

            {/* Talent Platform */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Talent Platform</h3>
              <p className="text-sm text-slate-600 mb-4">Connect with opportunities</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
