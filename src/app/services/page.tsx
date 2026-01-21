"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaServer, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";

const services = [
    {
        title: "Front-End Developer",
        description: "Building responsive and functional web interfaces with a focus on clarity and usability.",
        icon: FaLaptopCode,
        color: "from-blue-400 to-cyan-300",
    },
    {
        title: "Back-End Developer",
        description: "Developing APIs and backend services that are structured, scalable, and maintainable.",
        icon: FaServer,
        color: "from-emerald-400 to-green-300",
    },
    {
        title: "Mobile Developer",
        description: "Creating cross-platform mobile applications using Flutter with attention to performance and stability.",
        icon: FaMobileAlt,
        color: "from-purple-400 to-pink-300",
    },
    {
        title: "System Analyst",
        description: "Translating business requirements into clear technical solutions and system designs.",
        icon: FaProjectDiagram,
        color: "from-orange-400 to-amber-300",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// Client-only wrapper for Icons to avoid SSR issues with react-icons in Next.js 15+
function ServiceIcon({ icon: Icon }: { icon: React.ElementType }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-8 h-8" />; // Placeholder to prevent layout shift

    return <Icon />;
}

export default function ServicesPage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-base mb-6">
                    My <span className="text-brand-accent">Services</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Specialized in delivering high-quality digital solutions across the full software development lifecycle.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-12"
            >
                {services.map((service, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start gap-4 overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-[100px] transition-opacity group-hover:opacity-20`} />

                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <ServiceIcon icon={service.icon} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-base transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
