"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const stats = [
  { icon: Award, value: 500, suffix: "+", label: "Projects Delivered", color: "#00FFFF" },
  { icon: Users, value: 120, suffix: "+", label: "Happy Clients", color: "#FF00FF" },
  { icon: Target, value: 10, suffix: "+", label: "Years Experience", color: "#FFFF00" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #58C4F6, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5FA2, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Text + Image */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left: Text */}
          <motion.div variants={fadeLeft} className="order-2 lg:order-1">
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00FFFF" }}
            >
              {t.about.eyebrow}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#000000] leading-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {t.about.title}{" "}
              <span
                style={{ color: "#FF00FF" }}
              >
                {t.about.titleAccent}
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div
                className="flex gap-4 p-5 rounded-2xl border border-gray-100"
                style={{ background: "linear-gradient(135deg, rgba(88,196,246,0.05), rgba(255,95,162,0.05))" }}
              >
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #58C4F6, #FF5FA2)" }}
                >
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#5B3A29] mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {t.about.missionTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.about.mission}
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4 p-5 rounded-2xl border border-gray-100"
                style={{ background: "linear-gradient(135deg, rgba(255,212,71,0.05), rgba(255,95,162,0.05))" }}
              >
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #FFD447, #FF5FA2)" }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#5B3A29] mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {t.about.visionTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.about.vision}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={fadeRight}
            className="order-1 lg:order-2 relative"
          >
            <div
                className="relative"
              >
                {/* Main image block */}
                <img
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    background: "#000000",
                    minHeight: "480px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  src="https://res.cloudinary.com/dniuspri6/image/upload/v1782375055/WhatsApp_Image_2026-06-24_at_6.56.13_PM_vwjqgp.jpg"
                  alt="Brand Visual"
                />
                {/* Abstract brand visual */}
                <div className="relative w-full h-full flex items-center justify-center p-10">
                  {/* Big letter P */}
                  
                  {/* Floating colored circles */}
                  <div
                  className="absolute top-10 left-10 w-24 h-24 rounded-full" style={{ background: "#00FFFF", filter: "blur(2px)" }} />
                <div
                  className="absolute bottom-10 right-10 w-20 h-20 rounded-full" style={{ background: "#FF00FF", filter: "blur(2px)" }} />
                </div>
              

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100"
              >
                {/* <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "linear-gradient(135deg, #FFD447, #FF5FA2)" }}
                  >
                    🏆
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Recognized by</div>
                    <div className="text-sm font-bold text-[#5B3A29]">Top Agency 2024</div>
                  </div>
                </div> */}
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100"
              >
                <div
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "#00FFFF" }}
                  >
                    ✨
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{t.about.satisfaction}</div>
                    <div className="text-sm font-bold text-[#000000]">{t.about.rating}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-6 rounded-3xl text-center shadow-lg border border-gray-100 bg-white overflow-hidden group cursor-default"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)`,
                }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${stat.color}18`, color: stat.color }}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div
                className="text-4xl font-bold mb-1"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: stat.color,
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 text-sm font-medium">{t.about.stats[i]}</div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
