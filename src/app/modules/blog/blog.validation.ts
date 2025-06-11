import { z } from "zod";

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required!" }),
    slug: z.string({ required_error: "Slug is required!" }),
    content: z.string({ required_error: "Content is required!" }),
    summary: z.string().optional(),
    coverImage: z.string({ required_error: "Cover image is required!" }),
    author: z.string({ required_error: "Author is required!" }),
    authorAvatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    published: z.boolean({ required_error: "Published status is required!" }),
    views: z.number().optional(),
    likes: z.number().optional(),
    commentsCount: z.number().optional(),
    featured: z.boolean({ required_error: "Featured status is required!" }),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    content: z.string().optional(),
    summary: z.string().optional(),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    authorAvatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
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
