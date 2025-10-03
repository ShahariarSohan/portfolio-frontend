"use server"

import { revalidateTag } from "next/cache";

const deleteProject = async(id:number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
        method:"DELETE"
    });
     const result = await res.json();
      if (result?.success) {
        revalidateTag("PROJECTS");
      }
      return result;
};

export default deleteProject;