
"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function PageIntro() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setShowIntro(false);
        }, 1800);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F9F1E8]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-[#3D3028] md:text-6xl">
                            CareerSpace<span className="text-[#A66B45]">.</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-4 text-sm tracking-[0.25em] text-[#8C5738]"
                        >
                            FIND YOUR OWN WAY
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mx-auto mt-6 h-[2px] w-32 origin-left bg-[#A66B45]"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
