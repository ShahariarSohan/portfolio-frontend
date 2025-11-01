export interface IProject {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  frontendRepo: string;
  frontendLive: string;
  backendRepo: string;
  backendLive: string;
  caseStudy: string;
  liveLink: string;
  features: string[];
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
}
