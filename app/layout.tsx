
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageIntro } from "@/components/providers/page-intro";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerSpace | Career & Life Coaching",
  description: "Career guidance and life coaching by Tian.",
  icons: {
    icon: "/ts.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#F9F1E8] text-[#3D3028] antialiased">
        <SmoothScroll>
          <PageIntro />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
