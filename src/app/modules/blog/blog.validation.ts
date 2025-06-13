import { z } from "zod";
import { BlogCategories } from "./blog.constant";

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required!" }),
    content: z.string({ required_error: "Content is required!" }),
    author: z.string({ required_error: "Author is required!" }),
    category: z.enum([...BlogCategories] as [string, ...string[]], {
      required_error: "Category is required!",
    }),
    authorAvatar: z.string().optional(),
    views: z.number().optional(),
    likes: z.number().optional(),
    commentsCount: z.number().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    authorAvatar: z.string().optional(),
    published: z.boolean().optional(),
    views: z.number().optional(),
    likes: z.number().optional(),
    commentsCount: z.number().optional(),
    isDeleted: z.boolean().optional(),
    featured: z.boolean().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const updateBlogFeaturedValidationSchema = z.object({
  body: z.object({
    featured: z.boolean({ required_error: "Featured status is required!" }),
  }),
});

export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
  updateBlogFeaturedValidationSchema,
};
