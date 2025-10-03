
import ProjectDetails from "@/components/modules/project/ProjectDetails";
import getSingleProject from "@/services/postServices/getSingleProject";
import { IProject } from "@/types/project.type";

export default async function ViewProject({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const res = await getSingleProject(Number(id));
   const project:IProject = res.data;
  return (
    <div>
      <ProjectDetails project={project}></ProjectDetails>
    </div>
  );
}