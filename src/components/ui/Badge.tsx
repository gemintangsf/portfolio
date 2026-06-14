import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "status" | "tag";
  dot?: boolean;
  icon?: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  variant = "status",
  dot = false,
  icon,
  className = "",
}: BadgeProps) {
  const baseStyle = "inline-flex items-center gap-2 font-bold text-brand-base uppercase";

  const variants = {
    status: "px-3.5 py-1.5 rounded-none bg-brand-highlight border border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] text-xs tracking-wider",
    tag: "text-[10px] text-brand-accent bg-brand-highlight px-3 py-1.5 rounded-none border border-brand-base shadow-[2px_2px_0px_0px_var(--color-primary)] tracking-widest",
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
        </span>
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
}