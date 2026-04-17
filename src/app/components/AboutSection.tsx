"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id="about-me" className="min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center gap-2 mb-4"
      >
        <div className="px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium flex items-center gap-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          My Story
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-brand-base uppercase tracking-tighter"
        >
          About <span className="text-brand-accent">Me</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-12 items-center text-lg text-brand-base leading-relaxed"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-none overflow-hidden shadow-2xl border-4 border-brand-base transition-transform duration-500">
              <Image
                src="/assets/pp.jpeg"
                alt="Gemintang Profile"
                fill
                className="object-cover scale-150 object-[center_15%] transition-all duration-700"
                priority
              />
            </div>
          </motion.div>

          <div className="space-y-6 text-center md:text-left">
            <p className="font-light">
              Hi, I’m{" "}
              <span className="font-black text-brand-primary text-xl uppercase tracking-tighter">
                Gemintang Sangkaji Furqon
              </span>
              , a Software Engineer focused on building reliable mobile and web
              applications.
            </p>

            <p className="font-light">
              Currently working as a{" "}
              <span className="font-bold text-brand-primary uppercase tracking-widest text-sm">
                Full Stack & Mobile Developer
              </span>{" "}
              at PT Javabooks Indonesia, developing retail POS systems, mobile apps,
              and AI-powered search platforms.
            </p>

            <p className="font-light">
              Previously involved in enterprise systems at Telkom Indonesia, which shaped
              my approach to clean code, scalability, and production-ready solutions.
            </p>

            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">
              Tech stack: Flutter, NestJS, Next.js, Python, PostgreSQL, MySQL.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-base text-background font-bold rounded-none shadow-lg hover:invert transition-all duration-300 uppercase tracking-widest text-sm"
              >
                <FiDownload className="text-xl" />
                <span>My Resume</span>
              </motion.a>
              <Link
                href="/about-me"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-brand-base border border-brand-base font-bold rounded-none shadow-lg hover:bg-brand-base hover:text-background transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Read Full Biography
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
