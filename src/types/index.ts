export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  isPrivate: boolean;
  challenge?: string;
  solution?: string;
  features?: string[];
  evidence?: string[];
  responsibilities?: string[];
  impact?: string[];
  tags?: string[];
  playStore?: string;
  appStore?: string;
  forceDesktopStyle?: boolean;
  technicalOptimizations?: {
    title: string;
    description: string;
  }[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets?: string[];
  skills?: string[];
}
