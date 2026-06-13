import dynamic from "next/dynamic";
import { HeroSection, TechStack } from "@/components/sections";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));


export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="min-h-[100dvh] flex flex-col justify-between relative z-10">
        <HeroSection />
        <TechStack />
      </div>
      <div>
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
}
