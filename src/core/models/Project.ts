export interface Project {
  image: string;
  project_name: string;
  description: string;
  stack: Stack[];
}

export interface Stack {
  tech: string;
  image: string;
}
