"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-brand-base/10 select-none">
                    404
                </h1>

                <div className="mt-[-4rem] md:mt-[-6rem] relative z-20">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-base mb-4 uppercase tracking-[0.2em]">
                        LOST IN SPACE
                    </h2>
                    <p className="text-brand-base/50 text-base md:text-lg max-w-md mx-auto mb-10 tracking-widest leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <Link
                        href="/"
                        className="inline-block px-10 py-4 border border-brand-base bg-brand-base text-brand-on-surface font-bold uppercase tracking-[0.3em] transition-all hover:bg-transparent hover:text-brand-base active:scale-95 shadow-2xl"
                    >
                        Return to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
