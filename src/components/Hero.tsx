"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Mixed order to avoid repetitive patterns - removed speedboat as it's similar to header
const heroImages = [
  { src: "/images/event-lounge.jpg", alt: "Members in lounge" },
  { src: "/images/event-poker.jpg", alt: "Poker night event" },
  { src: "/images/event-rooftop-group.jpg", alt: "Rooftop gathering" },
  { src: "/images/event-panel.jpg", alt: "Panel discussion" },
  { src: "/images/event-empire.jpg", alt: "NYC rooftop event" },
  { src: "/images/event-panel-bw.jpg", alt: "Panel speakers" },
  { src: "/images/event-yacht-marina.jpg", alt: "Yacht marina sunset" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden pt-24">
      {/* Banner section */}
      <div className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col bg-black">
        {/* Background Image - hidden on mobile */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/images/gallery/marina-sunset.jpg"
            alt="NxGeN Event at Steel Point Marina"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12 xl:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light leading-[1.2] tracking-[-0.02em]">
              <span className="text-pearl">The future is </span>
              <span className="text-blush italic font-normal">written</span>
              <span className="text-pearl"> together.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Images Row */}
      <div className="relative bg-black overflow-hidden py-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -1680],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...heroImages, ...heroImages, ...heroImages].map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="flex-shrink-0 w-[200px] md:w-[280px] relative group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
