"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Technology", href: "#technology" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif text-charcoal tracking-tight">
          DENTIQ
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone hover:text-charcoal transition-colors uppercase tracking-wider font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-charcoal text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-champagne transition-all duration-500"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-charcoal"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-md overflow-hidden border-t border-border-light"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-stone hover:text-charcoal transition-colors uppercase tracking-wider text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-charcoal text-white text-xs uppercase tracking-[0.15em] font-medium text-center hover:bg-champagne transition-all"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
