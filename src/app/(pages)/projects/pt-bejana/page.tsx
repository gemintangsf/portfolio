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
  FaExternalLinkAlt
} from "react-icons/fa";
import { projects } from "@/data/projects";
import { Container, Button, Badge, ProjectNavigation } from "@/components/ui";

interface CaseStudySection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  evidence: string[];
}

const bejanaCaseStudies: CaseStudySection[] = projects
  .filter((p) => p.id === 11)
  .map((p) => ({
    id: "paboi",
    title: p.title,
    subtitle: p.subtitle || "",
    description: p.description,
    challenge: p.challenge || "",
    solution: p.solution || "",
    impact: p.impact ? p.impact.join("\n\n") : "",
    stack: p.stack,
    evidence: p.evidence || []
  }));

export default function BejanaPage() {
  const [activeTab, setActiveTab] = useState(bejanaCaseStudies[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<string[]>([]);
  const activeStudy = bejanaCaseStudies.find((s) => s.id === activeTab) || bejanaCaseStudies[0];

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && bejanaCaseStudies.some((s) => s.id === tab)) {
        setActiveTab(tab);
      }
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState();

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
    <main className="min-h-screen bg-background text-brand-base pt-28 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
      {/* Back to Journey */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Journey
      </Link>

      {/* Header Banner */}
      <div className="border-4 border-brand-base p-6 md:p-12 mb-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-2 block">
            Case Study — PT. Bejana Investidata Globalindo
          </span>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
            Professional Foundations
          </h1>
          <p className="text-sm text-brand-accent max-w-xl font-light mt-2 leading-relaxed">
            First professional experience, scaling membership portals and learning key teamwork methodologies in fullstack workflows.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:self-end">
          <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px]">
            JUNE 2022 - OCT 2022
          </Badge>
          <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px] text-brand-accent">
            FULLSTACK DEVELOPER INTERN
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
        {/* Header info */}
        <div className="border-b-2 border-brand-base pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-brand-base leading-tight">
              {activeStudy.title}
            </h2>
            <p className="text-xs text-brand-accent italic font-light mt-1">
              &ldquo;{activeStudy.subtitle}&rdquo;
            </p>
          </div>
          <a
            href="https://indonesia-orthopaedic.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-base bg-brand-highlight px-3 py-1.5 border border-brand-base hover:bg-brand-base hover:text-background transition-colors"
          >
            Visit Website <FaExternalLinkAlt className="text-[9px]" />
          </a>
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
                The Business Problem
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
                The Engineering Action
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
                Outcome & Learnings
              </h3>
            </div>
            <p className="text-sm font-bold leading-relaxed text-background/90 text-justify">
              {activeStudy.impact}
            </p>
          </div>

          {/* Tech stack */}
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

          <ProjectNavigation currentId={activeStudy.id} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Evidence Showcase */}
      {activeStudy.evidence.length > 0 && (
        <div className="max-w-4xl mx-auto border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)] mt-8">
          <h3 className="text-lg font-black uppercase tracking-tight text-brand-base mb-2 leading-tight">
            System Interface Showcase
          </h3>
          <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-6">
            Click screenshot to inspect interface details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeStudy.evidence.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(activeStudy.evidence, idx)}
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
                    src={img}
                    alt={`Desktop Screen ${idx + 1}`}
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
            ))}
          </div>
        </div>
      )}

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
                alt={`Evidence full`}
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
    </main>
  );
}
