import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  id?: string;
}

export default function Container({
  children,
  size = "lg",
  className = "",
  id,
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "w-full",
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto px-6 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
