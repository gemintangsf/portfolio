"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AccordionItem, Container } from "@/components/ui";
import { useUI } from "@/hooks/useUI";

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
    const { selectedCategory } = useUI();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Auto-expand FAQ based on user selection
    useEffect(() => {
        if (selectedCategory === "Mobile" || selectedCategory === "Web" || selectedCategory === "Enterprise") {
            setActiveIndex(1); // Auto-expand primary tech stack question
        } else if (selectedCategory === "All") {
            setActiveIndex(3); // Auto-expand team integration question for recruiters
        } else {
            setActiveIndex(0); // Default expand freelance question
        }
    }, [selectedCategory]);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-4">
            <Container size="sm" className="flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-base uppercase tracking-tighter">
                        Frequently Asked <span className="text-brand-accent">Questions</span>
                    </h1>
                    <p className="text-brand-accent mt-4 text-lg font-light">
                        Here are some answers to questions you might have.
                    </p>
                </motion.div>

                <div className="space-y-4 w-full">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full"
                        >
                            <AccordionItem
                                title={faq.question}
                                isOpen={activeIndex === index}
                                onToggle={() => toggleFAQ(index)}
                            >
                                {faq.answer}
                            </AccordionItem>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
