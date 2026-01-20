"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
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

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl flex items-center justify-between px-8 py-4 bg-brand-base/80 backdrop-blur-md rounded-full text-white shadow-2xl z-50 border border-white/10 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[200%]"
        }`}
    >
      {/* 1. Left: Logo */}
      <div className="text-xl font-bold tracking-tight">
        <Link
          href="/"
          className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Gemintang
        </Link>
      </div>

      {/* 2. Center: Navigation Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
        {['Home', 'Services', 'Projects', 'About Me', 'FAQs'].map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
          const isActive = pathname === path;

          return (
            <Link
              key={item}
              href={item === 'Home' ? '/' : path}
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

      {/* 3. Right: Contact Button */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-full bg-white text-brand-base font-semibold text-sm hover:bg-brand-accent hover:text-white transition-all shadow-md"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
