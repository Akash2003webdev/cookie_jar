import { Star } from "lucide-react";

export function RatingStars({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-warning text-warning" : "fill-muted text-muted"}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}