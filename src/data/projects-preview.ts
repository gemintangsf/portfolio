export interface PreviewItem {
  id: string;
  title: string;
  category: string;
  teaser: string;
  stack: string[];
  image: string;
  type: "desktop" | "mobile";
  link: string;
}

export const previewItems: PreviewItem[] = [
  {
    id: "web-1",
    title: "periplus.com",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Fixed the search results using OpenSearch, added smart search suggestions, and sorted books by popularity.",
    stack: ["OpenSearch", "Python", "MySQL", "OpenCart"],
    image: "/assets/web_p+/1.png",
    type: "desktop",
    link: "/projects/pt-javabooks?tab=search-opensearch",
  },
  {
    id: "mobile-1",
    title: "PeriplusApps Mobile",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Fixed checkout bugs and made sure the app layout looks good on all kinds of phone screens.",
    stack: ["Flutter", "REST API", "Responsive UI", "State Cache"],
    image: "/assets/mobile_p+/2.jpeg",
    type: "mobile",
    link: "/projects/pt-javabooks?tab=periplus-apps",
  },
  {
    id: "mobile-2",
    title: "PHC Biometric Attendance",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Built a daily check-in feature with face recognition and GPS location tracking to prevent fake attendance.",
    stack: ["Flutter", "Python", "InsightFace", "MySQL"],
    image: "/assets/phc/face_recognitions/3.jpg",
    type: "mobile",
    link: "/projects/pt-javabooks?tab=phc-mobile",
  },
  {
    id: "web-2",
    title: "NADIA Asset Management",
    category: "Telkom Indonesia",
    teaser: "Upgraded the system to track and manage hardware assets smoothly using NestJS, Next.js, and Airflow.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Apache Airflow"],
    image: "/assets/nadia/1.jpg",
    type: "desktop",
    link: "/projects/pt-neuronworks?tab=nadia",
  },
  {
    id: "web-3",
    title: "Document Management System",
    category: "Telkom Indonesia",
    teaser: "Built a secure file storage system with automatic backup and recovery features using MinIO.",
    stack: ["MinIO", "Zend PHP", "PostgreSQL", "jQuery"],
    image: "/assets/dms/1.jpg",
    type: "desktop",
    link: "/projects/pt-neuronworks?tab=dms",
  },
  {
    id: "web-4",
    title: "JTK Berbagi Platform",
    category: "POLITEKNIK NEGERI BANDUNG",
    teaser: "Developed the backend and database architecture for a campus crowdfunding website.",
    stack: ["Ruby on Rails", "MySQL", "ReactJS", "Waterfall SDLC"],
    image: "/assets/jtkberbagi/2.png",
    type: "desktop",
    link: "/projects/side-projects?tab=jtk-berbagi",
  },
];