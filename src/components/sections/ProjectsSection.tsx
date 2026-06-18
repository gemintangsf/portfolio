"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaLock,
  FaServer,
  FaMobileAlt,
  FaUserCog,
  FaUsers
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { Card, Badge } from "@/components/ui";
import { useUI } from "@/hooks/useUI";

interface CompanyCard {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  tags: string[];
  isPrivate: boolean;
  iconType: "retail" | "enterprise" | "medical" | "community";
}

const companiesData: CompanyCard[] = [
  {
    id: "javabooks",
    name: "PT. Javabooks Indonesia (Periplus)",
    role: "Full Stack & Mobile Developer",
    period: "May 2025 - Present",
    description: "Architected retail and HR solutions across high-traffic e-commerce and internal biometric frameworks.",
    highlights: [
      "Secured check-ins with geofenced, zero-enrollment face recognition.",
      "Optimized unpaginated lists of 500+ leaderboard rows for lower-end phones.",
      "Eliminated 100% of physical cashier POS maintenance travel overhead.",
      "Boosted book search relevance using real-time trends on periplus.com."
    ],
    stack: ["Flutter", "Python", "InsightFace", "OpenSearch", "MySQL", "OpenCart"],
    link: "/projects/pt-javabooks",
    tags: ["Mobile", "Web", "AI", "E-Commerce"],
    isPrivate: true,
    iconType: "retail"
  },
  {
    id: "neuronworks",
    name: "PT. Jagoo IT / Neuronworks",
    role: "Full Stack Developer",
    period: "Feb 2024 - Feb 2025",
    description: "Designed core data pipelines and managed legacy framework migrations for Telkom Indonesia.",
    highlights: [
      "Standardized retired terminal assets lifecycle using NestJS & Airflow.",
      "Migrated legacy Zend order screens to Next.js with Oracle databases.",
      "Prevented accidental audit record loss via MinIO soft-deletions.",
      "Integrated Google Maps to visually coordinate service package bounds."
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Apache Airflow", "MinIO", "Oracle"],
    link: "/projects/pt-neuronworks",
    tags: ["Web", "Enterprise"],
    isPrivate: true,
    iconType: "enterprise"
  },
  {
    id: "bejana",
    name: "PT. Bejana Investidata Globalindo",
    role: "Full Stack Developer Intern",
    period: "June 2022 - Oct 2022",
    description: "Delivered key portal components and unified APIs for a national medical association.",
    highlights: [
      "Ramped up to fullstack responsibilities to clear urgent UI backlogs.",
      "Shipped secure doctor portals and membership registration APIs.",
      "Stabilized production build states by coordinating QA workflows."
    ],
    stack: ["Ruby on Rails", "ReactJS", "MySQL", "Git Workflow"],
    link: "/projects/pt-bejana",
    tags: ["Web"],
    isPrivate: false,
    iconType: "medical"
  },
  {
    id: "side-projects",
    name: "Side Projects & Community Work",
    role: "Academic & Open Source Developer",
    period: "2021 - 2023",
    description: "Explored community-driven platforms, donation automation, and flexible database scaling.",
    highlights: [
      "Built a secure social fund donation platform for academic campaigns.",
      "Designed dynamic inventory audits with MongoDB and Ruby on Rails.",
      "Developed Express/PostgreSQL inventory APIs in collaborative teams."
    ],
    stack: ["ReactJS", "Ruby on Rails", "Express.js", "MongoDB", "PostgreSQL"],
    link: "/projects/side-projects",
    tags: ["Web", "Others"],
    isPrivate: false,
    iconType: "community"
  }
];

const categories = ["All", "Web", "Mobile", "Enterprise", "AI", "E-Commerce", "Others"];

export default function ProjectsSection() {
  const { selectedCategory, setSelectedCategory } = useUI();

  const filteredCompanies = selectedCategory === "All"
    ? companiesData
    : companiesData.filter(c => c.tags.includes(selectedCategory) || (selectedCategory === "Others" && c.tags.includes("Others")));

  const getIcon = (type: string) => {
    switch (type) {
      case "retail":
        return <FaMobileAlt />;
      case "enterprise":
        return <FaServer />;
      case "medical":
        return <FaUserCog />;
      default:
        return <FaUsers />;
    }
  };

  return (
    <section id="projects" className="min-h-[100dvh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl font-extrabold text-brand-base mb-4 uppercase tracking-tighter leading-tight">
          Featured <span className="text-brand-accent">Case Studies</span>
        </h1>
        <p className="text-base text-brand-accent max-w-2xl mx-auto leading-relaxed font-light">
          Engineering solutions for complex business workflows and real-world scalability.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/projects/journey"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-highlight text-brand-base border-2 border-brand-base text-[10px] uppercase tracking-widest font-black shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[5px_5px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Explore My Developer Journey &rarr;
          </Link>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="relative mb-12">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 overflow-x-auto pb-4 px-2 custom-scrollbar-hide md:overflow-visible snap-x snap-mandatory">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-none snap-start px-6 py-2.5 rounded-none text-[10px] md:text-xs font-bold transition-all duration-200 border-2 uppercase tracking-[0.2em] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base cursor-pointer ${selectedCategory === cat
                ? "bg-brand-base text-background border-brand-base shadow-[3px_3px_0px_0px_var(--color-primary)] -translate-x-0.5 -translate-y-0.5"
                : "bg-transparent text-brand-base border-brand-base/40 hover:shadow-[3px_3px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Companies Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {filteredCompanies.map((company) => (
            <motion.div
              key={company.id}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex"
            >
              <Card
                hoverable
                className="group relative flex-1 flex flex-col p-6 md:p-8"
              >
                {/* Top Info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 flex items-center justify-center bg-brand-highlight border-2 border-brand-base text-brand-base text-lg group-hover:bg-brand-base group-hover:text-background transition-colors duration-300">
                      {getIcon(company.iconType)}
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-accent block">
                        {company.period}
                      </span>
                      <h3 className="text-lg font-black text-brand-base uppercase tracking-tighter mt-0.5 leading-tight">
                        {company.name}
                      </h3>
                    </div>
                  </div>
                  {company.isPrivate && (
                    <div className="bg-brand-base/5 text-brand-accent text-[8px] px-2.5 py-1 border border-brand-base/20 rounded-none flex items-center gap-1 uppercase font-bold tracking-wider">
                      <FaLock size={8} /> Private
                    </div>
                  )}
                </div>

                {/* Subtitle / Role */}
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4 block">
                  Role: {company.role}
                </span>

                {/* Short intro */}
                <p className="text-brand-accent font-light text-sm mb-6 text-justify leading-relaxed">
                  {company.description}
                </p>

                {/* Key Achievements/Highlights */}
                <div className="space-y-3 mb-8">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-accent block border-b border-brand-base/10 pb-1">
                    Key Outcomes & Workarounds
                  </span>
                  {company.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs font-light leading-relaxed">
                      <span className="text-brand-base font-bold mt-0.5 text-[9px] border border-brand-base/40 bg-brand-highlight px-1">
                        0{idx + 1}
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stack and CTA */}
                <div className="mt-auto pt-6 border-t border-brand-base/10 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {company.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-highlight border border-brand-base/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={company.link}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-base text-background border-2 border-brand-base text-[10px] uppercase tracking-widest font-black shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[5px_5px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all mt-2"
                  >
                    Read Full Case Study <FaArrowRight size={10} />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
