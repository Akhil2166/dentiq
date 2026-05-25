"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-surface/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-lg md:text-xl font-heading font-bold text-text-primary tracking-tight">
          DENTIQ
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="px-5 py-2 rounded-full bg-text-primary text-white text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-all">
            Book Now
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-text-primary p-2" aria-label="Menu">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border-light overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-text-primary text-white text-xs font-semibold uppercase tracking-wider text-center">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
