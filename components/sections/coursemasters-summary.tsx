import Image from 'next/image';
import Link from 'next/link';

const portfolio = [
  {
    title: 'D4GW Understanding Digital Rights Course',
    partner: 'Enabel, Belgian Development Agency',
    img: '/images/Understanding Digital Rights D4GW.png'
  },
  {
    title: 'Business and Human Rights E-Learning Course',
    partner: 'Enabel, EU, Ministry Of Gender, Labour And Economic Devt',
    img: '/images/WhatsApp Image 2025-08-04 at 16.26.03_2aeab8e2.jpg'
  },
  {
    title: 'French - D4GW Understanding Digital Rights Course',
    partner: 'Enabel, Belgian Development Agency',
    img: '/images/Understanding Digital Rights D4GW_11zon.png'
  }
];

export default function CourseMastersSummary() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
            📚 CourseMasters Program
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Let Us Create Your Online Course
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600">
            We build impactful online courses for NGOs, EdTechs, schools, and government organizations. From design to launch, we help you turn expertise into learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch mb-12 sm:mb-16">
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]">
            <Image
              src="/images/WhatsApp Image 2025-07-30 at 13.39.02_75522a4a.jpg"
              alt="CourseMasters program"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 sm:p-8 text-white max-w-lg">
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Create, Package, and Sell Courses</h3>
                <p className="text-sm sm:text-base text-white/90 mb-5 sm:mb-6">
                  Join our CourseMasters Program to learn how to design and launch your own course. Perfect for teams and individuals looking to share their expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/coursemasters" className="btn-primary px-6 py-3 text-sm sm:text-base text-center">
                    Explore CourseMasters
                  </Link>
                  <Link href="/coursemasters/build-your-course" className="px-6 py-3 text-sm sm:text-base text-center bg-white/10 border border-white/30 rounded-xl text-white hover:bg-white/20 transition">
                    Let Us Build Your Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glass p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">Next Cohort</h3>
              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div className="bg-white/80 rounded-lg p-4 border border-neutral-100">
                  <p className="text-xs sm:text-sm text-neutral-500">Starts</p>
                  <p className="text-base sm:text-lg font-bold text-neutral-900">2nd March 2026</p>
                </div>
                <div className="bg-white/80 rounded-lg p-4 border border-neutral-100">
                  <p className="text-xs sm:text-sm text-neutral-500">Ends</p>
                  <p className="text-base sm:text-lg font-bold text-neutral-900">5th June 2026</p>
                </div>
                <div className="col-span-2 bg-white/80 rounded-lg p-4 border border-neutral-100">
                  <p className="text-xs sm:text-sm text-neutral-500">Duration</p>
                  <p className="text-base sm:text-lg font-bold text-neutral-900">90 Days</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 mb-6">
                Prefer a custom course for your organization? We also offer end-to-end course production, including curriculum design, content creation, and platform setup.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/courses/coursemasters/become-creator" className="btn-primary px-6 py-3 text-sm sm:text-base text-center">
                Become a Creator
              </Link>
              <Link href="/courses/coursemasters/browse-courses" className="px-6 py-3 text-sm sm:text-base text-center bg-primary-50 text-primary-700 rounded-xl font-semibold hover:bg-primary-100 transition">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-3">Client Courses Portfolio</h3>
          <p className="text-sm sm:text-base text-neutral-600">A snapshot of courses built for partners and institutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {portfolio.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={240}
                className="w-full h-auto"
                unoptimized={true}
              />
              <div className="p-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-neutral-900">{card.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4">{card.partner}</p>
                <a
                  href="https://ulearn.enabel.be/"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  View course
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
