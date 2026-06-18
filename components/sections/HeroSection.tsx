"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function HeroSection() {
  const { t, language } = useLanguage();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    poster="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80"
  >
    {/* تم تغيير اللينك بمسار الفيديو المحلي في فولدر public */}
    <source
      src="/videos/my-video.mp4" 
      type="video/mp4"
    />
   
  </video>
  
  {/* الـ Overlays بتوعك زي ما هما */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-[#5B3A29]/85 via-[#1a1a2e]/80 to-[#16213e]/85" />
  <div
    className="absolute inset-0 opacity-30"
    style={{
      background:
        "radial-gradient(ellipse at 20% 50%, rgba(88,196,246,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(255,95,162,0.3) 0%, transparent 60%)",
    }}
  /> */}
</div>
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[8%] w-20 h-20 rounded-2xl opacity-20 border border-[#58C4F6]/60"
        style={{ background: "rgba(88,196,246,0.15)" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[6%] w-14 h-14 rounded-full opacity-25 border border-[#FF5FA2]/50"
        style={{ background: "rgba(255,95,162,0.15)" }}
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[28%] left-[12%] w-10 h-10 rounded-lg opacity-20 border border-[#FFD447]/50"
        style={{ background: "rgba(255,212,71,0.15)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(88,196,246,0.3), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,95,162,0.25), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Badge */}
        {/* <motion.div variants={fadeIn} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20 backdrop-blur-sm"
            style={{ background: "rgba(88,196,246,0.2)" }}
          >
            <Sparkles className="w-4 h-4 text-[#FFD447]" />
            Premium Creative Agency — Est. 2014
          </span>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {t.hero.headlineTop}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 60%, #FFD447 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.hero.headlineAccent}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 leading-relaxed mb-10"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => handleScroll("#services")}
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
              boxShadow: "0 20px 60px rgba(88,196,246,0.35)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 70px rgba(88,196,246,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            {t.hero.servicesCta}
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                language === "ar"
                  ? "rotate-180 group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
          </motion.button>

          <motion.button
            onClick={() => handleScroll("#products")}
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base border border-white/30 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.1)" }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Play className="w-4 h-4" />
            {t.hero.workCta}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeIn}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Stats floating bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-4xl px-4"
      >
        <div
          className="rounded-2xl border border-white/15 backdrop-blur-xl px-8 py-5 flex flex-wrap justify-around gap-6"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: "linear-gradient(135deg, #58C4F6, #FFD447)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
