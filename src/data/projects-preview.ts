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
    teaser: "Fixed search results using OpenSearch, added search suggestions, and sorted by popularity.",
    stack: ["OpenSearch", "Python", "MySQL", "OpenCart"],
    image: "/assets/web_p+/1.png",
    type: "desktop",
    link: "/projects/pt-javabooks?tab=search-opensearch",
  },
  {
    id: "mobile-1",
    title: "PeriplusApps Mobile",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Fixed checkout issues and made the app look consistent on different screen sizes.",
    stack: ["Flutter", "REST API", "Responsive UI", "State Cache"],
    image: "/assets/mobile_p+/2.jpeg",
    type: "mobile",
    link: "/projects/pt-javabooks?tab=periplus-apps",
  },
  {
    id: "mobile-2",
    title: "PHC Biometric Attendance",
    category: "PT. JAVABOOKS INDONESIA",
    teaser: "Built a check-in system using face recognition and location tracking.",
    stack: ["Flutter", "Python", "InsightFace", "MySQL"],
    image: "/assets/phc/face_recognitions/3.jpg",
    type: "mobile",
    link: "/projects/pt-javabooks?tab=phc-mobile",
  },
  {
    id: "web-2",
    title: "NADIA Asset Management",
    category: "Telkom Indonesia",
    teaser: "Updated how hardware assets are tracked using NestJS, Next.js, and Airflow.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Apache Airflow"],
    image: "/assets/nadia/1.jpg",
    type: "desktop",
    link: "/projects/pt-neuronworks?tab=nadia",
  },
  {
    id: "web-3",
    title: "Document Management System",
    category: "Telkom Indonesia",
    teaser: "Built a secure document storage system with file recovery and MinIO.",
    stack: ["MinIO", "Zend PHP", "PostgreSQL", "jQuery"],
    image: "/assets/dms/1.jpg",
    type: "desktop",
    link: "/projects/pt-neuronworks?tab=dms",
  },
  {
    id: "web-4",
    title: "JTK Berbagi Platform",
    category: "POLITEKNIK NEGERI BANDUNG",
    teaser: "Developed the backend and database for an academic crowdfunding site.",
    stack: ["Ruby on Rails", "MySQL", "ReactJS", "Waterfall SDLC"],
    image: "/assets/jtkberbagi/2.png",
    type: "desktop",
    link: "/projects/side-projects?tab=jtk-berbagi",
  },
];