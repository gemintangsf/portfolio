"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaFolder, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useUI } from "@/hooks/useUI";
import { Badge, Container, Button } from "@/components/ui";

const technologies = [
  "React JS",
  "Next JS",
  "JQuery",
  "Flutter",
  "Nest JS",
  "Ruby on Rails",
  "Python Flask / Open API",
  "Open Cart",
  "Zend Framework",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "OpenSearch / Elasticsearch",
  "Minio",
  "RestAPI",
  "Swagger",
  "JWT / OAuth",
  "Ollama (LLM/AI)",
  "Apache Airflow",
  "Docker",
  "CI/CD",
  "Git",
  "SonarQube",
  "Git Hooks"
];

export default function LandingHero() {
  const { isLoaded } = useUI();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [direction, setDirection] = useState(0);

  // Scroll to section handler
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

  // Responsive visible items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(4);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(technologies.length / visibleItems);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalPages, visibleItems, currentIndex, nextSlide]);

  const currentStack = technologies.slice(
    currentIndex * visibleItems,
    (currentIndex + 1) * visibleItems
  );

  return (
    <section id="home" className="relative text-center min-h-[100dvh] md:h-[100dvh] md:min-h-0 flex flex-col justify-between items-center w-full overflow-hidden isolate pt-20 pb-8 md:pt-12 md:pb-4 lg:pt-14 lg:pb-6 xl:pt-16 xl:pb-8 [@media(min-width:2560px)]:pt-28 [@media(min-width:2560px)]:pb-16 scroll-mt-20">
      <Container size="lg" className="w-full flex-1 flex flex-col items-center justify-center">
        <div className="w-full mx-auto flex flex-col items-center justify-center text-center gap-4 md:gap-3 lg:gap-4 xl:gap-5 [@media(min-width:2560px)]:gap-8">
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
          <div className="flex flex-col gap-3 md:gap-2 items-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-2xl lg:text-3xl font-black text-brand-base relative z-10 tracking-tighter uppercase text-center w-full leading-tight"
            >
              Welcome To My <span className="text-brand-accent">Portfolio!</span>
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
            className="text-base text-brand-accent max-w-xl leading-relaxed font-light text-center"
          >
            <p>
              Currently I work as a Fullstack and Mobile Developer at PT Javabooks Indonesia, delivering operational tech solutions through web and mobile apps.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-6 justify-center items-center w-full max-w-md"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleShowProjects}
            >
              <FaFolder className="w-[1.2em] h-[1.2em] shrink-0" /> Explore My Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleScroll("contact")}
            >
              <FaEnvelope className="w-[1.2em] h-[1.2em] shrink-0" /> Let&apos;s Collaborate
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Tech Stack Carousel Section */}
      <div className="w-full border-t border-brand-base/5 pt-6 pb-12 md:pt-4 md:pb-6 lg:pt-6 lg:pb-8 xl:pt-8 xl:pb-12 [@media(min-width:2560px)]:pt-12 [@media(min-width:2560px)]:pb-20 mt-4 md:mt-2 lg:mt-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Container size="lg">
            <div className="flex flex-col gap-4 md:gap-3 lg:gap-4 xl:gap-6 [@media(min-width:2560px)]:gap-10 items-center w-full">
              {/* Title + Subtitle group */}
              <div className="flex flex-col gap-2 md:gap-1.5 text-center">
                <h2 className="text-xl md:text-2xl font-black text-brand-base uppercase tracking-tighter leading-tight">
                  Technologies I Use
                </h2>
                <p className="text-base text-brand-accent max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                  A collection of frameworks, libraries, and tools I use to build robust applications.
                </p>
              </div>

              {/* Carousel Content */}
              <div className="w-full flex items-center justify-center gap-2 md:gap-2 lg:gap-4 xl:gap-6 [@media(min-width:2560px)]:gap-8">
                {/* Left Button */}
                <button
                  onClick={prevSlide}
                  className="hidden md:flex p-2 md:p-3 rounded-none bg-brand-base text-background border border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-primary)] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background shrink-0"
                  aria-label="Previous Tech"
                >
                  <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {/* Carousel Window */}
                <div className="w-full max-w-5xl overflow-hidden px-4 md:px-4 pb-6 md:pb-0 min-h-[5rem]">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, info) => {
                        const threshold = 50;
                        if (info.offset.x < -threshold) nextSlide();
                        else if (info.offset.x > threshold) prevSlide();
                      }}
                      className="flex justify-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-wrap md:flex-nowrap w-full cursor-grab active:cursor-grabbing"
                    >
                      {currentStack.map((tech, index) => (
                        <div
                          key={`${tech}-${index}`}
                          className="flex-1 min-w-[7.5rem] max-w-[9.375rem] md:max-w-[12.5rem] min-h-[4.375rem] md:min-h-[5.5rem] flex items-center justify-center px-4 py-4 md:px-4 md:py-5 rounded-none border-2 border-brand-base bg-brand-highlight/20 shadow-[3px_3px_0px_0px_var(--color-primary)] hover:shadow-[5px_5px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-default mt-2 group"
                        >
                          <span className="text-brand-base font-bold text-[10px] md:text-xs text-center uppercase tracking-wider group-hover:scale-105 transition-transform leading-tight block w-full px-1">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Button */}
                <button
                  onClick={nextSlide}
                  className="hidden md:flex p-2 md:p-3 rounded-none bg-brand-base text-background border border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-primary)] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background shrink-0"
                  aria-label="Next Tech"
                >
                  <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 md:gap-3">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background ${idx === currentIndex ? "bg-brand-base w-12" : "bg-brand-base/20 w-4 hover:bg-brand-base/40"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </section>
  );
}
