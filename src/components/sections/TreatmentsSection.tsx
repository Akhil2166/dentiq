"use client";

import React from "react";
import { motion } from "framer-motion";

const treatments = [
  {
    title: "Cosmetic Veneers",
    desc: "Ultra-thin porcelain shells crafted to perfection, transforming your smile in just two visits.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  },
  {
    title: "Smile Makeover",
    desc: "A complete digital design & restoration process tailored to your facial harmony.",
    image: "https://images.unsplash.com/photo-1588776817505-3988c7770000?w=600&q=80",
  },
  {
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements that restore both function and aesthetics.",
    image: "https://images.unsplash.com/photo-1606811841476-6c757aa23f12?w=600&q=80",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional-grade whitening for a luminous, camera-ready smile.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    title: "Invisalign",
    desc: "Clear, comfortable aligners that straighten your teeth discreetly.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
  },
  {
    title: "Gum Contouring",
    desc: "Reshaping gum tissue to create a balanced, symmetrical smile frame.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
];

const TreatmentCard = ({ title, desc, image, index }: typeof treatments[0] & { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group cursor-pointer"
  >
    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-champagne-dim">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <h3 className="text-xl font-serif text-charcoal mt-5 group-hover:text-champagne transition-colors">
      {title}
    </h3>
    <p className="text-stone text-sm leading-relaxed mt-2 font-light">{desc}</p>
  </motion.div>
);

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="relative w-full px-6 py-32 md:py-48 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4">
            Treatments
          </h2>
          <p className="text-stone text-lg mt-4 font-light">
            From subtle refinements to complete transformations — every procedure is
            executed with precision and passion.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <TreatmentCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
