"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Smile Makeover",
    desc: "Complete transformation tailored to your face, your personality, your goals.",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  },
  {
    title: "Porcelain Veneers",
    desc: "Ultra-thin custom shells that instantly perfect your smile.",
    img: "https://images.unsplash.com/photo-1606811841476-6c757aa23f12?w=600&q=80",
  },
  {
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements that feel just like your own teeth.",
    img: "https://images.unsplash.com/photo-1588776817505-3988c7770000?w=600&q=80",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening for a radiant, camera-ready smile.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    title: "Clear Aligners",
    desc: "Straighten your teeth discreetly with custom clear aligners.",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
  },
  {
    title: "Gum Sculpting",
    desc: "Reshape your gum line for a balanced, beautiful smile frame.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
];

const ServiceCard = ({ title, desc, img, index }: typeof services[0] & { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="group"
  >
    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gold-dim">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
    </div>
    <h3 className="text-lg font-serif text-charcoal mt-4 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-muted text-sm leading-relaxed mt-1.5 font-light">{desc}</p>
  </motion.div>
);

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full px-6 py-24 md:py-36 bg-warm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-3">Treatments</h2>
          <p className="text-muted text-lg mt-3 font-light">
            From subtle refinements to complete transformations — every smile tells a story.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => <ServiceCard key={i} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
