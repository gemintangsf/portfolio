import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectLayout } from "@/components/layouts";
import { CaseStudy } from "@/components/layouts/ProjectLayout";

export const metadata: Metadata = {
  title: "High-Performance Retail & HR | PT. Javabooks Indonesia (Periplus) | Gemintang Sangkaji Furqon",
  description: "Solving critical retail and HR bottlenecks with high-performance biometric validation and POS system over-the-air deployment at PT. Javabooks Indonesia (Periplus).",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/projects/pt-javabooks",
  },
};

const phc1 = projects.find((p) => p.id === 1)!;
const phc2 = projects.find((p) => p.id === 2)!;
const pos = projects.find((p) => p.id === 4)!;
const periplus = projects.find((p) => p.id === 3)!;
const search = projects.find((p) => p.id === 5)!;

const javabooksCaseStudies: CaseStudy[] = [
  {
    id: "phc-mobile",
    title: "PHC Mobile: HR & Gamification System",
    subtitle: phc1.subtitle || "",
    description: "Built and secured a robust, geofenced HR mobile application covering attendance, gamified leaderboards, and quizzes for retail staff.",
    challenge: phc1.challenge || "",
    solution: phc1.solution || "",
    impact: phc1.impact ? phc1.impact.join("\n\n") : "",
    stack: Array.from(new Set([...phc1.stack, ...phc2.stack])),
    evidence: [...(phc1.evidence || []), ...(phc2.evidence || [])],
    isMobileApp: true,
    linkType: "lock",
    linkText: "Proprietary Enterprise System",
  },
  {
    id: "pos-mobile",
    title: pos.title,
    subtitle: pos.subtitle || "",
    description: pos.description,
    challenge: pos.challenge || "",
    solution: pos.solution || "",
    impact: pos.impact ? pos.impact.join("\n\n") : "",
    stack: pos.stack,
    evidence: pos.evidence || [],
    isMobileApp: true,
    forceDesktopStyle: pos.forceDesktopStyle,
    linkType: "lock",
    linkText: "Proprietary Enterprise System",
  },
  {
    id: "periplus-apps",
    title: periplus.title,
    subtitle: periplus.subtitle || "",
    description: periplus.description,
    challenge: periplus.challenge || "",
    solution: periplus.solution || "",
    impact: periplus.impact ? periplus.impact.join("\n\n") : "",
    stack: periplus.stack,
    evidence: periplus.evidence || [],
    isMobileApp: true,
    linkType: "lock",
    linkText: "Proprietary Enterprise System",
  },
  {
    id: "search-opensearch",
    title: search.title,
    subtitle: search.subtitle || "",
    description: search.description,
    challenge: search.challenge || "",
    solution: search.solution || "",
    impact: search.impact ? search.impact.join("\n\n") : "",
    stack: search.stack,
    evidence: search.evidence || [],
    forceDesktopStyle: search.forceDesktopStyle,
    linkType: "lock",
    linkText: "Proprietary Enterprise System",
  }
];

export default function JavabooksPage() {
  return (
    <ProjectLayout
      company="Case Study — PT. Javabooks Indonesia (Periplus)"
      title="High-Performance Retail & HR"
      description="Solving critical business bottlenecks: from eliminating attendance fraud with zero-friction biometric pipelines to stopping POS travel maintenance costs."
      dateBadge="MAY 2025 - PRESENT"
      roleBadge="FULLSTACK & MOBILE"
      caseStudies={javabooksCaseStudies}
      problemLabel="The Business Problem & Constraints"
      solutionLabel="The Engineering Workaround"
      impactLabel="Measurable Client Impact"
    />
  );
}
