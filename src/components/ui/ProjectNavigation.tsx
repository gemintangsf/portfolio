"use client";

import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface ProjectItem {
  id: string;
  title: string;
  page: string;
  tab?: string;
}

export const CHRONOLOGICAL_PROJECTS: ProjectItem[] = [
  {
    id: "siinvent",
    title: "SIINVENT",
    page: "/projects/side-projects",
    tab: "siinvent",
  },
  {
    id: "paboi",
    title: "PABOI Web Portal",
    page: "/projects/pt-bejana",
    tab: "paboi",
  },
  {
    id: "sinbada",
    title: "SINBADA",
    page: "/projects/side-projects",
    tab: "sinbada",
  },
  {
    id: "jtk-berbagi",
    title: "JTK Berbagi",
    page: "/projects/side-projects",
    tab: "jtk-berbagi",
  },
  {
    id: "nadia",
    title: "NADIA",
    page: "/projects/pt-neuronworks",
    tab: "nadia",
  },
  {
    id: "scone",
    title: "SCONE",
    page: "/projects/pt-neuronworks",
    tab: "scone",
  },
  {
    id: "dms",
    title: "DMS",
    page: "/projects/pt-neuronworks",
    tab: "dms",
  },
  {
    id: "pefita",
    title: "PEFITA",
    page: "/projects/pt-neuronworks",
    tab: "pefita",
  },
  {
    id: "ppt",
    title: "PPT",
    page: "/projects/pt-neuronworks",
    tab: "ppt",
  },
  {
    id: "phc-mobile",
    title: "PHC Mobile App",
    page: "/projects/pt-javabooks",
    tab: "phc-mobile",
  },
  {
    id: "pos-mobile",
    title: "Mobile POS App",
    page: "/projects/pt-javabooks",
    tab: "pos-mobile",
  },
  {
    id: "periplus-apps",
    title: "PeriplusApps Mobile",
    page: "/projects/pt-javabooks",
    tab: "periplus-apps",
  },
  {
    id: "search-opensearch",
    title: "periplus.com Search",
    page: "/projects/pt-javabooks",
    tab: "search-opensearch",
  },
];

interface ProjectNavigationProps {
  currentId: string;
  setActiveTab?: (id: string) => void;
}

export default function ProjectNavigation({
  currentId,
  setActiveTab,
}: ProjectNavigationProps) {
  const currentIndex = CHRONOLOGICAL_PROJECTS.findIndex(
    (p) => p.id === currentId
  );

  if (currentIndex === -1) return null;

  const prevProject = currentIndex > 0 ? CHRONOLOGICAL_PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < CHRONOLOGICAL_PROJECTS.length - 1 ? CHRONOLOGICAL_PROJECTS[currentIndex + 1] : null;

  const getFullLink = (proj: ProjectItem) => {
    return proj.tab ? `${proj.page}?tab=${proj.tab}` : proj.page;
  };

  const handleNavigation = (proj: ProjectItem, e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname === proj.page && setActiveTab && proj.tab) {
      e.preventDefault();
      setActiveTab(proj.tab);
      window.history.pushState(null, "", getFullLink(proj));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Viewport Floating Chevrons (Desktop Only) */}
      {prevProject && (
        <Link
          href={getFullLink(prevProject)}
          onClick={(e) => handleNavigation(prevProject, e)}
          className="fixed left-0 top-[50%] -translate-y-1/2 z-[100] h-32 w-10 md:w-14 hidden md:flex items-center justify-center bg-brand-highlight/60 hover:bg-brand-highlight border-r-2 border-y-2 border-brand-base transition-all duration-200 cursor-pointer group shadow-[3px_3px_0px_0px_var(--color-primary)]"
        >
          <FaChevronLeft className="text-brand-base text-lg group-hover:-translate-x-1 transition-transform" />
          <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-background border-2 border-brand-base p-3 shadow-[4px_4px_0px_0px_var(--color-primary)] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 uppercase font-black text-[9px] tracking-wider whitespace-nowrap z-50">
            <span className="text-brand-accent block text-[8px] font-bold">Previous</span>
            {prevProject.title}
          </div>
        </Link>
      )}

      {nextProject && (
        <Link
          href={getFullLink(nextProject)}
          onClick={(e) => handleNavigation(nextProject, e)}
          className="fixed right-0 top-[50%] -translate-y-1/2 z-[100] h-32 w-10 md:w-14 hidden md:flex items-center justify-center bg-brand-highlight/60 hover:bg-brand-highlight border-l-2 border-y-2 border-brand-base transition-all duration-200 cursor-pointer group shadow-[-3px_3px_0px_0px_var(--color-primary)]"
        >
          <FaChevronRight className="text-brand-base text-lg group-hover:translate-x-1 transition-transform" />
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-background border-2 border-brand-base p-3 shadow-[-4px_4px_0px_0px_var(--color-primary)] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 uppercase font-black text-[9px] tracking-wider whitespace-nowrap z-50">
            <span className="text-brand-accent block text-[8px] font-bold">Next</span>
            {nextProject.title}
          </div>
        </Link>
      )}
    </>
  );
}
