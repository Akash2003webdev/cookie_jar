import { Search } from "lucide-react";
import { categories } from "@/lib/data";

export function SearchBar({
  value,
  onChange,
  active,
  onCategory,
}: {
  value: string;
  onChange: (v: string) => void;
  active: string | null;
  onCategory: (c: string | null) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for cakes, brownies, pastries…"
          className="w-full rounded-2xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground shadow-soft outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-label="Search products"
        />
      </div>
      <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onCategory(null)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              active === null
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground/70 shadow-soft hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategory(c === active ? null : c)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground/70 shadow-soft hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}