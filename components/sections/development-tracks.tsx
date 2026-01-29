import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const tracks = [
  {
    title: 'Personal Development, Quality Of Life And Wellbeing',
    description: 'Cultivating Skills for an Integrated and Purposeful Life',
    href: '/courses/personal-development',
  },
  {
    title: 'Productivity And Professional Development',
    description: 'Unlocking Potential for Skills, Performance, and Career Excellence Through Continuous Learning.',
    href: '/courses/professional-development',
  },
  {
    title: 'Leadership Development, Governance, Policies And Advocacy',
    description: 'Empowering Executives Through Strategic Leadership, Governance Excellence, and Advocacy for Impactful Change',
    href: '/courses/leadership-development',
  },
  {
    title: 'Strategic Organizational And Business Expansion',
    description: 'Driving Sustainable Development and Scalable Growth Through Strategic Organizational Expansion..',
    href: '/courses/strategic-organizational-expansion',
  }
];

export function DevelopmentTracks() {
  return (
    <section className="container-custom">
      <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4">
        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
          📚 Learning Paths
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-3 sm:mb-4 leading-tight">
          Modern Work Development Tracks
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-700 mb-4 sm:mb-6">
          Future Of Work Pillars
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600">
          Choose your path to success with our comprehensive learning tracks
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
