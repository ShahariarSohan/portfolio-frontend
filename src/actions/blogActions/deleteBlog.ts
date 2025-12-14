"use server"

import { revalidateTag } from "next/cache";

const deleteBlog = async(id:number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
        method:"DELETE"
    });
     const result = await res.json();
      if (result?.success) {
        revalidateTag("BLOGS","default");
      }
      return result;
};

export default deleteBlog;