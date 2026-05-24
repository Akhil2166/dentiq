"use client";

import React from "react";
import ToothScene from "@/components/canvas/ToothScene";
import SmoothScroll from "@/components/core/SmoothScroll";
import { motion } from "framer-motion";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative min-h-screen w-full flex items-center justify-center px-6 md:px-24 ${className}`}>
    {children}
  </section>
);

export default function Page() {
  return (
    <SmoothScroll>
      <ToothScene />

      <main className="relative z-10">
        {/* Hero Section */}
        <Section className="justify-center text-center">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl font-nuckle font-normal text-text"
            >
              DENTIQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-secondary mt-4"
            >
              We All Shine.
            </motion.p>
          </div>
        </Section>

        {/* Services Section */}
        <Section className="justify-start">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-nuckle text-text mb-8"
            >
              Modern <br /> Excellence
            </motion.h2>
            <div className="space-y-6">
              {[
                { title: "Digital Implantology", desc: "Precision-guided placements for lasting results." },
                { title: "Smile Aesthetics", desc: "Crafting a natural, radiant smile tailored to you." },
                { title: "Periodontal Care", desc: "Advanced gum health for a stronger foundation." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="p-6 rounded-card bg-bg-secondary border border-border hover:border-primary transition-colors cursor-pointer group"
                >
                  <h3 className="text-2xl font-nuckle text-text group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-secondary mt-2">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Detail Section */}
        <Section className="justify-center text-center">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-nuckle text-text"
            >
              The Art of <span className="text-primary">Precision</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg text-text-secondary mt-6 max-w-lg mx-auto"
            >
              Combining cutting-edge technology with a human touch. Every detail is meticulously crafted to ensure your comfort and a perfect result.
            </motion.p>
          </div>
        </Section>

        {/* About/Team Section */}
        <Section className="justify-end text-right">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-nuckle text-text mb-8"
            >
              Expert Hands, <br /> Caring Hearts
            </motion.h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="aspect-square bg-border rounded-button overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="w-full h-full bg-grey-200" />
                  {/* Images would go here */}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Footer Section */}
        <Section className="justify-center text-center bg-text text-bg">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-nuckle mb-12"
            >
              Ready to Shine?
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-primary text-text font-nuckle text-xl rounded-button hover:bg-white transition-colors"
            >
              Book Your Consultation
            </motion.button>
            <div className="mt-24 text-text-secondary text-sm">
              © 2026 DENTIQ. All rights reserved.
            </div>
          </div>
        </Section>
      </main>
    </SmoothScroll>
  );
}
