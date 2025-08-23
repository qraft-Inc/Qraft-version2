'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/images/GwDsNJxW8AElh0G.jpeg',
  '/images/GwDsM8mWkAAeVRg.jpeg',
  '/images/GvzqcJzWAAAK-zk.jpeg'
];

export default function CourseMastersPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative h-screen">
      {images.map((src, index) => (
        <div 
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt="Course Masters slideshow"
            fill
            className="object-cover"
            unoptimized={true}
          />
          <div className="absolute bottom-8 right-8 max-w-md p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Let Us Create Your Online Course</h2>
            <p className="text-lg mb-6">
              We specialize in creating impactful online courses for NGOs, EdTechs, 
              schools, and government organizations. Whether you're looking to 
              educate, empower, or innovate, we can help you bring your vision to life
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
              suppressHydrationWarning
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Client Courses Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/Understanding Digital Rights D4GW.png"
            alt="Understanding Digital Rights"
            width={400}
            height={225}
            className="w-full h-auto"
            unoptimized={true}
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-1">D4GW Understanding Digital Rights Course</h3>
            <p className="text-sm text-gray-600 mb-4">Enabel, Belgian Development Agency</p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.open('https://ulearn.enabel.be/', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
                suppressHydrationWarning
              >
                View Course
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/WhatsApp%20Image%202025-08-04%20at%2016.26.03_2aeab8e2.jpg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="w-full h-auto"
            unoptimized={true}
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-1">Business and Human Rights E-Learning Course</h3>
            <p className="text-sm text-gray-600 mb-4">Enabel, EU, Ministry Of Gender, Labour And Economic Devt</p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.open('https://ulearn.enabel.be/', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
                suppressHydrationWarning
              >
                View Course
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/Understanding Digital Rights D4GW_11zon.png"
            alt="Understanding Digital Rights"
            width={400}
            height={225}
            className="w-full h-auto"
            unoptimized={true}
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-1">French - D4GW Understanding Digital Rights Course</h3>
            <p className="text-sm text-gray-600 mb-4">Enabel, Belgian Development Agency</p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.open('https://ulearn.enabel.be/', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
                suppressHydrationWarning
              >
                View Course
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New section with image and button */}
      <div className="mt-16 relative w-full h-96 rounded-lg overflow-hidden">
        <Image
          src="/images/WhatsApp Image 2025-07-30 at 13.39.02_75522a4a.jpg"
          alt="Explore Our Courses"
          fill
          className="object-cover"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
          <h3 className="text-3xl font-bold mb-4 text-center">Browse Through Our Courses</h3>
          <p className="text-lg mb-6 max-w-2xl text-center">
            Explore our in-house courses and those we've built for or with our clients. 
            From business fundamentals to advanced skills, we have something for everyone.
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg"
            suppressHydrationWarning
          >
            View Our Courses
          </button>
        </div>
      </div>

      {/* Studios section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">Studios at CourseMasters</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our purpose-built studios are designed to deliver high-impact digital learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Animation Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/images/animation.png"
              alt="Animation Studio"
              width={400}
              height={225}
              className="w-full h-auto"
              unoptimized={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Animation Studio</h3>
              <p className="text-sm text-gray-600">
                Professional animation services to bring your educational content to life with engaging visuals and motion graphics.
              </p>
            </div>
          </div>

          {/* Video Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/images/video.png"
              alt="Video Production Studio"
              width={400}
              height={225}
              className="w-full h-auto"
              unoptimized={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Video Production Studio</h3>
              <p className="text-sm text-gray-600">
                High-quality video recording and production facilities for creating professional educational videos and presentations.
              </p>
            </div>
          </div>

          {/* Audio Card - positioned below the first card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2">
            <Image 
              src="/images/audio.png"
              alt="Audio Recording Studio"
              width={400}
              height={225}
              className="w-full h-auto"
              unoptimized={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Audio Recording Studio</h3>
              <p className="text-sm text-gray-600">
                Professional audio recording and sound engineering services for crystal-clear voiceovers and audio content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team image */}
      <div className="mt-16 w-full">
        <Image
          src="/images/team.png"
          alt="Team"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg"
          unoptimized={true}
        />
      </div>

      {/* Partners section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We are serving leading organizations to deliver impactful learning experiences.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/Enabel_Logo_Color_RGB.webp"
            alt="Enabel Logo"
            width={200}
            height={100}
            className="h-auto"
            unoptimized={true}
          />
        </div>
      </div>
    </div>
    </>
  );
}
