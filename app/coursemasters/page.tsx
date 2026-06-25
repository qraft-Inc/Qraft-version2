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
  'https://res.cloudinary.com/dwa3soopc/image/upload/v1779659947/coursemasters/COURSE_TELEPROMPTER_mfatk0.jpg',
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
    window.location.href = '/coursemasters/build-your-course';
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
      <div className="relative h-[70vh] min-h-[520px] sm:h-[85vh] sm:min-h-[620px]">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-end lg:items-center">
              <div className="w-full max-w-2xl px-5 sm:px-10 pb-8 lg:pb-0 text-white">
                <div className="bg-black/50 backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-2xl border border-white/20">
                  <p className="text-[0.65rem] sm:text-sm uppercase tracking-[0.3em] text-white/70">CourseMasters</p>
                  <h2 className="text-2xl sm:text-4xl font-bold mt-3 mb-3 leading-tight">
                    Let Us Create Your Online Course
                  </h2>
                  <p className="text-sm sm:text-lg text-white/90 mb-5 sm:mb-6">
                    We specialize in creating impactful online courses for NGOs, EdTechs, schools, and government organizations. Whether you&apos;re looking to educate, empower, or innovate, we can help you bring your vision to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsApp}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-xl flex items-center justify-center gap-2"
                      suppressHydrationWarning
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.189-1.248-6.189-3.515-8.452" />
                      </svg>
                      WhatsApp
                    </button>
                    <button
                      onClick={handleEmail}
                      className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-2.5 px-6 rounded-xl flex items-center justify-center gap-2"
                      suppressHydrationWarning
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Build Your Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* COURSE PORTFOLIO SECTION */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">Portfolio</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">Client Courses Portfolio</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3">
              A snapshot of courses built for partners and institutions.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {[
            {
              title: 'D4GW Understanding Digital Rights Course',
              partner: 'Enabel, Belgian Development Agency',
              img: '/images/Understanding Digital Rights D4GW.png'
            },
            {
              title: 'Business and Human Rights E-Learning Course',
              partner: 'Enabel, EU, Ministry Of Gender, Labour And Economic Devt',
              img: '/images/WhatsApp%20Image%202025-08-04%20at%2016.26.03_2aeab8e2.jpg'
            },
            {
              title: 'French - D4GW Understanding Digital Rights Course',
              partner: 'Enabel, Belgian Development Agency',
              img: '/images/Understanding Digital Rights D4GW_11zon.png'
            }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={225}
                className="w-full h-auto"
                unoptimized={true}
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.partner}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => window.open('https://ulearn.enabel.be/', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
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
      </div>

      {/* COURSEMASTERS PROGRAM */}
      <div className="relative h-[520px] sm:h-[600px] mt-12 sm:mt-16">
        <Image
          src="/images/WhatsApp%20Image%202025-07-30%20at%2013.39.02_75522a4a.jpg"
          alt="CourseMasters Program"
          fill
          className="object-cover"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
          <div className="max-w-2xl px-6 sm:px-8 text-white">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Learn How to Create<br />Your Own Courses
            </h2>
            <p className="text-sm sm:text-xl mb-6 sm:mb-8 leading-relaxed max-w-lg">
              Join our CourseMasters Program and learn how to design, package, and sell your own courses. 
              Perfect for company teams and individuals looking to share their expertise.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 border border-white/20 max-w-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Next Cohort</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm opacity-90">Starts</p>
                  <p className="text-base sm:text-lg font-bold">2nd March 2026</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm opacity-90">Ends</p>
                  <p className="text-base sm:text-lg font-bold">5th June 2026</p>
                </div>
                <div className="col-span-2 bg-white/20 rounded-lg p-3">
                  <p className="text-sm opacity-90">Duration</p>
                  <p className="text-base sm:text-lg font-bold">90 Days</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleEnrollClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-4">
              Course Production Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Your Partner in E-learning Course Development & Instructional Design</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              We design and develop engaging e-learning courses and train content creators to produce professional-quality learning experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Design and develop engaging e-learning courses',
                'Train content creators to produce professional-quality'
              ].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-[260px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dwa3soopc/image/upload/v1782396153/Screenshot_2025-07-17_at_21.01.33_bhpdiq.png"
              alt="Course production"
              fill
              className="object-cover"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">CourseMasters Overview</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                CourseMasters is Qraft Academy’s end-to-end e-learning course production service, designed to transform expert knowledge and curriculum into engaging, accessible, and visually compelling digital learning experiences.
              </p>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-gray-700 leading-relaxed">
                We provide full-service support—from instructional design and multimedia production to LMS integration—helping institutions, organizations, and experts deliver high-quality, mobile-ready courses at scale.
              </div>
            </div>
            <div className="relative w-full h-[240px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/coursesmasters.jpg"
                alt="CourseMasters overview"
                fill
                className="object-cover"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Value Proposition</h2>
          <p className="text-base sm:text-lg text-gray-600">Built for scale, quality, and impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Fullstack Course Production', text: 'From needs analysis to final deployment.' },
            { title: 'Multiple Production Teams', text: 'Ability to handle multiple projects simultaneously.' },
            { title: 'Flexible Collaboration', text: 'We work and co-create with your team.' },
            { title: 'SCORM & LMS-Ready Outputs', text: 'Courses can be deployed on any modern LMS.' },
            { title: 'Low-Bandwidth Optimization', text: 'Ideal for African and global contexts.' },
            { title: 'Quality at Scale', text: 'Consistent delivery across multiple programs.' }
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Core Services</h2>
            <p className="text-base sm:text-lg text-gray-600">End-to-end services for high-impact learning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Course Design & Development',
                image: '/images/hero.png',
                items: [
                  'Instructional design based on adult learning principles',
                  'Content scripting, storyboarding, and curriculum alignment',
                  'Accessibility and inclusion-focused approach'
                ]
              },
              {
                title: 'Multimedia Production',
                image: '/images/rect3.png',
                items: [
                  'Audio-visual recording and editing (voiceovers, video, animations)',
                  'Interactive assets including simulations and knowledge checks',
                  'Studio or on-location production services'
                ]
              },
              {
                title: 'Digital Authoring & Publishing',
                image: 'https://www.easygenerator.com/wp-content/uploads/2026/03/Top-SCORM-compliant-authoring-tools-v2.png',
                items: [
                  'Authoring using tools like Articulate 360, Rise, and Adobe Captivate',
                  'Responsive e-learning modules for mobile and desktop',
                  'SCORM-compliant and LMS-ready exports'
                ]
              },
              {
                title: 'Platform Integration & Support',
                image: 'https://codigital.ec/storage/2022/06/que-es-moodle.jpg',
                items: [
                  'Deployment on LMS (Moodle, TalentLMS, custom platforms)',
                  'User experience testing and localization services',
                  'Post-deployment updates and analytics tracking'
                ]
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-36 sm:h-40">
                  <Image src={service.image} alt={service.title} fill className="object-cover" unoptimized={true} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ideal For</h2>
          <p className="text-base sm:text-lg text-gray-600">Who we serve best.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Corporate Learning & Development Teams',
            'NGOs, Development Agencies & International Organizations',
            'Educators & Academic Professionals',
            'Subject Matter Experts & Thought Leaders',
            'Universities, Colleges & Training Institutions',
            'Government & Public Sector Programs'
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-gray-700 font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* STUDIOS */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-4">
              CourseMasters Studios
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Purpose-Built Spaces for World-Class E-Learning Content Creation</h2>
            <p className="text-base sm:text-lg text-gray-600">
              We operate three dedicated production studios engineered to deliver high-impact digital learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Course Audio Studio',
                subtitle: 'Professional Voice, Script, and Sound for Seamless Learning',
                image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1779656895/coursemasters/coursemasters_audio_studio_cq9zxq.jpg',
                items: [
                  'Script Writing & Curriculum Adaptation',
                  'Voice-over Recording',
                  'Audio Mixing & Mastering',
                  'Custom Music & Sound Effects',
                  'Multilingual & Inclusive Narration'
                ]
              },
              {
                title: 'Instructional Animation & Motion Graphics Studio',
                subtitle: 'Bringing Concepts to Life',
                image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1779657762/coursemasters/Real_life_image_of_an_202605250022_hsmvk2.jpg',
                items: [
                  'Storyboarding, scripting, and synced narration',
                  '2D & 3D animations for educational content',
                  'Explainer videos & animated infographics',
                  'Whiteboard-style visualizations',
                  'Animated transitions & overlays',
                  'Interactive visual cues and interface animations'
                ]
              },
              {
                title: 'Live-Action Course Video Production Studio',
                subtitle: 'Capturing Real Learning in Action',
                image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1779657282/coursemasters/coursemasters_video_studio_peuauv.jpg',
                items: [
                  'Presenter-led course recordings',
                  'Green screen and controlled studio shoots',
                  'Field-based documentary-style footage',
                  'Multi-angle camera setups, lighting, and sound',
                  'Post-production: editing, B-roll, motion graphics, and subtitles'
                ]
              }
            ].map((studio) => (
              <div key={studio.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-36 sm:h-40">
                  <Image src={studio.image} alt={studio.title} fill className="object-cover" unoptimized={true} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{studio.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{studio.subtitle}</p>
                  <ul className="space-y-2 text-gray-700">
                    {studio.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-10 text-center text-gray-700">
            Our specialized studios ensure that every element—voice, visuals, and video—is crafted to the highest standards of quality, accessibility, and instructional value.
          </div>
        </div>
      </section>

      {/* TEAM & PARTNERS */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Team and Expertise Portfolio</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">An elite team for world-class e-learning production.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Tugume Andrew', role: 'Project Manager | Hybrid Learning Specialist | Instructional Designer | SME', image: null },
                { name: 'Mrs Kevin Patience Oyella', role: 'Voice-over & Script Lead', image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1782197435/IMG_2691_tkwq8q.jpg' },
                { name: 'Caesar Mwaka', role: 'Art Director / Storyboarder and Illustrator', image: null },
                { name: 'Pius Kibazzi', role: 'Videographer / Video Editor', image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1782197435/IMG_2705_wi5axd.jpg' },
                { name: 'Rashid Kasule', role: 'Motion Graphics Animator', image: null },
                { name: 'Andrew Okwir', role: 'Audio Engineer / Music Producer', image: null },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-40 sm:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-2xl font-bold">
                        {member.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-neutral-900">{member.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-48 sm:h-64">
              <Image src="/images/rect3.png" alt="CourseMasters team" fill className="object-cover" unoptimized={true} />
            </div>
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Partners</h3>
              <div className="flex flex-wrap gap-3 text-gray-700">
                {[
                  { name: 'ASB Records', logo: null },
                  { name: 'Kibazzi Kraft', logo: null },
                  { name: 'Kwonkalture Creations', logo: null },
                  { name: '26 voices', logo: 'https://images.ctfassets.net/tq92n9tmpo3b/1bngJDsNPxk6opl8lF0eOa/a2e155f2271bede67fb314cf6e6e278c/KB.png' },
                ].map((partner) => (
                  <span key={partner.name} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
                    {partner.logo && <img src={partner.logo} alt={partner.name} className="h-5 w-auto object-contain" />}
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div className="relative h-[220px] sm:h-[360px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/image.webp" alt="Consulting" fill className="object-cover" unoptimized={true} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Consulting</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">Strategy and advisory services to guide your e-learning vision.</p>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <ul className="space-y-3 text-gray-700 mb-6">
                  {[
                    'Needs assessment and instructional strategy',
                    'Curriculum design and multimedia production advisory',
                    'Platform and technology recommendations',
                    'Monitoring & Evaluation (M&E) strategy',
                    'Accessibility and inclusion reviews',
                    'Capacity building for internal content teams'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <div className="text-base sm:text-lg font-semibold text-gray-900">Consulting Rate: $400 per day</div>
                  <button
                    onClick={handleEmail}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full"
                  >
                    Request a Consult
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Powered by Qraft Academy</h2>
          <p className="text-base sm:text-lg text-gray-600">Shaping the future of e-learning and education technology in Africa.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Contact</p>
              <p className="mt-4 text-lg font-semibold text-gray-900">Let&apos;s build something great together.</p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>📞 +256 755017384</p>
                <p>📧 <a className="text-blue-600 hover:text-blue-700" href="mailto:drew@qraftacademy.com">drew@qraftacademy.com</a></p>
                <p>🌐 qraftacademy.com</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-full"
              >
                WhatsApp Us
              </button>
              <button
                onClick={handleEmail}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full"
              >
                Start a Project
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-48 sm:h-56">
              <Image src="/images/rect3.png" alt="Kampala Uganda" fill className="object-cover" unoptimized={true} />
            </div>
            <div className="p-6 text-gray-700">
              <p className="font-semibold">Location</p>
              <p className="mt-2">Kampala, Uganda</p>
              <p>Plot 4–10 Kiwana Road, Bukoto, Kampala, Uganda</p>
            </div>
          </div>
        </div>
      </section>

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
