"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaLayerGroup, FaCheckCircle, FaLock, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Prevent click through
                            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
                            >
                                <FaTimes size={20} />
                            </button>

                            {/* Header Image Area */}
                            <div className={`h-64 md:h-80 w-full ${project.image} relative`}>
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
                                            {project.category}
                                        </span>
                                        {project.isPrivate && (
                                            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
                                                <FaLock size={10} /> Private / Enterprise
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 md:p-10 space-y-10">

                                {/* 1. Overview */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                        Project Overview
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {project.description}
                                    </p>
                                </div>

                                {/* 2. Challenge & Solution (Case Study) */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                        <h4 className="text-lg font-bold text-orange-800 mb-3">The Challenge</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            {project.challenge || "To be added: The specific problem statement and complexities faced during this project."}
                                        </p>
                                    </div>
                                    <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                        <h4 className="text-lg font-bold text-teal-800 mb-3">The Solution</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            {project.solution || "To be added: The architectural approach and technical solutions implemented to solve the challenge."}
                                        </p>
                                    </div>
                                </div>

                                {/* Responsibilities & Impact */}
                                {(project.responsibilities || project.impact) && (
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {project.responsibilities && (
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-3">My Responsibilities</h4>
                                                <ul className="space-y-2">
                                                    {project.responsibilities.map((item, idx) => (
                                                        <li key={idx} className="flex gap-2 text-gray-700">
                                                            <span className="text-brand-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.impact && (
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-3">Key Impact</h4>
                                                <ul className="space-y-2">
                                                    {project.impact.map((item, idx) => (
                                                        <li key={idx} className="flex gap-2 text-gray-700">
                                                            <span className="text-brand-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* 3. Key Features */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <FaLayerGroup className="text-brand-base" /> Key Features
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {(project.features || ["Feature 1 placeholder", "Feature 2 placeholder", "Feature 3 placeholder", "Feature 4 placeholder"]).map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                <FaCheckCircle className="text-brand-accent mt-1 shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. Tech Stack */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium border border-gray-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 5. Evidence / Screenshots Section */}
                                {project.evidence && project.evidence.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            Project Evidence
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4">Click on an image to view in full screen.</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.evidence.map((img, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-50"
                                                    onClick={() => openLightbox(idx)}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`Evidence ${idx + 1}`}
                                                        width={800}
                                                        height={600}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Footer / CTA usually empty for private projects, or link to contact */}

                                {/* Footer / CTA - Refined Privacy Logic */}
                                {(() => {
                                    const hasLink = project.link && project.link !== "#";
                                    const isSemiPrivate = project.isPrivate && hasLink;
                                    const isFullyPrivate = project.isPrivate && !hasLink;
                                    const isPublic = !project.isPrivate;

                                    if (isFullyPrivate) {
                                        return (
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                                                <p className="text-gray-500 text-sm mb-2">
                                                    Due to non-disclosure agreements, source code and live demos are not available.
                                                </p>
                                                <p className="font-medium text-brand-base">
                                                    Interested in the technical details? <a href="/contact" className="underline hover:text-brand-primary">Let&apos;s chat about it.</a>
                                                </p>
                                            </div>
                                        );
                                    }

                                    if (isSemiPrivate) {
                                        return (
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                                                <p className="text-gray-500 text-sm mb-4">
                                                    Source code is not available due to non-disclosure agreements, but you can view the live result.
                                                </p>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-base text-white rounded-xl font-medium hover:bg-brand-primary transition-all shadow-md hover:shadow-lg"
                                                >
                                                    <FaExternalLinkAlt /> Visit Live Site
                                                </a>
                                            </div>
                                        );
                                    }

                                    if (isPublic) {
                                        return (
                                            <div className="flex flex-wrap gap-4 mt-8">
                                                {hasLink && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-base text-white rounded-xl font-medium hover:bg-brand-primary transition-all shadow-md hover:shadow-lg"
                                                    >
                                                        {project.link.includes("github.com") ? "View Source Code" : "Visit Live Site"}
                                                        {project.link.includes("github.com") ? null : <FaExternalLinkAlt />}
                                                    </a>
                                                )}
                                                {/* If we had a separate source code link field, we would use it here. 
                                                    For now, assuming public projects with github links in 'link' field are just 'View Source' 
                                                    or if we want separate buttons we'd need data structure change. 
                                                    Sticking to generic 'Visit' or inferred 'View Source' based on URL. */}
                                            </div>
                                        );
                                    }
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
        </AnimatePresence>
    );
}
