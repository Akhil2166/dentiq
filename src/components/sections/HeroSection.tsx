"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6">
      <div className="text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-dim text-gold text-xs uppercase tracking-[0.2em] font-medium">
            Premium Cosmetic Dentistry
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-[9rem] font-serif text-charcoal tracking-tight leading-none mt-8"
        >
          DENTIQ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted mt-6 font-light leading-relaxed max-w-xl mx-auto"
        >
          Your smile is our masterpiece — <br />
          <span className="italic text-text">book your consultation today.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#contact"
            className="px-10 py-4 rounded-full bg-charcoal text-white text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold transition-all duration-500 shadow-lg shadow-black/10">
            Book Your Visit
          </a>
          <a href="#services"
            className="px-10 py-4 rounded-full border border-border text-text text-sm uppercase tracking-[0.15em] font-medium hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-500">
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex justify-center gap-10 text-center"
        >
          {[
            { num: "15+", label: "Years Experience" },
            { num: "5000+", label: "Smiles Transformed" },
            { num: "4.9", label: "Patient Rating" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-serif text-charcoal">{item.num}</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
