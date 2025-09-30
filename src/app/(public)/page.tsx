import AboutMe from "@/components/modules/home/AboutMe";
import { Hero } from "@/components/modules/home/Hero";
import TechStack from "@/components/modules/home/TechStack";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TechStack></TechStack>
    </div>
  );
}
