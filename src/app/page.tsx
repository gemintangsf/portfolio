import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TechStack />
      {/* nanti konten lain seperti About, Projects, Skills */}
    </main>
  );
}
