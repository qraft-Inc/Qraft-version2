'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CapitalMastersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-copy">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Financial Empowerment for Every African
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Unlock access to savings, credit, investments, and financial education across all
                levels—from grassroots community groups to formal banking and capital markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg" suppressHydrationWarning={true}>
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg text-lg" suppressHydrationWarning={true}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-media">
              <Image
                src="/images/Image_fxx.jpg"
                alt="Financial Empowerment"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why CapitalMasters Section */}
      <section id="why" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Why CapitalMasters?
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Millions of Africans still lack reliable and affordable financial services.
            CapitalMasters bridges the gap by connecting informal groups, microfinance, SACCOs, banks, and
            investment platforms into an integrated financial ecosystem.
          </p>
    
        </div>
      </section>

     {/* Training Programs Section */}
<section id="programs" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-极6 text-gray-900">
      Our Training Programs by Financial Level
    </h2>
    <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
      Tailored programs for every level—from grassroots to capital markets.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Informal Financial Sector (VSLAs, SHGs, Money Lenders)",
          items: [
            "Group Formation and Leadership Training",
            "Basic Savings and Loan Management",
            "Bookkeeping and Record-Keeping",
            "Conflict Resolution and Governance",
            "Financial Literacy and Digital Literacy"
          ]
        },
        {
          title: "Microfinance and SACCO Development (Tier IV)",
          items: [
            "Advanced Governance and Management",
            "Product Innovation and Risk Management",
            "Digital Financial Services Adoption",
            "Compliance with UMRA Regulations",
            "Linkage Building with Formal Financial Institutions"
          ]
        },
        {
          title: "Microfinance Deposit-Taking Institutions (Tier III)",
          items: [
            "Regulatory Compliance and Reporting",
            "Credit Risk Assessment and Portfolio Management",
            "Customer Relationship Management",
            "Technology Integration and Mobile Banking",
            "Financial Inclusion Strategies for Underserved Communities"
          ]
        },
        {
          title: "Credit Institutions (Tier II)",
          items: [
            "Corporate Governance and Leadership",
            "Advanced Credit Analysis and Lending Techniques",
            "Anti-Money Laundering and Fraud Prevention",
            "Foreign Exchange and Treasury Management",
            "SME and Agricultural Financing Solutions"
          ]
        },
        {
          title: "Commercial Banks (Tier I)",
          items: [
            "Leadership Development for Financial Institutions",
            "Digital Transformation and Fintech Integration",
            "Sustainable and Inclusive Banking Practices",
            "Capital Markets and Investment Products",
            "Corporate Social Responsibility and Consumer Protection"
          ]
        },
        {
          title: "Investment Funds and Capital Markets (Highest Level)",
          items: [
            "Investment Analysis and Portfolio Management",
            "Capital Market Operations and Compliance",
            "Private Equity and Venture Capital Management",
            "Financial Product Innovation and Marketing",
            "Investor Education and Protection"
          ]
        }
      ].map((program, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">{index + 1}</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">
            {program.title}
          </h3>
          <ul className="text-gray-700 text-left space-y-2">
            {program.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* MoneyKind Section */}
      <section id="moneykind" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            MoneyKind - Financial Technology Solutions
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our fintech product that connects communities, SACCOs, and individuals to
            digital savings, payments, and credit.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-800 text-lg">MoneyKind App Interface</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key Features</h3>
              <ul className="space-y-3">
                {[
                  "Digital savings platforms",
                  "Mobile payments integration",
                  "Credit scoring for underserved communities",
                  "SACCO management tools",
                  "Financial education resources"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 极13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ThrivePath Section */}
      <section id="thrivepath" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            ThrivePath - Modern Personal Financial Literacy (21st-Century Workers)
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            A practical, workplace-ready curriculum to help employees make confident money decisions.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Curriculum Modules</h3>
              <ul className="space-y-3">
                {[
                  "Budgeting and expense tracking",
                  "Debt management strategies",
                  "Investment fundamentals",
                  "Retirement planning",
                  "Digital financial tools",
                  "Workplace financial wellness"
                ].map((module, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="w-full h-80 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-800 text-lg">ThrivePath Learning Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="trusted" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Trusted By
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24">
                <span className="text-gray-500">Partner Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Impact Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Community SACCO Transformation",
                description: "How we helped a rural SACCO increase membership by 200% and assets by 300%"
              },
              {
                title: "Youth Financial Literacy",
                description: "Empowering young entrepreneurs with essential financial skills"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4" suppressHydrationWarning={true}>
                  Read Full Story →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="updates" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Sign up for our newsletter and latest program news.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-极1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                suppressHydrationWarning={true}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
                suppressHydrationWarning={true}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get In Touch</h3>
              <p className="text-gray-600 mb-4">
                Interested in our programs or have questions? Reach out to our team.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> hello@qraftacademy.com
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +256-701-xx-815
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Plot 851 Serumaga Road, Bukoto, Kampala, Uganda
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  suppressHydrationWarning={true}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  suppressHydrationWarning={true}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
                  suppressHydrationWarning={true}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
