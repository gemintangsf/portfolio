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
    sm: "max-w-3xl",          // Tablet (768px)
    md: "max-w-5xl",          // Laptop (1024px)
    lg: "max-w-7xl",          // Laptop L (1440px)
    xl: "max-w-[1440px]",     // Ultra / Laptop L extended
    full: "w-full",
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16 [@media(min-width:2560px)]:px-24 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
