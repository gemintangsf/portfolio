import dynamic from "next/dynamic";
import { LandingHero, TechStackSection } from "@/components/sections";

const ProjectsPreviewSection = dynamic(() => import("@/components/sections/ProjectsPreviewSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));


export default function Home() {
  return (
    <main className="flex flex-col">
      <LandingHero />
      <TechStackSection />
      <div>
        <ProjectsPreviewSection />
        <ContactSection />
      </div>
    </main>
  );
}

