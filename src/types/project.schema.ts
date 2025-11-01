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
    .min(10, "Description must be at least 10 characters."),

  // Frontend
  frontendRepo: z
    .string()
    .url("Frontend repo must be a valid URL.")
    .optional()
    .or(z.literal("")),
  frontendLive: z
    .string()
    .url("Frontend live link must be a valid URL.")
    .optional()
    .or(z.literal("")),

  // Backend
  backendRepo: z
    .string()
    .url("Backend repo must be a valid URL.")
    .optional()
    .or(z.literal("")),
  backendLive: z
    .string()
    .url("Backend live link must be a valid URL.")
    .optional()
    .or(z.literal("")),

  // Features & tags
  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .nonempty("At least one feature is required."),
  tags: z
    .array(z.string().min(1, "Tag cannot be empty"))
    .nonempty("At least one tag is required."),

  // Case Study
  caseStudy: z
    .string()
    .min(10, "Case study must be at least 10 characters.")
    .optional()
    .or(z.literal("")),
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
