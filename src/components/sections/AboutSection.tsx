"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full px-6 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Welcome to DENTIQ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-4 leading-tight">
              Where your smile <br />
              <span className="italic">finds its home</span>
            </h2>
            <div className="w-16 h-px bg-gold my-6" />
            <p className="text-muted leading-relaxed text-lg font-light">
              We believe a trip to the dentist should feel less like a clinical visit
              and more like a moment of self-care. Our studio combines expert care
              with a warm, welcoming atmosphere — because you deserve to smile without hesitation.
            </p>
            <p className="text-muted leading-relaxed text-lg font-light mt-4">
              Every treatment is tailored to you. Every detail is crafted with care.
              This isn&apos;t just dentistry — it&apos;s the art of making you feel confident again.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gold-dim">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Modern dental studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-5 shadow-lg max-w-[200px] border border-border-light">
              <p className="text-2xl font-serif text-charcoal">100%</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">Satisfaction Guarantee</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
