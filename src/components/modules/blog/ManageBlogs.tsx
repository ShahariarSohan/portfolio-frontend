"use client";

import ManageBlogCard from "@/components/modules/blog/ManageBlogCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getAllBlogs } from "@/services/blogServices/getAllBlogs";
import { IBlog } from "@/types/blog.type";

// Demo Blogs
 const res = await getAllBlogs({cache:"no-store", next: { tags: ["BLOGS"] } })
  const blogs = res.data;

export default function ManageBlogs() {
  const [blogList, setBlogList] = useState(blogs);

  const handleView = (id: number) => {
    console.log("View blog", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit blog", id);
  };

  const handleDelete = (id: number) => {
    setBlogList(blogList.filter((blog:IBlog) => blog.id !== id));
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
          <Link href={`/dashboard/manage-blogs/create`}>
            <Plus size={16} /> Create Blog
          </Link>
        </Button>
      </div>

      {/* Blog Cards List */}
      <div className="flex flex-col gap-2">
        {blogList.map((blog:IBlog) => (
          <ManageBlogCard
            key={blog.id}
            id={blog.id!}
            title={blog.title}
            thumbnail={blog.thumbnail}
            createdAt={blog.createdAt!}
            updatedAt={blog.updatedAt!}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
