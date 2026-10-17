
"use client";

import { motion, MotionConfig } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <MotionConfig reducedMotion="user">
            <section className="overflow-hidden bg-[#F9F1E8] px-6 pb-20 pt-28 text-[#3D3028] md:pb-28 md:pt-36">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Teks muncul dari bawah */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#A66B45]">
                            Hallo, welcome to my space!
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                            Kenalin, aku{" "}
                            <span className="text-[#A66B45]">Tian.</span>
                        </h1>


                        <div className="mt-8 space-y-5">
                            {/* Paragraf 1: Pengalaman karier */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE0D2] text-[#8C5738]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        aria-hidden="true"
                                    >
                                        <rect x="3" y="7" width="18" height="13" rx="2" />
                                        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18M10 12v2h4v-2" />
                                    </svg>
                                </div>

                                <p className="flex-1 pt-1 text-base leading-7 text-[#766153] md:text-lg">
                                    Ex-recruiter & HR leader di corporate dan startup Indonesia.
                                    Sekarang, aku menjadi full-time mom sekaligus career & life coach.
                                </p>
                            </div>

                            {/* Paragraf 2: Perjalanan hidup */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE0D2] text-[#8C5738]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11z" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>

                                <p className="flex-1 pt-1 text-base leading-7 text-[#766153] md:text-lg">
                                    Sepanjang perjalanan karier dan hidupku, aku juga beberapa kali
                                    harus figure things out.
                                </p>
                            </div>

                            {/* Paragraf 3: Menemukan prioritas */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE0D2] text-[#8C5738]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 7v5l3 2" />
                                    </svg>
                                </div>

                                <p className="flex-1 pt-1 text-base leading-7 text-[#766153] md:text-lg">
                                    Sampai akhirnya aku menemukan apa yang works buatku ketika
                                    hidup dan prioritas mulai berubah.
                                </p>
                            </div>
                        </div>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/services"
                                className="rounded-xl bg-[#8C5738] px-6 py-3.5 font-semibold text-white transition hover:bg-[#70432B]"
                            >
                                Explore Services
                            </Link>
                            <Link
                                href="/mock-interview"
                                className="rounded-xl border border-[#CDB8A5] px-6 py-3.5 font-semibold transition hover:bg-[#EDE0D2]"
                            >
                                Book Mock Interview
                            </Link>
                        </div>
                    </motion.div>

                    {/* Foto muncul dari kanan */}
                    <motion.div
                        initial={{ opacity: 0, x: 45, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mx-auto w-full max-w-md lg:ml-auto"
                    >
                        <div className="absolute -right-3 -top-3 h-full w-full rounded-[32px] border border-[#DCC5B0] md:-right-5 md:-top-5" />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#EDE0D2]">
                            <Image
                                src="/images/IMG1.jpg"
                                alt="Tian, career and life coach"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="absolute -bottom-5 -left-4 max-w-[250px] rounded-2xl border border-[#E5D6C7] bg-[#FFFCF8] p-4 shadow-lg md:-left-8"
                        >
                            <p className="text-sm leading-6 text-[#766153]">
                                "Finding your own way, at your own pace."
                            </p>
                            <p className="mt-2 text-sm font-bold text-[#8C5738]">
                                — Tian
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    );
}
