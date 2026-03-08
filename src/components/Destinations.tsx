"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const destinationCards = [
  { 
    src: "/images/destinations/france.jpg", 
    name: "France", 
    subtitle: "Paris & Beyond"
  },
  { 
    src: "/images/destinations/f1-monaco.jpg", 
    name: "F1 Monaco", 
    subtitle: "Grand Prix"
  },
  { 
    src: "/images/destinations/hong-kong.jpg", 
    name: "Hong Kong", 
    subtitle: "Victoria Harbor"
  },
  { 
    src: "/images/destinations/bahamas.jpg", 
    name: "Treasure Cay", 
    subtitle: "Bahamas"
  },
  { 
    src: "/images/destinations/south-africa.jpg", 
    name: "South Africa", 
    subtitle: "Cape Town"
  },
  { 
    src: "/images/destinations/portugal.jpg", 
    name: "Portugal", 
    subtitle: "Lisbon"
  },
  { 
    src: "/images/destinations/aspen.jpg", 
    name: "Aspen", 
    subtitle: "Colorado"
  },
  { 
    src: "/images/destinations/art-basel.jpg", 
    name: "Art Basel", 
    subtitle: "Miami Beach"
  },
];

export default function Destinations() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative py-16 lg:py-20 bg-black overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <p className="text-blush/80 text-[11px] tracking-[0.4em] uppercase mb-8 font-light">
          Where We Gather
        </p>
        <p className="text-[1.05rem] text-pearl/50 max-w-2xl leading-[1.8] font-light">
          NxGeN doesn&apos;t end when you leave Miami. Members get year-round access to curated introductions, private markets and secondaries deal flow, AI and entrepreneurship education, global events, and a private network of next-gen leaders who actually have each other&apos;s backs.
        </p>
      </div>

      {/* Destination image cards - Scrolling marquee on all screen sizes */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1800],
          }}
          transition={{
            x: {
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...destinationCards, ...destinationCards, ...destinationCards].map((dest, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] md:w-[300px] group cursor-pointer"
            >
              <div className="relative h-[260px] md:h-[380px] rounded-xl md:rounded-2xl overflow-hidden mb-4">
                <Image
                  src={dest.src}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-sm md:text-[1.25rem] text-pearl font-serif font-light">{dest.name}</h3>
                  <p className="text-pearl/50 text-xs md:text-[0.85rem] font-light">{dest.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Quote */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-24 text-center">
        <blockquote className="text-[1.5rem] md:text-[2rem] text-pearl/70 leading-[1.5] font-serif font-light italic">
          &ldquo;We&apos;re not building a network. We&apos;re building a global ecosystem that moves humanity forward for generations to come.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
