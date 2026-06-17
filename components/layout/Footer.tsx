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

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Branding & Identity",
  "Offset Printing",
  "Packaging Design",
  "Digital Marketing",
  "Large Format Print",
  "Advertising Campaigns",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#5B3A29" }}>
      {/* Top wave / decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #58C4F6, #FF5FA2, #FFD447)" }}
      />

      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5FA2, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #58C4F6, transparent 70%)",
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
                style={{ background: "linear-gradient(135deg, #58C4F6, #FF5FA2)" }}
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
                    style={{
                      background: "linear-gradient(135deg, #58C4F6, #FF5FA2)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Press
                  </span>
                </span>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Cairo&apos;s premier creative production house — delivering exceptional
              printing, branding, and digital solutions since 2014.
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
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 text-white/55 text-sm hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#58C4F6]" />
                    {link.label}
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
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="flex items-center gap-2 text-white/55 text-sm hover:text-white transition-colors cursor-default group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#FF5FA2]" />
                    {service}
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
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+201000000000"
                className="flex items-start gap-3 text-white/55 hover:text-white transition-colors group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(88,196,246,0.15)" }}
                >
                  <Phone className="w-3.5 h-3.5 text-[#58C4F6]" />
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
                  style={{ background: "rgba(255,212,71,0.15)" }}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FFD447]" />
                </div>
                <span className="text-sm">
                  123 Creative St, Nasr City,
                  <br />
                  Cairo, Egypt
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
            © {new Date().getFullYear()} Printo Press. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <button className="hover:text-white/70 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/70 transition-colors">Terms of Service</button>
            <button className="hover:text-white/70 transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
