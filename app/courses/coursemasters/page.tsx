'use client';


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


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">

      {/* Hero Section with Carousel */}
      <section className="w-full max-w-6xl relative rounded-xl shadow-lg mb-12 overflow-hidden">
        {/* Carousel */}
        <div className="relative h-64 sm:h-80 md:h-96">
          <div className="absolute inset-0 flex" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {slides.map((slide, index) => (
              <motion.div 
                key={index}
                className="min-w-full h-full relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={slide} 
                  alt="CourseMasters"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Professional Course Production
            </h1>
          </div>
        </div>
      </section>

      {/* Overview and Value Proposition Section */}
      <section className="w-full max-w-6xl bg-white p-8 sm:p-10 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">CourseMasters Overview</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">
          Transforming knowledge into engaging digital learning experiences
        </p>
        <div className="mb-8 mx-auto max-w-4xl">
          <img 
            src="/images/WhatsApp Image 2025-07-30 at 13.38.49_1ec49225.jpg" 
            alt="CourseMasters Overview"
            className="w-full rounded-lg shadow-md border border-gray-200"
          />
        </div>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          CourseMasters is Qraft Academy's end-to-end e-learning course production service, designed to
          transform expert knowledge and curriculum into engaging, accessible, and visually compelling digital
          learning experiences.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          We provide full-service support—from instructional design and multimedia production to LMS integration—helping
          institutions, organizations, and experts deliver high-quality, mobile-ready courses at scale.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Our Value Proposition</h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
          <li>Fullstack Course Production: From needs analysis to final deployment.</li>
          <li>Multiple Production Teams: Ability to handle multiple projects simultaneously.</li>
          <li>Flexible Collaboration: We work and co-create with your team</li>
          <li>SCORM & LMS-Ready Outputs: Courses can be deployed on any modern LMS.</li>
          <li>High-Quality, Low-Bandwidth Optimization: Ideal for African and global contexts.</li>
        </ul>
      </section>

      {/* What We Do / Core Services Section */}
      <section className="w-full max-w-6xl bg-white p-8 sm:p-10 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">What We Do / Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">What We Do</h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
              <li>Design and develop engaging e-learning courses</li>
              <li>Train content creators to produce professional-quality</li>
              <li>LOREM IPSUM (Assuming this is a placeholder, keep as is or clarify)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Ideal For</h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
              <li>Corporate Learning & Development Teams</li>
              <li>NGOs, Development Agencies & International Organizations</li>
              <li>Educators & Academic Professionals</li>
              <li>Subject Matter Experts & Thought Leaders</li>
              <li>Universities, Colleges & Training Institutions</li>
              <li>Government & Public Sector Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enhanced CourseMasters Studios Section */}
      <section className="w-full max-w-6xl bg-white p-8 sm:p-10 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">CourseMasters Studios</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">Purpose-Built Spaces for World-Class E-Learning Content Creation</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Audio Studio Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center">
                <span className="mr-2">🎙️</span> Audio Studio
              </h3>
            </div>
            <div className="p-6">
              <p className="text-base sm:text-lg text-gray-700 italic mb-4 flex items-center">
                <span className="mr-2">✨</span> Professional Voice & Sound
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Script Writing & Adaptation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Voice-over Recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Audio Mixing & Mastering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Custom Music & SFX</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Multilingual Narration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Animation Studio Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center">
                <span className="mr-2">🎨</span> Animation Studio
              </h3>
            </div>
            <div className="p-6">
              <p className="text-base sm:text-lg text-gray-700 italic mb-4 flex items-center">
                <span className="mr-2">✨</span> Bringing Concepts to Life
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>2D & 3D Animations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Explainer Videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Whiteboard Visualizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Animated Transitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Interactive UI Animations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Video Studio Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition duration-300">
            <div className="bg-gradient-to-r from-pink-500 to-red-600 p-4 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center">
                <span className="mr-2">🎬</span> Video Studio
              </h3>
            </div>
            <div className="p-6">
              <p className="text-base sm:text-lg text-gray-700 italic mb-4 flex items-center">
                <span className="mr-2">✨</span> Real Learning in Action
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Presenter Recordings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Green Screen Shoots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Documentary Footage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Multi-angle Setups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Professional Post-production</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Course Studios Matter Section */}
      <section className="w-full max-w-6xl bg-white p-8 sm:p-10 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Why Our Course Studios Matter</h2>
        <p className="text-base sm:text-lg text-gray-700 text-center">
          Our specialized studios ensure that every element—voice, visuals, and
          video—is crafted to the highest standards of quality, accessibility, and
          instructional value. Together, they bring structure, emotion, and clarity
          to every learning experience we create.
        </p>
      </section>

      {/* Our Team And Expertise Portfolio Section */}
      <section className="w-full max-w-6xl bg-white p-8 sm:p-10 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Our Team And Expertise Portfolio</h2>
        <p className="text-base sm:text-lg text-gray-700 italic mb-6 text-center">An Elite Team for World-Class E-Learning Production.</p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">Cross-functional expertise across every stage of course development.</p>

        {/* CourseMasters Core Team */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-800 text-center">CourseMasters Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 h-32 w-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-blue-600">
                TA
              </div>
              <h4 className="text-lg font-bold text-center mb-1">Tugume Andrew</h4>
              <p className="text-sm text-gray-600 text-center mb-3">Project Manager | Instructional Designer</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 h-32 w-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-purple-600">
                PK
              </div>
              <h4 className="text-lg font-bold text-center mb-1">Pius Kibazzi</h4>
              <p className="text-sm text-gray-600 text-center mb-3">Videographer / Video Editor</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="w-full max-w-6xl bg-white p-8 sm:p-10 rounded-xl shadow-md mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Begin your e-learning course production journey with our expert team
        </p>
        <a 
          href="https://forms.gle/aauvjT8xJZ3BbwFE9" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Contact Section with QR Code */}
      <section className="w-full max-w-6xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 rounded-xl shadow-lg mb-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg sm:text-xl mb-6">
              Scan the QR code or use any of the options below to get in touch with our team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:coursemasters@qraftacademy.com" className="hover:underline">
                  coursemasters@qraftacademy.com
                </a>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+254700000000" className="hover:underline">
                  +254 700 000 000
                </a>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/QraftAcademy" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path></svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Location</h3>
                <p>Bukoto Uganda</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <div className="p-2 bg-white">
              {/* QR Code will be rendered here */}
              <QRCodeSVG
                value={`BEGIN:VCARD
VERSION:3.0
FN:CourseMasters Team
ORG:Qraft Academy
TEL:+254700000000
EMAIL:coursemasters@qraftacademy.com
URL:https://qraftacademy.com/courses/coursemasters
                ADR:;;Bukoto Uhanda;Uganda
NOTE:E-learning Course Production Services
END:VCARD`}
                size={192}
                level="H"
                includeMargin={true}
                fgColor="#1e40af"
                bgColor="#ffffff"
              />
            </div>
            <p className="text-center mt-2 text-blue-900 font-medium">Scan to save contact info</p>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
