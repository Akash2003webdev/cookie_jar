import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import type { Review } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(60),
  rating: z.number().int().min(1, "Please select a rating").max(5),
  message: z.string().trim().min(5, "Review must be at least 5 characters").max(500),
});

export function ReviewForm({ onAdd }: { onAdd: (r: Review) => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, rating, message });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    onAdd({
      id: crypto.randomUUID(),
      name: parsed.data.name,
      rating: parsed.data.rating,
      message: parsed.data.message,
      date: "Just now",
    });
    setName("");
    setRating(0);
    setMessage("");
    toast.success("Thank you! Your review has been added.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-card p-5 shadow-soft">
      <h3 className="text-lg font-bold text-foreground">Share your experience</h3>
      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
          Your Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          maxLength={60}
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="space-y-2">
        <span className="block text-xs font-semibold text-foreground/80">Select Rating</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => {
            const filled = (hover || rating) >= n;
            return (
              <button
                key={n}
                type="button"
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(n)}
                aria-label={`Rate ${n} stars`}
                className="rounded-full p-1 transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  size={28}
                  className={filled ? "fill-warning text-warning" : "fill-muted text-muted"}
                  strokeWidth={1.5}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
          Write Your Review
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Your Review"
          rows={4}
          maxLength={500}
          className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:bg-primary/90 active:scale-[0.98]"
      >
        Submit Review
      </button>
    </form>
  );
}