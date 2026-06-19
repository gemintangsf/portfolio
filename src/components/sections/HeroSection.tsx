"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaFolder, FaEnvelope } from "react-icons/fa";
import { useUI } from "@/hooks/useUI";
import { Badge, Container } from "@/components/ui";

export default function HeroSection() {
  const { isLoaded, setSelectedCategory } = useUI();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleShowProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section id="home" className="relative text-center flex-1 flex flex-col justify-center items-center w-full overflow-hidden isolate pt-24 pb-12 md:pt-32 md:pb-16 scroll-mt-20">
      <Container size="lg" className="w-full flex flex-col items-center justify-center">
        <div className="w-full mx-auto flex flex-col items-center justify-center text-center gap-6 md:gap-8">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 justify-center"
          >
            <Badge
              variant="status"
              icon={<FaMapMarkerAlt className="text-brand-base" />}
              className="bg-brand-highlight border border-brand-accent/20 px-4 py-2"
            >
              Jakarta, Indonesia
            </Badge>
          </motion.div>

          {/* Heading Group */}
          <div className="flex flex-col gap-3 md:gap-4 items-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-2xl lg:text-3xl font-black text-brand-base relative z-10 tracking-tighter uppercase text-center w-full leading-tight"
            >
              Hello <span className="text-brand-accent">World!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-base text-brand-primary font-bold tracking-[0.2em] uppercase text-center"
            >
              I'm Gemintang a Software Engineer
            </motion.p>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-brand-accent max-w-xl leading-relaxed font-light space-y-4 text-center"
          >
            <p>
              I'm a Software Engineer who works as a Fullstack and Mobile Developer at PT Javabooks Indonesia. I currently focus on building reliable mobile applications and web platforms that solve operational challenges.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
          >
            <button
              onClick={handleShowProjects}
              className="w-full sm:w-auto flex-1 px-8 py-4 bg-brand-base text-background border border-brand-base font-bold uppercase tracking-widest text-[10px] sm:text-xs shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[5px_5px_0px_0px_var(--color-primary)] active:translate-x-0.5 active:translate-y-0.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base"
            >
              <FaFolder size={12} /> Explore My Projects
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto flex-1 px-8 py-4 bg-transparent text-brand-base border border-brand-base font-bold uppercase tracking-widest text-[10px] sm:text-xs shadow-[3px_3px_0px_0px_var(--color-base)] hover:shadow-[5px_5px_0px_0px_var(--color-base)] active:translate-x-0.5 active:translate-y-0.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base"
            >
              <FaEnvelope size={12} /> Let&apos;s Collaborate
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
