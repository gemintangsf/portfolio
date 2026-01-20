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
            "My core stack includes Flutter for mobile, Next.js or React for web, and NestJS or Node.js for backend. For databases, I mostly use PostgreSQL or MySQL. I also have experience attempting Generative AI integrations.",
    },
    {
        question: "How much do you charge for a project?",
        answer:
            "Rates depend on the complexity, scope, and timeline of the project. I usually offer a project-based pricing model. Feel free to reach out via the Contact page with your requirements, and I can provide a rough estimate.",
    },
    {
        question: "Can you join an existing team?",
        answer:
            "Absolutely. I have experience working in enterprise environments (like Telkom) and agile startups. I'm comfortable with Git, Microsoft Teams, and collaborating with PMs, designers, and other engineers.",
    },
    {
        question: "Do you provide maintenance after the project ends?",
        answer:
            "Yes, I offer maintenance packages to ensure the app stays up-to-date and bug-free. We can discuss the terms of support after the initial development phase is complete.",
    },
    {
        question: "How long does it take to build an app?",
        answer:
            "Delivery time depends on complexity and requirements. I break projects into measurable milestones to ensure steady progress and predictable outcomes.",
    },
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm">
                    Common Questions
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-3 text-brand-base">
                    Frequently Asked Questions
                </h1>
                <p className="text-brand-accent mt-4 text-lg">
                    Here are some answers to questions you might have.
                </p>
            </motion.div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index
                            ? "border-brand-primary/50 bg-white/60 dark:bg-black/40 shadow-lg"
                            : "border-gray-200 dark:border-white/10 bg-white/30 dark:bg-black/20 hover:border-brand-primary/30"
                            } backdrop-blur-sm`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span
                                className={`text-lg font-semibold transition-colors duration-300 ${activeIndex === index ? "text-brand-accent" : "text-brand-base dark:text-gray-200"
                                    }`}
                            >
                                {faq.question}
                            </span>
                            <span
                                className={`p-2 rounded-full transition-colors duration-300 ${activeIndex === index
                                    ? "bg-brand-primary text-white"
                                    : "bg-gray-100 dark:bg-white/10 text-gray-500"
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
                                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-dashed border-gray-200 dark:border-white/10 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-600 dark:text-gray-400">
                    Still have questions?{" "}
                    <a
                        href="/contact"
                        className="text-brand-primary font-semibold hover:underline decoration-2 underline-offset-4"
                    >
                        Chat with me directly
                    </a>
                </p>
            </motion.div>
        </section>
    );
}