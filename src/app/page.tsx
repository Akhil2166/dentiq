"use client";

import React from "react";
import ToothScene from "@/components/canvas/ToothScene";
import SmoothScroll from "@/components/core/SmoothScroll";
import FloatingActionBar from "@/components/core/FloatingActionBar";
import AIChatbot from "@/components/sections/AIChatbot";
import CinematicServices from "@/components/sections/CinematicServices";
import TransformationSlider from "@/components/sections/TransformationSlider";
import HolographicTech from "@/components/sections/HolographicTech";
import TeamGallery from "@/components/sections/TeamGallery";
import ReviewSection from "@/components/sections/ReviewSection";
import MapFooter from "@/components/sections/MapFooter";
import { motion } from "framer-motion";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`relative min-h-screen w-full flex items-center justify-center px-6 md:px-24 py-32 ${className}`}>
    {children}
  </section>
);

export default function Page() {
  return (
    <SmoothScroll>
      <ToothScene />
      <FloatingActionBar />
      <AIChatbot />

      <main className="relative z-10">
        {/* Scene 1: The Arrival */}
        <Section className="justify-center text-center">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-9xl md:text-[15rem] font-nuckle font-normal text-charcoal tracking-tighter leading-none"
            >
              DENTIQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl md:text-4xl text-text-secondary mt-8 font-light italic tracking-wide"
            >
              The Art of the Infinite Smile.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex justify-center gap-6"
            >
              <button className="px-10 py-4 rounded-full bg-charcoal text-white font-nuckle text-lg hover:bg-primary transition-all duration-500">
                Begin Experience
              </button>
            </motion.div>
          </div>
        </Section>

        {/* Scene 2: The Expertise */}
        <Section id="specialities" className="justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-left"
              >
                <h2 className="text-6xl md:text-9xl font-nuckle text-charcoal mb-8 leading-none">
                  Surgical <br /> <span className="text-primary">Couture</span>
                </h2>
                <p className="text-xl text-text-secondary font-light leading-relaxed max-w-lg mb-12">
                  We treat dentistry as a high-art form. Every procedure is a meticulous composition of science and aesthetics, designed to create a legacy of confidence.
                </p>
              </motion.div>
              <CinematicServices />
            </div>
          </div>
        </Section>

        {/* Scene 3: The Philosophy */}
        <Section id="about" className="justify-center text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="glass p-16 rounded-card border-white/40"
            >
              <h2 className="text-5xl md:text-8xl font-nuckle text-charcoal mb-12">
                Benevolence <br /> <span className="italic">In Every Detail</span>
              </h2>
              <p className="text-2xl text-text-secondary leading-relaxed font-light">
                DENTIQ is not a clinic; it is a sanctuary. We believe that true luxury is the absence of fear and the presence of total precision. By blending a human-centric philosophy with futuristic technology, we restore more than just smiles—we restore identities.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Scene 4: The Metamorphosis */}
        <Section id="transformation" className="justify-center">
          <TransformationSlider />
        </Section>

        {/* Scene 5: The Future */}
        <Section id="tech" className="justify-center">
          <HolographicTech />
        </Section>

        {/* Scene 6: The Human Touch */}
        <Section id="team" className="justify-center text-center">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-nuckle text-charcoal mb-24"
            >
              The <span className="italic">Visionaries</span>
            </motion.h2>
            <TeamGallery />
          </div>
        </Section>

        {/* Scene 7: The Trust */}
        <Section id="reviews" className="justify-center text-center">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-nuckle text-charcoal mb-20"
            >
              Patient <span className="text-primary">Auras</span>
            </motion.h2>
            <ReviewSection />
          </div>
        </Section>

        {/* Scene 8: The Destination */}
        <Section className="justify-center text-center bg-charcoal text-soft-white">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-nuckle mb-16"
            >
              Visit Our <span className="text-primary">Studio</span>
            </motion.h2>
            <MapFooter />
            <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-left">
                <h3 className="text-6xl font-nuckle">DENTIQ</h3>
                <p className="text-silver-grey mt-4 text-xl font-light">Redefining the smile experience.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,94,43,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-primary text-charcoal font-nuckle text-2xl rounded-button transition-all duration-500"
              >
                Book Your Consultation
              </motion.button>
            </div>
            <div className="mt-32 pt-12 border-t border-white/10 text-silver-grey text-sm flex justify-between items-center font-light uppercase tracking-widest">
              <p>© 2026 DENTIQ. Digital Artistry.</p>
              <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </SmoothScroll>
  );
}
