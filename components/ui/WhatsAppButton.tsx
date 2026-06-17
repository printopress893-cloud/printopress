"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / chat bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl p-4 max-w-[220px] border border-gray-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white text-sm font-bold">
                P
              </div>
              <div>
                <div className="text-xs font-bold text-[#5B3A29]">Printo Press</div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              👋 Hi there! How can we help with your printing needs today?
            </p>
            <a
              href="https://wa.me/201000000000?text=Hello%20Printo%20Press!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full py-2.5 rounded-xl text-white text-sm font-semibold text-center transition-all hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              Start Chat →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-white"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ background: "#25D366" }}
        />
        <span
          className="absolute inset-[-5px] rounded-full animate-ping opacity-15"
          style={{ background: "#25D366", animationDelay: "0.5s" }}
        />

        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.535 5.848L0 24l6.341-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.007-1.371l-.36-.214-3.764.895.951-3.651-.235-.375A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
        </svg>
      </motion.button>
    </div>
  );
}
