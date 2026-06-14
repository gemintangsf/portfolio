"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Container, Grid, Stack, Input, Textarea, Button } from "@/components/ui";
import { useUI } from "@/hooks/useUI";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const { prefilledMessage, setPrefilledMessage, selectedCategory } = useUI();

    const getContactHeader = () => {
        switch (selectedCategory) {
            case "Mobile":
                return {
                    title: <>Let&apos;s Build Your <span className="text-brand-accent">Mobile App</span></>,
                    subtitle: "Have a mobile app concept or need optimization? Let's discuss how we can build a responsive, high-performance Flutter solution together."
                };
            case "Web":
                return {
                    title: <>Let&apos;s Design Your <span className="text-brand-accent">Web Platform</span></>,
                    subtitle: "Need a modern Next.js site or custom e-commerce solution? Tell me about your requirements and let's craft an SEO-friendly platform."
                };
            case "Enterprise":
                return {
                    title: <>Let&apos;s Design Your <span className="text-brand-accent">APIs & Backend</span></>,
                    subtitle: "Looking for a secure, scalable backend architecture? Tell me about your database and server needs, and let's design the ideal API schema."
                };
            case "All":
                return {
                    title: <>Let&apos;s Work <span className="text-brand-accent">Together</span></>,
                    subtitle: "Looking for a collaborative full-stack engineer who values clean code? Reach out below to discuss open opportunities or team needs."
                };
            default:
                return {
                    title: <>Let&apos;s <span className="text-brand-accent">Collaborate</span></>,
                    subtitle: "Have a vision? Let’s turn it into reality. I’m always open to discussing new projects, roles, and creative solutions."
                };
        }
    };

    const headerContent = getContactHeader();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // Append Web3Forms access key
        data.access_key = "f9d658dc-5792-4cf5-8be9-1b4990106a97";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setErrorMessage(result.message || "Something went wrong.");
                setStatus("error");
            }
        } catch (err) {
            setErrorMessage("Failed to send message. Please check your connection.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-8">
            <Container size="lg" className="flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* <Badge variant="status" dot className="mb-4">
                        Available for Projects
                    </Badge> */}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl font-black text-brand-base uppercase tracking-tighter mb-4"
                >
                    {headerContent.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg text-brand-accent max-w-xl mb-16 font-light leading-relaxed"
                >
                    {headerContent.subtitle}
                </motion.p>

                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-brand-highlight border border-brand-base/10 p-12 text-center space-y-4"
                            >
                                <FaCheckCircle className="mx-auto text-5xl text-brand-base mb-6" />
                                <h3 className="text-2xl font-black text-brand-base uppercase tracking-widest">Message Sent!</h3>
                                <p className="text-brand-accent font-light">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                <Button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 mx-auto"
                                >
                                    Send Another Message
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="w-full text-left"
                            >
                                {/* FormSubmit Configs */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <Stack spacing="gap-6" align="stretch">
                                    <Grid cols={{ md: 2 }} gap="gap-6">
                                        <Input
                                            type="text"
                                            name="name"
                                            label="Full Name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                        <Input
                                            type="email"
                                            name="email"
                                            label="Email Address"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </Grid>

                                    <Textarea
                                        name="message"
                                        label="Your Message"
                                        placeholder="What's on your mind?"
                                        rows={6}
                                        required
                                        value={prefilledMessage}
                                        onChange={(e) => setPrefilledMessage(e.target.value)}
                                    />

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest p-4 bg-red-500/5 border border-red-500/10">
                                            <FaExclamationCircle /> {errorMessage}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        isLoading={status === "loading"}
                                        variant="primary"
                                        size="lg"
                                        className="w-full font-black uppercase tracking-[0.4em] text-sm group shadow-2xl"
                                    >
                                        {status === "loading" ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                Deliver Message
                                            </>
                                        )}
                                    </Button>
                                </Stack>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}
