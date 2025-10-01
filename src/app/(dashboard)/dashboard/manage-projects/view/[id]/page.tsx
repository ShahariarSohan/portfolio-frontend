
import ProjectDetails from "@/components/modules/project/ProjectDetails";

export default async function ViewProject({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  return (
    <div>
      <ProjectDetails id={id}></ProjectDetails>
    </div>
  );
}