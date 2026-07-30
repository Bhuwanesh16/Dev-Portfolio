import { BackgroundEffects } from "@/components/background/background-effects";
import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { GitHubSection } from "@/components/sections/github-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { AIAssistant } from "@/components/ai/ai-assistant";
import { DeveloperTerminal } from "@/components/terminal/developer-terminal";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
      <AIAssistant />
      <DeveloperTerminal />
    </main>
  );
}
