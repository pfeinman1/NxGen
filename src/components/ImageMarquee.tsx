"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
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

// Destination tags for second row
const destinationTags = [
  "France", "F1", "Hong Kong", "Treasure Cay, Bahamas", 
  "South Africa", "Portugal", "Aspen", "Art Basel", "Tokyo", "Cannes"
];

export default function ImageMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-12 bg-black">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Destination cards scrolling */}
      <motion.div
        className="flex gap-6 mb-8"
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
        {/* Triple the destinations for seamless loop */}
        {[...destinations, ...destinations, ...destinations].map((dest, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] group cursor-pointer"
          >
            {/* Image container */}
            <div className="relative h-[380px] rounded-2xl overflow-hidden mb-4">
              <Image
                src={dest.src}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Destination name overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl text-pearl font-medium">{dest.name}</h3>
                <p className="text-pearl/70 text-sm">{dest.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Destination tags row */}
      <motion.div
        className="flex gap-3"
        animate={{
          x: [-800, 0],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...destinationTags, ...destinationTags, ...destinationTags].map((tag, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 bg-black-light border border-pearl/10 rounded-full text-pearl/70 text-sm hover:border-pearl/30 hover:text-pearl transition-colors cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
