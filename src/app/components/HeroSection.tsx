"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function HeroSection() {
  return (
    <section className="relative text-center min-h-[63vh] flex flex-col justify-center px-6 pt-32 overflow-hidden isolate">
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
        className="text-4xl md:text-6xl font-extrabold text-brand-base relative z-10"
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
        className="mt-4 text-lg md:text-xl text-gray-700"
      >
        Fullstack and Mobile Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
      >
        A versatile developer with solid fundamentals in frontend, backend, and
        mobile. <br />
        Quickly adapts to new technologies and delivers scalable, user-friendly
        solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-brand-base text-white font-medium hover:scale-105 hover:bg-brand-primary transition-transform shadow-lg"
        >
          View My Work
        </a>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-2xl border border-brand-base text-brand-base hover:bg-brand-highlight hover:scale-105 transition-transform shadow"
        >
          Contact
        </Link>
      </motion.div>
    </section>
  );
}
