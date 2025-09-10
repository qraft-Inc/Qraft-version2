import React from 'react';
import Image from 'next/image';

const CapitalMastersPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 rounded-lg mb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hero-copy">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Empowerment for Every African</h1>
              <p className="text-xl mb-8">
                Unlock access to savings, credit, investments, and financial education across all levels—from grassroots community groups to formal banking and capital markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" suppressHydrationWarning>
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" suppressHydrationWarning>
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" suppressHydrationWarning>
                  Contact Us
                </button>
              </div>
            </div>
            <div className="hero-media">
              <Image
                src="/images/Image_fxx.jpg"
                alt="Financial Illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why CapitalMasters Section */}
      <section id="why" className="mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Why CapitalMasters?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Millions of Africans still lack reliable and affordable financial services. CapitalMasters bridges the gap by connecting informal groups, microfinance, SACCOs, banks, and investment platforms into an integrated financial ecosystem.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="bg-gray-50 py-16 mb-16 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Training Programs by Financial Level</h2>
            <p className="text-xl text-gray-600">
              Tailored programs for every level—from grassroots to capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Grassroots Level</h3>
              <p className="text-gray-600">Basic financial literacy and savings groups training for community members.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Microfinance Level</h3>
              <p className="text-gray-600">Training for microfinance institutions and SACCOs on governance and risk management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Banking Level</h3>
              <p className="text-gray-600">Advanced financial services training for banking professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Capital Markets</h3>
              <p className="text-gray-600">Investment and capital markets training for financial institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MoneyKind Section */}
      <section id="moneykind" className="mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">MoneyKind — Financial Technology Solutions</h2>
            <p className="text-xl text-gray-600">
              Explore our fintech product that connects communities, SACCOs, and individuals to digital savings, payments, and credit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">What is MoneyKind?</h3>
              <p className="text-gray-600 mb-4">
                MoneyKind streamlines group finance, member wallets, payments, and data—bridging informal and formal finance with secure, mobile-first tools.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Mobile-first onboarding and member management</li>
                <li>Payments, savings, and digital group wallets</li>
                <li>Integrations with banks and mobile money</li>
                <li>Dashboards, analytics, and compliance support</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" suppressHydrationWarning>
                Explore MoneyKind
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <p className="text-gray-600">MoneyKind Interface Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ThrivePath Section */}
      <section id="thrivepath" className="bg-gray-50 py-16 mb-16 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ThrivePath — Modern Personal Financial Literacy (21st-Century Workers)</h2>
            <p className="text-xl text-gray-600">
              A practical, workplace-ready curriculum to help employees make confident money decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Core Topics</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Budgeting systems and cash flow automation</li>
                <li>Debt strategies and credit score management</li>
                <li>Saving frameworks and emergency funds</li>
                <li>Investing basics: risk, diversification, index funds</li>
                <li>Retirement planning: NSSF and employer plans</li>
                <li>Insurance essentials: health, life, and income protection</li>
                <li>Taxes and payslip literacy</li>
                <li>Digital financial safety and fraud prevention</li>
                <li>Benefits optimization and salary negotiation</li>
                <li>Goal setting and 90-day action plans</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" suppressHydrationWarning>
                  Enroll your team
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" suppressHydrationWarning>
                  Request syllabus
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <p className="text-gray-600">Workers managing personal finances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="trusted" className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Bank of Uganda",
              "Uganda Microfinance Regulatory Authority",
              "Ministry of Finance",
              "Financial Sector Deepening Uganda",
              "Local SACCOs and Community Groups"
            ].map((org, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">Logo</span>
                </div>
                <p className="text-sm font-medium">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section id="impact" className="bg-gray-50 py-16 mb-16 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600">Digital Record-Keeping Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expanding financial inclusion in rural districts</h3>
              <p className="text-gray-600">
                CapitalMasters supported community groups to formalize savings, adopt digital record-keeping, and connect to microfinance partners—unlocking affordable credit for micro-entrepreneurs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600">SACCO Governance Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strengthening SACCO governance and risk management</h3>
              <p className="text-gray-600">
                Tailored training improved board oversight, compliance, and portfolio quality—resulting in stronger, more resilient institutions serving underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="updates" className="mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">Sign up for our newsletter and latest program news.</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                suppressHydrationWarning
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" suppressHydrationWarning>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Empower your community or business with CapitalMasters. Connect with us for training, resources, and partnership opportunities.
              </p>
              <div className="space-y-3">
                <p><strong>Email:</strong> <a href="mailto:info@capitalmasters.ug" className="text-blue-600 hover:underline">info@capitalmasters.ug</a></p>
                <p><strong>Phone:</strong> <a href="tel:+256700000000" className="text-blue-600 hover:underline">+256 700 000 000</a></p>
                <p><strong>Address:</strong> Kampala, Uganda</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" suppressHydrationWarning />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" suppressHydrationWarning />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" suppressHydrationWarning></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" suppressHydrationWarning>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalMastersPage;
