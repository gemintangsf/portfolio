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
import { Card, Badge, StackedImages } from "@/components/ui";

import { timelineData } from "@/data/timeline";


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
                                    id={item.id}
                                    key={item.id}
                                    variants={rowVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: idx === 0 ? "some" : viewportAmount }}
                                    className={`w-full scroll-mt-[32vh] relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pl-16 lg:pl-0 ${isLeft ? "" : "lg:flex-row-reverse"
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
