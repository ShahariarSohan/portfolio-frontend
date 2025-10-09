import { getAllBlogs } from "@/services/blogServices/getAllBlogs";
import BlogCard from "./BlogCard";
import { IBlog } from "@/types/blog.type";

export default async function BlogsSection() {
  const res = await getAllBlogs({
    cache: "no-store",
    next: { tags: ["BLOGS"] },
  });
  const blogs = res.data;
  return (
    <section id="blogs" className="py-10 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Blogs
        </h2>
        {(!blogs ||blogs&&blogs.length===0) ? (
          <div className="min-h-[200px] flex justify-center">
            <h1 className="text-2xl font-semibold text-center">
              No Data Found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs?.map((blog: IBlog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
