
import { CtaBanner } from "@/components/home/cta-banner";
import { Hero } from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import { FeaturedProducts } from "@/features/products/components/featured-products";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CtaBanner />
      <FeaturedProducts />
      <Testimonials />

      {/* <section className="bg-[#F2E5D8] px-6 py-20 text-[#3D3028]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#8C5738]">
            Our approach
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Prepare smarter, move forward.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Practical Guidance",
                description:
                  "Panduan yang bisa langsung diterapkan untuk memperbaiki CV.",
              },
              {
                title: "Personalized Feedback",
                description:
                  "Evaluasi jawaban interview berdasarkan target posisi kamu.",
              },
              {
                title: "Career Confidence",
                description:
                  "Berlatih agar lebih siap menghadapi proses rekrutmen.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E5D6C7] bg-[#F9F1E8] p-6"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#766153]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
