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
          <div className="space-y-5 text-center md:text-left font-light text-[15px] md:text-base">
            <p>
              <strong className="font-bold text-brand-primary">Gemintang Sangkaji Furqon</strong> is a Software Engineer specializing in backend, frontend, and mobile application development. Based in Jakarta, Indonesia, he focuses on building scalable, reliable, and high-performance digital solutions for enterprise and retail environments.
            </p>
            <p>
              Currently, he serves as a <strong className="font-bold">Full Stack & Mobile Developer</strong> at PT Javabooks Indonesia. In this role, he leads the technical development of comprehensive retail Point of Sale (POS) systems, maintains client-facing mobile applications, and actively integrates AI-powered search functionalities into scalable retail platforms. 
            </p>
            <p>
              His technical methodology is grounded in strong architectural principles, shaped by his previous enterprise-level experience at Telkom Indonesia. During his tenure, he contributed to the development of production-ready backend systems, enforcing rigorous code quality and high-availability infrastructure design.
            </p>
            <p>
              His primary technology stack includes <strong className="font-bold">Flutter</strong> for cross-platform mobile development, alongside <strong className="font-bold">Next.js</strong> for modern web interfaces. On the backend, he architects scalable APIs utilizing <strong className="font-bold text-brand-accent">NestJS, Python, and Node.js</strong>, leveraging PostgreSQL and MySQL for structured, high-volume data management.
            </p>
            <p>
              As a dedicated cross-platform engineer, he utilizes Flutter to achieve native-level performance across iOS and Android deployments from a single codebase. He implements advanced state management patterns, optimized offline-first data caching, and secure API communication protocols to guarantee reliable mobile performance.
            </p>
            <p>
              For web system architectures, he leverages the Next.js framework to maximize technical SEO, optimize Core Web Vitals, and ensure rapid edge-network content delivery. By combining these frameworks, <strong className="font-bold text-brand-primary">Gemintang Sangkaji Furqon</strong> ensures comprehensive end-to-end type safety, significantly reducing runtime errors and improving long-term application sustainability.
            </p>

            <div className="pt-6">
              <motion.a
                href="https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-3 bg-brand-primary text-white font-bold rounded-none shadow-lg hover:bg-brand-accent transition-all duration-300 uppercase tracking-widest text-sm"
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
