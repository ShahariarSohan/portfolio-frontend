
"use server"

import { UpdateBlogSchema } from "@/types/blog.schema";

import { revalidateTag } from "next/cache";




const editBlog = async (blog: UpdateBlogSchema,id:number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  const result = await res.json();
  if (result?.success) {
    revalidateTag("BLOGS");
  }
  return result;
};

export default editBlog;