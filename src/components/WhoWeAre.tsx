"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated Globe Component
function AnimatedGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random nodes
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 50 + Math.cos((i * Math.PI * 2) / 12) * (30 + Math.random() * 15),
    y: 50 + Math.sin((i * Math.PI * 2) / 12) * (30 + Math.random() * 15),
    size: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  // Generate connections between nodes
  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() > 0.6) {
        connections.push({ from: nodes[i], to: nodes[j], delay: Math.random() * 2 });
      }
    }
  }

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Inner orbital rings */}
        {[35, 25, 15].map((r, i) => (
          <motion.ellipse
            key={i}
            cx="50"
            cy="50"
            rx={r}
            ry={r * 0.4}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-pearl/10"
            style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
          />
        ))}

        {/* Connection lines */}
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke="currentColor"
            strokeWidth="0.15"
            className="text-pearl/20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1 + conn.delay, duration: 1.5 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size / 2}
            className="fill-pearl/60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + node.delay * 0.3, duration: 0.5 }}
          />
        ))}

        {/* Pulsing center node */}
        <motion.circle
          cx="50"
          cy="50"
          r="3"
          className="fill-blush"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting dot */}
        <motion.circle
          cx="50"
          cy="5"
          r="1.5"
          className="fill-pearl/80"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        />
      </svg>

      {/* Highlighted node with ring */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-6 h-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="absolute inset-0 border border-pearl/40 rounded-full" />
        <div className="absolute inset-2 bg-pearl/20 rounded-full" />
      </motion.div>
    </div>
  );
}

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black-light overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Animated Globe */}
          <div className="order-2 lg:order-1">
            <AnimatedGlobe />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-pearl leading-tight mb-8 font-serif">
              A community of builders,
              <br />
              givers & investors.
            </h2>

            <p className="text-lg text-text-soft leading-relaxed mb-6">
              NxGen isn&apos;t a network you attend. It&apos;s a community you belong to. We bring together people who are building the future of their industries, giving generously to lift others up, and investing in the people and ideas that matter most.
            </p>

            <p className="text-lg text-text-soft leading-relaxed mb-10">
              We keep our circles tight so that trust, generosity, and real connection can flourish — across cities, time zones, and industries.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#apply"
                className="px-8 py-4 text-xs tracking-[0.2em] text-black bg-blush hover:bg-pearl transition-all duration-300"
              >
                APPLY FOR MEMBERSHIP
              </a>
              <a
                href="#thesis"
                className="px-8 py-4 text-xs tracking-[0.2em] text-pearl border border-pearl/30 hover:border-pearl/60 transition-all duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
