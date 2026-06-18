"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface PreviewItem {
  id: string;
  title: string;
  category: string;
  teaser: string;
  stack: string[];
  image: string;
  type: "desktop" | "mobile";
  link: string;
}

const previewItems: PreviewItem[] = [
  {
    id: "web-1",
    title: "Periplus E-Commerce Engine",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Restructured catalog search using OpenSearch, query suggestion weighting, and popularity rankings.",
    stack: ["OpenSearch", "Python", "MySQL", "OpenCart"],
    image: "/assets/web_p+/1.png",
    type: "desktop",
    link: "/projects#javabooks",
  },
  {
    id: "mobile-1",
    title: "PHC Biometric Attendance",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Integrated face recognition check-in routines and geofencing verification modules.",
    stack: ["Flutter", "Python", "InsightFace", "MySQL"],
    image: "/assets/phc/face_recognitions/3.jpg",
    type: "mobile",
    link: "/projects#javabooks",
  },
  {
    id: "web-2",
    title: "Mobile Point-of-Sale System",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Centralized brick-and-mortar checkout systems with local printing and live stock sync.",
    stack: ["Flutter", "REST API", "Bluetooth Print"],
    image: "/assets/pos/1.png",
    type: "desktop",
    link: "/projects#javabooks",
  },
  {
    id: "web-3",
    title: "Document Management System",
    category: "PT. NEURONWORKS INDONESIA",
    teaser: "Designed audit-compliant document storage using object-level soft-delete triggers and MinIO.",
    stack: ["MinIO", "Zend PHP", "PostgreSQL", "jQuery"],
    image: "/assets/dms/1.jpg",
    type: "desktop",
    link: "/projects#neuronworks",
  },
  {
    id: "mobile-2",
    title: "PHC Quiz & Leaderboard",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Modernized gamification features with viewport memory limits and security overlays.",
    stack: ["Flutter", "State Cache", "OS Security Quiz"],
    image: "/assets/phc/leaderboards/1.png",
    type: "mobile",
    link: "/projects#javabooks",
  },
  {
    id: "web-4",
    title: "JTK Berbagi Platform",
    category: "POLITEKNIK NEGERI BANDUNG",
    teaser: "Engineered backend services and schema flows for academic crowdfunding campaigns.",
    stack: ["Ruby on Rails", "MySQL", "ReactJS", "Waterfall SDLC"],
    image: "/assets/jtkberbagi/2.png",
    type: "desktop",
    link: "/projects#jtk-berbagi",
  },
];

// Easing standar animasi premium (Cubic Bezier)
const easeElegant: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectsPreviewSection() {
  const getOffsetClass = (index: number) => {
    const mdOffset = index % 2 === 1 ? "md:translate-y-8" : "md:translate-y-0";
    const lgOffset = index % 3 === 0 ? "lg:translate-y-0" : index % 3 === 1 ? "lg:translate-y-12" : "lg:translate-y-6";
    return `${mdOffset} ${lgOffset}`;
  };

  return (
    <section id="projects" className="min-h-[100dvh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: easeElegant }}
        className="text-center mb-20"
      >
        <h2 className="text-2xl font-extrabold text-brand-base mb-4 uppercase tracking-tighter leading-tight">
          Featured <span className="text-brand-accent">Work</span>
        </h2>
        <p className="text-base text-brand-accent max-w-2xl mx-auto leading-relaxed font-light">
          A quick preview of some platforms, applications, and backend systems I&apos;ve designed and engineered.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16 lg:gap-y-24 mb-24 md:mb-32">
        {previewItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: easeElegant }}
            className={`flex h-[300px] sm:h-[330px] md:h-[350px] lg:h-[380px] ${getOffsetClass(idx)}`}
          >
            <Link href={item.link} className="flex-1 flex w-full">
              {/* Parent Card dengan variants hover */}
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -8 }
                }}
                transition={{ duration: 0.4, ease: easeElegant }}
                className="flex-1 relative flex flex-col overflow-hidden bg-brand-highlight/5 border border-brand-base/5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] h-full w-full rounded-none"
              >
                {/* Visual Area */}
                <div className="relative w-full h-full overflow-hidden bg-[#0d0d0d]">
                  {item.type === "desktop" ? (
                    <div className="w-full h-full relative">
                      <motion.div
                        className="w-full h-full"
                        variants={{
                          initial: { scale: 1, filter: "grayscale(50%)" },
                          hover: { scale: 1.04, filter: "grayscale(0%)" }
                        }}
                        transition={{ duration: 0.6, ease: easeElegant }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top"
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#161616] to-[#0a0a0a] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-primary)_1px,transparent_1px)] bg-[size:16px_16px] opacity-10" />

                      {/* Floating phone screenshot */}
                      <motion.div
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.04 }
                        }}
                        transition={{ duration: 0.6, ease: easeElegant }}
                        className="relative h-[90%] aspect-[9/19.5] shadow-2xl overflow-hidden bg-[#050505]"
                      >
                        <motion.div
                          className="w-full h-full"
                          variants={{
                            initial: { filter: "grayscale(50%)" },
                            hover: { filter: "grayscale(0%)" }
                          }}
                          transition={{ duration: 0.6, ease: easeElegant }}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  )}

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
                </div>

                {/* Default Visible Card Tag (Fade out smooth saat hover) */}
                <motion.div
                  variants={{
                    initial: { opacity: 1, y: 0 },
                    hover: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.35, ease: easeElegant }}
                  className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent pt-16 flex flex-col justify-end pointer-events-none z-10"
                >
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-brand-primary">
                    {item.category}
                  </span>
                  <h3 className="text-xs md:text-sm font-black text-brand-base uppercase tracking-tighter leading-tight mt-1">
                    {item.title}
                  </h3>
                </motion.div>

                {/* Hover Details Panel (Slide up + Fade in mewah) */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 15 },
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: easeElegant,
                        staggerChildren: 0.04, // Efek sekuensial buat stack teknologi
                        delayChildren: 0.05
                      }
                    }
                  }}
                  transition={{ duration: 0.4, ease: easeElegant }}
                  className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-brand-base/10 flex flex-col justify-end z-20"
                >
                  <span className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-brand-primary mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-xs md:text-sm font-black text-brand-base uppercase tracking-tighter leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-brand-accent/80 font-light leading-relaxed mb-4 text-justify line-clamp-2">
                    {item.teaser}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-brand-base/10">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {item.stack.slice(0, 3).map((tech) => (
                        <motion.span
                          key={tech}
                          variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            hover: { opacity: 1, scale: 1 }
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="text-[7px] md:text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-neutral-900 border border-brand-base/15 text-brand-accent"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Arrow text dengan micro-bounce */}
                    <motion.span
                      className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-brand-base hover:text-brand-accent flex items-center gap-1 shrink-0"
                    >
                      Spill
                      <motion.div
                        variants={{
                          initial: { x: 0 },
                          hover: { x: 4 }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <FaArrowRight size={8} />
                      </motion.div>
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Button See All */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-none font-bold uppercase tracking-widest px-6 py-4 text-xs md:text-sm bg-brand-base text-background border border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base"
        >
          See all case studies <FaArrowRight size={12} />
        </Link>
      </motion.div>
    </section>
  );
}
