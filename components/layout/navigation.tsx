"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "WorkMasters",
      href: "/courses/workmasters",
      dropdown: [
        { name: "Work Readiness Bootcamp", href: "/courses/workmasters/readiness-bootcamp" },
        { name: "Apprenticeship & Employability Opportunities", href: "/courses/workmasters/apprenticeship-employability" },
        { name: "Browse All Our Freelance Talent", href: "/courses/workmasters/browse-talent" },
      ],
    },
    {
      name: "CourseMasters",
      href: "/coursemasters",
      dropdown: [
        { name: "Become A Course Creator", href: "/courses/coursemasters/become-creator" },
        { name: "Let Us Build Your Course", href: "/courses/coursemasters/build-your-course" },
        { name: "Browse All Our Courses", href: "https://classroom.qraftacademy.com/" },
      ],
    },
    {
      name: "CapitalMasters",
      href: "/courses/capitalmasters",
      dropdown: [
        { name: "Investor Network", href: "/courses/capitalmasters/investor-network" },
        { name: "Financial Literacy & Business Growth", href: "/courses/capitalmasters/startup-business-growth-hub" },
        { name: "Browse All Our StartUps", href: "/courses/capitalmasters/browse-startups" },
      ],
    },
    {
      name: "TechMasters",
      href: "/courses/techmasters",
      dropdown: [
        { name: "Hackathons And Open Source", href: "/courses/techmasters/hackathons-open-source" },
        { name: "Research & Development", href: "/courses/techmasters/research-development-labs" },
        { name: "Browse All Our Tech Solutions", href: "/courses/techmasters/browse-edtech-solutions" },
      ],
    },
    {
      name: "Our Spaces",
      href: "/spaces",
      dropdown: [
        { name: "QraftLabs", href: "https://labs.qraftacademy.com/" },
        { name: "Qraft Solutions Hub", href: "#" },
      ],
    },
    {
      name: "Future of Work Consortium",
      href: "https://futureofwork.qraftacademy.com/",
      dropdown: [
        { name: "Boards And Committees", href: "https://futureofwork.qraftacademy.com/board" },
        { name: "Policies And Advocacy", href: "https://futureofwork.qraftacademy.com/policies" },
        { name: "Members", href: "https://futureofwork.qraftacademy.com/members" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      dropdown: [
        { name: "Care Economy", href: "/programs/care-economy" },
        { name: "Knowledge Economy", href: "/programs/knowledge-economy" },
        { name: "Digital Economy", href: "/programs/digital-economy" },
        { name: "Gig Economy", href: "/programs/gig-economy" },
        { name: "Creative Economy", href: "/programs/creative-economy" },
        { name: "Innovation Economy", href: "/programs/innovation-economy" },
      ],
    },
    {
      name: "Community",
      href: "/community",
      dropdown: [
        { name: "Future of work tour", href: "/future-of-work-consortium" },
        { name: "Events", href: "#" },
        { name: "Special groups", href: "#" },
      ],
    },
  ];

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 lg:space-x-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div className="relative group" key={item.name}>
                    <Link
                      className="flex items-center text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors text-sm"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                          href={dropdownItem.href}
                          key={dropdownItem.name}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors text-sm"
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              className="md:hidden text-gray-700 hover:text-blue-900 p-2 rounded-md transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
                setOpenDropdown(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 hover:text-gray-700 p-2"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-80px)] bg-white">
            {navItems.map((item) => (
              <div key={item.name} className="mb-3">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium py-3 px-2 transition-colors border-b border-gray-100"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            className="block text-gray-600 hover:text-blue-600 py-2 px-3 transition-colors rounded-md hover:bg-gray-50"
                            href={dropdownItem.href}
                            key={dropdownItem.name}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    className="block text-gray-700 hover:text-blue-600 font-medium py-3 px-2 transition-colors border-b border-gray-100"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
