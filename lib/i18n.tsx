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
        "From stunning print materials , we craft brand experiences that leave a lasting impression. Premium quality, unmatched creativity.",
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
        "Printo Press is an Egyptian company specializing in all types of paper printing—including both digital and offset—as well as indoor and outdoor printing services. The company boasts a team with over ten years of experience in the printing industry, ensuring the delivery of high-quality services that meet diverse client needs.",
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
          title: "Digital Printing & Offset",
          description:
            "Fast, high-quality printing for books, brochures, catalogs, and commercial materials.",
          tag: "Core Service",
        },
        {
          title: "Print Finishing",
          description:
            "Professional finishing services including binding, lamination, cutting, and packaging.",
          tag: "In-House",
        },
        {
          title: "Promotional Gift Printing",
          description:
            "Custom printing on mugs, t-shirts, caps, pens, and promotional products.",
          tag: "Popular",
        },
        {
          title: "Corporate Printing Solutions",
          description:
            "Professional stationery and branded print materials for businesses and organizations.",
          tag: "Business",
        },
        {
          title: "Event Printing Solutions",
          description:
    "Complete printing solutions for conferences, exhibitions, corporate events, and special occasions—from badges to banners and branded materials.",
          tag: "Events",
        },
      ]
    },
    clients: {
      eyebrow: "",
      title: "Trusted Across",
      titleAccent: "the Region",
      description:
        "Delivering exceptional creative excellence that drives growth for brands from Egypt to the heart of the Gulf and North Africa.",
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
          title: "Books",
          description:
            "Professional printing and binding for educational, academic, and commercial books.",
          tag: "Best Seller",
        },
        {
          title: "Brochures",
          description:
            "High-quality brochures designed for marketing campaigns and business presentations.",
          tag: "Popular",
        },
        {
          title: "Certificates",
          description:
            "Premium certificates for recognition, awards, and achievements.",
          tag: "High Quality",
        },
        {
          title: "Flyers",
          description:
            "Eye-catching flyers that help promote your business, events, and offers.",
          tag: "Best Value",
        },
        {
          title: "Catalogs",
          description:
            "Professional catalogs that showcase products and services in an elegant way.",
          tag: null,
        },
        {
          title: "Business Cards",
          description:
            "Premium business cards that strengthen your brand identity and leave a lasting impression.",
          tag: "Professional",
        },
        {
          title: "Envelopes",
          description:
            "Custom branded envelopes designed for professional business correspondence.",
          tag: null,
        },
        {
          title: "Letterheads",
          description:
            "Professional letterheads that enhance your corporate identity.",
          tag: null,
        },
        {
          title: "Folders",
          description:
            "Presentation folders for organizing documents and business materials.",
          tag: "Corporate",
        },
        {
          title: "Folded Flyers",
          description:
            "Informative folded flyers available in multiple formats and sizes.",
          tag: null,
        },
        {
          title: "Custom Mugs",
          description:
            "High-quality mug printing for promotional campaigns and corporate gifts.",
          tag: "Popular",
        },
        {
          title: "Custom T-Shirts",
          description:
            "Premium t-shirt printing with durable colors and sharp designs.",
          tag: "Custom",
        },
        {
          title: "Promotional Caps",
          description:
            "Branded caps ideal for events, giveaways, and marketing campaigns.",
          tag: "Custom",
        },
        {
          title: "Branded Pens",
          description:
            "Custom pens featuring your logo for practical and effective promotion.",
          tag: null,
        },
      ]
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
        "من المطبوعات الاحترافية ، نصنع تجارب بصرية تترك انطباعا قويا بجودة عالية وإبداع واضح.",
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
        "تُعد شركة برينتو بريس من الشركات المصرية المتخصصة في جميع أنواع الطباعة الورقية، سواء الطباعة الديجيتال أو الأوفست، بالإضافة إلى تقديم خدمات الطباعة (Indoor) و (Outdoor)، وتضم الشركة فريق عمل يمتلك خبرة تتجاوز 10 عاماً في مجال الطباعة، مما يضمن تقديم خدمات عالية الجودة تلبي احتياجات العملاء المختلفة.",
      missionTitle: "رسالتنا",
      mission:
        "تمكين الشركات بحلول إبداعية عالمية المستوى تعزز صوت العلامة التجارية وتحقق أثرا قابلا للقياس في سوق تنافسي.",
      visionTitle: "رؤيتنا",
      vision:
        "أن نكون الشريك الإبداعي الأكثر ثقة في منطقة الشرق الأوسط وشمال أفريقيا، وأن نضع معيارا جديدا للتميز في الطباعة والتواصل الرقمي والبصري.",
      studioTag: "بيت إنتاج إبداعي",
      satisfaction: "رضا العملاء",
      rating: "تقييم 98%",
      stats: ["مشروع مكتمل", "عميل سعيد", "سنوات خبرة",],
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "خدمات تصنع",
      titleAccent: "نتائج حقيقية",
      description:
        "استوديو إبداعي متكامل يبدأ من بناء الفكرة والهوية وينتهي بالإنتاج النهائي. نحن ندير الرحلة كاملة باحتراف.",
      learnMore: "اعرف المزيد",
      items:[
  {
    title: "الطباعة الرقمية والاوفسيت  ",
    description:
      "طباعة سريعة وعالية الجودة للكتب والبروشورات والكتالوجات والمطبوعات التجارية.",
    tag: "الخدمة الرئيسية",
  },
  {
    title: "خدمات التشطيب",
    description:
      "تشطيب احترافي يشمل التجليد والسلوفان والقص والتغليف النهائي.",
    tag: "داخل المطبعة",
  },
  {
    title: "طباعة الهدايا الدعائية",
    description:
      "طباعة مخصصة على المجات والتيشيرتات والكابات والأقلام والمنتجات الدعائية.",
    tag: "الأكثر طلباً",
  },
  {
    title: "حلول الطباعة للشركات",
    description:
      "مطبوعات وهوية مؤسسية متكاملة للشركات والمؤسسات بمختلف أحجامها.",
    tag: "للشركات",
  },
  {
    title: "حلول طباعة وإدارة الفعاليات",
    description:
      "تنسيق وتنفيذ جميع المطبوعات وتسليمها في الوقت المحدد لضمان نجاح الحدث بأعلى مستوى من الاحترافية.",
    tag: "فعاليات",
  },
]
    },
    clients: {
      eyebrow: " ",
      title: "موضع ثقة ",
      titleAccent: "عبر المنطقة",
      description:
        "حلولنا الإبداعية تدعم نمو وتطور الشركات من مصر إلى قلب الخليج وشمال أفريقيا. انضم إلى قائمة شركائنا المتميزين. من",
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
          title: "الكتب",
          description:
            "طباعة وتجليد الكتب التعليمية والأكاديمية والروايات بمختلف الأحجام والتشطيبات.",
          tag: "الأكثر طلباً",
        },
        {
          title: "البروشورات",
          description:
            "بروشورات احترافية متعددة الطيات لعرض المنتجات والخدمات والحملات التسويقية.",
          tag: "رائج",
        },
        {
          title: "الشهادات",
          description:
            "شهادات تقدير وتكريم ومشاركة مطبوعة بدقة عالية وجودة استثنائية.",
          tag: "جودة عالية",
        },
        {
          title: "الفلايرات",
          description:
            "فلايرات دعائية جذابة تساعدك على الوصول إلى جمهورك بطريقة فعالة.",
          tag: "أفضل قيمة",
        },
        {
          title: "الكتالوجات",
          description:
            "كتالوجات أنيقة تساعد على عرض منتجاتك وخدماتك بطريقة احترافية.",
          tag: null,
        },
        {
          title: "الكروت الشخصية",
          description:
            "بطاقات أعمال فاخرة تعكس هوية علامتك التجارية وتترك انطباعاً مميزاً.",
          tag: "احترافي",
        },
        {
          title: "الأظرف",
          description:
            "أظرف مطبوعة بشعار المؤسسة وهوية بصرية متكاملة للمراسلات الرسمية.",
          tag: null,
        },
        {
          title: "ورق المراسلات",
          description:
            "ورق مراسلات رسمي يعزز احترافية شركتك ويقوي هويتها المؤسسية.",
          tag: null,
        },
        {
          title: "الفولدرات",
          description:
            "فولدرات احترافية لحفظ وتنظيم المستندات والعروض التقديمية.",
          tag: "للشركات",
        },
        {
          title: "المطويات",
          description:
            "مطويات تعريفية وتسويقية بأشكال متنوعة تناسب مختلف الاستخدامات.",
          tag: null,
        },
        {
          title: "المجات",
          description:
            "طباعة احترافية على المجات للهدايا التذكارية والحملات الدعائية.",
          tag: "رائج",
        },
        {
          title: "التيشيرتات",
          description:
            "طباعة الشعارات والتصميمات على التيشيرتات بجودة عالية وألوان ثابتة.",
          tag: "مخصص",
        },
        {
          title: "الكابات",
          description:
            "كابات دعائية مطبوعة تعزز انتشار علامتك التجارية في الفعاليات.",
          tag: "مخصص",
        },
        {
          title: "الأقلام",
          description:
            "أقلام دعائية تحمل شعار شركتك وتُعد وسيلة تسويقية عملية وفعالة.",
          tag: null,
        },
      ]
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
