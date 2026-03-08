"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const schedule = [
  {
    day: "THURSDAY",
    title: "Opening Night",
    subtitle: "Wings, Wheels & Water",
    description: "Private aviation, exotic cars, beautiful yachts, and live entertainment.",
  },
  {
    day: "FRIDAY",
    title: "Build, Invest, Give",
    subtitle: "NextGen panels, keynote speakers, & breakout sessions",
    description: "Evening: Diamond District - Diamonds Last Forever Impact Gala.",
  },
  {
    day: "SATURDAY",
    title: "Play & Compete",
    subtitle: "Golf and padel tournaments",
    description: "Whiskey & Watches, culinary experience. Poker championship finals.",
  },
  {
    day: "SUNDAY",
    title: "Until Next Time",
    subtitle: "Intimate closing brunch",
    description: "Shape the future of NxGeN together. Reveal next summit location.",
  },
];

export default function FlagshipEvent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="miami"
      ref={containerRef}
      className="relative pt-12 pb-8 bg-black-light"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto px-6 lg:px-12"
      >
        {/* Header - Left aligned */}
        <div className="mb-20 max-w-2xl">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            Flagship Event
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-pearl font-bold mb-6">
            November 5–8, 2026
          </h2>
          <p className="text-lg text-text-soft leading-relaxed">
            Four days. 100 curated attendees. Unbelievable experiences. Meaningful conversations. Lasting friendships.
          </p>
        </div>

        {/* Schedule grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/50 border border-pearl/5 rounded-xl p-8 hover:border-blush/20 transition-all duration-500 group"
            >
              <p className="text-blush text-xs tracking-[0.2em] mb-4">
                {item.day}
              </p>
              <h3 className="text-xl text-pearl font-bold mb-2 group-hover:text-blush transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-pearl-muted mb-3">
                {item.subtitle}
              </p>
              <p className="text-sm text-text-soft leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>


      </motion.div>
    </section>
  );
}
