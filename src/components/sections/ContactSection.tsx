"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full px-6 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mt-4">
            Your Journey <span className="italic">Starts Here</span>
          </h2>
          <p className="text-stone text-lg mt-4 font-light">
            Book your private consultation and discover what DENTIQ can create for you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: FaMapMarkerAlt, label: "Address", value: "123 Luxury Lane, Beverly Hills, CA 90210" },
              { icon: FaPhone, label: "Phone", value: "+1 (310) 555-0198" },
              { icon: FaEnvelope, label: "Email", value: "hello@dentiq.com" },
              { icon: FaClock, label: "Hours", value: "Mon–Fri: 9am – 6pm" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-champagne-dim flex items-center justify-center text-champagne shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone font-medium">{item.label}</p>
                  <p className="text-charcoal mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-pure-white rounded-3xl p-8 md:p-10 border border-border-light"
          >
            <h3 className="text-2xl font-serif text-charcoal mb-6">Request a Consultation</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 py-4 rounded-xl bg-warm-white border border-border-light focus:outline-none focus:border-champagne transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 py-4 rounded-xl bg-warm-white border border-border-light focus:outline-none focus:border-champagne transition-colors text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl bg-warm-white border border-border-light focus:outline-none focus:border-champagne transition-colors text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl bg-warm-white border border-border-light focus:outline-none focus:border-champagne transition-colors text-sm"
              />
              <select className="w-full px-5 py-4 rounded-xl bg-warm-white border border-border-light focus:outline-none focus:border-champagne transition-colors text-sm text-stone">
                <option value="">Select Treatment Interest</option>
                <option>Cosmetic Veneers</option>
                <option>Smile Makeover</option>
                <option>Dental Implants</option>
                <option>Teeth Whitening</option>
                <option>Invisalign</option>
                <option>Other</option>
              </select>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-charcoal text-white text-sm uppercase tracking-[0.15em] font-medium hover:bg-champagne transition-all duration-500"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
