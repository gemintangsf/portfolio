"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useUI } from "@/hooks/useUI";

export default function Preloader() {
    const [show, setShow] = useState(true);
    const { setLoaded, theme } = useUI();

    useEffect(() => {
        // Skip preloader if already shown in this tab session
        if (typeof window !== "undefined" && sessionStorage.getItem("portfolio-preloader-shown") === "true") {
            setShow(false);
            setLoaded(true);
            return;
        }

        const timer = setTimeout(() => {
            setShow(false);
            // Give time for the fade-out animation before marking as loaded
            setTimeout(() => {
                setLoaded(true);
                if (typeof window !== "undefined") {
                    sessionStorage.setItem("portfolio-preloader-shown", "true");
                }
            }, 400); // Fast fade-out transition (reduced from 1000ms)
        }, 800); // Shorter active display time (reduced from 2500ms)

        return () => clearTimeout(timer);
    }, [setLoaded]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                    className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="relative">
                        {/* Elegant name animation */}
                        <motion.h1
                            initial={{ opacity: 0, letterSpacing: "1.5em", filter: "blur(10px)" }}
                            animate={{ opacity: 1, letterSpacing: "0.5em", filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-brand-base text-xl md:text-2xl font-black uppercase tracking-[0.5em] ml-[0.5em]"
                        >
                            Gemintang
                        </motion.h1>

                        {/* Progress bar line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2, ease: "linear" }}
                            className="absolute -bottom-4 left-0 right-0 h-[1px] bg-brand-base transform origin-left"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-brand-base/40 text-[10px] uppercase font-bold tracking-[0.3em] mt-12"
                    >
                        Building Interface
                    </motion.p>

                    {/* Decorative corners */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        className="absolute top-10 left-10 w-20 h-20 border-t border-l border-brand-base"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-brand-base"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
