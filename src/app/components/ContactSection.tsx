"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

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
        <section id="contact" className="min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center max-w-7xl mx-auto relative z-10 py-20 md:py-28 scroll-mt-16 md:scroll-mt-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium items-center gap-2 mb-4 backdrop-blur-sm tracking-tight"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Available for Projects
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black text-brand-base uppercase tracking-tighter mb-3"
            >
                Let&apos;s <span className="text-brand-accent">Collaborate</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-brand-accent max-w-xl mb-16 font-light leading-relaxed"
            >
                Have a vision? Let’s turn it into reality.
                I’m always open to discussing new projects and opportunities.
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
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 px-8 py-3 bg-brand-base text-background uppercase tracking-widest text-xs font-bold hover:invert transition-all"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-6 text-left"
                        >
                            {/* FormSubmit Configs */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-base ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-6 py-4 rounded-none border border-brand-base/10 bg-brand-highlight focus:border-brand-base outline-none transition-all text-brand-base font-medium placeholder:text-brand-accent/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-base ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-6 py-4 rounded-none border border-brand-base/10 bg-brand-highlight focus:border-brand-base outline-none transition-all text-brand-base font-medium placeholder:text-brand-accent/30"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-base ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="What's on your mind?"
                                    rows={6}
                                    required
                                    className="w-full px-6 py-4 rounded-none border border-brand-base/10 bg-brand-highlight focus:border-brand-base outline-none transition-all text-brand-base font-medium placeholder:text-brand-accent/30 resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest p-4 bg-red-500/5 border border-red-500/10">
                                    <FaExclamationCircle /> {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full px-8 py-5 bg-brand-base text-background font-black flex items-center justify-center gap-3 hover:invert transition-all uppercase tracking-[0.4em] text-sm disabled:opacity-50 disabled:cursor-not-allowed group shadow-2xl"
                            >
                                {status === "loading" ? (
                                    <>
                                        <FaSpinner className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Deliver Message
                                    </>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
