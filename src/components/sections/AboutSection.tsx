"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full px-6 py-32 md:py-48">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4 leading-tight">
              Redefining the <br />
              <span className="italic">dental experience</span>
            </h2>
            <div className="w-16 h-px bg-champagne my-8" />
            <p className="text-stone leading-relaxed text-lg font-light">
              At DENTIQ, we believe a smile is more than teeth — it is confidence,
              identity, and expression. Our studio combines decades of surgical
              expertise with an artist&apos;s eye, crafting smiles that feel as
              natural as they are beautiful.
            </p>
            <p className="text-stone leading-relaxed text-lg font-light mt-6">
              Every consultation begins with listening. Every treatment plan is
              tailored to your unique facial anatomy, goals, and spirit. This is
              not cosmetic dentistry. This is <span className="italic text-charcoal">smile architecture</span>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-champagne-dim">
              <img
                src="https://images.unsplash.com/photo-1606811841476-6c757aa23f12?w=800&q=80"
                alt="Premium dental studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-pure-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="text-3xl font-serif text-charcoal">15+</p>
              <p className="text-xs text-stone uppercase tracking-wider mt-1">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
