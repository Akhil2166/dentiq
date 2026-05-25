"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </motion.a>
      <motion.a
        href="tel:+1234567890"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <FaPhone size={20} />
      </motion.a>
    </div>
  );
}
