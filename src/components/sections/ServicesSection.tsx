"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Smile Makeover", desc: "Complete transformation tailored to your face and personality.", img: "/assets/dental/0e581f79-e0bb-4192-81a7-1a52462a3cb8.png" },
  { title: "Porcelain Veneers", desc: "Ultra-thin custom shells that instantly perfect your smile.", img: "/assets/dental/2dfdd730-b360-44f8-815f-66ac10a9eae1.png" },
  { title: "Dental Implants", desc: "Permanent, natural-looking replacements that feel like your own teeth.", img: "/assets/dental/959938ca-cf1c-4d4a-9a62-49b3af805286.png" },
  { title: "Teeth Whitening", desc: "Professional whitening for a radiant, camera-ready smile.", img: "/assets/dental/096c6c9b-ba0d-4d57-a7a7-e9cc0335c89b.png" },
  { title: "Clear Aligners", desc: "Straighten your teeth discreetly with custom clear aligners.", img: "/assets/dental/8de7094d-43ac-452e-af99-4832fb23a11d.png" },
  { title: "Gum Sculpting", desc: "Reshape your gum line for a balanced, beautiful smile frame.", img: "/assets/dental/0e581f79-e0bb-4192-81a7-1a52462a3cb8.png" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full px-5 md:px-8 lg:px-16 py-24 md:py-36 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.25em] font-medium">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-2 md:mt-3">Treatments</h2>
          <p className="text-sm md:text-base text-text-secondary mt-2 md:mt-3">From subtle refinements to complete transformations.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-cement-200 shadow-sm">
                <img src={s.img} alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" />
              </div>
              <h3 className="text-base md:text-lg font-heading font-semibold text-text-primary mt-3 md:mt-4 group-hover:opacity-60 transition-opacity">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
