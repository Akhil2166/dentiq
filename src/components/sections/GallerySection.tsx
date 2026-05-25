"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1606811841476-6c757aa23f12?w=600&q=80",
  "https://images.unsplash.com/photo-1588776817505-3988c7770000?w=600&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative w-full px-6 py-32 md:py-48 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4">
            Our Work
          </h2>
          <p className="text-stone text-lg mt-4 font-light">
            A glimpse into the artistry and precision that defines every DENTIQ smile.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl bg-champagne-dim ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
