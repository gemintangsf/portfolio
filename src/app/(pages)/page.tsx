import {
  HeroSection,
  TechStack,
  ServicesSection,
  ProjectsSection,
  AboutSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";


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
