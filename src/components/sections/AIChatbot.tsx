"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes } from "react-icons/fa";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm your DENTIQ assistant. How can I help? 😊" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const text = input;
    setInput("");
    setMessages((p) => [...p, { role: "user", text }]);
    setTimeout(() => {
      setMessages((p) => [...p, {
        role: "ai",
        text: "Great! Would you like to book a free consultation or learn more about our treatments?",
      }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[300px] md:w-80 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl border border-grey-200"
          >
            <div className="p-3 md:p-4 bg-grey-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider">DENTIQ Chat</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                <FaTimes size={14} />
              </button>
            </div>
            <div className="overflow-y-auto p-3 md:p-4 space-y-3 h-64">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-2.5 md:p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-grey-900 text-white rounded-tr-none"
                      : "bg-bg text-grey-700 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 md:p-4 border-t border-grey-100 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type here..."
                className="flex-1 bg-bg border border-grey-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-grey-900 transition-colors"
              />
              <button onClick={send}
                className="w-9 h-9 md:w-10 md:h-10 bg-grey-900 text-white rounded-full flex items-center justify-center hover:bg-grey-700 transition-colors shrink-0">
                <FaCommentDots size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 md:w-14 md:h-14 bg-white text-grey-900 rounded-full flex items-center justify-center shadow-lg border border-grey-200 hover:bg-grey-900 hover:text-white transition-colors"
      >
        <FaCommentDots size={20} />
      </motion.button>
    </div>
  );
}
