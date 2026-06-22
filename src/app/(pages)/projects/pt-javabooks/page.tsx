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
    description: "Built and secured a robust, geofenced HR mobile application covering attendance, gamified leaderboards, and quizzes for retail staff.",
    stack: Array.from(new Set([...phc1.stack, ...phc2.stack])),
    evidence: [...(phc1.evidence || []), ...(phc2.evidence || [])],
    isMobileApp: true,
    playStore: phc1.playStore,
    appStore: phc1.appStore,
    period: "May 2025 - Present",
    features: [
      {
        id: "biometric-verification",
        title: "Biometric Face Verification",
        description: "On-the-fly verification system performing secure face recognition check-ins without pre-enrolled photos.",
        challenge: "Custom face validation had to run without prior photo enrollment to minimize administrative friction. Furthermore, network latency caused timeout errors during biometric match uploads from remote sites.",
        solution: "Engineered an on-the-fly verification pipeline using InsightFace (Python) on a central service. The mobile client uploads face photos dynamically, handling network latency gracefully.",
        impact: "Eliminated manual photo attendance fraud, stabilized mobile memory usage under heavy payloads, and reduced transaction retry rates.",
        stack: ["Flutter", "Python", "InsightFace", "REST API"],
        evidence: phc1.evidence || []
      },
      {
        id: "gamification-optimization",
        title: "Gamification & UI Optimizations",
        description: "Engaging quizzes and leaderboards for retail staff, optimized to run smoothly on low-end mobile devices.",
        challenge: "Rendering hundreds of leaderboard entries with images without the UI becoming unusable, and employees screenshotting and sharing quiz answers to exploit cash rewards.",
        solution: "Designed viewport-based image lazy-loading and client-side caching to maintain a 60fps leaderboard list. Hardened quiz campaigns with OS-level screenshot blocking and focus-loss tracking.",
        impact: "Prevented quiz collusions and stabilized memory usage on low-end employee devices.",
        stack: ["Flutter", "Custom Cache Manager", "Performance Optimization", "Gamification Logic"],
        evidence: phc2.evidence || []
      }
    ]
  },
  {
    id: "pos-mobile",
    title: pos.title,
    description: pos.description,
    challenge: pos.challenge || "",
    solution: pos.solution || "",
    impact: pos.impact ? pos.impact.join("\n\n") : "",
    stack: pos.stack,
    evidence: pos.evidence || [],
    isMobileApp: true,
    forceDesktopStyle: pos.forceDesktopStyle,
    linkType: "lock",
    linkText: "Periplus Project",
    period: "May 2025 - Present",
  },
  {
    id: "periplus-apps",
    title: periplus.title,
    description: periplus.description,
    challenge: periplus.challenge || "",
    solution: periplus.solution || "",
    impact: periplus.impact ? periplus.impact.join("\n\n") : "",
    stack: periplus.stack,
    evidence: periplus.evidence || [],
    isMobileApp: true,
    playStore: periplus.playStore,
    appStore: periplus.appStore,
    period: "May 2025 - Present",
  },
  {
    id: "search-opensearch",
    title: search.title,
    description: search.description,
    challenge: search.challenge || "",
    solution: search.solution || "",
    impact: search.impact ? search.impact.join("\n\n") : "",
    stack: search.stack,
    evidence: search.evidence || [],
    forceDesktopStyle: search.forceDesktopStyle,
    linkType: "visit",
    linkUrl: search.link,
    linkText: "Visit Website",
    period: "May 2025 - Present",
  }
];

export default function JavabooksPage() {
  return (
    <ProjectLayout
      company="Work Experience — PT. Javabooks Indonesia"
      title="Retail & HR Systems"
      description="Fixing everyday system issues across HR apps, POS systems, and e-commerce apps."
      dateBadge="MAY 2025 - PRESENT"
      roleBadge="FULLSTACK & MOBILE"
      caseStudies={javabooksCaseStudies}
      problemLabel="The Problem"
      solutionLabel="What I Did"
      impactLabel="The Result"
    />
  );
}
