
"use client";

import { products } from "@/features/products/data/products";
import {
    ArrowDownRight,
    ArrowRight,
    BookOpen,
    BriefcaseBusiness,
    Users,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const productVisuals = {
    digital: {
        image:
            "https://cdn.lynkid.my.id/products/25-08-2026/1787673222976_4452714.png",
        icon: BookOpen,
        label: "Learn at your own pace",
    },
    coaching: {
        image:
            "https://cdn.lynkid.my.id/products/08-09-2026/1788873281210_8159418.webp",
        icon: BriefcaseBusiness,
        label: "Personalized guidance",
    },
    workshop: {
        image:
            "https://cdn.lynkid.my.id/products/03-09-2026/1788376511411_9387270.png",
        icon: Users,
        label: "Learn together",
    },
};

export function FeaturedProducts() {
    const featuredProducts = products.filter((product) => product.isActive);
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 32,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#F9F1E8]/80 blur-3xl"
            />

            <div className="relative mx-auto max-w-[1232px]">
                {/* Section heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 24,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
                    className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-[#E5D6C7] bg-[#F9F1E8]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C5738]">
                            <span className="h-2 w-2 rounded-full bg-[#8C5738]" />
                            Explore your possibilities
                        </p>

                        <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#3D3028] sm:text-5xl lg:text-6xl">
                            Let me help you
                            <br />
                            <span className="font-serif italic text-[#8C5738]">
                                figure yours out.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-[#766153] sm:text-lg sm:leading-8">
                            Small steps can lead to meaningful changes. Find the right
                            guidance, tools, and support for your next chapter.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#D8C2AF] px-5 py-3 text-sm font-semibold text-[#8C5738] transition hover:border-[#8C5738] hover:bg-[#F9F1E8]"
                    >
                        View all services
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Product cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {featuredProducts.map((product, index) => {
                        const visual =
                            productVisuals[
                            product.type as keyof typeof productVisuals
                            ] ?? productVisuals.digital;

                        const Icon = visual.icon;

                        const productHref =
                            product.type === "digital"
                                ? "/guidebook"
                                : product.type === "coaching"
                                    ? "/mock-interview"
                                    : "/workshops";

                        const productType =
                            product.type === "digital"
                                ? "Digital Product"
                                : product.type === "coaching"
                                    ? "1:1 Coaching"
                                    : "Workshop";

                        const centerLastCard =
                            featuredProducts.length === 3 && index === 2;

                        return (
                            <motion.article
                                key={product.id}
                                variants={cardVariants}
                                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                                className={`group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E5D6C7] bg-[#F9F1E8] p-3 shadow-[0_8px_30px_rgba(61,48,40,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(61,48,40,0.10)] sm:p-4 ${centerLastCard
                                    ? "md:col-span-2 md:mx-auto md:w-1/2"
                                    : ""
                                    }`}
                            >
                                {/* Product image */}
                                <div className="relative h-56 overflow-hidden rounded-[20px] bg-[#E8D9CA] sm:h-64">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-[#E8D9CA]">
                                        <img
                                            src={visual.image}
                                            alt={product.name}
                                            loading="lazy"
                                            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D3028]/50 via-transparent to-black/5" />

                                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-xs font-semibold text-[#3D3028] backdrop-blur-md">
                                        <Icon className="h-4 w-4 text-[#8C5738]" />
                                        {productType}
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                                        <p className="text-sm font-medium text-white/90">
                                            {visual.label}
                                        </p>

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-[#8C5738]">
                                            <ArrowDownRight className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product details */}
                                <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4 sm:pb-4">
                                    <h3 className="text-2xl font-semibold leading-snug tracking-tight text-[#3D3028]">
                                        {product.name}
                                    </h3>

                                    <p className="mt-3 flex-1 text-sm leading-7 text-[#766153] sm:text-base">
                                        {product.description}
                                    </p>

                                    <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[#E5D6C7] pt-5">
                                        <div>
                                            <p className="text-xs font-medium text-[#958273]">
                                                Investment
                                            </p>

                                            <p className="mt-1 text-xl font-semibold text-[#8C5738]">
                                                {product.price === 0
                                                    ? "Coming soon"
                                                    : new Intl.NumberFormat("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                        maximumFractionDigits: 0,
                                                    }).format(product.price)}
                                            </p>
                                        </div>

                                        <Link
                                            href={productHref}
                                            className="inline-flex items-center gap-2 rounded-full bg-[#8C5738] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#704329]"
                                        >
                                            Explore
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
