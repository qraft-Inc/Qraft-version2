"use client";
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
            ✨ Join Our Community
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-6 sm:mb-8 leading-tight">
            Ready to Get Involved?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Join our community of learners and innovators. Whether you're a student, mentor, or partner, there's a place for you at Qraft Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-14 md:mb-16">
            <Link href="/courses/coursemasters" className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary-600 font-bold rounded-xl active:bg-primary-50 sm:hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 sm:hover:scale-105 shadow-xl group touch-manipulation min-h-[48px]">
              Apply Now
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-active:translate-x-1 sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <button 
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white bg-white/10 backdrop-blur-sm rounded-xl active:bg-white active:text-primary-600 sm:hover:bg-white sm:hover:text-primary-600 transition-all duration-300 font-bold active:scale-95 sm:hover:scale-105 shadow-xl touch-manipulation min-h-[48px]"
              suppressHydrationWarning
            >
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-primary-100 font-medium text-xs sm:text-sm md:text-base">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100 font-medium text-xs sm:text-sm md:text-base">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100 font-medium text-xs sm:text-sm md:text-base">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-primary-100 font-medium text-xs sm:text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
