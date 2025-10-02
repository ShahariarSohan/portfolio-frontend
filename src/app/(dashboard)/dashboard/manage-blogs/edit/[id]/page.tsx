import EditBlogForm from "@/components/modules/blog/EditBlogForm";
import getSingleBlog from "@/services/blogServices/getSingleBlog";
import { IBlog } from "@/types/blog.type";

export default async function EditBlog({params}:{params:Promise<{id:string}>}) {
  const { id } = await params;
    const intId = Number(id);
    const res = await getSingleBlog(intId);
    const initialBlogData: IBlog = res.data;
 

  return (
    <div>
      <EditBlogForm initialData={initialBlogData} id={intId}></EditBlogForm>
    </div>
  );
}