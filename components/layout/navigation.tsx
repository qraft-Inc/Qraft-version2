"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PROPOSAL_HREF, TALENTMASTERS_HREF } from "@/lib/proposal";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "CourseMasters™", href: "/#coursemasters" },
  { label: "TalentMasters™", href: TALENTMASTERS_HREF },
  { label: "Institutional Impact", href: "/#partners" },
  { label: "About Us", href: "/about" },
];

const desktopLinkClass =
  "flex items-center text-neutral-700 active:text-primary-600 sm:hover:text-primary-600 font-semibold px-2 lg:px-3 py-2 rounded-lg transition-all duration-200 active:bg-primary-50 sm:hover:bg-primary-50 text-sm lg:text-base";

const desktopActiveClass = "text-primary-600 bg-primary-50";

const mobileLinkClass =
  "block text-neutral-800 active:text-primary-600 font-semibold py-4 px-4 transition-all duration-200 border-b border-neutral-100 active:bg-primary-50 rounded-lg min-h-[48px] flex items-center";

const Navigation = () => {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Homepage section anchors (/#...) never mark themselves active
  const isActiveHref = (href: string): boolean =>
    !href.includes("#") && (currentPath === href || currentPath.startsWith(`${href}/`));

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <nav aria-label="Main navigation" className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                className={`${desktopLinkClass} ${isActiveHref(item.href) ? desktopActiveClass : ""}`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="hidden md:inline-flex btn-primary px-4 lg:px-5 py-2.5 text-sm lg:text-base whitespace-nowrap" href={PROPOSAL_HREF}>
            <span className="lg:hidden">Request Proposal</span>
            <span className="hidden lg:inline">Request Institutional Proposal</span>
          </Link>

          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="md:hidden text-neutral-700 active:text-primary-600 p-2 rounded-lg active:bg-primary-50 transition-all duration-200 touch-manipulation min-h-[44px] min-w-[44px]"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white animate-fade-in">
          <div className="flex justify-end p-4">
            <button
              aria-label="Close menu"
              className="text-neutral-500 active:text-neutral-700 p-2 rounded-lg active:bg-neutral-100 transition-all touch-manipulation min-h-[44px] min-w-[44px]"
              onClick={() => setMobileOpen(false)}
              type="button"
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="px-4 py-2 overflow-y-auto max-h-[calc(100vh-80px)] bg-white">
            {navItems.map((item) => (
              <Link
                className={`${mobileLinkClass} ${isActiveHref(item.href) ? "text-primary-600 bg-primary-50" : ""}`}
                href={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="btn-primary mt-6 mb-4 w-full text-center min-h-[48px] flex items-center justify-center"
              href={PROPOSAL_HREF}
              onClick={() => setMobileOpen(false)}
            >
              Request Institutional Proposal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
