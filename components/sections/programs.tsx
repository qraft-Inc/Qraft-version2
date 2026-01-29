"use client";

import Link from "next/link";

export default function Programs() {
  const programs = [
    {
      name: "CourseMasters",
      description: "Master essential skills and knowledge through expertly designed courses tailored to your personal and professional growth.",
      href: "/courses/coursemasters",
      gradient: "from-blue-500 to-cyan-500",
      icon: "📚"
    },
    {
      name: "TechMasters",
      description: "Dive into cutting-edge technology with immersive, hands-on training programs that prepare you for the future of work.",
      href: "/courses/techmasters",
      gradient: "from-green-500 to-emerald-500",
      icon: "💻"
    },
    {
      name: "WorkMasters",
      description: "Enhance your career with flexible, industry-relevant programs designed to fit your busy schedule and learning preferences.",
      href: "/courses/workmasters",
      gradient: "from-yellow-500 to-orange-500",
      icon: "💼"
    },
    {
      name: "CapitalMasters",
      description: "Build financial acumen and strategic insights with comprehensive training programs focused on capital growth and management.",
      href: "/courses/capitalmasters",
      gradient: "from-purple-500 to-pink-500",
      icon: "💰"
    }
  ];

  return (
    <div className="w-full">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
            🎯 Our Products
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Master Your Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600">
            Choose from our specialized programs designed to elevate your skills
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program) => (
            <Link href={program.href} key={program.name}>
              <div className="group card p-8 sm:p-10 cursor-pointer active:scale-95 sm:hover:scale-105 transition-all duration-300 relative overflow-hidden touch-manipulation">
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${program.gradient} opacity-10 rounded-bl-full group-active:scale-150 sm:group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{program.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3 sm:mb-4 group-active:text-primary-600 sm:group-hover:text-primary-600 transition-colors leading-tight">{program.name}</h3>
                  <p className="text-base sm:text-lg text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold text-primary-600 group-active:text-primary-700 sm:group-hover:text-primary-700 group-active:gap-3 sm:group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}