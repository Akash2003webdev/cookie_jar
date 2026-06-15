import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, categoryMeta } from "@/lib/data";

export const Route = createFileRoute("/menu/$category")({
  head: ({ params }) => {
    const category = decodeURIComponent(params.category);
    return {
      meta: [
        { title: `${category} — Cookie Jar Bakery` },
        {
          name: "description",
          content: `Browse our ${category} range at Cookie Jar Bakery, Sattur.`,
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category: rawCategory } = Route.useParams();
  const category = decodeURIComponent(rawCategory);
  const items = products.filter((p) => p.category === category);
  const isKnownCategory = categoryMeta.some((c) => c.name === category);

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-5 py-6 sm:py-10">
        <Link
          to="/menu"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} /> Back to menu
        </Link>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Menu
            </p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {category}
            </h1>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {items.length} item{items.length === 1 ? "" : "s"}
          </span>
        </div>

        {!isKnownCategory ? (
          <div className="mt-8 rounded-3xl bg-card p-10 text-center shadow-soft">
            <p className="text-sm text-muted-foreground">
              That category isn't on our menu.
            </p>
            <Link
              to="/menu"
              className="mt-4 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              Back to menu
            </Link>
          </div>
        ) : items.length === 0 ? (
          <div className="mt-8 rounded-3xl bg-card p-10 text-center shadow-soft">
            <p className="text-sm text-muted-foreground">
              No items in this category yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
