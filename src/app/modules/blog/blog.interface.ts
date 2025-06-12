export interface IBlog {
  title: string;
  content: string;
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
