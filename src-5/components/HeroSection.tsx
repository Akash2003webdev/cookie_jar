import { motion } from "framer-motion";
import { bakery } from "@/lib/data";
import logo from "@/assets/logo.png";
import shopImg from "@/assets/hero.png";

export function HeroSection() {
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
    <section className="relative bg-primary select-none font-sans">
      <div className="mx-auto max-w-6xl w-full px-5 pt-8 pb-10 sm:pb-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Greeting header bar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between"
          >
            <div className="text-white">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Good evening, {bakery.name}!
              </h2>
              <p className="text-sm text-white/70 mt-0.5">
                Your favorite bakes await.
              </p>
            </div>

            <div className="relative shrink-0 ml-4">
              <img
                src={logo}
                alt={`${bakery.name} logo`}
                className="relative size-12 sm:size-14 rounded-full bg-white p-1 object-contain shadow-md"
              />
            </div>
          </motion.div>

          {/* Banner: single shop photo */}
          <motion.div variants={itemVariants}>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
              <img
                src={shopImg}
                alt={`${bakery.name} shop front`}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                <p className="text-lg sm:text-2xl font-extrabold tracking-tight leading-tight">
                  {bakery.name}
                </p>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {bakery.tagline || "Baked fresh. Made with love."}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}