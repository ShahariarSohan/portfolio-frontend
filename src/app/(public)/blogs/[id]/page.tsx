import BlogDetails from "@/components/modules/blog/BlogDetails";

export default async function DynamicBlog({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  return (
    <div>
      <BlogDetails id={id}></BlogDetails>
    </div>
  );
}