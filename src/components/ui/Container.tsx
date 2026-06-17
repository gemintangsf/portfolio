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
    sm: "max-w-4xl",          // Up from 768px to 896px
    md: "max-w-6xl",          // Up from 1024px to 1152px
    lg: "max-w-[1440px]",     // Up from 1280px to 1440px
    xl: "max-w-[1600px]",     // Up from 1440px to 1600px
    full: "w-full",
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto px-6 md:px-12 lg:px-16 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
