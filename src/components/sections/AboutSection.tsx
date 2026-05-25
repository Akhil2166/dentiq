"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full px-5 md:px-8 lg:px-16 py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.25em] font-medium">
              About DENTIQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-3 leading-tight">
              Where your smile<br />
              <span className="italic font-normal">finds its home</span>
            </h2>
            <div className="w-12 h-px bg-cement-300 my-5 md:my-6" />
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              We believe a trip to the dentist should feel less like a clinical visit
              and more like a moment of self-care. Our studio combines expert care
              with a warm, welcoming atmosphere.
            </p>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg mt-4">
              Every treatment is tailored to you. Every detail is crafted with care.
              This isn&apos;t just dentistry — it&apos;s the art of making you feel confident again.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-cement-200 shadow-lg">
              <img
                src="/assets/dental/4d5da1ed-55d1-4f64-b237-e2a16dc0dc96.png"
                alt="Dental studio"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-3 md:-bottom-5 -left-3 md:-left-5 bg-white rounded-xl p-4 md:p-5 shadow-lg border border-border-light max-w-[160px]"
            >
              <p className="text-xl md:text-2xl font-heading font-bold text-text-primary">100%</p>
              <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider mt-0.5">Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
