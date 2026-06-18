"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { Container, Button } from "@/components/ui";
import { useUI } from "@/hooks/useUI";

export default function AboutSection() {
  const { selectedCategory } = useUI();

  const getSpotlightData = () => {
    switch (selectedCategory) {
      case "Mobile":
        return {
          title: "Mobile App Reliability Focus",
          content: "In mobile development, I focus on performance and resource limits. On the PHC internal app, I engineered optimized loading and custom storage caching to prevent excessive disk use, keeping rendering fluid at 60fps. I also developed secure face-recognition and location tracking for team attendance."
        };
      case "Web":
        return {
          title: "Web Performance & UX Focus",
          content: "I design fast, responsive Next.js apps with smooth layouts and zero lag. At PT Javabooks, I integrated OpenSearch autocomplete, ranking logic, and typo-tolerant search suggestions into the storefront catalog, making search response instant."
        };
      case "Enterprise":
        return {
          title: "Secure backend & Enterprise systems",
          content: "I construct scalable, secure backend systems using NestJS, Node, and Python. At Telkom Indonesia, I migrated legacy Zend systems to NestJS & Next.js, mapped out complex NTE asset management workflows, and automated database sync schedules using Apache Airflow."
        };
      case "All":
        return {
          title: "Full-Stack Collaboration",
          content: "I bridge mobile, frontend, and backend to keep development clean and unified. I enforce code standards using SonarQube, automate lint stages (Husky), and design databases (PostgreSQL, MySQL) for high-availability systems."
        };
      default:
        return {
          title: "My Engineering Focus",
          content: "Whether it is custom cached Flutter apps, high-throughput commercial storefront searches, or legacy database migrations, I design and write code to directly solve business needs and simplify workflows."
        };
    }
  };

  const spotlight = getSpotlightData();

  return (
    <section id="about-me" className="min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
      <Container size="md" className="flex flex-col items-center justify-center">
        <div className="relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-bold text-center mb-8 text-brand-base uppercase tracking-tighter leading-tight"
          >
            About <span className="text-brand-accent">Me</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-12 items-center text-base text-brand-base leading-relaxed"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-none overflow-hidden shadow-[12px_12px_0px_0px_var(--color-primary)] border-4 border-brand-base transition-transform duration-500">
                <Image
                  src="/assets/pp.jpeg"
                  alt="Gemintang Profile"
                  fill
                  className="object-cover scale-150 object-[center_15%] transition-all duration-700"
                  priority
                />
              </div>
            </motion.div>

            <div className="space-y-6 text-center md:text-left flex-1">
              <p className="font-light text-base leading-relaxed">
                Hi, I'm{" "}
                <span className="font-bold text-brand-primary text-base uppercase tracking-tight">
                  Gemintang Sangkaji Furqon
                </span>
                , a Software Engineer focused on translating business needs into high-quality mobile and web applications.
              </p>

              <p className="font-light text-sm md:text-base leading-relaxed">
                I currently work as a{" "}
                <span className="font-bold text-brand-primary uppercase tracking-widest text-xs">
                  Full Stack & Mobile Developer
                </span>{" "}
                at PT Javabooks Indonesia, where I develop commercial mobile features, POS configurations, and search indexing platforms.
              </p>

              <p className="font-light text-sm md:text-base leading-relaxed">
                Previously, I built backend architectures and migrated legacy database structures at{" "}
                <span className="font-bold text-brand-primary uppercase tracking-widest text-xs">
                  Telkom Indonesia
                </span>
                , ensuring data security and clean code practices.
              </p>

              <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">
                Tech stack: Flutter, NestJS, Next.js, Python, PostgreSQL, MySQL.
              </p>

              {/* Dynamic Spotlight Alert Box */}
              <div className="mt-6 p-5 bg-brand-highlight border-2 border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all duration-300 relative rounded-none text-left">
                <div className="absolute -top-3 left-4 bg-brand-base text-background text-[9px] uppercase tracking-widest font-black px-2 py-0.5 border-2 border-brand-base">
                  Interactive Spotlight
                </div>
                <p className="text-xs font-bold text-brand-base uppercase tracking-wider mb-1">
                  {spotlight.title}
                </p>
                <p className="text-xs text-brand-accent leading-relaxed font-light">
                  {spotlight.content}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    <FiDownload className="text-lg" />
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
