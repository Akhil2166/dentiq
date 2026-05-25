"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToothScene from "@/components/canvas/ToothScene";
import SmoothScroll from "@/components/core/SmoothScroll";
import FloatingActionBar from "@/components/core/FloatingActionBar";
import Navbar from "@/components/core/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import AIChatbot from "@/components/sections/AIChatbot";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-cream flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-7xl font-serif text-charcoal tracking-tight"
      >
        DENTIQ
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
        className="w-12 h-px bg-champagne mt-6"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-xs uppercase tracking-[0.3em] text-stone mt-6 font-medium"
      >
        The Art of Your Smile
      </motion.p>
    </motion.div>
  );
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <ToothScene />
          <Navbar />
          <FloatingActionBar />
          <AIChatbot />

          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <TreatmentsSection />
            <TechnologySection />
            <GallerySection />
            <TeamSection />
            <TestimonialsSection />
            <ContactSection />

            {/* Footer */}
            <footer className="bg-charcoal text-white/70 px-6 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h3 className="text-3xl font-serif text-white">DENTIQ</h3>
                    <p className="text-sm mt-2 font-light">The Art of Your Smile</p>
                  </div>
                  <div className="flex gap-8 text-xs uppercase tracking-wider">
                    <a href="#about" className="hover:text-champagne transition-colors">About</a>
                    <a href="#treatments" className="hover:text-champagne transition-colors">Treatments</a>
                    <a href="#contact" className="hover:text-champagne transition-colors">Contact</a>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
                  <p>&copy; 2026 DENTIQ. All rights reserved.</p>
                  <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
