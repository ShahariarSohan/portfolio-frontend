
"use server"


import { ProjectSchemaType } from "@/types/project.schema";
import { revalidateTag } from "next/cache";




const addProject =async (project:ProjectSchemaType) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method:"POST",
        headers: {
           "Content-Type":"application/json"
        },
        body:JSON.stringify(project)
    });
    const result = await res.json();
    if (result?.success) {
      revalidateTag("PROJECTS");
    }
    return result;
};

export default addProject;