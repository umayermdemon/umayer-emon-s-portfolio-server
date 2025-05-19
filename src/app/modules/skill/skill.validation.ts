import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    logo: z.string({ required_error: "Logo is required!" }),
    skillName: z.string({ required_error: "Skill Name is required!" }),
  }),
});

export const SkillValidations = {
  createSkillValidationSchema,
};
