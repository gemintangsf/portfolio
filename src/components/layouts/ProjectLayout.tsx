"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaLock,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  Badge,
  Button,
  ProjectNavigation,
  ProjectHeaderBanner,
  ProjectCaseStudyFlow,
  ProjectEvidenceShowcase,
  ProjectLightbox,
} from "@/components/ui";

export interface SubFeature {
  id: string;
  title: string;
  description?: string;
  challenge: string;
  solution: string;
  impact: string;
  stack?: string[];
  evidence?: string[];
  isMobileApp?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  stack: string[];
  evidence: string[];
  isMobileApp?: boolean;
  forceDesktopStyle?: boolean;
  linkType?: "visit" | "github" | "lock";
  linkUrl?: string;
  linkText?: string;
  period?: string;
  features?: SubFeature[];
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
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<string[]>([]);
  const [evidenceIndex, setEvidenceIndex] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [backLink, setBackLink] = useState("/projects");

  useEffect(() => {
    const handleResize = () => setIsMobileViewport(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    let targetLink = "/projects";

    if (path.includes("pt-javabooks")) {
      targetLink = "/projects#javabooks";
    } else if (path.includes("pt-neuronworks")) {
      targetLink = "/projects#neuronworks";
    } else if (path.includes("pt-bejana")) {
      targetLink = "/projects#bejana";
    } else if (path.includes("side-projects")) {
      if (activeTab === "siinvent") targetLink = "/projects#polban";
      else if (activeTab === "sinbada") targetLink = "/projects#sinbada";
      else if (activeTab === "jtk-berbagi") targetLink = "/projects#jtk-berbagi";
    }

    setBackLink(targetLink);
  }, [activeTab]);

  useEffect(() => {
    if (caseStudies.length === 0) return;

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && caseStudies.some((s) => s.id === tab)) {
        setActiveTab(tab);
      } else {
        setActiveTab(caseStudies[0]?.id || "");
      }
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState();

    return () => window.removeEventListener("popstate", handlePopState);
  }, [caseStudies]);

  const activeStudy = caseStudies.find((s) => s.id === activeTab) || caseStudies[0];

  useEffect(() => {
    setActiveFeatureIndex(0);
  }, [activeTab]);

  useEffect(() => {
    setEvidenceIndex(0);
  }, [activeTab, activeFeatureIndex]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tabId);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  if (!activeStudy) return null;

  const activeFeature = activeStudy.features && activeStudy.features.length > 0
    ? activeStudy.features[activeFeatureIndex]
    : null;

  const displayStudy = activeFeature
    ? {
      ...activeStudy,
      challenge: activeFeature.challenge,
      solution: activeFeature.solution,
      impact: activeFeature.impact,
      stack: activeFeature.stack || activeStudy.stack,
      evidence: activeFeature.evidence || activeStudy.evidence,
      isMobileApp: activeFeature.isMobileApp !== undefined ? activeFeature.isMobileApp : activeStudy.isMobileApp,
    }
    : activeStudy;

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

  return (
    <div className="w-full bg-background overflow-hidden">
      {/* 1. HEADER / BANNER */}
      <ProjectHeaderBanner
        company={company}
        title={title}
        description={description}
        backLink={backLink}
        dateBadge={dateBadge}
        roleBadge={roleBadge}
        headerContainerVariants={headerContainerVariants}
        headerItemVariants={headerItemVariants}
      />

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
            animate="visible"
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
                return (
                  <button
                    key={study.id}
                    onClick={() => handleTabChange(study.id)}
                    className={`w-full text-left p-4 border-2 transition-all cursor-pointer flex items-center justify-between group focus:outline-none ${activeTab === study.id
                      ? "bg-brand-base text-background border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] -translate-x-0.5 -translate-y-0.5"
                      : "bg-background text-brand-base border-brand-base hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
                      }`}
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider truncate">
                        {study.title}
                      </span>
                    </div>
                    <FaArrowRight
                      className={`text-xs shrink-0 ml-2 ${activeTab === study.id
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
                    <div className="border-b-2 border-brand-base pb-6 mb-8 flex flex-col gap-2">
                      <div className="flex flex-row justify-between items-start gap-4 w-full">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl font-black uppercase tracking-tight text-brand-base leading-tight">
                            {activeStudy.title}
                          </h2>
                        </div>
                        <div className="shrink-0 mt-1">
                          {activeStudy.linkType && activeStudy.linkUrl && activeStudy.linkType === "visit" && (
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => window.open(activeStudy.linkUrl, "_blank")}
                              className="text-[10px] py-1.5 px-3 font-bold uppercase tracking-wider"
                            >
                              {activeStudy.linkText || "Visit Website"} <FaExternalLinkAlt className="text-[9px]" />
                            </Button>
                          )}
                          {activeStudy.linkType && activeStudy.linkUrl && activeStudy.linkType === "github" && (
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => window.open(activeStudy.linkUrl, "_blank")}
                              className="text-[10px] py-1.5 px-3 font-bold uppercase tracking-wider"
                            >
                              <FaGithub size={12} /> {activeStudy.linkText || "Repository"} <FaArrowRight size={8} />
                            </Button>
                          )}
                          {activeStudy.linkType && activeStudy.linkType === "lock" && (
                            <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-accent bg-brand-highlight px-3 py-1.5 border border-brand-base/20">
                              <FaLock className="text-[9px]" /> {activeStudy.linkText || "Proprietary System"}
                            </div>
                          )}
                        </div>
                      </div>
                      {activeStudy.period && (
                        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                          {activeStudy.period}
                        </div>
                      )}
                    </div>

                    {activeStudy.description && (
                      <p className="text-sm font-light text-brand-base mb-8 leading-relaxed text-justify">
                        {activeStudy.description}
                      </p>
                    )}

                    {/* Sub-features selector tabs */}
                    {activeStudy.features && activeStudy.features.length > 0 && (
                      <div className="flex flex-col gap-3 mb-8 pb-6 border-b border-brand-base/20">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                          Key Project Features / Modules
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {activeStudy.features.map((feature, idx) => (
                            <button
                              key={feature.id}
                              onClick={() => setActiveFeatureIndex(idx)}
                              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all cursor-pointer select-none ${activeFeatureIndex === idx
                                ? "bg-brand-base text-background border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] -translate-x-0.5 -translate-y-0.5"
                                : "bg-background text-brand-base border-brand-base hover:shadow-[2px_2px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
                                }`}
                            >
                              {feature.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Problem - Solution - Impact flow */}
                    <ProjectCaseStudyFlow
                      activeStudy={displayStudy}
                      problemLabel={problemLabel}
                      solutionLabel={solutionLabel}
                      impactLabel={impactLabel}
                    />

                    {/* Tech stack */}
                    {displayStudy.stack.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-brand-base/20">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-3">
                          Technology Applied
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {displayStudy.stack.map((tech) => (
                            <Badge key={tech} variant="tag">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Evidence Showcase */}
                  <ProjectEvidenceShowcase
                    activeStudy={displayStudy}
                    evidenceIndex={evidenceIndex}
                    setEvidenceIndex={setEvidenceIndex}
                    openLightbox={openLightbox}
                    isMobileViewport={isMobileViewport}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProjectLightbox
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
        activeEvidence={activeEvidence}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ProjectNavigation currentId={activeStudy.id} setActiveTab={setActiveTab} />
      </motion.div>
    </div>
  );
}
