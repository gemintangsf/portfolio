"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaMobileAlt, 
  FaLaptopCode, 
  FaServer, 
  FaSearch, 
  FaCompass, 
  FaArrowLeft, 
  FaArrowRight 
} from "react-icons/fa";
import { useUI } from "@/hooks/useUI";
import { Badge, Container } from "@/components/ui";

interface MatchmakerOption {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  category: string;
  pitch: string;
  prefill: string;
}

const matchmakerOptions: MatchmakerOption[] = [
  {
    id: "mobile",
    icon: FaMobileAlt,
    label: "Build a Mobile App",
    category: "Mobile",
    pitch: "I develop fast, responsive Flutter mobile apps. Whether it is adding face-recognition check-ins and image cache management for HR systems (PHC Mobile), optimizing commercial e-commerce databases (PeriplusApps Mobile), or integrating hardware scanner/printer modules for Mobile POS, I focus on performance.",
    prefill: "Hi Gemintang, I'm looking to build or optimize a mobile application. I'd love to hear how you handle challenges like rendering heavy lists, image caching, or offline-sync in Flutter.",
  },
  {
    id: "web",
    icon: FaLaptopCode,
    label: "Develop / Scale a Web App",
    category: "Web",
    pitch: "I build responsive, SEO-friendly web applications using Next.js, React, and Tailwind CSS. I have experience migrating legacy frameworks to modern Next.js structures, optimization for Core Web Vitals, and implementing typo-tolerant search suggestions.",
    prefill: "Hi Gemintang, I have a web application project and would like to build it with Next.js/React. Let's discuss how we can structure the frontend and ensure high performance.",
  },
  {
    id: "backend",
    icon: FaServer,
    label: "Optimize APIs & Databases",
    category: "Enterprise",
    pitch: "I design scalable, secure, and production-ready backend services using NestJS, Python, PostgreSQL, and MySQL. From managing legacy migrations and Airflow background scheduling at Telkom to OpenSearch catalog ranking at PT Javabooks, I build robust systems.",
    prefill: "Hi Gemintang, my backend system needs database tuning or API optimization. I'd love to discuss how to structure scalable NestJS/Python services and automate data syncing.",
  },
  {
    id: "hire",
    icon: FaSearch,
    label: "Recruit a Full-Stack Engineer",
    category: "All",
    pitch: "I am a product-focused developer who adapts quickly to any stack (Flutter, NextJS, NestJS, Python). I prioritize clean, auditable code (using SonarQube metrics), structured documentation, and Agile collaboration to deliver business value.",
    prefill: "Hi Gemintang, I'm a recruiter looking for a self-driven full-stack engineer who values clean code and rapid adaptation. Let's discuss open opportunities in our team.",
  },
  {
    id: "browse",
    icon: FaCompass,
    label: "Just browsing around",
    category: "All",
    pitch: "Welcome! Feel free to explore my featured projects, try the 24 puzzle solver in the menu (game24), check the FAQs, or read through my experiences at PT Javabooks and Telkom Indonesia.",
    prefill: "Hi Gemintang, I was checking out your portfolio. I really like how the matchmaker widget personalizes the experience. Great work!",
  },
];

export default function HeroSection() {
  const { isLoaded, setSelectedCategory, setPrefilledMessage } = useUI();
  const [selectedOption, setSelectedOption] = useState<MatchmakerOption | null>(null);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleShowProjects = (category: string) => {
    setSelectedCategory(category);
    handleScroll("projects");
  };

  const handleCollaborate = (prefill: string) => {
    setPrefilledMessage(prefill);
    handleScroll("contact");
  };

  return (
    <section id="home" className="relative text-left flex-1 flex flex-col justify-center items-center overflow-hidden isolate pt-28 pb-12 md:pt-40 md:pb-24 scroll-mt-20">
      <Container size="lg" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: Greeting, philosophy & description */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-4 justify-start"
            >
              <Badge
                variant="status"
                icon={<FaMapMarkerAlt className="text-brand-base" />}
                className="bg-brand-highlight border border-brand-accent/20 px-4 py-2"
              >
                Jakarta, Indonesia
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-base relative z-10 leading-[1.1] tracking-tighter uppercase"
            >
              Hi, I’m <span className="text-brand-accent">Gemintang</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-base sm:text-lg text-brand-primary font-bold tracking-[0.2em] uppercase"
            >
              Software Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base md:text-lg text-brand-accent max-w-xl leading-relaxed font-light space-y-4"
            >
              <p className="border-l-4 border-brand-base pl-4 italic text-brand-base font-medium">
                &ldquo;Be interested, not interesting.&rdquo;
              </p>
              <p>
                I&apos;m far more interested in what you are building and the challenges you face than in boasting about my skills.
              </p>
              <p className="text-sm text-brand-accent/70">
                Select an option on the right that matches your goals, and let&apos;s see how I can help you succeed.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interactive Matchmaker Widget */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-brand-highlight border-2 border-brand-base p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--color-primary)] hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-300 w-full relative"
            >
              {/* Window Header */}
              <div className="border-b-2 border-brand-base pb-4 mb-6 flex justify-between items-center">
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-base">
                  {selectedOption ? "Your Selection" : "Start Here"}
                </h2>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-base/20 border border-brand-base"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-base/20 border border-brand-base"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-base/20 border border-brand-base"></span>
                </div>
              </div>

              {/* Matchmaker Panel Body */}
              <div className="min-h-[280px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {!selectedOption ? (
                    <motion.div
                      key="options-list"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-3 w-full"
                    >
                      <p className="text-xs text-brand-accent/80 font-bold uppercase tracking-wider mb-2">
                        What brings you here today?
                      </p>
                      {matchmakerOptions.map((opt) => {
                        const Icon = opt.icon;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setSelectedOption(opt)}
                            className="w-full text-left p-3.5 bg-background hover:bg-brand-base hover:text-background border border-brand-base/40 hover:border-brand-base shadow-[3px_3px_0px_0px_var(--color-highlight)] hover:shadow-[5px_5px_0px_0px_var(--color-primary)] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base"
                          >
                            <span className="flex items-center gap-3 font-bold uppercase tracking-wider text-xs">
                              <Icon className="text-brand-accent group-hover:text-background transition-colors text-sm" />
                              {opt.label}
                            </span>
                            <FaArrowRight className="text-brand-accent group-hover:text-background transition-colors text-xs" />
                          </button>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details-view"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-brand-base/10 text-brand-base border border-brand-base/20 text-sm">
                            <selectedOption.icon />
                          </div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-base">
                            {selectedOption.label}
                          </h3>
                        </div>

                        <p className="text-brand-accent text-xs md:text-sm font-light leading-relaxed">
                          {selectedOption.pitch}
                        </p>
                      </div>

                      <div className="pt-6 space-y-3">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleShowProjects(selectedOption.category)}
                            className="flex-1 px-4 py-3 bg-brand-base text-background border border-brand-base font-bold uppercase tracking-widest text-[10px] sm:text-xs shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[5px_5px_0px_0px_var(--color-primary)] active:translate-x-0.5 active:translate-y-0.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none"
                          >
                            Show Projects
                          </button>
                          <button
                            onClick={() => handleCollaborate(selectedOption.prefill)}
                            className="flex-1 px-4 py-3 bg-transparent text-brand-base border border-brand-base font-bold uppercase tracking-widest text-[10px] sm:text-xs shadow-[3px_3px_0px_0px_var(--color-base)] hover:shadow-[5px_5px_0px_0px_var(--color-base)] active:translate-x-0.5 active:translate-y-0.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none"
                          >
                            Let&apos;s Collaborate
                          </button>
                        </div>

                        <button
                          onClick={() => setSelectedOption(null)}
                          className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-brand-base transition-colors flex items-center gap-2 cursor-pointer mt-2 focus:outline-none"
                        >
                          <FaArrowLeft /> Start Over
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
