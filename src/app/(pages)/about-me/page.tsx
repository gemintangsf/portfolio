"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Button, Card } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { chapters, blueprintFacts } from "@/data/about-me";


/* ─────────────────────────── VARIANTS ─────────────────────────── */

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─────────────────────────── COMPONENT ────────────────────────── */

export default function AboutPage() {
  return (
    <div className="w-full bg-background overflow-hidden">
      {/* ━━━ 1. HERO BANNER ━━━ */}
      <div className="w-full bg-background pt-28 pb-16 px-6 md:px-[128px] 4k:px-[256px] relative z-10 overflow-hidden">
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative z-10"
        >
          {/* Back link */}
          <motion.div variants={headerItemVariants}>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
              Back to Home
            </Link>
          </motion.div>

          {/* Banner card */}
          <motion.div
            variants={headerItemVariants}
            className="border-4 border-brand-base p-6 md:p-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col gap-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent block">
              About Me
            </span>
            <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
              The Story of How I Became a Software Engineer
            </h1>
            <p className="text-sm text-brand-accent font-light leading-relaxed max-w-3xl">
              A journey that started with a love for math, took an unexpected
              detour through chemistry, and eventually found its way to code.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ━━━ 2. STORY BODY ━━━ */}
      <section className="relative w-full px-6 pt-24 pb-24 md:px-[128px] md:pt-[var(--section-pt)] md:pb-[128px] 4k:px-[256px] bg-background-alt overflow-hidden z-10">
        {/* Slanted divider */}
        <div
          className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0"
          style={{
            height: "var(--divider-height)",
            minHeight: "var(--divider-min-height)",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full fill-[var(--background)]"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
        </div>

        <div className="w-full relative z-10">
          {/* ── Photo + Opening ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center mb-20 md:mb-28"
          >
            {/* Profile photo */}
            <div className="relative w-48 h-64 md:w-64 md:h-80 overflow-hidden border-4 border-brand-base shadow-[8px_8px_0px_0px_var(--color-primary)] hover:shadow-[12px_12px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 group mb-8">
              <Image
                src="/assets/pp.jpeg"
                alt="Gemintang Profile"
                fill
                className="object-cover scale-150 object-[center_15%] transition-transform duration-700 group-hover:scale-[1.6]"
                priority
              />
            </div>

            {/* Intro text */}
            <div className="text-center max-w-2xl">
              <p className="text-sm md:text-base text-brand-accent font-light leading-relaxed">
                Every software engineer has an origin story. Mine didn&apos;t
                start with a computer — it started with a pencil, a math book,
                and a dream that had nothing to do with code.
              </p>
            </div>
          </motion.div>

          {/* ── Chapter label ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">
              My Journey in 6 Chapters
            </span>
          </motion.div>

          {/* ── Chapter cards ── */}
          <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
            {chapters.map((chapter, idx) => {
              const IconComponent = chapter.icon;
              const isReversed = idx % 2 === 1;

              return (
                <motion.div
                  key={chapter.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Card hoverable className="p-6 md:p-10 bg-card-bg">
                    <div
                      className={`flex flex-col ${
                        isReversed ? "md:flex-row-reverse" : "md:flex-row"
                      } gap-6 md:gap-10 items-start`}
                    >
                      {/* Number + Icon */}
                      <div className="shrink-0 flex flex-row md:flex-col items-center gap-4">
                        <span className="text-5xl md:text-7xl font-black text-brand-base/10 leading-none tracking-tighter font-mono select-none">
                          {chapter.num}
                        </span>
                        <span className="text-lg md:text-xl text-brand-primary p-3 bg-brand-highlight border-2 border-brand-base shadow-[3px_3px_0px_0px_var(--color-primary)]">
                          <IconComponent />
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-sm md:text-base font-black text-brand-base uppercase tracking-tight mb-1">
                          {chapter.title}
                        </h3>
                        <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest block mb-4">
                          {chapter.subtitle}
                        </span>
                        <p className="text-xs md:text-sm text-brand-accent font-light leading-relaxed">
                          {chapter.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* ── Blueprint summary ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 md:mt-28 max-w-2xl mx-auto"
          >
            <Card hoverable className="p-6 md:p-10 bg-card-bg">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-base mb-6 border-b border-brand-base/15 pb-3 text-center">
                The Blueprint — TL;DR
              </h3>
              <div className="space-y-4 font-mono">
                {blueprintFacts.map((fact, i) => (
                  <div key={fact.label}>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-brand-accent text-[9px] uppercase tracking-wider">
                        {fact.label}
                      </span>
                      <span
                        className={`font-bold uppercase text-right ${
                          fact.strikethrough
                            ? "text-brand-accent/50 line-through"
                            : "text-brand-base"
                        }`}
                      >
                        {fact.value}
                      </span>
                    </div>
                    {i < blueprintFacts.length - 1 && (
                      <div className="border-t border-dashed border-brand-base/15 mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* ── CTA footer ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16 md:mt-20 text-center max-w-xl mx-auto"
          >
            <p className="text-xs md:text-sm text-brand-accent font-mono mb-4 uppercase tracking-wider">
              The End of My Story
            </p>
            <p className="text-sm md:text-base text-brand-base font-light mb-8 leading-relaxed">
              We have reached the end of my story. To see my professional
              experience and details, feel free to check out my resume.
            </p>
            <div className="flex justify-center">
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" size="lg" className="gap-2 px-8">
                  <span>See My Resume</span>
                  <FaArrowRight className="text-sm shrink-0" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
