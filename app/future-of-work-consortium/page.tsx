"use client";

import React from 'react';

const FutureOfWorkPage = () => {
  const economies = [
    "Care Economy",
    "Gig Economy",
    "Digital Economy",
    "Green Economy",
    "Experience Economy",
    "Creative Economy",
    "Trade Economy",
    "Knowledge Economy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Future of Work Forum
        </h1>
        <p className="text-lg text-slate-600 mb-4">
          Join Us in Shaping the Future of Work
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">About the Forum</h2>
        <div className="space-y-4 text-slate-700">
          <p>
            The Future of Work Forum is an organisation under Qraft Academy that hosts a one-week conference in Kampala to manage modern workforce development. We bring together professional employees, freelancers, entrepreneurs, and investors to collaborate on the evolving world of work.
          </p>
          <p className="font-semibold text-slate-900">Our Mission:</p>
          <p className="text-lg italic text-blue-600">
            Empower economies, enhance careers, and foster innovation.
          </p>
        </div>
      </section>

      {/* Focus Economies Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          2026 Focus Economies
        </h2>
        <p className="text-slate-600 mb-6">
          Economies Shaping the Future of Work for the 2026 year and conference:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {economies.map((economy, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">{economy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structure Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Structure</h2>
        <div className="space-y-4 text-slate-700">
          <p>The Future of Work Forum operates through:</p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong>Board and Committees</strong> - Strategic direction and governance</li>
            <li><strong>Policies and Advocacy</strong> - Developing best practices and advocating for change</li>
            <li><strong>Multiple Events</strong> including:
              <ul className="list-circle list-inside ml-6 mt-2 space-y-2">
                <li>Future of Work Tour</li>
                <li>Future of Work Awards</li>
                <li>Annual Conference</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Inclusivity Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Commitment</h2>
        <p className="text-slate-700 mb-4">
          The Forum takes keen interest in affirmative action for:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["PWDs (Persons with Disabilities)", "Youths", "Refugees", "Women"].map((group, index) => (
            <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900 text-sm">{group}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Join the Consortium</h2>
        <p className="text-slate-700 mb-6">
          The Forum is open to any organisation that needs to join the consortium and participate in shaping the future of work.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
          Learn More About Membership
        </button>
      </section>
    </div>
  );
};

export default FutureOfWorkPage;
