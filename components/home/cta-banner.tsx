
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
    return (
        <section className="relative z-20 -mb-10 -mt-10 px-4 sm:-mb-12 sm:-mt-12 sm:px-6">
            <div className="relative mx-auto flex max-w-[1232px] flex-col gap-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#A66B45] via-[#8C5738] to-[#704329] p-5 text-white shadow-[0_16px_32px_rgba(61,48,40,0.18)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[24px] sm:px-7 sm:py-6 md:px-9">

                {/* Decorative background */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full border border-white/10 sm:-right-5 sm:-top-20 sm:h-64 sm:w-64"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-5 -top-8 h-28 w-28 rounded-full border border-white/10 sm:h-44 sm:w-44"
                />

                {/* Icon and text */}
                <div className="relative flex min-w-0 items-center gap-3 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 sm:h-16 sm:w-16 sm:rounded-2xl">
                        <BriefcaseBusiness
                            className="h-6 w-6 sm:h-8 sm:w-8"
                            strokeWidth={1.5}
                        />
                    </div>

                    <div className="min-w-0">
                        <p className="text-lg font-semibold leading-snug tracking-tight sm:text-xl md:text-2xl lg:text-[30px] lg:leading-tight">
                            Temukan jalur kariermu.
                            <br className="hidden sm:block" />
                            <span className="sm:mt-1 sm:block">
                                Bahkan jika mulai dari nol.
                            </span>
                        </p>

                        <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm">
                            Mulai langkah kecil untuk masa depanmu.
                        </p>
                    </div>
                </div>

                {/* CTA button */}
                <Link
                    href="/services"
                    className="group relative flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#8C5738] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#F9F1E8] sm:min-h-12 sm:w-auto sm:min-w-[140px] sm:px-6 sm:text-base"
                >
                    Cari tahu
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
