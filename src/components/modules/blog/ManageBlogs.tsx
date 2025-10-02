"use client";

import ManageBlogCard from "@/components/modules/blog/ManageBlogCard";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import Link from "next/link";
import { getAllBlogs } from "@/services/blogServices/getAllBlogs";
import { IBlog } from "@/types/blog.type";
import { useEffect, useState } from "react";
import { ManageBlogSkeletonCard } from "./ManageBlogSkeletonCard";
import { toast } from "sonner";
import deleteBlog from "@/actions/blogActions/deleteBlog";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await getAllBlogs({
        cache: "no-store",
        next: { tags: ["BLOGS"] },
      });
      const blogs = res.data;
      setBlogs(blogs);
      setLoading(false);
    };
    getBlogs();
  }, []);

 const handleDelete = async (id: number) => {
     try {
       
       const res = await deleteBlog(id);
       console.log(res);
       if (res.success) {
         setBlogs(blogs.filter((blog:IBlog)=>blog.id!==id))
         toast.success("Blog Deleted");
       } else {
         if (!res.success) {
           toast.error("Something went wrong");
         }
       }
     } catch (err) {
       console.log(err);
     }
   };
  return (
    <div className="flex flex-col gap-4">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage Blogs</h1>
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href={`/dashboard/manage-blogs/create`}>
            <Plus size={16} /> Create Blog
          </Link>
        </Button>
      </div>
      <div className="mt-5">
        {loading && (
          <div className="space-y-5">
            <ManageBlogSkeletonCard />
            <ManageBlogSkeletonCard />
            <ManageBlogSkeletonCard />
          </div>
        )}
      </div>{" "}
      {blogs.length === 0&&!loading ? (
        <div>
          <h1 className="text-2xl font-semibold text-center mt-10">No Data Found</h1>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {blogs.map((blog: IBlog) => (
            <ManageBlogCard
              key={blog.id}
              id={blog.id!}
              title={blog.title}
              thumbnail={blog.thumbnail}
              createdAt={blog.createdAt!}
              updatedAt={blog.updatedAt!}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
