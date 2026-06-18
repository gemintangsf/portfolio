"use client";

import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  page: string;
  tab?: string;
}

export const CHRONOLOGICAL_PROJECTS: ProjectItem[] = [
  {
    id: "siinvent",
    title: "SIINVENT",
    subtitle: "Stock Auditing Tool",
    page: "/projects/side-projects",
    tab: "siinvent",
  },
  {
    id: "paboi",
    title: "PABOI Web Portal",
    subtitle: "Indonesia Orthopedic Association Web Platform",
    page: "/projects/pt-bejana",
    tab: "paboi",
  },
  {
    id: "sinbada",
    title: "SINBADA",
    subtitle: "Web-Based Inventory System",
    page: "/projects/side-projects",
    tab: "sinbada",
  },
  {
    id: "jtk-berbagi",
    title: "JTK Berbagi",
    subtitle: "Donation Management Platform",
    page: "/projects/side-projects",
    tab: "jtk-berbagi",
  },
  {
    id: "nadia",
    title: "NADIA",
    subtitle: "Network Terminal Equipment Management",
    page: "/projects/pt-neuronworks",
    tab: "nadia",
  },
  {
    id: "scone",
    title: "SCONE",
    subtitle: "Order Management System",
    page: "/projects/pt-neuronworks",
    tab: "scone",
  },
  {
    id: "dms",
    title: "DMS",
    subtitle: "Document Management System",
    page: "/projects/pt-neuronworks",
    tab: "dms",
  },
  {
    id: "pefita",
    title: "PEFITA",
    subtitle: "Package Management System",
    page: "/projects/pt-neuronworks",
    tab: "pefita",
  },
  {
    id: "ppt",
    title: "PPT",
    subtitle: "Master Data Management",
    page: "/projects/pt-neuronworks",
    tab: "ppt",
  },
  {
    id: "phc-mobile",
    title: "PHC Mobile App",
    subtitle: "HR & Gamification System",
    page: "/projects/pt-javabooks",
    tab: "phc-mobile",
  },
  {
    id: "pos-mobile",
    title: "Mobile POS App",
    subtitle: "Point of Sale Application",
    page: "/projects/pt-javabooks",
    tab: "pos-mobile",
  },
  {
    id: "periplus-apps",
    title: "PeriplusApps Mobile",
    subtitle: "Bookstore Platform",
    page: "/projects/pt-javabooks",
    tab: "periplus-apps",
  },
  {
    id: "search-opensearch",
    title: "periplus.com Search",
    subtitle: "Search & Recommendation Engine",
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
    // If it's on the same page, intercept and set the tab state directly
    if (typeof window !== "undefined" && window.location.pathname === proj.page && setActiveTab && proj.tab) {
      e.preventDefault();
      setActiveTab(proj.tab);
      window.history.pushState(null, "", getFullLink(proj));
      // Scroll smoothly to top of the content card area
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

      {/* Inline Card Pagination (Visible on all sizes, crucial for Mobile/Tablet) */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t-2 border-brand-base/20 gap-4">
        {prevProject ? (
          <Link
            href={getFullLink(prevProject)}
            onClick={(e) => handleNavigation(prevProject, e)}
            className="flex-1 flex items-center gap-3 p-3 border-2 border-brand-base bg-brand-highlight/10 shadow-[2px_2px_0px_0px_var(--color-base)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 text-left group"
          >
            <FaChevronLeft className="text-brand-base shrink-0 group-hover:-translate-x-0.5 transition-transform" size={12} />
            <div className="min-w-0">
              <span className="text-[8px] font-bold uppercase tracking-wider text-brand-accent block leading-none mb-1">
                Previous Project
              </span>
              <span className="text-xs font-black uppercase tracking-tight text-brand-base block truncate">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextProject ? (
          <Link
            href={getFullLink(nextProject)}
            onClick={(e) => handleNavigation(nextProject, e)}
            className="flex-1 flex items-center justify-between gap-3 p-3 border-2 border-brand-base bg-brand-highlight/10 shadow-[2px_2px_0px_0px_var(--color-base)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 text-right group"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[8px] font-bold uppercase tracking-wider text-brand-accent block leading-none mb-1">
                Next Project
              </span>
              <span className="text-xs font-black uppercase tracking-tight text-brand-base block truncate">
                {nextProject.title}
              </span>
            </div>
            <FaChevronRight className="text-brand-base shrink-0 group-hover:translate-x-0.5 transition-transform" size={12} />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </>
  );
}
