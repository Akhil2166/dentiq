"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sophie Laurent",
    text: "I used to dread the dentist. DENTIQ completely changed that. The warm atmosphere, the gentle care — I actually look forward to my visits now. My smile has never looked better.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    text: "The attention to detail is remarkable. My veneers look so natural that people just say I look 'refreshed' — exactly what I wanted. Worth every penny.",
    rating: 5,
  },
  {
    name: "Julianne Moore",
    text: "From the moment I walked in, I felt like family. The team listened to exactly what I wanted and delivered beyond my expectations. I can't stop smiling!",
    rating: 5,
  },
  {
    name: "David Kim",
    text: "Invisalign through DENTIQ was a breeze. The digital scanning was so much better than those messy impressions. Results in half the time I expected.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative w-full px-6 py-24 md:py-36 bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-3">
            What our <span className="italic">patients</span> say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 md:p-12 border border-border-light text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-gold" size={18} />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-text leading-relaxed font-light italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <p className="text-sm font-medium text-charcoal mt-6">— {reviews[current].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center text-muted hover:text-charcoal hover:border-charcoal transition-all">
              <FaChevronLeft size={16} />
            </button>
            <button onClick={next}
              className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center text-muted hover:text-charcoal hover:border-charcoal transition-all">
              <FaChevronRight size={16} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-gold w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
