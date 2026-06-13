"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { Container, Badge, Button } from "@/components/ui";

export default function AboutSection() {
  return (
    <section id="about-me" className="min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
      <Container size="md" className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          {/* <Badge variant="status" dot>
            My Story
          </Badge> */}
        </motion.div>

        <div className="relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-brand-base uppercase tracking-tighter"
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
              initial={{ opacity: 0, scale: 0.95 }}
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
                <span className="font-bold text-brand-primary text-xl uppercase tracking-tighter">
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

              <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    <FiDownload className="text-xl" />
                    <span>My Resume</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
