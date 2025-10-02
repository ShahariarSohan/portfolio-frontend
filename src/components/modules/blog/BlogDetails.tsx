import { IBlog } from "@/types/blog.type";
import Image from "next/image";
import { notFound } from "next/navigation";



export default async function BlogDetails({ blog }: { blog:IBlog}) {
  
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
