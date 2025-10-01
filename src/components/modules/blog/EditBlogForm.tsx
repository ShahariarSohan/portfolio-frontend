"use client";

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
import { useState } from "react";
import { updateBlogSchema, UpdateBlogSchema } from "@/types/blog.schema";

interface EditBlogFormProps {
  initialData: UpdateBlogSchema & { id: number };
 
}

export default function EditBlogForm({
  initialData,
  
}: EditBlogFormProps) {
  const form = useForm<UpdateBlogSchema>({
    resolver: zodResolver(updateBlogSchema),
    defaultValues: {
      title: initialData.title ?? "",
      content: initialData.content ?? "",
      thumbnail: initialData.thumbnail ?? "",
      description: initialData.description ?? "",
      tags: initialData.tags ?? [],
    },
  });

  const [tagInput, setTagInput] = useState(initialData.tags?.join(", ") || "");

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    form.setValue("tags", tags);
    setTagInput(e.target.value);
  };

  const handleFormSubmit = async (values: UpdateBlogSchema) => {
    console.log("form edit blog")
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-6 max-w-2xl mx-auto"
      >
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Update title" {...field} />
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
                <Input placeholder="https://example.com/image.jpg" {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Short description of the blog"
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
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Full content of the blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags */}
        <FormItem>
          <FormLabel>Tags (comma separated)</FormLabel>
          <FormControl>
            <Input
              value={tagInput}
              onChange={handleTagChange}
              placeholder="nextjs, prisma, backend"
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <div className="pt-4">
          <Button type="submit" className="w-full">
            Update Blog
          </Button>
        </div>
      </form>
    </Form>
  );
}
