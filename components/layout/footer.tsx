"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="gradient-primary text-white">
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-12 sm:size-14 rounded-2xl bg-white/10 backdrop-blur-sm p-2 shadow-lg flex-shrink-0">
                <Image
                  alt="Qraft Logo"
                  className="rounded-xl"
                  height={48}
                  priority
                  src="/favicon.ico"
                  width={48}
                />
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold text-white">Qraft Academy</span>
            </div>
            <p className="text-primary-100 leading-relaxed text-sm sm:text-base">
              Empowering the next generation through innovative education and career development.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link className="text-primary-100 active:text-white sm:hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm sm:text-base" href="/courses/home">
                <span className="w-1 h-1 rounded-full bg-primary-300 group-active:w-2 sm:group-hover:w-2 transition-all duration-200"></span>
                Courses
              </Link></li>
              <li><Link className="text-primary-100 active:text-white sm:hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm sm:text-base" href="/for-individuals">
                <span className="w-1 h-1 rounded-full bg-primary-300 group-active:w-2 sm:group-hover:w-2 transition-all duration-200"></span>
                Programs
              </Link></li>
              <li><Link className="text-primary-100 active:text-white sm:hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm sm:text-base" href="/about">
                <span className="w-1 h-1 rounded-full bg-primary-300 group-active:w-2 sm:group-hover:w-2 transition-all duration-200"></span>
                About Us
              </Link></li>
              <li><Link className="text-primary-100 active:text-white sm:hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm sm:text-base" href="/contact">
                <span className="w-1 h-1 rounded-full bg-primary-300 group-active:w-2 sm:group-hover:w-2 transition-all duration-200"></span>
                Contact
              </Link></li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">Connect With Us</h3>
            <div className="flex gap-2 sm:gap-3">
              <a className="text-white active:bg-white/20 sm:hover:bg-white/20 transition-all duration-200 p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm active:scale-95 sm:hover:scale-110 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center" href="https://www.facebook.com/yourpage">
                <Facebook className="size-4 sm:size-5" />
              </a>
              <a className="text-white active:bg-white/20 sm:hover:bg-white/20 transition-all duration-200 p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm active:scale-95 sm:hover:scale-110 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center" href="https://twitter.com/yourhandle">
                <Twitter className="size-4 sm:size-5" />
              </a>
              <a className="text-white active:bg-white/20 sm:hover:bg-white/20 transition-all duration-200 p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm active:scale-95 sm:hover:scale-110 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center" href="https://www.instagram.com/yourhandle">
                <Instagram className="size-4 sm:size-5" />
              </a>
              <a className="text-white active:bg-white/20 sm:hover:bg-white/20 transition-all duration-200 p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm active:scale-95 sm:hover:scale-110 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center" href="https://www.linkedin.com/in/yourprofile">
                <Linkedin className="size-4 sm:size-5" />
              </a>
              <a className="text-white active:bg-white/20 sm:hover:bg-white/20 transition-all duration-200 p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm active:scale-95 sm:hover:scale-110 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center" href="https://www.youtube.com/yourchannel">
                <Youtube className="size-4 sm:size-5" />
              </a>
            </div>
          </div>

          {isClient ? <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">Stay Updated</h3>
              <p className="text-primary-100 text-xs sm:text-sm">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex flex-col gap-2 sm:gap-3">
                <input
                  className="px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-neutral-800 w-full bg-white/95 backdrop-blur-sm placeholder:text-neutral-500 text-sm sm:text-base min-h-[44px]"
                  placeholder="Your email"
                  type="email"
                />
                <button className="bg-white text-primary-600 px-6 py-3 rounded-xl active:bg-primary-50 sm:hover:bg-primary-50 transition-all duration-200 font-semibold whitespace-nowrap active:scale-95 sm:hover:scale-105 shadow-lg text-sm sm:text-base min-h-[44px] touch-manipulation">
                  Subscribe
                </button>
              </div>
            </div> : null}
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center text-primary-100 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Qraft Academy. All rights reserved. Empowering futures through education.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
