"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaServer, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";
import { Container, Grid, Card } from "@/components/ui";
import { useUI } from "@/hooks/useUI";

const services = [
    {
        title: "Front-End Development",
        description: "Want an interface that keeps visitors engaged? I build responsive, highly-accessible web applications using Next.js & React with a focus on clean layouts, performance tuning, and Core Web Vitals.",
        icon: FaLaptopCode,
        color: "from-brand-accent/20 to-brand-highlight",
        matchTag: "Web",
    },
    {
        title: "Back-End & APIs",
        description: "Need server architectures that don't crash under load? I design secure, structured, and scalable APIs using NestJS and Node.js to keep your business workflows and data flowing safely.",
        icon: FaServer,
        color: "from-brand-accent/20 to-brand-highlight",
        matchTag: "Enterprise",
    },
    {
        title: "Mobile App Development",
        description: "Looking for a mobile app that works flawlessly across iOS & Android? I develop robust Flutter applications with optimized rendering list performance, custom storage caching, and device hardware integrations.",
        icon: FaMobileAlt,
        color: "from-brand-accent/20 to-brand-highlight",
        matchTag: "Mobile",
    },
    {
        title: "System Analysis & Design",
        description: "Unsure how to translate business ideas into scalable code? I map out visual process workflows, plan relational DB schemas, and design robust architectures so we build exactly what you need.",
        icon: FaProjectDiagram,
        color: "from-brand-accent/20 to-brand-highlight",
        matchTag: "Enterprise",
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
    const { selectedCategory } = useUI();

    return (
        <section id="services" className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
            <Container size="lg" className="flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-base mb-4 uppercase tracking-tighter">
                        My <span className="text-brand-accent">Services</span>
                    </h1>
                    <p className="text-lg text-brand-accent max-w-2xl mx-auto leading-relaxed font-light">
                        Engineering solutions focused on performance, scalability, and user needs.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <Grid cols={{ md: 2 }} gap="gap-8" className="w-full px-4 md:px-12">
                        {services.map((service, index) => {
                            const isHighlighted = service.matchTag === selectedCategory;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="w-full flex"
                                >
                                    <Card
                                        hoverable
                                        className={`relative p-10 flex-1 flex flex-col items-start gap-6 group ${
                                            isHighlighted 
                                                ? "!bg-brand-highlight" 
                                                : ""
                                        }`}
                                    >
                                        {isHighlighted && (
                                            <div className="absolute top-6 right-6 border border-brand-base text-brand-accent text-[9px] px-2.5 py-1 uppercase tracking-widest font-black bg-background">
                                                Selected Focus
                                            </div>
                                        )}
 
                                        <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-none border-2 border-brand-base transition-all duration-500 ${
                                            isHighlighted 
                                                ? "bg-brand-base text-background" 
                                                : "bg-brand-highlight text-brand-base group-hover:bg-brand-base group-hover:text-brand-on-surface"
                                        }`}>
                                            <ServiceIcon icon={service.icon} />
                                        </div>
 
                                        <div className="relative z-10 text-left">
                                            <h3 className="text-2xl font-bold text-brand-base mb-4 uppercase tracking-tighter">
                                                {service.title}
                                            </h3>
                                            <p className="text-brand-accent/80 leading-relaxed font-light text-base">
                                                {service.description}
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </Grid>
                </motion.div>
            </Container>
        </section>
    );
}
