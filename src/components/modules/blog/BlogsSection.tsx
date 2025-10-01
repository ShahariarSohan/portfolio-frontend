import BlogCard from "./BlogCard";

const demoBlogs = [
  {
    id: 1,
    title: "Mastering Prisma with PostgreSQL",
    content:"something",
    thumbnail: "/images/sohan.jpg",
    description:
      "Learn how to use Prisma ORM with PostgreSQL to build scalable, type-safe backend systems with clean schema design and migrations.",
    tags: ["Prisma", "PostgreSQL", "Backend"],
    views: 312,
    createdAt: Date.now(),
  },
  {
    id: 2,
    title: "Next.js 14 App Router Deep Dive",
    content:"Hello",
    thumbnail: "/images/sohan.jpg",
    description:
      "A complete guide to understanding Next.js App Router, Server Components, and performance optimization techniques.",
    tags: ["Next.js", "React", "Performance"],
    views: 485,
    createdAt: Date.now(),
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
