"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col gap-3"
      >
        <a
          href="https://wa.me/yournumber"
          target="_blank"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="mailto:hello@dentiq.com"
          className="w-12 h-12 bg-champagne text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Email"
        >
          <FaEnvelope size={18} />
        </a>
      </motion.div>
    </div>
  );
}
