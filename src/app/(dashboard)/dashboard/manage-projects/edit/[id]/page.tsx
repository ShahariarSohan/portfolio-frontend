
import EditProjectForm from "@/components/modules/project/EditProjectForm";
import getSingleProject from "@/services/postServices/getSingleProject";
import { IProject } from "@/types/project.type";


export default async function EditBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const intId = Number(id);
  const res = await getSingleProject(intId);
  const initialProjectData: IProject = res.data;

  return (
    <div>
      <EditProjectForm initialData={initialProjectData} id={intId}></EditProjectForm>
    </div>
  );
}





