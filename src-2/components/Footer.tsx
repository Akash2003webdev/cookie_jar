import { bakery } from "@/lib/data";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold text-foreground">{bakery.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{bakery.tagline}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Freshly baked cakes, brownies and pastries — crafted daily with premium ingredients.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="text-sm font-semibold text-foreground">Visit Us</h4>
            <p className="flex gap-2 text-muted-foreground">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              {bakery.address}
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock size={16} className="text-primary" /> Closes {bakery.closes}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <a
              href={`tel:${bakery.phoneRaw}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Phone size={16} className="text-primary" /> {bakery.phone}
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cookie Jar Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}