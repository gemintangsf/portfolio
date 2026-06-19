"use client";

import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaCalendarAlt,
  FaArrowRight
} from "react-icons/fa";
import Link from "next/link";
import { Card, Badge } from "@/components/ui";

interface ProjectDetail {
  name: string;
  role: string;
  description: string;
  stack: string[];
  link?: string;
}

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company?: string;
  role: string;
  type: "education" | "experience" | "project";
  description: string;
  highlights: string[];
  projects?: ProjectDetail[];
  iconType: "polban" | "bejana" | "jtk" | "neuronworks" | "javabooks";
}

const timelineData: TimelineItem[] = [
  {
    id: "polban",
    period: "2019 - 2021",
    title: "Academic Foundation & Early Coding",
    company: "Politeknik Negeri Bandung (POLBAN)",
    role: "Bachelor of Applied Computer Science Student",
    type: "education",
    iconType: "polban",
    description: "My introduction to software engineering. I focused on building logic, understanding computer architecture, and mastering core computing concepts. I studied algorithms, data structures, procedural programming (C/C++), object-oriented programming (Java), relational databases (SQL), and network fundamentals.",
    highlights: [
      "Developed a strong programming logic foundation using low-level concepts (C/C++).",
      "Collaborated on a team project using version control (Git) for the first time."
    ],
    projects: [
      {
        name: "SIINVENT (Nov - Dec 2021)",
        role: "Backend Developer",
        description: "A web-based inventory management system for regional institutions. Built my first REST APIs using Express.js and PostgreSQL to handle basic CRUD database operations.",
        stack: ["Express.js", "PostgreSQL", "REST API", "Git Workflow"],
        link: "/projects/side-projects?tab=siinvent"
      }
    ]
  },
  {
    id: "bejana",
    period: "Jun 2022 - Oct 2022",
    title: "First Industry Internship & Framework Exploration",
    company: "PT. Bejana Investidata Globalindo (BIG IO)",
    role: "Full Stack Developer Intern",
    type: "experience",
    iconType: "bejana",
    description: "My first experience working in a professional environment. I joined the development team for the Indonesian Orthopedic Association (PABOI) web portal. I started on backend APIs but quickly transitioned to a full-stack role to help clear urgent user interface (UI) backlogs.",
    highlights: [
      "Adapted to professional agile/kanban team workflows alongside developers, QA engineers, and Product Managers.",
      "Shifted smoothly from writing backend APIs to handling client-facing UI tasks."
    ],
    projects: [
      {
        name: "PABOI Web Portal",
        role: "Full Stack Developer Intern",
        description: "Contributed to doctor profiles and membership registration flows. Fixed backend bugs using Ruby on Rails and resolved pending frontend UI issues using ReactJS.",
        stack: ["Ruby on Rails", "ReactJS", "MySQL", "Git"],
        link: "/projects/pt-bejana"
      }
    ]
  },
  {
    id: "sinbada",
    period: "Nov 2022 - Jan 2023",
    title: "Database Exploration & Academic Teamwork",
    company: "Politeknik Negeri Bandung (POLBAN)",
    role: "Backend Developer",
    type: "project",
    iconType: "polban",
    description: "An academic team project aimed at exploring NoSQL databases and cloud deployment strategies for regional inventory tracking. We compared document-based models against relational databases.",
    highlights: [
      "Modeled document databases to handle dynamic inventory attributes without rigid schemas.",
      "Configured basic application hosting and deployment environments on Microsoft Azure."
    ],
    projects: [
      {
        name: "SINBADA",
        role: "Backend Developer",
        description: "Built inventory tracking and item mutation flows using Ruby on Rails and MongoDB, and managed the application deployment on Azure.",
        stack: ["Ruby on Rails", "MongoDB", "Azure", "ReactJS"],
        link: "/projects/side-projects?tab=sinbada"
      }
    ]
  },
  {
    id: "jtk-berbagi",
    period: "Feb 2023 - Nov 2023",
    title: "Systems Analysis & Graduation Capstone",
    company: "Politeknik Negeri Bandung (POLBAN)",
    role: "Backend Developer & System Analyst",
    type: "project",
    iconType: "jtk",
    description: "My final graduation project: a social fund donation platform (similar to Kitabisa.com) designed for the JTK Polban academic community. In addition to coding the backend, I led the system analysis phase to map donation collections, verification, and disbursement workflows.",
    highlights: [
      "Managed the full SDLC using the Waterfall model, moving from requirements gathering to system testing.",
      "Designed detailed system specifications, including Data Flow Diagrams (DFDs) and relational database schemas."
    ],
    projects: [
      {
        name: "JTK Berbagi",
        role: "Backend Developer & System Analyst",
        description: "A structured community donation platform. Engineered backend APIs using Ruby on Rails and MySQL, collaborating with the React.js frontend team to secure donation transaction flows.",
        stack: ["Ruby on Rails", "MySQL", "React.js", "Waterfall SDLC", "System Analysis"],
        link: "/projects/side-projects?tab=jtk-berbagi"
      }
    ]
  },
  {
    id: "neuronworks",
    period: "Feb 2024 - Feb 2025",
    title: "Enterprise Systems Development",
    company: "PT. Jagoo IT (Outsourced to PT. Neuronworks Indonesia)",
    role: "Full Stack Developer (Client: Telkom Indonesia)",
    type: "experience",
    iconType: "neuronworks",
    description: "Transitioned to large-scale enterprise development. I worked in cross-functional teams under System Analysts and Product Managers to build and maintain services in a microservices environment for Telkom Indonesia, integrated with national terminal network databases.",
    highlights: [
      "Handled high-volume data transactions and service-to-service communication.",
      "Implemented object-level soft-deletions to maintain system audit log compliance.",
      "Followed strict code quality benchmarks by passing SonarQube static analysis before release."
    ],
    projects: [
      {
        name: "NADIA (Network Terminal Equipment)",
        role: "Full Stack Developer",
        description: "An internal asset management tool for tracking returned terminal equipment. Refactored the backend using NestJS, fixed core asset retrieval bugs, and automated scheduled syncing via Apache Airflow.",
        stack: ["NestJS", "Next.js", "PostgreSQL", "Apache Airflow", "SonarQube"],
        link: "/projects/pt-neuronworks?tab=nadia"
      },
      {
        name: "SCONE (Order Management)",
        role: "Full Stack Developer",
        description: "Migrated legacy Zend PHP templates to Next.js to modernize the order management interface and synced order states with downstream services.",
        stack: ["Next.js", "Zend Framework", "Oracle DB"],
        link: "/projects/pt-neuronworks?tab=scone"
      },
      {
        name: "DMS (Document Management System)",
        role: "Full Stack Developer",
        description: "Built document landing pages and CRUD logic integrated with MinIO object storage and PostgreSQL to store order attachment files securely.",
        stack: ["MinIO", "Zend Framework", "PostgreSQL", "jQuery"],
        link: "/projects/pt-neuronworks?tab=dms"
      },
      {
        name: "PEFITA (Package Management)",
        role: "Full Stack Developer",
        description: "Integrated Google Maps API for coordinate-based package boundaries visualization connected dynamically to NestJS.",
        stack: ["React (Vite)", "NestJS", "PostgreSQL", "Google Maps API"],
        link: "/projects/pt-neuronworks?tab=pefita"
      },
      {
        name: "PPT (Master Data Management)",
        role: "Full Stack Developer",
        description: "Migrated legacy master data management PHP screens to Next.js to improve administrative datagrid entry speed.",
        stack: ["Next.js", "TypeScript"],
        link: "/projects/pt-neuronworks?tab=ppt"
      }
    ]
  },
  {
    id: "javabooks",
    period: "May 2025 - Present",
    title: "Mobile Optimization, POS & AI Search",
    company: "PT. Javabooks Indonesia (Periplus)",
    role: "Full Stack & Mobile Developer",
    type: "experience",
    iconType: "javabooks",
    description: "My current focus is solving retail performance bottlenecks and operational overhead across Periplus physical stores and e-commerce platforms. I specialize in cross-platform mobile app development, geofenced verification systems, and custom search algorithms.",
    highlights: [
      "Designed an on-the-fly biometric verification workflow with zero enrollment overhead.",
      "Eliminated 100% of physical POS troubleshooting travel costs by centralizing store systems.",
      "Optimized mobile image rendering to prevent memory-related app crashes on low-end employee phones."
    ],
    projects: [
      {
        name: "PHC Mobile App",
        role: "Full Stack & Mobile Developer",
        description: "An internal HR application. Developed geofenced biometric check-in modules (InsightFace Python) and high-performance leaderboards with custom viewport caching to prevent memory crashes on lower-end devices. Hardened quiz campaigns with OS-level screenshot blocks and focus-loss tracking.",
        stack: ["Flutter", "Python", "InsightFace", "MySQL", "OpenCart", "OpenSearch"],
        link: "/projects/pt-javabooks?tab=phc-mobile"
      },
      {
        name: "Mobile POS App",
        role: "Full Stack & Mobile Developer",
        description: "A centralized cashier application replacing legacy offline desktop POS systems. Supports Bluetooth barcode scanning, receipt printing, and real-time inventory synchronization.",
        stack: ["Flutter (Mobile/Tablet)", "REST API", "Bluetooth Printing", "Centralized DB"],
        link: "/projects/pt-javabooks?tab=pos-mobile"
      },
      {
        name: "PeriplusApps Mobile",
        role: "Full Stack & Mobile Developer",
        description: "Co-developed the primary customer-facing e-commerce mobile bookstore app. Audited endpoints to cut duplicate API calls, resolved UI layout overflows across tablet and phone screens, and verified state resets for coupon checkout routines.",
        stack: ["Flutter", "REST API Integration", "Responsive UI", "State Hardening"],
        link: "/projects/pt-javabooks?tab=periplus-apps"
      },
      {
        name: "periplus.com (Search & Recommendation Engine)",
        role: "Full Stack Developer",
        description: "Migrated the online catalog search engine to OpenSearch. Restructured query weighting logic to prioritize search suggestions and rank items dynamically by keyword match, sales velocity, and user trends.",
        stack: ["OpenSearch", "Python", "MySQL", "OpenCart", "Search Custom Weighting"],
        link: "/projects/pt-javabooks?tab=search-opensearch"
      }
    ]
  }
];

export default function JourneySection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "polban":
      case "jtk":
        return <FaGraduationCap className="text-lg" />;
      case "bejana":
      case "neuronworks":
      case "javabooks":
        return <FaBriefcase className="text-lg" />;
      default:
        return <FaCode className="text-lg" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    return type === "education" ? "status" : "tag";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="min-h-screen bg-background text-brand-base pt-28 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
      {/* Back to Home */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      {/* Page Header */}
      <div className="border-4 border-brand-base p-6 md:p-12 mb-16 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col justify-between items-start gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-1 block">
          Developer Journey Timeline
        </span>
        <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
          My Coding Journey
        </h1>
        <p className="text-sm md:text-base text-brand-accent max-w-2xl font-light mt-2 leading-relaxed text-justify">
          The technical milestones behind the systems I build. From academic training at POLBAN, to managing database schemas and pipelines in enterprise settings at Telkom Indonesia, to optimizing cross-platform mobile apps and search query logic in e-commerce. This timeline highlights the concrete problems solved and contributions made at each phase.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-8 md:pl-12 border-l-2 border-brand-base/20 ml-4 md:ml-6 space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {timelineData.map((item) => (
            <motion.div
              key={item.id}
              id={item.id}
              variants={itemVariants}
              className="relative scroll-mt-24"
            >
              {/* Timeline dot / Icon */}
              <span className="absolute -left-[3.125rem] md:-left-[4.125rem] top-1.5 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-highlight border-2 border-brand-base text-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] z-20">
                {getIcon(item.iconType)}
              </span>

              {/* Card Container */}
              <Card hoverable className="p-5 md:p-8 relative">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-brand-base/10 pb-4">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-accent flex items-center gap-1.5 mb-1.5">
                      <FaCalendarAlt size={9} /> {item.period}
                    </span>
                    <h3 className="text-lg font-black text-brand-base uppercase tracking-tighter leading-tight">
                      {item.title}
                    </h3>
                    {item.company && (
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wide block mt-1">
                        {item.company}
                      </span>
                    )}
                  </div>
                  <div className="flex-shrink-0 md:self-start">
                    <Badge variant={getBadgeVariant(item.type)} className="text-[9px]">
                      {item.role}
                    </Badge>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-brand-accent font-light leading-relaxed mb-6 text-justify">
                  {item.description}
                </p>

                {/* Core Focus Bullet Points */}
                <div className="mb-6">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-brand-base mb-3 border-b border-brand-base/10 pb-1">
                    Core Focus & Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs font-light leading-relaxed">
                        <span className="text-brand-base font-bold text-[9px] border border-brand-base/40 bg-brand-highlight px-1 flex-shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects built in this phase */}
                {item.projects && item.projects.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-brand-base/10 space-y-6">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-brand-base">
                      Project Details & Systems Built (Click to view Case Study)
                    </h4>
                    <div className="grid grid-cols-1 gap-6">
                      {item.projects.map((proj, pIdx) => {
                        const projectCardContent = (
                          <div className="p-4 md:p-5 border-2 border-brand-base bg-brand-highlight/20 shadow-[2px_2px_0px_0px_var(--color-base)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 cursor-pointer rounded-none h-full flex flex-col justify-between">
                            <div>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <span className="text-xs font-bold uppercase tracking-tight text-brand-base">
                                  {proj.name}
                                </span>
                                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider bg-background px-2 py-0.5 border border-brand-base/20 self-start sm:self-auto">
                                  Role: {proj.role}
                                </span>
                              </div>
                              
                              <p className="text-sm text-brand-accent font-light leading-relaxed mb-4 text-justify">
                                {proj.description}
                              </p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-brand-base/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="flex flex-wrap gap-1.5">
                                {proj.stack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-background border border-brand-base/15 text-brand-accent"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              {proj.link && (
                                <span className="text-[9px] font-black uppercase tracking-wider text-brand-base group-hover:text-brand-primary flex items-center gap-1 shrink-0 self-end sm:self-auto">
                                  Read Case Study <FaArrowRight size={8} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                              )}
                            </div>
                          </div>
                        );

                        return proj.link ? (
                          <Link key={pIdx} href={proj.link} className="block group">
                            {projectCardContent}
                          </Link>
                        ) : (
                          <div key={pIdx}>
                            {projectCardContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Back to Home Button at bottom */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-base text-background border-2 border-brand-base text-[10px] uppercase tracking-[0.25em] font-black shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  );
}
