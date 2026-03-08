"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const destinations = [
  "Miami",
  "South Africa",
  "France",
  "F1",
  "Hong Kong",
  "Treasure Cay, Bahamas",
  "Milken",
  "Portugal",
  "World Economic Forum",
  "Brazil",
];

export default function Destinations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal scroll based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-16">
        <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
          Global Community
        </p>
        <p className="text-lg text-text-soft max-w-xl">
          NxGeN doesn&apos;t end when you leave Miami. Members get year-round access to curated introductions, private markets and secondaries deal flow, AI and entrepreneurship education, global events, and a private network of next-gen leaders who actually have each other&apos;s backs.
        </p>
      </div>

      {/* Scrolling destinations - dionapp style */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          style={{ x }}
          className="flex gap-4 whitespace-nowrap py-8"
        >
          {[...destinations, ...destinations].map((dest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 px-8 py-4 bg-black-light border border-pearl/10 rounded-full cursor-pointer hover:border-blush/30 hover:bg-black-mid transition-all duration-300"
            >
              <span className="text-lg md:text-xl text-pearl-muted hover:text-pearl transition-colors">
                {dest}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Quote */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-20 text-center">
        <blockquote className="text-2xl md:text-3xl text-pearl leading-relaxed font-medium">
          &ldquo;We&apos;re not building a network. We&apos;re building a global ecosystem that moves humanity forward for generations to come.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
