"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Printer } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "clients", href: "#clients" },
  { key: "products", href: "#products" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >

            <Image
              src="https://res.cloudinary.com/dniuspri6/image/upload/v1782488257/ChatGPT_Image_Jun_26_2026_06_37_02_PM_jphazu.png"
              alt="Printo Press"
              width={420}
              height={100}
              className="h-24 w-auto"
            />
            {/* التعديل هنا: flex-col للموبايل و md:flex-row للشاشات الأكبر */}
            <div className="hidden md:flex flex-col md:flex-row md:items-center h-auto gap-0 md:gap-1">
              <span
                className="font-display font-900 text-cyan-500 text-xl tracking-tight leading-none transition-colors"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
              >
                Printo
              </span>
              <span
                className="font-display text-xl leading-none"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  color: "cyan-500",
                }}
              >
                Press
              </span>
            </div>
          </motion.a>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[cyan-500]/10 hover:text-[cyan-500] ${
                  scrolled ? "text-[#000000]" : "text-black/90"
                }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {t.nav[link.key]}
                </motion.a>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black shadow-lg"
                  style={{
                    background: "#FFFF00",
                  }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(88,196,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                {t.nav.quote}
              </motion.a>

              <motion.button
                onClick={toggleLanguage}
                className={`min-w-20 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  scrolled
                    ? "border-[#000000]/15 text-[#000000] hover:bg-[cyan-500]/10"
                    : "border-white/30 text-black hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                aria-label={language === "ar" ? "Switch to English" : "Switch to Arabic"}
              >
                {t.nav.toggle}
              </motion.button>

              {/* Mobile menu toggle */}
              <motion.button
                className={`md:hidden p-2 rounded-xl transition-colors ${
                    scrolled ? "text-[#000000]" : "text-[#000000]"
                  }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={t.nav.menu}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-3 rounded-xl text-[#000000] font-medium hover:bg-[cyan-500]/10 hover:text-[cyan-500] transition-colors"
                >
                  {t.nav[link.key]}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-3 px-5 py-3 rounded-xl text-black text-center font-semibold"
                style={{
                  background: "#FFFF00",
                }}
              >
                {t.nav.quote}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}