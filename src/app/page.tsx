import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

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
