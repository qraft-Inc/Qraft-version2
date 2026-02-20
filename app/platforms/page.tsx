"use client";

import React from 'react';
import Link from 'next/link';

const PlatformsPage = () => {
  const platforms = [
    {
      title: "Job Board",
      subtitle: "For Employees & Professional Job Seekers",
      description: "Connect with top employers and find your next career opportunity. Browse thousands of professional job listings across various industries.",
      icon: "💼",
      color: "from-blue-500 to-blue-700",
      features: [
        "Professional job listings from verified employers",
        "Advanced search and filtering by industry, location, and salary",
        "Resume builder and portfolio showcase",
        "Direct application tracking system",
        "Career resources and interview preparation",
        "Salary insights and company reviews",
        "Job alerts and personalized recommendations"
      ],
      benefits: [
        "Access to exclusive job opportunities",
        "Professional career guidance and support",
        "Networking with industry professionals",
        "Skills assessment and gap analysis"
      ],
      cta: "Browse Jobs",
      link: "#job-board"
    },
    {
      title: "Gig & Talent Marketplace",
      subtitle: "For Freelancers & Independent Professionals",
      description: "Showcase your skills and connect with clients seeking freelance talent. Build your reputation, set your rates, and work on your own terms.",
      icon: "🎯",
      color: "from-purple-500 to-purple-700",
      features: [
        "Create professional freelancer profiles",
        "Showcase portfolio and past work",
        "Secure project bidding and proposal system",
        "Integrated payment and escrow services",
        "Client reviews and rating system",
        "Time tracking and project management tools",
        "Multiple service categories and skills",
        "Verified freelancer badges"
      ],
      benefits: [
        "Flexible work arrangements",
        "Set your own rates and schedule",
        "Build long-term client relationships",
        "Access to diverse project opportunities"
      ],
      cta: "Join as Freelancer",
      link: "#gig-marketplace"
    },
    {
      title: "E-Commerce & Product Platform",
      subtitle: "For Entrepreneurs & Business Owners",
      description: "Launch and grow your business with our comprehensive e-commerce platform. Sell services and products to a growing customer base.",
      icon: "🚀",
      color: "from-green-500 to-green-700",
      features: [
        "Service-based marketplace for consultants and providers",
        "Product listing and inventory management",
        "Secure payment processing and checkout",
        "Digital and physical product support",
        "Business analytics and sales insights",
        "Marketing tools and promotional features",
        "Customer relationship management",
        "Multi-vendor marketplace capabilities",
        "Mobile-optimized storefronts"
      ],
      benefits: [
        "Low startup costs and easy setup",
        "Built-in customer base and traffic",
        "Professional business tools included",
        "Scale from side hustle to full business"
      ],
      cta: "Start Selling",
      link: "#ecommerce-platform"
    },
    {
      title: "CapitalMasters (Investment & Financial Security)",
      subtitle: "For All Workers & Investors",
      description: "Secure your financial future with investment opportunities, retirement planning, and financial literacy resources designed for the modern workforce.",
      icon: "💰",
      color: "from-amber-500 to-amber-700",
      features: [
        "Investment opportunities tailored for workers",
        "Retirement savings and pension plans",
        "Financial literacy courses and resources",
        "Portfolio management and tracking",
        "Access to financial advisors",
        "Emergency fund building tools",
        "Insurance and protection options",
        "Startup and business investment opportunities",
        "Peer-to-peer lending platform"
      ],
      benefits: [
        "Build long-term wealth and security",
        "Diversified investment options",
        "Expert financial guidance",
        "Start with small amounts"
      ],
      cta: "Secure Your Future",
      link: "/courses/capitalmasters"
    },
    {
      title: "WorkMasters",
      subtitle: "For Job Seekers & Career Advancement",
      description: "Prepare for the workforce and advance your career with comprehensive training programs, mentorship, and employment readiness resources.",
      icon: "🎓",
      color: "from-indigo-500 to-indigo-700",
      features: [
        "Work readiness bootcamp programs",
        "Apprenticeship opportunities",
        "Employability skills training",
        "CV and resume building workshops",
        "Interview preparation and coaching",
        "Soft skills development",
        "Industry-specific certifications",
        "Mentorship programs",
        "Job placement assistance"
      ],
      benefits: [
        "Gain practical work experience",
        "Build professional confidence",
        "Connect with potential employers",
        "Fast-track your career growth"
      ],
      cta: "Start Your Career",
      link: "#workmasters-platform"
    },
    {
      title: "Qraft Capital",
      subtitle: "For Entrepreneurs & Business Growth",
      description: "Access the capital you need to launch and scale your business. Connect with angel investors, venture capital funds, and private equity financing tailored for African entrepreneurs.",
      icon: "💼",
      color: "from-blue-500 to-blue-700",
      features: [
        "Angel investment opportunities",
        "Venture capital fund access",
        "Private equity financing",
        "Pitch deck preparation and review",
        "Investor matching and introductions",
        "Due diligence support",
        "Business valuation services",
        "Cap table management",
        "Investment readiness programs",
        "Follow-on funding support"
      ],
      benefits: [
        "Access to diverse funding sources",
        "Expert guidance on fundraising",
        "Network with top investors",
        "Grow your business faster"
      ],
      cta: "Raise Capital",
      link: "#qraft-capital"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
          Our Platforms For Workers
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-semibold">
          Empowering Every Type of Worker in the Modern Economy
        </p>
        <p className="text-lg text-slate-700 max-w-3xl mb-6">
          Whether you're an employee seeking your next career move, a freelancer building your client base, an entrepreneur launching your business, or an investor securing your future—we have a platform designed for you.
        </p>
        <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-sm">
          <span className="text-slate-600">Powered by</span>
          <a 
            href="https://qraftlabs.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:text-purple-600 transition-colors flex items-center gap-1"
          >
            <span>⚡</span>
            <span>Qraft Labs</span>
          </a>
        </div>
      </section>

      {/* Platforms Overview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white border-2 border-slate-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className={`bg-gradient-to-r ${platform.color} text-white p-8 rounded-t-xl`}>
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h2 className="text-3xl font-bold mb-2">{platform.title}</h2>
                <p className="text-lg opacity-90">{platform.subtitle}</p>
              </div>
              
              <div className="p-8">
                <p className="text-slate-700 text-lg mb-6">{platform.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1 text-sm">✓</span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Benefits:</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {platform.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                        <p className="text-slate-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {platform.link.startsWith('/') ? (
                  <Link href={platform.link}>
                    <button className={`w-full bg-gradient-to-r ${platform.color} text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition`}>
                      {platform.cta}
                    </button>
                  </Link>
                ) : (
                  <button className={`w-full bg-gradient-to-r ${platform.color} text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition`}>
                    {platform.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Platform Sections */}
      
      {/* Job Board Section */}
      <section id="job-board" className="max-w-6xl mx-auto px-4 py-12 border-t-2 border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-6xl mb-6">💼</div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Job Board Platform</h2>
            <p className="text-lg text-slate-600 mb-6">
              Your gateway to professional employment opportunities across Uganda and East Africa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">For Job Seekers</h3>
                <p className="text-slate-700">Create your professional profile, upload your resume, and apply to thousands of verified job opportunities. Get matched with employers looking for your skills.</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">For Employers</h3>
                <p className="text-slate-700">Post job openings, review qualified candidates, and hire the best talent. Access our pool of skilled professionals ready to contribute to your organization.</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Search Jobs Now
              </button>
              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition">
                Post a Job Opening
              </button>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Popular Job Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Technology & IT",
                "Finance & Banking",
                "Healthcare",
                "Education",
                "Engineering",
                "Marketing & Sales",
                "Human Resources",
                "Customer Service",
                "Legal",
                "Manufacturing",
                "Hospitality",
                "Agriculture"
              ].map((category, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-3 text-center text-sm font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gig Marketplace Section */}
      <section id="gig-marketplace" className="max-w-6xl mx-auto px-4 py-12 border-t-2 border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1 bg-slate-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Top Freelance Services</h3>
            <div className="space-y-3">
              {[
                { name: "Web Development", icon: "💻" },
                { name: "Graphic Design", icon: "🎨" },
                { name: "Content Writing", icon: "✍️" },
                { name: "Digital Marketing", icon: "📱" },
                { name: "Video Editing", icon: "🎬" },
                { name: "Virtual Assistance", icon: "🗂️" },
                { name: "Photography", icon: "📸" },
                { name: "Translation", icon: "🌐" },
                { name: "Consulting", icon: "💡" },
                { name: "Data Entry", icon: "⌨️" }
              ].map((service, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 flex items-center hover:border-purple-600 cursor-pointer transition">
                  <span className="text-2xl mr-4">{service.icon}</span>
                  <span className="font-semibold text-slate-700">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Gig & Talent Marketplace</h2>
            <p className="text-lg text-slate-600 mb-6">
              Connect freelancers with clients for project-based work. Build your reputation, grow your income, and work flexibly.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">For Freelancers</h3>
                <p className="text-slate-700">Showcase your skills, bid on projects, and build a thriving freelance career. Set your own rates and work schedule while building a strong reputation.</p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">For Clients</h3>
                <p className="text-slate-700">Find skilled freelancers for your projects. Post gigs, review proposals, and hire the right talent. Pay securely through our escrow system.</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Start Freelancing
              </button>
              <button className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-lg transition">
                Hire a Freelancer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Platform Section */}
      <section id="ecommerce-platform" className="max-w-6xl mx-auto px-4 py-12 border-t-2 border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">E-Commerce & Product Platform</h2>
            <p className="text-lg text-slate-600 mb-6">
              Launch your entrepreneurial journey with our comprehensive platform for selling services and products online.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">Service-Based Marketplace</h3>
                <p className="text-slate-700">Offer professional services like consulting, coaching, training, legal services, and more. Build recurring revenue through service packages and subscriptions.</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">Product Listing Platform</h3>
                <p className="text-slate-700">Sell physical products, digital downloads, handmade goods, and more. Manage inventory, fulfill orders, and grow your brand with built-in marketing tools.</p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-4">Platform Features:</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Store Setup", "Payment Gateway", "Inventory Mgmt", "Analytics", "Marketing Tools", "Mobile App", "Customer Support", "Shipping Integration"].map((feature, index) => (
                  <div key={index} className="bg-white rounded p-2 text-center text-sm font-semibold text-slate-700">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Launch Your Store
              </button>
              <button className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition">
                Browse Products & Services
              </button>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Popular Business Categories</h3>
            <div className="space-y-3">
              {[
                { name: "Beauty & Wellness", icon: "💄" },
                { name: "Home & Living", icon: "🏠" },
                { name: "Fashion & Apparel", icon: "👗" },
                { name: "Tech & Electronics", icon: "📱" },
                { name: "Food & Beverages", icon: "🍽️" },
                { name: "Education Services", icon: "📚" },
                { name: "Professional Services", icon: "💼" },
                { name: "Arts & Crafts", icon: "🎨" },
                { name: "Health & Fitness", icon: "🏋️" },
                { name: "Agriculture & Farming", icon: "🌾" }
              ].map((category, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between hover:border-green-600 cursor-pointer transition">
                  <span className="font-semibold text-slate-700">{category.name}</span>
                  <span className="text-2xl">{category.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Platform Section */}
      <section id="investment-platform" className="max-w-6xl mx-auto px-4 py-12 border-t-2 border-slate-200 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1 bg-slate-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Investment Options</h3>
            <div className="space-y-4">
              {[
                { 
                  type: "Retirement Savings", 
                  desc: "Build your pension with flexible contribution plans",
                  icon: "🏦"
                },
                { 
                  type: "Mutual Funds", 
                  desc: "Diversified investment portfolios managed by experts",
                  icon: "📊"
                },
                { 
                  type: "Startup Investment", 
                  desc: "Invest in promising startups and businesses",
                  icon: "🚀"
                },
                { 
                  type: "Fixed Deposits", 
                  desc: "Guaranteed returns with secure fixed-term deposits",
                  icon: "💎"
                },
                { 
                  type: "Real Estate", 
                  desc: "Property investment and REIT opportunities",
                  icon: "🏢"
                },
                { 
                  type: "Bonds & Securities", 
                  desc: "Government and corporate bond investments",
                  icon: "📜"
                }
              ].map((option, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-5 hover:border-amber-600 cursor-pointer transition">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{option.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{option.type}</h4>
                      <p className="text-sm text-slate-600">{option.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-6xl mb-6">💰</div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Investment & Financial Security</h2>
            <p className="text-lg text-slate-600 mb-6">
              Secure your financial future with smart investment options, retirement planning, and financial literacy designed for all workers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">Build Wealth</h3>
                <p className="text-slate-700">Access diverse investment opportunities regardless of your income level. Start with as little as you can afford and grow your portfolio over time.</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">Financial Education</h3>
                <p className="text-slate-700">Learn investment basics, financial planning, and wealth management through our comprehensive courses and resources. Make informed decisions about your money.</p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-2">Expert Guidance</h3>
                <p className="text-slate-700">Connect with certified financial advisors who understand the unique challenges and opportunities facing workers in the modern economy.</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Start Investing Today
              </button>
              <button className="w-full bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold py-3 px-6 rounded-lg transition">
                Learn About Investing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WorkMasters Platform Details */}
      <section id="workmasters-platform" className="max-w-6xl mx-auto px-4 py-16 border-t-2 border-slate-200 mb-12">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">🎓</div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">WorkMasters</h2>
              <p className="text-xl text-indigo-600 font-semibold">For Job Seekers & Career Advancement</p>
            </div>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            WorkMasters is your comprehensive career development platform that bridges the gap between education and employment. 
            Whether you're entering the job market for the first time or looking to advance your career, we provide the training, 
            mentorship, and opportunities you need to succeed in today's competitive job market.
          </p>

          {/* Career Readiness Programs */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🚀</span>
              <span>Career Readiness Programs</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-indigo-700 mb-3">Work Readiness Bootcamp</h4>
                <p className="text-slate-700 mb-4">Intensive 8-12 week programs that prepare you for the modern workplace with hands-on training and real-world projects.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-indigo-500">✓</span><span>Professional workplace etiquette and communication</span></li>
                  <li className="flex items-start gap-2"><span className="text-indigo-500">✓</span><span>Industry-specific technical skills training</span></li>
                  <li className="flex items-start gap-2"><span className="text-indigo-500">✓</span><span>Team collaboration and project management</span></li>
                  <li className="flex items-start gap-2"><span className="text-indigo-500">✓</span><span>Digital literacy and productivity tools</span></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-purple-700 mb-3">Employability Skills Training</h4>
                <p className="text-slate-700 mb-4">Master the essential soft skills that employers are looking for in today's competitive job market.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span><span>Critical thinking and problem-solving</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span><span>Leadership and emotional intelligence</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span><span>Time management and organization</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span><span>Adaptability and continuous learning mindset</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Apprenticeship & Mentorship */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🤝</span>
              <span>Apprenticeship & Mentorship</span>
            </h3>
            <div className="bg-white border-2 border-indigo-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl mb-3">👔</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Industry Placements</h4>
                  <p className="text-slate-700 text-sm">Get matched with leading companies for 3-6 month apprenticeships where you earn while you learn.</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">👨‍🏫</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Mentorship</h4>
                  <p className="text-slate-700 text-sm">One-on-one guidance from experienced professionals in your field to accelerate your career growth.</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Career Coaching</h4>
                  <p className="text-slate-700 text-sm">Personalized coaching sessions to help you identify strengths, set goals, and navigate your career path.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Search Support */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">📋</span>
              <span>Job Search Support</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-indigo-100 border-2 border-indigo-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">📄</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">CV/Resume Building</h4>
                <p className="text-sm text-slate-700">Professional templates and expert feedback to create standout applications.</p>
              </div>
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Interview Preparation</h4>
                <p className="text-sm text-slate-700">Mock interviews, tips, and strategies to ace any interview.</p>
              </div>
              <div className="bg-indigo-100 border-2 border-indigo-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Job Matching</h4>
                <p className="text-sm text-slate-700">AI-powered matching with opportunities that fit your skills and goals.</p>
              </div>
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Networking Events</h4>
                <p className="text-sm text-slate-700">Connect with employers at career fairs and networking sessions.</p>
              </div>
            </div>
          </div>

          {/* Certifications & Credentials */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🏆</span>
              <span>Professional Certifications</span>
            </h3>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
              <p className="text-lg mb-4">Earn industry-recognized certifications that validate your skills and boost your employability:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="text-2xl">✓</span><span>Microsoft Office Specialist</span></li>
                  <li className="flex items-center gap-2"><span className="text-2xl">✓</span><span>Google Digital Marketing</span></li>
                  <li className="flex items-center gap-2"><span className="text-2xl">✓</span><span>Project Management Essentials</span></li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="text-2xl">✓</span><span>Customer Service Excellence</span></li>
                  <li className="flex items-center gap-2"><span className="text-2xl">✓</span><span>Data Analysis & Excel</span></li>
                  <li className="flex items-center gap-2"><span className="text-2xl">✓</span><span>Professional Communication</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Stats */}
          <div className="bg-white border-2 border-indigo-200 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">85%</div>
                <p className="text-sm text-slate-700 font-medium">Job Placement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">2,500+</div>
                <p className="text-sm text-slate-700 font-medium">Graduates Employed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
                <p className="text-sm text-slate-700 font-medium">Average Salary Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-sm text-slate-700 font-medium">Partner Companies</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="space-y-3">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Start Your Career Journey
              </button>
              <button className="w-full bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-6 rounded-lg transition">
                View Available Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Qraft Capital Platform Details */}
      <section id="qraft-capital" className="max-w-6xl mx-auto px-4 py-16 border-t-2 border-slate-200 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">💼</div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Qraft Capital</h2>
              <p className="text-xl text-blue-600 font-semibold">For Entrepreneurs & Business Growth</p>
            </div>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Qraft Capital bridges the funding gap for African entrepreneurs by connecting innovative startups with angel investors, 
            venture capital funds, and private equity firms. Whether you're seeking seed funding to launch your startup or growth 
            capital to scale your business, we provide the financial resources, expertise, and networks you need to succeed.
          </p>

          {/* Funding Options */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">💰</span>
              <span>Funding Options Available</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-blue-700 mb-3">Angel Investment</h4>
                <p className="text-slate-700 mb-4">Early-stage funding from experienced angel investors who provide capital and mentorship for promising startups.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Seed funding: $10K - $250K</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Mentorship from successful entrepreneurs</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Flexible investment terms</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Network access and connections</span></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-cyan-700 mb-3">Venture Capital</h4>
                <p className="text-slate-700 mb-4">Growth-stage funding from venture capital funds for startups with proven business models and traction.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-cyan-500">✓</span><span>Series A-C funding: $500K - $10M+</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500">✓</span><span>Strategic business guidance</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500">✓</span><span>Board support and governance</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500">✓</span><span>Follow-on funding opportunities</span></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-blue-700 mb-3">Private Equity</h4>
                <p className="text-slate-700 mb-4">Later-stage financing for established businesses looking to scale operations or expand into new markets.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Growth equity: $5M - $50M+</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Operational expertise and support</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>Exit planning and strategy</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>International expansion support</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Process */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              <span>Our Investment Process</span>
            </h3>
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">📝</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">1. Application</h4>
                  <p className="text-slate-700 text-sm">Submit your business plan and pitch deck for review by our investment team.</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">2. Due Diligence</h4>
                  <p className="text-slate-700 text-sm">Comprehensive evaluation of your business model, financials, and market opportunity.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">3. Investor Match</h4>
                  <p className="text-slate-700 text-sm">Connect with investors whose expertise and interests align with your business.</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">💸</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">4. Funding</h4>
                  <p className="text-slate-700 text-sm">Negotiate terms, close the deal, and receive capital to grow your business.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Readiness Services */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🚀</span>
              <span>Investment Readiness Services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Pitch Deck Creation</h4>
                <p className="text-sm text-slate-700">Professional pitch deck design and storytelling that captures investor attention.</p>
              </div>
              <div className="bg-cyan-100 border-2 border-cyan-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">💡</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Business Valuation</h4>
                <p className="text-sm text-slate-700">Expert valuation services to determine your company's worth and funding needs.</p>
              </div>
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Financial Modeling</h4>
                <p className="text-sm text-slate-700">Build investor-ready financial projections and business forecasts.</p>
              </div>
              <div className="bg-cyan-100 border-2 border-cyan-300 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Legal Support</h4>
                <p className="text-sm text-slate-700">Navigate term sheets, shareholder agreements, and investment contracts.</p>
              </div>
            </div>
          </div>

          {/* Investor Network */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🌐</span>
              <span>Our Investor Network</span>
            </h3>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-6">
              <p className="text-lg mb-4">Access our extensive network of investors across multiple sectors and stages:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-xl mb-3">Sectors</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Technology & Software</li>
                    <li>• Fintech & Financial Services</li>
                    <li>• Healthcare & Biotech</li>
                    <li>• Agriculture & Agritech</li>
                    <li>• Education & Edtech</li>
                    <li>• Clean Energy & Sustainability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Geographies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Uganda & East Africa</li>
                    <li>• Sub-Saharan Africa</li>
                    <li>• North America</li>
                    <li>• Europe</li>
                    <li>• Asia</li>
                    <li>• Global Reach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Investment Stages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Pre-seed & Seed</li>
                    <li>• Series A</li>
                    <li>• Series B & C</li>
                    <li>• Growth Equity</li>
                    <li>• Late Stage</li>
                    <li>• Buyouts & Exits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Track Record</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$120M+</div>
                <p className="text-sm text-slate-700 font-medium">Capital Raised</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">350+</div>
                <p className="text-sm text-slate-700 font-medium">Startups Funded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
                <p className="text-sm text-slate-700 font-medium">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">200+</div>
                <p className="text-sm text-slate-700 font-medium">Active Investors</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Apply for Funding
              </button>
              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition">
                Join as Investor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Platforms */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t-2 border-slate-200 mb-12">
        <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Why Choose Our Platforms?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Secure & Trusted</h3>
            <p className="text-slate-700 text-sm">Your data and transactions are protected with industry-leading security measures</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Local & Global</h3>
            <p className="text-slate-700 text-sm">Connect with opportunities in Uganda, East Africa, and around the world</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">All-in-One</h3>
            <p className="text-slate-700 text-sm">Everything you need to work, earn, sell, and invest in one ecosystem</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Learning Integrated</h3>
            <p className="text-slate-700 text-sm">Access training and education to improve your skills and opportunities</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of workers already using our platforms to advance their careers, grow their businesses, and secure their financial futures.
          </p>
          <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-slate-100 transition text-lg">
            Create Your Free Account
          </button>
        </div>
      </section>

      {/* Qraft Labs Credit */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <p className="text-slate-600">
              These platforms are proudly built and maintained by
            </p>
            <a 
              href="https://qraftlabs.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span className="text-xl">⚡</span>
              <span>Qraft Labs</span>
            </a>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4 italic">
            Innovation in Technology, Excellence in Execution
          </p>
        </div>
      </section>
    </div>
  );
};

export default PlatformsPage;
