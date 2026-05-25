"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const items = [
  { icon: FaMapMarkerAlt, label: "Address", value: "123 Luxury Lane, Beverly Hills, CA 90210" },
  { icon: FaPhone, label: "Call Us", value: "+1 (310) 555-0198" },
  { icon: FaEnvelope, label: "Email", value: "hello@dentiq.com" },
  { icon: FaClock, label: "Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-5 md:px-8 py-20 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-xs md:text-sm text-grey-400 uppercase tracking-[0.25em] font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-grey-900 mt-2 md:mt-3">
            Let&apos;s talk about <span className="italic font-normal">your smile</span>
          </h2>
          <p className="text-sm md:text-base text-grey-400 mt-2 md:mt-3">Book your free consultation today.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:space-y-6"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-grey-200 flex items-center justify-center text-grey-500 shrink-0">
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="text-[11px] md:text-xs uppercase tracking-wider text-grey-400 font-medium">{item.label}</p>
                  <p className="text-sm md:text-base text-grey-700">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-grey-100 shadow-sm"
          >
            <h3 className="text-lg md:text-xl font-heading font-semibold text-grey-900 mb-5 md:mb-6">Book a Free Consultation</h3>
            <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <input type="text" placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-grey-200 focus:outline-none focus:border-grey-900 transition-colors text-sm" />
                <input type="text" placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-grey-200 focus:outline-none focus:border-grey-900 transition-colors text-sm" />
              </div>
              <input type="email" placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-bg border border-grey-200 focus:outline-none focus:border-grey-900 transition-colors text-sm" />
              <input type="tel" placeholder="Phone"
                className="w-full px-4 py-3 rounded-xl bg-bg border border-grey-200 focus:outline-none focus:border-grey-900 transition-colors text-sm" />
              <select
                className="w-full px-4 py-3 rounded-xl bg-bg border border-grey-200 focus:outline-none focus:border-grey-900 transition-colors text-sm text-grey-400">
                <option value="">I&apos;m interested in...</option>
                <option>Smile Makeover</option>
                <option>Porcelain Veneers</option>
                <option>Dental Implants</option>
                <option>Teeth Whitening</option>
                <option>Clear Aligners</option>
                <option>General Consultation</option>
              </select>
              <motion.button type="submit"
                whileHover={{ scale: 1.01 }}
                className="w-full py-3.5 rounded-full bg-grey-900 text-white text-sm font-semibold uppercase tracking-wider hover:bg-grey-700 transition-all">
                Send Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
