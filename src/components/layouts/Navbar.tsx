"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useUI } from "@/hooks/useUI";
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaHome, FaUser, FaFolder, FaCommentDots, FaLaptopCode } from "react-icons/fa";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/lib/constants";


const getNavIcon = (href: string) => {
  switch (href) {
    case "home":
      return FaHome;
    case "tech-stack":
      return FaLaptopCode;
    case "about-me":
      return FaUser;
    case "projects":
      return FaFolder;
    case "contact":
      return FaCommentDots;
    default:
      return null;
  }
};


export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isModalOpen, theme, toggleTheme } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      const currentScrollY = window.scrollY;
      const sections = ["home", "tech-stack", "projects", "contact"];
      const scrollPosition = currentScrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + currentScrollY;
          const offsetHeight = rect.height;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/about-me") {
      setActiveSection("about-me");
    } else if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
    } else if (pathname === "/") {
      setActiveSection("home");
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (id === "about-me" || id === "projects") {
      setIsMobileMenuOpen(false);
      return;
    }

    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      }
    }

    setIsMobileMenuOpen(false);
  };

  const shouldShowButton = !isModalOpen && !isMobileMenuOpen;

  const navLinks = NAVIGATION_LINKS;

  return (
    <>
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-[100] pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`group pointer-events-auto w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-none border border-brand-base bg-background text-brand-base shadow-[2px_2px_0px_0px_var(--color-base)] md:shadow-[4px_4px_0px_0px_var(--color-base)] hover:shadow-[3px_3px_0px_0px_var(--color-base)] md:hover:shadow-[6px_6px_0px_0px_var(--color-base)] hover:-translate-x-[1px] md:hover:-translate-x-0.5 hover:-translate-y-[1px] md:hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background ${shouldShowButton ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
            }`}
          aria-label="Toggle Menu"
        >
          <div className="w-4 h-3.5 md:w-5 md:h-3.5 flex flex-col justify-between relative">
            <span
              className={`block w-full h-[2px] rounded-full bg-brand-base transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
            />
            <span
              className={`block w-full h-[2px] rounded-full bg-brand-base transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-full h-[2px] rounded-full bg-brand-base transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/50 backdrop-blur-md z-30 transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Sidebar Menu */}
      <div
        className={`fixed top-0 bottom-0 left-0 h-[100dvh] w-full sm:w-[20rem] md:w-[23.75rem] bg-background border-r-2 border-brand-base z-40 flex flex-col justify-between p-0 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Row 1: Close Button & Theme Toggle */}
        <div
          className={`w-full h-[calc(5rem+env(safe-area-inset-top))] md:h-24 pt-[env(safe-area-inset-top)] flex justify-between items-center px-8 md:px-12 border-b border-brand-base/15 bg-background transition-all duration-300 transform ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          style={{ transitionDelay: "50ms" }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-brand-base hover:text-brand-accent transition-colors cursor-pointer focus:outline-none text-sm font-bold uppercase tracking-[0.2em] group/close"
            aria-label="Close Menu"
          >
            <span>Close</span>
            <FaTimes size={14} className="group-hover/close:rotate-90 transition-transform duration-300" />
          </button>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border border-brand-base/15 hover:border-brand-base text-brand-base bg-brand-highlight/20 hover:bg-brand-highlight/40 shadow-[2px_2px_0px_0px_var(--color-base)] hover:shadow-[4px_4px_0px_0px_var(--color-base)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 cursor-pointer focus:outline-none group/theme"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <FaSun size={16} className="text-amber-500 group-hover/theme:rotate-45 transition-transform duration-500" />
            ) : (
              <FaMoon size={16} className="text-indigo-400 group-hover/theme:-rotate-12 transition-transform duration-500" />
            )}
          </button>
        </div>

        {/* Rows 2 to 5: Navigation Links */}
        <nav className="flex flex-col flex-1 w-full">
          {navLinks.map((item, idx) => {
            const href = item.href === "about-me" ? "/about-me" : (item.href === "projects" ? "/projects" : (pathname === "/" ? `#${item.href}` : `/#${item.href}`));
            const isActive = activeSection === item.href;
            const Icon = getNavIcon(item.href);

            return (
              <Link
                key={item.name}
                href={href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex-1 w-full flex justify-between items-center px-8 md:px-12 border-b border-brand-base/15 transition-all duration-500 transform relative group cursor-pointer ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                  } ${isActive ? "bg-brand-highlight/30" : "bg-transparent hover:bg-brand-highlight/20"}`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <span className={`text-base font-bold tracking-wide ${isActive ? "text-brand-base" : "text-brand-base/60 group-hover:text-brand-base"}`}>
                  {item.name}
                </span>
                {Icon && (
                  <Icon className={`text-base ${isActive ? "text-brand-base" : "text-brand-base/40 group-hover:text-brand-base"}`} />
                )}
                {isActive && (
                  <span className="absolute right-0 top-0 bottom-0 w-[6px] bg-brand-base" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Row 6: Footer Area with Theme Toggle and Socials */}
        <div
          className={`w-full h-[calc(5rem+env(safe-area-inset-bottom))] md:h-24 pb-[env(safe-area-inset-bottom)] flex justify-around items-center px-8 md:px-12 bg-background border-t border-brand-base/15 transition-all duration-500 transform ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-base/60 hover:text-brand-base transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>


          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-base/60 hover:text-brand-base transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={SOCIAL_LINKS.email}
            className="text-brand-base/60 hover:text-brand-base transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
