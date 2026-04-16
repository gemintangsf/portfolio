"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaServer, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";

const services = [
    {
        title: "Front-End Developer",
        description: "Building responsive and functional web interfaces with a focus on clarity and usability.",
        icon: FaLaptopCode,
        color: "from-brand-accent/20 to-brand-highlight",
    },
    {
        title: "Back-End Developer",
        description: "Developing APIs and backend services that are structured, scalable, and maintainable.",
        icon: FaServer,
        color: "from-brand-accent/20 to-brand-highlight",
    },
    {
        title: "Mobile Developer",
        description: "Creating cross-platform mobile applications using Flutter with attention to performance and stability.",
        icon: FaMobileAlt,
        color: "from-brand-accent/20 to-brand-highlight",
    },
    {
        title: "System Analyst",
        description: "Translating business requirements into clear technical solutions and system designs.",
        icon: FaProjectDiagram,
        color: "from-brand-accent/20 to-brand-highlight",
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

function ServiceIcon({ icon: Icon }: { icon: React.ElementType }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-8 h-8" />;

    return <Icon />;
}

export default function ServicesSection() {
    return (
        <section id="services" className="min-h-[100dvh] flex flex-col items-center justify-center px-6 max-w-7xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-8"
            >
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium items-center gap-2 mb-4 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                    </span>
                    What I Offer
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-base mb-3 uppercase tracking-tighter">
                    My <span className="text-brand-accent">Services</span>
                </h1>
                <p className="text-lg text-brand-accent max-w-2xl mx-auto leading-relaxed font-light">
                    Specialized in delivering high-quality digital solutions across the full software development lifecycle.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-12"
            >
                {services.map((service, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="group relative p-10 rounded-xl bg-brand-base/[0.03] border border-brand-base/5 hover:border-brand-base/20 transition-all duration-500 flex flex-col items-start gap-6 overflow-hidden backdrop-blur-sm"                        >
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-base/[0.02] blur-[50px] group-hover:bg-brand-base/[0.05] transition-colors duration-500 rounded-full -mr-16 -mt-16" />
                            <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-lg bg-brand-base/5 border border-brand-base/10 text-brand-base text-2xl group-hover:bg-brand-base group-hover:text-brand-on-surface transition-all duration-500">                                <ServiceIcon icon={service.icon} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-brand-base mb-4 uppercase tracking-tighter">
                                    {service.title}
                                </h3>
                                <p className="text-brand-accent/80 leading-relaxed font-light text-base">
                                    {service.description}
                                </p>
                            </div>

                            {/* Accent line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-base group-hover:w-full transition-all duration-700 ease-in-out" />                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
