import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    logo: z.string({ required_error: "Logo is required!" }),
    skillName: z.string({ required_error: "Skill Name is required!" }),
    description: z.string({ required_error: "Description is required!" }),
    category: z.string().optional(),
  }),
});
const updateSkillValidationSchema = z.object({
  body: z.object({
    logo: z.string().optional(),
    skillName: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
  }),
});
export const SkillValidations = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
