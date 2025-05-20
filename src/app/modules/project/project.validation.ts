import { z } from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required!" }),
    description: z.string({ required_error: "Description is required!" }),
    liveLinks: z.string({ required_error: "Live link is required!" }),
    clientRepo: z.string({ required_error: "Client repo is required!" }),
    serverRepo: z.string().optional(),
    frontendTechnologies: z.array(
      z.string({
        required_error: "Each frontend technology must be a string!",
      }),
      { required_error: "Frontend technologies are required!" }
    ),
    backendTechnologies: z.array(
      z.string({ required_error: "Each backend technology must be a string!" }),
      { required_error: "Backend technologies are required!" }
    ),
    image: z.string({ required_error: "Image is required!" }),
    duration: z.string().optional(),
    teamMembers: z.array(z.string()).optional(),
    demoVideo: z.string().optional(),
    status: z.enum(["completed", "in-progress", "planned"]).optional(),
    featured: z.boolean().optional(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    liveLinks: z.string().optional(),
    clientRepo: z.string().optional(),
    serverRepo: z.string().optional(),
    frontendTechnologies: z.array(z.string()).optional(),
    backendTechnologies: z.array(z.string()).optional(),
    image: z.string().optional(),
    duration: z.string().optional(),
    teamMembers: z.array(z.string()).optional(),
    demoVideo: z.string().optional(),
    status: z.enum(["completed", "in-progress", "planned"]).optional(),
  }),
});

const updateProjectFeaturedValidationSchema = z.object({
  body: z.object({
    featured: z.boolean({ required_error: "Featured status is required!" }),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
  updateProjectFeaturedValidationSchema,
};
