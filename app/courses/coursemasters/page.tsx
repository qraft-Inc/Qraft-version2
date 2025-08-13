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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
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
              >
                View Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
