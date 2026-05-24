"use client";

import React from "react";
import ToothScene from "@/components/canvas/ToothScene";
import SmoothScroll from "@/components/core/SmoothScroll";
import FloatingActionBar from "@/components/core/FloatingActionBar";
import SpecialitiesGrid from "@/components/sections/SpecialitiesGrid";
import TeamGallery from "@/components/sections/TeamGallery";
import ReviewSection from "@/components/sections/ReviewSection";
import MapFooter from "@/components/sections/MapFooter";
import { motion } from "framer-motion";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`relative min-h-screen w-full flex items-center justify-center px-6 md:px-24 py-20 ${className}`}>
    {children}
  </section>
);

export default function Page() {
  return (
    <SmoothScroll>
      <ToothScene />
      <FloatingActionBar />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Section className="justify-center text-center">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-8xl md:text-[12rem] font-nuckle font-normal text-text tracking-tighter"
            >
              DENTIQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-3xl text-text-secondary mt-4 font-light italic"
            >
              We All Shine.
            </motion.p>
          </div>
        </Section>

        {/* 2. Specialities Section */}
        <Section id="specialities" className="justify-center text-center">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-nuckle text-text mb-20"
            >
              The Standard of <br /> <span className="text-primary">Excellence</span>
            </motion.h2>
            <SpecialitiesGrid />
          </div>
        </Section>

        {/* 3. About Section */}
        <Section id="about" className="justify-start">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-nuckle text-text mb-12"
            >
              Benevolence <br /> In Every Detail
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-secondary leading-relaxed space-y-6"
            >
              <p>
                DENTIQ is not just a clinic; it is a sanctuary of oral health where art meets science. We believe that a smile is the most powerful form of communication.
              </p>
              <p>
                By blending cutting-edge digital mirror technology with a philosophy of profound kindness, we remove the fear from dentistry, replacing it with trust, comfort, and breathtaking results.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* 4. Team Section */}
        <Section id="team" className="justify-center text-center">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-nuckle text-text mb-20"
            >
              The Visionaries
            </motion.h2>
            <TeamGallery />
          </div>
        </Section>

        {/* 5. Reviews Section */}
        <Section id="reviews" className="justify-center text-center">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-nuckle text-text mb-20"
            >
              Patient <span className="text-primary">Stories</span>
            </motion.h2>
            <ReviewSection />
          </div>
        </Section>

        {/* 6. Footer/Map Section */}
        <Section className="justify-center text-center bg-text text-bg">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-nuckle mb-12"
            >
              Visit Our <span className="text-primary">Studio</span>
            </motion.h2>
            <MapFooter />
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left">
                <h3 className="text-4xl font-nuckle">DENTIQ</h3>
                <p className="text-text-secondary mt-2">Redefining the smile experience.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-primary text-text font-nuckle text-2xl rounded-button hover:bg-white transition-colors"
              >
                Book Your Consultation
              </motion.button>
            </div>
            <div className="mt-24 pt-8 border-t border-text-secondary/20 text-text-secondary text-sm flex justify-between items-center">
              <p>© 2026 DENTIQ. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </SmoothScroll>
  );
}
