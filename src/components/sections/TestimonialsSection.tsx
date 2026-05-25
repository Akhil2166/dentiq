"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  { name: "Sophie Laurent", text: "I used to dread the dentist. DENTIQ completely changed that. The warm atmosphere, the gentle care — I actually look forward to my visits now.", rating: 5 },
  { name: "Marcus Thorne", text: "The attention to detail is remarkable. My veneers look so natural that people just say I look 'refreshed' — exactly what I wanted.", rating: 5 },
  { name: "Julianne Moore", text: "From the moment I walked in, I felt like family. The team listened to exactly what I wanted and delivered beyond my expectations.", rating: 5 },
  { name: "David Kim", text: "Invisalign through DENTIQ was a breeze. The digital scanning was so much better than those messy impressions. Results in half the time.", rating: 5 },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="w-full px-5 md:px-8 lg:px-16 py-24 md:py-36 bg-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.25em] font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-2 md:mt-3">
            What our <span className="italic font-normal">patients</span> say
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl md:rounded-2xl bg-white border border-border shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="px-6 md:px-12 py-8 md:py-12 text-center"
              >
                <div className="flex justify-center gap-1 mb-4 md:mb-6">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-text-primary" size={16} />
                  ))}
                </div>
                <p className="text-base md:text-xl text-text-secondary leading-relaxed font-light italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <p className="text-sm font-semibold text-text-primary mt-4 md:mt-6">— {reviews[current].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-primary transition-all">
              <FaChevronLeft size={14} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "bg-text-primary w-6" : "bg-cement-300 w-2"
                  }`} />
              ))}
            </div>
            <button onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-primary transition-all">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
