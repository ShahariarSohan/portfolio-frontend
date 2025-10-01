import EditBlogForm from "@/components/modules/blog/EditBlogForm";

export default function EditBlog() {
  const initialBlogData = {
    id: 1,
    title: "Building a Portfolio with Next.js",
    content:
      "This is the full content of the blog post explaining how to build a portfolio with Next.js...",
    thumbnail: "https://example.com/images/portfolio-thumbnail.jpg",
    description: "A short description of building a Next.js portfolio.",
    tags: ["nextjs", "react", "prisma"],
  };

  return (
    <div>
      <EditBlogForm initialData={initialBlogData}></EditBlogForm>
    </div>
  );
}