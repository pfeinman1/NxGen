"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// City locations on world map (x, y coordinates in percentage)
const cities = [
  { name: "New York", x: 28, y: 38, size: 4 },
  { name: "Los Angeles", x: 15, y: 42, size: 3 },
  { name: "Miami", x: 26, y: 48, size: 4 },
  { name: "London", x: 48, y: 32, size: 4 },
  { name: "Paris", x: 50, y: 35, size: 3 },
  { name: "Dubai", x: 62, y: 46, size: 3 },
  { name: "Singapore", x: 76, y: 58, size: 3 },
  { name: "Hong Kong", x: 80, y: 46, size: 3 },
  { name: "Tokyo", x: 88, y: 40, size: 3 },
  { name: "Sydney", x: 88, y: 75, size: 3 },
  { name: "Sao Paulo", x: 34, y: 68, size: 3 },
  { name: "Toronto", x: 25, y: 34, size: 3 },
];

// Connections between cities
const connections = [
  { from: 0, to: 3 }, // NY - London
  { from: 0, to: 2 }, // NY - Miami
  { from: 2, to: 10 }, // Miami - Sao Paulo
  { from: 3, to: 4 }, // London - Paris
  { from: 3, to: 5 }, // London - Dubai
  { from: 4, to: 5 }, // Paris - Dubai
  { from: 5, to: 6 }, // Dubai - Singapore
  { from: 6, to: 7 }, // Singapore - Hong Kong
  { from: 7, to: 8 }, // Hong Kong - Tokyo
  { from: 6, to: 9 }, // Singapore - Sydney
  { from: 1, to: 8 }, // LA - Tokyo
  { from: 0, to: 11 }, // NY - Toronto
  { from: 1, to: 0 }, // LA - NY
];

// World Map Component with connected cities
function WorldMapNetwork() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full aspect-[2/1] max-w-2xl mx-auto">
      <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Simplified world map outline */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8D5D0" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#E8D5D0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E8D5D0" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* North America */}
        <motion.path
          d="M5,20 Q10,15 20,18 Q28,15 32,20 Q35,25 30,35 Q28,42 25,48 Q20,50 15,45 Q10,40 8,35 Q5,28 5,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* South America */}
        <motion.path
          d="M25,52 Q30,50 35,55 Q38,62 35,72 Q32,78 28,75 Q24,70 22,62 Q22,56 25,52"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        />
        
        {/* Europe */}
        <motion.path
          d="M42,22 Q48,18 55,20 Q58,22 56,28 Q54,32 50,35 Q46,36 44,33 Q42,28 42,22"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        
        {/* Africa */}
        <motion.path
          d="M45,38 Q52,36 58,40 Q62,48 60,58 Q55,65 50,62 Q45,58 44,50 Q44,42 45,38"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        />
        
        {/* Asia */}
        <motion.path
          d="M58,18 Q68,15 78,18 Q88,22 92,30 Q90,38 85,42 Q78,48 70,50 Q65,48 62,42 Q58,35 58,28 Q58,22 58,18"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* Australia */}
        <motion.path
          d="M80,62 Q88,60 92,65 Q94,72 90,76 Q85,78 80,75 Q78,70 80,62"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-pearl/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />

        {/* Connection lines between cities */}
        {connections.map((conn, i) => {
          const from = cities[conn.from];
          const to = cities[conn.to];
          // Create curved path
          const midX = (from.x + to.x) / 2;
          const midY = Math.min(from.y, to.y) - 5;
          
          return (
            <motion.path
              key={i}
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.15, duration: 1 }}
            />
          );
        })}

        {/* City dots */}
        {cities.map((city, i) => (
          <g key={city.name}>
            {/* Outer pulse ring */}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={city.size * 0.8}
              fill="none"
              stroke="#E8D5D0"
              strokeWidth="0.15"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.4, 0, 0.4] 
              }}
              transition={{ 
                delay: 2 + i * 0.1,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* City dot */}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={city.size * 0.4}
              className="fill-blush"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            />
          </g>
        ))}
      </svg>
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
          {/* Left side - World Map Network */}
          <div className="order-2 lg:order-1">
            <WorldMapNetwork />
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
