"use client";

import { FaFolder, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui";

export default function LandingHero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleShowProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section
      id="home"
      className="relative text-center w-full min-h-[100dvh] flex flex-col justify-center items-center px-6 py-12 md:px-[128px] md:py-[64px] 4k:px-[256px] scroll-mt-20 overflow-x-hidden isolate"
    >
      <div className="w-full flex flex-col items-center justify-center text-center">

        {/* Heading Group */}
        <div className="flex flex-col gap-2 md:gap-3 items-center w-full">
          <h1
            className="text-2xl md:text-xl lg:text-2xl laptop-l:text-3xl 4k:text-3xl font-black text-brand-base relative z-10 tracking-tighter uppercase text-center w-full leading-tight animate-hero-title"
          >
            Welcome To My <span className="text-brand-accent">Portfolio!</span>
          </h1>

          <p
            className="text-xs md:text-xs lg:text-sm laptop-l:text-base 4k:text-base text-brand-primary font-bold tracking-[0.2em] uppercase text-center animate-hero-subtitle"
          >
            I'm Gemintang a Software Engineer
          </p>
        </div>

        {/* Description */}
        <div
          className="text-xs md:text-xs lg:text-sm laptop-l:text-base 4k:text-base text-brand-accent max-w-2xl leading-relaxed font-light text-center mt-6 md:mt-8 animate-hero-desc"
        >
          <p>
            Currently I work as a Fullstack and Mobile Developer at PT Javabooks Indonesia, delivering operational tech solutions through web and mobile apps.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-6 justify-center items-center w-full max-w-md mt-8 md:mt-10 animate-hero-cta"
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
        </div>
      </div>
    </section>
  );
}
