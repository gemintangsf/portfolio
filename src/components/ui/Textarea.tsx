import { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({
  label,
  className = "",
  id,
  ...props
}: TextareaProps) {
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
      <textarea
        id={id}
        className={`w-full px-6 py-4 rounded-none border-2 border-brand-base bg-input-bg focus:bg-background focus:shadow-[4px_4px_0px_0px_var(--color-primary)] focus:outline-none focus-visible:outline-none transition-all text-brand-base font-medium placeholder:text-brand-accent/30 resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
