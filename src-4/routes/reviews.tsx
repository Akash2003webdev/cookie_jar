import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/Layout";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { RatingStars } from "@/components/RatingStars";
import { initialReviews, bakery, type Review } from "@/lib/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Cookie Jar Bakery" },
      {
        name: "description",
        content:
          "Read what our customers say about Cookie Jar Bakery in Sattur. Share your own review of our cakes, brownies and pastries.",
      },
      { property: "og:title", content: "Customer Reviews | Cookie Jar Bakery" },
      {
        property: "og:description",
        content: "Reviews of Cookie Jar Bakery — cakes, brownies and pastries baked fresh daily.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const avg =
    reviews.reduce((s, r) => s + r.rating, 0) / Math.max(reviews.length, 1);

  return (
    <Layout>
      <Toaster richColors position="top-center" />
      <section className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-card"
        >
          <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
            Customer Reviews
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Loved by {bakery.city.split(",")[0]}
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-4xl font-black">{avg.toFixed(1)}</span>
            <div>
              <RatingStars rating={avg} size={16} />
              <p className="text-xs opacity-90">{reviews.length} reviews</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">All Reviews</h2>
            <div className="space-y-3">
              {reviews.map((r, i) => (
                <ReviewCard key={r.id} review={r} index={i} />
              ))}
            </div>
          </div>
          <div className="md:sticky md:top-20 md:self-start">
            <ReviewForm onAdd={(r) => setReviews((prev) => [r, ...prev])} />
          </div>
        </div>
      </section>
    </Layout>
  );
}