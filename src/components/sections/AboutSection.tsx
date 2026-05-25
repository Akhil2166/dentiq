"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = (dir: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: dir === "left" ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full px-5 md:px-8 py-20 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div {...fadeIn("left")}>
            <span className="text-xs md:text-sm text-grey-400 uppercase tracking-[0.25em] font-medium">
              About DENTIQ
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-grey-900 mt-3 leading-tight">
              Where your smile<br />
              <span className="italic font-normal">finds its home</span>
            </h2>
            <div className="w-12 h-0.5 bg-grey-300 my-5 md:my-6" />
            <p className="text-grey-500 leading-relaxed text-base md:text-lg">
              We believe a trip to the dentist should feel less like a clinical visit
              and more like a moment of self-care. Our studio combines expert care
              with a warm, welcoming atmosphere.
            </p>
            <p className="text-grey-500 leading-relaxed text-base md:text-lg mt-4">
              Every treatment is tailored to you. Every detail is crafted with care.
              This isn&apos;t just dentistry — it&apos;s the art of making you feel confident again.
            </p>
          </motion.div>

          <motion.div {...fadeIn("right", 0.15)} className="relative">
            <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-grey-100">
              <img
                src="/assets/dental/4d5da1ed-55d1-4f64-b237-e2a16dc0dc96.png"
                alt="Modern dental studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-3 md:-bottom-5 -left-3 md:-left-5 bg-white rounded-xl p-4 md:p-5 shadow-lg border border-grey-100 max-w-[180px]"
            >
              <p className="text-xl md:text-2xl font-heading font-bold text-grey-900">100%</p>
              <p className="text-[10px] md:text-xs text-grey-400 uppercase tracking-wider mt-0.5">Satisfaction Guarantee</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
