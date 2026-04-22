import Navbar from "@/components/Navbar";
import { About } from "@/components/home/AboutSection";
import Contactsection from "@/components/home/Contactsection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import { Hero } from "@/components/home/hero";
import Toggle from "@/features/theme-toggle";


export default function Home() {
  return (
     <main>

      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Contactsection />  
    
    </main>
  );
}
