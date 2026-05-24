"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaCommentDots } from "react-icons/fa";

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
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
        <a
          href="mailto:contact@dentiq.com"
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <button
          className="w-14 h-14 bg-text text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Chatbot"
        >
          <FaCommentDots size={24} />
        </button>
      </motion.div>
    </div>
  );
}
