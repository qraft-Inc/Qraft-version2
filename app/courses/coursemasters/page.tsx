'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/images/ttra.jpg',
  '/images/coursesmasters.jpg',
  '/images/course.jpg'
];

export default function CourseMastersPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    // Add navigation or modal logic here
    console.log('Learn More clicked');
  };

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
              onClick={handleLearnMore}
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
            src="/images/WhatsApp Image 2025-08-04 at 16.26.03_2aeab8e2.jpg"
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
    </div>

    {/* CourseMasters Program Section */}
    <div className="relative h-96 mt-16">
      <Image
        src="/images/WhatsApp Image 2025-07-30 at 13.39.02_75522a4a.jpg"
        alt="CourseMasters Program"
        fill
        className="object-cover"
        unoptimized={true}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-4">Learn How to Create Your Own Courses</h2>
          <p className="text-lg mb-6">
            Join our CourseMasters Program and learn how to design, package, and sell your own courses. 
            Perfect for company teams and individuals looking to share their expertise.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded text-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </div>

    {/* Studios Section */}
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Studios at CourseMasters</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our purpose-built studios are designed to deliver high-impact digital learning experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
              Professional animation facilities for creating engaging educational content
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
              High-quality video recording and production capabilities
            </p>
          </div>
        </div>
      </div>

      {/* Audio Card - positioned below */}
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              Professional audio recording and sound design facilities
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Team Image Section */}
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-center">
        <Image 
          src="/images/team.png"
          alt="CourseMasters Team"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
          unoptimized={true}
        />
      </div>
    </div>

    {/* Partners Section */}
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations to deliver impactful learning experiences.
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-12">
        <Image 
          src="/images/76512d1634695441.6777cf144ad9b.png"
          alt="Partner Logo"
          width={150}
          height={80}
          className="object-contain"
          unoptimized={true}
        />
        <Image 
          src="/images/Enabel_Logo_Color_RGB.webp"
          alt="Enabel Logo"
          width={150}
          height={80}
          className="object-contain"
          unoptimized={true}
        />
      </div>
    </div>

    {/* Clients Section */}
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are serving leading organizations to deliver impactful learning experiences.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Image 
          src="/images/Enabel_Logo_Color_RGB.webp"
          alt="Enabel Logo"
          width={150}
          height={80}
          className="object-contain"
          unoptimized={true}
        />
      </div>
    </div>

    {/* Contact Us Section */}
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Let us help you bring your e-learning vision to life.
        </p>
      </div>
      
      <div className="max-w-md mx-auto text-center">
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Location:</p>
            <p className="text-gray-600">Plot 4–10 Kiwana Road, Bukoto, Kampala, Uganda</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <a href="tel:+256755017384" className="text-blue-600 hover:text-blue-800 transition-colors">
              +256 755017384
            </a>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <a href="mailto:info@qraftacademy.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              info@qraftacademy.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Website:</p>
            <a href="https://qraftacademy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
              qraftacademy.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
