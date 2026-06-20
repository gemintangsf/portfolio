"use client";

import { useUI } from "@/hooks/useUI";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const { isModalOpen } = useUI();
  const currentYear = new Date().getFullYear();

  if (isModalOpen) return null;

  return (
    <footer className="relative w-full bg-background text-brand-base px-6 pt-32 pb-[64px] md:px-[128px] md:pt-[calc(var(--section-pt)+64px)] md:pb-[64px] 4k:px-[256px] overflow-hidden z-10">
      {/* Slanted Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0" style={{ height: "var(--divider-height)", minHeight: "var(--divider-min-height)" }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[var(--footer-divider-fill,var(--background-alt))]">
          <polygon points="0,0 100,0 100,100" />
        </svg>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative z-10">
        <p className="text-xs uppercase tracking-[0.22em] font-bold">
          © {currentYear} {SITE_CONFIG.name.toUpperCase()}.
        </p>
        <p className="text-[10px] text-brand-base/50 uppercase tracking-[0.3em] font-medium">
          built, broken, rebuilt
        </p>
      </div>
    </footer>
  );
}
