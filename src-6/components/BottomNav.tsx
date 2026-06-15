import { Link } from "@tanstack/react-router";
import { Home, Star, UtensilsCrossed, MapPin } from "lucide-react";
import { bakery } from "@/lib/data";

const item =
  "flex flex-col items-center justify-center gap-0.5 rounded-2xl px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors";
const active = `${item} text-primary`;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-xl sm:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <Link to="/" className={item} activeProps={{ className: active }} activeOptions={{ exact: true }}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/menu" className={item} activeProps={{ className: active }}>
          <UtensilsCrossed size={20} />
          <span>Menu</span>
        </Link>
        <Link to="/reviews" className={item} activeProps={{ className: active }}>
          <Star size={20} />
          <span>Reviews</span>
        </Link>
        <a href={bakery.mapsUrl} target="_blank" rel="noreferrer" className={item}>
          <MapPin size={20} />
          <span>Directions</span>
        </a>
      </div>
    </nav>
  );
}