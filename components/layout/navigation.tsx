"use client";

import Link from "next/link";
import React, { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  dropdown?: Array<{
    name: string;
    href: string;
    subItems?: Array<{
      name: string;
      href: string;
    }>;
  }>;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "CourseMasters", href: "/coursemasters" },
    { name: "Online Courses", href: "https://classroom.qraftacademy.com/" },
    { name: "On-Site Classes", href: "/on-site-classes" },
    { name: "TechMasters", href: "/courses/techmasters" },
    {
      name: "Our Platforms For Workers",
      href: "/platforms",
    },
    {
      name: "Future of Work Forum",
      href: "/future-of-work-forum",
    },
    {
      name: "Our Hub",
      href: "/spaces",
    },
  ];

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div className="relative group" key={item.name}>
                  <Link
                    className="flex items-center text-neutral-700 active:text-primary-600 sm:hover:text-primary-600 font-semibold px-2 lg:px-3 py-2 rounded-lg transition-all duration-200 active:bg-primary-50 sm:hover:bg-primary-50 text-sm lg:text-base"
                    href={item.href}
                  >
                    {item.name}
                    <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-neutral-100">
                    <div className="p-2">
                      {item.dropdown.map((dropdownItem: any, idx: number) => (
                        <div key={dropdownItem.name}>
                          <Link
                            className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl ${
                              dropdownItem.subItems 
                                ? 'text-primary-600 hover:bg-primary-50 font-bold' 
                                : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                            href={dropdownItem.href}
                          >
                            {dropdownItem.name}
                          </Link>
                          {dropdownItem.subItems && (
                            <div className="ml-4 space-y-1 mb-2">
                              {dropdownItem.subItems.map((subItem: any) => (
                                <Link
                                  key={subItem.name}
                                  className="block px-3 py-2 text-xs text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                                  href={subItem.href}
                                >
                                  • {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  className="flex items-center text-neutral-700 active:text-primary-600 sm:hover:text-primary-600 font-semibold px-2 lg:px-3 py-2 rounded-lg transition-all duration-200 active:bg-primary-50 sm:hover:bg-primary-50 text-sm lg:text-base"
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
            className="md:hidden text-neutral-700 active:text-primary-600 p-2 rounded-lg active:bg-primary-50 transition-all duration-200 touch-manipulation min-h-[44px] min-w-[44px]"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white animate-fade-in">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              className="text-neutral-500 active:text-neutral-700 p-2 rounded-lg active:bg-neutral-100 transition-all touch-manipulation min-h-[44px] min-w-[44px]"
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
          <div className="px-4 py-2 overflow-y-auto max-h-[calc(100vh-80px)] bg-white">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full text-left text-neutral-800 active:text-primary-600 font-semibold py-4 px-4 transition-all duration-200 border-b border-neutral-100 active:bg-primary-50 rounded-lg touch-manipulation min-h-[48px]"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
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
                      <div className="ml-2 mt-1 space-y-1 animate-slide-in">
                        {item.dropdown.map((dropdownItem: any) => (
                          <div key={dropdownItem.name}>
                            <Link
                              className={`block py-3 px-4 transition-all duration-200 rounded-lg font-medium min-h-[48px] flex items-center ${
                                dropdownItem.subItems 
                                  ? 'text-primary-600 active:bg-primary-50 font-bold' 
                                  : 'text-neutral-600 active:text-primary-600 active:bg-primary-50'
                              }`}
                              href={dropdownItem.href}
                              onClick={() => !dropdownItem.subItems && setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                            {dropdownItem.subItems && (
                              <div className="ml-4 space-y-1 mt-1">
                                {dropdownItem.subItems.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    className="block text-neutral-600 active:text-primary-600 py-2 px-3 transition-all duration-200 rounded-lg active:bg-primary-50 text-sm min-h-[44px] flex items-center"
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    • {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    className="block text-neutral-800 active:text-primary-600 font-semibold py-4 px-4 transition-all duration-200 border-b border-neutral-100 active:bg-primary-50 rounded-lg min-h-[48px] flex items-center"
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
