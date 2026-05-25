"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1606811841476-6c757aa23f12?w=700&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=700&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1588776817505-3988c7770000?w=700&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=700&q=80", span: "" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative w-full px-6 py-24 md:py-36">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-3">Our Studio</h2>
          <p className="text-muted text-lg mt-3 font-light">Where your smile transformation happens.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-xl bg-gold-dim ${img.span}`}
            >
              <img src={img.src} alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-[200px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
