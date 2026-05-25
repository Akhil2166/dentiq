"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-5 md:px-8 overflow-hidden">
      <div className="text-center max-w-4xl relative z-10 w-full">
        <motion.span {...fadeUp(0)} className="inline-block text-xs md:text-sm text-grey-400 uppercase tracking-[0.25em] font-medium">
          Premium Cosmetic Dentistry
        </motion.span>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-heading font-bold text-grey-900 tracking-tight leading-none mt-4 md:mt-6"
        >
          DENTIQ
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-base md:text-xl text-grey-500 mt-4 md:mt-6 font-light max-w-xl mx-auto leading-relaxed">
          Your smile is our masterpiece —<br className="hidden sm:block" />
          <span className="italic">book your consultation today.</span>
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <a href="#contact"
            className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-grey-900 text-white text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-grey-700 transition-all shadow-lg">
            Book Your Visit
          </a>
          <a href="#services"
            className="px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-grey-300 text-grey-700 text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-grey-900 hover:text-white hover:border-grey-900 transition-all">
            Explore Services
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="mt-12 md:mt-16 flex justify-center gap-8 md:gap-14 text-center">
          {[
            { num: "15+", label: "Years" },
            { num: "5K+", label: "Smiles" },
            { num: "4.9", label: "Rating" },
            { num: "98%", label: "Satisfaction" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -3 }} className="cursor-default">
              <p className="text-xl md:text-3xl font-heading font-bold text-grey-900">{item.num}</p>
              <p className="text-[10px] md:text-xs text-grey-400 uppercase tracking-wider mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
