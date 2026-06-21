export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  isPrivate: boolean;
  challenge?: string;
  solution?: string;
  evidence?: string[];
  impact?: string[];
  playStore?: string;
  appStore?: string;
  forceDesktopStyle?: boolean;
}
