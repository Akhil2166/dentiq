"use client";

import React from "react";
import { motion } from "framer-motion";

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const child = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center px-5 md:px-8 lg:px-16 overflow-hidden pt-24 md:pt-0">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-6rem)]">
        {/* LEFT: Text Content */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="z-10 max-w-xl lg:pr-8"
        >
          <motion.span variants={child}
            className="inline-block text-[10px] md:text-xs text-text-muted uppercase tracking-[0.25em] font-medium">
            Premium Cosmetic Dentistry
          </motion.span>

          <motion.h1 variants={child}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-text-primary tracking-tight leading-none mt-4 md:mt-6">
            DENTIQ
          </motion.h1>

          <motion.p variants={child}
            className="text-base md:text-lg lg:text-xl text-text-secondary mt-4 md:mt-6 leading-relaxed max-w-md">
            Your smile is our masterpiece —<br />
            <span className="italic">book your consultation today.</span>
          </motion.p>

          <motion.div variants={child} className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
            <a href="#contact"
              className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-text-primary text-white text-xs md:text-sm font-semibold uppercase tracking-wider hover:opacity-85 transition-all shadow-lg shadow-black/5">
              Book Your Visit
            </a>
            <a href="#services"
              className="px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-border text-text-primary text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-text-primary hover:text-white hover:border-text-primary transition-all">
              Explore Services
            </a>
          </motion.div>

          <motion.div variants={child}
            className="mt-12 md:mt-16 flex gap-8 md:gap-12">
            {[
              { num: "15+", label: "Years" },
              { num: "5K+", label: "Smiles" },
              { num: "4.9", label: "Rating" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-xl md:text-3xl font-heading font-bold text-text-primary">{item.num}</p>
                <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider mt-0.5">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Space for 3D Tooth (rendered via ToothScene) */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
