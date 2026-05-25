"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full px-6 py-24 md:py-36 bg-warm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-3">
            Let&apos;s talk about <span className="italic">your smile</span>
          </h2>
          <p className="text-muted text-lg mt-3 font-light">
            Book your free consultation and take the first step toward a smile you&apos;ll love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: FaMapMarkerAlt, label: "Address", value: "123 Luxury Lane, Beverly Hills, CA 90210" },
              { icon: FaPhone, label: "Call Us", value: "+1 (310) 555-0198" },
              { icon: FaEnvelope, label: "Email", value: "hello@dentiq.com" },
              { icon: FaClock, label: "Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-dim flex items-center justify-center text-gold shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted font-medium">{item.label}</p>
                  <p className="text-text">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-border-light"
          >
            <h3 className="text-xl font-serif text-charcoal mb-6">Book a Free Consultation</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name"
                  className="w-full px-4 py-3.5 rounded-xl bg-warm border border-border-light focus:outline-none focus:border-gold transition-colors text-sm" />
                <input type="text" placeholder="Last Name"
                  className="w-full px-4 py-3.5 rounded-xl bg-warm border border-border-light focus:outline-none focus:border-gold transition-colors text-sm" />
              </div>
              <input type="email" placeholder="Email"
                className="w-full px-4 py-3.5 rounded-xl bg-warm border border-border-light focus:outline-none focus:border-gold transition-colors text-sm" />
              <input type="tel" placeholder="Phone"
                className="w-full px-4 py-3.5 rounded-xl bg-warm border border-border-light focus:outline-none focus:border-gold transition-colors text-sm" />
              <select
                className="w-full px-4 py-3.5 rounded-xl bg-warm border border-border-light focus:outline-none focus:border-gold transition-colors text-sm text-muted">
                <option value="">I&apos;m interested in...</option>
                <option>Smile Makeover</option>
                <option>Porcelain Veneers</option>
                <option>Dental Implants</option>
                <option>Teeth Whitening</option>
                <option>Clear Aligners</option>
                <option>General Consultation</option>
              </select>
              <button type="submit"
                className="w-full py-3.5 rounded-full bg-charcoal text-white text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold transition-all duration-500">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
