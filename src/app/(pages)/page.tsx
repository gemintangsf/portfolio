import dynamic from "next/dynamic";
import { HeroSection, TechStack } from "@/components/sections";

const ProjectsPreviewSection = dynamic(() => import("@/components/sections/ProjectsPreviewSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));


export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between items-center relative z-10 w-full">
        <HeroSection />
        <TechStack />
      </div>
      <div>
        <ProjectsPreviewSection />
        <ContactSection />
      </div>
    </main>
  );
}
