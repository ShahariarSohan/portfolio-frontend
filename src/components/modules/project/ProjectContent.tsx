import { getAllProjects } from "@/services/postServices/getAllProjects";
import ProjectCard from "./ProjectCard";
import { IProject } from "@/types/project.type";

export default async function ProjectsContent() {
  const res = await getAllProjects({
    cache: "no-store",
    next: { tags: ["PROJECTS"] },
  });

  const projects = res.data;

  // EMPTY STATE (NO LOADER HERE)
  if (!projects || projects.length === 0) {
    return (
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
    );
  }

  // DATA STATE
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: IProject) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
