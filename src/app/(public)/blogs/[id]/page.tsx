import BlogDetails from "@/components/modules/blog/BlogDetails";
import getSingleBlog from "@/services/blogServices/getSingleBlog";
import { IBlog } from "@/types/blog.type";

export default async function DynamicBlog({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const res = await getSingleBlog(Number(id));
   const blog: IBlog = res.data;
  return (
    <div>
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
}