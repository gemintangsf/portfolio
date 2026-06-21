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
    xl: "max-w-[1440px]",
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
