'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const images = [
  '/images/ttra.jpg',
  '/images/coursesmasters.jpg',
  '/images/course.jpg'
];

export default function CourseMastersPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showEnrollForm, setShowEnrollForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = '+256755017384';
    const message = 'Hello! I am interested in learning more about CourseMasters services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const email = 'info@qraftacademy.com';
    const subject = 'CourseMasters Inquiry';
    const body = 'Hello, I would like to learn more about your CourseMasters services.';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleEnrollClick = () => {
    setShowEnrollForm(true);
  };

  const handleCloseForm = () => {
    setShowEnrollForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    handleCloseForm();
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-screen">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Course Masters slideshow"
              fill
              className="object-cover"
              unoptimized={true}
            />
            <div className="absolute bottom-8 right-8 max-w-md p-6 text-white">
              <h2 className="text-3xl font-bold mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
                Let Us Create Your Online Course
              </h2>
              <p className="text-lg mb-6 [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
                We specialize in creating impactful online courses for NGOs, EdTechs, 
                schools, and government organizations. Whether you're looking to 
                educate, empower, or innovate, we can help you bring your vision to life.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded flex items-center gap-2"
                  suppressHydrationWarning
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.189-1.248-6.189-3.515-8.452"/>
                  </svg>
                  WhatsApp
                </button>
                <button
                  onClick={handleEmail}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded flex items-center gap-2"
                  suppressHydrationWarning
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* COURSE PORTFOLIO SECTION */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Client Courses Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'D4GW Understanding Digital Rights Course',
              partner: 'Enabel, Belgian Development Agency',
              img: '/images/Understanding Digital Rights D4GW.png'
            },
            {
              title: 'Business and Human Rights E-Learning Course',
              partner: 'Enabel, EU, Ministry Of Gender, Labour And Economic Devt',
              img: '/images/WhatsApp Image 2025-08-04 at 16.26.03_2aeab8e2.jpg'
            },
            {
              title: 'French - D4GW Understanding Digital Rights Course',
              partner: 'Enabel, Belgian Development Agency',
              img: '/images/Understanding Digital Rights D4GW_11zon.png'
            }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={225}
                className="w-full h-auto"
                unoptimized={true}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.partner}</p>
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
          ))}
        </div>
      </div>

      {/* COURSEMASTERS PROGRAM */}
      <div className="relative h-[600px] mt-16">
        <Image
          src="/images/WhatsApp Image 2025-07-30 at 13.39.02_75522a4a.jpg"
          alt="CourseMasters Program"
          fill
          className="object-cover"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
          <div className="max-w-2xl px-8 text-white">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Learn How to Create<br />Your Own Courses
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-lg">
              Join our CourseMasters Program and learn how to design, package, and sell your own courses. 
              Perfect for company teams and individuals looking to share their expertise.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20 max-w-md">
              <h3 className="text-2xl font-semibold mb-4 text-center">Next Cohort</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm opacity-90">Starts</p>
                  <p className="text-lg font-bold">3rd November</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm opacity-90">Ends</p>
                  <p className="text-lg font-bold">6th December</p>
                </div>
                <div className="col-span-2 bg-white/20 rounded-lg p-3">
                  <p className="text-sm opacity-90">Duration</p>
                  <p className="text-lg font-bold">6 Weeks</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleEnrollClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* ENROLL FORM MODAL */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Enroll in CourseMasters Program</h3>
                <button
                  onClick={handleCloseForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your course creation goals..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
