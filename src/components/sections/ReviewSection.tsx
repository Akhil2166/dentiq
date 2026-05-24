"use client";

import React from "react";
import { motion } from "framer-motion";

const Review = ({ name, text, rating }: { name: string; text: string; rating: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="p-8 rounded-card bg-white border border-border shadow-sm"
  >
    <div className="flex gap-1 text-primary mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <p className="text-text text-lg italic mb-6">&quot; {text} &quot;</p>
    <p className="text-text-secondary font-medium">— {name}</p>
  </motion.div>
);

export default function ReviewSection() {
  const reviews = [
    { name: "Julianne Moore", text: "The most painless experience I've ever had. DENTIQ feels more like a spa than a clinic.", rating: 5 },
    { name: "Marcus Thorne", text: "The attention to detail in my smile reconstruction was breathtaking. Truly an art form.", rating: 5 },
    { name: "Sophie Laurent", text: "Professional, welcoming, and the technology they use is light years ahead of others.", rating: 5 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {reviews.map((review, i) => (
        <Review key={i} {...review} />
      ))}
    </div>
  );
}
