import Image from "next/image";
import { notFound } from "next/navigation";

const demoBlogs = [
  {
    id: 1,
    title: "Mastering Prisma with PostgreSQL",
    thumbnail: "/images/sohan.jpg",
    content: `
      Prisma is an advanced ORM that simplifies database access in Node.js and TypeScript environments.
      It provides a clean schema-driven workflow that ensures type safety, migration control, and maintainable data access.

      In this article, we’ll explore how to integrate Prisma with PostgreSQL, structure your database models, 
      and handle production-level concerns such as connection pooling, performance tuning, and transaction management.

      Whether you're building a REST or GraphQL API, Prisma allows backend developers to scale codebases efficiently while keeping queries elegant and consistent.
    `,
    tags: ["Prisma", "PostgreSQL", "Backend"],
    views: 312,
    createdAt: "2025-09-25",
  },
];

export default async function BlogDetails({ id }: { id: string }) {
  const blog = demoBlogs.find((b) => b.id === Number(id));
  if (!blog) return notFound();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
          {blog.title}
        </h1>

        {/* Thumbnail */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed text-lg text-muted-foreground whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </section>
  );
}
