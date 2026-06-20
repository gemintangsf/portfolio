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
    subtitle: jtk.subtitle || "",
    description: jtk.description,
    challenge: jtk.challenge || "",
    solution: jtk.solution || "",
    impact: jtk.impact ? jtk.impact.join("\n\n") : "",
    stack: jtk.stack,
    evidence: jtk.evidence || [],
    linkType: "github",
    linkUrl: jtk.link,
    linkText: "Repository",
  },
  {
    id: "sinbada",
    title: sinbadaProject.title,
    subtitle: sinbadaProject.subtitle || "",
    description: sinbadaProject.description,
    challenge: sinbadaProject.challenge || "",
    solution: sinbadaProject.solution || "",
    impact: sinbadaProject.impact ? sinbadaProject.impact.join("\n\n") : "",
    stack: sinbadaProject.stack,
    evidence: sinbadaProject.evidence || [],
    linkType: "github",
    linkUrl: sinbadaProject.link,
    linkText: "Repository",
  },
  {
    id: "siinvent",
    title: siinventProject.title,
    subtitle: siinventProject.subtitle || "",
    description: siinventProject.description,
    challenge: siinventProject.challenge || "",
    solution: siinventProject.solution || "",
    impact: siinventProject.impact ? siinventProject.impact.join("\n\n") : "",
    stack: siinventProject.stack,
    evidence: siinventProject.evidence || [],
    linkType: "github",
    linkUrl: siinventProject.link,
    linkText: "Repository",
  }
];

export default function SideProjectsPage() {
  return (
    <ProjectLayout
      company="Academic & Community Experiments"
      title="Side Projects"
      description="Early software engineering projects focusing on donation management, inventory auditing systems, and learning team coordination paradigms."
      roleBadge="ACADEMIC & OPEN SOURCE"
      caseStudies={sideProjectsList}
      problemLabel="The Business Problem"
      solutionLabel="The Solution"
      impactLabel="Outcome"
    />
  );
}
