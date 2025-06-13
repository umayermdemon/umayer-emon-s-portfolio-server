import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";
import { BlogCategories } from "./blog.constant";

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: BlogCategories,
    },
    authorAvatar: { type: String },
    published: { type: Boolean, required: true, default: false },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<IBlog>("Blog", blogSchema);
