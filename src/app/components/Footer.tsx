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
    <footer className="w-full bg-transparent backdrop-blur-xl text-brand-base py-16 md:py-24 border-t border-brand-base/10 shadow-2xl mt-0 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

          {/* LEFT SIDE: Info, Resume, Icons */}
          <div className="w-full md:w-5/12 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl md:text-4xl font-black text-brand-base inline-block uppercase tracking-tighter">
                  Gemintang
                </h3>
                {/* Social Icons for Mobile */}
                <div className="flex md:hidden gap-3">
                  <a href="https://github.com/gemintangsf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-brand-base/20 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all">
                    <FaGithub size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/gemintangsf/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-brand-base/20 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="mailto:gemintangsfurqon@gmail.com" className="p-2 rounded-none border border-brand-base/20 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all">
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>

              <p className="text-brand-base/60 leading-relaxed text-base font-light max-w-md">
                A Software Developer with 3 years of experience specializing in Backend, Frontend, and Mobile Development.
                Focusing on building elegant, performant, and scalable solutions.
              </p>

              <a
                href="https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-base text-brand-on-surface border border-brand-base rounded-none text-sm font-bold hover:bg-transparent hover:text-brand-base transition-all shadow-xl w-fit uppercase tracking-widest"
              >
                <FaFileAlt />
                My Resume
              </a>
            </div>

            {/* Social Icons - Desktop Only */}
            <div className="hidden md:flex gap-4 mt-12">
              <a href="https://github.com/gemintangsf" target="_blank" rel="noopener noreferrer" className="p-4 rounded-none border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gemintangsf/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-none border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:gemintangsfurqon@gmail.com" className="p-4 rounded-none border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-brand-on-surface transition-all">
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
                            className="text-brand-base/50 hover:text-brand-base transition-colors text-sm flex items-center gap-3 group w-fit uppercase tracking-widest font-medium"
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
                          <a href="mailto:gemintangsfurqon@gmail.com" className="text-brand-base/80 hover:text-brand-base transition-colors text-sm font-medium">
                            gemintangsfurqon@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-3 rounded-none bg-brand-base/5 border border-brand-base/10">
                          <FaPhone size={14} />
                        </div>
                        <div>
                          <span className="block text-brand-base/30 text-[10px] font-bold mb-1 uppercase tracking-[0.2em]">Phone</span>
                          <a href="tel:+6282118397901" className="text-brand-base/80 hover:text-brand-base transition-colors text-sm font-medium">
                            +62 821-1839-7901
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-3 rounded-none bg-brand-base/5 border border-brand-base/10">
                          <FaMapMarkerAlt size={14} />
                        </div>
                        <div>
                          <span className="block text-brand-base/30 text-[10px] font-bold mb-1 uppercase tracking-[0.2em]">Location</span>
                          <span className="text-brand-base/80 text-sm font-medium">Jakarta, Indonesia</span>
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
                © {new Date().getFullYear()} Gemintang Sangkaji Furqon.
              </p>
              <div className="flex gap-8">
                <span className="text-[10px] text-brand-base/20 uppercase tracking-widest">Designed by Gemintang</span>
                <span className="text-[10px] text-brand-base/20 uppercase tracking-widest cursor-pointer hover:text-brand-base transition-colors">Privacy Policy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
