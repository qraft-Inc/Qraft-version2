"use client";

import React, { useState } from 'react';
import { Code, Smartphone, Globe, Award, Users, Calendar, CheckCircle, ArrowRight, Zap, Clock, Target, Sparkles } from 'lucide-react';

const TechMastersPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Application started for: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section - Mega CTA */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
            🔥 COHORT 1 NOW OPEN - LIMITED TO 50 STUDENTS
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            TechMasters<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Digital, Design & Skills Bootcamp
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-100 mb-4 max-w-4xl mx-auto font-light">
            The Premier Tech Bootcamp of Qraft Academy
          </p>
          
          <p className="text-xl text-blue-200 mb-6 max-w-3xl mx-auto">
            Master AI, Web Development, Mobile Apps & Digital Design with live mentorship.<br/>
            Build your portfolio. Land your first tech role or launch freelancing.
          </p>

          {/* Bootcamp Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
              <div className="text-4xl mb-3">📅</div>
              <h4 className="text-lg font-bold mb-2">Weekly Meetups</h4>
              <p className="text-blue-200 text-sm">Collaborate with peers, network, and stay connected to the community</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-lg font-bold mb-2">Quarterly Hackathons</h4>
              <p className="text-blue-200 text-sm">Compete, showcase skills, win prizes, and build impressive projects</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
              <div className="text-4xl mb-3">12 Weeks</div>
              <h4 className="text-lg font-bold mb-2">Intensive Program</h4>
              <p className="text-blue-200 text-sm">Fast-track your journey to becoming a skilled tech professional</p>
            </div>
          </div>

          {/* Main Application Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-yellow-500" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Apply Now - March 2026</h2>
              <Sparkles className="text-yellow-500" size={28} />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email to start application"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-lg font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                Start Your Application <ArrowRight size={24} />
              </button>
            </form>
            
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span>Scholarships Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span>No Experience Needed</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-yellow-400 mb-2">50</div>
              <div className="text-sm text-blue-100">Total Spots</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-yellow-400 mb-2">12</div>
              <div className="text-sm text-blue-100">Weeks Online</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-yellow-400 mb-2">3</div>
              <div className="text-sm text-blue-100">Career Tracks</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-yellow-400 mb-2">100%</div>
              <div className="text-sm text-blue-100">Portfolio Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootcamp Community & Events Section */}
      <section className="bg-gradient-to-b from-transparent to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              More Than Online Learning
            </h2>
            <p className="text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              Join a Thriving Tech Community
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              TechMasters is a full bootcamp experience with regular in-person and virtual community events that bring our cohort together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Weekly Meetups */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 border border-blue-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">📅</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Weekly Meetups</h3>
                  <p className="text-blue-200">Every Week</p>
                </div>
              </div>

              <p className="text-blue-100 mb-6 leading-relaxed">
                Join your cohort every week for collaborative sessions, peer learning, and community building. 
                These meetups are where the magic happens—network with fellow bootcampers, share ideas, and 
                grow together as a tech community.
              </p>

              <h4 className="text-lg font-bold text-white mb-4">What Happens:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300 font-bold text-xl">→</span>
                  <span><strong>Peer Learning Sessions:</strong> Share knowledge and solve problems together</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300 font-bold text-xl">→</span>
                  <span><strong>Guest Tech Talks:</strong> Industry experts share insights and career advice</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300 font-bold text-xl">→</span>
                  <span><strong>Networking Events:</strong> Connect with mentors, recruiters, and professionals</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300 font-bold text-xl">→</span>
                  <span><strong>Code Reviews:</strong> Get feedback on your projects from experienced developers</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300 font-bold text-xl">→</span>
                  <span><strong>Portfolio Building:</strong> Learn how to showcase your work to employers</span>
                </li>
              </ul>
            </div>

            {/* Quarterly Hackathons */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-8 border border-purple-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🏆</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Quarterly Hackathons</h3>
                  <p className="text-purple-200">4 Times Per Year</p>
                </div>
              </div>

              <p className="text-purple-100 mb-6 leading-relaxed">
                Participate in quarterly hackathons where you'll team up with fellow bootcampers to build 
                real-world projects, compete for prizes, and showcase your skills to potential employers 
                and investors. This is where you'll build the confidence and portfolio that lands you opportunities.
              </p>

              <h4 className="text-lg font-bold text-white mb-4">Hackathon Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-purple-100">
                  <span className="text-purple-300 font-bold text-xl">→</span>
                  <span><strong>24-72 Hour Builds:</strong> Intensive sprints to complete ambitious projects</span>
                </li>
                <li className="flex items-start gap-3 text-purple-100">
                  <span className="text-purple-300 font-bold text-xl">→</span>
                  <span><strong>Cash Prizes:</strong> Win up to $5,000 for top projects</span>
                </li>
                <li className="flex items-start gap-3 text-purple-100">
                  <span className="text-purple-300 font-bold text-xl">→</span>
                  <span><strong>Mentorship:</strong> Access to expert mentors during the hackathon</span>
                </li>
                <li className="flex items-start gap-3 text-purple-100">
                  <span className="text-purple-300 font-bold text-xl">→</span>
                  <span><strong>Employer Showcase:</strong> Present your projects to hiring companies</span>
                </li>
                <li className="flex items-start gap-3 text-purple-100">
                  <span className="text-purple-300 font-bold text-xl">→</span>
                  <span><strong>Portfolio Assets:</strong> Build impressive GitHub projects for your portfolio</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Bootcamp Community Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-white mb-2">Accountability Partners</h4>
                <p className="text-yellow-50">Stay motivated with peers who are on the same journey as you</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-xl font-bold text-white mb-2">Career Accelerator</h4>
                <p className="text-yellow-50">Many students find jobs through cohort connections and employer showcases</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-white mb-2">Lifelong Network</h4>
                <p className="text-yellow-50">Build relationships with future colleagues, founders, and collaborators</p>
              </div>
            </div>
          </div>

          {/* Sample Schedule */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Bootcamp Calendar</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="border-2 border-blue-500 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-600 mb-3">Week 1-3</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Foundation</h4>
                <p className="text-gray-700 text-sm">Set up your dev environment, learn fundamentals, first meetup</p>
              </div>
              <div className="border-2 border-purple-500 rounded-xl p-6 transform scale-105">
                <div className="text-2xl font-bold text-purple-600 mb-3">Week 4</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏆 Hackathon #1</h4>
                <p className="text-gray-700 text-sm">First 72-hour hackathon, build your first major project</p>
              </div>
              <div className="border-2 border-green-500 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-600 mb-3">Week 5-9</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Specialization</h4>
                <p className="text-gray-700 text-sm">Deep dive into your chosen track, weekly peer sessions</p>
              </div>
              <div className="border-2 border-orange-500 rounded-xl p-6">
                <div className="text-2xl font-bold text-orange-600 mb-3">Week 10-12</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏆 Hackathon #2</h4>
                <p className="text-gray-700 text-sm">Final hackathon, employer showcase, project demos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Clock className="animate-pulse" size={24} />
              <span className="font-bold">Applications Close Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={24} />
              <span className="font-bold">Only 50 Spots Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={24} />
              <span className="font-bold">Limited Scholarships Remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Master - With CTAs */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-white text-center mb-4">
          Choose Your Path to Success
        </h2>
        <p className="text-xl text-blue-200 text-center mb-16 max-w-3xl mx-auto">
          Pick your track. Build real projects. Launch your career.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* AI Track */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">AI Fundamentals</h3>
              <p className="text-blue-100">Master machine learning & AI tools</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Build AI-powered applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Work with ML algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Deploy AI solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Complete portfolio projects</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Apply for AI Track
              </button>
            </div>
          </div>

          {/* Mobile Track */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition border-4 border-yellow-400 relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg font-bold text-sm">
              MOST POPULAR
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-purple-100">Android & iOS from scratch</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Build cross-platform apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Master UI/UX design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Publish to app stores</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Launch real mobile apps</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                Apply for Mobile Track
              </button>
            </div>
          </div>

          {/* Web Track */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">Web Development</h3>
              <p className="text-indigo-100">Full-stack from A to Z</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Frontend & backend mastery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Build modern web apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Database & API design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Deploy live websites</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
                Apply for Web Track
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scholarship CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-5xl font-black text-white mb-6">
              Partial Scholarships Available
            </h2>
            <p className="text-2xl text-white mb-8">
              We're investing in the next generation of tech leaders
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">18-35</div>
                  <div className="text-sm text-gray-600">Age Range</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">💻</div>
                  <div className="text-sm text-gray-600">Own a Laptop</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">✍️</div>
                  <div className="text-sm text-gray-600">Application Letter</div>
                </div>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">Course Investment: 500,000 UGX</p>
                <p className="text-gray-700">Scholarships awarded based on drive and potential</p>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-bold text-xl hover:from-orange-700 hover:to-red-700 transition transform hover:scale-105 shadow-lg">
                Apply for Scholarship Now
              </button>
            </div>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Limited scholarships available. We handpick motivated individuals who will complete the program and become success stories.
            </p>
          </div>
        </div>
      </div>

      {/* What You Get - Benefits with CTA */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-white text-center mb-16">
          Everything You Need to Succeed
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Job-Ready Skills</h3>
            <p className="text-blue-200 text-sm">Master tools companies actually use</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Real Projects</h3>
            <p className="text-blue-200 text-sm">Build portfolio pieces that impress</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold mb-2">Live Mentorship</h3>
            <p className="text-blue-200 text-sm">Expert guidance when you need it</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-white">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">Certification</h3>
            <p className="text-blue-200 text-sm">Qraft Academy credentials</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-2xl hover:bg-blue-50 transition transform hover:scale-105 shadow-2xl inline-flex items-center gap-3">
            Secure Your Spot Now <ArrowRight size={28} />
          </button>
        </div>
      </div>

      {/* Hackathons And Open Source Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Hackathons & Open Source
            </h2>
            <p className="text-2xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Join Our Community of Tech Innovators
            </p>
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
              Connect with fellow developers, showcase your skills, and contribute to real-world projects that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Hackathons Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 text-white">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-3xl font-bold mb-2">Hackathons</h3>
                <p className="text-lg opacity-90">Build. Create. Compete. Win.</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Participate in regular hackathons where you'll tackle real-world problems alongside talented developers. 
                  Showcase your creativity and technical skills in 24-72 hour coding marathons.
                </p>
                <h4 className="font-bold text-gray-900 mb-4">What You'll Experience:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Team Collaboration:</strong> Work in teams with diverse skill sets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Problem Solving:</strong> Tackle real challenges from industry partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Networking:</strong> Connect with developers, mentors, and potential employers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Prizes & Recognition:</strong> Win cash prizes, internships, and showcase opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Portfolio Boost:</strong> Add impressive projects to your GitHub</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
                  Join Next Hackathon
                </button>
              </div>
            </div>

            {/* Open Source Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-8 text-white">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-3xl font-bold mb-2">Open Source</h3>
                <p className="text-lg opacity-90">Contribute. Learn. Grow Together.</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Contribute to real open-source projects used by millions worldwide. Learn from experienced developers, 
                  build your professional reputation, and make a genuine impact on the tech community.
                </p>
                <h4 className="font-bold text-gray-900 mb-4">Your Open Source Journey:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Guided Onboarding:</strong> Learn how to contribute to established projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Code Reviews:</strong> Get feedback from experienced maintainers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Real-World Experience:</strong> Work on production code with actual users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Community Support:</strong> Connect with global developer community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">→</span>
                    <span className="text-gray-700"><strong>Career Advantage:</strong> Employers love seeing open-source contributions</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                  Explore Projects
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-xl font-bold text-gray-900">Tech Hackathon 2026</h4>
                </div>
                <p className="text-gray-700 mb-3">Build AI-powered solutions in 48 hours</p>
                <p className="text-sm text-gray-600 mb-4">📅 March 15-17, 2026</p>
                <p className="text-sm text-gray-600 mb-4">💰 $50,000 in prizes</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                  Register
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 transform scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🚀</span>
                  <h4 className="text-xl font-bold text-gray-900">OpenSource Contribution Week</h4>
                </div>
                <p className="text-gray-700 mb-3">Get started with open-source projects</p>
                <p className="text-sm text-gray-600 mb-4">📅 March 22-28, 2026</p>
                <p className="text-sm text-gray-600 mb-4">🎁 Free mentorship included</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition">
                  Learn More
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💡</span>
                  <h4 className="text-xl font-bold text-gray-900">Developer Showcase</h4>
                </div>
                <p className="text-gray-700 mb-3">Share your projects with industry leaders</p>
                <p className="text-sm text-gray-600 mb-4">📅 April 5, 2026</p>
                <p className="text-sm text-gray-600 mb-4">🎤 Network with recruiters</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alumni Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-yellow-500 pl-6">
                <p className="text-gray-700 mb-4 italic">
                  "After winning a hackathon with TechMasters, I got a job offer from a Fortune 500 company. The experience was invaluable!"
                </p>
                <p className="font-bold text-gray-900">Sarah Nakamura</p>
                <p className="text-sm text-gray-600">Software Engineer at Tech Corp</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-700 mb-4 italic">
                  "Contributing to open-source through the TechMasters program helped me understand production code. Now I'm a core contributor to 3 major projects!"
                </p>
                <p className="font-bold text-gray-900">James Chen</p>
                <p className="text-sm text-gray-600">Full Stack Developer, Open Source Contributor</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-700 mb-4 italic">
                  "The combination of hackathons and open-source work gave me the confidence and portfolio to start my own tech company."
                </p>
                <p className="font-bold text-gray-900">Maria Rodriguez</p>
                <p className="text-sm text-gray-600">Co-founder, Tech Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Urgency */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Don't Miss This Opportunity
            </h2>
            <p className="text-2xl text-white mb-4">
              Cohort 1 starts March 2026
            </p>
            <p className="text-xl text-pink-100 mb-10">
              50 spots. 12 weeks. Your future in tech starts now.
            </p>
            
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-5 rounded-lg font-bold text-2xl hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 shadow-lg"
                >
                  APPLY NOW - LIMITED SPOTS
                </button>
              </form>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>100% Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Live Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Scholarships Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Portfolio Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">TechMasters - A Qraft Academy Program</p>
          <p className="text-gray-500 text-sm">Transform your career in 12 weeks. Join us March 2026.</p>
        </div>
      </div>
    </div>
  );
};

export default TechMastersPage;
