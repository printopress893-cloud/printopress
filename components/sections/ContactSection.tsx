"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+201055755003",
    href: "tel:+201055755003",
    color: "#58C4F6",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Info@pritopress.com",
    href: "mailto:Info@pritopress.com",
    color: "#FF5FA2",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Creative St, Nasr City, Cairo, Egypt",
    href: "#",
    color: "#FFD447",
  },
];

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fafbff 0%, #fff5fb 100%)" }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-72 h-72 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #58C4F6, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5FA2, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            style={{ color: "#FF5FA2" }}
          >
            {t.contact.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#5B3A29] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.contact.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.contact.titleAccent}
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600">
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3
                className="text-2xl font-bold text-[#5B3A29] mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {t.contact.heading}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.contact.intro}
              </p>
            </div>

            {contactInfo.map((info) => {
              const label =
                info.label === "Phone"
                  ? t.contact.phone
                  : info.label === "Email"
                    ? t.contact.email
                    : t.contact.address;
              const value = info.label === "Address" ? t.contact.addressValue : info.value;

              return (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ x: language === "ar" ? -6 : 6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}18`, color: info.color }}
                >
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div
                    className="text-[#5B3A29] font-semibold text-sm group-hover:text-[#58C4F6] transition-colors"
                  >
                    {value}
                  </div>
                </div>
              </motion.a>
            );
            })}

            {/* Hours */}
            <div className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100">
              <h4
                className="font-bold text-[#5B3A29] mb-3 text-sm"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {t.contact.hours}
              </h4>
              <div className="space-y-1.5 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t.contact.weekday}</span>
                  <span className="font-medium text-[#5B3A29]">{t.contact.weekdayHours}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.friday}</span>
                  <span className="text-gray-400">{t.contact.closed}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          {/* <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle
                      className="w-16 h-16 mx-auto mb-6"
                      style={{ color: "#58C4F6" }}
                    />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold text-[#5B3A29] mb-3"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="text-[#58C4F6] font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#5B3A29] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[#5B3A29] text-sm placeholder-gray-400 transition-all bg-gray-50 focus:bg-white focus:border-[#58C4F6] focus:ring-2 focus:ring-[#58C4F6]/15 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#5B3A29] uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[#5B3A29] text-sm placeholder-gray-400 transition-all bg-gray-50 focus:bg-white focus:border-[#58C4F6] focus:ring-2 focus:ring-[#58C4F6]/15 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5B3A29] uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+20 100 000 0000"
                      className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[#5B3A29] text-sm placeholder-gray-400 transition-all bg-gray-50 focus:bg-white focus:border-[#58C4F6] focus:ring-2 focus:ring-[#58C4F6]/15 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5B3A29] uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, timeline, and budget..."
                      className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[#5B3A29] text-sm placeholder-gray-400 transition-all bg-gray-50 focus:bg-white focus:border-[#58C4F6] focus:ring-2 focus:ring-[#58C4F6]/15 outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(88,196,246,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 text-base shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    style={{
                      background: "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-5 h-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-400">
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
