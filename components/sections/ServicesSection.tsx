"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Printer,
  Package,
  Megaphone,
  TrendingUp,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Palette,
    title: "Branding",
    description:
      "Build a brand identity that tells your story. From logo design to full visual systems — we create brands people remember and trust.",
    gradient: "linear-gradient(135deg, #58C4F6, #FF5FA2)",
    bg: "rgba(88,196,246,0.07)",
    accent: "#58C4F6",
    tag: "Identity",
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    description:
      "State-of-the-art digital and offset printing with meticulous quality control. Every detail, every color — pixel perfect.",
    gradient: "linear-gradient(135deg, #FF5FA2, #FFD447)",
    bg: "rgba(255,95,162,0.07)",
    accent: "#FF5FA2",
    tag: "Production",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Packaging that protects your product and amplifies your brand. We design boxes, bags, and wrappers that convert at the shelf.",
    gradient: "linear-gradient(135deg, #FFD447, #58C4F6)",
    bg: "rgba(255,212,71,0.07)",
    accent: "#FFD447",
    tag: "Design",
  },
  {
    icon: Megaphone,
    title: "Advertising Campaigns",
    description:
      "Strategic advertising campaigns across print and digital that cut through the noise and get your message seen.",
    gradient: "linear-gradient(135deg, #5B3A29, #FF5FA2)",
    bg: "rgba(91,58,41,0.07)",
    accent: "#5B3A29",
    tag: "Strategy",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "SEO, social media, PPC, and content marketing that grow your digital presence and drive qualified leads.",
    gradient: "linear-gradient(135deg, #58C4F6, #5B3A29)",
    bg: "rgba(88,196,246,0.07)",
    accent: "#58C4F6",
    tag: "Growth",
  },
  {
    icon: Maximize2,
    title: "Large Format Printing",
    description:
      "Billboards, banners, vehicle wraps, exhibition stands — commanding visual presence at any scale, indoors or out.",
    gradient: "linear-gradient(135deg, #FF5FA2, #58C4F6)",
    bg: "rgba(255,95,162,0.07)",
    accent: "#FF5FA2",
    tag: "Large Scale",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fafbff 0%, #fff5fb 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-20 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #58C4F6, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5FA2, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#FF5FA2" }}
          >
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#5B3A29] leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Services That Drive{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Results
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg leading-relaxed"
          >
            A full-spectrum creative studio offering everything from brand
            conception to final production. We handle the entire journey.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: service.bg }}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                style={{ background: service.gradient }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Tag */}
              <span
                className="inline-block text-xs font-semibold tracking-wider uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                  background: `${service.accent}18`,
                  color: service.accent,
                }}
              >
                {service.tag}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-bold text-[#5B3A29] mb-3 group-hover:text-[#58C4F6] transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow link */}
              <div
                className="flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3"
                style={{ color: service.accent }}
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"
                style={{ background: service.gradient }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
