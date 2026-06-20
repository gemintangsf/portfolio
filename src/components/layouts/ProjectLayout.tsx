"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { Badge, ProjectNavigation } from "@/components/ui";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  evidence: string[];
  isMobileApp?: boolean;
  forceDesktopStyle?: boolean;
  linkType?: "visit" | "github" | "lock";
  linkUrl?: string;
  linkText?: string;
}

export interface ProjectLayoutProps {
  company: string;
  title: string;
  description: string;
  dateBadge?: string;
  roleBadge: string;
  caseStudies: CaseStudy[];
  problemLabel?: string;
  solutionLabel?: string;
  impactLabel?: string;
  sidebarLabel?: string;
}

const easeElegant: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeElegant,
    },
  },
};

const bodyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const bodyItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeElegant,
    },
  },
};

export default function ProjectLayout({
  company,
  title,
  description,
  dateBadge,
  roleBadge,
  caseStudies,
  problemLabel = "The Business Problem",
  solutionLabel = "The Engineering Action",
  impactLabel = "Outcome & Learnings",
  sidebarLabel = "Select Project",
}: ProjectLayoutProps) {
  const [activeTab, setActiveTab] = useState(caseStudies[0]?.id || "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<string[]>([]);
  const [evidenceIndex, setEvidenceIndex] = useState(0);

  useEffect(() => {
    if (caseStudies.length === 0) return;

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && caseStudies.some((s) => s.id === tab)) {
        setActiveTab(tab);
      }
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState();

    return () => window.removeEventListener("popstate", handlePopState);
  }, [caseStudies]);

  const activeStudy = caseStudies.find((s) => s.id === activeTab) || caseStudies[0];

  // Reset evidence carousel index when switching tabs
  useEffect(() => {
    setEvidenceIndex(0);
  }, [activeTab]);

  if (!activeStudy) return null;

  const openLightbox = (images: string[], index: number) => {
    setActiveEvidence(images);
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < activeEvidence.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  // Helper to safely format case study titles in the navigation sidebar
  const formatTitle = (fullTitle: string) => {
    const parts = fullTitle.split(/[:–]/);
    const main = parts[0]?.trim() || fullTitle;
    const sub = parts[1]?.trim() || "";
    return { main, sub };
  };

  // Render sidebar layout (always enabled to maintain consistent structure)

  return (
    <div className="w-full bg-background overflow-hidden">
      {/* 1. HEADER / BANNER */}
      <div className="w-full bg-background pt-28 pb-16 px-6 md:px-[128px] 4k:px-[256px] relative z-10 overflow-hidden">
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative z-10"
        >
          {/* Back to Journey */}
          <motion.div variants={headerItemVariants}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Journey
            </Link>
          </motion.div>

          {/* Header Banner */}
          <motion.div
            variants={headerItemVariants}
            className="border-4 border-brand-base p-6 md:p-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-2 block">
                {company}
              </span>
              <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
                {title}
              </h1>
              <p className="text-sm text-brand-accent max-w-xl font-light mt-2 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:self-end">
              {dateBadge && (
                <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px]">
                  {dateBadge}
                </Badge>
              )}
              <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px] text-brand-accent">
                {roleBadge}
              </Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 2. BODY SECTION */}
      <section className="relative w-full px-6 pt-24 pb-24 md:px-[128px] md:pt-[var(--section-pt)] md:pb-[128px] 4k:px-[256px] bg-background-alt overflow-hidden z-10">
        {/* Slanted Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0" style={{ height: "var(--divider-height)", minHeight: "var(--divider-min-height)" }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[var(--background)]">
            <polygon points="0,0 100,0 0,100" />
          </svg>
        </div>

        <div className="w-full relative z-10">
          <motion.div
            variants={bodyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Navigation Sidebar */}
            <motion.div
              variants={bodyItemVariants}
              className="lg:col-span-4 flex flex-col gap-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1 px-1">
                {sidebarLabel}
              </p>
              {caseStudies.map((study) => {
                const { main, sub } = formatTitle(study.title);
                return (
                  <button
                    key={study.id}
                    onClick={() => setActiveTab(study.id)}
                    className={`w-full text-left p-4 border-2 transition-all cursor-pointer flex items-center justify-between group focus:outline-none ${
                      activeTab === study.id
                        ? "bg-brand-base text-background border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] -translate-x-0.5 -translate-y-0.5"
                        : "bg-transparent text-brand-base border-brand-base/30 hover:border-brand-base hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
                    }`}
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider truncate">
                        {main}
                      </span>
                      {sub && (
                        <span
                          className={`text-[10px] font-light mt-1 truncate ${
                            activeTab === study.id ? "text-background/80" : "text-brand-accent"
                          }`}
                        >
                          {sub}
                        </span>
                      )}
                    </div>
                    <FaArrowRight
                      className={`text-xs shrink-0 ml-2 ${
                        activeTab === study.id
                          ? "text-background"
                          : "text-brand-accent group-hover:text-brand-base transition-colors"
                      }`}
                    />
                  </button>
                );
              })}
            </motion.div>

            {/* Content Panel */}
            <motion.div
              variants={bodyItemVariants}
              className="lg:col-span-8 flex flex-col gap-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: easeElegant }}
                  className="flex flex-col gap-8 w-full"
                >
                  <div className="border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
                    {/* Header info */}
                    <div className="border-b-2 border-brand-base pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="text-xl font-black uppercase tracking-tight text-brand-base leading-tight">
                          {activeStudy.title}
                        </h2>
                        {activeStudy.subtitle && (
                          <p className="text-xs text-brand-accent italic font-light mt-1">
                            &ldquo;{activeStudy.subtitle}&rdquo;
                          </p>
                        )}
                      </div>
                      {activeStudy.linkType && activeStudy.linkUrl && activeStudy.linkType === "visit" && (
                        <a
                          href={activeStudy.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-base bg-brand-highlight px-3 py-1.5 border border-brand-base hover:bg-brand-base hover:text-background transition-colors"
                        >
                          {activeStudy.linkText || "Visit Website"} <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      )}
                      {activeStudy.linkType && activeStudy.linkUrl && activeStudy.linkType === "github" && (
                        <a
                          href={activeStudy.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-base bg-brand-highlight px-3 py-1.5 border border-brand-base hover:bg-brand-base hover:text-background transition-colors"
                        >
                          <FaGithub size={12} /> {activeStudy.linkText || "Repository"} <FaArrowRight size={8} />
                        </a>
                      )}
                      {activeStudy.linkType && activeStudy.linkType === "lock" && (
                        <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-accent bg-brand-highlight px-3 py-1.5 border border-brand-base/20">
                          <FaLock className="text-[9px]" /> {activeStudy.linkText || "Proprietary System"}
                        </div>
                      )}
                    </div>

                    {/* Problem - Solution - Impact flow */}
                    <div className="space-y-8">
                      {/* Problem Section */}
                      <div className="p-5 border-2 border-brand-base bg-brand-base/5 shadow-[3px_3px_0px_0px_var(--color-primary)]">
                        <div className="flex items-center gap-3 mb-3 text-brand-base">
                          <span className="w-7 h-7 flex items-center justify-center border border-brand-base bg-background text-brand-base">
                            <FaExclamationTriangle className="text-xs" />
                          </span>
                          <h3 className="text-xs font-bold uppercase tracking-widest">
                            {problemLabel}
                          </h3>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-brand-accent text-justify">
                          {activeStudy.challenge}
                        </p>
                      </div>

                      {/* Solution Section */}
                      <div className="p-5 border-2 border-brand-base bg-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
                        <div className="flex items-center gap-3 mb-3 text-brand-base">
                          <span className="w-7 h-7 flex items-center justify-center border border-brand-base bg-brand-base text-background">
                            <FaLightbulb className="text-xs" />
                          </span>
                          <h3 className="text-xs font-bold uppercase tracking-widest">
                            {solutionLabel}
                          </h3>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-brand-base text-justify">
                          {activeStudy.solution}
                        </p>
                      </div>

                      {/* Impact Section */}
                      <div className="p-5 border-2 border-brand-base bg-brand-base text-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-7 h-7 flex items-center justify-center border border-background bg-background text-brand-base">
                            <FaCheckCircle className="text-xs" />
                          </span>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-background">
                            {impactLabel}
                          </h3>
                        </div>
                        <p className="text-sm font-bold leading-relaxed text-background/90 text-justify">
                          {activeStudy.impact}
                        </p>
                      </div>

                      {/* Tech stack */}
                      {activeStudy.stack.length > 0 && (
                        <div className="pt-4 border-t border-brand-base/20">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-3">
                            Technology Applied
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {activeStudy.stack.map((tech) => (
                              <Badge key={tech} variant="tag">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <ProjectNavigation currentId={activeStudy.id} setActiveTab={setActiveTab} />
                    </div>
                  </div>

                  {/* Evidence Showcase */}
                  {activeStudy.evidence.length > 0 && (
                    <div className="border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-lg font-black uppercase tracking-tight text-brand-base mb-1 leading-tight">
                            System Interface Showcase
                          </h3>
                          <p className="text-[10px] uppercase tracking-widest text-brand-accent">
                            Click screenshot to inspect interface details
                          </p>
                        </div>
                        {/* Evidence counter */}
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent border border-brand-base/20 px-3 py-1.5 bg-brand-highlight">
                          {evidenceIndex + 1} / {activeStudy.evidence.length}
                        </span>
                      </div>

                      {/* Carousel with prev/next navigation */}
                      <div className="relative">
                        {/* Previous Button */}
                        {evidenceIndex > 0 && (
                          <button
                            onClick={() => setEvidenceIndex(evidenceIndex - 1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background border-2 border-brand-base shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-3.5 md:hover:-translate-x-5.5 hover:-translate-y-[calc(50%+1px)] active:shadow-none active:-translate-x-3 md:active:-translate-x-5 active:-translate-y-1/2 transition-all cursor-pointer focus:outline-none"
                          >
                            <FaChevronLeft className="text-brand-base text-sm" />
                          </button>
                        )}

                        {/* Next Button */}
                        {evidenceIndex < activeStudy.evidence.length - 1 && (
                          <button
                            onClick={() => setEvidenceIndex(evidenceIndex + 1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background border-2 border-brand-base shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:translate-x-3.5 md:hover:translate-x-5.5 hover:-translate-y-[calc(50%+1px)] active:shadow-none active:translate-x-3 md:active:translate-x-5 active:-translate-y-1/2 transition-all cursor-pointer focus:outline-none"
                          >
                            <FaChevronRight className="text-brand-base text-sm" />
                          </button>
                        )}

                        {/* Evidence Display */}
                        {activeStudy.isMobileApp && !activeStudy.forceDesktopStyle ? (
                          /* Mobile Phone Mockup */
                          <div className="flex justify-center py-4">
                            <div
                              onClick={() => openLightbox(activeStudy.evidence, evidenceIndex)}
                              className="w-[14rem] md:w-[17rem] cursor-pointer group"
                            >
                              <div className="relative rounded-[2rem] border-[6px] border-brand-highlight shadow-[6px_6px_0px_0px_var(--color-primary)] overflow-hidden aspect-[9/19.5] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-brand-base bg-[#050505] ring-1 ring-brand-base/10">
                                {/* Notch */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-3.5 bg-background rounded-full z-20"></div>
                                <Image
                                  src={activeStudy.evidence[evidenceIndex]}
                                  alt={`Screen ${evidenceIndex + 1}`}
                                  fill
                                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-brand-base/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <span className="bg-background text-brand-base text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border border-brand-base">
                                    Zoom
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Desktop Browser Mockup */
                          <div
                            onClick={() => openLightbox(activeStudy.evidence, evidenceIndex)}
                            className="relative overflow-hidden border-2 border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] cursor-pointer bg-brand-base/5 group aspect-video"
                          >
                            {/* Browser header */}
                            <div className="flex items-center gap-2 p-2 border-b-2 border-brand-base bg-background">
                              <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-base"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-base"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-base"></div>
                              </div>
                              <div className="flex-1 max-w-[7.5rem] h-3 bg-brand-highlight border border-brand-base/40"></div>
                            </div>
                            <div className="relative w-full h-[calc(100%-28px)]">
                              <Image
                                src={activeStudy.evidence[evidenceIndex]}
                                alt={`Desktop Screen ${evidenceIndex + 1}`}
                                fill
                                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-102"
                              />
                              <div className="absolute inset-0 bg-brand-base/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-background text-brand-base text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border border-brand-base">
                                  Zoom
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Dot indicators */}
                        {activeStudy.evidence.length > 1 && (
                          <div className="flex justify-center gap-2 mt-4">
                            {activeStudy.evidence.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setEvidenceIndex(idx)}
                                className={`w-2 h-2 border border-brand-base transition-all cursor-pointer focus:outline-none ${
                                  idx === evidenceIndex
                                    ? "bg-brand-base scale-125"
                                    : "bg-transparent hover:bg-brand-base/30"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. BOTTOM SPACER */}
      <section className="relative w-full px-6 pt-24 pb-24 md:px-[128px] md:pb-[64px] 4k:px-[256px] bg-background-alt overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeElegant }}
          className="w-full relative z-10 flex justify-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-base text-background border-2 border-brand-base text-[10px] uppercase tracking-[0.25em] font-black shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            <FaArrowLeft /> Back to Journey
          </Link>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
              onClick={() => setLightboxIndex(null)}
            >
              <FaTimes size={28} />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeEvidence[lightboxIndex]}
                alt="Evidence full"
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-sm w-auto h-auto"
              />

              {activeEvidence.length > 1 && (
                <>
                  {lightboxIndex > 0 && (
                    <button
                      className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all cursor-pointer hidden md:block"
                      onClick={handlePrev}
                    >
                      <FaChevronLeft size={40} />
                    </button>
                  )}
                  {lightboxIndex < activeEvidence.length - 1 && (
                    <button
                      className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all cursor-pointer hidden md:block"
                      onClick={handleNext}
                    >
                      <FaChevronRight size={40} />
                    </button>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
