"use client";

import React from "react";
import { motion } from "framer-motion";

const techs = [
  {
    title: "3D Digital Scanning",
    desc: "Intraoral scanners capture your teeth in precise 3D — no messy impressions, just instant accuracy.",
    icon: "🔬",
  },
  {
    title: "AI Smile Design",
    desc: "Our AI analyzes facial proportions to generate your ideal smile before treatment begins.",
    icon: "🦷",
  },
  {
    title: "CAD/CAM Milling",
    desc: "Same-day ceramic restorations milled from solid blocks of premium dental porcelain.",
    icon: "⚙️",
  },
  {
    title: "Laser Dentistry",
    desc: "Minimally invasive laser procedures for faster healing and virtually pain-free treatment.",
    icon: "💡",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative w-full px-6 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Innovation
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4">
            Technology
          </h2>
          <p className="text-stone text-lg mt-4 font-light">
            We invest in the world&apos;s most advanced dental technology to deliver
            results that exceed expectations.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-pure-white rounded-2xl p-8 border border-border-light hover:border-champagne/30 transition-all duration-300"
            >
              <span className="text-3xl block mb-4">{tech.icon}</span>
              <h3 className="text-lg font-serif text-charcoal">{tech.title}</h3>
              <p className="text-stone text-sm mt-3 leading-relaxed font-light">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
