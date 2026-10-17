
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-[#3D3028]">
            <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#F9F1E8]">
                    <Construction
                        className="h-12 w-12 text-[#8C5738]"
                        strokeWidth={1.5}
                    />
                </div>

                <span className="rounded-full border border-[#E5D6C7] bg-[#F9F1E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C5738]">
                    Under Construction
                </span>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Something is
                    <span className="mt-2 block font-serif italic text-[#8C5738]">
                        in the works.
                    </span>
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#766153] sm:text-base">
                    Halaman ini sedang kami persiapkan agar bisa memberikan
                    pengalaman yang lebih baik. Silakan kembali lagi nanti, ya!
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#8C5738] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#704329]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Kembali ke Beranda
                </Link>

                <p className="mt-12 text-xs text-[#958273]">
                    © 2026 CareerSpace
                </p>
            </div>
        </main>
    );
}
