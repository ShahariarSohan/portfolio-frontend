/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
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
import { Plus, Trash2 } from "lucide-react";
import { ProjectSchema, ProjectSchemaType } from "@/types/project.schema";
import addProject from "@/actions/projectActions/addProject";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function AddProjectForm() {
  const router = useRouter();

  const form = useForm<ProjectSchemaType>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      title: "",
      thumbnail: "",
      frontendRepo: "",
      frontendLive: "",
      backendRepo: "",
      backendLive: "",
      description: "",
      caseStudy: "",
      tags: [],
      features: [""],
    },
  });

  const [tagInput, setTagInput] = useState("");

  const { fields, append, remove } = useFieldArray<any>({
    control: form.control,
    name: "features",
  });

  const handleTagChange = (value: string) => {
    setTagInput(value);

    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    form.setValue("tags", tags);
  };

  const onSubmit = async (values: ProjectSchemaType) => {
    console.log(values);
    try {
      const res = await addProject(values);
      if (res.success) {
        toast.success("Project added successfully");
        router.push("/dashboard/manage-projects");
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-card border rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>

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
                  <Input placeholder="Enter project title" {...field} />
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

          {/* Frontend Repo */}
          <FormField
            control={form.control}
            name="frontendRepo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frontend Repo URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://github.com/username/frontend"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Frontend Live */}
          <FormField
            control={form.control}
            name="frontendLive"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frontend Live URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Backend Repo */}
          <FormField
            control={form.control}
            name="backendRepo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backend Repo URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://github.com/username/backend"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Backend Live */}
          <FormField
            control={form.control}
            name="backendLive"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backend Live URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://api.example.com" {...field} />
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
                    placeholder="Briefly describe your project..."
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Case Study */}
          <FormField
            control={form.control}
            name="caseStudy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Case Study</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write full case study..."
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Dynamic Features */}
          <div className="space-y-3">
            <FormLabel>Features</FormLabel>
            <div className="space-y-2">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name={`features.${index}`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder={`Feature ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={() => append("")}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

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
            Add Project
          </Button>
        </form>
      </Form>
    </div>
  );
}
