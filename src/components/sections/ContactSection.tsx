"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Grid, Stack, Input, Textarea, Button } from "@/components/ui";
import { useUI } from "@/hooks/useUI";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const { prefilledMessage, setPrefilledMessage } = useUI();

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
        <section className="relative w-full px-6 pt-16 pb-12 md:px-[128px] md:pt-[var(--section-pt)] md:pb-[64px] 4k:px-[256px] bg-background-alt overflow-x-hidden z-10">
            {/* Slanted Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-0" style={{ height: "var(--divider-height)", minHeight: "var(--divider-min-height)" }}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[var(--background)]">
                    <polygon points="0,0 100,0 0,100" />
                </svg>
            </div>
            <div id="contact" className="w-full flex flex-col items-center justify-center text-center relative z-10 scroll-mt-24">
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
                    className="text-xl md:text-xl lg:text-2xl laptop-l:text-3xl 4k:text-3xl font-black text-brand-base uppercase tracking-tighter mb-4 leading-tight"
                >
                    {<>Let&apos;s <span className="text-brand-accent">Collaborate</span></>}
                </motion.h2>

                {/* Contact Information Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full mb-4 md:mb-6 text-center"
                >
                    <p className="text-xs md:text-xs lg:text-xs laptop-l:text-xs 4k:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent/60 mb-4 md:mb-6">
                        Feel free to connect directly through any of my channels:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 justify-center items-stretch border-y border-brand-base/10 py-4 md:py-4 mb-4">
                        <div className="flex flex-col items-center justify-center px-4 md:px-2 lg:px-4 xl:px-6">
                            <span className="text-xs md:text-xs lg:text-sm laptop-l:text-sm 4k:text-sm font-black text-brand-base tracking-tight leading-tight text-center">
                                Gemi / Bintang / Tatang
                            </span>
                            <span className="text-[10px] md:text-[10px] lg:text-[10px] laptop-l:text-[10px] 4k:text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 mt-3 text-center">
                                My NickName
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-brand-base/10 py-6 md:py-0 px-4 md:px-2 lg:px-4 xl:px-6">
                            <a
                                href={SOCIAL_LINKS.email}
                                className="text-xs md:text-xs lg:text-sm laptop-l:text-sm 4k:text-sm font-black text-brand-base hover:text-brand-accent hover:underline underline-offset-4 decoration-1 transition-all duration-300 tracking-tight leading-tight text-center whitespace-nowrap"
                            >
                                {SITE_CONFIG.email}
                            </a>
                            <span className="text-[10px] md:text-[10px] lg:text-[10px] laptop-l:text-[10px] 4k:text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 mt-3 text-center">
                                My email
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center px-4 md:px-2 lg:px-4 xl:px-6">
                            <a
                                href={SOCIAL_LINKS.phone}
                                className="text-xs md:text-xs lg:text-sm laptop-l:text-sm 4k:text-sm font-black text-brand-base hover:text-brand-accent hover:underline underline-offset-4 decoration-1 transition-all duration-300 tracking-tight leading-tight text-center whitespace-nowrap"
                            >
                                {SOCIAL_LINKS.phone.replace("tel:", "")}
                            </a>
                            <span className="text-[10px] md:text-[10px] lg:text-[10px] laptop-l:text-[10px] 4k:text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 mt-3 text-center">
                                My Phone Number
                            </span>
                        </div>
                    </div>

                    <p className="text-xs md:text-xs lg:text-xs laptop-l:text-xs 4k:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent/60">
                        Or send a message instantly via the form below:
                    </p>
                </motion.div>

                <div className="w-full">
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-brand-highlight border border-brand-base/10 p-12 text-center space-y-4"
                            >
                                <FaCheckCircle className="mx-auto text-2xl text-brand-base mb-6" />
                                <h3 className="text-xl font-black text-brand-base uppercase tracking-widest leading-tight">Message Sent!</h3>
                                <p className="text-brand-accent font-light leading-relaxed">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                exit={{ 
                                    opacity: 0, 
                                    y: -30,
                                    transition: { duration: 0.3, ease: "easeIn", delay: 0 }
                                }}
                                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                onSubmit={handleSubmit}
                                className="w-full text-left"
                            >
                                {/* FormSubmit Configs */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <Stack spacing="gap-4 md:gap-5" align="stretch">
                                    <Grid cols={{ md: 2 }} gap="gap-4 md:gap-5">
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
                                        rows={4}
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
                                                <FaPaperPlane />
                                                Start the Conversation
                                            </>
                                        )}
                                    </Button>
                                </Stack>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
