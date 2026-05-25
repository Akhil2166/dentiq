"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6">
      <div className="text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Premium Cosmetic Dentistry
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-[10rem] font-serif text-charcoal tracking-tight leading-none mt-6"
        >
          DENTIQ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-stone mt-6 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Where science meets artistry — <br className="hidden md:block" />
          <span className="italic">your perfect smile begins here.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center gap-4"
        >
          <a
            href="#treatments"
            className="px-10 py-4 rounded-full bg-charcoal text-white text-sm uppercase tracking-[0.15em] font-medium hover:bg-champagne transition-all duration-500"
          >
            Explore Treatments
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-charcoal/20 text-soft-charcoal text-sm uppercase tracking-[0.15em] font-medium hover:bg-charcoal hover:text-white transition-all duration-500"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
