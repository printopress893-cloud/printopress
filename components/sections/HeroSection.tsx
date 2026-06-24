"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";
import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  // دالة تشغيل الصوت الإجبارية بمجرد حدوث نقرة معتمدة داخل المتصفح
  const handleForceUnmute = () => {
    const video = videoRef.current;
    if (video && video.muted) {
      video.muted = false;
      video.volume = 1.0;
      video.play().catch((err) => console.log("خطأ في إعادة التشغيل:", err));
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // تشغيل مبدئي صامت حتى يقبله المتصفح في الخلفية فوراً
    video.play().catch(() => console.log("في انتظار تفاعل المستخدم..."));

    // الاستماع للنقرات العامة بداخل الصفحة لفك الكتم تلقائياً
    window.addEventListener("click", handleForceUnmute);
    window.addEventListener("touchstart", handleForceUnmute);

    return () => {
      window.removeEventListener("click", handleForceUnmute);
      window.removeEventListener("touchstart", handleForceUnmute);
    };
  }, []);

  return (
    <section
      id="home"
      onClick={handleForceUnmute} // تضمن فك الكتم فوراً بمجرد أن يضغط الزائر على أي مكان فارغ في الـ Hero
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black cursor-pointer"
    >
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted // يبدأ صامتاً إجبارياً لتفادي الحظر الفوري عند الـ Refresh
          playsInline
          className="w-full h-full object-contain" // يضمن ظهور أبعاد الفيديو كاملة دون قص أو تمطيط
        >
          <source src="https://res.cloudinary.com/dniuspri6/video/upload/v1782246435/my-video_lo0iv7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[8%] w-20 h-20 rounded-2xl opacity-20 border border-[#00FFFF]/60 pointer-events-none"
        style={{ background: "rgba(0,255,255,0.15)" }}
      />
      <motion.div
        animate={{ rotate: [0, -8, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[6%] w-14 h-14 rounded-full opacity-25 border border-[#FF00FF]/50 pointer-events-none"
        style={{ background: "rgba(255,0,255,0.15)" }}
      />

      {/* Hero Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Headline */}
        <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.hero.headlineTop}
            <br />
            <span
              style={{ color: "#00FFFF" }}
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
            onClick={(e) => {
              e.stopPropagation(); // منع تداخل النقرات
              handleForceUnmute(); // تشغيل الصوت فوراً عند الضغط
              handleScroll("#services");
            }}
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base shadow-2xl"
            style={{
              background: "#00FFFF",
              boxShadow: "0 20px 60px rgba(0,255,255,0.35)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 70px rgba(0,255,255,0.5)",
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
            onClick={(e) => {
              e.stopPropagation();
              handleForceUnmute(); // تشغيل الصوت فوراً عند الضغط
              handleScroll("#products");
            }}
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
      </motion.div>
    </section>
  );
}
