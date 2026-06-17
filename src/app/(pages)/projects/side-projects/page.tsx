"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaGithub
} from "react-icons/fa";
import { Container, Button, Badge } from "@/components/ui";

interface ProjectSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  evidence: string[];
  githubUrl?: string;
}

const sideProjectsList: ProjectSection[] = [
  {
    id: "jtk-berbagi",
    title: "JTK Berbagi: Donation Management Platform",
    subtitle: "Digitalizing Social Fundraising for the Academic Community",
    description: "Built a fundraising and donation platform designed for POLBAN's Computer Engineering department to structure campaigns and transactions.",
    challenge: "Traditional donation processes in the department were manual and opaque, leading to accounting delays. Needs and requirements shifted dynamically during development, requiring close alignment with the frontend team.",
    solution: "Followed systematic requirement analysis to build a donation engine using Ruby on Rails and MySQL. Coordinated closely with the ReactJS frontend developer to model clean API endpoints and design secure role-based access for campaign admins and donors.",
    impact: "Established a transparent, auditable platform that simplified donation campaign setups and digital tracking of social funds.",
    stack: ["Ruby on Rails", "ReactJS", "MySQL", "Waterfall Methodology", "REST API"],
    evidence: [
      "/assets/jtkberbagi/1.png",
      "/assets/jtkberbagi/2.png"
    ],
    githubUrl: "https://github.com/gemintangsf/tugas_akhir/tree/main"
  },
  {
    id: "sinbada",
    title: "Sinbada: Web-Based Inventory System",
    subtitle: "Structuring Regional Asset Audits with MongoDB",
    description: "Developed an inventory system to help track regional institutional stock, equipment state, and records.",
    challenge: "Scaling relational records to handle dynamic, unstructured asset descriptions and categorization rules from diverse offices.",
    solution: "Leveraged MongoDB and Ruby on Rails to design a schema-flexible document database. Hosted the service on Azure and worked within a multi-member team to integrate asset tracking utilities.",
    impact: "Created a flexible inventory system capable of adapting to varying regional asset data formats without structural migrations.",
    stack: ["Ruby on Rails", "ReactJS", "MongoDB", "Azure", "Git Team Workflow"],
    evidence: [
      "/assets/sinbada/1.jpg"
    ],
    githubUrl: "https://github.com/SekelompokOrangKuat/ProjectInventaris/tree/dev"
  },
  {
    id: "siinvent",
    title: "Siinvent: Stock Auditing Tool",
    subtitle: "Foundational Experience in RESTful APIs and Database Norms",
    description: "Designed a lightweight inventory management system to audit stock levels and institutional assets.",
    challenge: "First experience working in a collaborative team repository, resolving database integration limits and avoiding git conflict bottlenecks.",
    solution: "Designed and implemented RESTful backend APIs using Express.js and PostgreSQL. Kept branch management strict and standardized request models.",
    impact: "Successfully delivered standard inventory control software with secure database relations.",
    stack: ["Express.js", "ReactJS", "PostgreSQL", "REST API Development"],
    evidence: [
      "/assets/siinvent/2.jpg"
    ],
    githubUrl: "https://github.com/SekelompokOrangKuat/PROJECTCUAN/tree/backend"
  }
];

export default function SideProjectsPage() {
  const [activeTab, setActiveTab] = useState(sideProjectsList[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && sideProjectsList.some((s) => s.id === tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  const activeProject = sideProjectsList.find((s) => s.id === activeTab) || sideProjectsList[0];

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
      <div className="border-4 border-brand-base p-8 md:p-12 mb-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-2 block">
            Academic & Community Experiments
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-base">
            Side Projects
          </h1>
          <p className="text-sm text-brand-accent max-w-xl font-light mt-2">
            Early software engineering projects focusing on donation management, inventory auditing systems, and learning team coordination paradigms.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:self-end">
          <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px] text-brand-accent">
            ACADEMIC & OPEN SOURCE
          </Badge>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1 px-1">
            Select Project
          </p>
          {sideProjectsList.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`w-full text-left p-4 border-2 transition-all cursor-pointer flex items-center justify-between group focus:outline-none ${
                activeTab === project.id
                  ? "bg-brand-base text-background border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] -translate-x-0.5 -translate-y-0.5"
                  : "bg-transparent text-brand-base border-brand-base/30 hover:border-brand-base hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider">
                  {project.title.split(":")[0]}
                </span>
                <span className={`text-[10px] font-light mt-1 ${activeTab === project.id ? "text-background/80" : "text-brand-accent"}`}>
                  {project.title.split(":")[1] || project.title}
                </span>
              </div>
              <FaArrowRight className={`text-xs ${activeTab === project.id ? "text-background" : "text-brand-accent group-hover:text-brand-base transition-colors"}`} />
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
            {/* Header info */}
            <div className="border-b-2 border-brand-base pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-brand-base">
                  {activeProject.title}
                </h2>
                <p className="text-xs text-brand-accent italic font-light mt-1">
                  &ldquo;{activeProject.subtitle}&rdquo;
                </p>
              </div>
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-base bg-brand-highlight px-3 py-1.5 border border-brand-base hover:bg-brand-base hover:text-background transition-colors"
                >
                  <FaGithub size={12} /> Repository <FaArrowRight size={8} />
                </a>
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
                    The Business Problem
                  </h3>
                </div>
                <p className="text-sm font-light leading-relaxed text-brand-accent text-justify">
                  {activeProject.challenge}
                </p>
              </div>

              {/* Solution Section */}
              <div className="p-5 border-2 border-brand-base bg-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
                <div className="flex items-center gap-3 mb-3 text-brand-base">
                  <span className="w-7 h-7 flex items-center justify-center border border-brand-base bg-brand-base text-background">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    The Solution
                  </h3>
                </div>
                <p className="text-sm font-light leading-relaxed text-brand-base text-justify">
                  {activeProject.solution}
                </p>
              </div>

              {/* Impact Section */}
              <div className="p-5 border-2 border-brand-base bg-brand-base text-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 flex items-center justify-center border border-background bg-background text-brand-base">
                    <FaCheckCircle className="text-xs" />
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-background">
                    Outcome
                  </h3>
                </div>
                <p className="text-sm font-bold leading-relaxed text-background/90 text-justify">
                  {activeProject.impact}
                </p>
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-brand-base/20">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-3">
                  Technology Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((tech) => (
                    <Badge key={tech} variant="tag">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Showcase */}
          {activeProject.evidence.length > 0 && (
            <div className="border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-brand-base mb-2">
                System Interface Showcase
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-6">
                Click screenshot to inspect interface details
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeProject.evidence.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(activeProject.evidence, idx)}
                    className="relative overflow-hidden border-2 border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] cursor-pointer bg-brand-base/5 group aspect-video"
                  >
                    {/* Browser header */}
                    <div className="flex items-center gap-2 p-2 border-b-2 border-brand-base bg-background">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-base"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-base"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-base"></div>
                      </div>
                      <div className="flex-1 max-w-[120px] h-3 bg-brand-highlight border border-brand-base/40"></div>
                    </div>
                    <div className="relative w-full h-[calc(100%-28px)]">
                      <Image
                        src={img}
                        alt={`Screen ${idx + 1}`}
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
        </div>
      </div>

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
