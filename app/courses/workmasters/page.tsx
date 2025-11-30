'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  currentRole: string;
  cohort: string;
  message: string;
}

export default function WorkMastersPage() {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    cohort: '',
    message: ''
  });

  const handleEnrollClick = () => {
    setShowEnrollForm(true);
  };

  const handleCloseForm = () => {
    setShowEnrollForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      currentRole: '',
      cohort: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We will contact you soon with more details.');
    handleCloseForm();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">90 Days Work Readiness Accelerator</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Your Gateway to Professional Excellence</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your career in 90 days with comprehensive skill development, exclusive platform access, and lifetime community support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleEnrollClick}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enroll Now - $300
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">90 Days</div>
              <div className="text-xl">Intensive Training</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">12 Weeks</div>
              <div className="text-xl">Structured Learning</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">Lifetime</div>
              <div className="text-xl">Platform Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">Program Overview</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            The 90 Days Work Readiness Accelerator is a premium, paid program that integrates comprehensive skill development with exclusive access to our proprietary professional platform and community network. This intensive employability program combines essential work readiness, advanced digital skills, financial acumen, and an exclusive support ecosystem to guarantee participants are job-ready, business-savvy, and connected to opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="#E91E63" opacity="0.2"/>
                  <circle cx="32" cy="32" r="20" fill="#E91E63" opacity="0.4"/>
                  <circle cx="32" cy="32" r="12" fill="#E91E63"/>
                  <circle cx="32" cy="32" r="4" fill="white"/>
                  <path d="M45 15 L50 10 L55 15 L50 20 Z" fill="#2196F3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">For Employees</h3>
              <p className="text-gray-600 leading-relaxed">Advance professionally with job-relevant skills and enhanced productivity</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <rect x="18" y="12" width="28" height="36" rx="2" fill="#795548"/>
                  <rect x="20" y="14" width="24" height="30" fill="#8D6E63"/>
                  <rect x="26" y="10" width="12" height="4" rx="2" fill="#6D4C41"/>
                  <circle cx="32" cy="38" r="2" fill="#FFB74D"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">For Freelancers</h3>
              <p className="text-gray-600 leading-relaxed">Master your craft, attract better clients, and manage your business efficiently</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <ellipse cx="32" cy="45" rx="8" ry="3" fill="#FF6B9D" opacity="0.3"/>
                  <path d="M32 15 L38 35 L32 40 L26 35 Z" fill="#FF6B9D"/>
                  <circle cx="32" cy="25" r="6" fill="#E91E63"/>
                  <circle cx="30" cy="23" r="2" fill="white"/>
                  <path d="M28 38 L24 48 L32 45 L40 48 L36 38" fill="#F48FB1"/>
                  <circle cx="32" cy="12" r="3" fill="#FFD54F"/>
                  <path d="M30 12 L32 8 L34 12" stroke="#FFD54F" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">For Entrepreneurs</h3>
              <p className="text-gray-600 leading-relaxed">Build smarter, scale faster, and lead with confidence in a dynamic market</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Program Value & Benefits */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">💎 Exclusive Program Value & Benefits</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Participants who enroll receive premium access to transformative resources and support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Platform Access</h3>
              <p className="text-gray-700">Exclusive, lifetime access to our platform featuring curated internships, apprenticeships, full-time jobs, gigs, and e-commerce shops</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Membership</h3>
              <p className="text-gray-700">Entry into a private professional community for networking and knowledge exchange</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Weekly Mastermind Meetups</h3>
              <p className="text-gray-700">Participation in structured weekly sessions focused on modern work development, advanced digital skilling, and investment strategies</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalized Mentorship</h3>
              <p className="text-gray-700">One-on-one coaching sessions to tailor the curriculum to your individual career path</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Certification</h3>
              <p className="text-gray-700">90 Days Work Readiness Accelerator certification upon completion to enhance professional credibility</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Ongoing Support</h3>
              <p className="text-gray-700">Continued access to platform, community, and new opportunities post-graduation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Structure */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Program Structure: 90 Days to Professional Transformation</h2>
            <p className="text-lg text-gray-700">The program is structured into three phases delivered over 12 weeks</p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-8 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Phase 1 (Days 1–30): Foundation & Personal Value Proposition</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">Focus: Mindset, Core Skills, and Branding</p>
              <p className="text-gray-700 italic mb-4">Weekly Meetups Theme: Understanding the Modern Job Market & Building Your Brand</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Growth Mindset & Goal Setting</h4>
                  <p className="text-gray-700 text-sm">Vision setting, SMART goals, accountability</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Communication Mastery</h4>
                  <p className="text-gray-700 text-sm">Business writing, active listening, digital etiquette</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">EQ & Professionalism</h4>
                  <p className="text-gray-700 text-sm">Conflict resolution, time management, workplace ethics</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Personal Branding & Networking</h4>
                  <p className="text-gray-700 text-sm">LinkedIn optimization, elevator pitches, mentorship seeking</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-8 border-purple-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Phase 2 (Days 31–60): Digital & Financial Acumen</h3>
              <p className="text-lg text-purple-600 font-semibold mb-2">Focus: In-demand technical skills, money management, and wealth building</p>
              <p className="text-gray-700 italic mb-4">Weekly Meetups Theme: Future-Proofing Skills, Digital Assets, and Investment Strategies</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Core Digital Tools</h4>
                  <p className="text-gray-700 text-sm">Mastery of productivity and collaboration software</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Digital Marketing & SEO Basics</h4>
                  <p className="text-gray-700 text-sm">Promoting self/business online effectively</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Financial Literacy & Business Finance</h4>
                  <p className="text-gray-700 text-sm">Budgeting, credit, cash flow management</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Introduction to Investing</h4>
                  <p className="text-gray-700 text-sm">Stocks, bonds, retirement funds, risk management</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-8 border-indigo-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Phase 3 (Days 61–90): Specialization & Job Acquisition</h3>
              <p className="text-lg text-indigo-600 font-semibold mb-2">Focus: Problem-solving, career specialization, and securing opportunities</p>
              <p className="text-gray-700 italic mb-4">Weekly Meetups Theme: The Pitch, Negotiation, and Long-Term Career Growth</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Problem Solving & Critical Thinking</h4>
                  <p className="text-gray-700 text-sm">Applied frameworks and case studies</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Tailored Job/Business Development</h4>
                  <p className="text-gray-700 text-sm">Resumes, interviews, proposals, business plans</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Negotiation & Contracts</h4>
                  <p className="text-gray-700 text-sm">Salary negotiation, client agreements, scope management</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Capstone Project & Pitch Day</h4>
                  <p className="text-gray-700 text-sm">Apply all skills to a real project/pitch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cohort Schedule */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">2026 Cohort Schedule</h2>
            <p className="text-lg text-gray-700">Choose the cohort that best fits your schedule. Three opportunities in 2026 to transform your career!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">January - April 2026</h3>
              <div className="space-y-2 mb-6 text-gray-800">
                <p><strong>Start Date:</strong> January 6, 2026</p>
                <p><strong>End Date:</strong> April 6, 2026</p>
                <p><strong>Duration:</strong> 90 Days (12 Weeks)</p>
              </div>
              <button
                onClick={handleEnrollClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Register for Cohort 1
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border-2 border-purple-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-900">May - August 2026</h3>
              <div className="space-y-2 mb-6 text-gray-800">
                <p><strong>Start Date:</strong> May 4, 2026</p>
                <p><strong>End Date:</strong> August 3, 2026</p>
                <p><strong>Duration:</strong> 90 Days (12 Weeks)</p>
              </div>
              <button
                onClick={handleEnrollClick}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Register for Cohort 2
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8 border-2 border-indigo-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">September - December 2026</h3>
              <div className="space-y-2 mb-6 text-gray-800">
                <p><strong>Start Date:</strong> September 7, 2026</p>
                <p><strong>End Date:</strong> December 7, 2026</p>
                <p><strong>Duration:</strong> 90 Days (12 Weeks)</p>
              </div>
              <button
                onClick={handleEnrollClick}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Register for Cohort 3
              </button>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-8 italic">
            <strong>Note:</strong> Each cohort is limited to 30 participants to ensure personalized attention and quality mentorship. Early registration is recommended.
          </p>
        </div>
      </div>

      {/* Investment Section */}
      <div className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Investment in Your Future</h2>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">90 Days Work Readiness Accelerator</h3>
            
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">12 weeks of intensive training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Lifetime platform access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Private community membership</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Weekly mastermind meetups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Personalized mentorship sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Professional certification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Job board and gig marketplace access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Ongoing post-graduation support</span>
              </li>
            </ul>

            <button
              onClick={handleEnrollClick}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enroll Now - $300
            </button>
            <p className="text-gray-600 mt-4 italic">Limited spots available per cohort</p>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="py-16 bg-gray-50" id="register">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Register for the Next Cohort</h2>
            <p className="text-lg text-gray-600">Take the first step towards transforming your career</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select your role</option>
                    <option value="employee">Employee</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Your Cohort <span className="text-red-500">*</span>
                </label>
                <select
                  name="cohort"
                  value={formData.cohort}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Choose your preferred cohort</option>
                  <option value="cohort1">Cohort 1: January - April 2026</option>
                  <option value="cohort2">Cohort 2: May - August 2026</option>
                  <option value="cohort3">Cohort 3: September - December 2026</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Areas of Interest <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your learning interests and career goals"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Career Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What do you hope to achieve in the next 90 days?"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the terms and conditions and understand the program investment is $300
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Program Support */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">🚀 Post-Program: Ongoing Support</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              Graduates retain access to the platform and community membership for continued professional development, networking, and accessing new opportunities listed by partner companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🔓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lifetime Platform Access</h3>
              <p className="text-gray-700">Continue browsing jobs, gigs, and opportunities</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Alumni Network</h3>
              <p className="text-gray-700">Stay connected with fellow graduates</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Continued Learning</h3>
              <p className="text-gray-700">Access to new courses and resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Career in 90 Days?</h2>
          <p className="text-xl mb-8">Join professionals who are taking control of their future</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleEnrollClick}
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enroll Now - $300
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
          <p className="text-lg">Questions? Email us at <a href="mailto:info@qraftsolutions.com" className="underline hover:text-yellow-400">info@qraftsolutions.com</a></p>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900">Register for the Next Cohort</h3>
                <button
                  onClick={handleCloseForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-6">Take the first step towards transforming your career</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Role/Status *</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Student, Professional, Entrepreneur"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Cohort *</label>
                  <select
                    name="cohort"
                    value={formData.cohort}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a cohort</option>
                    <option value="cohort1">Cohort 1: January - April 2026</option>
                    <option value="cohort2">Cohort 2: May - August 2026</option>
                    <option value="cohort3">Cohort 3: September - December 2026</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Why are you interested in this program?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals and aspirations..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleCloseForm}
                    className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    Submit Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}