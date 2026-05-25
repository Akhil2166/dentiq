"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes } from "react-icons/fa";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm DENTIQ's virtual assistant. How can I help you today? 😊" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: "ai",
        text: "Thanks for reaching out! Would you like to book a free consultation or learn more about our treatments?",
      }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 bg-white rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-border-light"
          >
            <div className="p-4 bg-charcoal text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-medium">DENTIQ Chat</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <FaTimes size={14} />
              </button>
            </div>
            <div className="overflow-y-auto p-4 space-y-4 h-72">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-charcoal text-white rounded-tr-none"
                      : "bg-warm text-text rounded-tl-none"
                  }`}>
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
                className="flex-1 bg-warm border border-border-light rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button onClick={handleSend}
                className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors shrink-0">
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
        className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-xl relative group"
      >
        <div className="absolute inset-0 rounded-full bg-gold/40 animate-ping opacity-20" />
        <FaCommentDots size={22} />
      </motion.button>
    </div>
  );
}
