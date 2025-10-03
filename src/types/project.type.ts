export interface IProject {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  githubLink: string;
  liveLink: string;
  features: string[];
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
}
