import AboutMe from "@/components/modules/home/AboutMe";
import { Hero } from "@/components/modules/home/Hero";
import ProjectsSection from "@/components/modules/project/ProjectsSection";
import Skills from "@/components/modules/home/Skills";
import { Experience } from "@/components/modules/home/Experience";



export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
