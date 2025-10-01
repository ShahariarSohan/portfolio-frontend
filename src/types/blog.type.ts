export interface IBlog {
  id?: number;
  title: string;
  content: string;
  thumbnail: string;
  description: string;
  tags: string[];
  createdAt?: number;
  updatedAt?: number;
}
