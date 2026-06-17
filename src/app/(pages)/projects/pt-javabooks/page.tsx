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
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaGooglePlay,
  FaApple
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
  forceDesktopStyle?: boolean;
}

const javabooksCaseStudies: CaseStudySection[] = [
  {
    id: "phc-mobile",
    title: "PHC Mobile: HR & Gamification System",
    subtitle: "Orchestrating Biometric Validation and High-Performance Leaderboards",
    description: "Built and secured a robust, geofenced HR mobile application covering attendance, gamified leaderboards, and quizzes for retail staff.",
    challenge: "Custom face validation had to run without prior photo enrollment to minimize administrative friction. Furthermore, rendering hundreds of leaderboard entries crashed low-end phones due to remote image payloads, and employees screenshotted and shared quiz answers to exploit cash rewards.",
    solution: "Engineered an on-the-fly verification pipeline using InsightFace (Python) and geofencing coordinates synchronized via PHP OpenCart. Designed viewport-based image lazy-loading and client-side caching to maintain a 60fps leaderboard list. Hardened quiz campaigns with OS-level screenshot blocking and focus-loss tracking.",
    impact: "Eliminated manual photo attendance fraud, stabilized mobile memory usage under heavy payloads, and prevented quiz collusions.",
    stack: ["Flutter", "Python", "InsightFace", "MySQL", "OpenCart", "Viewport Caching", "OS-Level APIs"],
    evidence: [
      "/assets/phc/face_recognitions/3.jpg",
      "/assets/phc/face_recognitions/4.jpg",
      "/assets/phc/face_recognitions/5.jpg",
      "/assets/phc/face_recognitions/6.jpg",
      "/assets/phc/face_recognitions/7.jpg",
      "/assets/phc/leaderboards/1.png",
      "/assets/phc/leaderboards/2.png",
      "/assets/phc/leaderboards/3.png",
      "/assets/phc/leaderboards/4.png",
      "/assets/phc/leaderboards/5.png"
    ]
  },
  {
    id: "pos-mobile",
    title: "Mobile POS (Point of Sale) Application",
    subtitle: "Decentralizing Store Sales While Eliminating Remote Maintenance Travel",
    description: "Replaced an obsolete, offline-compiled desktop POS system with a centralized mobile cashier application supporting sales, inventory syncing, and receipts.",
    challenge: "The legacy desktop POS ran on local store databases. System sync issues or minor bugs required a software engineer to travel physically to the retail store—sometimes out-of-town locations—resulting in steep travel expenses and prolonged operational downtime.",
    solution: "Rebuilt the POS from scratch as a centralized, cross-platform (Mobile, Tablet, and Desktop) Flutter application. By routing transaction data directly to a centralized server database and managing client state centrally, local compilation and databases were eliminated.",
    impact: "Removed 100% of physical maintenance travel costs. New features or bug fixes are now deployed instantly over-the-air, reducing store downtime to zero.",
    stack: ["Flutter (Mobile/Tablet/Desktop)", "REST API", "Receipt Printing", "Barcode Scanning", "Centralized DB"],
    evidence: [
      "/assets/pos/1.png",
      "/assets/pos/4.png",
      "/assets/pos/6.png"
    ],
    forceDesktopStyle: true
  },
  {
    id: "periplus-apps",
    title: "PeriplusApps Mobile: Bookstore Platform",
    subtitle: "Performance Tuning and Layout Consistency across Cross-Platform Devices",
    description: "Contributed to debugging and optimizing Periplus's primary consumer e-commerce mobile application, ensuring stability across active modules.",
    challenge: "The app suffered from redundant duplicate API calls, layout issues across phone and tablet screens, and state-retention bugs during transaction cart and coupon checkout actions.",
    solution: "Audited API payloads to cut redundant endpoints, corrected incorrect request mappings, and rebuilt layouts with responsive constraints. Implemented strict state resets for coupon checkouts.",
    impact: "Reduced mobile network data overhead, resolved UI overflows on tablets, and ensured stable checkout state workflows.",
    stack: ["Flutter", "REST API Integration", "Responsive UI", "State Hardening"],
    evidence: [
      "/assets/mobile_p+/2.jpeg",
      "/assets/mobile_p+/3.jpeg",
      "/assets/mobile_p+/4.jpeg",
      "/assets/mobile_p+/5.jpeg",
      "/assets/mobile_p+/6.jpeg"
    ]
  },
  {
    id: "search-opensearch",
    title: "Book Search & Recommendation Engine (periplus.com)",
    subtitle: "Driving High-Intent Conversion by Aligning Search Results with Trends",
    description: "Reworked the search suggestion and query algorithm for the periplus.com catalog of over one million books.",
    challenge: "The existing search was slow and matched keywords blindly. It frequently pushed out-of-print or low-demand books to the top of results if they had title matches, frustrating users and leading to abandoned searches.",
    solution: "Migrated the search backend from Elasticsearch to OpenSearch to cut software licensing costs. Rewrote query parsing algorithms to prioritize search suggestions similar to Amazon's auto-complete. Implemented custom weighting logic that ranks search results based on a blend of keyword similarity, sales velocity, and trending click activity.",
    impact: "Aligned search output directly with consumer buying behavior. Customers are presented with trending, highly sought-after titles immediately, boosting catalog discovery.",
    stack: ["OpenSearch", "Python", "MySQL", "OpenCart", "Search Suggestions"],
    evidence: [
      "/assets/web_p+/1.png",
      "/assets/web_p+/2.png",
      "/assets/web_p+/3.png"
    ],
    forceDesktopStyle: true
  }
];

export default function JavabooksPage() {
  const [activeTab, setActiveTab] = useState(javabooksCaseStudies[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && javabooksCaseStudies.some((s) => s.id === tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  const activeStudy = javabooksCaseStudies.find((s) => s.id === activeTab) || javabooksCaseStudies[0];

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
            Case Study — PT. Javabooks Indonesia (Periplus)
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-base">
            High-Performance Retail & HR
          </h1>
          <p className="text-sm text-brand-accent max-w-xl font-light mt-2">
            Solving critical business bottlenecks: from eliminating attendance fraud with zero-friction biometric pipelines to stopping POS travel maintenance costs.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:self-end">
          <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px]">
            MAY 2025 - PRESENT
          </Badge>
          <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px] text-brand-accent">
            FULLSTACK & MOBILE
          </Badge>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1 px-1">
            Select Case Study
          </p>
          {javabooksCaseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`w-full text-left p-4 border-2 transition-all cursor-pointer flex items-center justify-between group focus:outline-none ${
                activeTab === study.id
                  ? "bg-brand-base text-background border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] -translate-x-0.5 -translate-y-0.5"
                  : "bg-transparent text-brand-base border-brand-base/30 hover:border-brand-base hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider">
                  {study.title.split(":")[0]}
                </span>
                <span className={`text-[10px] font-light mt-1 ${activeTab === study.id ? "text-background/80" : "text-brand-accent"}`}>
                  {study.title.split(":")[1] || study.title}
                </span>
              </div>
              <FaArrowRight className={`text-xs ${activeTab === study.id ? "text-background" : "text-brand-accent group-hover:text-brand-base transition-colors"}`} />
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
                  {activeStudy.title}
                </h2>
                <p className="text-xs text-brand-accent italic font-light mt-1">
                  &ldquo;{activeStudy.subtitle}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-accent bg-brand-highlight px-3 py-1.5 border border-brand-base/20">
                <FaLock className="text-[9px]" /> Proprietary Enterprise System
              </div>
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
                    The Business Problem & Constraints
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
                    The Engineering Workaround
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
                    Measurable Client Impact
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

          {/* Evidence Showcase */}
          {activeStudy.evidence.length > 0 && (
            <div className="border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-brand-base mb-2">
                System Interface Showcase
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-6">
                Click screenshot to inspect interface details
              </p>

              {/* Mobile phone mockup vs web mockup */}
              {!activeStudy.forceDesktopStyle ? (
                <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory custom-scrollbar-hide">
                  {activeStudy.evidence.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(activeStudy.evidence, idx)}
                      className="flex-none w-[200px] md:w-[240px] snap-center cursor-pointer group"
                    >
                      {/* Phone container */}
                      <div className="relative rounded-[2rem] border-[6px] border-brand-highlight shadow-[6px_6px_0px_0px_var(--color-primary)] overflow-hidden aspect-[9/19.5] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-brand-base bg-[#050505] ring-1 ring-brand-base/10">
                        {/* Notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-3.5 bg-background rounded-full z-20"></div>
                        <Image
                          src={img}
                          alt={`Screen ${idx + 1}`}
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
                  ))}
                </div>
              ) : (
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
                        <div className="flex-1 max-w-[120px] h-3 bg-brand-highlight border border-brand-base/40"></div>
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
              )}
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
