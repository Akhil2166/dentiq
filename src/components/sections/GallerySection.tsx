"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/dental/4d5da1ed-55d1-4f64-b237-e2a16dc0dc96.png", span: "md:col-span-2 md:row-span-2" },
  { src: "/assets/dental/0e581f79-e0bb-4192-81a7-1a52462a3cb8.png", span: "" },
  { src: "/assets/dental/2dfdd730-b360-44f8-815f-66ac10a9eae1.png", span: "" },
  { src: "/assets/dental/959938ca-cf1c-4d4a-9a62-49b3af805286.png", span: "" },
  { src: "/assets/dental/096c6c9b-ba0d-4d57-a7a7-e9cc0335c89b.png", span: "" },
  { src: "/assets/dental/8de7094d-43ac-452e-af99-4832fb23a11d.png", span: "" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full px-5 md:px-8 lg:px-16 py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.25em] font-medium">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-2 md:mt-3">Our Studio</h2>
          <p className="text-sm md:text-base text-text-secondary mt-2 md:mt-3">Where your smile transformation happens.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`overflow-hidden rounded-lg md:rounded-xl bg-cement-200 ${img.span} min-h-[120px] md:min-h-[200px] shadow-sm`}
            >
              <img src={img.src} alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
