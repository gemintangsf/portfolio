"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FaTimes, FaLayerGroup, FaCheckCircle, FaLock, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaDatabase, FaMemory, FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { useUI } from "../context/UIContext";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string; // Tailwind class for placeholder
    stack: string[];
    link: string;
    isPrivate?: boolean;
    challenge?: string;
    solution?: string;
    features?: string[];
    evidence?: string[]; // Array of image paths for screenshots/evidence
    responsibilities?: string[];
    impact?: string[];
    tags?: string[];
    technicalOptimizations?: {
        title: string;
        description: string;
    }[];
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const { setModalOpen } = useUI();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Lock body scroll and notify UI context when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
            setModalOpen(true);
        } else {
            document.body.style.overflow = "auto";
            setModalOpen(false);
        }
        return () => {
            document.body.style.overflow = "auto";
            setModalOpen(false);
        };
    }, [project, setModalOpen]);

    // Handle Keyboard Navigation for Lightbox
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedImageIndex === null) return;

        if (e.key === "Escape") {
            setSelectedImageIndex(null);
        } else if (e.key === "ArrowLeft") {
            setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
        } else if (e.key === "ArrowRight") {
            setSelectedImageIndex((prev) => (prev !== null && project?.evidence && prev < project.evidence.length - 1 ? prev + 1 : prev));
        }
    }, [selectedImageIndex, project]);

    useEffect(() => {
        if (selectedImageIndex !== null) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIndex, handleKeyDown]);


    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (project?.evidence && selectedImageIndex !== null && selectedImageIndex < project.evidence.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (project?.evidence && selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x < -threshold && project?.evidence && selectedImageIndex !== null && selectedImageIndex < project.evidence.length - 1) {
            handleNext(null as any);
        } else if (info.offset.x > threshold && project?.evidence && selectedImageIndex !== null && selectedImageIndex > 0) {
            handlePrev(null as any);
        }
    };

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()} // Prevent click through
                            className="bg-background border border-brand-base/20 rounded-none w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-3 bg-background border border-brand-base/20 hover:bg-brand-base hover:text-background text-brand-base transition-colors z-20 rounded-none mix-blend-difference"
                            >
                                <FaTimes size={18} />
                            </button>

                            {/* Header Image Area */}
                            <div className={`h-64 md:h-96 w-full ${project.image} relative`}>
                                <div className="absolute inset-0 bg-background/60 flex flex-col justify-end p-8 md:p-12 border-b border-brand-base/10 backdrop-blur-[2px]">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-4 py-1.5 bg-brand-base text-background text-[10px] font-bold uppercase tracking-widest rounded-none">
                                            {project.category}
                                        </span>
                                        {project.isPrivate && (
                                            <span className="flex items-center gap-2 px-4 py-1.5 bg-background border border-brand-base/20 text-brand-base text-[10px] font-bold uppercase tracking-widest rounded-none">
                                                <FaLock size={10} /> Private
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-6xl font-black text-brand-base mb-2 uppercase tracking-tighter leading-none">{project.title}</h2>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 md:p-12 space-y-16">

                                {/* 1. Overview */}
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-base/10 pb-4">
                                        Executive Summary
                                    </h3>
                                    <p className="text-brand-base font-light leading-relaxed text-lg text-justify">
                                        {project.description}
                                    </p>
                                </div>

                                {/* 2. Challenge & Solution (Case Study) */}
                                {(project.challenge || project.solution) && (
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                        {project.challenge && (
                                            <div className="flex-1 p-8 md:p-10 border border-brand-base/20 bg-background relative group">
                                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-base/10">
                                                   <span className="w-10 h-10 flex items-center justify-center bg-brand-base/5 text-brand-base border border-brand-base/20 shrink-0">
                                                        <FaExclamationTriangle size={16} />
                                                   </span>
                                                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-base">
                                                        The Challenge
                                                    </h4>
                                                </div>
                                                <p className="text-brand-accent font-light leading-relaxed text-sm md:text-base text-justify">
                                                    {project.challenge}
                                                </p>
                                            </div>
                                        )}
                                        {project.solution && (
                                            <div className="flex-1 p-8 md:p-10 border border-brand-base bg-brand-base/5 relative group hover:bg-brand-base hover:text-background transition-all duration-500">
                                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-base/20 group-hover:border-background/20 transition-colors">
                                                   <span className="w-10 h-10 flex items-center justify-center bg-background text-brand-base border border-brand-base/20 shrink-0 group-hover:bg-background/10 group-hover:text-background group-hover:border-background/20 transition-colors">
                                                        <FaLightbulb size={16} />
                                                   </span>
                                                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-base group-hover:text-background transition-colors">
                                                        The Solution
                                                    </h4>
                                                </div>
                                                <p className="text-brand-base font-light leading-relaxed text-sm md:text-base text-justify group-hover:text-background/90 transition-colors">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Technical Optimizations Section */}
                                {project.technicalOptimizations && project.technicalOptimizations.length > 0 && (
                                    <div>
                                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-base/10 pb-4">
                                            Performance & Technical Optimization
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {project.technicalOptimizations.map((opt, idx) => (
                                                <div key={idx} className="p-6 border border-brand-base/10 bg-brand-base/5 hover:bg-brand-base hover:text-background transition-all group flex flex-col gap-4">
                                                    <div className="flex items-center gap-3">
                                                        {idx === 0 && <FaDatabase className="text-brand-accent group-hover:text-background shrink-0" />}
                                                        {idx === 1 && <FaMemory className="text-brand-accent group-hover:text-background shrink-0" />}
                                                        {idx === 2 && <FaLayerGroup className="text-brand-accent group-hover:text-background shrink-0" />}
                                                        <h4 className="text-xs font-bold uppercase tracking-wider">{opt.title}</h4>
                                                    </div>
                                                    <p className="text-xs font-light leading-relaxed opacity-80 group-hover:opacity-100 italic">
                                                        "{opt.description}"
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Responsibilities & Impact */}
                                {(project.responsibilities || project.impact) && (
                                    <div className="grid md:grid-cols-2 gap-12">
                                        {project.responsibilities && (
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-base/10 pb-4">My Role & Responsibilities</h4>
                                                <ul className="space-y-4">
                                                    {project.responsibilities.map((item, idx) => (
                                                        <li key={idx} className="flex gap-4 text-brand-base font-light text-sm">
                                                            <span className="text-brand-accent mt-0.5 text-[10px] font-bold border border-brand-base/20 px-2 rounded-none">0{idx + 1}</span>
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.impact && (
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-base/10 pb-4">Key Impact Output</h4>
                                                <ul className="space-y-4">
                                                    {project.impact.map((item, idx) => (
                                                        <li key={idx} className="flex gap-4 text-brand-base font-light text-sm">
                                                            <span className="text-brand-base mt-0.5 text-[10px] font-bold border border-brand-base px-2 rounded-none">0{idx + 1}</span>
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* 3. Key Capabilities */}
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-base/10 pb-4">
                                        System Capabilities
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-brand-base/10">
                                        {(project.features || []).map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-5 border-b border-r border-brand-base/10 bg-background hover:bg-brand-base hover:text-background transition-colors group cursor-default">
                                                <FaCheckCircle className="mt-0.5 shrink-0 text-brand-accent group-hover:text-background" />
                                                <span className="font-light text-sm group-hover:text-background text-brand-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. Tech Stack */}
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 border-b border-brand-base/10 pb-4">
                                        Technology Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-5 py-2 border border-brand-base/20 bg-background text-brand-base text-[10px] font-bold uppercase tracking-widest hover:bg-brand-base hover:text-background transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 5. Evidence / Screenshots Section */}
                                {project.evidence && project.evidence.length > 0 && (
                                    <div className="pt-8 border-t border-brand-base/10">
                                        <h3 className="text-2xl md:text-3xl font-black text-brand-base mb-2 uppercase tracking-tighter">
                                            Application Showcase
                                        </h3>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-8">Click image to expand view</p>

                                        {/* Mobile Layout vs Web Layout */}
                                        {(project.category?.toLowerCase().includes("mobile") || project.tags?.includes("Mobile")) ? (
                                            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                                {project.evidence.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex-none w-[240px] md:w-[280px] snap-center overflow-hidden border border-brand-base/20 cursor-pointer bg-background group"
                                                        onClick={() => openLightbox(idx)}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Mobile Screen ${idx + 1}`}
                                                            width={600}
                                                            height={1200}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className={`grid grid-cols-1 ${(project.evidence?.length ?? 0) <= 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6 md:gap-10`}>
                                                {project.evidence.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`relative overflow-hidden border border-brand-base/10 shadow-sm cursor-pointer bg-brand-base/5 group transition-all duration-500 hover:border-brand-base hover:shadow-2xl hover:-translate-y-2 ${(project.evidence?.length ?? 0) > 2 && idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                                                        onClick={() => openLightbox(idx)}
                                                    >
                                                        {/* Browser-like Header (Minimal) */}
                                                        <div className="flex gap-1.5 p-3 border-b border-brand-base/5 bg-background/50">
                                                            <div className="w-2 h-2 rounded-full bg-brand-base/10 group-hover:bg-brand-base/30 transition-colors"></div>
                                                            <div className="w-2 h-2 rounded-full bg-brand-base/10 group-hover:bg-brand-base/30 transition-colors"></div>
                                                            <div className="w-2 h-2 rounded-full bg-brand-base/10 group-hover:bg-brand-base/30 transition-colors"></div>
                                                        </div>
                                                        
                                                        <div className="relative overflow-hidden aspect-video">
                                                            <Image
                                                                src={img}
                                                                alt={`Web Screen ${idx + 1}`}
                                                                width={1200}
                                                                height={800}
                                                                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                                            />
                                                            <div className="absolute inset-0 bg-brand-base/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <span className="bg-background text-brand-base px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-brand-base translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                                    Expand View
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Footer / CTA - Refined Logic */}
                                {(() => {
                                    const hasLink = project.link && project.link !== "#";
                                    const isSemiPrivate = project.isPrivate && hasLink;
                                    const isFullyPrivate = project.isPrivate && !hasLink;
                                    const isPublic = !project.isPrivate;

                                    if (isFullyPrivate) {
                                        return (
                                            <div className="border border-brand-base/10 p-8 text-center bg-brand-base/5">
                                                <p className="text-brand-accent text-xs font-light mb-4">
                                                    Due to non-disclosure agreements, source code and live demos are restricted.
                                                </p>
                                                <p className="text-[10px] font-bold text-brand-base uppercase tracking-widest">
                                                    <a href="/contact" className="hover:text-brand-accent underline decoration-brand-base/30 underline-offset-4">Inquire for details</a>
                                                </p>
                                            </div>
                                        );
                                    }

                                    if (isSemiPrivate) {
                                        return (
                                            <div className="border border-brand-base/10 p-8 text-center bg-brand-base/5 flex flex-col items-center">
                                                <p className="text-brand-accent text-xs font-light mb-6">
                                                    Source code is NDA restricted, but you can explore the production environment.
                                                </p>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 px-8 py-3 bg-brand-base text-background text-[10px] uppercase tracking-widest font-bold hover:invert transition-all"
                                                >
                                                    <FaExternalLinkAlt /> Open in Browser
                                                </a>
                                            </div>
                                        );
                                    }

                                    if (isPublic) {
                                        return (
                                            <div className="flex flex-col md:flex-row gap-4 border-t border-brand-base/10 pt-12">
                                                {hasLink && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-base text-background text-[10px] uppercase tracking-widest font-bold hover:invert transition-all"
                                                    >
                                                        {project.link.includes("github.com") ? "View Repository" : "Open in Browser"}
                                                        {project.link.includes("github.com") ? null : <FaExternalLinkAlt />}
                                                    </a>
                                                )}
                                            </div>
                                        );
                                    }
                                    return null;
                                })()}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Lightbox Overlay */}
                    <AnimatePresence>
                        {selectedImageIndex !== null && project.evidence && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                                onClick={closeLightbox}
                            >
                                {/* Close Button */}
                                <button
                                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                                    onClick={closeLightbox}
                                >
                                    <FaTimes size={32} />
                                </button>

                                {/* Image Container */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={handleDragEnd}
                                    className="relative max-w-7xl max-h-[90vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={project.evidence[selectedImageIndex]}
                                        alt={`Evidence Fullscreen ${selectedImageIndex + 1}`}
                                        width={1920}
                                        height={1080}
                                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl w-auto h-auto pointer-events-none"
                                    />

                                    {/* Navigation Buttons */}
                                    {project.evidence.length > 1 && (
                                        <>
                                            {selectedImageIndex > 0 && (
                                                <button
                                                    className="absolute left-2 lg:left-[-60px] top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all bg-black/20 lg:bg-transparent"
                                                    onClick={handlePrev}
                                                >
                                                    <FaChevronLeft size={32} />
                                                </button>
                                            )}

                                            {selectedImageIndex < project.evidence.length - 1 && (
                                                <button
                                                    className="absolute right-2 lg:right-[-60px] top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all bg-black/20 lg:bg-transparent"
                                                    onClick={handleNext}
                                                >
                                                    <FaChevronRight size={32} />
                                                </button>
                                            )}
                                        </>
                                    )}

                                    {/* Caption / Counter */}
                                    <div className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-medium">
                                        Image {selectedImageIndex + 1} of {project.evidence.length}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
