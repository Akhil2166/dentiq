"use client";

import React from "react";
import { motion } from "framer-motion";

const TeamMember = ({ name, role, img }: { name: string; role: string; img: string }) => (
  <motion.div
    className="relative aspect-[3/4] rounded-button overflow-hidden group cursor-pointer"
    whileHover={{ scale: 0.98 }}
  >
    {/* Base Image */}
    <div
      className="absolute inset-0 bg-border transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />

    {/* Reveal Overlay */}
    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-sm font-medium uppercase tracking-widest opacity-70">{role}</p>
        <h4 className="text-2xl font-nuckle">{name}</h4>
      </div>
    </div>
  </motion.div>
);

export default function TeamGallery() {
  const team = [
    { name: "Dr. Sarah Chen", role: "Lead Surgeon", img: "https://images.unsplash.com/photo-1559839781-0e56777f956e?w=400" },
    { name: "Dr. Marc Levin", role: "Implant Specialist", img: "https://images.unsplash.com/photo-1622253692010-3346254aba13?w=400" },
    { name: "Elena Rodriguez", role: "Patient Coordinator", img: "https://images.unsplash.com/photo-1594824476967-ef60f472C72H?w=400" },
    { name: "Dr. James Wu", role: "Orthodontist", img: "https://images.unsplash.com/photo-1612349317150-c العملاقة?w=400" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
      {team.map((member, i) => (
        <TeamMember key={i} {...member} />
      ))}
    </div>
  );
}
