import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { categoryMeta, products } from "@/lib/data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cookie Jar Bakery" },
      {
        name: "description",
        content:
          "Browse our menu — cakes, brownies, pastries, desserts, cookies and birthday cakes at Cookie Jar Bakery, Sattur.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Explore
        </p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Our Menu
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick a category to see what's freshly baked.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categoryMeta.map((c, i) => {
            const count = products.filter((p) => p.category === c.name).length;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  to="/menu/$category"
                  params={{ category: c.name }}
                  className="group block overflow-hidden rounded-3xl bg-card shadow-soft transition-transform active:scale-[0.98]"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-foreground">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {count} item{count === 1 ? "" : "s"}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
