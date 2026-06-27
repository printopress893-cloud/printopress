"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";
import { useRef,useEffect } from "react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
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
      className="min-h-screen mt-20 md:mt-0 flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {t.hero.headlineTop}
              <br />
              <span className="text-cyan-500">
                {t.hero.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => handleScroll("#services")}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-white font-semibold hover:scale-105 transition"
              >
                {t.hero.servicesCta}

                <ArrowRight
                  className={`w-4 h-4 ${
                    language === "ar" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <button
                onClick={() => handleScroll("#products")}
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
              >
                <Play className="w-4 h-4" />
                {t.hero.workCta}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
          className="w-full mt-[70px] p-4 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl  overflow-hidden shadow-2xl border border-gray-200">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted // يبدأ صامتاً إجبارياً لتفادي الحظر الفوري عند الـ Refresh
                playsInline
                className="w-full h-full object-contain" // يضمن ظهور أبعاد الفيديو كاملة دون قص أو تمطيط
              >
                <source
                  src="https://res.cloudinary.com/dniuspri6/video/upload/v1782246435/my-video_lo0iv7.mp4"
                  type="video/mp4"                 />
              </video>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}