import type { Metadata } from "next";
import { JourneySection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Developer Journey | Gemintang Sangkaji Furqon | Software Engineer",
  description: "Explore the coding journey of Gemintang Sangkaji Furqon. From studying informatics at POLBAN to building enterprise microservices and optimizing retail mobile systems.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <JourneySection />;
}
