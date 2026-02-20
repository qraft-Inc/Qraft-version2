import cn from "classnames";
import type { Metadata } from "next";
import Image from 'next/image';
import React from "react";
import "@/styles/tailwind.css";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import { siteConfig } from '@/config/site';

import { baronNeue, lato } from "./fonts";
import Providers from "./providers";
import GoogleAnalyticsScript from "../components/tools/google-analytics";
import { TailwindIndicator } from "../components/tools/tailwind-indicator";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(baronNeue.variable, lato.variable, "font-body antialiased")}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <Providers>
          {/* Header Bar */}
          <div className="gradient-primary text-white py-3 sm:py-4 px-4 shadow-lg">
            <div className="container-custom flex items-center justify-center">
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2 group-active:scale-110 sm:group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593598/WhatsApp_Image_2025-02-23_at_00.01.59-removebg-preview_d20kvk.png"
                    alt="Qraft Logo"
                    height={64}
                    width={48}
                    priority
                    className="rounded-lg sm:rounded-xl w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold">Qraft Academy</span>
              </div>
            </div>
          </div>
          <Navigation />
          {children}
          <Footer />
          <GoogleAnalyticsScript />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
