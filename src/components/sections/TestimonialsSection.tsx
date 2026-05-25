"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Julianne M.",
    text: "I was nervous about my smile makeover, but the team at DENTIQ made every moment comfortable. The result? I smile more in a day than I used to in a year.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Marcus T.",
    text: "The attention to detail is unmatched. My veneers look so natural that even my close friends can't tell — they just say I look 'different, in a great way.'",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Sophie L.",
    text: "From the warm studio atmosphere to the gentle care during my implant procedure — DENTIQ has completely changed how I feel about dentistry.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full px-6 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4">
            Patient Stories
          </h2>
          <p className="text-stone text-lg mt-4 font-light">
            Real smiles. Real results. Hear from those who have trusted us with their transformation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-pure-white rounded-2xl p-8 border border-border-light"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-champagne text-lg">★</span>
                ))}
              </div>
              <p className="text-soft-charcoal leading-relaxed text-sm font-light italic mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-champagne-dim">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-charcoal">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
