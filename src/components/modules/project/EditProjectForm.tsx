"use client";

import { FieldValues, useFieldArray, useForm } from "react-hook-form";
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
import {
  UpdateProjectSchema,
  UpdateProjectSchemaType,
} from "@/types/project.schema";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import editProject from "@/actions/projectActions/editProject";
import { useRouter } from "next/navigation";
import { IProject } from "@/types/project.type";

interface EditProjectFormProps {
  initialData: IProject;
  id: number;
}

export default function EditProjectForm({
  initialData,
  id,
}: EditProjectFormProps) {
  const router = useRouter();
  const [tagInput, setTagInput] = useState(initialData.tags?.join(", ") || "");

  const form = useForm<UpdateProjectSchemaType>({
    resolver: zodResolver(UpdateProjectSchema),
    defaultValues: {
      title: initialData.title ?? "",
      thumbnail: initialData.thumbnail ?? "",
      frontendRepo: initialData.frontendRepo ?? "",
      frontendLive: initialData.frontendLive ?? "",
      backendRepo: initialData.backendRepo ?? "",
      backendLive: initialData.backendLive ?? "",
      description: initialData.description ?? "",
      caseStudy: initialData.caseStudy ?? "",
      features: initialData.features ?? [""],
      tags: initialData.tags ?? [],
    },
  });

  const { fields, append, remove } = useFieldArray<FieldValues>({
    control: form.control,
    name: "features",
  });

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    form.setValue("tags", tags);
    setTagInput(e.target.value);
  };

  const handleFormSubmit = async (values: UpdateProjectSchemaType) => {
    console.log("form edit project", values);
    try {
      const res = await editProject(values, id);
      if (res.success) {
        toast.success("Project updated successfully");
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
      <h2 className="text-2xl font-semibold mb-6">Update Project</h2>
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Short description..."
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

          {/* Submit */}
          <div className="pt-4">
            <Button type="submit" className="w-full">
              Update Project
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
