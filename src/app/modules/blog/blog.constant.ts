export const BlogCategories = [
  "web-development",
  "mobile-development",
  "data-science",
  "devops",
  "design",
  "lifestyle",
  "education",
  "health",
  "travel",
  "other",
] as const;

export type BlogCategory = (typeof BlogCategories)[number];
