import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Marquee } from "../components/Marquee";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection, EducationSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Home = () => {
  useReveal();

  return (
    <div className="grain min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
