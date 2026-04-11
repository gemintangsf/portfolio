"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
    {
        question: "Do you accept freelance projects?",
        answer:
            "Yes, I do! I'm open to freelance opportunities for mobile apps (Flutter), web development (Next.js/React), and backend systems. If you have an idea, let's discuss how we can bring it to life.",
    },
    {
        question: "What is your primary tech stack?",
        answer:
            "My core stack includes Flutter for mobile, Next.js or React for web, and NestJS or Node.js for backend. For databases, I mostly use PostgreSQL or MySQL.",
    },
    {
        question: "How much do you charge for a project?",
        answer:
            "Rates depend on the complexity, scope, and timeline of the project. I usually offer a project-based pricing model. Reach out with your requirements for a rough estimate.",
    },
    {
        question: "Can you join an existing team?",
        answer:
            "Absolutely. I have experience working in enterprise environments (like Telkom) and agile startups. I'm comfortable with Git, Agile processes, and cross-functional collaboration.",
    },
    {
        question: "Do you provide maintenance after the project ends?",
        answer:
            "Yes, I offer maintenance packages to ensure the app stays up-to-date and bug-free. Support terms can be discussed after the initial development phase.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="min-h-[100dvh] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-16"
            >
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium items-center gap-2 mb-4 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                    </span>
                    Common Questions
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-base uppercase tracking-tighter">
                    Frequently Asked <span className="text-brand-accent">Questions</span>
                </h1>
                <p className="text-brand-accent mt-4 text-lg font-light">
                    Here are some answers to questions you might have.
                </p>
            </motion.div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className={`border rounded-none overflow-hidden transition-all duration-300 ${activeIndex === index
                            ? "border-brand-base bg-brand-highlight shadow-lg"
                            : "border-brand-base/10 bg-background hover:border-brand-base/30"
                            } backdrop-blur-sm`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span
                                className={`text-lg font-bold transition-colors duration-300 uppercase tracking-tight ${activeIndex === index ? "text-brand-base" : "text-brand-accent"
                                    }`}
                            >
                                {faq.question}
                            </span>
                            <span
                                className={`p-2 rounded-none transition-colors duration-300 ${activeIndex === index
                                    ? "bg-brand-base text-background"
                                    : "bg-brand-highlight text-brand-accent"
                                    }`}
                            >
                                {activeIndex === index ? <FiMinus /> : <FiPlus />}
                            </span>
                        </button>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 text-brand-accent font-light leading-relaxed border-t border-dashed border-brand-base/10 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
