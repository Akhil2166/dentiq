"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Cosmetic Dentist",
    bio: "Harvard-trained with 18 years of experience in aesthetic smile reconstruction.",
    image: "https://images.unsplash.com/photo-1559839781-0e56777f956e?w=400&q=80",
  },
  {
    name: "Dr. Marcus Weber",
    role: "Implant Surgeon",
    bio: "Specialist in advanced implantology and full-mouth rehabilitation.",
    image: "https://images.unsplash.com/photo-1622253692010-3346254aba13?w=400&q=80",
  },
  {
    name: "Elena Rossi",
    role: "Patient Care Director",
    bio: "Your personal concierge from first call to final reveal — ensuring every moment feels effortless.",
    image: "https://images.unsplash.com/photo-1594824476967-ef60f472c72h?w=400&q=80",
  },
  {
    name: "Dr. James Park",
    role: "Orthodontics Specialist",
    bio: "Expert in clear aligner therapy and aesthetic orthodontic solutions.",
    image: "https://images.unsplash.com/photo-1612349317150-c1c5ff8a34e6?w=400&q=80",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full px-6 py-32 md:py-48 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Our Team
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4">
            The <span className="italic">Visionaries</span>
          </h2>
          <p className="text-stone text-lg mt-4 font-light">
            Meet the artists and scientists behind every DENTIQ smile.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-champagne-dim mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-serif text-charcoal">{member.name}</h3>
              <p className="text-champagne text-xs uppercase tracking-wider mt-1 font-medium">{member.role}</p>
              <p className="text-stone text-sm mt-2 leading-relaxed font-light max-w-[260px] mx-auto">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
