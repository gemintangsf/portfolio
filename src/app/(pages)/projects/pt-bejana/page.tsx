"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
import { Container, Button, Badge } from "@/components/ui";

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

const bejanaCaseStudies: CaseStudySection[] = [
  {
    id: "paboi",
    title: "PABOI: Indonesia Orthopedic Association Web Platform",
    subtitle: "Accelerating Project Velocity by Shifting to Full-Stack Execution",
    description: "Contributed to building the official member portal and management system for the Indonesian Orthopaedic Association (PABOI).",
    challenge: "Joining the team as a backend-only intern, there was a backlog of pending user interface tickets that delayed features. Communication gaps between frontend and backend components frequently stalled progress.",
    solution: "Quickly ramped up on the team's processes and expanded my role from backend Ruby on Rails to full-stack, taking on ReactJS responsibilities midway through the internship. Directly resolved frontend usability bugs and aligned API endpoints.",
    impact: "Accelerated features to completion, cleared the backlog of UI issues, and delivered a stable, responsive member portal on time.",
    stack: ["Ruby on Rails", "ReactJS", "MySQL", "Git", "Kanban / Agile"],
    evidence: []
  }
];

export default function BejanaPage() {
  const [activeTab, setActiveTab] = useState(bejanaCaseStudies[0].id);
  const activeStudy = bejanaCaseStudies.find((s) => s.id === activeTab) || bejanaCaseStudies[0];

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
      <div className="border-4 border-brand-base p-8 md:p-12 mb-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-2 block">
            Case Study — PT. Bejana Investidata Globalindo
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-base">
            Professional Foundations
          </h1>
          <p className="text-sm text-brand-accent max-w-xl font-light mt-2">
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
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-brand-base">
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
        </div>
      </div>
    </main>
  );
}
