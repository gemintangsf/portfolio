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
  const baseStyle = "inline-flex items-center gap-2 font-medium backdrop-blur-sm text-brand-base";

  const variants = {
    status: "px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm",
    tag: "text-[10px] font-medium text-brand-accent bg-brand-highlight px-4 py-2 rounded-none border border-brand-base/5 uppercase tracking-widest",
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