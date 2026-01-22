"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useUI } from "../context/UIContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { isModalOpen } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu on scroll down
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Hide navbar if modal is open OR if scrolled down logic applies
  const shouldShow = isVisible && !isModalOpen;

  const navLinks = ['Home', 'Services', 'Projects', 'About Me', 'FAQs'];

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[95%] max-w-7xl flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-brand-base/80 backdrop-blur-md rounded-full text-white shadow-2xl z-50 border border-white/10 transition-transform duration-300 ${shouldShow ? "translate-y-0" : "-translate-y-[200%]"
          }`}
      >
        {/* 1. Left: Logo */}
        <div className="text-lg md:text-xl font-bold tracking-tight z-50">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Gemintang
          </Link>
        </div>

        {/* 2. Center: Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-medium lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navLinks.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
            const isActive = pathname === path;

            return (
              <Link
                key={item}
                href={path}
                className={`${isActive
                  ? 'text-brand-accent font-semibold scale-105'
                  : 'text-white hover:text-brand-accent'
                  } transition-all duration-300 relative group`}
              >
                {item}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* 3. Right: Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-white text-brand-base font-semibold text-sm hover:bg-brand-accent hover:text-white transition-all shadow-md"
          >
            Contact
          </Link>
        </div>

        {/* 4. Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5 relative">
            <span
              className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-base/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {navLinks.map((item, idx) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
          const isActive = pathname === path;

          return (
            <Link
              key={item}
              href={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-all duration-300 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${isActive ? "text-brand-accent" : "text-white hover:text-brand-accent"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item}
            </Link>
          );
        })}

        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`mt-4 px-8 py-3 rounded-full bg-white text-brand-base font-bold text-lg hover:scale-105 transition-all shadow-lg transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
        >
          Contact Me
        </Link>
      </div>
    </>
  );
}
