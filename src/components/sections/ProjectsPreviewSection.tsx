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

export default function ProjectsPreviewSection() {
  const getOffsetClass = (index: number) => {
    // 2-column md screens offset: odd items shift down
    const mdOffset = index % 2 === 1 ? "md:translate-y-8" : "md:translate-y-0";
    // 3-column lg screens offset: Col 1 = 0, Col 2 = translate-y-12, Col 3 = translate-y-6
    const lgOffset = index % 3 === 0 ? "lg:translate-y-0" : index % 3 === 1 ? "lg:translate-y-12" : "lg:translate-y-6";
    return `${mdOffset} ${lgOffset}`;
  };

  const getHoverRotation = (index: number) => {
    return index % 2 === 0 ? "group-hover:rotate-1" : "group-hover:-rotate-1";
  };

  return (
    <section id="projects" className="min-h-[100dvh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-base mb-4 uppercase tracking-tighter">
          Featured <span className="text-brand-accent">Work</span>
        </h2>
        <p className="text-lg text-brand-accent max-w-2xl mx-auto leading-relaxed font-light">
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
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`flex h-[300px] sm:h-[330px] md:h-[350px] lg:h-[380px] ${getOffsetClass(idx)} transition-transform duration-500`}
          >
            <Link href={item.link} className="flex-1 flex group relative">
              <div
                className={`flex-1 relative flex flex-col overflow-hidden bg-brand-highlight/10 border border-brand-base/5 shadow-[0_15px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.5)] group-hover:shadow-[0_25px_55px_rgba(0,0,0,0.35)] dark:group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.7)] group-hover:-translate-y-3 ${getHoverRotation(idx)} transition-all duration-500 ease-out h-full w-full rounded-none`}
              >
                {/* Visual Area */}
                <div className="relative w-full h-full overflow-hidden bg-[#0d0d0d]">
                  {item.type === "desktop" ? (
                    <div className="w-full h-full relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                      />
                    </div>
                  ) : (
                    /* Mobile screen centered on a grid pattern canvas */
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
                      {/* Grid background effect */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-primary)_1px,transparent_1px)] bg-[size:16px_16px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                      
                      {/* Floating phone screenshot */}
                      <div className="relative h-[92%] aspect-[9/19.5] shadow-2xl overflow-hidden bg-[#050505] transition-all duration-700 group-hover:scale-[1.04] ease-out">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      </div>
                    </div>
                  )}

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Default Visible Card Tag (Bottom overlay) */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/40 to-transparent pt-12 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-brand-primary">
                    {item.category}
                  </span>
                  <h3 className="text-xs md:text-sm font-black text-brand-base uppercase tracking-tighter leading-tight mt-0.5">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Details Panel (Slides up on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-brand-base/10 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[0.22,1,0.36,1] z-20 opacity-0 group-hover:opacity-100">
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
                        <span
                          key={tech}
                          className="text-[7px] md:text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-neutral-900 border border-brand-base/15 text-brand-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-brand-base group-hover:text-brand-accent flex items-center gap-1 shrink-0 transition-colors duration-300">
                      Spill <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* See All Case Studies Link Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-base text-background border-2 border-brand-base text-[10px] uppercase tracking-[0.25em] font-black rounded-full hover:bg-transparent hover:text-brand-base transition-all duration-300 hover:shadow-lg"
        >
          See all case studies <FaArrowRight size={11} />
        </Link>
      </motion.div>
    </section>
  );
}
