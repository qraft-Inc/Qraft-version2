import cn from "classnames"
import { Quote } from "lucide-react"
import React from 'react'

const TestimonialCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("card-glass p-8 max-w-md mb-4 hover:scale-105 transition-all duration-300", className)}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ))}
      </div>
      <Quote className='mb-4 text-primary-400' size={32} />
      <div>
        <p className="text-neutral-800 text-xl mb-6 leading-relaxed italic">
          Qraft Academy transformed my tech career. The training, mentorship, and real-world experience helped me land my dream job.
        </p>
        <div className='flex items-center gap-4'>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl">
            J
          </div>
          <div>
            <p className="font-bold text-lg text-neutral-900">John Doe</p>
            <p className="text-primary-600 font-medium">CEO, Company Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
