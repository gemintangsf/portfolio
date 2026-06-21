import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectLayout } from "@/components/layouts";
import { CaseStudy } from "@/components/layouts/ProjectLayout";

export const metadata: Metadata = {
  title: "PT. Bejana Investidata Globalindo | Gemintang Sangkaji Furqon | Software Engineer",
  description: "First professional experience scaling membership portals and learning key teamwork methodologies in fullstack workflows at PT. Bejana Investidata Globalindo.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/projects/pt-bejana",
  },
};

const bejanaCaseStudies: CaseStudy[] = projects
  .filter((p) => p.id === 11)
  .map((p) => ({
    id: "paboi",
    title: p.title,
    description: p.description,
    challenge: p.challenge || "",
    solution: p.solution || "",
    impact: p.impact ? p.impact.join("\n\n") : "",
    stack: p.stack,
    evidence: p.evidence || [],
    linkType: "visit",
    linkUrl: p.link,
    linkText: "Visit Website",
    period: "Jun 2022 - Oct 2022",
  }));

export default function BejanaPage() {
  return (
    <ProjectLayout
      company="Work Experience — PT. Bejana Investidata Globalindo"
      title="Professional Foundations"
      description="First professional experience, scaling membership portals and learning key teamwork methodologies in fullstack workflows."
      dateBadge="JUNE 2022 - OCT 2022"
      roleBadge="FULLSTACK DEVELOPER INTERN"
      caseStudies={bejanaCaseStudies}
      problemLabel="The Business Problem"
      solutionLabel="The Engineering Action"
      impactLabel="Outcome & Learnings"
    />
  );
}
