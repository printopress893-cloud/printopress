"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const clients = [
  { name: "Coca-Cola", initials: "CC", color: "#E61C2B" },
  { name: "Samsung", initials: "SM", color: "#1428A0" },
  { name: "Unilever", initials: "UL", color: "#003087" },
  { name: "Pepsi", initials: "PS", color: "#005CFF" },
  { name: "Nestlé", initials: "NE", color: "#009688" },
  { name: "Vodafone", initials: "VF", color: "#E60000" },
  { name: "Etisalat", initials: "ET", color: "#006633" },
  { name: "Zara", initials: "ZA", color: "#111111" },
  { name: "H&M", initials: "HM", color: "#E50010" },
  { name: "Adidas", initials: "AD", color: "#000000" },
  { name: "Nike", initials: "NK", color: "#111111" },
  { name: "Toyota", initials: "TY", color: "#EB0A1E" },
];

// نكرر المصفوفة مرة واحدة فقط لربط أول شركة بآخر شركة بسلاسة
const allClients = [...clients, ...clients];

export default function ClientsSection() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="py-24 lg:py-28 bg-white overflow-hidden">
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
            style={{ color: "#58C4F6" }}
          >
            {t.clients.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#5B3A29] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.clients.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF5FA2 0%, #FFD447 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.clients.titleAccent}
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base">
            {t.clients.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, white, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(-90deg, white, transparent)",
          }}
        />

        {/* Track (تم حذف motion.div والاعتماد التام على كلاسات الـ CSS النظيفة) */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-6 clients-track" // هنا استدعينا حركة الـ CSS المدمجة في ملفك
            style={{
              animation: "scrollLeft 25s linear infinite",
              width: "max-content",
            }}
          >
            {allClients.map((client, i) => (
              <div key={`${client.name}-${i}`} className="flex-shrink-0">
                <div className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 cursor-default select-none">
                  {/* Logo circle */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ background: client.color }}
                  >
                    {client.initials}
                  </div>
                  <span className="text-[#5B3A29] font-semibold text-sm whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p className="text-gray-400 text-sm">
          {t.clients.notePrefix}{" "}
          <span className="font-semibold text-[#00FFFF]">{t.clients.noteAccent}</span>{" "}
          {t.clients.noteSuffix}
        </p>
      </div>
    </section>
  );
}
