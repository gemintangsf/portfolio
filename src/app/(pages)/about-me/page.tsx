"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalculator,
  FaFlask,
  FaGamepad,
  FaExclamationTriangle,
  FaLightbulb,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { Button, Card } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const timelineMilestones = [
  {
    num: "01",
    title: "My Love for Math",
    subtitle: "Playing with numbers since childhood",
    desc: "When I was a kid, I really loved mathematics. Solving logic puzzles and numbers was my hobby. But at that time, I did not know that loving math could lead me to the coding world. To me, computers and programming were still a big mystery.",
    icon: FaCalculator,
  },
  {
    num: "02",
    title: "The Chemical Engineering Dream",
    subtitle: "Targeting one specific major",
    desc: "When it was time to choose a college major, I was really focused on Chemical Engineering. I wanted to work in labs and study chemical formulas. I didn't want to look at any other options.",
    icon: FaFlask,
  },
  {
    num: "03",
    title: "My Father's Advice",
    subtitle: "Ego vs. reality",
    desc: "Seeing my daily habits, my father told me: 'You love playing games and spending hours on the computer. Why don't you try IT instead?' But because of my ego, I ignored him. I still wanted to study chemistry.",
    icon: FaGamepad,
  },
  {
    num: "04",
    title: "The Accidental Pivot",
    subtitle: "Failing the chemistry exam",
    desc: "Fate had a different path for me. I failed the entrance exam for Chemical Engineering. Luckily, I had a backup choice and got accepted into Informatics Engineering at Polban. I took it, but honestly, I was still unhappy because I still wanted chemistry.",
    icon: FaExclamationTriangle,
  },
  {
    num: "05",
    title: "Math Meets Code",
    subtitle: "Realizing coding is just applied logic",
    desc: "After a few months of learning programming, I realized something. The logical thinking I used in math was exactly what I needed for coding. Programming wasn't just typing commands; it was using math logic to solve real problems. I finally felt that I was in the right place.",
    icon: FaLightbulb,
  },
  {
    num: "06",
    title: "The Software Engineer",
    subtitle: "From math logic to real apps",
    desc: "Now, I am a software engineer building mobile apps, websites, and backend systems. That childhood hobby of solving math problems has turned into a passion for writing clean, efficient code. The detour was actually the best path for me.",
    icon: FaCode,
  },
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
    <div className="w-full bg-background overflow-hidden">
      {/* 1. HEADER / BANNER SECTION */}
      <div className="w-full bg-background pt-28 pb-16 px-6 md:px-[128px] 4k:px-[256px] relative z-10 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative z-10"
        >
          {/* Back to Home */}
          <motion.div variants={itemVariants}>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </motion.div>

          {/* Header Banner */}
          <motion.div
            variants={itemVariants}
            className="border-4 border-brand-base p-6 md:p-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col justify-between items-start gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-2 block">
              About Me
            </span>
            <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
              My Journey: How a Passion for Mathematics Led to Software Engineering.
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* 2. BODY SECTION */}
      <section className="relative w-full px-6 pt-24 pb-24 md:px-[128px] md:pt-[var(--section-pt)] md:pb-[128px] 4k:px-[256px] bg-background-alt overflow-hidden z-10">
        {/* Slanted Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0" style={{ height: "var(--divider-height)", minHeight: "var(--divider-min-height)" }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[var(--background)]">
            <polygon points="0,0 100,0 0,100" />
          </svg>
        </div>

        <div className="w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
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
              <Card hoverable className="p-6 md:p-8 border-2 bg-card-bg">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-base mb-4 border-b border-brand-base/15 pb-2">
                  The Blueprint
                </h3>
                <div className="space-y-4 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">First Love</span>
                    <span className="font-bold text-brand-base uppercase text-right">Mathematics 📐</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">First Choice</span>
                    <span className="font-bold text-brand-accent/50 line-through uppercase text-right">Chemical Eng. 🧪</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Accidental Path</span>
                    <span className="font-bold text-brand-base uppercase text-right">Polban Informatics 🏫</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Current Quest</span>
                    <span className="font-bold text-brand-base uppercase text-right">Software Engineer 💻</span>
                  </div>
                  <div className="border-t border-dashed border-brand-base/15"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-accent text-[9px] uppercase tracking-wider">Location</span>
                    <span className="font-bold text-brand-base uppercase text-right">Jakarta, ID 🇮🇩</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right Column (Roadmap Timeline) */}
            <motion.div variants={itemVariants} className="lg:col-span-8 relative">
              {/* Winding Roadmap Layout */}
              <div className="relative space-y-12 lg:space-y-0">
                {/* Wobbly SVG Snake Line */}
                <svg
                  className="absolute left-0 w-8 md:w-10 lg:w-40 lg:left-1/2 lg:-translate-x-1/2 top-8 bottom-8 text-brand-base/15 pointer-events-none"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 1000"
                >
                  <path
                    d="M 50 0 C 20 50, 80 150, 50 200 C 20 250, 80 350, 50 400 C 20 450, 80 550, 50 600 C 20 650, 80 750, 50 800 C 20 850, 80 950, 50 1000"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                  />
                </svg>

                {timelineMilestones.map((milestone, idx) => {
                  const IconComponent = milestone.icon;
                  const isEven = idx % 2 === 1;

                  return (
                    <div
                      key={milestone.num}
                      className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center min-h-[160px]"
                    >
                      {/* Milestone Node */}
                      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-10">
                        <span className="text-xs font-black font-mono bg-brand-highlight border-2 border-brand-base text-brand-base w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_var(--color-primary)]">
                          {milestone.num}
                        </span>
                      </div>

                      {/* Left Column (Card for odd milestones on desktop, visible as fallback on mobile) */}
                      <div className="col-span-1 lg:col-span-5 pl-12 lg:pl-0">
                        {!isEven ? (
                          <motion.div variants={itemVariants}>
                            <Card hoverable className="p-6 md:p-8 bg-card-bg">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-lg md:text-xl text-brand-primary p-2 bg-brand-highlight/20 border border-brand-base/10 shadow-[2px_2px_0px_0px_var(--color-primary)]">
                                  <IconComponent />
                                </span>
                                <div>
                                  <h4 className="text-sm md:text-base font-bold text-brand-base uppercase tracking-tight">
                                    {milestone.title}
                                  </h4>
                                  <span className="text-[9px] md:text-[10px] font-bold text-brand-accent uppercase tracking-widest block mt-0.5">
                                    {milestone.subtitle}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs md:text-sm text-brand-accent font-light leading-relaxed text-justify">
                                {milestone.desc}
                              </p>
                            </Card>
                          </motion.div>
                        ) : (
                          // Desktop empty spacing placeholder
                          <div className="hidden lg:block h-10" />
                        )}
                      </div>

                      {/* Center Spacer Column for Desktop */}
                      <div className="hidden lg:block lg:col-span-2 h-10" />

                      {/* Right Column (Card for even milestones on desktop, visible as fallback on mobile) */}
                      <div className="col-span-1 lg:col-span-5 pl-12 lg:pl-0">
                        {isEven ? (
                          <motion.div variants={itemVariants}>
                            <Card hoverable className="p-6 md:p-8 bg-card-bg">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-lg md:text-xl text-brand-primary p-2 bg-brand-highlight/20 border border-brand-base/10 shadow-[2px_2px_0px_0px_var(--color-primary)]">
                                  <IconComponent />
                                </span>
                                <div>
                                  <h4 className="text-sm md:text-base font-bold text-brand-base uppercase tracking-tight">
                                    {milestone.title}
                                  </h4>
                                  <span className="text-[9px] md:text-[10px] font-bold text-brand-accent uppercase tracking-widest block mt-0.5">
                                    {milestone.subtitle}
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs md:text-sm text-brand-accent font-light leading-relaxed text-justify">
                                {milestone.desc}
                              </p>
                            </Card>
                          </motion.div>
                        ) : (
                          // Desktop empty spacing placeholder
                          <div className="hidden lg:block h-10" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Footer */}
              <motion.div
                variants={itemVariants}
                className="mt-16 text-center max-w-xl mx-auto pl-12 lg:pl-0"
              >
                <p className="text-xs md:text-sm text-brand-accent font-mono mb-4 uppercase tracking-wider">
                  The End of My Story
                </p>
                <p className="text-sm md:text-base text-brand-base font-light mb-8 leading-relaxed">
                  We have reached the end of my story. To see my professional experience and details, feel free to check out my resume.
                </p>
                <div className="flex justify-center">
                  <a
                    href={SITE_CONFIG.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="primary" size="lg" className="gap-2 px-8">
                      <span>See My Resume</span>
                      <FaArrowRight className="text-sm shrink-0" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
