
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import ProjectsContent from "./ProjectContent";


export default async function ProjectsSection() {


  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of my recent work showcasing web applications, tools,
            and solutions built with modern technologies
          </p>
        </div>

        <Suspense fallback={<Loader />}>
          <ProjectsContent />
        </Suspense>
      </div>
    </section>
  );
}
