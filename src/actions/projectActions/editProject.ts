
"use server"


import { UpdateProjectSchemaType } from "@/types/project.schema";
import { revalidateTag } from "next/cache";


const editProject = async (project: UpdateProjectSchemaType,id:number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  const result = await res.json();
  if (result?.success) {
    revalidateTag("PROJECTS");
  }
  return result;
};

export default editProject;