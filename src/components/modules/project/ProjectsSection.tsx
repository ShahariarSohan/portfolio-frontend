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
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Projects
        </h2>
        {!projects ? (
          <div className="min-h-[200px] flex justify-center">
            <h1 className="text-2xl font-semibold text-center">
              No Data Found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project: IProject) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
