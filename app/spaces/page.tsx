"use client";

import React from 'react';

const QraftSolutionsHubPage = () => {
  const studioSpaces = [
    {
      name: "Audio Studio",
      description: "Professional-grade audio recording and production facility",
      features: [
        "Acoustically treated recording booth",
        "Industry-standard microphone and equipment",
        "Audio editing and post-production capabilities",
        "Multi-track recording setup",
        "Podcast and voiceover production"
      ]
    },
    {
      name: "Instructional Animation & Motion Graphics Studio",
      description: "Cutting-edge facility for creating engaging visual content",
      features: [
        "Motion graphics production workstations",
        "3D animation and visual effects capabilities",
        "Instructional animation creation",
        "Whiteboard animation production",
        "Interactive content development"
      ]
    },
    {
      name: "Live-Action Course Video Production Studio",
      description: "Full-equipped studio for professional video course production",
      features: [
        "Professional lighting setup",
        "Multi-camera recording capability",
        "Green screen/chroma key facility",
        "Video editing and color grading",
        "Live streaming capabilities",
        "4K video production",
        "Set design and staging"
      ]
    }
  ];

  const edtechFeatures = [
    "State-of-the-art learning management systems",
    "Interactive digital content creation tools",
    "Virtual and augmented reality learning spaces",
    "Advanced data analytics and learner insights",
    "Collaborative learning platforms",
    "Mobile-first educational technology"
  ];

  const trainingFeatures = [
    "Flexible training spaces for various group sizes",
    "Modern furniture and technology integration",
    "Breakout rooms for small group activities",
    "Presentation and conferencing equipment",
    "High-speed internet connectivity",
    "Comfortable learning environments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
          Our Hub
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-semibold">
          Where Innovation Meets Education
        </p>
        <p className="text-lg text-slate-700 max-w-3xl">
          Qraft Solutions Hub is our dedicated physical space where we conduct innovative activities and produce world-class educational content. Our state-of-the-art facilities are designed to support content creation, training, and technology-driven learning experiences.
        </p>
      </section>

      {/* CourseMasters Studios Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">CourseMasters Studios</h2>
        <p className="text-lg text-slate-600 mb-12">
          Our comprehensive content production facility equipped with professional studios for creating high-quality educational content
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {studioSpaces.map((studio, index) => (
            <div key={index} className="bg-white border-2 border-blue-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
              <div className="mb-4 text-4xl">
                {index === 0 && "🎙️"}
                {index === 1 && "🎬"}
                {index === 2 && "📹"}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{studio.name}</h3>
              <p className="text-slate-600 mb-6">{studio.description}</p>
              
              <div className="space-y-3">
                <p className="font-semibold text-slate-900 text-sm uppercase">Capabilities:</p>
                <ul className="space-y-2">
                  {studio.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">✓</span>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Why CourseMasters Studios?</h3>
          <p className="text-slate-700">
            CourseMasters Studios is designed to meet the evolving needs of modern educators and content creators. Our integrated approach brings together audio, animation, and video production under one roof, enabling seamless workflow and professional quality output. Whether you're creating a single course or an entire curriculum, our studios provide the tools and environment needed to produce engaging, high-quality educational content.
          </p>
        </div>
      </section>

      {/* Edtech Center Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">State-of-the-Art Edtech Center</h2>
        <p className="text-lg text-slate-600 mb-8">
          Advanced technology infrastructure supporting innovative digital learning experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Technology Stack</h3>
            <ul className="space-y-4">
              {edtechFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-3 text-lg">⚡</span>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Edtech Solutions We Provide</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">📱</span>
                <span className="text-slate-700">Mobile-optimized learning platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">🎯</span>
                <span className="text-slate-700">Personalized learning experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">📊</span>
                <span className="text-slate-700">Comprehensive learner analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">🔐</span>
                <span className="text-slate-700">Secure and scalable infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">🌐</span>
                <span className="text-slate-700">Global accessibility and integration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Space Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">Modern Training Spaces</h2>
        <p className="text-lg text-slate-600 mb-8">
          Flexible, technology-enabled environments designed for effective in-person and hybrid training
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4 mb-8">
              {trainingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-2">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg h-96 flex flex-col items-center justify-center">
            <div className="text-6xl mb-4">🏢</div>
            <p className="text-slate-600 text-center px-4">
              Modern training facility images coming soon
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Perfect for:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Corporate training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Workshop and seminars</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Team building activities</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Certification programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Hybrid learning sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Industry conferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Ecosystem */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200 mb-12">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">Why Choose Qraft Solutions Hub?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Integrated Ecosystem</h3>
            <p className="text-slate-700">All production and training capabilities under one roof for seamless workflows</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Professional Quality</h3>
            <p className="text-slate-700">Industry-standard equipment and facilities ensuring top-tier output</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Innovation Focused</h3>
            <p className="text-slate-700">Cutting-edge technology and forward-thinking approaches to education</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Expert Support</h3>
            <p className="text-slate-700">Dedicated team of professionals ready to support your projects</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Scalable Solutions</h3>
            <p className="text-slate-700">Infrastructure that grows with your needs and ambitions</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Learning Focused</h3>
            <p className="text-slate-700">Everything we do is designed to enhance educational outcomes</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us to learn how Qraft Solutions Hub can support your content creation and training needs.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition">
            Book a Tour or Inquire
          </button>
        </div>
      </section>
    </div>
  );
};

export default QraftSolutionsHubPage;
