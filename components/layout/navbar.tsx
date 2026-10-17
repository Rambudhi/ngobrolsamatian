
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Solusi", href: "/services" },
  { label: "Fitur", href: "/features" },
  { label: "Harga", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Hubungi Kami", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<"id" | "en">("id");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 -mb-[82px] px-4 pt-3">
      <div
        className={`mx-auto flex h-[70px] max-w-[1232px] items-center justify-between rounded-[26px] border px-5 transition-all duration-300 max-[680px]:h-[58px] max-[680px]:rounded-[24px] max-[680px]:px-4 ${isScrolled
          ? "border-[#E5D6C7]/70 bg-[#F9F1E8]/80 shadow-lg backdrop-blur-xxl"
          : "border-transparent bg-transparent shadow-none"
          }`}
      >
        <Link
          href="/"
          aria-label="CareerSpace - Beranda"
          className="w-[150px] shrink-0 text-xl font-bold tracking-tight text-[#3D3028] max-[680px]:w-[120px] max-[680px]:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          CareerSpace<span className="text-[#A66B45]">.</span>
        </Link>

        <nav
          id="hp-mobile-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"
            } fixed left-4 right-4 top-[86px] flex-col rounded-[24px] border border-[#E5D6C7] bg-[#F9F1E8]/95 p-4 text-[#3D3028] shadow-xl backdrop-blur-xl lg:static lg:ml-auto lg:mr-6 lg:flex lg:flex-row lg:items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <ul className="flex flex-col gap-2 text-base font-semibold lg:flex-row lg:items-center lg:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-3 py-3 transition lg:rounded-none lg:px-0 lg:py-2 ${isActive
                      ? "bg-[#EDE0D2] text-[#8C5738] lg:bg-transparent"
                      : "text-[#5D4A3E] hover:bg-[#EDE0D2] hover:text-[#8C5738] lg:hover:bg-transparent"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 flex h-10 items-center rounded-xl bg-[#EDE0D2] p-1 lg:hidden">
            {(["en", "id"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`flex-1 rounded-lg py-1 text-sm font-semibold uppercase ${language === lang
                  ? "bg-white text-[#3D3028] shadow-sm"
                  : "text-[#806A5A]"
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-3 max-[680px]:gap-2">
          <Link
            href="/login"
            className="flex h-10 items-center justify-center rounded-xl border border-[#CDB8A5] px-5 text-sm font-medium text-[#3D3028] transition hover:bg-[#EDE0D2] max-[680px]:hidden"
          >
            Masuk
          </Link>

          <Link
            href="/register"
            className="flex h-10 items-center justify-center rounded-xl bg-[#8C5738] px-5 text-sm font-semibold text-white shadow-md transition hover:bg-[#70432B] max-[680px]:h-9 max-[680px]:px-3"
          >
            Mulai Gratis
          </Link>

          <div className="hidden h-9 items-center rounded-xl p-1 text-sm font-semibold lg:flex">
            {(["en", "id"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`h-7 rounded-lg px-2 uppercase transition ${language === lang
                  ? "bg-white text-[#3D3028] shadow-sm"
                  : "text-[#806A5A] hover:bg-[#EDE0D2]"
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-controls="hp-mobile-navigation"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#CDB8A5] text-[#3D3028] lg:hidden max-[680px]:h-9 max-[680px]:w-9"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
