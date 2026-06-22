import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-[10px] font-bold uppercase tracking-widest text-brand-base ml-2"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-6 py-4 rounded-none border-2 border-brand-base bg-input-bg focus:bg-background focus:shadow-[4px_4px_0px_0px_var(--color-primary)] focus:outline-none focus-visible:outline-none transition-all text-brand-base font-medium placeholder:text-brand-accent/30 ${className}`}
        {...props}
      />
    </div>
  );
}
