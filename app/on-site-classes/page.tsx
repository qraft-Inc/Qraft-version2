"use client";

import React from 'react';
import Link from 'next/link';

const OnSiteClassesPage = () => {
  const courseCategories = [
    {
      title: "Personal Development",
      subtitle: "Transform Yourself and Build Confidence",
      icon: "🌱",
      color: "from-green-500 to-emerald-700",
      description: "Invest in yourself with courses designed to enhance your personal growth, self-awareness, and emotional intelligence.",
      courses: [
        {
          name: "Self-Discovery & Personal Purpose",
          description: "Identify your values, strengths, and life purpose through guided exploration and reflection exercises.",
          duration: "4 weeks",
          schedule: "Twice per week"
        },
        {
          name: "Building Confidence & Self-Esteem",
          description: "Overcome self-doubt and develop unshakeable confidence in all areas of your life.",
          duration: "6 weeks",
          schedule: "Tuesday & Thursday evenings"
        },
        {
          name: "Emotional Intelligence Mastery",
          description: "Develop awareness and control of your emotions and improve your relationships with others.",
          duration: "8 weeks",
          schedule: "Saturday mornings"
        },
        {
          name: "Stress Management & Resilience",
          description: "Learn practical techniques to manage stress and build mental resilience in challenging times.",
          duration: "4 weeks",
          schedule: "Wednesday evenings"
        }
      ]
    },
    {
      title: "Quality of Life and Wellbeing",
      subtitle: "Create Balance and Live Healthier",
      icon: "🧘",
      color: "from-purple-500 to-pink-700",
      description: "Discover holistic approaches to wellness that encompass physical, mental, and spiritual health.",
      courses: [
        {
          name: "Mindfulness & Meditation",
          description: "Learn meditation techniques to reduce anxiety, improve focus, and achieve inner peace.",
          duration: "6 weeks",
          schedule: "Daily sessions"
        },
        {
          name: "Work-Life Balance",
          description: "Master strategies to balance your professional ambitions with personal wellbeing and relationships.",
          duration: "4 weeks",
          schedule: "Monday & Friday"
        },
        {
          name: "Nutrition & Healthy Living",
          description: "Understand nutrition science and create sustainable healthy eating habits for long-term wellness.",
          duration: "8 weeks",
          schedule: "Saturday afternoons"
        },
        {
          name: "Physical Fitness Fundamentals",
          description: "Build a fitness routine tailored to your goals, whether for weight loss, strength, or endurance.",
          duration: "12 weeks",
          schedule: "3 times per week"
        }
      ]
    },
    {
      title: "Productivity and Professional Development",
      subtitle: "Work Smarter and Excel in Your Career",
      icon: "⚡",
      color: "from-blue-500 to-cyan-700",
      description: "Develop the skills and systems that will propel your career forward and increase your value in the marketplace.",
      courses: [
        {
          name: "Time Management & Priority Mastery",
          description: "Implement proven time management systems to accomplish more with less stress.",
          duration: "4 weeks",
          schedule: "Tuesday evenings"
        },
        {
          name: "Digital Skills for Professionals",
          description: "Master essential tools: Microsoft Office, Google Suite, and productivity software that employers expect.",
          duration: "8 weeks",
          schedule: "Twice per week"
        },
        {
          name: "Project Management Essentials",
          description: "Learn to plan, execute, and complete projects successfully using industry-standard methodologies.",
          duration: "6 weeks",
          schedule: "Saturday mornings"
        },
        {
          name: "Professional Writing & Communication",
          description: "Improve your business writing, presentations, and communication to make a stronger impact.",
          duration: "6 weeks",
          schedule: "Thursday evenings"
        }
      ]
    },
    {
      title: "Leadership",
      subtitle: "Inspire and Influence Others",
      icon: "👑",
      color: "from-yellow-500 to-orange-700",
      description: "Develop the vision, charisma, and strategic thinking required to lead teams and organizations effectively.",
      courses: [
        {
          name: "Foundational Leadership Skills",
          description: "Learn the core principles of effective leadership and begin your journey as a leader.",
          duration: "8 weeks",
          schedule: "Tuesday & Thursday"
        },
        {
          name: "Visionary Leadership & Strategy",
          description: "Develop the ability to create compelling visions and execute strategic initiatives that transform organizations.",
          duration: "10 weeks",
          schedule: "Intensive weekend sessions"
        },
        {
          name: "Influence & Persuasion",
          description: "Master the art of influence to get others to support your ideas and initiatives.",
          duration: "4 weeks",
          schedule: "Monday evenings"
        },
        {
          name: "Change Management Leadership",
          description: "Learn to lead organizations through transformation and manage resistance to change.",
          duration: "6 weeks",
          schedule: "Wednesday evenings"
        }
      ]
    },
    {
      title: "Management and Governance",
      subtitle: "Manage Teams and Organizations",
      icon: "🏢",
      color: "from-indigo-500 to-blue-700",
      description: "Acquire the technical and interpersonal skills needed to manage teams, budgets, and organizational operations.",
      courses: [
        {
          name: "Team Management Fundamentals",
          description: "Learn to recruit, develop, motivate, and retain high-performing teams.",
          duration: "8 weeks",
          schedule: "Tuesday & Friday"
        },
        {
          name: "Performance Management & Feedback",
          description: "Master performance evaluation, goal-setting, and constructive feedback techniques.",
          duration: "4 weeks",
          schedule: "Monday evenings"
        },
        {
          name: "Organizational Governance",
          description: "Understand corporate governance, compliance, risk management, and organizational structures.",
          duration: "10 weeks",
          schedule: "Saturday sessions"
        },
        {
          name: "Conflict Resolution & Negotiation",
          description: "Develop skills to resolve conflicts and negotiate effectively to achieve win-win outcomes.",
          duration: "6 weeks",
          schedule: "Thursday evenings"
        }
      ]
    },
    {
      title: "Strategic Financial Growth",
      subtitle: "Build and Grow Your Wealth",
      icon: "💹",
      color: "from-green-500 to-teal-700",
      description: "Master financial principles and strategies to create sustainable wealth and secure your financial future.",
      courses: [
        {
          name: "Personal Financial Planning",
          description: "Create a comprehensive financial plan covering budgeting, debt management, and savings strategies.",
          duration: "6 weeks",
          schedule: "Monday & Wednesday"
        },
        {
          name: "Investing Fundamentals",
          description: "Learn investment basics including stocks, bonds, real estate, and building a diversified portfolio.",
          duration: "8 weeks",
          schedule: "Thursday & Saturday"
        },
        {
          name: "Entrepreneurship & Business Planning",
          description: "Develop the skills to launch and grow a successful business from startup to scale.",
          duration: "12 weeks",
          schedule: "Intensive sessions"
        },
        {
          name: "Tax Optimization & Wealth Protection",
          description: "Understand tax strategies and legal structures to optimize wealth and protect your assets.",
          duration: "4 weeks",
          schedule: "Friday evenings"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
          On-Site Classes
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-semibold">
          In-Person Learning at Qraft Solutions Hub
        </p>
        <p className="text-lg text-slate-700 max-w-3xl mb-8 leading-relaxed">
          Experience transformative learning in our state-of-the-art facilities. Our on-site classes combine expert instruction, 
          interactive sessions, and hands-on projects in six key areas of personal and professional development. Whether you're looking 
          to advance your career, improve your wellbeing, or build your wealth, we have a course for you.
        </p>
        <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-sm">
          <span className="text-slate-600">Location:</span>
          <span className="font-bold text-slate-900">Qraft Solutions Hub, Kampala</span>
        </div>
      </section>

      {/* Course Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {courseCategories.map((category, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 md:p-12 text-white`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{category.icon}</div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">{category.title}</h2>
                  <p className="text-xl font-semibold opacity-90">{category.subtitle}</p>
                </div>
              </div>

              <p className="text-lg mb-8 leading-relaxed max-w-3xl">
                {category.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {category.courses.map((course, courseIdx) => (
                  <div 
                    key={courseIdx} 
                    className="bg-white bg-opacity-95 text-slate-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                    <p className="text-slate-700 text-sm mb-4">{course.description}</p>
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                      <span className="bg-slate-100 px-3 py-1 rounded-full">📅 {course.duration}</span>
                      <span className="bg-slate-100 px-3 py-1 rounded-full">🕒 {course.schedule}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg">
                Explore {category.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose On-Site Learning */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t-2 border-slate-200 mb-12">
        <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Why Choose Our On-Site Classes?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">👨‍🏫</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Expert Instructors</h3>
            <p className="text-slate-700 text-sm">Learn from experienced professionals with real-world expertise in their fields</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Community Learning</h3>
            <p className="text-slate-700 text-sm">Network and build relationships with like-minded professionals and peers</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Hands-On Projects</h3>
            <p className="text-slate-700 text-sm">Apply your learning immediately with practical, real-world projects</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">📜</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Certifications</h3>
            <p className="text-slate-700 text-sm">Earn recognized certificates to enhance your professional credentials</p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t-2 border-slate-200 mb-12">
        <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Our Facilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Classrooms</h3>
            <p className="text-slate-700">State-of-the-art teaching spaces with interactive whiteboards, comfortable seating, and AV capabilities</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-lg p-6">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tech Labs</h3>
            <p className="text-slate-700">Fully equipped computer labs and collaboration spaces for hands-on learning and group projects</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-lg p-6">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Amenities</h3>
            <p className="text-slate-700">Comfortable break areas, refreshments, networking spaces, and professional facilities for all participants</p>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll in our on-site classes today and start your journey toward personal growth and professional success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition text-lg">
              Browse Classes
            </button>
            <button className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-10 rounded-lg transition text-lg">
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="border-t border-slate-200 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Have Questions?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">📍 Visit Us</h4>
                <p className="text-slate-700">Qraft Solutions Hub<br/>Kampala, Uganda</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">📞 Call Us</h4>
                <p className="text-slate-700">+256 (0) XXX XXX XXX<br/>Mon-Fri, 9am-5pm</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">📧 Email Us</h4>
                <p className="text-slate-700">classes@qraftacademy.com<br/>We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnSiteClassesPage;
