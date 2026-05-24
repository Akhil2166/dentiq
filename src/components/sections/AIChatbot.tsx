"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaClose } from "react-icons/fa";

type Message = { role: "ai" | "user"; text: string };

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Welcome to DENTIQ. I am your AI Concierge. How may I guide your smile journey today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Our specialists use a proprietary digital-mirror system to craft your ideal smile. Would you like to see our Smile Design process or book a consultation?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
            className="glass w-80 h-96 rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/30"
          >
            <div className="p-4 bg-white/50 border-b border-white/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-nuckle font-medium uppercase tracking-widest">DENTIQ AI Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-charcoal hover:rotate-90 transition-transform">
                <FaClose size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm transition-all duration-500 ${
                      msg.role === "user"
                        ? "bg-charcoal text-white rounded-tr-none"
                        : "bg-white/60 text-charcoal rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white/50 border-t border-white/20 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about your smile..."
                className="flex-1 bg-white/40 border border-white/40 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaCommentDots size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-charcoal text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative group"
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        <FaCommentDots size={24} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-charcoal text-xs font-nuckle rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          AI Concierge
        </span>
      </motion.button>
    </div>
  );
}
