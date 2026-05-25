"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Cosmetic Dentist",
    img: "https://images.unsplash.com/photo-1559839781-0e56777f956e?w=500&q=80",
    imgAlt: "https://images.unsplash.com/photo-1612349317150-c1c5ff8a34e6?w=500&q=80",
  },
  {
    name: "Dr. Marcus Weber",
    role: "Implant Specialist",
    img: "https://images.unsplash.com/photo-1622253692010-3346254aba13?w=500&q=80",
    imgAlt: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  },
  {
    name: "Elena Rossi",
    role: "Patient Care Director",
    img: "https://images.unsplash.com/photo-1594824476967-ef60f472c72d?w=500&q=80",
    imgAlt: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
  },
  {
    name: "Dr. James Park",
    role: "Orthodontics Specialist",
    img: "https://images.unsplash.com/photo-1612349317150-c1c5ff8a34e6?w=500&q=80",
    imgAlt: "https://images.unsplash.com/photo-1559839781-0e56777f956e?w=500&q=80",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full px-6 py-24 md:py-36">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-3">
            Meet the <span className="italic">experts</span>
          </h2>
          <p className="text-muted text-lg mt-3 font-light">
            Skilled professionals who genuinely care about your smile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gold-dim mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
                  loading="lazy"
                />
                <img
                  src={member.imgAlt}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-serif text-charcoal">{member.name}</h3>
              <p className="text-gold text-xs uppercase tracking-wider mt-1 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
