"use client";

import { motion } from "framer-motion";
import {
  Printer,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const quickLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "products", href: "#products" },
  { key: "clients", href: "#clients" },
  { key: "contact", href: "#contact" },
] as const;

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
];

export default function Footer() {
  const { t, language } = useLanguage();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Top wave / decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "#00FFFF" }}
      />

      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF00FF, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00FFFF, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#00FFFF" }}
              >
                <Printer className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Printo
                  <span
                      style={{ color: "#FF00FF" }}
                    >
                      Press
                    </span>
                </span>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${social.color}30`;
                    (e.currentTarget as HTMLAnchorElement).style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <social.icon className="w-4 h-4 text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 text-white/55 text-sm hover:text-white transition-colors group"
                  >
                    <ArrowRight
                      className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#58C4F6] ${
                        language === "ar"
                          ? "rotate-180 translate-x-2 group-hover:translate-x-0"
                          : "-translate-x-2 group-hover:translate-x-0"
                      }`}
                    />
                    {t.nav[link.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {t.footer.services}
            </h4>
            <ul className="space-y-2">
              {t.services.items.map((service) => (
                <li key={service.title}>
                  <span className="flex items-center gap-2 text-white/55 text-sm hover:text-white transition-colors cursor-default group">
                    <ArrowRight
                      className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#FF00FF] ${
                        language === "ar"
                          ? "rotate-180 translate-x-2 group-hover:translate-x-0"
                          : "-translate-x-2 group-hover:translate-x-0"
                      }`}
                    />
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {t.footer.contact}
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+201000000000"
                className="flex items-start gap-3 text-white/55 hover:text-white transition-colors group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,255,255,0.15)" }}
                >
                  <Phone className="w-3.5 h-3.5 text-[#00FFFF]" />
                </div>
                <span className="text-sm">+20 100 000 0000</span>
              </a>

              <a
                href="mailto:hello@printopress.com"
                className="flex items-start gap-3 text-white/55 hover:text-white transition-colors group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,95,162,0.15)" }}
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF5FA2]" />
                </div>
                <span className="text-sm">hello@printopress.com</span>
              </a>

              <div className="flex items-start gap-3 text-white/55">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,255,0,0.15)" }}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FFFF00]" />
                </div>
                <span className="text-sm">
                  {language === "ar" ? "123 شارع كرييتف، مدينة نصر،" : "123 Creative St, Nasr City,"}
                  <br />
                  {language === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-7" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Printo Press. {t.footer.copyright}
          </p>
          {/* <div className="flex gap-6 text-sm text-white/40">
            <button className="hover:text-white/70 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/70 transition-colors">Terms of Service</button>
            <button className="hover:text-white/70 transition-colors">Sitemap</button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
