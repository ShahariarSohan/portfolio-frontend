
"use server"

import { BlogSchemaType } from "@/types/blog.schema";
import { revalidateTag } from "next/cache";




const createBlog =async (blog:BlogSchemaType) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
        method:"POST",
        headers: {
           "Content-Type":"application/json"
        },
        body:JSON.stringify(blog)
    });
    const result = await res.json();
    if (result?.success) {
      revalidateTag("BLOGS");
    }
    return result;
};

export default createBlog;