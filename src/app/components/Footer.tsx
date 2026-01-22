"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt, FaChevronDown } from "react-icons/fa";

import { useUI } from "../context/UIContext";

export default function Footer() {
  const { isModalOpen } = useUI();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  if (isModalOpen) return null;

  return (
    <footer className="w-[95%] max-w-7xl mx-auto mb-6 rounded-3xl bg-brand-base/90 backdrop-blur-md text-white p-6 md:p-8 lg:p-12 border border-white/10 shadow-2xl mt-20 relative z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">

          {/* LEFT SIDE: Info, Resume, Icons */}
          <div className="w-full md:w-5/12 flex flex-col justify-between md:border-r md:border-white/10 md:pr-6 lg:pr-12 mb-8 md:mb-0">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block">
                  Gemintang
                </h3>
                {/* Social Icons for Mobile - Visible here to save space at bottom */}
                <div className="flex md:hidden gap-3">
                  <a href="https://github.com/gemintangsf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                    <FaGithub size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/gemintangsf/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="mailto:gemintangsfurqon@gmail.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed text-sm">
                I am a Software Developer with 3 years of experience specializing in Backend, Frontend, and Mobile Development.
                Proficient in analyzing business flows and translating them into robust, scalable applications.
              </p>

              <a
                href="https://drive.google.com/file/d/1URcPQaEpgrmk-Nd4cOvpgJ5HjNmhBbRQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-brand-base transition-all shadow-md transform hover:scale-[1.02] w-fit"
              >
                <FaFileAlt />
                My Resume
              </a>
            </div>

            {/* Social Icons - Desktop Only */}
            <div className="hidden md:flex gap-4 pt-8 md:pt-0">
              <a href="https://github.com/gemintangsf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-brand-accent transition-all border border-white/10">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gemintangsf/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-brand-accent transition-all border border-white/10">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:gemintangsfurqon@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-brand-accent transition-all border border-white/10">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Menu/Contact & Copyright */}
          <div className="w-full md:w-7/12 flex flex-col justify-between md:pl-6 lg:pl-12">
            {/* Top Right: Quick Menu & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

              {/* Quick Menus Accordion */}
              <div className="border-b border-white/10 md:border-none pb-4 md:pb-0">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-full flex justify-between items-center text-lg font-bold text-white mb-2 md:mb-6 md:cursor-default"
                >
                  Quick Menu
                  <FaChevronDown className={`md:hidden transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} size={14} />
                </button>

                <AnimatePresence>
                  {/* Mobile uses AnimatePresence, Desktop always shows content (using hidden logic or just media queries) */}
                  <motion.div
                    initial={false}
                    animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
                    className="overflow-hidden md:!h-auto md:!opacity-100"
                  >
                    <ul className="space-y-3 pt-2 md:pt-0">
                      {['Home', 'Services', 'Projects', 'About Me', 'FAQs'].map((item) => (
                        <li key={item}>
                          <Link
                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-white/80 hover:text-brand-accent transition-colors text-sm flex items-center gap-2 group w-fit"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-brand-accent transition-colors" />
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Contact Info Accordion */}
              <div className="border-b border-white/10 md:border-none pb-4 md:pb-0">
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="w-full flex justify-between items-center text-lg font-bold text-white mb-2 md:mb-6 md:cursor-default"
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
                    <ul className="space-y-5 pt-2 md:pt-0">
                      <li className="flex items-start gap-4 text-white/90 text-sm group">
                        <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                          <FaEnvelope className="text-brand-accent" />
                        </div>
                        <div>
                          <span className="block text-white/50 text-xs font-medium mb-1 uppercase tracking-wider">Email</span>
                          <a href="mailto:gemintangsfurqon@gmail.com" className="hover:text-brand-accent transition-colors font-medium break-all">
                            gemintangsfurqon@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 text-white/90 text-sm group">
                        <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                          <FaPhone className="text-brand-accent" />
                        </div>
                        <div>
                          <span className="block text-white/50 text-xs font-medium mb-1 uppercase tracking-wider">Phone</span>
                          <a href="tel:+6282118397901" className="hover:text-brand-accent transition-colors font-medium">
                            +62 821-1839-7901
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 text-white/90 text-sm group">
                        <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                          <FaMapMarkerAlt className="text-brand-accent" />
                        </div>
                        <div>
                          <span className="block text-white/50 text-xs font-medium mb-1 uppercase tracking-wider">Address</span>
                          <span className="font-medium">Pulo Gadung, East Jakarta,<br />Jakarta, Indonesia</span>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden md:block h-px w-full bg-white/10 my-8" />

            {/* Bottom Right: Copyright */}
            <div className="pt-8 md:pt-0 flex justify-start items-end">
              <p className="text-white/40 text-sm">
                Copyright © {new Date().getFullYear()} Gemintang Sangkaji Furqon. All rights reserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
