import { getAllProjects } from "@/services/postServices/getAllProjects";
import ProjectCard from "./ProjectCard";
import { IProject } from "@/types/project.type";

export default async function ProjectsSection() {
  const res = await getAllProjects({
    cache: "no-store",
    next: { tags: ["PROJECTS"] },
  });
  const projects = res.data;

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of my recent work showcasing web applications, tools,
            and solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid or Empty State */}
        {!projects || projects.length === 0 ? (
          <div className="min-h-[300px] flex flex-col items-center justify-center">
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">
                No Projects Yet
              </h3>
              <p className="text-muted-foreground">
                Check back soon for exciting projects
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: IProject) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
