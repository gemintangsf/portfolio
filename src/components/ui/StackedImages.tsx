"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TimelineImage } from "@/data/timeline";

interface StackedImagesProps {
  images: TimelineImage[];
  className?: string;
}

export default function StackedImages({ images, className }: StackedImagesProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const [isStackHovered, setIsStackHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div
      onMouseEnter={() => setIsStackHovered(true)}
      onMouseLeave={() => {
        setIsStackHovered(false);
        setHoveredCardIdx(null);
      }}
      className={`relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[480px] xl:max-w-[540px] h-[190px] sm:h-[240px] lg:h-[320px] xl:h-[360px] flex items-center justify-center my-8 lg:my-0 ${className || ""}`}
    >
      {images.map((img, idx) => {
        const isHovered = hoveredCardIdx === idx;
        const isAnyHovered = hoveredCardIdx !== null;

        const total = images.length;
        const effIdx = total - 1 - idx;
        const factor = isMobile ? 0.45 : 1.0;

        let fanX = 0;
        let fanY = 0;
        let fanRotate = 0;

        let initialRotate = 0;
        let initialX = 0;
        let initialY = 0;

        if (total > 1) {
          if (effIdx === 0) {
            initialRotate = -6;
            initialX = -10;
            initialY = -6;
          } else if (effIdx === 1) {
            initialRotate = 4;
            initialX = 8;
            initialY = 4;
          } else if (effIdx === 2) {
            initialRotate = -2;
            initialX = 2;
            initialY = -2;
          } else {
            initialRotate = 1;
            initialX = -2;
            initialY = 2;
          }
        }

        if (isStackHovered && total > 1) {
          if (total === 2) {
            fanX = effIdx === 0 ? -60 * factor : 60 * factor;
            fanRotate = effIdx === 0 ? -4 : 4;
          } else if (total === 3) {
            if (effIdx === 0) {
              fanX = -110 * factor;
              fanRotate = -6;
              fanY = -4;
            } else if (effIdx === 1) {
              fanX = 0;
              fanRotate = 0;
              fanY = 4;
            } else {
              fanX = 110 * factor;
              fanRotate = 6;
              fanY = -4;
            }
          } else if (total >= 4) {
            if (effIdx === 0) {
              fanX = -150 * factor;
              fanRotate = -8;
              fanY = -6;
            } else if (effIdx === 1) {
              fanX = -50 * factor;
              fanRotate = -3;
              fanY = 2;
            } else if (effIdx === 2) {
              fanX = 50 * factor;
              fanRotate = 3;
              fanY = -2;
            } else {
              fanX = 150 * factor;
              fanRotate = 8;
              fanY = 6;
            }
          }
        } else {
          fanX = initialX;
          fanY = initialY;
          fanRotate = initialRotate;
        }

        const targetScale = isHovered ? 1.12 : isAnyHovered ? 0.92 : 1.0;
        const targetZIndex = isHovered ? 50 : total - 1 - idx;
        const targetOpacity = isHovered ? 1.0 : isAnyHovered ? 0.45 : 1.0;
        const targetFilter = isHovered
          ? "grayscale(0%) brightness(105%)"
          : isAnyHovered
            ? "grayscale(80%) brightness(70%)"
            : isStackHovered
              ? "grayscale(0%) brightness(100%)"
              : "grayscale(20%) brightness(85%)";

        const cardContent = (
          <motion.div
            key={img.src}
            onMouseEnter={() => setHoveredCardIdx(idx)}
            onMouseLeave={() => setHoveredCardIdx(null)}
            animate={{
              x: fanX,
              y: fanY,
              rotate: fanRotate,
              zIndex: targetZIndex,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute w-[80%] h-[80%] cursor-pointer"
          >
            <motion.div
              animate={{
                y: isHovered ? -24 : 0,
                scale: targetScale,
                opacity: targetOpacity,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full h-full border-2 border-brand-base bg-card-bg shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[10px_10px_0px_0px_var(--color-base)] hover:border-brand-base overflow-hidden rounded-none"
            >
              {img.src === "placeholder" ? (
                <Link href={img.link} className="block w-full h-full">
                  <div className="relative w-full h-full bg-[#0d0d0d] flex flex-col items-center justify-center border-2 border-dashed border-brand-base/40 p-6 text-center select-none group-hover:border-brand-primary transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-base/20 flex items-center justify-center mb-3 group-hover:border-brand-primary transition-colors bg-brand-highlight/20">
                      <span className="text-xl font-black text-brand-base group-hover:text-brand-primary transition-colors">
                        +
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent group-hover:text-brand-base transition-colors">
                      Add New Journey
                    </span>
                    <span className="text-[8px] text-brand-accent/50 uppercase tracking-[0.1em] mt-1">
                      Your Logo / Project Here
                    </span>

                    {/* Individual Explore Overlay - visible when this card is hovered */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/75 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none p-4 text-center"
                      >
                        <span className="px-4 py-2 border-2 border-brand-base bg-background text-brand-base text-[10px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_var(--color-primary)]">
                          Let's Collaborate
                        </span>
                      </motion.div>
                    )}
                  </div>
                </Link>
              ) : img.link ? (
                <Link href={img.link} className="block w-full h-full">
                  <div className="relative w-full h-full bg-[#0d0d0d]">
                    <motion.div
                      animate={{ filter: targetFilter }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={img.src}
                        alt={img.projectName || "Project Screenshot"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Individual Explore Overlay - visible when this card is hovered */}
                    {isHovered && img.link && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none p-4 text-center"
                      >
                        <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-1">
                          {img.projectName || "Explore Project"}
                        </span>
                        <span className="px-3 py-1.5 border border-brand-base bg-background text-brand-base text-[9px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_var(--color-primary)]">
                          Explore Project
                        </span>
                      </motion.div>
                    )}
                  </div>
                </Link>
              ) : (
                <div className="relative w-full h-full bg-[#0d0d0d]">
                  <motion.div
                    animate={{ filter: targetFilter }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={img.src}
                      alt={img.projectName || "Project Screenshot"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
            </motion.div>
          </motion.div>
        );

        return cardContent;
      })}
    </div>
  );
}
