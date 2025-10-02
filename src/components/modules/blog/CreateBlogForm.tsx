"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BlogSchema, BlogSchemaType } from "@/types/blog.schema";
import { toast } from "sonner";
import createBlog from "@/actions/blogActions/createBlog";
import { redirect } from "next/navigation";

export function CreateBlogForm() {
  // -------------------------------
  // 🔹 Hooks & States
  // -------------------------------
  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
      description: "",
      tags: [],
    },
  });

  const [tagInput, setTagInput] = useState("");

  // -------------------------------
  // 🔹 Handlers
  // -------------------------------
  const handleTagChange = (value: string) => {
    setTagInput(value);

    // Split tags by commas, trim spaces
    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    form.setValue("tags", tags);
  };

  const onSubmit = async(values: BlogSchemaType) => {
    
    try {
      const res = await createBlog(values)
      console.log(res)
      if (res.success) {
        toast.success("Blog created successfully")
        redirect("/dashboard/manage-blogs")
      }
      else {
         if (!res.success) {
           toast.error("Blog creation failed");
         }
      }
     }
    catch (err) {
      console.log(err)
     
     
    }
  }
    return (
      <div className="max-w-3xl mx-auto p-6 bg-card border rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Create New Blog</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Thumbnail */}
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your blog..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your full blog content..."
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={() => (
                <FormItem>
                  <FormLabel>Tags (comma separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. nextjs, react, prisma"
                      value={tagInput}
                      onChange={(e) => handleTagChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full">
              Create Blog
            </Button>
          </form>
        </Form>
      </div>
    );
  
}