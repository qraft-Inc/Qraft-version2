import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const tracks = [
  {
    title: 'Personal Development, Quality Of Life And Wellbeing',
    description: 'Quality of life, wellbeing, resilience, and purposeful growth. Foundational financial literacy and personal systems for long-term success.',
    href: '/courses/personal-development',
  },
  {
    title: 'Productivity And Professional Development',
    description: 'Performance optimization, digital productivity, communication, and continuous career advancement for professional excellence.',
    href: '/courses/professional-development',
  },
  {
    title: 'Leadership Development, Governance, Policies And Advocacy',
    description: 'Strategic leadership, policy fluency, ethical governance, and the ability to influence systems and drive meaningful change.',
    href: '/courses/leadership-development',
  },
  {
    title: 'Strategic Organizational And Business Expansion',
    description: 'Business development, sustainable scaling, partnerships, revenue growth, and institutional strengthening for scalable impact.',
    href: '/courses/strategic-organizational-expansion',
  }
];

export function DevelopmentTracks() {
  return (
    <section className="container-custom">
      <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-6 leading-tight">
          Four Integrated Learning Tracks
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-2">
          Master the comprehensive skills framework that drives impact and influence:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {tracks.map((track, index) => (
          <div
            className="group card p-6 sm:p-8 active:scale-95 sm:hover:scale-105 sm:hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent active:border-primary-200 sm:hover:border-primary-200 touch-manipulation"
            key={track.title}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 group-active:scale-110 sm:group-hover:scale-110 transition-transform duration-300">
              {index + 1}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4 group-active:text-primary-600 sm:group-hover:text-primary-600 transition-colors leading-snug">{track.title}</h3>
            <p className="text-neutral-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{track.description}</p>
            <a 
              className="inline-flex items-center gap-2 text-primary-600 active:text-primary-700 sm:hover:text-primary-700 font-semibold text-sm sm:text-base transition-all group-active:gap-3 sm:group-hover:gap-3" 
              href={track.href}
            >
              Explore This Theme
              <ArrowUpRight className="size-4 sm:size-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
