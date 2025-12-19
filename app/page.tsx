import AboutSection from "@/components/section/about-section";
import { Connect01 } from "@/components/section/connect-section";
import HeroSection from "@/components/section/hero-section";
import ProjectsSection from "@/components/section/project-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Connect01 />
    </main>
  );
}
