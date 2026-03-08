"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

// City markers with coordinates
const cities = [
  { name: "New York", x: 23, y: 42 },
  { name: "Miami", x: 21, y: 52 },
  { name: "London", x: 47, y: 35 },
  { name: "Dubai", x: 60, y: 50 },
  { name: "Singapore", x: 75, y: 60 },
  { name: "Tokyo", x: 85, y: 42 },
  { name: "Sydney", x: 88, y: 78 },
];

// Interactive World Map with mouse parallax
function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = (e.clientX - rect.left - centerX) / 20;
    const offsetY = (e.clientY - rect.top - centerY) / 20;
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={mapRef}
      className="relative w-full aspect-[16/10] cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="absolute inset-0"
        style={{ x, y }}
      >
        {/* Clean dotted world map background */}
        <svg 
          viewBox="0 0 100 62" 
          className="w-full h-full opacity-30"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Generate dot grid for map aesthetic */}
          {Array.from({ length: 20 }).map((_, row) =>
            Array.from({ length: 35 }).map((_, col) => {
              const x = 3 + col * 2.8;
              const y = 3 + row * 3;
              // Only show dots in rough continent shapes
              const isVisible = 
                // North America
                (x > 5 && x < 35 && y > 15 && y < 50 && Math.random() > 0.5) ||
                // South America
                (x > 20 && x < 40 && y > 45 && y < 60 && Math.random() > 0.6) ||
                // Europe
                (x > 42 && x < 58 && y > 18 && y < 38 && Math.random() > 0.5) ||
                // Africa
                (x > 42 && x < 62 && y > 35 && y < 58 && Math.random() > 0.6) ||
                // Asia
                (x > 55 && x < 95 && y > 15 && y < 50 && Math.random() > 0.5) ||
                // Australia
                (x > 78 && x < 95 && y > 50 && y < 60 && Math.random() > 0.5);
              
              return isVisible ? (
                <circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r="0.4"
                  className="fill-pearl/40"
                />
              ) : null;
            })
          )}
        </svg>

        {/* City markers */}
        {cities.map((city) => (
          <motion.div
            key={city.name}
            className="absolute"
            style={{ 
              left: `${city.x}%`, 
              top: `${city.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blush/40"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* City dot */}
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              hoveredCity === city.name ? 'bg-blush scale-150' : 'bg-pearl/60'
            }`} />
            {/* City label */}
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: hoveredCity === city.name ? 1 : 0,
                y: hoveredCity === city.name ? 0 : 5
              }}
              className="absolute left-1/2 -translate-x-1/2 top-5 text-[10px] text-pearl/80 whitespace-nowrap font-light tracking-wider"
            >
              {city.name}
            </motion.span>
          </motion.div>
        ))}
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
          {/* Left side - Interactive Map */}
          <div className="order-2 lg:order-1">
            <InteractiveMap />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-blush/80 text-[11px] tracking-[0.4em] uppercase mb-8 font-light">
              Global Community
            </p>

            <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] text-pearl leading-[1.1] mb-10 font-serif font-light tracking-[-0.02em]">
              A community of builders,
              <br />
              <span className="text-pearl/40">givers & investors.</span>
            </h2>

            <p className="text-[1.05rem] text-pearl/50 leading-[1.8] mb-6 font-light">
              NxGen isn&apos;t a network you attend. It&apos;s a community you belong to. We bring together people who are building the future of their industries, giving generously to lift others up, and investing in the people and ideas that matter most.
            </p>

            <p className="text-[1.05rem] text-pearl/50 leading-[1.8] mb-12 font-light">
              We keep our circles tight so that trust, generosity, and real connection can flourish — across cities, time zones, and industries.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#apply"
                className="px-8 py-4 text-[11px] tracking-[0.2em] text-black bg-blush hover:bg-pearl transition-all duration-300 font-medium"
              >
                APPLY FOR MEMBERSHIP
              </a>
              <a
                href="#thesis"
                className="px-8 py-4 text-[11px] tracking-[0.2em] text-pearl/70 border border-pearl/20 hover:border-pearl/40 hover:text-pearl transition-all duration-300 font-light"
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
