"use client";

import React from 'react';
import Image from 'next/image';

const FutureOfWorkForumPage = () => {
  const boardMembers = [
    {
      name: "Andrew Tugume",
      position: "Chairman of the Board",
      image: "/images/board/andrew-tugume.jpg"
    },
    {
      name: "Member 2",
      position: "Vice Chairman",
      image: "/images/board/member2.jpg"
    },
    {
      name: "Member 3",
      position: "Treasurer",
      image: "/images/board/member3.jpg"
    },
    {
      name: "Member 4",
      position: "Secretary",
      image: "/images/board/member4.jpg"
    },
  ];

  const committees = [
    {
      name: "Workforce Development Committee",
      description: "Focuses on training and skill development programs"
    },
    {
      name: "Innovation & Technology Committee",
      description: "Drives digital transformation and innovation initiatives"
    },
    {
      name: "Advocacy & Policy Committee",
      description: "Develops policies and represents member interests"
    },
    {
      name: "Events & Engagement Committee",
      description: "Organizes conferences, tours, and community events"
    },
  ];

  const policies2026 = [
    {
      title: "Digital Skills for All",
      description: "Advocating for accessible digital literacy programs across all economic sectors"
    },
    {
      title: "Flexible Work Standards",
      description: "Promoting policies that support flexible and remote working arrangements"
    },
    {
      title: "Gig Economy Protection",
      description: "Ensuring fair treatment and protection for gig workers and freelancers"
    },
    {
      title: "Youth Employment Initiative",
      description: "Creating pathways for young professionals to enter the job market"
    },
    {
      title: "Women in Leadership",
      description: "Advancing gender equality and women representation in decision-making roles"
    },
    {
      title: "PWD Inclusion Program",
      description: "Ensuring persons with disabilities have equal access to work opportunities"
    },
    {
      title: "Refugee Employment Support",
      description: "Supporting economic integration of refugees through skills training"
    },
    {
      title: "Green Economy Jobs",
      description: "Creating sustainable employment in the green and circular economy sectors"
    },
  ];

  const members = [
    { name: "Tech Innovation Hub", sector: "Technology" },
    { name: "Kenya Financial Services", sector: "Finance" },
    { name: "East Africa Manufacturing Corp", sector: "Manufacturing" },
    { name: "Digital Solutions Ltd", sector: "IT Services" },
    { name: "Sustainable Energy Group", sector: "Green Energy" },
    { name: "Creative Industries Alliance", sector: "Creative Economy" },
    { name: "Healthcare Professionals Network", sector: "Care Economy" },
    { name: "Agricultural Innovation Center", sector: "Agriculture" },
    { name: "Trade Commerce Federation", sector: "Trade" },
    { name: "Knowledge Management Institute", sector: "Education" },
    { name: "Freelancer Network East Africa", sector: "Gig Economy" },
    { name: "Startup Ecosystem Accelerator", sector: "Entrepreneurship" },
  ];

  const events = [
    {
      title: "Future of Work Tour - Ethiopia",
      year: 2025,
      location: "Addis Ababa, Ethiopia",
      description: "Annual tour showcasing best practices and networking opportunities across East Africa",
      type: "Tour"
    },
    {
      title: "Future of Work Tour - Ethiopia",
      year: 2026,
      location: "Addis Ababa, Ethiopia",
      description: "Annual tour showcasing best practices and networking opportunities across East Africa",
      type: "Tour"
    },
    {
      title: "Future of Work Conference",
      year: 2026,
      location: "Kampala, Uganda",
      description: "One-week annual conference bringing together leaders, professionals, and innovators to shape the future of work",
      type: "Conference"
    },
    {
      title: "Future of Work Awards",
      year: 2026,
      location: "Kampala, Uganda",
      description: "Recognition of outstanding contributions to workforce development and innovation",
      type: "Awards"
    },
    {
      title: "Digital Skills Workshop Series",
      year: 2026,
      location: "Multiple Locations",
      description: "Quarterly workshops on emerging skills and workplace trends",
      type: "Workshop"
    },
    {
      title: "Women in Work Symposium",
      year: 2026,
      location: "Kampala, Uganda",
      description: "Focused discussion on advancing women in the modern workplace",
      type: "Symposium"
    },
  ];

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
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
          Future of Work Forum
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-semibold">
          Join Us in Shaping the Future of Work
        </p>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl">
          An organization under Qraft Academy hosting a one-week conference in Kampala to manage modern workforce development. Empowering economies, enhancing careers, and fostering innovation.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-700">Empower economies, enhance careers, and foster innovation.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-700">A thriving future of work that is inclusive, sustainable, and empowering for all.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Commitment</h3>
            <p className="text-slate-700">Affirmative action for PWDs, Youths, Refugees, and Women.</p>
          </div>
        </div>
      </section>

      {/* Focus Economies Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">2026 Focus Economies</h2>
        <p className="text-slate-600 mb-8">Economies Shaping the Future of Work</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {economies.map((economy, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center hover:shadow-lg transition">
              <p className="font-semibold text-slate-900">{economy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board and Committees Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">Board and Committees</h2>
        
        {/* Board Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <div className="text-slate-500 text-sm">Board Member Photo</div>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-slate-600 mt-1">{member.position}</p>
                {member.position === "Chairman of the Board" && (
                  <div className="mt-3 inline-block bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-semibold">
                    👑 Chairman
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Active Committees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{committee.name}</h4>
                <p className="text-slate-600">{committee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies and Advocacy Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">Policies and Advocacy</h2>
        <p className="text-slate-600 mb-8">2026 Policy Focus Areas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies2026.map((policy, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3 text-xl">📋</span>
                {policy.title}
              </h3>
              <p className="text-slate-700">{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Forum Members Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">Forum Members</h2>
        <p className="text-slate-600 mb-8">Organizations shaping the future of work with us</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-blue-600 mt-2 font-medium">{member.sector}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">Is your organization interested in joining the consortium?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Join the Forum
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200 mb-12">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">Our Events</h2>
        <p className="text-slate-600 mb-8">Upcoming and annual events</p>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase">Event Type</p>
                  <p className="text-lg font-bold text-slate-900">{event.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase">Year</p>
                  <p className="text-lg font-bold text-slate-900">{event.year}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase">Location</p>
                  <p className="text-lg font-bold text-slate-900">{event.location}</p>
                </div>
                <div className="md:col-span-1">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition text-sm">
                    Learn More
                  </button>
                </div>
              </div>
              <p className="text-slate-700 mt-4">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FutureOfWorkForumPage;
