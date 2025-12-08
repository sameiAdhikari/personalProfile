import z from "zod";

const userSchema = z.object({
  userName: z.string().min(2, "Name must be at least two character"),
  userEmail: z.email("Email address is not valid"),
  message: z.string(),
});

export { userSchema };
export type UserSchemaType = z.infer<typeof userSchema>;
