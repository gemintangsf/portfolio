import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={`border rounded-none overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-brand-base bg-brand-highlight shadow-lg"
          : "border-brand-base/10 bg-background hover:border-brand-base/30"
      } backdrop-blur-sm`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 uppercase tracking-tight ${
            isOpen ? "text-brand-base" : "text-brand-accent"
          }`}
        >
          {title}
        </span>
        <span
          className={`p-2 rounded-none transition-colors duration-300 ${
            isOpen
              ? "bg-brand-base text-background"
              : "bg-brand-highlight text-brand-accent"
          }`}
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-brand-accent font-light leading-relaxed border-t border-dashed border-brand-base/10 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export interface AccordionProps {
  items: {
    title: ReactNode;
    content: ReactNode;
  }[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={activeIndex === index}
          onToggle={() => toggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
