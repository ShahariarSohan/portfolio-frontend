import AboutMe from "@/components/modules/home/AboutMe";
import { Hero } from "@/components/modules/home/Hero";
import ProjectsSection from "@/components/modules/project/ProjectsSection";

import { Experience } from "@/components/modules/home/Experience";
import TechStack from "@/components/modules/home/TechStack";



export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TechStack></TechStack>
      <Experience></Experience>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
