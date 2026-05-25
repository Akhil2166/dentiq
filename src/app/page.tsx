"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToothScene from "@/components/canvas/ToothScene";
import SmoothScroll from "@/components/core/SmoothScroll";
import FloatingActionBar from "@/components/core/FloatingActionBar";
import Navbar from "@/components/core/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
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
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] bg-cream flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-serif text-charcoal tracking-tight"
      >
        DENTIQ
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-12 h-0.5 bg-gold mt-4"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-xs uppercase tracking-[0.3em] text-muted mt-4"
      >
        The Art of Your Smile
      </motion.p>
    </motion.div>
  );
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <ToothScene />
          <Navbar />
          <FloatingActionBar />
          <AIChatbot />

          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <GallerySection />
            <TeamSection />
            <TestimonialsSection />
            <ContactSection />

            <footer className="bg-charcoal text-white/60 px-6 py-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif text-white">DENTIQ</h3>
                  <p className="text-sm mt-1 font-light text-white/40">The Art of Your Smile</p>
                </div>
                <div className="flex gap-8 text-xs uppercase tracking-wider">
                  <a href="#about" className="hover:text-gold transition-colors">About</a>
                  <a href="#services" className="hover:text-gold transition-colors">Services</a>
                  <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
                </div>
              </div>
              <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                <p>&copy; 2026 DENTIQ. All rights reserved.</p>
              </div>
            </footer>
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
