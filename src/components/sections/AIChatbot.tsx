"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes } from "react-icons/fa";

type Message = { role: "ai" | "user"; text: string };

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Welcome to DENTIQ. I am your digital concierge. How may I assist you with your smile journey?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Thank you for reaching out! Our team typically responds within 2 hours during business hours. Would you like to schedule a complimentary consultation?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 bg-pure-white rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-border-light"
          >
            <div className="p-4 bg-charcoal text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-champagne rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-medium">DENTIQ</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <FaTimes size={14} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-72 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-charcoal text-white rounded-tr-none"
                        : "bg-warm-white text-soft-charcoal rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border-light flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-warm-white border border-border-light rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-champagne transition-colors"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-champagne transition-colors shrink-0"
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
        className="w-14 h-14 bg-charcoal text-white rounded-full flex items-center justify-center shadow-xl relative group"
      >
        <div className="absolute inset-0 rounded-full bg-champagne animate-ping opacity-20" />
        <FaCommentDots size={20} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-pure-white text-charcoal text-xs rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border-light">
          Chat with us
        </span>
      </motion.button>
    </div>
  );
}
