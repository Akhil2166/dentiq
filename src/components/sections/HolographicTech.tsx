"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HolographicTech() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-24"
      >
        <h2 className="text-6xl md:text-8xl font-nuckle text-charcoal mb-8">The Future of <span className="text-primary">Care</span></h2>
        <p className="text-text-secondary text-xl max-w-2xl mx-auto font-light">
          We employ a proprietary, holographic mirror system that allows patients to walk through their own smile transformation in real-time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[
          { title: "Neural Scan", desc: "Millimeter-perfect mapping of your facial anatomy.", icon: "📡" },
          { title: "AI Sculpting", desc: "Predictive aesthetics based on global beauty standards.", icon: "🤖" },
          { title: "Holo-Mirror", desc: "Real-time visualization of your future result.", icon: "💎" },
        ].map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="glass p-10 rounded-card text-center border-white/30 shadow-xl relative group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:animate-bounce transition-all">
              {tech.icon}
            </div>
            <h3 className="text-2xl font-nuckle text-charcoal mt-4 mb-4">{tech.title}</h3>
            <p className="text-text-secondary leading-relaxed">{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
