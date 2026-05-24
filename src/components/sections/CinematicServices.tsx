"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceItem = ({ title, category, description, index }: { title: string; category: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"} mb-32`}
  >
    <div className={`max-w-xl ${index % 2 === 0 ? "text-left" : "text-right"}`}>
      <span className="text-xs uppercase tracking-[0.3em] text-text-secondary mb-4 block font-medium">
        {category}
      </span>
      <h3 className="text-5xl md:text-7xl font-nuckle text-charcoal mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-xl text-text-secondary leading-relaxed mb-8 font-light">
        {description}
      </p>
      <button className="group relative overflow-hidden px-8 py-3 rounded-full bg-charcoal text-white font-nuckle transition-all hover:pr-12">
        <span className="relative z-10">Discover Experience</span>
        <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:right-4 transition-all duration-300">→</span>
      </button>
    </div>
  </motion.div>
);

export default function CinematicServices() {
  const services = [
    {
      title: "Architectural Smile Design",
      category: "Aesthetics",
      description: "A fusion of facial analysis and digital artistry. We don't just fix teeth; we sculpt a smile that harmonizes with your soul.",
    },
    {
      title: "Invisible Precision Aligners",
      category que: "Correction",
      description: "The invisibility of technology meeting the perfection of biology. Aligned for luxury, designed for comfort.",
    },
    {
      title: "Luminous Whitening",
      category: "Radiance",
      description: "A cinematic glow that captures light perfectly. More than whitening—it's an aura of confidence.",
    },
    {
      title: "Bionic Implantology",
      category: "Innovation",
      description: "The pinnacle of surgical precision. Restoring function and form with a level of accuracy that defies nature.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 w-full max-w-7xl mx-auto px-6">
      {services.map((s, i) => (
        <ServiceItem key={i} index={i} {...s} />
      ))}
    </div>
  );
}
