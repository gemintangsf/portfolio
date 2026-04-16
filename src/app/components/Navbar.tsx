"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useUI } from "../context/UIContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavClickScrolling, setIsNavClickScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isModalOpen, isLoaded, theme, toggleTheme } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Visibility logic (hide on scroll down)
      // Only hide if NOT scrolling because of a nav click
      if (!isNavClickScrolling) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Check if we are near the bottom of the page
          const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (currentScrollY < scrollableHeight - 50) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      } else {
        // Keep it visible during nav click scroll
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // 2. Scrollspy logic (active section detection)
      const sections = ["home", "services", "projects", "about-me", "faqs", "contact"];
      const scrollPosition = currentScrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isNavClickScrolling]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    // If we are on the home page, handle scroll manually to ensure it triggers
    // even if the hash is already set to this ID
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash without triggering a jump
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      }
    }

    // Clear existing timeout to prevent state conflicts
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    setIsNavClickScrolling(true);
    setIsMobileMenuOpen(false);

    // Reset after transition usually takes ~800ms
    scrollTimeoutRef.current = setTimeout(() => {
      setIsNavClickScrolling(false);
      scrollTimeoutRef.current = null;
    }, 1000);
  };

  const shouldShow = isVisible && !isModalOpen;

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'About Me', href: 'about-me' },
    { name: 'FAQs', href: 'faqs' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className={`w-full border-b border-brand-base/10 bg-transparent backdrop-blur-xl pointer-events-auto transition-transform duration-500 ${shouldShow ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
            {/* 1. Left: Logo */}
            <div className="text-lg md:text-xl font-bold tracking-tighter z-50">
              <Link
                href="/#home"
                onClick={(e) => {
                  handleNavClick(e, "home");
                }}
                className="text-brand-base hover:opacity-70 transition-opacity uppercase"
              >
                Gemintang
              </Link>
            </div>

            {/* 2. Center: Desktop Navigation Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-medium lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              {navLinks.map((item) => {
                const href = pathname === '/' ? `#${item.href}` : `/#${item.href}`;
                const isActive = activeSection === item.href;

                return (
                  <Link
                    key={item.name}
                    href={href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`${isActive
                      ? 'text-brand-base font-bold scale-105'
                      : 'text-brand-base/60 hover:text-brand-base'
                      } transition-all duration-300 relative group uppercase tracking-widest`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-base rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* 3. Right: Desktop Contact Button & Theme Toggle */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleTheme}
                className="p-3 text-brand-base hover:bg-brand-base/10 transition-colors rounded-full relative group"
                aria-label="Toggle Theme"
              >
                <div className="relative w-5 h-5">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: theme === 'dark' ? 1 : 0,
                      rotate: theme === 'dark' ? 0 : 90,
                      opacity: theme === 'dark' ? 1 : 0
                    }}
                    className="absolute inset-0"
                  >
                    <FaSun size={20} />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{
                      scale: theme === 'light' ? 1 : 0,
                      rotate: theme === 'light' ? 0 : -90,
                      opacity: theme === 'light' ? 1 : 0
                    }}
                    className="absolute inset-0"
                  >
                    <FaMoon size={20} />
                  </motion.div>
                </div>
              </button>

              <Link
                href={pathname === '/' ? '#contact' : '/#contact'}
                onClick={(e) => handleNavClick(e, "contact")}
                className={`px-5 py-2.5 rounded-none font-bold text-sm transition-all shadow-md uppercase tracking-widest border ${activeSection === 'contact'
                  ? 'bg-transparent text-brand-base border-brand-base scale-105'
                  : 'bg-brand-base text-brand-on-surface border-brand-base hover:invert'
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* 4. Mobile Hamburger Button */}
            <button
              className="md:hidden text-brand-base focus:outline-none z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5 relative">
                <span
                  className={`block w-full h-0.5 bg-brand-base rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                  className={`block w-full h-0.5 bg-brand-base rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`block w-full h-0.5 bg-brand-base rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <button
          onClick={toggleTheme}
          className="p-4 text-brand-base hover:bg-brand-base/10 transition-colors rounded-full mb-4"
          aria-label="Toggle Theme"
        >
          <div className="flex items-center gap-3 font-bold uppercase tracking-[0.2em]">
            {theme === 'dark' ? (
              <><FaSun size={24} /> <span>Light Mode</span></>
            ) : (
              <><FaMoon size={24} /> <span>Dark Mode</span></>
            )}
          </div>
        </button>

        {navLinks.map((item, idx) => {
          const href = pathname === '/' ? `#${item.href}` : `/#${item.href}`;
          const isActive = activeSection === item.href;

          return (
            <Link
              key={item.name}
              href={href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-2xl font-black transition-all duration-300 transform uppercase tracking-[0.2em] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${isActive ? "text-brand-base" : "text-brand-base/40 hover:text-brand-base"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.name}
            </Link>
          );
        })}

        <Link
          href={pathname === '/' ? '#contact' : '/#contact'}
          onClick={(e) => handleNavClick(e, "contact")}
          className={`mt-4 px-10 py-4 rounded-none font-bold text-lg transition-all shadow-lg transform border ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } ${activeSection === 'contact'
              ? 'bg-transparent text-brand-base border-brand-base'
              : 'bg-brand-base text-brand-on-surface border-brand-base hover:invert'
            }`}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
        >
          Contact Me
        </Link>
      </div>

    </>
  );
}
