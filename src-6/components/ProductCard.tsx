import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { StockBadge } from "./StockBadge";
import { RatingStars } from "./RatingStars";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-card"
    >
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="relative block aspect-[4/3] overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={600}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <StockBadge stock={product.stock} />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-foreground">{product.name}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
              {product.description}
            </p>
          </div>
          <span className="shrink-0 text-base font-extrabold text-primary">
            ₹{product.price}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <RatingStars rating={product.rating} />
            <span className="font-medium text-foreground">{product.rating}</span>
          </div>
          <span>Stock: {product.stock}</span>
        </div>
        <Link
          to="/products/$id"
          params={{ id: product.id }}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
        >
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}