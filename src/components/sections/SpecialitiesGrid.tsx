"use client";

import React from "react";
import { motion } from "framer-motion";

const Speciality = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 rounded-card bg-bg-secondary border border-border hover:border-primary transition-all duration-300 group cursor-pointer"
  >
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-nuckle text-text mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-text-secondary leading-relaxed">{desc}</p>
  </motion.div>
);

export default function SpecialitiesGrid() {
  const items = [
    { title: "Digital Implantology", desc: "Precision-guided placements for a lifetime of stability and confidence.", icon: "🦷" },
    { title: "Smile Design", desc: "Custom aesthetic contours that harmonize with your unique facial features.", icon: "✨" },
    { title: la: "Advanced Periodontics", desc: "Holistic gum care focused on preserving the foundation of your smile.", icon: "🛡️" },
    { title: "Preventative Care", desc: "Proactive health strategies to ensure long-term oral wellness.", icon: "🩺" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
      {items.map((item, i) => (
        <Speciality key={i} {...item} />
      ))}
    </div>
  );
}
