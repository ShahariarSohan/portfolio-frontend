"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { IBlog } from "@/types/blog.type";



export default function BlogCard({
  id,
  title,
  thumbnail,
  description,
  tags,
  createdAt,
}: IBlog) {
  // Slice description and add ellipsis
  const shortDescription =
    description.length > 130 ? description.slice(0, 130) + "..." : description;

  return (
    <div className="group bg-muted rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Blog Info */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground leading-snug">
          <Link
            href={`/blogs/${id}`}
            className="hover:underline hover:text-primary"
          >
            {title}
          </Link>
        </h3>

        {/* Description Preview */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {shortDescription}{" "}
          <Link
            href={`/blogs/${id}`}
            className="text-primary underline font-medium hover:opacity-80"
          >
            Read More →
          </Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-200 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2">
          <Calendar size={14} />
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
}
