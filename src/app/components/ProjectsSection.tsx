"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    FaCode,
    FaMobileAlt,
    FaExternalLinkAlt,
    FaArrowRight,
    FaGithub,
    FaLock,
    FaShoppingCart,
    FaBrain,
    FaPlane,
    FaLaptopCode,
    FaNetworkWired,
    FaFileAlt,
    FaHospital,
    FaHeart,
    FaBoxes,
    FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    stack: string[];
    link: string;
    isPrivate: boolean;
    challenge?: string;
    solution?: string;
    features?: string[];
    evidence?: string[];
    responsibilities?: string[];
    impact?: string[];
    tags?: string[];
    playStore?: string;
    appStore?: string;
    forceDesktopStyle?: boolean;
    technicalOptimizations?: {
        title: string;
        description: string;
    }[];
}

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch("/projects.json?t=" + new Date().getTime());
                const data = await response.json();
                setProjects(data.projects);
                setCategories(data.categories);
            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    const filteredProjects = selectedCategory === "All"
        ? projects.filter(p => p.category !== "Others")
        : projects.filter(p => p.tags?.includes(selectedCategory));

    const otherProjects = projects.filter(p => p.category === "Others");

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 6);
            setIsLoadingMore(false);
        }, 500);
    };

    const getProjectIcon = (project: Project) => {
        // ID-based overrides first
        switch (project.id) {
            case 4: return <FaShoppingCart />;
            case 5: return <FaBrain />;
            case 6: return <FaNetworkWired />;
            case 7: return <FaPlane />;
            case 8: return <FaLaptopCode />;
            case 9: return <FaFileAlt />;
            case 10: return <FaNetworkWired />;
            case 11: return <FaHospital />;
            case 12: return <FaHeart />;
            case 13: return <FaBoxes />;
            case 14: return <FaBoxes />;
        }

        // Category/Keyword based fallback
        if (project.category.toLowerCase().includes("mobile") || 
            project.title.toLowerCase().includes("mobile")) {
            return <FaMobileAlt />;
        }
        
        return <FaCode />;
    };

    if (isLoading) {
        return (
            <section id="projects" className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin"></div>
                    <p className="text-brand-accent animate-pulse uppercase tracking-widest text-xs font-bold">Loading Projects...</p>
                </div>
            </section>
        );
    }


    return (
        <section id="projects" className="min-h-[100dvh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
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
                    My Portfolio
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-base mb-3 uppercase tracking-tighter">
                    Featured <span className="text-brand-accent">Projects</span>
                </h1>
                <p className="text-lg text-brand-accent max-w-2xl mx-auto leading-relaxed font-light">
                    Enterprise-grade solutions solving real-world business problems.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-none text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                            ? "bg-brand-base text-background shadow-lg"
                            : "bg-background text-brand-accent hover:bg-brand-highlight hover:text-brand-base border border-brand-base/10"
                            } uppercase tracking-widest`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory + visibleCount}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        },
                        exit: {
                            opacity: 0,
                            transition: { duration: 0.2 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {filteredProjects.slice(0, visibleCount).map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                            }}
                            className="group relative bg-background rounded-none border border-brand-base/10 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div
                                className={`h-56 w-full ${project.image} relative overflow-hidden cursor-pointer`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="absolute inset-0 bg-brand-base/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-background font-bold border border-background px-4 py-2 rounded-none backdrop-blur-sm uppercase tracking-widest">
                                        View Case Study
                                    </span>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center text-brand-base/20 text-6xl pointer-events-none">
                                    {getProjectIcon(project)}
                                </div>

                                {project.isPrivate && (
                                    <div className="absolute top-4 right-4 bg-brand-base/50 backdrop-blur-md text-background text-[10px] px-3 py-1 rounded-none flex items-center gap-1 uppercase font-bold">
                                        <FaLock size={10} /> Private
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2">
                                    {project.category}
                                </span>
                                <h3
                                    className="text-xl font-bold text-brand-base mb-3 group-hover:text-brand-primary transition-colors cursor-pointer uppercase tracking-tighter"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-brand-accent mb-6 line-clamp-3 font-light text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.stack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-[10px] font-medium text-brand-accent bg-brand-highlight px-2 py-1 rounded-none border border-brand-base/5 uppercase tracking-widest">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {selectedCategory === "All" && visibleCount < filteredProjects.length && (
                <div className="flex justify-center mb-20">
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="px-8 py-3 rounded-none bg-brand-base text-background font-bold hover:invert transition-all flex items-center gap-2 uppercase tracking-widest text-sm"
                    >
                        {isLoadingMore ? "Loading..." : "Load More Projects"}
                        <FaChevronDown className={isLoadingMore ? "" : "animate-bounce"} />
                    </button>
                </div>
            )}

            {selectedCategory === "All" && otherProjects.length > 0 && (
                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="h-px bg-brand-base/10 flex-1"></div>
                        <span className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Side Projects & Experiments</span>
                        <div className="h-px bg-brand-base/10 flex-1"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group relative bg-background rounded-none border border-brand-base/10 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                            >
                                <div
                                    className={`h-48 w-full ${project.image} relative overflow-hidden cursor-pointer grayscale group-hover:grayscale-0 transition-all duration-500`}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-base/20 text-5xl pointer-events-none">
                                        {getProjectIcon(project)}
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <h3
                                        className="text-lg font-bold text-brand-base mb-2 group-hover:text-brand-primary transition-colors cursor-pointer uppercase tracking-tighter"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-brand-accent text-xs mb-4 line-clamp-2 font-light">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-xs font-bold text-brand-base hover:text-brand-primary flex items-center gap-1 transition-colors uppercase tracking-widest"
                                        >
                                            View Details <FaArrowRight size={10} />
                                        </button>
                                        {project.link && project.link.includes("github") && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-base">
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}
