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
        className={`w-full px-6 py-4 rounded-none border border-brand-base/40 bg-brand-highlight focus:border-brand-base focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all text-brand-base font-medium placeholder:text-brand-accent/30 resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
