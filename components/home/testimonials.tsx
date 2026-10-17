
"use client";

import { Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const testimonials = [
    {
        name: "Garnida",
        username: "@garnida",
        initials: "GA",
        rating: 4,
        message:
            "Panduan CV-nya membantu saya menyusun pengalaman kerja jadi lebih rapi dan profesional.",
    },
    {
        name: "Gilang",
        username: "@gilag",
        initials: "gg",
        rating: 3,
        message:
            "Sesi mock interview-nya sangat membantu saya lebih percaya diri saat menghadapi interview.",
    },
    {
        name: "Rambudhi",
        username: "@rambudhi",
        initials: "ra",
        rating: 5,
        message:
            "Materinya mudah dipahami dan bisa langsung diterapkan untuk persiapan mencari kerja.",
    },
    {
        name: "bibi",
        username: "@bibi",
        initials: "bi",
        rating: 5,
        message:
            "Sangat membantu untuk mengetahui apa saja yang perlu diperbaiki sebelum melamar pekerjaan.",
    },
    {
        name: "Rafi Maulana",
        username: "@rafimaulana",
        initials: "RM",
        rating: 5,
        message:
            "Pendekatannya praktis dan mudah diikuti untuk mempersiapkan karier dengan lebih baik.",
    },
    {
        name: "Andi Pratama",
        username: "@andipratama",
        initials: "AP",
        rating: 4,
        message:
            "Panduan CV-nya membantu saya menyusun pengalaman kerja jadi lebih rapi dan profesional.",
    },
    {
        name: "Nadia Putri",
        username: "@nadiaputri",
        initials: "NP",
        rating: 5,
        message:
            "Sesi mock interview-nya sangat membantu saya lebih percaya diri saat menghadapi interview.",
    },
    {
        name: "Dimas Saputra",
        username: "@dimassaputra",
        initials: "DS",
        rating: 5,
        message:
            "Materinya mudah dipahami dan bisa langsung diterapkan untuk persiapan mencari kerja.",
    },
    {
        name: "Salsa Amelia",
        username: "@salsaamelia",
        initials: "SA",
        rating: 5,
        message:
            "Sangat membantu untuk mengetahui apa saja yang perlu diperbaiki sebelum melamar pekerjaan.",
    },
    {
        name: "Rafi Maulana",
        username: "@rafimaulana",
        initials: "RM",
        rating: 5,
        message:
            "Pendekatannya praktis dan mudah diikuti untuk mempersiapkan karier dengan lebih baik.",
    },
];

type Testimonial = (typeof testimonials)[number];

function RatingStars({ rating }: { rating: number }) {
    return (
        <div
            className="flex items-center gap-1"
            aria-label={`Rating ${rating} dari 5 bintang`}
        >
            {Array.from({ length: 5 }, (_, index) => (
                <Star
                    key={index}
                    className={`h-4 w-4 ${index < rating
                        ? "fill-[#D9A441] text-[#D9A441]"
                        : "text-[#E5D6C7]"
                        }`}
                />
            ))}
        </div>
    );
}

function TestimonialCard({
    testimonial,
}: {
    testimonial: Testimonial;
}) {
    return (
        <article className="flex min-h-[220px] w-[280px] shrink-0 flex-col rounded-2xl border border-[#E5D6C7] bg-white p-5 shadow-[0_10px_24px_rgba(61,48,40,0.06)] sm:min-h-[230px] sm:w-[350px] sm:rounded-[20px] sm:p-6">
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0E0D0] text-sm font-bold text-[#8C5738]">
                        {testimonial.initials}
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-[#3D3028]">
                            {testimonial.name}
                        </h3>
                        <p className="truncate text-xs text-[#958273]">
                            {testimonial.username}
                        </p>
                    </div>
                </div>

                <Quote className="h-7 w-7 shrink-0 fill-[#F0E0D0] text-[#8C5738]" />
            </div>

            <div className="mt-5">
                <RatingStars rating={testimonial.rating} />
            </div>

            <div className="my-4 h-px bg-[#E5D6C7]" />

            <p className="flex-1 text-sm leading-6 text-[#766153]">
                “{testimonial.message}”
            </p>
        </article>
    );
}

function TestimonialTrack({
    items,
    direction,
    duration,
    reduceMotion,
}: {
    items: Testimonial[];
    direction: "left" | "right";
    duration: number;
    reduceMotion: boolean | null;
}) {
    const duplicatedItems = [...items, ...items];

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                className="flex w-max gap-4 px-2 sm:gap-5 sm:px-3"
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            x:
                                direction === "right"
                                    ? ["-50%", "0%"]
                                    : ["0%", "-50%"],
                        }
                }
                transition={
                    reduceMotion
                        ? undefined
                        : {
                            x: {
                                duration,
                                ease: "linear",
                                repeat: Infinity,
                            },
                        }
                }
            >
                {duplicatedItems.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.username}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export function Testimonials() {
    const shouldReduceMotion = useReducedMotion();

    const firstRow = testimonials.slice(0, 3);
    const secondRow = testimonials.slice(3);

    return (
        <section
            id="testimonials"
            className="overflow-hidden bg-[#F9F1E8] py-20 sm:py-24"
        >
            <div className="mx-auto max-w-[1232px] px-5 sm:px-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 20,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: shouldReduceMotion ? 0 : 0.6,
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="inline-flex items-center gap-2 rounded-full border border-[#E5D6C7] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C5738]">
                        <Star className="h-3.5 w-3.5 fill-[#D9A441] text-[#D9A441]" />
                        Career stories
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#3D3028] sm:text-4xl md:text-5xl">
                        Small steps.
                        <br />
                        <span className="font-serif italic text-[#8C5738]">
                            Meaningful progress.
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#766153] sm:text-base">
                        Setiap perjalanan karier punya cerita. Temukan inspirasi untuk
                        mengambil langkah berikutnya.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, index) => (
                                <Star
                                    key={index}
                                    className="h-5 w-5 fill-[#D9A441] text-[#D9A441]"
                                />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-[#3D3028]">
                            Cerita perjalanan karier
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Dua baris bergerak berlawanan arah */}
            <div className="relative mt-10 space-y-4 sm:mt-14 sm:space-y-5">
                <TestimonialTrack
                    items={firstRow}
                    direction="right"
                    duration={35}
                    reduceMotion={shouldReduceMotion}
                />

                <TestimonialTrack
                    items={secondRow}
                    direction="left"
                    duration={30}
                    reduceMotion={shouldReduceMotion}
                />

                {/* Blur/fade sisi kiri */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-y-8 left-0 z-10 w-20 bg-gradient-to-r from-[#F9F1E8] via-[#F9F1E8]/85 to-transparent backdrop-blur-sm sm:w-40 md:w-56 lg:w-64"
                />
                {/* Blur/fade sisi kanan */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F9F1E8] via-[#F9F1E8]/85 to-transparent backdrop-blur-sm sm:w-40 md:w-56 lg:w-64"
                />
            </div>
        </section>
    );
}
