"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";
import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // 1. تحديد نوع الـ useRef ليتوافق مع TypeScript
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 2. حالة لإدارة أيقونة نص كتم الصوت إذا تفاعل المستخدم يدوياً
  const [mutedState, setMutedState] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // دالة تفاعلية ذكية لتخطي حظر المتصفحات وتشغيل الصوت مع أول حركة للمستخدم
    const enableSoundAndPlay = () => {
      video.muted = false;
      setMutedState(false);
      video.play().catch((err) => {
        console.log("المتصفح انتظر حركة إضافية لتشغيل الصوت:", err);
      });

      // تنظيف الـ Listeners فور النجاح لعدم تكرار تشغيل الكود
      window.removeEventListener("mousemove", enableSoundAndPlay);
      window.removeEventListener("scroll", enableSoundAndPlay);
      window.removeEventListener("touchstart", enableSoundAndPlay);
    };

    window.addEventListener("mousemove", enableSoundAndPlay);
    window.addEventListener("scroll", enableSoundAndPlay);
    window.addEventListener("touchstart", enableSoundAndPlay);

    return () => {
      window.removeEventListener("mousemove", enableSoundAndPlay);
      window.removeEventListener("scroll", enableSoundAndPlay);
      window.removeEventListener("touchstart", enableSoundAndPlay);
    };
  }, []);

  // دالة تتيح للمستخدم كتم أو تشغيل الصوت يدوياً من الزر إذا أراد
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMutedState(videoRef.current.muted);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={mutedState} // يبدأ مكتوماً برمجياً لكي يقبله المتصفح، ثم يتم تفعيله بالحركة
          playsInline
          className="w-full h-full object-contain" // ليظهر كامل الفيديو دون تمطيط
        >
          <source src="/videos/my-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* زر التحكم بالصوت الذكي أسفل اليمين أو اليسار حسب لغة الموقع */}
        <button
          onClick={toggleSound}
          className={`absolute bottom-6 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 select-none flex items-center gap-2 shadow-lg border border-white/10 ${
            language === "ar" ? "left-6" : "right-6"
          }`}
        >
          {mutedState ? "🔈 تشغيل الصوت" : "🔊 كتم الصوت"}
        </button>
      </div>

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[8%] w-20 h-20 rounded-2xl opacity-20 border border-[#58C4F6]/60"
        style={{ background: "rgba(88,196,246,0.15)" }}
      />
      
      {/* تم إصلاح السطر بالأسفل وإضافة القيم الصحيحة للـ y وحذف الكلمات العربية المسببة للخطأ */}
      <motion.div
        animate={{ y:[0, -25, 0] , rotate: [0, -8, 0] }} 
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
      </motion.div>
    </section>
  );
}
