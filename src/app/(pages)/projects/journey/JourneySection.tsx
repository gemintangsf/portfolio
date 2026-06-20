"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    FaArrowLeft,
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaArrowRight
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Card, Badge } from "@/components/ui";

import { timelineData, TimelineImage } from "@/data/timeline";

function StackedImages({
    images,
    className
}: {
    images: TimelineImage[];
    className?: string;
}) {
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

                // Calculate coordinates for fanning out on stack hover
                let fanX = 0;
                let fanY = 0;
                let fanRotate = 0;

                const total = images.length;
                const factor = isMobile ? 0.45 : 1.0;

                // Default stacked layout variables
                let initialRotate = 0;
                let initialX = 0;
                let initialY = 0;

                if (total > 1) {
                    if (idx === 0) { initialRotate = -6; initialX = -10; initialY = -6; }
                    else if (idx === 1) { initialRotate = 4; initialX = 8; initialY = 4; }
                    else if (idx === 2) { initialRotate = -2; initialX = 2; initialY = -2; }
                    else { initialRotate = 1; initialX = -2; initialY = 2; }
                }

                // Fanned out offsets when stack is hovered
                if (isStackHovered && total > 1) {
                    if (total === 2) {
                        fanX = idx === 0 ? -60 * factor : 60 * factor;
                        fanRotate = idx === 0 ? -4 : 4;
                    } else if (total === 3) {
                        if (idx === 0) { fanX = -110 * factor; fanRotate = -6; fanY = -4; }
                        else if (idx === 1) { fanX = 0; fanRotate = 0; fanY = 4; }
                        else { fanX = 110 * factor; fanRotate = 6; fanY = -4; }
                    } else if (total >= 4) {
                        if (idx === 0) { fanX = -150 * factor; fanRotate = -8; fanY = -6; }
                        else if (idx === 1) { fanX = -50 * factor; fanRotate = -3; fanY = 2; }
                        else if (idx === 2) { fanX = 50 * factor; fanRotate = 3; fanY = -2; }
                        else { fanX = 150 * factor; fanRotate = 8; fanY = 6; }
                    }
                } else {
                    fanX = initialX;
                    fanY = initialY;
                    fanRotate = initialRotate;
                }

                // When a specific card is hovered, lift it up higher
                const targetX = fanX;
                const targetY = isHovered ? fanY - 24 : fanY;
                const targetRotate = isHovered ? 0 : fanRotate;
                const targetScale = isHovered ? 1.12 : (isAnyHovered ? 0.92 : 1.0);
                const targetZIndex = isHovered ? 50 : idx;
                const targetOpacity = isHovered ? 1.0 : (isAnyHovered ? 0.45 : 1.0);
                const targetFilter = isHovered ? "grayscale(0%) brightness(105%)" : (isAnyHovered ? "grayscale(80%) brightness(70%)" : (isStackHovered ? "grayscale(0%) brightness(100%)" : "grayscale(20%) brightness(85%)"));

                const cardContent = (
                    <motion.div
                        key={img.src}
                        onMouseEnter={() => setHoveredCardIdx(idx)}
                        onMouseLeave={() => setHoveredCardIdx(null)}
                        animate={{
                            x: targetX,
                            y: targetY,
                            rotate: targetRotate,
                            scale: targetScale,
                            zIndex: targetZIndex,
                            opacity: targetOpacity,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute w-[80%] h-[80%] border-2 border-brand-base bg-card-bg shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[10px_10px_0px_0px_var(--color-base)] hover:border-brand-base overflow-hidden rounded-none cursor-pointer"
                    >
                        {img.src === "placeholder" ? (
                            <Link href={img.link} className="block w-full h-full">
                                <div className="relative w-full h-full bg-[#0d0d0d] flex flex-col items-center justify-center border-2 border-dashed border-brand-base/40 p-6 text-center select-none group-hover:border-brand-primary transition-colors">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-base/20 flex items-center justify-center mb-3 group-hover:border-brand-primary transition-colors bg-brand-highlight/20">
                                        <span className="text-xl font-black text-brand-base group-hover:text-brand-primary transition-colors">+</span>
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
                                                Explore Case Study
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
                );

                return cardContent;
            })}
        </div>
    );
}

const headerContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const headerItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const rowVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const dotVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};


export default function JourneySection() {
    const [viewportAmount, setViewportAmount] = useState<"all" | number>(0.8);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setViewportAmount(0.5);
            } else {
                setViewportAmount("all");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case "polban":
            case "jtk":
                return <FaGraduationCap className="text-lg" />;
            case "bejana":
            case "neuronworks":
            case "javabooks":
                return <FaBriefcase className="text-lg" />;
            case "future":
                return <span className="text-lg font-black leading-none">+</span>;
            default:
                return <FaCode className="text-lg" />;
        }
    };

    const getBadgeVariant = (type: string) => {
        return type === "education" ? "status" : "tag";
    };


    return (
        <div className="w-full bg-background overflow-hidden">
            {/* 1. HEADER / BANNER ATAS (bg-background) */}
            <div className="w-full bg-background pt-28 pb-16 px-6 md:px-[128px] 4k:px-[256px] relative z-10 overflow-hidden">
                <motion.div
                    variants={headerContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full relative z-10"
                >
                    {/* Back to Home */}
                    <motion.div variants={headerItemVariants}>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>
                    </motion.div>

                    {/* Page Header */}
                    <motion.div
                        variants={headerItemVariants}
                        className="border-4 border-brand-base p-6 md:p-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col justify-between items-start gap-4"
                    >
                        <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
                            My Coding Journey
                        </h1>
                        <p className="text-sm md:text-base text-brand-accent font-light mt-2 leading-relaxed text-justify">
                            This timeline shows my journey from a computer science student at POLBAN to a Full-Stack & Mobile Developer at PT Javabooks. Here are the projects I worked on, the problems I solved, and the things I learned along the way, from my early side projects in college to the real world enterprise systems I build now.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* 2. BODY SECTION (bg-background-alt) */}
            <section className="relative w-full px-6 pt-24 pb-24 md:px-[128px] md:pt-[var(--section-pt)] md:pb-[128px] 4k:px-[256px] bg-background-alt overflow-hidden z-10">
                {/* Slanted Divider at the top of the body (transitions bg-background header to bg-background-alt body) */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0" style={{ height: "var(--divider-height)", minHeight: "var(--divider-min-height)" }}>
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[var(--background)]">
                        <polygon points="0,0 100,0 0,100" />
                    </svg>
                </div>

                <div className="w-full relative z-10">
                    {/* Continuous Vertical Line */}
                    <div className="absolute left-[22px] lg:left-1/2 lg:-translate-x-1/2 top-8 bottom-8 w-1 bg-brand-base/20 z-0" />

                    {/* Timeline Items */}
                    <div className="relative space-y-16 lg:space-y-28">
                        {timelineData.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={rowVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: idx === 0 ? "some" : viewportAmount }}
                                    className={`w-full relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pl-16 lg:pl-0 ${isLeft ? "" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline dot / Icon - absolute positioning */}
                                    <motion.span
                                        variants={dotVariants}
                                        className="absolute left-[4px] lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-16 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-brand-highlight border-2 border-brand-base text-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] z-20"
                                    >
                                        {getIcon(item.iconType)}
                                    </motion.span>

                                    {/* Card Column */}
                                    <motion.div
                                        variants={childVariants}
                                        className="w-full lg:w-[calc(50%-48px)] flex flex-col justify-start"
                                    >
                                        {/* Mobile/Tablet Date Display */}
                                        <div className="flex flex-col mb-4 lg:hidden">
                                            <span className="text-xl font-black text-brand-base uppercase tracking-tighter">
                                                {item.period}
                                            </span>
                                            {item.company && (
                                                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest mt-1">
                                                    {item.company}
                                                </span>
                                            )}
                                        </div>

                                        <Card hoverable className="px-5 py-8 md:px-8 md:py-8 relative bg-card-bg">
                                            {/* Header Row */}
                                            <div className="flex flex-col gap-3 mb-6 border-b border-brand-base/10 pb-4">
                                                <div>
                                                    <h3 className="text-lg font-black text-brand-base uppercase tracking-tighter leading-tight">
                                                        {item.title}
                                                    </h3>
                                                    {item.company && (
                                                        <span className="text-xs font-bold text-brand-primary uppercase tracking-wide block mt-1">
                                                            {item.company}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="self-start mt-4">
                                                    <Badge variant={getBadgeVariant(item.type)} className="text-[9px] whitespace-normal break-words">
                                                        {item.role}
                                                    </Badge>
                                                </div>
                                            </div>

                                            {/* Narrative Description */}
                                            <p className="text-sm text-brand-accent font-light leading-relaxed mb-6 text-justify">
                                                {item.description}
                                            </p>

                                            <p className="text-sm text-brand-accent font-light leading-relaxed mb-6 text-justify">
                                                {item.note}
                                            </p>


                                            {/* Projects built in this phase */}
                                            {item.projects && item.projects.length > 0 && (
                                                <div className="mt-6 pt-6 border-t border-brand-base/10 space-y-3">
                                                    {item.id !== "future" && (
                                                        <h4 className="text-[9px] font-bold uppercase tracking-widest text-brand-base">
                                                            Featured Projects Built (Click to view Details)
                                                        </h4>
                                                    )}
                                                    <div className="flex flex-wrap gap-3">
                                                        {item.projects.map((proj, pIdx) => {
                                                            const badgeContent = (
                                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-base border border-brand-base text-xs font-bold uppercase tracking-wider text-background transition-all duration-200 shadow-[2px_2px_0px_0px_var(--color-primary)] group-hover:shadow-[4px_4px_0px_0px_var(--color-primary)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer">
                                                                    {proj.name}
                                                                    {proj.link && (
                                                                        <FaArrowRight size={8} className="text-background group-hover:translate-x-0.5 transition-all" />
                                                                    )}
                                                                </span>
                                                            );

                                                            return proj.link ? (
                                                                <Link key={pIdx} href={proj.link} className="group">
                                                                    {badgeContent}
                                                                </Link>
                                                            ) : (
                                                                <div key={pIdx} className="group">
                                                                    {badgeContent}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </Card>
                                    </motion.div>
                                    {/* Images & Date Column */}
                                    <motion.div
                                        variants={childVariants}
                                        className={`w-full lg:w-[calc(50%-48px)] flex flex-col justify-start ${isLeft ? "items-start lg:text-left" : "items-end lg:text-right"}`}
                                    >
                                        {/* Large Date/Period display */}
                                        <div className="hidden lg:flex flex-col mb-6">
                                            <span className="text-xl lg:text-2xl font-black text-brand-base uppercase tracking-tighter">
                                                {item.period}
                                            </span>
                                        </div>

                                        <div className="w-full">
                                            <StackedImages
                                                images={item.images}
                                                className={isLeft ? "mx-auto lg:ml-0 lg:mr-auto" : "mx-auto lg:ml-auto lg:mr-0"}
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. BOTTOM SPACER / SECTION (bg-background-alt) (transitions body to footer) */}
            <section className="relative w-full px-6 pt-24 pb-24 md:px-[128px] md:pb-[64px] 4k:px-[256px] bg-background-alt overflow-hidden z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full relative z-10 flex justify-center"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-base text-background border-2 border-brand-base text-[10px] uppercase tracking-[0.25em] font-black shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200"
                    >
                        <FaArrowLeft /> Back to Home
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
