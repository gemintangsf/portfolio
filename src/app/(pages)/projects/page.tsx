import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects | Gemintang Sangkaji Furqon | Software Engineer",
  description: "View the portfolio of Gemintang Sangkaji Furqon, featuring software engineering projects, mobile apps, AI search systems, and enterprise tools.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
