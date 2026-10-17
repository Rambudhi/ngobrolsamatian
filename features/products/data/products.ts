
import type { Product } from "../types";

export const products: Product[] = [
    {
        id: "write-better-cv",
        slug: "write-a-better-cv-guidebook",
        name: "Write a Better CV Guidebook",
        description: "Buat kamu yang lebih suka ngerjain sendiri..",
        price: 20000, // Ganti dengan harga guidebook yang sebenarnya
        type: "digital",
        isActive: true,
    },
    {
        id: "mock-interview-60",
        slug: "mock-interview",
        name: "Mock Interview (1:1) - 60 Menit",
        description: "Buat kamu yang lebih suka ngerjain dan latihan bareng aku.",
        price: 150000,
        type: "coaching",
        isActive: true,
    },
    {
        id: "ngobrol-karir",
        slug: "ngobrol-karir",
        name: "1:1 Ngobrol Karir - Unexpected Career Transition",
        description: "Atau kalau kamu lebih butuh ngobrol langsung sama aku..",
        price: 250000,
        type: "coaching",
        isActive: true,
    },
];
