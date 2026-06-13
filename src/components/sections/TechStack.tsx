"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useUI } from "@/hooks/useUI";

const technologies = [
    "React JS",
    "Next JS",
    "JQuery",
    "Flutter",
    "Nest JS",
    "Ruby on Rails",
    "Python Flask / Open API",
    "Open Cart",
    "Zend Framework",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "OpenSearch / Elasticsearch",
    "Minio",
    "RestAPI",
    "Swagger",
    "JWT / OAuth",
    "Ollama (LLM/AI)",
    "Apache Airflow",
    "Docker",
    "CI/CD",
    "Git",
    "SonarQube",
    "Git Hooks"
];

export default function TechStack() {
    const { isLoaded } = useUI();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
    const [direction, setDirection] = useState(0);

    // Responsive visible items
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setVisibleItems(4);
            else if (window.innerWidth >= 768) setVisibleItems(2);
            else setVisibleItems(1);
        };

        handleResize(); // Init
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(technologies.length / visibleItems);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    }, [totalPages]);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [totalPages, visibleItems, currentIndex, nextSlide]); // Reset timer on interaction

    // Calculate visible stack
    const currentStack = technologies.slice(
        currentIndex * visibleItems,
        (currentIndex + 1) * visibleItems
    );

    // Handle edge case for last page incomplete
    if (currentStack.length < visibleItems && currentIndex === totalPages - 1) {
        // Just keep it as is, or pad it? simpler to keep as is.
    }

    return (
        <section className="mb-0 overflow-hidden relative z-10 pt-0 pb-20 md:pt-0 md:pb-20 border-b border-brand-base/5">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={isLoaded ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="container mx-auto px-6 mb-8 md:mb-12 text-center">
                    <h2 className="text-2xl md:text-5xl font-black text-brand-base uppercase tracking-tighter">
                        Technologies I Use
                    </h2>
                    <p className="mt-4 text-brand-accent max-w-2xl mx-auto font-light tracking-wide">
                        A collection of frameworks, libraries, and tools I use to build robust applications.
                    </p>
                </div>

                <div className="container mx-auto px-2 md:px-6 flex items-center justify-center gap-2 md:gap-8">
                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex p-2 md:p-4 rounded-none bg-brand-base text-background border border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:invert transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background shrink-0"
                        aria-label="Previous Tech"
                    >
                        <FaChevronLeft size={12} className="md:w-5 md:h-5" />
                    </button>

                    {/* Carousel Window */}
                    <div className="w-full max-w-5xl overflow-hidden px-4 md:px-4 pb-6 md:pb-0" style={{ minHeight: '80px' }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(_, info) => {
                                    const threshold = 50;
                                    if (info.offset.x < -threshold) nextSlide();
                                    else if (info.offset.x > threshold) prevSlide();
                                }}
                                className="flex justify-center gap-2 md:gap-8 flex-wrap md:flex-nowrap w-full cursor-grab active:cursor-grabbing"
                            >
                                {currentStack.map((tech, index) => (
                                    <div
                                        key={`${tech}-${index}`}
                                        className="flex-1 min-w-[120px] max-w-[150px] md:max-w-[200px] min-h-[70px] md:min-h-[100px] flex items-center justify-center px-4 py-4 md:px-4 md:py-6 rounded-none border border-brand-base/10 bg-background backdrop-blur-sm hover:border-brand-base transition-all cursor-default mt-2 group"
                                    >
                                        <span className="text-brand-base font-bold text-[10px] md:text-xs text-center uppercase tracking-wider group-hover:scale-105 transition-transform leading-tight block w-full px-1">
                                            {tech}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex p-2 md:p-4 rounded-none bg-brand-base text-background border border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:invert transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background shrink-0"
                        aria-label="Next Tech"
                    >
                        <FaChevronRight size={12} className="md:w-5 md:h-5" />
                    </button>
                </div>

                {/* Dots Indicator - Slightly smaller on mobile */}
                <div className="flex justify-center gap-2 md:gap-4 mt-6 md:mt-12">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background ${idx === currentIndex ? "bg-brand-base w-12" : "bg-brand-base/20 w-4 hover:bg-brand-base/40"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
