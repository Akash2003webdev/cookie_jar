import { motion } from "framer-motion";
import { Phone, MapPin, Star, Clock, ChevronDown } from "lucide-react";
import { bakery } from "@/lib/data";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";

// Placeholder image imports for the right-side layout cards
// Replace these paths with your actual project assets when ready
import cardImg1 from "@/assets/logo.png";
import cardImg2 from "@/assets/logo.png";

export function HeroSection() {
  // Balanced spring stagger animations for premium touch
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 22 },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#043324] select-none font-sans">
      {/* Background Hero Image with Deep Emerald Theme Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={hero}
          alt=""
          className="size-full object-cover origin-center"
          fetchPriority="high"
          initial={{ scale: 1.1, filter: "blur(4px)" }}
          animate={{ scale: 1.02, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        {/* Cinematic rich dark overlay based on image_af739a.png */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032319]/95 via-[#043324]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#032319]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left Side Content Block */}
          <div className="flex flex-col items-start w-full lg:col-span-8 space-y-8">
            {/* Custom Interface Header Bar: Dynamic Greeting & App Logo */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between w-full max-w-2xl border-b border-white/10 pb-4"
            >
              <div className="text-white">
                <span className="text-sm font-medium text-emerald-400/90 block tracking-wide uppercase">
                  Welcome to {bakery.name}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-0.5">
                  Good evening! Your favorite flavor awaits.
                </h2>
              </div>

              {/* Profile Avatar Spot beautifully customized with your logo */}
              <div className="relative shrink-0 ml-4">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400 to-amber-400 opacity-60 blur-[2px]" />
                <img
                  src={logo}
                  alt="Bakery Logo"
                  className="relative size-12 sm:size-14 rounded-full bg-white p-1 object-contain shadow-md"
                />
              </div>
            </motion.div>

            {/* Premium Headline */}
            <motion.div variants={itemVariants} className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {bakery.tagline || "Baked fresh. Made with love."}
              </h1>
            </motion.div>

            {/* High Fidelity Metadata Information Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md text-white">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <strong className="font-bold">{bakery.rating}</strong>
                <span className="opacity-60">({bakery.reviewCount}+ Reviews)</span>
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md text-white/90">
                <MapPin size={14} className="opacity-70" /> {bakery.city}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 text-emerald-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open Now
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md opacity-75 text-white">
                <Clock size={14} /> Closes {bakery.closes}
              </span>
            </motion.div>

            {/* Action Buttons Container */}
            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col sm:flex-row gap-4 pt-2 sm:w-auto"
            >
              <div className="relative group flex-1 sm:flex-none">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 opacity-40 blur-sm transition duration-300 group-hover:opacity-70" />
                <a
                  href={`tel:${bakery.phoneRaw}`}
                  className="relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] sm:w-auto"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>

              <a
                href={bakery.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/90 px-8 py-3.5 text-sm font-bold text-[#032319] transition-all duration-200 hover:bg-white hover:scale-[1.01] active:scale-[0.98] sm:flex-none"
              >
                <MapPin size={16} /> Directions
              </a>
            </motion.div>
          </div>

          {/* Right Side Composition: Dual Showcase Cards from Image Reference */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:col-span-4 grid grid-cols-2 gap-4 lg:mt-12"
          >
            {/* Premium Card Item 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#032319]/60 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 shadow-xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#043324]">
                <img
                  src={cardImg1}
                  alt="Specialty Item 1"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 px-1 pb-1">
                <h4 className="text-xs font-semibold text-white/90 truncate">Signature Treat</h4>
                <p className="text-[11px] text-emerald-400 mt-0.5 font-bold">Premium Choice</p>
              </div>
            </div>

            {/* Premium Card Item 2 */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#032319]/60 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 shadow-xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#043324]">
                <img
                  src={cardImg2}
                  alt="Specialty Item 2"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 px-1 pb-1">
                <h4 className="text-xs font-semibold text-white/90 truncate">Freshly Baked</h4>
                <p className="text-[11px] text-emerald-400 mt-0.5 font-bold">Daily Special</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Bottom Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white text-[10px] tracking-widest uppercase font-bold"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
