"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { Badge, Button } from "@/components/ui";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Search/Profile Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center mb-6"
      >
        {/* <Badge variant="status" dot>
          My Story
        </Badge> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-brand-base uppercase tracking-tighter"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-12 items-start text-lg text-brand-base leading-relaxed"
        >
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-shrink-0 mx-auto md:mx-0"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-none overflow-hidden shadow-2xl border-4 border-brand-base transition-transform duration-500">
              <Image
                src="/assets/pp.jpeg"
                alt="Gemintang Profile"
                fill
                className="object-cover scale-150 object-[center_15%]"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left font-light text-[15px] md:text-base">
            <p>
              I am <strong className="font-bold text-brand-primary">Gemintang Sangkaji Furqon</strong>, a Software Engineer specializing in backend, frontend, and mobile application development. Based in Jakarta, Indonesia, I focus on building scalable, reliable, and high-performance digital solutions that directly solve problems for enterprise and retail businesses.
            </p>
            <p>
              Currently, I serve as a <strong className="font-bold text-brand-primary">Full Stack & Mobile Developer</strong> at PT Javabooks Indonesia. In this role, I lead the technical development of comprehensive retail Point of Sale (POS) systems, maintain client-facing mobile applications, and integrate AI-powered search functionalities into retail platforms. <strong className="font-bold text-brand-primary">If your business runs on systems that can&apos;t afford downtime, that&apos;s the kind of environment I&apos;ve already been responsible for.</strong>
            </p>
            <p>
              My technical methodology is grounded in strong architectural principles, shaped by my previous enterprise-level experience at Telkom Indonesia. During my tenure, I developed production-ready backend systems, enforcing rigorous code quality and high-availability infrastructure design. <strong className="font-bold text-brand-primary">I design systems prepared to scale gracefully under data or traffic loads they weren&apos;t originally built for.</strong>
            </p>
            <p>
              My primary technology stack includes <strong className="font-bold text-brand-accent">Flutter</strong> for cross-platform mobile development, alongside <strong className="font-bold text-brand-accent">Next.js</strong> for modern web interfaces. On the backend, I architect scalable APIs utilizing <strong className="font-bold text-brand-primary">NestJS, Python, and Node.js</strong>, leveraging PostgreSQL and MySQL for structured, high-volume data management. <strong className="font-bold text-brand-accent">In practice, this means I can take a product from idea to production — mobile, web, and backend — without handing it off between teams.</strong>
            </p>
            <p>
              As a cross-platform engineer, I utilize Flutter to achieve native-level performance across iOS and Android deployments from a single codebase. I implement advanced state management patterns, optimized offline-first data caching, and secure API communication protocols to guarantee reliable mobile performance. <strong className="font-bold text-brand-accent">This ensures your users get a smooth experience with zero lag, keeping churn low and engagement high.</strong>
            </p>
            <p>
              For web system architectures, I leverage the Next.js framework to maximize technical SEO, optimize Core Web Vitals, and ensure rapid edge-network content delivery. By combining these frameworks, I ensure comprehensive end-to-end type safety, which reduces runtime errors and improves long-term application sustainability. <strong className="font-bold text-brand-primary">If that&apos;s the kind of build quality you&apos;re looking for, let&apos;s talk about your project.</strong>
            </p>

            <div className="pt-6 flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full">
                  <FiDownload className="text-xl" />
                  <span>My Resume</span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
