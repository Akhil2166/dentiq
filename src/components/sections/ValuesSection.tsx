"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
  { letter: "D", word: "Dedication", desc: "Unwavering commitment to your smile." },
  { letter: "E", word: "Excellence", desc: "Only the highest standards of care." },
  { letter: "N", word: "Nurture", desc: "A warm, supportive environment." },
  { letter: "T", word: "Trust", desc: "Built through transparency and results." },
  { letter: "I", word: "Innovation", desc: "Cutting-edge technology and techniques." },
  { letter: "Q", word: "Quality", desc: "Premium materials and craftsmanship." },
];

export default function ValuesSection() {
  return (
    <section id="values" className="w-full px-5 md:px-8 py-20 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-xs md:text-sm text-grey-400 uppercase tracking-[0.25em] font-medium">Our Values</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-grey-900 mt-2 md:mt-3">
            The DENTIQ <span className="italic font-normal">Difference</span>
          </h2>
          <p className="text-sm md:text-base text-grey-400 mt-2 md:mt-3">Six principles that guide everything we do.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-5 md:p-6 text-center border border-grey-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-grey-900 text-white flex items-center justify-center mx-auto mb-3 font-heading font-bold text-lg md:text-xl">
                {v.letter}
              </div>
              <h3 className="font-heading font-semibold text-grey-900 text-sm md:text-base">{v.word}</h3>
              <p className="text-[11px] md:text-xs text-grey-400 mt-1 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
