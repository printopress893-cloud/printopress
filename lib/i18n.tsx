"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ar";

type Translation = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  dir: "ltr" | "rtl";
  t: Translation;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const storageKey = "printo-press-language";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      clients: "Clients",
      products: "Products",
      contact: "Contact",
      quote: "Get a Quote",
      toggle: "العربية",
      menu: "Toggle menu",
    },
    hero: {
      headlineTop: "Where Ideas",
      headlineAccent: "Come to Life",
      description:
        "From stunning print materials to powerful digital campaigns, we craft brand experiences that leave a lasting impression. Premium quality, unmatched creativity.",
      servicesCta: "Explore Our Services",
      workCta: "View Our Work",
      scroll: "Scroll to explore",
      stats: [
        { value: "500+", label: "Projects" },
        { value: "120+", label: "Happy Clients" },
        { value: "10+", label: "Years Experience" },
        { value: "25+", label: "Team Members" },
      ],
    },
    about: {
      eyebrow: "Who We Are",
      title: "Crafting Stories That",
      titleAccent: "Resonate",
      description:
        "Printo Press is Cairo's leading creative production house, specializing in premium printing, bold branding, and impactful advertising. With over a decade of crafting visual identities, we bring brands to life with precision, passion, and uncompromising quality.",
      missionTitle: "Our Mission",
      mission:
        "To empower businesses with world-class creative solutions that amplify their brand voice and drive measurable impact in a competitive marketplace.",
      visionTitle: "Our Vision",
      vision:
        "To be the most trusted creative partner in the MENA region, setting the standard for excellence in print, digital, and brand communication by 2030.",
      studioTag: "Creative Production House",
      satisfaction: "Client satisfaction",
      rating: "98% Rating",
      stats: [
        "Projects Delivered",
        "Happy Clients",
        "Years Experience",
        "Team Members",
      ],
    },
    services: {
      eyebrow: "What We Do",
      title: "Services That Drive",
      titleAccent: "Real Results",
      description:
        "A full-spectrum creative studio offering everything from brand conception to final production. We handle the entire journey.",
      learnMore: "Learn More",
      items: [
        {
          title: "Branding",
          description:
            "Build a brand identity that tells your story. From logo design to full visual systems, we create brands people remember and trust.",
          tag: "Identity",
        },
        {
          title: "Printing Solutions",
          description:
            "State-of-the-art digital and offset printing with meticulous quality control. Every detail, every color, pixel perfect.",
          tag: "Production",
        },
        {
          title: "Packaging Design",
          description:
            "Packaging that protects your product and amplifies your brand. We design boxes, bags, and wrappers that convert at the shelf.",
          tag: "Design",
        },
        {
          title: "Advertising Campaigns",
          description:
            "Strategic advertising campaigns across print and digital that cut through the noise and get your message seen.",
          tag: "Strategy",
        },
        {
          title: "Digital Marketing",
          description:
            "SEO, social media, PPC, and content marketing that grow your digital presence and drive qualified leads.",
          tag: "Growth",
        },
        {
          title: "Large Format Printing",
          description:
            "Billboards, banners, vehicle wraps, exhibition stands, and commanding visual presence at any scale, indoors or out.",
          tag: "Large Scale",
        },
      ],
    },
    clients: {
      eyebrow: "Trusted By",
      title: "Brands That",
      titleAccent: "Trust Us",
      description:
        "From emerging startups to major enterprises, our clients rely on us to deliver exceptional creative work, every time.",
      notePrefix: "Join",
      noteAccent: "120+ satisfied clients",
      noteSuffix: "who chose Printo Press for their creative needs",
    },
    products: {
      eyebrow: "Our Products",
      title: "Premium Print",
      titleAccent: "Products",
      description:
        "Every product is crafted with precision, using premium materials and cutting-edge printing technology.",
      learnMore: "Learn More",
      items: [
        {
          title: "Business Cards",
          description:
            "Premium spot-UV, foil, and embossed cards that make a powerful first impression.",
          tag: "Most Popular",
        },
        {
          title: "Flyers",
          description:
            "Vibrant single or double-sided flyers for events, promos, and marketing campaigns.",
          tag: "Best Value",
        },
        {
          title: "Brochures",
          description:
            "Tri-fold and multi-page brochures that tell your brand story with authority.",
          tag: null,
        },
        {
          title: "Roll-Up Banners",
          description:
            "High-resolution pull-up banners for exhibitions, trade shows, and retail.",
          tag: "Fast Delivery",
        },
        {
          title: "Packaging Boxes",
          description:
            "Custom-designed packaging that elevates your product and delights customers.",
          tag: "Custom",
        },
        {
          title: "Stickers & Labels",
          description:
            "Die-cut stickers, labels, and decals in any shape, waterproof and long-lasting.",
          tag: null,
        },
        {
          title: "Outdoor Signs",
          description:
            "Channel letters, LED signs, and hoarding boards that demand attention.",
          tag: "Premium",
        },
        {
          title: "Promotional Materials",
          description:
            "Branded merchandise, corporate gifts, and giveaways that keep you top-of-mind.",
          tag: "Trending",
        },
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      title: "Let's Create Something",
      titleAccent: "Amazing",
      description:
        "Tell us about your project and we'll get back to you within 24 hours with a custom quote.",
      heading: "Contact Information",
      intro:
        "We're based in Cairo and work with clients across Egypt and the MENA region. Reach out however works best for you.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "123 Creative St, Nasr City, Cairo, Egypt",
      hours: "Working Hours",
      weekday: "Saturday - Thursday",
      weekdayHours: "9 AM - 7 PM",
      friday: "Friday",
      closed: "Closed",
    },
    footer: {
      description:
        "Cairo's premier creative production house, delivering exceptional printing, branding, and digital solutions since 2014.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
    whatsapp: {
      online: "Online",
      message: "Hi there! How can we help with your printing needs today?",
      cta: "Start Chat",
      aria: "Chat on WhatsApp",
      urlText:
        "Hello Printo Press! I would like to inquire about your services.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      clients: "العملاء",
      products: "المنتجات",
      contact: "تواصل معنا",
      quote: "اطلب عرض سعر",
      toggle: "English",
      menu: "فتح القائمة",
    },
    hero: {
      headlineTop: "أفكارك",
      headlineAccent: "نحو واقع ملموس",
      description:
        "من المطبوعات الاحترافية إلى الحملات الرقمية المؤثرة، نصنع تجارب بصرية تترك انطباعا قويا بجودة عالية وإبداع واضح.",
      servicesCta: "استكشف خدماتنا",
      workCta: "شاهد أعمالنا",
      scroll: "مرر للاستكشاف",
      stats: [
        { value: "500+", label: "مشروع" },
        { value: "120+", label: "عميل سعيد" },
        { value: "10+", label: "سنوات خبرة" },
        { value: "25+", label: "عضو بالفريق" },
      ],
    },
    about: {
      eyebrow: "من نحن",
      title: "نصنع قصصا",
      titleAccent: "تترك أثرا",
      description:
        "برينتو برس بيت إنتاج إبداعي في القاهرة متخصص في الطباعة عالية الجودة، وبناء الهويات البصرية، والحلول الإعلانية المؤثرة. بخبرة تتجاوز عشر سنوات، نحول العلامات التجارية إلى حضور بصري دقيق ومميز.",
      missionTitle: "رسالتنا",
      mission:
        "تمكين الشركات بحلول إبداعية عالمية المستوى تعزز صوت العلامة التجارية وتحقق أثرا قابلا للقياس في سوق تنافسي.",
      visionTitle: "رؤيتنا",
      vision:
        "أن نكون الشريك الإبداعي الأكثر ثقة في منطقة الشرق الأوسط وشمال أفريقيا، وأن نضع معيارا جديدا للتميز في الطباعة والتواصل الرقمي والبصري.",
      studioTag: "بيت إنتاج إبداعي",
      satisfaction: "رضا العملاء",
      rating: "تقييم 98%",
      stats: ["مشروع مكتمل", "عميل سعيد", "سنوات خبرة", "عضو بالفريق"],
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "خدمات تصنع",
      titleAccent: "نتائج حقيقية",
      description:
        "استوديو إبداعي متكامل يبدأ من بناء الفكرة والهوية وينتهي بالإنتاج النهائي. نحن ندير الرحلة كاملة باحتراف.",
      learnMore: "اعرف المزيد",
      items: [
        {
          title: "الهوية البصرية",
          description:
            "نبني هوية تعبر عن قصتك، من تصميم الشعار إلى النظام البصري الكامل، لنصنع علامة يتذكرها الناس ويثقون بها.",
          tag: "هوية",
        },
        {
          title: "حلول الطباعة",
          description:
            "طباعة ديجيتال وأوفست بأحدث التقنيات ومراجعة جودة دقيقة لكل تفصيلة وكل لون.",
          tag: "إنتاج",
        },
        {
          title: "تصميم التغليف",
          description:
            "تصميم عبوات تحمي منتجك وتبرز علامتك، من الصناديق إلى الأكياس والملصقات الجذابة.",
          tag: "تصميم",
        },
        {
          title: "الحملات الإعلانية",
          description:
            "حملات استراتيجية عبر المطبوع والرقمي تساعد رسالتك على الظهور والوصول للجمهور المناسب.",
          tag: "استراتيجية",
        },
        {
          title: "التسويق الرقمي",
          description:
            "تحسين محركات البحث، السوشيال ميديا، الإعلانات المدفوعة، والمحتوى الذي ينمي حضورك الرقمي.",
          tag: "نمو",
        },
        {
          title: "الطباعة كبيرة الحجم",
          description:
            "لافتات، بنرات، تغليف سيارات، وأجنحة معارض تمنح علامتك حضورا واضحا في أي مساحة.",
          tag: "أحجام كبيرة",
        },
      ],
    },
    clients: {
      eyebrow: "يثق بنا",
      title: "علامات تجارية",
      titleAccent: "اختارتنا",
      description:
        "من الشركات الناشئة إلى العلامات الكبرى، يعتمد علينا عملاؤنا لتقديم أعمال إبداعية بجودة ثابتة.",
      notePrefix: "انضم إلى",
      noteAccent: "أكثر من 120 عميلا راضيا",
      noteSuffix: "اختاروا برينتو برس لاحتياجاتهم الإبداعية",
    },
    products: {
      eyebrow: "منتجاتنا",
      title: "منتجات طباعة",
      titleAccent: "بجودة ممتازة",
      description:
        "كل منتج ننفذه بعناية، باستخدام خامات ممتازة وتقنيات طباعة حديثة.",
      learnMore: "اعرف المزيد",
      items: [
        {
          title: "كروت شخصية",
          description:
            "كروت فاخرة بتشطيبات سبوت يو في وفويل وبروز لترك انطباع أول قوي.",
          tag: "الأكثر طلبا",
        },
        {
          title: "فلايرات",
          description:
            "فلايرات بألوان جذابة لفعالياتك وعروضك وحملاتك التسويقية.",
          tag: "أفضل قيمة",
        },
        {
          title: "بروشورات",
          description:
            "بروشورات متعددة الطيات والصفحات تعرض قصة علامتك بشكل احترافي.",
          tag: null,
        },
        {
          title: "رول أب بانر",
          description:
            "بانرات عالية الدقة للمعارض ونقاط البيع والفعاليات.",
          tag: "تسليم سريع",
        },
        {
          title: "علب تغليف",
          description:
            "تغليف مخصص يرفع قيمة منتجك ويمنح العميل تجربة مميزة.",
          tag: "مخصص",
        },
        {
          title: "استيكرات وليبلز",
          description:
            "استيكرات وليبلز بأي شكل، مقاومة للماء ومناسبة للاستخدام الطويل.",
          tag: null,
        },
        {
          title: "لافتات خارجية",
          description:
            "حروف بارزة ولافتات مضيئة ولوحات خارجية تجذب الانتباه.",
          tag: "فاخر",
        },
        {
          title: "مواد دعائية",
          description:
            "هدايا ومطبوعات دعائية تحمل علامتك وتبقيها قريبة من جمهورك.",
          tag: "رائج",
        },
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "لنصنع شيئا",
      titleAccent: "مميزا",
      description:
        "احك لنا عن مشروعك وسنعود إليك خلال 24 ساعة بعرض مناسب لاحتياجاتك.",
      heading: "معلومات التواصل",
      intro:
        "مقرنا في القاهرة ونعمل مع عملاء في مصر ومنطقة الشرق الأوسط وشمال أفريقيا. تواصل معنا بالطريقة الأنسب لك.",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressValue: "123 شارع كرييتف، مدينة نصر، القاهرة، مصر",
      hours: "مواعيد العمل",
      weekday: "السبت - الخميس",
      weekdayHours: "9 صباحا - 7 مساء",
      friday: "الجمعة",
      closed: "مغلق",
    },
    footer: {
      description:
        "بيت إنتاج إبداعي في القاهرة يقدم حلولا مميزة في الطباعة والهوية والتسويق الرقمي منذ 2014.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contact: "تواصل معنا",
      copyright: "جميع الحقوق محفوظة.",
    },
    whatsapp: {
      online: "متاح الآن",
      message: "أهلا بك! كيف يمكننا مساعدتك في احتياجات الطباعة اليوم؟",
      cta: "ابدأ المحادثة",
      aria: "تواصل عبر واتساب",
      urlText: "أهلا برينتو برس، أريد الاستفسار عن خدماتكم.",
    },
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey);
    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
  };

  const value = useMemo<LanguageContextValue>(() => {
    const dir = language === "ar" ? "rtl" : "ltr";

    return {
      language,
      dir,
      t: translations[language],
      setLanguage,
      toggleLanguage: () => setLanguage(language === "ar" ? "en" : "ar"),
    };
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = value.dir;
    document.body.dir = value.dir;
  }, [language, value.dir]);

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.dir} lang={language}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
