import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { StockBadge } from "@/components/StockBadge";
import { RatingStars } from "@/components/RatingStars";
import { ReviewCard } from "@/components/ReviewCard";
import { products, initialReviews, bakery } from "@/lib/data";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Cookie Jar Bakery` : "Product | Cookie Jar";
    const desc = p?.description ?? "Fresh bakery products at Cookie Jar.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-md px-5 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The item you're looking for isn't on our menu.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
        >
          Back to menu
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="mx-auto max-w-md px-5 py-20 text-center">
        <h1 className="text-xl font-bold text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <Layout>
      <article className="mx-auto max-w-5xl px-5 py-6 sm:py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} /> Back to menu
        </Link>

        <div className="mt-5 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-3xl bg-card shadow-card"
          >
            <img
              src={product.image}
              alt={product.name}
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
                {product.category}
              </span>
              <StockBadge stock={product.stock} />
            </div>

            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 text-sm">
              <RatingStars rating={product.rating} size={16} />
              <span className="font-semibold text-foreground">{product.rating}</span>
              <span className="text-muted-foreground">· Stock: {product.stock} Available</span>
            </div>

            <div className="flex items-end gap-2">
              <span className="text-4xl font-extrabold text-primary">₹{product.price}</span>
              <span className="pb-1 text-xs font-medium text-muted-foreground">per piece</span>
            </div>

            <div>
              <h2 className="text-sm font-bold text-foreground">Description</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                {product.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-bold text-foreground">Features</h2>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {product.features.map((f: string) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 rounded-2xl bg-card px-3 py-2 text-xs font-medium text-foreground/80 shadow-soft"
                  >
                    <Check size={14} className="text-success" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2 flex flex-col gap-2 rounded-3xl bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} className="text-primary" /> Order via call · Closes {bakery.closes}
              </div>
              <a
                href={`tel:${bakery.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:bg-primary/90 active:scale-[0.98]"
              >
                <Phone size={16} /> Call to Order
              </a>
            </div>
          </motion.div>
        </div>

        <section className="mt-12">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-foreground">Customer Reviews</h2>
            <Link
              to="/reviews"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {initialReviews.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}