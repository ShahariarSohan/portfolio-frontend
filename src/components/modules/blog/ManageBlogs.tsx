"use client";

import ManageBlogCard from "@/components/modules/blog/ManageBlogCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

// Demo Blogs
const blogs = [
  {
    id: 1,
    title: "Building a Portfolio with Next.js",
    thumbnail: "/images/sohan.jpg",
    createdAt: "2025-09-01T10:30:00Z",
    updatedAt: "2025-09-10T12:15:00Z",
  },
  {
    id: 2,
    title: "Understanding Prisma ORM for Backend",
    thumbnail: "/images/sohan.jpg",
    createdAt: "2025-08-15T09:00:00Z",
    updatedAt: "2025-08-20T14:45:00Z",
  },
  {
    id: 3,
    title: "MERN Stack Full Tutorial",
    thumbnail: "/images/sohan.jpg",
    createdAt: "2025-07-30T08:20:00Z",
    updatedAt: "2025-08-05T11:10:00Z",
  },
];

export default function ManageBlogs() {
  const [blogList, setBlogList] = useState(blogs);

  const handleView = (id: number) => {
    console.log("View blog", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit blog", id);
  };

  const handleDelete = (id: number) => {
    setBlogList(blogList.filter((blog) => blog.id !== id));
  };

  const handleCreate = () => {
    console.log("Create new blog");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage Blogs</h1>
        <Button
          asChild
          variant="outline"
          onClick={handleCreate}
          className="flex items-center gap-2"
        >
          <Link href={`/dashboard/manage-blogs/create/${1}`}>
            <Plus size={16} /> Create Blog
          </Link>
        </Button>
      </div>

      {/* Blog Cards List */}
      <div className="flex flex-col gap-2">
        {blogList.map((blog) => (
          <ManageBlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            thumbnail={blog.thumbnail}
            createdAt={blog.createdAt}
            updatedAt={blog.updatedAt}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
