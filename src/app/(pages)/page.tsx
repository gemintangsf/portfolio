import dynamic from "next/dynamic";
import { LandingHero } from "@/components/sections";

const ProjectsPreviewSection = dynamic(() => import("@/components/sections/ProjectsPreviewSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));


export default function Home() {
  return (
    <main className="flex flex-col">
      <LandingHero />
      <div>
        <ProjectsPreviewSection />
        <ContactSection />
      </div>
    </main>
  );
}
