"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import DetailModal from "@/components/ui/DetailModal";


const products = [
  {
    title: "Business Cards",
    description: "Premium spot-UV, foil, and embossed cards that make a powerful first impression.",
    emoji: "💳",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #9b87f5 100%)",
    tag: "Most Popular",
    bg: "from-blue-50 to-purple-50",
    accent: "#58C4F6",
  },
  {
    title: "Flyers",
    description: "Vibrant single or double-sided flyers for events, promos, and marketing campaigns.",
    emoji: "📄",
    gradient: "linear-gradient(135deg, #FF5FA2 0%, #FFD447 100%)",
    tag: "Best Value",
    bg: "from-pink-50 to-yellow-50",
    accent: "#58C4F6",
  },
  {
    title: "Brochures",
    description: "Tri-fold and multi-page brochures that tell your brand story with authority.",
    emoji: "📖",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
    tag: null,
    bg: "from-sky-50 to-pink-50",
    accent: "#58C4F6",
  },
  {
    title: "Roll-Up Banners",
    description: "High-resolution pull-up banners for exhibitions, trade shows, and retail.",
    emoji: "🚩",
    gradient: "linear-gradient(135deg, #FFD447 0%, #FF5FA2 100%)",
    tag: "Fast Delivery",
    bg: "from-yellow-50 to-pink-50",
    accent: "#58C4F6",
  },
  {
    title: "Packaging Boxes",
    description: "Custom-designed packaging that elevates your product and delights customers.",
    emoji: "📦",
    gradient: "linear-gradient(135deg, #5B3A29 0%, #FF5FA2 100%)",
    tag: "Custom",
    bg: "from-orange-50 to-pink-50",
    accent: "#58C4F6",
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
    accent: "#58C4F6",
  },
  {
    title: "Promotional Materials",
    description: "Branded merchandise, corporate gifts, and giveaways that keep you top-of-mind.",
    emoji: "🎁",
    gradient: "linear-gradient(135deg, #FFD447 0%, #58C4F6 100%)",
    tag: "Trending",
    bg: "from-yellow-50 to-sky-50",
    accent: "#58C4F6",
  },
];

const productIcons = ["BC", "FL", "BR", "RB", "BX", "LB", "OS", "PM"];

const ProductImages = [
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
  [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  ],[
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  ],
] as const;

const ProductDetails = {
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
    [
      "Large-format printing for banners, booths, signs, wall graphics, vehicles, and displays.",
      "Durable materials, weather-ready finishes, and installation support when needed.",
      "High-impact visuals prepared at the right resolution and scale for each location.",
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
    [
      "طباعة كبيرة الحجم للبنرات، الأجنحة، اللافتات، الجرافيك الجداري، السيارات، والديسبلاي.",
      "خامات قوية، تشطيبات مناسبة للعوامل الجوية، ودعم تركيب عند الحاجة.",
      "تصميمات عالية التأثير مجهزة بالدقة والمقاس المناسبين لكل موقع.",
    ],
    [
      "طباعة كبيرة الحجم للبنرات، الأجنحة، اللافتات، الجرافيك الجداري، السيارات، والديسبلاي.",
      "خامات قوية، تشطيبات مناسبة للعوامل الجوية، ودعم تركيب عند الحاجة.",
      "تصميمات عالية التأثير مجهزة بالدقة والمقاس المناسبين لكل موقع.",
    ],
  ],
} as const;


export default function ProductsSection() {
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
    const activeProduct =
      selectedProduct === null
        ? null
        : {
            meta: products[selectedProduct],
            content: t.products.items[selectedProduct],
            details: ProductDetails[language][selectedProduct],
            images: ProductImages[selectedProduct],
          };
  

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
            {t.products.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#5B3A29] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.products.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.products.titleAccent}
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed">
            {t.products.description}
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
          {products.map((product, index) => {
            const content = t.products.items[index];

            return (
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
                  {productIcons[index]}
                </motion.div>

                {/* Tag badge */}
                {content.tag && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#5B3A29] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {content.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-bold text-[#5B3A29] text-base mb-2 group-hover:text-[#FF5FA2] transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {content.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {content.description}
                </p>

                <div
                  className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                  style={{ color: "#58C4F6" }}
                  onClick={() => setSelectedProduct(index)}
                >
                  {t.products.learnMore}
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      language === "ar"
                        ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                        : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: product.gradient }}
              />
            </motion.div>
          );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(88,196,246,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold shadow-xl"
            style={{
              background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
            }}
          >
            View All Products
            <ArrowUpRight className="w-4 h-4" />
          </motion.button> */}
        </motion.div>
      </div>
      {activeProduct && (
              <DetailModal
                open={selectedProduct !== null}
                title={activeProduct.content.title}
                tag={activeProduct.content.tag}
                description={activeProduct.content.description}
                details={activeProduct.details}
                images={activeProduct.images}
                accent={activeProduct.meta.accent}
                onClose={() => setSelectedProduct(null)}
              />
            )}
    </section>
  );
}
