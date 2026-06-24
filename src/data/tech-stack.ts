import { IconType } from "react-icons";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaPalette,
  FaCheck,
  FaWrench,
  FaShoppingCart,
  FaTasks,
  FaSync,
  FaArrowDown,
  FaProjectDiagram,
  FaTerminal
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiNestjs,
  SiRubyonrails,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiMinio,
  SiDocker,
  SiGit,
  SiSonarqube,
  SiJsonwebtokens,
  SiApacheairflow,
  SiPhp,
  SiFigma,
  SiCanva,
  SiJest,
  SiJira,
  SiNotion,
  SiOracle,
  SiGraphql,
  SiNginx,
  SiUbuntu,
  SiLaravel,
  SiSpringboot,
  SiOpensearch,
  SiPostman,
  SiHtml5,
  SiGithubactions,
  SiExpress,
  SiOllama
} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface TechCategory {
  title: string;
  icon: IconType;
  sizeClass: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Frontend & Mobile",
    icon: FaLaptopCode,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-5",
    items: [
      { name: "React JS", icon: SiReact },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "HTML Jquery", icon: SiHtml5 },
      { name: "React Vite", icon: SiReact }
    ]
  },
  {
    title: "Backend",
    icon: FaServer,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-7",
    items: [
      { name: "Nest JS", icon: SiNestjs },
      { name: "Ruby on Rails", icon: SiRubyonrails },
      { name: "OpenAPI / Flask Python", icon: SiFlask },
      { name: "Zend Framework", icon: SiPhp },
      { name: "PHP Laravel", icon: SiLaravel },
      { name: "PHP OpenCart", icon: FaShoppingCart },
      { name: "Express JS", icon: SiExpress },
      { name: "Java Springboots", icon: SiSpringboot },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "Postman / Swagger", icon: SiPostman }
    ]
  },
  {
    title: "Database & Storage",
    icon: FaDatabase,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-5",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Oracle", icon: SiOracle },
      { name: "MinIO", icon: SiMinio },
      { name: "OpenSearch", icon: SiOpensearch },
      { name: "GraphQL", icon: SiGraphql }
    ]
  },
  {
    title: "Design",
    icon: FaPalette,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-3",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanva }
    ]
  },
  {
    title: "Testing",
    icon: FaCheck,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-4",
    items: [
      { name: "Jest", icon: SiJest },
      { name: "PHP Unit", icon: SiPhp },
      { name: "Flutter Testing", icon: SiFlutter }
    ]
  },
  {
    title: "Devops",
    icon: FaTools,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-4",
    items: [
      { name: "Git CI/CD", icon: SiGithubactions },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "NginX", icon: SiNginx },
      { name: "Docker", icon: SiDocker },
      { name: "Putty", icon: FaTerminal }
    ]
  },
  {
    title: "SDLC (Software Development Life Cycle)",
    icon: FaProjectDiagram,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-3",
    items: [
      { name: "Kanban", icon: FaTasks },
      { name: "Agile", icon: FaSync },
      { name: "Waterfall", icon: FaArrowDown }
    ]
  },
  {
    title: "Tools",
    icon: FaWrench,
    sizeClass: "col-span-12 md:col-span-6 lg:col-span-5",
    items: [
      { name: "SonarQube", icon: SiSonarqube },
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "Githooks", icon: SiGit },
      { name: "Microsoft Teams", icon: BsMicrosoftTeams },
      { name: "Jira", icon: SiJira },
      { name: "Notion", icon: SiNotion },
      { name: "Ollama (LLM/AI)", icon: SiOllama },
      { name: "Git", icon: SiGit }
    ]
  }
];
