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
    ? "hover:border-brand-base/30 hover:shadow-2xl transition-all duration-300"
    : "";

  return (
    <div
      onClick={onClick}
      className={`bg-background rounded-none border border-brand-base/10 shadow-xl overflow-hidden flex flex-col ${hoverClass} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
