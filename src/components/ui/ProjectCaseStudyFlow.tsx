"use client";

import { FaExclamationTriangle, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { CaseStudy } from "@/components/layouts/ProjectLayout";

interface ProjectCaseStudyFlowProps {
  activeStudy: CaseStudy;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
}

export default function ProjectCaseStudyFlow({
  activeStudy,
  problemLabel,
  solutionLabel,
  impactLabel,
}: ProjectCaseStudyFlowProps) {
  return (
    <div className="space-y-8">
      {/* Problem Section */}
      <div className="p-5 border-2 border-brand-base bg-brand-base/5 shadow-[3px_3px_0px_0px_var(--color-primary)]">
        <div className="flex items-center gap-3 mb-3 text-brand-base">
          <span className="w-7 h-7 flex items-center justify-center border border-brand-base bg-background text-brand-base">
            <FaExclamationTriangle className="text-xs" />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-widest">
            {problemLabel}
          </h3>
        </div>
        <p className="text-sm font-light leading-relaxed text-brand-accent text-justify">
          {activeStudy.challenge}
        </p>
      </div>

      {/* Solution Section */}
      <div className="p-5 border-2 border-brand-base bg-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
        <div className="flex items-center gap-3 mb-3 text-brand-base">
          <span className="w-7 h-7 flex items-center justify-center border border-brand-base bg-brand-base text-background">
            <FaLightbulb className="text-xs" />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-widest">
            {solutionLabel}
          </h3>
        </div>
        <p className="text-sm font-light leading-relaxed text-brand-base text-justify">
          {activeStudy.solution}
        </p>
      </div>

      {/* Impact Section */}
      <div className="p-5 border-2 border-brand-base bg-brand-base text-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 flex items-center justify-center border border-background bg-background text-brand-base">
            <FaCheckCircle className="text-xs" />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-widest text-background">
            {impactLabel}
          </h3>
        </div>
        <p className="text-sm font-bold leading-relaxed text-background/90 text-justify">
          {activeStudy.impact}
        </p>
      </div>
    </div>
  );
}
