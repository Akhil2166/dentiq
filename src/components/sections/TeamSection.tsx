"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Dr. Sarah Chen", role: "Lead Cosmetic Dentist", img: "https://images.unsplash.com/photo-1559839781-0e56777f956e?w=500&q=80", alt: "https://images.unsplash.com/photo-1612349317150-c1c5ff8a34e6?w=500&q=80" },
  { name: "Dr. Marcus Weber", role: "Implant Specialist", img: "https://images.unsplash.com/photo-1622253692010-3346254aba13?w=500&q=80", alt: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
  { name: "Elena Rossi", role: "Patient Care Director", img: "https://images.unsplash.com/photo-1594824476967-ef60f472c72d?w=500&q=80", alt: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" },
  { name: "Dr. James Park", role: "Orthodontics Specialist", img: "https://images.unsplash.com/photo-1612349317150-c1c5ff8a34e6?w=500&q=80", alt: "https://images.unsplash.com/photo-1559839781-0e56777f956e?w=500&q=80" },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full px-5 md:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-xs md:text-sm text-grey-400 uppercase tracking-[0.25em] font-medium">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-grey-900 mt-2 md:mt-3">
            Meet the <span className="italic font-normal">experts</span>
          </h2>
          <p className="text-sm md:text-base text-grey-400 mt-2 md:mt-3">Skilled professionals who genuinely care about your smile.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-grey-100 mb-3 md:mb-4">
                <img src={m.img} alt={m.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
                  loading="lazy" />
                <img src={m.alt} alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-110"
                  loading="lazy" />
              </div>
              <h3 className="text-sm md:text-lg font-heading font-semibold text-grey-900">{m.name}</h3>
              <p className="text-[11px] md:text-xs text-grey-400 uppercase tracking-wider mt-0.5 md:mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
