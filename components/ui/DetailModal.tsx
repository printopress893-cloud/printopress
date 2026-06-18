"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

type DetailModalProps = {
  open: boolean;
  title: string;
  tag?: string | null;
  description: string;
  details: readonly string[];
  images: readonly string[];
  accent: string | undefined;
  onClose: () => void;
};

export default function DetailModal({
  open,
  title,
  tag,
  description,
  details,
  images,
  accent,
  onClose,
}: DetailModalProps) {
  const { language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!open) return;

    setActiveImage(0);
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const showPreviousImage = () => {
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNextImage = () => {
    setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={language === "ar" ? "إغلاق" : "Close"}
              className={`absolute top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#5B3A29] shadow-lg transition hover:bg-white ${
                language === "ar" ? "left-4" : "right-4"
              }`}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-2">
              <div className="relative min-h-[320px] bg-[#5B3A29] lg:min-h-[560px]">
                <img
                  src={images[activeImage]}
                  alt={title}
                  className="h-full min-h-[320px] w-full object-cover lg:min-h-[560px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label={language === "ar" ? "الصورة السابقة" : "Previous image"}
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#5B3A29] shadow-lg transition hover:bg-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label={language === "ar" ? "الصورة التالية" : "Next image"}
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#5B3A29] shadow-lg transition hover:bg-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          aria-label={`${language === "ar" ? "صورة" : "Image"} ${index + 1}`}
                          className={`h-2.5 rounded-full transition-all ${
                            activeImage === index ? "w-8 bg-white" : "w-2.5 bg-white/55"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-7 sm:p-9 lg:p-10">
                {tag && (
                  <span
                    className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    {tag}
                  </span>
                )}

                <h3
                  className="mb-4 text-3xl font-bold leading-tight text-[#5B3A29] sm:text-4xl"
                  style={{ fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'Syne', sans-serif" }}
                >
                  {title}
                </h3>

                <p className="mb-7 text-base leading-relaxed text-gray-600">
                  {description}
                </p>

                <div>
                  <h4
                    className="mb-4 text-sm font-bold uppercase tracking-widest text-[#5B3A29]"
                    style={{ fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'Syne', sans-serif" }}
                  >
                    {language === "ar" ? "تفاصيل أكثر" : "More Details"}
                  </h4>
                  <ul className="space-y-3">
                    {details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                        <span
                          className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ background: accent }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
