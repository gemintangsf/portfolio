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
      <HeroSection />
      <div>
        <TechStack />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
}
