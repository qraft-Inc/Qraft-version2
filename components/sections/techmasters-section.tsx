import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const techSkills = [
  {
    title: 'Digital Fluency & Workflow Systems',
    description: 'Master modern digital tools and systems for productive, connected work',
    icon: '💻'
  },
  {
    title: 'Data Literacy & Applied Analytics',
    description: 'Understand data-driven decision making and practical analytics',
    icon: '📊'
  },
  {
    title: 'Design Thinking & Creative Problem-Solving',
    description: 'Develop innovative solutions through structured creative processes',
    icon: '🎨'
  },
  {
    title: 'AI Literacy & Practical Application',
    description: 'Learn AI fundamentals and how to leverage AI in your work',
    icon: '🤖'
  },
  {
    title: 'Remote Work Infrastructure',
    description: 'Build skills for effective remote and distributed collaboration',
    icon: '🌐'
  },
  {
    title: 'Global Freelancing Readiness',
    description: 'Prepare for success in the global freelance economy',
    icon: '✈️'
  }
];

export default function TechMastersSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
            🚀 Technical Skills
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-3 sm:mb-4 leading-tight">
            TechMasters - Modern Technology Skilling
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600">
            Essential technical competencies for thriving in today's digital economy. Bridge the gap between technical capability and real-world economic opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 group-hover:text-accent-600 transition-colors">
                {skill.title}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-accent-100">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 sm:mb-6">
                Ready to Future-Proof Your Skills?
              </h3>
              <p className="text-base sm:text-lg text-neutral-700 mb-6 leading-relaxed">
                Don't let technology gaps hold you back. Our TechMasters programs are designed to equip you with the digital and technical skills needed to succeed in tomorrow's workplace.
              </p>
              <Link href="/courses/techmasters" className="inline-flex items-center gap-2 btn-primary px-6 sm:px-8 py-3 sm:py-4">
                Explore Tech Skills
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
