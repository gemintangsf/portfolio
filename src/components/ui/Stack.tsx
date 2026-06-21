import { ReactNode } from "react";

export interface StackProps {
  children: ReactNode;
  direction?: "row" | "col" | { sm?: "row" | "col"; md?: "row" | "col"; lg?: "row" | "col" };
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around";
  spacing?: string;
  className?: string;
}

export default function Stack({
  children,
  direction = "col",
  align,
  justify,
  spacing = "gap-4",
  className = "",
}: StackProps) {
  const getDirectionClass = () => {
    if (typeof direction === "string") {
      return direction === "row" ? "flex-row" : "flex-col";
    }

    const classes = [];
    if (direction.sm) classes.push(direction.sm === "row" ? "sm:flex-row" : "sm:flex-col");
    if (direction.md) classes.push(direction.md === "row" ? "md:flex-row" : "md:flex-col");
    if (direction.lg) classes.push(direction.lg === "row" ? "lg:flex-row" : "lg:flex-col");

    return ["flex-col", ...classes].join(" ");
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  const dClass = getDirectionClass();
  const aClass = align ? alignClasses[align] : "";
  const jClass = justify ? justifyClasses[justify] : "";

  return (
    <div className={`flex ${dClass} ${aClass} ${jClass} ${spacing} ${className}`}>
      {children}
    </div>
  );
}
