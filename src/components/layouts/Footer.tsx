"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt, FaChevronDown } from "react-icons/fa";

import { useUI } from "@/hooks/useUI";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";


export default function Footer() {
  const { isModalOpen } = useUI();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  if (isModalOpen) return null;

  return (
    <footer className="w-full bg-transparent backdrop-blur-xl text-brand-base py-16 md:py-24 border-t border-brand-base/10 shadow-2xl mt-0 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

          {/* LEFT SIDE: Info, Resume, Icons */}
          <div className="w-full md:w-5/12 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl md:text-4xl font-black text-brand-base inline-block uppercase tracking-tighter">
                  {SITE_CONFIG.shortName}
                </h3>
                {/* Social Icons for Mobile */}
                <div className="flex md:hidden gap-4">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-brand-base/20 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <FaGithub size={16} />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-brand-base/20 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <FaLinkedin size={16} />
                  </a>
                  <a href={SOCIAL_LINKS.email} className="p-2 rounded-none border border-brand-base/20 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>

              <p className="text-brand-base/60 leading-relaxed text-base font-light max-w-md">
                A Software Developer specializing in Backend, Frontend, and Mobile Development.
                Focusing on building elegant, performant, and scalable solutions.
              </p>

              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-4 rounded-none font-bold uppercase tracking-widest text-sm md:text-base transition-all duration-300 border bg-brand-base text-background border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:invert hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background w-fit"
              >
                <FaFileAlt />
                My Resume
              </a>
            </div>

            {/* Social Icons - Desktop Only */}
            <div className="hidden md:flex gap-4 mt-12">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-none border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <FaGithub size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-none border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <FaLinkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.email} className="p-4 rounded-none border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Menu/Contact & Copyright */}
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

              {/* Quick Menus */}
              <div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-full flex justify-between items-center text-xl font-bold text-brand-base mb-6 md:mb-8 md:cursor-default uppercase tracking-[0.2em]"
                >
                  Quick Menu
                  <FaChevronDown className={`md:hidden transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} size={14} />
                </button>

                <AnimatePresence>
                  <motion.div
                    initial={false}
                    animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
                    className="overflow-hidden md:!h-auto md:!opacity-100"
                  >
                    <ul className="space-y-4">
                      {['Home', 'Services', 'Projects', 'About Me', 'FAQs'].map((item) => (
                        <li key={item}>
                          <Link
                            href={item === 'Home' ? '/#home' : `/#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-brand-base/50 hover:text-brand-base transition-colors text-sm flex items-center gap-4 group w-fit uppercase tracking-widest font-medium"
                          >
                            <span className="w-6 h-px bg-brand-base/20 group-hover:w-8 group-hover:bg-brand-base transition-all" />
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Contact Info */}
              <div>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="w-full flex justify-between items-center text-xl font-bold text-brand-base mb-6 md:mb-8 md:cursor-default uppercase tracking-[0.2em]"
                >
                  Contact Me
                  <FaChevronDown className={`md:hidden transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} size={14} />
                </button>

                <AnimatePresence>
                  <motion.div
                    initial={false}
                    animate={{ height: isContactOpen ? 'auto' : 0, opacity: isContactOpen ? 1 : 0 }}
                    className="overflow-hidden md:!h-auto md:!opacity-100"
                  >
                    <ul className="space-y-8">
                      <li className="flex items-start gap-4">
                        <div className="p-3 rounded-none bg-brand-base/5 border border-brand-base/10">
                          <FaEnvelope size={14} />
                        </div>
                        <div>
                          <span className="block text-brand-base/30 text-[10px] font-bold mb-1 uppercase tracking-[0.2em]">Email</span>
                          <a href={SOCIAL_LINKS.email} className="text-brand-base/80 hover:text-brand-base transition-colors text-sm font-medium">
                            {SITE_CONFIG.email}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-3 rounded-none bg-brand-base/5 border border-brand-base/10">
                          <FaPhone size={14} />
                        </div>
                        <div>
                          <span className="block text-brand-base/30 text-[10px] font-bold mb-1 uppercase tracking-[0.2em]">Phone</span>
                          <a href={SOCIAL_LINKS.phone} className="text-brand-base/80 hover:text-brand-base transition-colors text-sm font-medium">
                            {SITE_CONFIG.phone}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-3 rounded-none bg-brand-base/5 border border-brand-base/10">
                          <FaMapMarkerAlt size={14} />
                        </div>
                        <div>
                          <span className="block text-brand-base/30 text-[10px] font-bold mb-1 uppercase tracking-[0.2em]">Location</span>
                          <span className="text-brand-base/80 text-sm font-medium">{SITE_CONFIG.location}</span>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="mt-20 pt-12 border-t border-brand-base/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-brand-base/30 text-xs uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} {SITE_CONFIG.name}.
              </p>
              <div className="flex gap-8">
                <span className="text-[10px] text-brand-base/20 uppercase tracking-widest">Designed by {SITE_CONFIG.shortName}</span>
                <span className="text-[10px] text-brand-base/20 uppercase tracking-widest cursor-pointer hover:text-brand-base transition-colors">Privacy Policy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
