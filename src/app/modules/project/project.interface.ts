export interface IProject {
  title: string;
  description: string;
  liveLinks: string;
  clientRepo: string;
  serverRepo?: string;
  frontendTechnologies: string[];
  backendTechnologies: string[];
  image: string;
  duration?: string; // project duration
  teamMembers?: string[];
  demoVideo?: string;
  status?: "completed" | "in-progress" | "planned";
  featured: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
