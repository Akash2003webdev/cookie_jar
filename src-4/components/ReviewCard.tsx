import { motion } from "framer-motion";
import type { Review } from "@/lib/data";
import { RatingStars } from "./RatingStars";

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="rounded-3xl bg-card p-5 shadow-soft"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {review.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
        </div>
        <RatingStars rating={review.rating} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{review.message}</p>
    </motion.div>
  );
}