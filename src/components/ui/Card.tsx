import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  onClick,
  hoverable = false,
}: CardProps) {
  const hoverClass = hoverable
    ? "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--color-primary)]"
    : "";

  return (
    <div
      onClick={onClick}
      className={`bg-background rounded-none border-2 border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] overflow-hidden flex flex-col transition-all duration-300 ${hoverClass} ${onClick ? "cursor-pointer active:translate-x-0 active:translate-y-0 active:shadow-none" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
