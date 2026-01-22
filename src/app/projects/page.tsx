"use client";

import { motion } from "framer-motion";
import {
    FaCode,
    FaMobileAlt,
    FaExternalLinkAlt,
    FaArrowRight,
    FaGithub,
    FaLock,
    FaShoppingCart, // POS
    FaBrain,        // AI
    FaPlane,        // Travel
    FaLaptopCode,   // Web
    FaNetworkWired, // NADIA/SCONE
    FaFileAlt,      // DMS
    FaHospital,     // PABOI
    FaHeart,        // JTK Berbagi (Donation)
    FaBoxes,        // Inventory
    FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import ProjectModal from "../components/ProjectModal";

// Define Project Type locally for now
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
}

// Updated Data with Private Fields
const projects: Project[] = [
    {
        id: 1,
        title: "PHC (Periplus Human Capital) Mobile App",
        category: "Mobile Application",
        description: "Developed an internal Human Capital mobile application with a primary focus on attendance management enhanced by face recognition. The system validates employee check-ins by matching live attendance photos against existing profile images, alongside standard HR features such as leave management and employee data tracking. Built with an emphasis on performance, clean architecture, and reliability in real-world usage.",
        image: "bg-gradient-to-br from-emerald-500 to-teal-500",
        stack: ["Flutter", "OpenCart", "MySQL", "Python", "InsightFace"],
        link: "#",
        isPrivate: true,
        challenge: "Implementing reliable attendance verification when employees often skipped face capture, while meeting the requirement to perform photo-to-photo face matching without a traditional enrollment flow and integrating face recognition across Flutter, PHP, Python services, and OpenSearch.",
        solution: "Designed a photo-to-photo face matching pipeline where a Python-based face recognition service extracts facial embeddings, OpenSearch indexes and queries similarity against stored profile data, and a PHP backend orchestrates validation logic consumed by a Flutter mobile application.",
        features: [
            "Photo-to-Photo Face Recognition Attendance Validation",
            "Geolocation-restricted Clock-in & Clock-out",
            "Real-time Leave & HR Notifications",
            "Payroll and HR System Integration",
            "Performance Review System"
        ],
        evidence: ["/assets/phc/3.jpg", "/assets/phc/4.jpg", "/assets/phc/5.jpg", "/assets/phc/6.jpg", "/assets/phc/7.jpg", "/assets/phc/2.jpg"],
        tags: ["Mobile"]
    },
    {
        id: 2,
        title: "Mobile POS (Point of Sale) Application",
        category: "Retail System",
        description: "Developed a mobile-first POS application optimized for live cashier operations, where transaction speed and responsiveness are critical. The system handles product management, transaction processing, and receipt generation with a strong emphasis on performance, lightweight architecture, and operational efficiency across multiple retail stores.",
        image: "bg-gradient-to-br from-blue-500 to-cyan-500",
        stack: ["Flutter", "POS Workflow", "REST API", "Mobile-First Design"],
        link: "#",
        isPrivate: true,
        challenge: "Ensuring fast and responsive transaction processing in a live cashier environment while handling complex pricing and discount rules, hardware integrations, and reducing operational overhead caused by offline POS systems that required per-store builds and manual maintenance.",
        solution: "Designed a lightweight, online-first POS architecture using Flutter with optimized state management and asynchronous transaction flows. Reduced UI rendering overhead, streamlined API interactions, and optimized printer and scanner integrations to minimize transaction latency. Centralized business logic on the backend to eliminate per-store application rebuilds and improve operational efficiency.",
        features: [
            "High-performance Barcode Scanning for Fast Checkout",
            "Multi-payment and Discount Handling",
            "Optimized Thermal Receipt Printing",
            "Real-time Inventory Synchronization",
            "Centralized POS Configuration & Reporting"
        ],
        evidence: ["/assets/pos/1.png", "/assets/pos/4.png", "/assets/pos/6.png"],
        tags: ["Mobile"]
    },
    {
        id: 3,
        title: "AI Book Search & Recommendation Pipeline",
        category: "AI & Search System",
        description: "Designed and implemented a scalable AI-driven book search and recommendation pipeline for a catalog exceeding 30 million products. The system combines Generative AI tagging using LLaMA (Ollama) with KeyBERT relevance scoring and OpenSearch to deliver fast, accurate search results, autocomplete, typo tolerance, and personalized recommendations. Built with a strong focus on query performance, indexing optimization, and real-time ranking signals.",
        image: "bg-gradient-to-br from-purple-500 to-pink-500",
        stack: ["Python", "Ollama (LLaMA)", "KeyBERT", "OpenSearch", "OpenCart", "MySQL", "Flutter"],
        link: "https://www.periplus.com/",
        isPrivate: true,
        challenge: "Delivering fast and relevant search results across more than 30 million book and product records, where traditional keyword search was insufficient and query latency had to remain low while incorporating semantic understanding and live sales-driven ranking signals.",
        solution: "Implemented OpenSearch as the core search and discovery engine, combining AI-generated tags and vector embeddings with keyword-based relevance scoring. Optimized index mappings, shard strategies, and query composition to ensure low-latency searches at scale. Integrated a sales analytics pipeline to continuously update ranking signals, enabling dynamic product sorting based on real-time sales performance and user behavior.",
        features: [
            "Semantic Search with Vector Embeddings",
            "High-performance Keyword & Hybrid Search Optimization",
            "Autocomplete and Typo-tolerant Queries at Scale",
            "AI-powered Automated Book Tagging",
            "Real-time Product Ranking Based on Sales Analytics",
            "Personalized Book & Product Recommendations"
        ],
        evidence: ["/assets/web_p+/2.png", "/assets/web_p+/1.png", "/assets/web_p+/3.png"],
        tags: ["AI", "Web"]
    },
    {
        id: 4,
        title: "NADIA – Network Terminal Equipment Management",
        category: "Enterprise Application",
        description: "An internal enterprise system used by Telkom Indonesia to manage Network Terminal Equipment (NTE) assets, such as customer routers that must be retrieved after service termination. Took full ownership to clarify unclear business workflows, stabilize legacy features, and transform the application into a structured, reliable, and maintainable system.",
        image: "bg-gradient-to-br from-blue-500 to-cyan-500",
        stack: [
            "Microservices Architecture",
            "Nest JS",
            "Next JS",
            "PostgreSQL",
            "Enterprise Workflow Management",
            "System Stabilization",
            "SonarQube",
            "Apache Airflow"
        ],
        link: "#",
        isPrivate: true,
        challenge: "Handling a complex legacy system with unclear business workflows and instability issues. The primary challenge was to decipher ambiguous asset retrieval processes, improve code quality, and ensure reliable operation within a critical telecom infrastructure.",
        solution: "Took full ownership of the system, collaborating with stakeholders to redefine and structure business flows. Implemented a microservices architecture with NextJS & NestJS, established code quality gates using SonarQube, and automated critical workflows with Apache Airflow to ensure stability and maintainability.",
        features: [
            "NTE Asset Retrieval & Return Workflow",
            "Stakeholder-Driven Business Flow Redefinition",
            "End-to-End Business Process Automation",
            "Legacy System Refactoring & Stabilization",
            "Application Logging & Error Handling",
            "Scheduled Background Jobs"
        ],
        responsibilities: [
            "Handled end-to-end development (backend, frontend, and application flow)",
            "Refined unclear business processes into structured technical workflows",
            "Collaborated directly with stakeholders to extract business requirements",
            "Improved code quality and maintainability using SonarQube",
            "Implemented automation pipelines using Apache Airflow"
        ],
        impact: [
            "Significantly clarified application direction and business process flow",
            "Improved system stability and operational reliability",
            "Reduced ambiguity in asset retrieval processes across teams",
            "Increased maintainability of a previously unclear legacy system"
        ],
        evidence: [
            "/assets/nadia/1.jpg",
            "/assets/nadia/2.jpg"
        ],
        tags: ["Enterprise", "Web"]
    },
    {
        id: 5,
        title: "PEFITA – Package Management System",
        category: "Enterprise Application",
        description: "Contributed to an enterprise-level package management system used as a core service for calculating and formulating product packages consumed by other applications. Involved in enhancing the map visualization feature to improve package location context and operational clarity.",
        image: "bg-gradient-to-br from-emerald-500 to-teal-500",
        stack: ["React (Vite)", "NestJS", "PostgreSQL", "Google Maps API"],
        link: "#",
        isPrivate: true,
        challenge: "Enhancing map-based package visualization within a large, interconnected system while quickly adapting to an existing enterprise codebase and development standards in a limited project timeframe.",
        solution: "Implemented Google Maps enhancements, including Street View integration, to provide more detailed and contextual location visibility. Worked within the existing frontend and backend architecture to ensure seamless integration without impacting dependent services.",
        features: [
            "Package Location Visualization",
            "Google Maps and Street View Integration",
            "Service-oriented Package Calculation Support",
            "Enterprise System Integration"
        ],
        evidence: [],
        tags: ["Enterprise", "Web"]
    },

    {
        id: 6,
        title: "SCONE – Order Management System",
        category: "Enterprise Application",
        description: "Contributed to SCONE, a core enterprise order management system used by Telkom Indonesia for primary business operations. Responsible for migrating the legacy UI from Zend Framework to a modern Next.js-based frontend, while also handling critical order integration flows between SCONE and NADIA to ensure seamless end-to-end business processes.",
        image: "bg-gradient-to-br from-purple-500 to-pink-500",
        stack: ["Next.js", "Microservices", "System Integration", "Enterprise UI/UX", "Zend Framework", "Oracle"],
        link: "#",
        isPrivate: true,
        challenge: "Migrating a legacy enterprise UI to a modern frontend stack while strictly adhering to predefined UI/UX design standards. Additionally, managing complex business process integration where actions performed in SCONE, such as order deactivation, trigger corresponding downstream processes and new order creation in NADIA, requiring accurate status synchronization across systems.",
        solution: "Implemented a Next.js-based UI revamp following established enterprise UI/UX guidelines, ensuring consistency and usability across the system. Handled end-to-end integration for specific business flows by coordinating order status transitions between SCONE and NADIA, enabling automated creation and synchronization of related orders across interconnected microservices.",
        features: [
            "Legacy UI Migration from Zend Framework to Next.js",
            "Enterprise-grade UI Revamp Based on Defined UX Standards",
            "End-to-End Order Integration Between SCONE and NADIA",
            "Order Deactivation and Status Synchronization Workflow",
            "Inter-system Communication Across Microservices"
        ],
        evidence: ["/assets/scone/1.jpg"],
        tags: ["Enterprise", "Web"]
    },

    {
        id: 7,
        title: "DMS – Document Management System",
        category: "Enterprise Application",
        description: "Contributed to the development of Telkom Indonesia’s Document Management System (DMS), a centralized platform for storing and managing enterprise documents. Built a document landing page with full CRUD capabilities, designed to support structured document uploads and serve as a shared evidence repository for other core systems such as SCONE.",
        image: "bg-gradient-to-br from-orange-400 to-red-500",
        stack: ["Zend Framework", "jQuery", "REST API", "MinIO", "PostgreSQL"],
        link: "#",
        isPrivate: true,
        challenge: "Designing a document CRUD flow that appeared simple on the surface but involved complex upload workflows and strict data safety requirements. Documents were stored in MinIO object storage, where deletion was considered high-risk, requiring careful handling of document lifecycle and consistency across systems.",
        solution: "Collaborated closely with the project manager and system analyst to design a safe and efficient document management flow. Implemented a structured upload and storage strategy with MinIO, prioritized logical document state management over physical deletion, and ensured the landing page could be reliably used by SCONE for uploading and managing order evidence.",
        features: [
            "Centralized Enterprise Document Repository",
            "Structured Document Upload and Storage via MinIO",
            "Safe Document Lifecycle Management (Non-destructive Flow)",
            "Document CRUD with Metadata Management",
            "Integration Support for SCONE Order Evidence Uploads"
        ],
        evidence: ["/assets/dms/1.jpg", "/assets/dms/2.jpg", "/assets/dms/3.jpg"],
        tags: ["Enterprise", "Web"]
    },

    {
        id: 8,
        title: "PPT – Master Data Management",
        category: "Enterprise Application",
        description: "Contributed to the UI modernization of an enterprise Master Data Management system by revamping the frontend from a legacy PHP-based interface to a modern Next.js application. The work focused on improving usability, visual consistency, and alignment with enterprise UI standards under a tight project deadline.",
        image: "bg-gradient-to-br from-indigo-500 to-violet-500",
        stack: ["Next.js", "Enterprise UI", "Frontend Modernization"],
        link: "#",
        isPrivate: true,
        challenge: "Supporting a time-sensitive UI revamp while working primarily as a frontend contributor and adapting to a different communication and collaboration style. The project required close coordination with system analysts rather than the usual direct alignment with a project manager, which introduced additional complexity in requirement clarification and feedback cycles.",
        solution: "Focused on delivering frontend changes efficiently by following defined UI specifications and maintaining open communication with system analysts to align on requirements. Gradually adapted to different working styles and ensured the UI revamp was delivered within the project timeline without compromising consistency or usability.",
        features: [
            "Legacy UI Migration from PHP JQuery to Next.js",
            "Enterprise UI Revamp and Standardization",
            "Frontend Support Under Tight Deadlines",
            "Cross-role Collaboration with System Analysts"
        ],
        evidence: ["/assets/ppt/1.jpg"],
        tags: ["Enterprise", "Web"]
    },

    {
        id: 9,
        title: "PABOI (Indonesia Orthopedic Association) Web Application",
        category: "Full Stack Intern Project",
        description: "Contributed to the development and maintenance of the PABOI (Indonesia Orthopedic Association) web application during a 4-month internship program. Initially focused on backend development, then transitioned to frontend development to support team needs, gaining hands-on experience in a professional, cross-functional software development environment.",
        image: "bg-gradient-to-br from-green-500 to-emerald-600",
        stack: ["ReactJS", "Ruby on Rails", "MySQL", "Kanban SDLC"],
        link: "https://indonesia-orthopaedic.org/",
        isPrivate: true,
        challenge: "Adapting to a professional development workflow for the first time, collaborating with senior developers, project managers, QA, and product owners, while contributing to an existing production system under an agile Kanban process.",
        solution: "Worked closely with the team to implement feature enhancements and bug fixes across both backend and frontend components. Actively participated in discussions with the project manager and QA to understand requirements, resolve issues, and ensure delivered changes aligned with product expectations and quality standards.",
        features: [
            "Backend and Frontend Bug Fixing on Production System",
            "Feature Enhancements Based on Product and QA Feedback",
            "Cross-functional Collaboration with PM, QA, and PO",
            "Kanban-based Task Management and Continuous Delivery Workflow"
        ],
        tags: ["Web"]
    },
    {
        id: 10,
        title: "JTK Berbagi – Donation Management Platform",
        category: "Others",
        description: "Developed a donation management platform similar to Kitabisa.com, specifically designed for the academic community of the Computer Engineering Department at POLBAN. The system was created to improve the efficiency and transparency of JTK Berbagi activities by centralizing donation collection, distribution, and reporting into a more structured and systematic digital platform.",
        image: "bg-gradient-to-br from-gray-500 to-slate-600",
        stack: ["ReactJS", "Ruby on Rails", "MySQL"],
        link: "https://github.com/gemintangsf/tugas_akhir/tree/main",
        isPrivate: false,
        evidence: ["/assets/jtkberbagi/1.png", "/assets/jtkberbagi/2.png"],

        challenge: "Building the system entirely from scratch, starting from problem analysis to final testing, while handling frequent requirement adjustments as deeper analysis revealed new operational needs. Ensuring the platform aligned with real-world workflows of JTK Berbagi activities was a key challenge.",
        solution: "Applied the Waterfall Software Development Life Cycle (SDLC), beginning with requirement analysis, system design, implementation, and testing. Actively performed the role of a System Analyst by translating stakeholder needs into functional requirements, designing system workflows, and ensuring the final implementation met operational expectations.",
        features: [
            "Donation Campaign Management",
            "Donor and Recipient Data Management",
            "Transaction Recording and Reporting",
            "Role-based Access for Organizers",
            "Structured and Transparent Donation Workflow"
        ],
        tags: ["Others", "Web"]
    },
    {
        id: 11,
        title: "Sinbada",
        category: "Others",
        description: "Built a web-based inventory system during university as part of a team project, focusing on managing asset and inventory data. The project provided hands-on experience in collaborating within a development team and working with a more diverse technology stack.",
        image: "bg-gradient-to-br from-stone-500 to-neutral-600",
        stack: ["ReactJS", "Ruby on Rails", "MongoDB", "Azure"],
        link: "https://github.com/SekelompokOrangKuat/ProjectInventaris/tree/dev",
        isPrivate: false,
        challenge: "Adjusting to collaborative development workflows while working with multiple technologies and understanding how different system components interact within a full-stack environment.",
        solution: "Contributed to both frontend and backend development, coordinated with team members through shared workflows, and adapted to project requirements while maintaining steady progress throughout the development cycle.",
        features: [
            "Asset and Inventory Management",
            "CRUD Operations with Role Awareness",
            "Full-stack Web Architecture",
            "Team-based Development Experience"
        ],
        evidence: ["/assets/sinbada/1.jpg"],
        tags: ["Others", "Web"]
    },
    {
        id: 12,
        title: "Siinvent",
        category: "Others",
        description: "Developed a web-based inventory management system as part of an early collaborative project during university. The system was designed to manage inventory data efficiently while introducing real-world development workflows such as team collaboration, task distribution, and version control.",
        image: "bg-gradient-to-br from-sky-400 to-blue-300",
        stack: ["Express.js", "ReactJS", "PostgreSQL"],
        link: "https://github.com/SekelompokOrangKuat/PROJECTCUAN/tree/backend",
        isPrivate: false,
        challenge: "Adapting to real project workflows for the first time, including collaborating with multiple team members, aligning on technical decisions, and managing code integration in a shared repository.",
        solution: "Worked collaboratively using structured development workflows, applied version control best practices, and gradually adapted to team-based development while delivering core inventory management functionalities.",
        features: [
            "Inventory Data Management",
            "Basic Stock Tracking",
            "User Authentication and Access Control",
            "Collaborative Development Workflow"
        ],
        evidence: ["/assets/siinvent/2.jpg"],
        tags: ["Others", "Web"]
    },
];

const categories = ["All", "Web", "Mobile", "Enterprise", "AI", "Others"];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Infinite Scroll State
    const [visibleCount, setVisibleCount] = useState(3);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const openProject = (project: Project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    // Filter Logic
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.tags?.includes(selectedCategory));

    // Specific subsets for "All" view
    const featuredProjects = projects.filter(p => p.category !== "Others");
    const otherProjects = projects.filter(p => p.category === "Others");

    // Determine which list is currently main display
    const currentMainList = selectedCategory === "All" ? featuredProjects : filteredProjects;
    const isListTruncated = visibleCount < currentMainList.length;

    // Reset visible count when category changes
    useEffect(() => {
        setVisibleCount(4);
    }, [selectedCategory]);

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 3);
            setIsLoadingMore(false);
        }, 500);
    };

    // Helper to get icon based on project ID
    const getProjectIcon = (id: number) => {
        switch (id) {
            case 1: return <FaMobileAlt />; // PHC
            case 2: return <FaShoppingCart />; // POS
            case 3: return <FaBrain />; // AI Book
            case 4: return <FaNetworkWired />; // NADIA
            case 5: return <FaPlane />; // Travel
            case 6: return <FaLaptopCode />; // Web Profile
            case 7: return <FaFileAlt />; // DMS
            case 8: return <FaNetworkWired />; // SCONE
            case 9: return <FaHospital />; // PABOI
            case 10: return <FaHeart />; // JTK Berbagi
            case 11: return <FaBoxes />; // Sinbada
            case 12: return <FaBoxes />; // Siinvent
            default: return <FaCode />;
        }
    };

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium items-center gap-2 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                    </span>
                    My Portfolio
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-base mb-6">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Projects</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A collection of my work in software engineering. Many of these are
                    <span className="font-semibold text-brand-primary"> enterprise-grade solutions </span>
                    solving real-world business problems.
                </p>
            </motion.div>

            {/* Categories / Filter */}

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 mb-12 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar snap-x"
            >
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 snap-center ${selectedCategory === cat
                            ? "bg-brand-base text-white shadow-lg scale-105"
                            : "bg-white text-gray-600 hover:bg-brand-highlight hover:text-brand-base border border-gray-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentMainList.slice(0, visibleCount).map((project) => (
                    <motion.div
                        key={project.id}
                        layout // Enable layout animation for smooth filtering
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="group relative bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                        {/* Image Placeholder Area */}
                        <div
                            className={`h-56 w-full ${project.image} relative overflow-hidden cursor-pointer`}
                            onClick={() => openProject(project)}
                        >
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-md">
                                    View Case Study
                                </span>
                            </div>

                            {/* Decorative Icon for Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-6xl pointer-events-none">
                                {getProjectIcon(project.id)}
                            </div>

                            {/* Private Badge */}
                            {project.isPrivate && (
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                    <FaLock size={10} /> Private
                                </div>
                            )}
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                            </div>

                            <h3
                                className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-base transition-colors cursor-pointer"
                                onClick={() => openProject(project)}
                            >
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.stack.slice(0, 3).map((tech) => (
                                    <span key={tech} className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                                        {tech}
                                    </span>
                                ))}
                                {project.stack.length > 3 && (
                                    <span className="text-xs font-medium text-gray-400 px-1 py-1">+{project.stack.length - 3}</span>
                                )}
                            </div>

                            {/* Details Button */}
                            <div className="mt-auto flex gap-3 w-full">
                                {project.link && project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-none w-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-brand-base hover:border-brand-base hover:shadow-md transition-all duration-300"
                                        title="Visit Live Site"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                )}

                                <button
                                    onClick={() => openProject(project)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 text-gray-700 font-medium hover:bg-brand-base hover:text-white transition-all duration-300 group-hover:border-transparent border border-gray-200"
                                >
                                    View Case Study
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Load More Button */}
            {isListTruncated && (
                <div className="flex justify-center mb-20 py-8">
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-medium hover:bg-brand-base hover:text-white hover:border-brand-base transition-all duration-300 shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoadingMore ? (
                            <>
                                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                                Loading...
                            </>
                        ) : (
                            <>
                                Load More Projects
                                <FaChevronDown className="animate-bounce" />
                            </>
                        )}
                    </button>
                </div>
            )}


            {/* Divider for Other Projects - Only show in ALL view */}
            {selectedCategory === "All" && otherProjects.length > 0 && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">Side Projects & Experiments</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.6 }}
                                className="group relative bg-gray-50/50 backdrop-blur-sm rounded-3xl border border-gray-200/60 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Similar Card Structure but slightly toned down for 'Others' */}
                                <div
                                    className={`h-48 w-full ${project.image} relative overflow-hidden cursor-pointer grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500`}
                                    onClick={() => openProject(project)}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-5xl pointer-events-none">
                                        {getProjectIcon(project.id)}
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200/50 px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-700 mb-2 group-hover:text-brand-base transition-colors cursor-pointer"
                                        onClick={() => openProject(project)}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <button
                                            onClick={() => openProject(project)}
                                            className="text-sm font-medium text-brand-primary hover:text-brand-base flex items-center gap-1 transition-colors"
                                        >
                                            View Details <FaArrowRight size={12} />
                                        </button>

                                        {project.link && project.link.includes("github.com") && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-gray-800 transition-colors"
                                                title="View Source Code"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}

            {/* Modal Overlay */}
            <ProjectModal project={selectedProject} onClose={closeProject} />

        </section>
    );
}
