"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TransformationSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl md:text-8xl font-nuckle text-charcoal mb-6">The Metamorphosis</h2>
        <p className="text-text-secondary text-xl font-light">From aspiration to reality. Witness the power of precision.</p>
      </motion.div>

      <div className="relative aspect-video w-full rounded-card overflow-hidden shadow-2xl group cursor-ew-resize">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841476-6C757aa23f12?w=1200')] bg-cover bg-center" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776817505-3988C7770000?w=1200')] bg-cover bg-center w-1/2 z-10 border-r-2 border-white"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="px-4 py-2 bg-charcoal text-white rounded-full text-xs uppercase tracking-widest font-nuckle">
            Slide to Compare
          </div>
        </div>
      </div>
    </div>
  );
}
