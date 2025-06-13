import { BlogCategory } from "./blog.constant";

export interface IBlog {
  title: string;
  content: string;
  author: string;
  category: BlogCategory;
  authorAvatar?: string;
  published: boolean;
  views?: number;
  likes?: number;
  commentsCount?: number;
  isDeleted?: boolean;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
