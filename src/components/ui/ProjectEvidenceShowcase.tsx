"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaLock } from "react-icons/fa";
import { CaseStudy } from "@/components/layouts/ProjectLayout";

interface ProjectEvidenceShowcaseProps {
  activeStudy: CaseStudy;
  evidenceIndex: number;
  setEvidenceIndex: (index: number) => void;
  openLightbox: (images: string[], index: number) => void;
  isMobileViewport: boolean;
}

export default function ProjectEvidenceShowcase({
  activeStudy,
  evidenceIndex,
  setEvidenceIndex,
  openLightbox,
  isMobileViewport,
}: ProjectEvidenceShowcaseProps) {
  if (!activeStudy.evidence || activeStudy.evidence.length === 0) return null;

  return (
    <div className="border-4 border-brand-base p-6 md:p-8 bg-background shadow-[8px_8px_0px_0px_var(--color-primary)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-black uppercase tracking-tight text-brand-base mb-1 leading-tight">
            Showcase app
          </h3>
        </div>
      </div>

      {/* Showcase Carousel Container */}
      <div className="relative w-full">
        {activeStudy.isMobileApp && !activeStudy.forceDesktopStyle ? (
          /* 3D Coverflow Mobile App Carousel */
          <div className="flex flex-col items-center">
            <div className="relative w-full h-[25rem] md:h-[32rem] flex items-center justify-center overflow-hidden py-4 select-none">
              {/* Left & Right Fade Gradients for visual depth */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

              {activeStudy.evidence.map((img, idx) => {
                const diff = idx - evidenceIndex;
                const isActive = diff === 0;
                const isPrev = diff === -1;
                const isNext = diff === 1;

                if (Math.abs(diff) > 1 && activeStudy.evidence.length > 2) return null;

                const offset = isMobileViewport ? 120 : 190;
                const xOffset = diff * offset;

                return (
                  <motion.div
                    key={img}
                    animate={{
                      x: xOffset,
                      scale: isActive ? 1.05 : 0.85,
                      opacity: isActive ? 1.0 : 0.4,
                      zIndex: isActive ? 10 : 5,
                      rotateY: isActive ? 0 : (diff < 0 ? 20 : -20),
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute w-[9.5rem] md:w-[13.5rem] aspect-[9/19.5] cursor-pointer group"
                    style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                    onClick={() => {
                      if (isPrev) setEvidenceIndex(evidenceIndex - 1);
                      else if (isNext) setEvidenceIndex(evidenceIndex + 1);
                      else if (isActive) openLightbox(activeStudy.evidence, evidenceIndex);
                    }}
                  >
                    <div className={`relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] shadow-[6px_6px_0px_0px_var(--color-primary)] overflow-hidden bg-[#050505] transition-all duration-300 ${isActive ? 'border-brand-base' : 'border-brand-highlight hover:border-brand-base/60'
                      }`}>
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-3 bg-background rounded-full z-20"></div>

                      <Image
                        src={img}
                        alt={`Screen ${idx + 1}`}
                        fill
                        className="object-cover transition-all duration-500 grayscale-[0.2] group-hover:grayscale-0"
                        sizes="(max-width: 768px) 160px, 260px"
                      />

                      {isActive && (
                        <div className="absolute inset-0 bg-brand-base/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-background text-brand-base text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 border border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)]">
                            Zoom Screen
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Chevron Controls and Page Indicators */}
            {activeStudy.evidence.length > 1 && (
              <div className="flex gap-4 mt-6 justify-center items-center">
                <button
                  disabled={evidenceIndex === 0}
                  onClick={() => setEvidenceIndex(Math.max(0, evidenceIndex - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-background border-2 border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] disabled:opacity-30 disabled:pointer-events-none disabled:shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer focus:outline-none"
                >
                  <FaChevronLeft className="text-brand-base text-xs" />
                </button>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent flex items-center px-4 py-2 border border-brand-base/20 bg-brand-highlight select-none">
                  {evidenceIndex + 1} / {activeStudy.evidence.length}
                </span>
                <button
                  disabled={evidenceIndex === activeStudy.evidence.length - 1}
                  onClick={() => setEvidenceIndex(Math.min(activeStudy.evidence.length - 1, evidenceIndex + 1))}
                  className="w-10 h-10 flex items-center justify-center bg-background border-2 border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] disabled:opacity-30 disabled:pointer-events-none disabled:shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer focus:outline-none"
                >
                  <FaChevronRight className="text-brand-base text-xs" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Premium Desktop Browser Mockup with Address Bar & Thumbnail Strip */
          <div className="flex flex-col gap-6">
            <div
              onClick={() => openLightbox(activeStudy.evidence, evidenceIndex)}
              className="relative overflow-hidden border-4 border-brand-base shadow-[8px_8px_0px_0px_var(--color-primary)] cursor-pointer bg-brand-base/5 group aspect-video rounded-sm"
            >
              {/* Browser top-bar */}
              <div className="flex items-center gap-3 p-3 border-b-4 border-brand-base bg-background select-none">
                {/* Window dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                {/* URL address bar */}
                <div className="flex-1 max-w-[18rem] sm:max-w-[26rem] h-6 px-3 bg-brand-highlight border border-brand-base/40 rounded flex items-center justify-between text-[9px] text-brand-accent/70 font-mono">
                  <div className="flex items-center gap-1.5 truncate">
                    <FaLock className="text-[8px] text-brand-accent/50 shrink-0" />
                    <span className="truncate">gemintang.dev/projects/{activeStudy.id}</span>
                  </div>
                  <span className="text-[9px] hover:text-brand-base shrink-0 font-sans cursor-pointer">↻</span>
                </div>
                {/* Desktop Next/Prev Quick Chevrons inside top bar */}
                {activeStudy.evidence.length > 1 && (
                  <div className="flex gap-1 ml-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEvidenceIndex(Math.max(0, evidenceIndex - 1));
                      }}
                      disabled={evidenceIndex === 0}
                      className="p-1 border border-brand-base/20 hover:border-brand-base hover:bg-brand-highlight disabled:opacity-20 cursor-pointer"
                    >
                      <FaChevronLeft className="text-[9px]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEvidenceIndex(Math.min(activeStudy.evidence.length - 1, evidenceIndex + 1));
                      }}
                      disabled={evidenceIndex === activeStudy.evidence.length - 1}
                      className="p-1 border border-brand-base/20 hover:border-brand-base hover:bg-brand-highlight disabled:opacity-20 cursor-pointer"
                    >
                      <FaChevronRight className="text-[9px]" />
                    </button>
                  </div>
                )}
              </div>

              {/* Main display screen */}
              <div className="relative w-full h-[calc(100%-48px)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={evidenceIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeStudy.evidence[evidenceIndex]}
                      alt={`Desktop Screen ${evidenceIndex + 1}`}
                      fill
                      className="object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 1024px) 100vw, 820px"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-brand-base/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-background text-brand-base text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)]">
                    Zoom Interface
                  </span>
                </div>
              </div>
            </div>

            {/* Filmstrip Thumbnails */}
            {activeStudy.evidence.length > 1 && (
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-accent">
                  Screens ({evidenceIndex + 1} of {activeStudy.evidence.length})
                </span>
                <div className="flex items-center gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-brand-base/30 scrollbar-track-transparent">
                  {activeStudy.evidence.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setEvidenceIndex(idx)}
                      className={`relative shrink-0 w-16 md:w-24 aspect-video border-2 transition-all cursor-pointer overflow-hidden ${idx === evidenceIndex
                        ? "border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] -translate-y-0.5"
                        : "border-brand-base/20 opacity-50 hover:opacity-100 hover:border-brand-base/40"
                        }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
