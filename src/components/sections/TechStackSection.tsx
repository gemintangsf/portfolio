"use client";

import { motion } from "framer-motion";
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
  FaProjectDiagram
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
import { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
}

interface TechCategory {
  title: string;
  icon: IconType;
  sizeClass: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend & Mobile",
    icon: FaLaptopCode,
    sizeClass: "col-span-12 lg:col-span-5",
    items: [
      { name: "React JS", icon: SiReact },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "HTML Jquery", icon: SiHtml5 },
      { name: "React Vite", icon: SiReact }
    ]
  },
  {
    title: "SDLC (Software Development Life Cycle)",
    icon: FaProjectDiagram,
    sizeClass: "col-span-12 lg:col-span-4",
    items: [
      { name: "Kanban", icon: FaTasks },
      { name: "Agile", icon: FaSync },
      { name: "Waterfall", icon: FaArrowDown }
    ]
  },
  {
    title: "Design",
    icon: FaPalette,
    sizeClass: "col-span-12 lg:col-span-3",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanva }
    ]
  },
  {
    title: "Backend",
    icon: FaServer,
    sizeClass: "col-span-12 lg:col-span-7",
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
    title: "Testing",
    icon: FaCheck,
    sizeClass: "col-span-12 lg:col-span-5",
    items: [
      { name: "Jest", icon: SiJest },
      { name: "PHP Unit", icon: SiPhp },
      { name: "Flutter Testing", icon: SiFlutter }
    ]
  },
  {
    title: "Database & Storage",
    icon: FaDatabase,
    sizeClass: "col-span-12 lg:col-span-5",
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
    title: "Devops",
    icon: FaTools,
    sizeClass: "col-span-12 lg:col-span-3",
    items: [
      { name: "Git CI/CD", icon: SiGithubactions },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "NginX", icon: SiNginx },
      { name: "Docker", icon: SiDocker }
    ]
  },
  {
    title: "Tools",
    icon: FaWrench,
    sizeClass: "col-span-12 lg:col-span-4",
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

export default function TechStackSection() {
  return (
    <section
      className="relative text-center w-full px-6 pt-16 pb-12 md:px-[128px] md:pt-[var(--section-pt)] md:pb-[64px] 4k:px-[256px] bg-background-alt overflow-x-hidden"
    >
      {/* Slanted Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0" style={{ height: "var(--divider-height)", minHeight: "var(--divider-min-height)" }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[var(--background)]">
          <polygon points="0,0 100,0 0,100" />
        </svg>
      </div>
      <motion.div
        id="tech-stack"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col justify-center items-center relative z-10 scroll-mt-24"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full">
            {/* Title + Subtitle group */}
            <div className="flex flex-col gap-2 md:gap-3 text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-xl lg:text-xl laptop-l:text-2xl 4k:text-2xl font-black text-brand-base uppercase tracking-tighter leading-tight">
                WHAT I <span className="text-brand-accent">USE</span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-6 w-full px-4 md:px-0">
              {techCategories.map((category, catIdx) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={catIdx}
                    className={`${category.sizeClass} group relative rounded-none border-2 border-brand-base bg-card-bg p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[8px_8px_0px_0px_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left`}
                  >
                    {/* Top Header */}
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm md:text-xs lg:text-sm laptop-l:text-base 4k:text-base font-black text-brand-base uppercase tracking-wider">
                            {category.title}
                          </h3>
                        </div>
                        <CategoryIcon className="w-6 h-6 md:w-8 md:h-8 text-brand-accent/30 group-hover:text-brand-base transition-colors duration-300 shrink-0 ml-4" />
                      </div>

                      {/* Divider */}
                      <div className="border-t border-brand-base/20 my-5" />
                    </div>

                    {/* Items Grid/List */}
                    <div className="flex-1 flex flex-wrap content-center items-center gap-2 md:gap-3 mt-2">
                      {category.items.map((item, itemIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={itemIdx}
                            className="flex items-center gap-2 px-3 py-2 border border-brand-base bg-background text-[10px] md:text-[10px] lg:text-xs laptop-l:text-xs 4k:text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 cursor-default group/badge"
                          >
                            <ItemIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-primary group-hover/badge:scale-110 transition-transform" />
                            <span className="text-brand-base">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
