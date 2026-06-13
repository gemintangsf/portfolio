import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyle =
    "rounded-none font-bold uppercase tracking-widest transition-all duration-300 border flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-4 text-sm",
    lg: "px-8 py-4 text-sm md:text-base md:px-10 md:py-4",
  };

  const variants = {
    primary:
      "bg-brand-base text-background border-brand-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-primary)] hover:invert",
    secondary:
      "bg-transparent text-brand-base border-brand-base shadow-[4px_4px_0px_0px_var(--color-base)] hover:shadow-[6px_6px_0px_0px_var(--color-base)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-base)] hover:bg-brand-base hover:text-background",
    outline:
      "bg-transparent text-brand-base border-2 border-brand-base shadow-[4px_4px_0px_0px_var(--color-base)] hover:shadow-[6px_6px_0px_0px_var(--color-base)] focus-visible:shadow-[6px_6px_0px_0px_var(--color-base)] hover:bg-brand-base/5",
    ghost:
      "bg-transparent text-brand-accent border-transparent hover:text-brand-base hover:shadow-[2px_2px_0px_0px_var(--color-base)] focus-visible:shadow-[2px_2px_0px_0px_var(--color-base)]",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : null}
      {children}
    </button>
  );
}
