import { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: string;
  className?: string;
}

export default function Grid({
  children,
  cols = 1,
  gap = "gap-6",
  className = "",
}: GridProps) {
  const getColClass = () => {
    if (typeof cols === "number") {
      return `grid-cols-${cols}`;
    }

    const classes = ["grid-cols-1"]; // Default base is 1 column
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);

    return classes.join(" ");
  };

  return (
    <div className={`grid ${getColClass()} ${gap} ${className}`}>
      {children}
    </div>
  );
}
