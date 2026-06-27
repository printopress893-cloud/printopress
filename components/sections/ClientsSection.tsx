"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const countries = [
  {
    name: "Egypt",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/960px-Flag_of_Egypt.svg.png?_=20250804162936",
  },
  {
    name: "Saudi Arabia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/960px-Flag_of_Saudi_Arabia.svg.png?_=20230323235445",
  },
  {
    name: "United Arab Emirates",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/960px-Flag_of_the_United_Arab_Emirates.svg.png?_=20250417135639",
  },
  {
    name: "Lybia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/960px-Flag_of_Libya.svg.png?_=20260331171131",
  },
  {
    name: "Kuwait",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/960px-Flag_of_Kuwait.svg.png?_=20250829234531",
  },
];


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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex items-center justify-between">
                <h3
                  className="text-xl font-bold text-[#5B3A29]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {country.name}
                </h3>

                
              </div>
            </motion.div>
          ))}
        </motion.div>
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
