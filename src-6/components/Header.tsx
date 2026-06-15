import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 select-none">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between rounded-full border border-white/10 bg-background/60 px-5 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:bg-black/40 transition-all duration-300">
        
        {/* Brand Logo Identity - Scaled Up for Prominence */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-400 opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-60" />
            <img 
              src={logo} 
              alt="Cookie Jar logo" 
              width={100} 
              height={100} 
              className="relative size-14 sm:size-16 rounded-full bg-white/90 p-0.5 object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          {/* Custom Elegant Typography Layout */}
          <span
            className="text-3xl sm:text-3xl tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Cookie Jar
          </span>
        </Link>

        {/* Premium Serif Navigation Links */}
        <nav className="flex items-center gap-2 text-sm font-serif font-medium">
          <Link
            to="/menu"
            className="rounded-full px-4 py-1.5 text-foreground/70 tracking-wide transition-all duration-200 hover:bg-foreground/5 hover:text-foreground"
            activeProps={{ 
              className: "rounded-full px-4 py-1.5 bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground font-bold" 
            }}
          >
            Menu
          </Link>
          <Link
            to="/reviews"
            className="rounded-full px-4 py-1.5 text-foreground/70 tracking-wide transition-all duration-200 hover:bg-foreground/5 hover:text-foreground"
            activeProps={{ 
              className: "rounded-full px-4 py-1.5 bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground font-bold" 
            }}
          >
            Reviews
          </Link>
        </nav>

      </div>
    </header>
  );
}