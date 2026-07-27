export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  year?: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}