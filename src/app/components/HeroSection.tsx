"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function HeroSection() {
  return (
    <section className="relative text-center min-h-[50vh] md:min-h-[63vh] flex flex-col justify-center px-6 pt-28 md:pt-32 overflow-hidden isolate">
      {/* Background moved to layout.tsx */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 mb-4"
      >
        <div className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium flex items-center gap-2">
          <FaMapMarkerAlt className="text-brand-accent" />
          Jakarta, Indonesia
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-brand-base relative z-10 leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-brand-base via-brand-primary to-brand-accent bg-clip-text text-transparent">
          Gemintang
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-xl md:text-2xl text-gray-700 font-medium"
      >
        Software Engineer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2"
      >
        A versatile developer with solid fundamentals in frontend, backend, and
        mobile. <br className="hidden md:block" />
        Quickly adapts to new technologies and delivers scalable, user-friendly
        solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto sm:max-w-none"
      >
        <Link
          href="/projects"
          className="px-8 py-3.5 w-full sm:w-auto rounded-full bg-brand-base text-white font-semibold text-lg hover:scale-105 hover:bg-brand-primary transition-transform shadow-lg hover:shadow-xl"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3.5 w-full sm:w-auto rounded-full border-2 border-brand-base text-brand-base font-semibold text-lg hover:bg-brand-highlight hover:scale-105 transition-transform shadow hover:shadow-md"
        >
          Contact
        </Link>
      </motion.div>
    </section>
  );
}
