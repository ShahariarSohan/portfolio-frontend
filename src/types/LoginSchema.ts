
import { z } from "zod";
export const LoginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z
    .string({ error: " Password must be string" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[A-Z].*/, {
      message: `Password must be at least 1 uppercase letter`,
    })
    .regex(/.*\d.*/, { message: `Password must be at least 1 number` })
    .regex(/[!@#$%^&*?]/, {
      message: `Password must be at least 1 special character`,
    }),
});


export type LoginSchemaType = z.infer<typeof LoginSchema>;