"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MapsSection() {
  return (
    <section id="location" className="w-full py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.25em] font-medium">Location</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-2 md:mt-3">
            Visit Our <span className="italic font-normal">Studio</span>
          </h2>
          <p className="text-sm md:text-base text-text-secondary mt-2 md:mt-3">Find us in the heart of Beverly Hills.</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full"
      >
        <div className="w-full h-[350px] md:h-[450px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355676422!2d-118.69191835!3d34.0207305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DENTIQ Location"
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg border border-border-light max-w-[250px]">
            <p className="text-sm font-heading font-semibold text-text-primary">DENTIQ Studio</p>
            <p className="text-xs text-text-muted mt-1">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
