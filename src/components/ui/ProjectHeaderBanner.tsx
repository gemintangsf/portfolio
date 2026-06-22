"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Badge } from "@/components/ui";

interface ProjectHeaderBannerProps {
  company: string;
  title: string;
  description: string;
  backLink: string;
  dateBadge?: string;
  roleBadge: string;
  headerContainerVariants: any;
  headerItemVariants: any;
}

export default function ProjectHeaderBanner({
  company,
  title,
  description,
  backLink,
  dateBadge,
  roleBadge,
  headerContainerVariants,
  headerItemVariants,
}: ProjectHeaderBannerProps) {
  return (
    <div className="w-full bg-background pt-28 pb-16 px-6 md:px-[128px] 4k:px-[256px] relative z-10 overflow-hidden">
      <motion.div
        variants={headerContainerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10"
      >
        {/* Back to Journey */}
        <motion.div variants={headerItemVariants}>
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:text-brand-base mb-8 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Journey
          </Link>
        </motion.div>

        {/* Header Banner */}
        <motion.div
          variants={headerItemVariants}
          className="border-4 border-brand-base p-6 md:p-12 shadow-[8px_8px_0px_0px_var(--color-primary)] bg-brand-highlight flex flex-col gap-6"
        >
          {/* Group 1: Company & Title (Column) */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent block">
              {company}
            </span>
            <h1 className="text-2xl font-black uppercase tracking-tighter text-brand-base leading-tight">
              {title}
            </h1>
          </div>

          {/* Group 2: Description & Badges (Row) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
            <p className="text-sm text-brand-accent font-light leading-relaxed text-justify flex-1">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              {dateBadge && (
                <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px]">
                  {dateBadge}
                </Badge>
              )}
              <Badge variant="status" className="bg-background border-2 border-brand-base text-[10px] text-brand-accent">
                {roleBadge}
              </Badge>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
