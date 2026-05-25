"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/1234567890" target="_blank"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={20} className="md:w-6 md:h-6" />
      </motion.a>
      <motion.a
        href="tel:+1234567890"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 md:w-14 md:h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-lg"
        aria-label="Call"
      >
        <FaPhone size={16} className="md:w-5 md:h-5" />
      </motion.a>
    </div>
  );
}
