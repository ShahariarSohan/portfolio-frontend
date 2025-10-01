import { z } from "zod";

export const BlogSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title cannot exceed 100 characters."),
  content: z
    .string()
    .min(10, "Content must be at least 10 characters.")
    .max(5000, "Content too long."),
  thumbnail: z
    .string()
    .url("Thumbnail must be a valid URL.")
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(250, "Description too long."),
  tags: z
    .array(z.string().min(1, "Tag cannot be empty"))
    .nonempty("At least one tag is required."),
});

export type BlogSchemaType = z.infer<typeof BlogSchema>;
