export interface IBlog {
  title: string;
  content: string;
  author: string;
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
