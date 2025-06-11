export interface IBlog {
  title: string;
  slug: string;
  content: string;
  summary?: string; // Short description or excerpt
  coverImage: string;
  author: string;
  authorAvatar?: string;
  tags?: string[];
  category?: string;
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
