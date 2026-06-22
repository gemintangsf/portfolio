import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectLayout } from "@/components/layouts";
import { CaseStudy } from "@/components/layouts/ProjectLayout";

export const metadata: Metadata = {
  title: "Side Projects | Gemintang Sangkaji Furqon | Software Engineer",
  description: "Early software engineering projects focusing on donation management, inventory auditing systems, and learning team coordination paradigms.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/projects/side-projects",
  },
};

const jtk = projects.find((p) => p.id === 12)!;
const sinbadaProject = projects.find((p) => p.id === 13)!;
const siinventProject = projects.find((p) => p.id === 14)!;

const sideProjectsList: CaseStudy[] = [
  {
    id: "jtk-berbagi",
    title: jtk.title,
    description: jtk.description,
    challenge: jtk.challenge || "",
    solution: jtk.solution || "",
    impact: jtk.impact ? jtk.impact.join("\n\n") : "",
    stack: jtk.stack,
    evidence: jtk.evidence || [],
    linkType: "github",
    linkUrl: jtk.link,
    linkText: "Repository",
    period: "Feb 2023 - Nov 2023",
  },
  {
    id: "sinbada",
    title: sinbadaProject.title,
    description: sinbadaProject.description,
    challenge: sinbadaProject.challenge || "",
    solution: sinbadaProject.solution || "",
    impact: sinbadaProject.impact ? sinbadaProject.impact.join("\n\n") : "",
    stack: sinbadaProject.stack,
    evidence: sinbadaProject.evidence || [],
    linkType: "github",
    linkUrl: sinbadaProject.link,
    linkText: "Repository",
    period: "Nov 2022 - Jan 2023",
  },
  {
    id: "siinvent",
    title: siinventProject.title,
    description: siinventProject.description,
    challenge: siinventProject.challenge || "",
    solution: siinventProject.solution || "",
    impact: siinventProject.impact ? siinventProject.impact.join("\n\n") : "",
    stack: siinventProject.stack,
    evidence: siinventProject.evidence || [],
    linkType: "github",
    linkUrl: siinventProject.link,
    linkText: "Repository",
    period: "Nov 2021 - Dec 2021",
  }
];

export default function SideProjectsPage() {
  return (
    <ProjectLayout
      company="College & Freelance"
      title="Side Projects"
      description="A collection of my coding projects during college. This includes my final year project, a donation platform like Kitabisa.com. And inventory monitoring systems built for regional offices."
      roleBadge="Backend Developer"
      caseStudies={sideProjectsList}
      problemLabel="The Problem"
      solutionLabel="The Solution"
      impactLabel="Result"
    />
  );
}
