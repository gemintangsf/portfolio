"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useUI } from "@/hooks/useUI";
import { Badge, Button, Stack, Container } from "@/components/ui";

export default function HeroSection() {
  const { isLoaded } = useUI();
  const pathname = usePathname();

  // Simple smooth scroll handler for Hero buttons
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <section id="home" className="relative text-center flex-1 flex flex-col justify-center items-center overflow-hidden isolate pt-24 pb-8 md:pt-40 md:pb-24 scroll-mt-20">
      {/* Background moved to layout.tsx */}

      <Container size="md" className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-2 mb-4"
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
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-8xl font-black text-brand-base relative z-10 leading-[1.1] tracking-tighter"
        >
          Hi, I’m <span className="text-brand-accent">Gemintang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg sm:text-2xl text-brand-primary font-light tracking-[0.2em] uppercase"
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base md:text-lg text-brand-accent max-w-2xl mx-auto leading-relaxed px-2 font-light"
        >
          A versatile developer with solid fundamentals in frontend, backend, and
          mobile. <br className="hidden md:block" />
          Quickly adapts to new technologies and delivers scalable, user-friendly
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <Stack
            direction={{ sm: "row" }}
            spacing="gap-4"
            align="center"
            justify="center"
            className="mt-8 sm:mt-12 w-full max-w-sm mx-auto sm:max-w-none"
          >
            <Link
              href={pathname === '/' ? '#projects' : '/#projects'}
              onClick={(e) => handleScroll(e, "projects")}
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full">
                View My Work
              </Button>
            </Link>
            <Link
              href={pathname === '/' ? '#contact' : '/#contact'}
              onClick={(e) => handleScroll(e, "contact")}
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full">
                Contact
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Container>
    </section>
  );
}
