import { z } from "zod";

// Create ProjectSchema for validation
export const ProjectSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title cannot exceed 100 characters."),
  thumbnail: z
    .string()
    .url("Thumbnail must be a valid URL.")
    .optional()
    .or(z.literal("")), // allow empty string
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(500, "Description too long."),
  githubLink: z
    .string()
    .url("GitHub link must be a valid URL.")
    .optional()
    .or(z.literal("")),
  liveLink: z
    .string()
    .url("Live link must be a valid URL.")
    .optional()
    .or(z.literal("")),
  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .nonempty("At least one feature is required."),
  tags: z
    .array(z.string().min(1, "Tag cannot be empty"))
    .nonempty("At least one tag is required."),
});

// Type for add project
export type ProjectSchemaType = z.infer<typeof ProjectSchema>;

// Schema for update project (all fields optional, at least one required)
export const UpdateProjectSchema = ProjectSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  {
    message: "At least one field must be updated",
  }
);

export type UpdateProjectSchemaType = z.infer<typeof UpdateProjectSchema>;
