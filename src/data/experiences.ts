import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack & Mobile Developer",
    company: "PT Javabooks Indonesia",
    location: "Jakarta, Indonesia",
    period: "Current",
    description: "Developing retail POS systems, mobile apps, and AI-powered search platforms.",
    bullets: [
      "Leading technical development of comprehensive retail Point of Sale (POS) systems managing complex inventory pipelines.",
      "Maintaining client-facing mobile applications using Flutter with high uptime and optimized performance.",
      "Integrating AI-powered search and recommendations into retail databases."
    ],
    skills: ["Flutter", "Python", "MySQL", "OpenSearch", "REST API", "OpenCart"]
  },
  {
    id: 2,
    role: "Software Engineer (Enterprise Systems)",
    company: "Telkom Indonesia",
    location: "Jakarta, Indonesia",
    period: "Previous",
    description: "Built scalable enterprise backend services and document management systems.",
    bullets: [
      "Worked on internal system NADIA for managing NTE assets, refactored using NestJS and Next.js.",
      "Developed and migrated Master Data Management & Order Management systems.",
      "Built landing pages with CRUD operations and structured file storage using MinIO."
    ],
    skills: ["NestJS", "Next.js", "PostgreSQL", "Apache Airflow", "MinIO", "Zend Framework"]
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "PABOI (Indonesia Orthopedic Association)",
    location: "Bandung, Indonesia",
    period: "4-Month Internship",
    description: "Contributed to both backend and frontend development of the PABOI web application.",
    bullets: [
      "Fixed backend and frontend bugs to improve stable production releases.",
      "Shipped custom features under the guidance of QA and product owners."
    ],
    skills: ["ReactJS", "Ruby on Rails", "MySQL"]
  }
];
