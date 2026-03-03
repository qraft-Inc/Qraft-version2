"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

type DropdownKey = "services" | "programs" | "platforms";

type NavLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type DropdownItem = {
  type: "dropdown";
  key: DropdownKey;
  label: string;
  items: NavLinkItem[];
};

type LinkItem = {
  type: "link";
  label: string;
  href: string;
  external?: boolean;
};

type NavItem = DropdownItem | LinkItem;

const desktopLinkClass =
  "flex items-center text-neutral-700 active:text-primary-600 sm:hover:text-primary-600 font-semibold px-2 lg:px-3 py-2 rounded-lg transition-all duration-200 active:bg-primary-50 sm:hover:bg-primary-50 text-sm lg:text-base";

const desktopActiveClass = "text-primary-600 bg-primary-50";

const mobileLinkClass =
  "block text-neutral-800 active:text-primary-600 font-semibold py-4 px-4 transition-all duration-200 border-b border-neutral-100 active:bg-primary-50 rounded-lg min-h-[48px] flex items-center";

const Navigation = () => {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";
  const navRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<Record<DropdownKey, boolean>>({
    services: false,
    programs: false,
    platforms: false,
  });

  const navItems: NavItem[] = useMemo(
    () => [
      { type: "link", label: "Home", href: "/" },
      {
        type: "dropdown",
        key: "services",
        label: "Services",
        items: [
          { label: "CourseMasters (Course Development)", href: "/coursemasters" },
          {
            label: "Learning Infrastructure (LMS & Learning Systems)",
            href: "/learning-infrastructure",
          },
          { label: "Consulting", href: "/consulting" },
        ],
      },
      {
        type: "dropdown",
        key: "programs",
        label: "Programs",
        items: [
          { label: "Online Courses", href: "https://lms.qraftacademy.com/", external: true },
          { label: "On-Site Classes", href: "/on-site-classes" },
          { label: "Modern Work Fund", href: "/modern-work-fund" },
        ],
      },
      {
        type: "dropdown",
        key: "platforms",
        label: "Platforms",
        items: [
          { label: "TechMasters", href: "/courses/techmasters" },
          { label: "Platforms for Workers", href: "/platforms" },
        ],
      },
      { type: "link", label: "Future of Work Forum", href: "/future-of-work-forum" },
      { type: "link", label: "About", href: "/about" },
      {
        type: "link",
        label: "Contact",
        href: "/contact",
      },
      { type: "link", label: "Our Hub", href: "/spaces" },
    ],
    []
  );

  const isActiveHref = (href: string): boolean => {
    if (!href.startsWith("/")) {
      return false;
    }

    const normalizedHref = href.split("#")[0];
    if (normalizedHref === "/") {
      return currentPath === "/";
    }

    return currentPath === normalizedHref || currentPath.startsWith(`${normalizedHref}/`);
  };

  const isDropdownActive = (items: NavLinkItem[]): boolean =>
    items.some((item) => isActiveHref(item.href));

  const shouldShowHome = currentPath !== "/";

  const visibleNavItems = shouldShowHome
    ? navItems
    : navItems.filter((item) => item.type !== "link" || item.label !== "Home");

  const closeAllMenus = () => {
    setOpenMenu(null);
    setMobileSubOpen({ services: false, programs: false, platforms: false });
  };

  useEffect(() => {
    closeAllMenus();
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllMenus();
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleDesktopMenu = (key: DropdownKey) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const handleDropdownMouseEnter = (key: DropdownKey) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenMenu(key);
  };

  const handleDropdownMouseLeave = (key: DropdownKey) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenMenu((prev) => (prev === key ? null : prev));
    }, 150);
  };

  const toggleMobileSubmenu = (key: DropdownKey) => {
    setMobileSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderDesktopLink = (item: LinkItem) => {
    const active = isActiveHref(item.href);
    const className = `${desktopLinkClass} ${active ? desktopActiveClass : ""}`;

    if (item.external) {
      return (
        <a className={className} href={item.href} key={item.label} rel="noopener noreferrer" target="_blank">
          {item.label}
        </a>
      );
    }

    return (
      <Link className={className} href={item.href} key={item.label}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200 shadow-sm" ref={navRef}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <nav aria-label="Main navigation" className="hidden md:flex space-x-1 lg:space-x-2">
            {visibleNavItems.map((item) => {
              if (item.type === "link") {
                return renderDesktopLink(item);
              }

              const expanded = openMenu === item.key;
              const active = isDropdownActive(item.items);

              return (
                <div
                  className="relative group"
                  key={item.key}
                  onMouseEnter={() => handleDropdownMouseEnter(item.key)}
                  onMouseLeave={() => handleDropdownMouseLeave(item.key)}
                >
                  <button
                    aria-expanded={expanded}
                    aria-haspopup="menu"
                    className={`${desktopLinkClass} ${active ? desktopActiveClass : ""}`}
                    onClick={() => toggleDesktopMenu(item.key)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setOpenMenu(item.key);
                      }
                      if (event.key === "Escape") {
                        setOpenMenu(null);
                      }
                    }}
                    type="button"
                  >
                    {item.label}
                    <svg
                      aria-hidden="true"
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </button>

                  {expanded && (
                    <div
                      className="absolute left-0 top-full pt-1 w-80 z-20"
                      onMouseEnter={() => handleDropdownMouseEnter(item.key)}
                      onMouseLeave={() => handleDropdownMouseLeave(item.key)}
                      role="menu"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-2">
                        {item.items.map((dropdownItem) => {
                          const itemActive = isActiveHref(dropdownItem.href);
                          const itemClass = `block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl ${
                            itemActive
                              ? "text-primary-600 bg-primary-50"
                              : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                          }`;

                          if (dropdownItem.external) {
                            return (
                              <a
                                className={itemClass}
                                href={dropdownItem.href}
                                key={dropdownItem.label}
                                rel="noopener noreferrer"
                                role="menuitem"
                                target="_blank"
                              >
                                {dropdownItem.label}
                              </a>
                            );
                          }

                          return (
                            <Link
                              className={itemClass}
                              href={dropdownItem.href}
                              key={dropdownItem.label}
                              role="menuitem"
                              onClick={() => setOpenMenu(null)}
                            >
                              {dropdownItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="md:hidden text-neutral-700 active:text-primary-600 p-2 rounded-lg active:bg-primary-50 transition-all duration-200 touch-manipulation min-h-[44px] min-w-[44px]"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setOpenMenu(null);
            }}
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
            {visibleNavItems.map((item) => {
              if (item.type === "link") {
                const active = isActiveHref(item.href);
                const className = `${mobileLinkClass} ${active ? "text-primary-600 bg-primary-50" : ""}`;

                if (item.external) {
                  return (
                    <a
                      className={className}
                      href={item.href}
                      key={item.label}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link className={className} href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileSubOpen[item.key];
              const active = isDropdownActive(item.items);

              return (
                <div className="mb-2" key={item.key}>
                  <button
                    aria-expanded={expanded}
                    aria-haspopup="menu"
                    className={`flex justify-between items-center w-full text-left font-semibold py-4 px-4 transition-all duration-200 border-b border-neutral-100 rounded-lg touch-manipulation min-h-[48px] ${
                      active ? "text-primary-600 bg-primary-50" : "text-neutral-800 active:text-primary-600 active:bg-primary-50"
                    }`}
                    onClick={() => toggleMobileSubmenu(item.key)}
                    type="button"
                  >
                    <span>{item.label}</span>
                    <svg
                      aria-hidden="true"
                      className={`w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </button>

                  {expanded && (
                    <div className="ml-2 mt-1 space-y-1 animate-slide-in" role="menu">
                      {item.items.map((dropdownItem) => {
                        const subActive = isActiveHref(dropdownItem.href);
                        const subClass = `block py-3 px-4 transition-all duration-200 rounded-lg font-medium min-h-[48px] flex items-center ${
                          subActive
                            ? "text-primary-600 bg-primary-50"
                            : "text-neutral-600 active:text-primary-600 active:bg-primary-50"
                        }`;

                        if (dropdownItem.external) {
                          return (
                            <a
                              className={subClass}
                              href={dropdownItem.href}
                              key={dropdownItem.label}
                              rel="noopener noreferrer"
                              role="menuitem"
                              target="_blank"
                              onClick={() => setMobileOpen(false)}
                            >
                              {dropdownItem.label}
                            </a>
                          );
                        }

                        return (
                          <Link
                            className={subClass}
                            href={dropdownItem.href}
                            key={dropdownItem.label}
                            role="menuitem"
                            onClick={() => setMobileOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
