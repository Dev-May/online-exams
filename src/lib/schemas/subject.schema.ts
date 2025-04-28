import { z } from "zod";

export const AddSubjectSchema = z.object({
  icon: z.string(),
  name: z.string(),
});
export type AddSubjectFields = z.infer<typeof AddSubjectSchema>;
