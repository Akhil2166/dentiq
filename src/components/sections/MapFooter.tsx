"use client";

import React from "react";

export default function MapFooter() {
  return (
    <div className="w-full h-[400px] rounded-card overflow-hidden relative border border-border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-0.123456789!3d51.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNT DEGkJzU4LjI4IkouT0s4Ljg3K0!5e0!3m2!1sen!2sfr!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute top-4 left-4 bg-bg-secondary p-4 rounded-button shadow-lg border border-border">
        <p className="text-text font-nuckle font-medium">Visit Our Studio</p>
        <p className="text-text-secondary text-sm">123 Luxury Lane, Morlaàs, France</p>
      </div>
    </div>
  );
}
