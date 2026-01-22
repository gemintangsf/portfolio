"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Search/Profile Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 mb-6"
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
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-brand-base"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-12 items-start text-lg text-brand-base leading-relaxed"
        >
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-shrink-0 mx-auto md:mx-0"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/50">
              <Image
                src="/assets/pp.jpeg"
                alt="Gemintang Profile"
                fill
                className="object-cover scale-150 object-[center_15%]"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <p>
              Hi, I’m{" "}
              <span className="font-bold text-brand-primary text-xl">
                Gemintang Sangkaji Furqon
              </span>
              , a Software Engineer focused on building reliable mobile and web
              applications.
            </p>

            <p>
              Currently working as a{" "}
              <span className="font-semibold text-brand-primary">
                Full Stack & Mobile Developer
              </span>{" "}
              at PT Javabooks Indonesia, developing retail POS systems, mobile apps,
              and AI-powered search platforms.
            </p>

            <p>
              Previously involved in enterprise systems at Telkom Indonesia, which shaped
              my approach to clean code, scalability, and production-ready solutions.
            </p>

            <p className="text-base opacity-90 italic">
              Tech stack: Flutter, NestJS, Next.js, React, PostgreSQL, MySQL.
            </p>


            <div className="pt-2">
              <motion.a
                href="https://drive.google.com/file/d/1Kd-t71NEdlQPdplKcFczwNIrcTM6S0kd/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white font-medium rounded-full shadow-lg hover:bg-brand-accent transition-all duration-300"
              >
                <FiDownload className="text-xl" />
                <span>My Resume</span>
              </motion.a>
            </div>
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
}
