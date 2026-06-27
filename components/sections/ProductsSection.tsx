"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import DetailModal from "@/components/ui/DetailModal";


const products = [
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Books",
    description: "Professional printing and binding for educational, academic, and commercial books.",
    emoji: "📚",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #9b87f5 100%)",
    tag: "Best Seller",
    bg: "from-blue-50 to-purple-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Brochures",
    description: "High-quality brochures designed for marketing campaigns and business presentations.",
    emoji: "📖",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
    tag: "Popular",
    bg: "from-sky-50 to-pink-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Certificates",
    description: "Premium certificates for recognition, awards, and achievements.",
    emoji: "🏆",
    gradient: "linear-gradient(135deg, #FFD447 0%, #58C4F6 100%)",
    tag: "High Quality",
    bg: "from-yellow-50 to-sky-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Flyers",
    description: "Eye-catching flyers that help promote your business, events, and special offers.",
    emoji: "📄",
    gradient: "linear-gradient(135deg, #FF5FA2 0%, #FFD447 100%)",
    tag: "Best Value",
    bg: "from-pink-50 to-yellow-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Catalogs",
    description: "Professional catalogs that showcase products and services in an elegant way.",
    emoji: "📑",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FFD447 100%)",
    tag: null,
    bg: "from-blue-50 to-yellow-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Business Cards",
    description: "Premium business cards that strengthen your brand identity and leave a lasting impression.",
    emoji: "💳",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #9b87f5 100%)",
    tag: "Professional",
    bg: "from-blue-50 to-purple-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Envelopes",
    description: "Custom branded envelopes designed for professional business correspondence.",
    emoji: "✉️",
    gradient: "linear-gradient(135deg, #FFD447 0%, #FF5FA2 100%)",
    tag: null,
    bg: "from-yellow-50 to-pink-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Letterheads",
    description: "Professional letterheads that enhance your corporate identity.",
    emoji: "📝",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
    tag: null,
    bg: "from-sky-50 to-pink-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Folders",
    description: "Presentation folders for organizing documents and business materials.",
    emoji: "📁",
    gradient: "linear-gradient(135deg, #5B3A29 0%, #58C4F6 100%)",
    tag: "Corporate",
    bg: "from-orange-50 to-blue-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Folded Flyers",
    description: "Informative folded flyers available in multiple formats and sizes.",
    emoji: "📰",
    gradient: "linear-gradient(135deg, #FFD447 0%, #58C4F6 100%)",
    tag: null,
    bg: "from-yellow-50 to-sky-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Custom Mugs",
    description: "High-quality mug printing for promotional campaigns and corporate gifts.",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #FF5FA2 0%, #58C4F6 100%)",
    tag: "Popular",
    bg: "from-pink-50 to-sky-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Custom T-Shirts",
    description: "Premium t-shirt printing with durable colors and sharp designs.",
    emoji: "👕",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #FFD447 100%)",
    tag: "Custom",
    bg: "from-blue-50 to-yellow-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Promotional Caps",
    description: "Branded caps ideal for events, giveaways, and marketing campaigns.",
    emoji: "🧢",
    gradient: "linear-gradient(135deg, #FFD447 0%, #FF5FA2 100%)",
    tag: "Custom",
    bg: "from-yellow-50 to-pink-50",
    accent: "#58C4F6",
  },
  {
  image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Branded Pens",
    description: "Custom pens featuring your logo for practical and effective promotion.",
    emoji: "🖊️",
    gradient: "linear-gradient(135deg, #58C4F6 0%, #9b87f5 100%)",
    tag: null,
    bg: "from-blue-50 to-purple-50",
    accent: "#58C4F6",
  },
];

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
"Professional printing and binding for educational, academic, and commercial books.",
"Available in multiple sizes, paper types, and binding options to suit your requirements.",
"Produced with sharp text, accurate colors, and durable finishing for long-term use.",
],
[
"High-quality brochures designed to showcase products, services, and company profiles.",
"Available in various fold styles, paper stocks, and finishing options.",
"Ideal for exhibitions, presentations, and marketing campaigns.",
],
[
"Premium certificates for recognition, achievements, training programs, and awards.",
"Printed on high-quality paper with optional security and finishing features.",
"Designed to create a professional and memorable impression.",
],
[
"Eye-catching flyers for promotions, events, special offers, and marketing campaigns.",
"Available in different sizes, paper weights, and finishing options.",
"A cost-effective solution for reaching a wide audience quickly.",
],
[
"Professional catalogs that present products and services in a clear and attractive format.",
"Available with multiple page counts, binding styles, and premium finishes.",
"Perfect for sales presentations, showrooms, and exhibitions.",
],
[
"Premium business cards designed to strengthen your brand identity.",
"Available with spot UV, lamination, embossing, foil, and custom finishes.",
"Created to leave a lasting impression on clients and partners.",
],
[
"Custom branded envelopes suitable for official and corporate correspondence.",
"Available in multiple sizes with high-quality printing and finishing.",
"Designed to reinforce your professional image and brand identity.",
],
[
"Professional letterheads for business communications and official documents.",
"Printed with precise colors and premium paper options.",
"Helps maintain a consistent and professional corporate identity.",
],
[
"Presentation folders designed to organize proposals, contracts, and company documents.",
"Available with custom pockets, finishes, and branding elements.",
"Ideal for meetings, presentations, and corporate events.",
],
[
"Folded flyers available in bi-fold, tri-fold, and custom formats.",
"Perfect for promotional, educational, and informational materials.",
"Printed with vibrant colors and professional finishing options.",
],
[
"Custom mug printing for promotional campaigns, gifts, and corporate branding.",
"High-quality printing ensures vibrant and long-lasting designs.",
"A practical promotional product that keeps your brand visible daily.",
],
[
"Professional t-shirt printing for events, teams, businesses, and promotions.",
"Available in multiple sizes, colors, and printing methods.",
"Durable prints designed for comfort and long-term use.",
],
[
"Branded promotional caps for marketing campaigns, giveaways, and events.",
"Printed or embroidered with company logos and custom artwork.",
"A stylish way to increase brand visibility and recognition.",
],
[
"Custom pens featuring your logo and corporate identity.",
"Affordable promotional products suitable for events and business giveaways.",
"An effective marketing tool that keeps your brand in customers' hands.",
],
],

ar: [
[
"طباعة وتجليد الكتب التعليمية والأكاديمية والتجارية بجودة احترافية عالية.",
"متوفرة بمقاسات وخامات وتجليدات متنوعة تناسب مختلف الاحتياجات.",
"تنفيذ بدقة عالية وألوان واضحة وتشطيبات متينة للاستخدام طويل الأمد.",
],
[
"بروشورات احترافية لعرض المنتجات والخدمات والملفات التعريفية للشركات.",
"متوفرة بأشكال طي متعددة وخامات وتشطيبات متنوعة.",
"مثالية للمعارض والعروض التسويقية والتعريفية.",
],
[
"شهادات تقدير وتكريم ودورات تدريبية مطبوعة بأعلى معايير الجودة.",
"إمكانية إضافة تشطيبات مميزة وعناصر حماية حسب الطلب.",
"مصممة لتعكس الاحترافية وتمنح قيمة أكبر للمناسبة.",
],
[
"فلايرات دعائية جذابة للعروض والفعاليات والحملات التسويقية المختلفة.",
"متوفرة بمقاسات وخامات متعددة تناسب مختلف الاستخدامات.",
"وسيلة فعالة واقتصادية للوصول إلى جمهور واسع.",
],
[
"كتالوجات احترافية لعرض المنتجات والخدمات بشكل منظم وجذاب.",
"متوفرة بعدد صفحات وتشطيبات وتجليدات متنوعة.",
"مناسبة للمعارض وصالات العرض والاجتماعات التجارية.",
],
[
"كروت شخصية فاخرة تعكس هوية نشاطك التجاري بصورة احترافية.",
"متوفرة مع تشطيبات سبوت يو في، سلوفان، فويل وبروز.",
"مصممة لترك انطباع قوي ودائم لدى العملاء والشركاء.",
],
[
"أظرف مطبوعة بشعار الشركة ومخصصة للمراسلات الرسمية.",
"متوفرة بأحجام متعددة مع طباعة عالية الجودة.",
"تعزز الهوية المؤسسية والمظهر الاحترافي للشركة.",
],
[
"ورق مراسلات احترافي للمكاتبات الرسمية والعروض التجارية.",
"طباعة دقيقة بألوان متناسقة مع الهوية البصرية للمؤسسة.",
"يساعد على توحيد صورة الشركة في جميع المراسلات.",
],
[
"فولدرات احترافية لحفظ وتنظيم المستندات والعروض التقديمية.",
"إمكانية إضافة جيوب داخلية وعناصر مخصصة للهوية البصرية.",
"مثالية للاجتماعات والفعاليات والعروض التجارية.",
],
[
"مطويات تعريفية وتسويقية ثنائية أو ثلاثية الطي أو حسب الطلب.",
"مناسبة للمعلومات التسويقية والتعليمية والإرشادية.",
"ألوان زاهية وتشطيبات احترافية تضمن مظهراً مميزاً.",
],
[
"طباعة مخصصة على المجات للهدايا الدعائية والفعاليات المختلفة.",
"ألوان ثابتة وجودة عالية تدوم لفترات طويلة.",
"وسيلة عملية لزيادة انتشار علامتك التجارية.",
],
[
"طباعة احترافية على التيشيرتات للفعاليات والشركات والفرق المختلفة.",
"متوفرة بمقاسات وألوان متعددة مع خيارات طباعة متنوعة.",
"تصميمات متينة ومريحة للاستخدام اليومي.",
],
[
"كابات دعائية مطبوعة أو مطرزة بالشعارات والتصميمات المخصصة.",
"مناسبة للهدايا التسويقية والفعاليات والمعارض.",
"تساعد على تعزيز انتشار العلامة التجارية بشكل أنيق.",
],
[
"أقلام دعائية مخصصة تحمل شعار الشركة وهويتها البصرية.",
"خيار اقتصادي وفعال للهدايا التسويقية والمؤتمرات.",
"تحافظ على ظهور علامتك التجارية بشكل مستمر لدى العملاء.",
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
      style={{ background: "#ffffff" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #FFFF00, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #00FFFF, transparent 70%)",
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
            style={{ color: "#FFFF00" }}
          >
            {t.products.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#000000] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.products.title}{" "}
            <span
              style={{ color: "#00FFFF" }}
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
              >
                {/* Abstract visual pattern */}
                <img 
                  src={product.image}
                   alt={product.title}
                  className="absolute inset-0 "
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                  }}
                />

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
                style={{ color: "#00FFFF" }}
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

              {/* Bottom solid line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
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
