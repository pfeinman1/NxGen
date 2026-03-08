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
      className="relative py-32 bg-black-light"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto px-6 lg:px-12"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-8">
            Flagship Event
          </p>
          {/* Logo + Miami */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <Image
              src="/images/logo.png"
              alt="NxGeN"
              width={500}
              height={140}
              className="h-12 md:h-20 lg:h-28 w-auto"
            />
            <span className="text-5xl md:text-7xl lg:text-[7rem] text-pearl font-bold tracking-tight leading-none">
              Miami
            </span>
          </div>
          <p className="text-xl text-pearl-muted tracking-wide">
            November 5–8, 2026
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
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

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#apply"
            className="inline-block px-10 py-4 text-xs tracking-[0.2em] text-pearl border border-pearl/20 rounded-full hover:border-blush hover:text-blush transition-all duration-300"
          >
            SECURE YOUR PLACE
          </a>
        </div>
      </motion.div>
    </section>
  );
}
