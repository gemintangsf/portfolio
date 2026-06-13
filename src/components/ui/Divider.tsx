export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({
  orientation = "horizontal",
  className = "",
}: DividerProps) {
  const borderClass =
    orientation === "horizontal"
      ? "w-full border-t border-brand-base/10"
      : "h-full border-l border-brand-base/10";

  return <div className={`${borderClass} ${className}`} />;
}
