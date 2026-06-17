"use client";

import { useUI } from "@/hooks/useUI";

export default function Footer() {
  const { isModalOpen } = useUI();

  if (isModalOpen) return null;

  return (
    <footer className="w-full bg-background text-brand-base py-12 border-t-2 border-brand-base mt-0 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.22em] font-bold">
          © 2026 GEMINTANG SANGKAJI FURQON.
        </p>
        <p className="text-[10px] text-brand-base/50 uppercase tracking-[0.3em] font-medium">
          built, broken, rebuilt
        </p>
      </div>
    </footer>
  );
}
