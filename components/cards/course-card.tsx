import Image from "next/image"
import React from 'react'

const CourseCard = ({ _className, name, desc, image }: { _className?: string, name: string, desc: string, image: string }) => {
    return (
        <div className="flex w-full mb-6 sm:mb-8 px-3 sm:px-4">
            <div className="group card active:scale-95 sm:hover:scale-105 transition-all duration-300 w-full touch-manipulation">
                <div className="relative overflow-hidden rounded-t-2xl">
                    <Image 
                        alt={name} 
                        className="object-cover w-full h-48 sm:h-52 md:h-56 group-active:scale-110 sm:group-hover:scale-110 transition-transform duration-500" 
                        height={500} 
                        loading="lazy" 
                        src={image} 
                        width={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-active:text-primary-600 sm:group-hover:text-primary-600 transition-colors duration-300 leading-snug">
                        {name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                        {desc}
                    </p>
                    <div className="pt-2">
                        <span className="text-primary-600 font-semibold text-sm flex items-center gap-2 group-active:gap-3 sm:group-hover:gap-3 transition-all">
                            Learn More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
