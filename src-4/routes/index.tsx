import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { products, initialReviews } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cookie Jar Bakery — Freshly Baked Cakes, Brownies & Pastries in Sattur" },
      {
        name: "description",
        content:
          "Cookie Jar is a premium bakery in Sattur, Tamil Nadu serving freshly baked cakes, brownies, pastries and custom birthday cakes. Takeaway & delivery available.",
      },
      { property: "og:title", content: "Cookie Jar Bakery — Sattur, Tamil Nadu" },
      {
        property: "og:description",
        content:
          "Freshly baked cakes, brownies and pastries. Takeaway & delivery. Open until 10 PM.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesC = !category || p.category === category;
      return matchesQ && matchesC;
    });
  }, [query, category]);

  return (
    <Layout>
      <HeroSection />

      <section className="mx-auto -mt-6 max-w-6xl px-5 sm:-mt-8">
        <div className="rounded-3xl bg-background p-4 shadow-card sm:p-6">
          <SearchBar
            value={query}
            onChange={setQuery}
            active={category}
            onCategory={setCategory}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Menu
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {category ? category : "Popular Bakes"}
            </h2>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {filtered.length} item{filtered.length === 1 ? "" : "s"}
          </span>
        </motion.div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-3xl bg-card p-10 text-center shadow-soft">
            <p className="text-sm text-muted-foreground">
              No products match your search. Try a different keyword.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 sm:pb-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Customer Love
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              What people are saying
            </h2>
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {initialReviews.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
