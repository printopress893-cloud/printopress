"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const products = [
  {
    title: "Business Cards",
    description: "Premium spot-UV, foil, and embossed cards that make a powerful first impression.",
    emoji: "💳",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #9b87f5 100%)",
    tag: "Most Popular",
    bg: "from-blue-50 to-purple-50",
  },
  {
    title: "Flyers",
    description: "Vibrant single or double-sided flyers for events, promos, and marketing campaigns.",
    emoji: "📄",
    gradient: "linear-gradient(135deg, #FF5FA2 0%, #FFD447 100%)",
    tag: "Best Value",
    bg: "from-pink-50 to-yellow-50",
  },
  {
    title: "Brochures",
    description: "Tri-fold and multi-page brochures that tell your brand story with authority.",
    emoji: "📖",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
    tag: null,
    bg: "from-sky-50 to-pink-50",
  },
  {
    title: "Roll-Up Banners",
    description: "High-resolution pull-up banners for exhibitions, trade shows, and retail.",
    emoji: "🚩",
    gradient: "linear-gradient(135deg, #FFD447 0%, #FF5FA2 100%)",
    tag: "Fast Delivery",
    bg: "from-yellow-50 to-pink-50",
  },
  {
    title: "Packaging Boxes",
    description: "Custom-designed packaging that elevates your product and delights customers.",
    emoji: "📦",
    gradient: "linear-gradient(135deg, #5B3A29 0%, #FF5FA2 100%)",
    tag: "Custom",
    bg: "from-orange-50 to-pink-50",
  },
  {
    title: "Stickers & Labels",
    description: "Die-cut stickers, labels, and decals in any shape — waterproof and long-lasting.",
    emoji: "🏷️",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FFD447 100%)",
    tag: null,
    bg: "from-blue-50 to-yellow-50",
  },
  {
    title: "Outdoor Signs",
    description: "Channel letters, LED signs, and hoarding boards that demand attention.",
    emoji: "🔆",
    gradient: "linear-gradient(135deg, #FF5FA2 0%, #5B3A29 100%)",
    tag: "Premium",
    bg: "from-pink-50 to-orange-50",
  },
  {
    title: "Promotional Materials",
    description: "Branded merchandise, corporate gifts, and giveaways that keep you top-of-mind.",
    emoji: "🎁",
    gradient: "linear-gradient(135deg, #FFD447 0%, #58C4F6 100%)",
    tag: "Trending",
    bg: "from-yellow-50 to-sky-50",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fff8f0 0%, #f0faff 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FFD447, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #58C4F6, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#FFD447" }}
          >
            Our Products
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#5B3A29] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Premium Print{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Products
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed">
            Every product is crafted with precision, using premium materials and
            cutting-edge printing technology.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative bg-gradient-to-br ${product.bg} rounded-3xl overflow-hidden border border-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >
              {/* Product image area */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: product.gradient }}
              >
                {/* Abstract visual pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                  }}
                />

                {/* Emoji icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-6xl relative z-10 filter drop-shadow-lg"
                >
                  {product.emoji}
                </motion.div>

                {/* Tag badge */}
                {product.tag && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#5B3A29] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-bold text-[#5B3A29] text-base mb-2 group-hover:text-[#FF5FA2] transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {product.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {product.description}
                </p>

                <div
                  className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                  style={{ color: "#58C4F6" }}
                >
                  Get Quote
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: product.gradient }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(88,196,246,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold shadow-xl"
            style={{
              background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
            }}
          >
            View All Products
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
