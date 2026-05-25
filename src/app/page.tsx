"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToothScene from "@/components/canvas/ToothScene";
import SmoothScroll from "@/components/core/SmoothScroll";
import FloatingActionBar from "@/components/core/FloatingActionBar";
import Navbar from "@/components/core/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import AIChatbot from "@/components/sections/AIChatbot";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-heading font-bold text-grey-900 tracking-tight"
      >
        DENTIQ
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-10 h-0.5 bg-grey-900 mt-3"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="text-xs text-grey-400 uppercase tracking-[0.3em] mt-3"
      >
        The Art of Your Smile
      </motion.p>
    </motion.div>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <ToothScene />
          <Navbar />
          <FloatingActionBar />
          <AIChatbot />

          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ValuesSection />
            <ServicesSection />
            <GallerySection />
            <TeamSection />
            <TestimonialsSection />
            <ContactSection />

            <footer className="bg-grey-900 text-white/50 px-5 md:px-8 py-10 md:py-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white">DENTIQ</h3>
                  <p className="text-xs md:text-sm text-white/30 mt-0.5">The Art of Your Smile</p>
                </div>
                <div className="flex gap-6 text-xs uppercase tracking-wider">
                  <a href="#about" className="hover:text-white transition-colors">About</a>
                  <a href="#services" className="hover:text-white transition-colors">Services</a>
                  <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              <div className="max-w-7xl mx-auto mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[11px] md:text-xs text-white/20">
                <p>&copy; 2026 DENTIQ. All rights reserved.</p>
              </div>
            </footer>
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
