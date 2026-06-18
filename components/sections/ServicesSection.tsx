"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
import { useLanguage } from "@/lib/i18n";
import DetailModal from "@/components/ui/DetailModal";

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

const serviceImages = [
  [
    "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=1200&q=80",
    "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=80",
    "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=1200&q=80",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  ],
] as const;

const serviceDetails = {
  en: [
    [
      "Complete brand strategy, logo design, color palette, typography, and visual guidelines.",
      "Ready-to-use assets for social media, packaging, signage, stationery, and campaigns.",
      "Built to keep your brand consistent across print, digital, and physical touchpoints.",
    ],
    [
      "Digital and offset production for small batches, high-volume orders, and urgent jobs.",
      "Color matching, paper selection, finishing options, and quality checks before delivery.",
      "Ideal for cards, flyers, catalogs, brochures, folders, menus, and corporate material.",
    ],
    [
      "Structural and visual packaging concepts for boxes, bags, sleeves, labels, and wraps.",
      "Material recommendations, print-ready dielines, mockups, and production supervision.",
      "Designed to protect the product and stand out clearly on shelves and deliveries.",
    ],
    [
      "Campaign concepts, key visuals, copy direction, print assets, and digital adaptations.",
      "Media-ready designs for outdoor, social media, retail, events, and launch campaigns.",
      "Clear messaging that connects your offer with the audience you want to reach.",
    ],
    [
      "Social media design, content direction, ads, landing visuals, and performance reporting.",
      "SEO-friendly content and campaign assets that support lead generation and awareness.",
      "A practical growth plan shaped around your budget, audience, and business goals.",
    ],
    [
      "Large-format printing for banners, booths, signs, wall graphics, vehicles, and displays.",
      "Durable materials, weather-ready finishes, and installation support when needed.",
      "High-impact visuals prepared at the right resolution and scale for each location.",
    ],
  ],
  ar: [
    [
      "استراتيجية علامة كاملة تشمل الشعار، الألوان، الخطوط، وقواعد الاستخدام البصري.",
      "ملفات جاهزة للسوشيال ميديا، التغليف، اللافتات، المطبوعات، والحملات.",
      "نحافظ على اتساق شكل العلامة في كل نقطة ظهور مطبوعة أو رقمية أو ميدانية.",
    ],
    [
      "طباعة ديجيتال وأوفست للطلبات الصغيرة والكميات الكبيرة والأعمال العاجلة.",
      "مطابقة ألوان، اختيار خامات، تشطيبات متنوعة، ومراجعة جودة قبل التسليم.",
      "مناسبة للكروت، الفلايرات، الكتالوجات، البروشورات، الفولدرات، والمنيوهات.",
    ],
    [
      "تصميم هيكلي وبصري للعلب، الأكياس، الأغطية، الليبلز، والتغليف المخصص.",
      "اقتراح خامات، داي لاين جاهز للطباعة، موك آب، ومتابعة تنفيذ الإنتاج.",
      "تصميم يحمي المنتج ويجعله واضحا ومميزا على الرف أو أثناء التوصيل.",
    ],
    [
      "أفكار حملات، Key Visual، اتجاه كتابة، مواد مطبوعة، ونسخ رقمية للحملة.",
      "تصميمات جاهزة للخارجي، السوشيال ميديا، نقاط البيع، الفعاليات، والإطلاقات.",
      "رسالة واضحة تربط عرضك بالجمهور الذي تريد الوصول إليه.",
    ],
    [
      "تصميم سوشيال ميديا، اتجاه محتوى، إعلانات، واجهات هبوط، وتقارير أداء.",
      "محتوى وأصول تسويقية تساعد على الوعي بالعلامة وجذب العملاء المحتملين.",
      "خطة نمو عملية مبنية على ميزانيتك وجمهورك وأهداف مشروعك.",
    ],
    [
      "طباعة كبيرة الحجم للبنرات، الأجنحة، اللافتات، الجرافيك الجداري، السيارات، والديسبلاي.",
      "خامات قوية، تشطيبات مناسبة للعوامل الجوية، ودعم تركيب عند الحاجة.",
      "تصميمات عالية التأثير مجهزة بالدقة والمقاس المناسبين لكل موقع.",
    ],
  ],
} as const;

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const activeService =
    selectedService === null
      ? null
      : {
          meta: services[selectedService],
          content: t.services.items[selectedService],
          details: serviceDetails[language][selectedService],
          images: serviceImages[selectedService],
        };

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
            {t.services.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#5B3A29] leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.services.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.services.titleAccent}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg leading-relaxed"
          >
            {t.services.description}
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
          {services.map((service, index) => {
            const content = t.services.items[index];

            return (
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
                {content.tag}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-bold text-[#5B3A29] mb-3 group-hover:text-[#58C4F6] transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {content.description}
              </p>

              {/* Arrow link */}
              <button
                type="button"
                onClick={() => setSelectedService(index)}
                className="relative z-10 flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3"
                style={{ color: service.accent }}
              >
                {t.services.learnMore}
                <ArrowUpRight
                  className={`w-4 h-4 transition-transform ${
                    language === "ar"
                      ? "group-hover:-translate-x-1 group-hover:-translate-y-1"
                      : "group-hover:translate-x-1 group-hover:-translate-y-1"
                  }`}
                />
              </button>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"
                style={{ background: service.gradient }}
              />
            </motion.div>
          );
          })}
        </motion.div>
      </div>

      {activeService && (
        <DetailModal
          open={selectedService !== null}
          title={activeService.content.title}
          tag={activeService.content.tag}
          description={activeService.content.description}
          details={activeService.details}
          images={activeService.images}
          accent={activeService.meta.accent}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
