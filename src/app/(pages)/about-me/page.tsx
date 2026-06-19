"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Badge, Button, Card, Container } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const corePillars = [
  {
    num: "01",
    role: "Mobile Developer",
    tech: "Flutter",
    desc: "Developing cross-platform mobile apps for iOS and Android. Experienced in building features like location check-ins, local storage caching, and responsive UI layouts."
  },
  {
    num: "02",
    role: "Web Developer",
    tech: "Next.js / React",
    desc: "Building web applications with React and Next.js. Worked on retail catalogs, search autocomplete functionality, and SEO configuration."
  },
  {
    num: "03",
    role: "Backend Developer",
    tech: "NestJS / Node.js / Python",
    desc: "Creating APIs and designing database schemas in PostgreSQL and MySQL. Worked on migrating PHP codebases to NestJS and writing data sync scripts."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 overflow-hidden bg-background">
      <Container size="full" className="max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col gap-8"
        >
          {/* Header Row */}
          <motion.div variants={itemVariants} className="border-4 border-brand-base p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col justify-between items-start gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">
              About Me
            </span>
            <h1 className="text-lg md:text-xl font-black uppercase tracking-tighter text-brand-base leading-none">
              I build mobile applications, web platforms, and backend systems.
            </h1>
          </motion.div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (Profile Info & Details) */}
            <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6">
              {/* Photo Box */}
              <div className="relative w-full aspect-[3/4] rounded-none overflow-hidden border-4 border-brand-base shadow-[8px_8px_0px_0px_var(--color-primary)] hover:shadow-[12px_12px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 group">
                <Image
                  src="/assets/pp.jpeg"
                  alt="Gemintang Profile"
                  fill
                  className="object-cover scale-150 object-[center_15%] transition-transform duration-700 group-hover:scale-160"
                  priority
                />
              </div>

              {/* Fast Facts Card */}
              <Card className="p-5 border-2">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-base mb-4 border-b border-brand-base/15 pb-2">
                  Quick Facts
                </h3>
                <div className="space-y-4 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Role</span>
                    <span className="font-bold text-brand-base uppercase text-right">Full Stack & Mobile</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Location</span>
                    <span className="font-bold text-brand-base uppercase text-right">Jakarta, ID</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Focus</span>
                    <span className="font-bold text-brand-base uppercase text-right">Speed & Scale</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-bold text-brand-accent hover:text-brand-base transition-colors underline truncate text-right max-w-[150px] md:max-w-none"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right Column (Bento Cards Grid) */}
            <motion.div variants={itemVariants} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Core Pillars (Col-span 2) */}
              <Card className="p-6 md:p-8 md:col-span-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-6 border-b border-brand-base/10 pb-2">
                  Core Pillars & Expertise
                </h3>
                <div className="space-y-6">
                  {corePillars.map((pillar) => (
                    <div key={pillar.num} className="flex gap-4 md:gap-6 items-start pb-6 border-b border-brand-base/5 last:border-b-0 last:pb-0">
                      <span className="text-xs font-black font-mono bg-brand-highlight border-2 border-brand-base text-brand-base w-8 h-8 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_var(--color-primary)]">
                        {pillar.num}
                      </span>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm md:text-base font-bold text-brand-base uppercase tracking-tight">
                            {pillar.role}
                          </h4>
                          <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest bg-brand-highlight px-2 py-0.5 border border-brand-base/10">
                            {pillar.tech}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-brand-accent font-light leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Card 2: Tech Ecosystem (Col-span 1) */}
              <Card className="p-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4 border-b border-brand-base/10 pb-2">
                  Ecosystem
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-brand-primary block mb-2">Mobile & Frontend</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Flutter", "Next.js", "React", "TypeScript", "TailwindCSS"].map((tech) => (
                        <Badge key={tech} variant="tag" className="text-[9px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-brand-primary block mb-2">Backend & Logic</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["NestJS", "Node.js", "Python", "Express.js", "Ruby on Rails"].map((tech) => (
                        <Badge key={tech} variant="tag" className="text-[9px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-brand-primary block mb-2">Data & Infrastructure</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["PostgreSQL", "MySQL", "OpenSearch", "MinIO", "Airflow", "Git"].map((tech) => (
                        <Badge key={tech} variant="tag" className="text-[9px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Card 3: Stats Grid (Col-span 1) */}
              <Card className="p-6 flex flex-col justify-between">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-6 border-b border-brand-base/10 pb-2">
                  Key Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="border border-brand-base/10 bg-brand-highlight/20 p-4 shadow-[2px_2px_0px_0px_var(--color-primary)] flex flex-col justify-center rounded-none">
                    <span className="text-base md:text-lg font-black text-brand-base uppercase leading-none tracking-tighter">03+</span>
                    <span className="text-[9px] text-brand-accent font-bold uppercase tracking-wider mt-1 block">Years of Exp</span>
                  </div>
                  <div className="border border-brand-base/10 bg-brand-highlight/20 p-4 shadow-[2px_2px_0px_0px_var(--color-primary)] flex flex-col justify-center rounded-none">
                    <span className="text-base md:text-lg font-black text-brand-base uppercase leading-none tracking-tighter">03</span>
                    <span className="text-[9px] text-brand-accent font-bold uppercase tracking-wider mt-1 block">Companies</span>
                  </div>
                  <div className="border border-brand-base/10 bg-brand-highlight/20 p-4 shadow-[2px_2px_0px_0px_var(--color-primary)] flex flex-col justify-center rounded-none">
                    <span className="text-base md:text-lg font-black text-brand-base uppercase leading-none tracking-tighter">12+</span>
                    <span className="text-[9px] text-brand-accent font-bold uppercase tracking-wider mt-1 block">Projects Built</span>
                  </div>
                  <div className="border border-brand-base/10 bg-brand-highlight/20 p-4 shadow-[2px_2px_0px_0px_var(--color-primary)] flex flex-col justify-center rounded-none">
                    <span className="text-base md:text-lg font-black text-brand-base uppercase leading-none tracking-tighter">01</span>
                    <span className="text-[9px] text-brand-accent font-bold uppercase tracking-wider mt-1 block">Degree (Polban)</span>
                  </div>
                </div>
              </Card>

              {/* Card 4: Action Footer (Col-span 2) */}
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="primary" size="lg" className="w-full justify-center gap-2">
                    <FiDownload className="text-base shrink-0" />
                    <span>Download Resume</span>
                  </Button>
                </a>
                <Link href="/projects" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full justify-center gap-2 border-2">
                    <span>Explore Timeline Journey</span>
                    <FiArrowRight className="text-base shrink-0" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
