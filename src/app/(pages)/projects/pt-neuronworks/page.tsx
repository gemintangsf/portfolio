import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectLayout } from "@/components/layouts";
import { CaseStudy } from "@/components/layouts/ProjectLayout";

export const metadata: Metadata = {
  title: "Enterprise Scale Services | PT. Jagoo IT / Neuronworks | Gemintang Sangkaji Furqon",
  description: "Scaling operations for Telkom Indonesia. Standardizing returned assets, migrating legacy management frameworks, and securing file platforms at Neuronworks.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/projects/pt-neuronworks",
  },
};

const nadia = projects.find((p) => p.id === 6)!;
const pefita = projects.find((p) => p.id === 7)!;
const scone = projects.find((p) => p.id === 8)!;
const dms = projects.find((p) => p.id === 9)!;
const ppt = projects.find((p) => p.id === 10)!;

const neuronworksCaseStudies: CaseStudy[] = [
  {
    id: "nadia",
    title: nadia.title,
    description: nadia.description,
    challenge: nadia.challenge || "",
    solution: nadia.solution || "",
    impact: nadia.impact ? nadia.impact.join("\n\n") : "",
    stack: nadia.stack,
    evidence: nadia.evidence || [],
    linkType: "lock",
    linkText: "Telkom Indonesia Project",
  },
  {
    id: "scone",
    title: scone.title,
    description: scone.description,
    challenge: scone.challenge || "",
    solution: scone.solution || "",
    impact: scone.impact ? scone.impact.join("\n\n") : "",
    stack: scone.stack,
    evidence: scone.evidence || [],
    linkType: "lock",
    linkText: "Telkom Indonesia Project",
  },
  {
    id: "dms",
    title: dms.title,
    description: dms.description,
    challenge: dms.challenge || "",
    solution: dms.solution || "",
    impact: dms.impact ? dms.impact.join("\n\n") : "",
    stack: dms.stack,
    evidence: dms.evidence || [],
    linkType: "lock",
    linkText: "Telkom Indonesia Project",
  },
  {
    id: "pefita",
    title: pefita.title,
    description: pefita.description,
    challenge: pefita.challenge || "",
    solution: pefita.solution || "",
    impact: pefita.impact ? pefita.impact.join("\n\n") : "",
    stack: pefita.stack,
    evidence: pefita.evidence || [],
    linkType: "lock",
    linkText: "Telkom Indonesia Project",
  },
  {
    id: "ppt",
    title: ppt.title,
    description: ppt.description,
    challenge: ppt.challenge || "",
    solution: ppt.solution || "",
    impact: ppt.impact ? ppt.impact.join("\n\n") : "",
    stack: ppt.stack,
    evidence: ppt.evidence || [],
    linkType: "lock",
    linkText: "Telkom Indonesia Project",
  }
];

export default function NeuronworksPage() {
  return (
    <ProjectLayout
      company="Work Experience — PT. Jagoo IT (Outsourced to Neuronworks Indonesia)"
      title="Enterprise Applications"
      description="Helping Telkom Indonesia fix and maintain their big web applications. I updated old backend systems, fixed file upload security, and cleaned up legacy code."
      dateBadge="FEB 2024 - FEB 2025"
      roleBadge="FULLSTACK DEVELOPER"
      caseStudies={neuronworksCaseStudies}
      problemLabel="The Challenge"
      solutionLabel="What I Did"
      impactLabel="The Result"
    />
  );
}
