"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const technologies = [
    "React Js",
    "Next Js",
    "Nest Js",
    "TypeScript",
    "JQuery",
    "Python Flask/OpenAPI",
    "Ruby on Rails",
    "Zend Framework",
    "OpenCart",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Oracle",
    "GraphQL",
    "Opensearch",
    "Ollama",
    "Apache Airflow",
    "Sonarcube",
    "Flutter",
    "Git",
    "JWT / OAuth",
    "Swagger",
    "REST API",
];

export default function TechStack() {
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

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [totalPages, visibleItems, currentIndex]); // Reset timer on interaction

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
        <section className="mb-20 overflow-hidden bg-white/5 relative z-10">
            <div className="container mx-auto px-6 mb-8 text-center pt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-base">
                    Technologies I Use
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    A collection of frameworks, libraries, and tools I use to build robust applications.
                </p>
            </div>

            <div className="container mx-auto px-6 flex items-center justify-center gap-4 md:gap-8">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-brand-primary/20 text-brand-base hover:bg-brand-primary hover:text-white transition-all shadow-lg shrink-0"
                    aria-label="Previous Tech"
                >
                    <FaChevronLeft size={20} />
                </button>

                {/* Carousel Window */}
                <div className="w-full max-w-5xl overflow-hidden px-2 md:px-4" style={{ minHeight: '80px' }}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="flex justify-center gap-4 md:gap-8 flex-wrap md:flex-nowrap w-full"
                        >
                            {currentStack.map((tech, index) => (
                                <div
                                    key={`${tech}-${index}`}
                                    className="flex-1 min-w-[140px] max-w-[200px] flex items-center justify-center px-6 py-4 rounded-xl border border-brand-primary/20 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-brand-primary/50 transition-all cursor-default mt-2"
                                >
                                    <span className="text-brand-base font-medium text-lg whitespace-nowrap text-center">
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
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-brand-primary/20 text-brand-base hover:bg-brand-primary hover:text-white transition-all shadow-lg shrink-0"
                    aria-label="Next Tech"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-brand-primary w-6" : "bg-brand-primary/30 hover:bg-brand-primary/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
