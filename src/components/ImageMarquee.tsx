"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const venues = [
  { 
    src: "/images/venues/coffee-shop.jpg", 
    name: "7 Spring", 
    location: "Nolita",
    category: "Coffee",
    icon: "coffee"
  },
  { 
    src: "/images/venues/members-club.jpg", 
    name: "Casa Cipriani", 
    location: "Financial District",
    category: "Members Club",
    icon: "key"
  },
  { 
    src: "/images/venues/restaurant-interior.jpg", 
    name: "Casa Tua", 
    location: "Upper East Side",
    category: "Restaurant",
    icon: "utensils"
  },
  { 
    src: "/images/venues/cocktail-lounge.jpg", 
    name: "The Flatiron Room", 
    location: "NoMad",
    category: "Speakeasy",
    icon: "glass"
  },
  { 
    src: "/images/venues/rooftop-bar.jpg", 
    name: "Summit", 
    location: "Midtown",
    category: "Rooftop",
    icon: "building"
  },
  { 
    src: "/images/venues/wine-bar.jpg", 
    name: "Corkbuzz", 
    location: "Chelsea",
    category: "Wine Bar",
    icon: "wine"
  },
];

// Destination tags for second row
const destinations = [
  "France", "F1 Monaco", "Hong Kong", "Treasure Cay, Bahamas", 
  "Milken", "Portugal", "Aspen", "Art Basel", "Tokyo", "Cannes"
];

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case "coffee":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    case "key":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      );
    case "utensils":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
        </svg>
      );
    case "glass":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 22h8M12 11v11M5 3l7 8 7-8M5 3h14" />
        </svg>
      );
    case "building":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
        </svg>
      );
    case "wine":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 22h8M12 12v10M5 3l1 9a6 6 0 0 0 12 0l1-9H5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ImageMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-12 bg-black">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Venue cards scrolling */}
      <motion.div
        className="flex gap-6 mb-8"
        animate={{
          x: [0, -1800],
        }}
        transition={{
          x: {
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Triple the venues for seamless loop */}
        {[...venues, ...venues, ...venues].map((venue, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[320px] group cursor-pointer"
          >
            {/* Image container */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4">
              <Image
                src={venue.src}
                alt={venue.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Category tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-black text-sm">
                <CategoryIcon type={venue.icon} />
                <span>{venue.category}</span>
              </div>
            </div>
            {/* Venue info */}
            <h3 className="text-xl text-pearl font-medium mb-1">{venue.name}</h3>
            <p className="text-pearl/50 text-sm">{venue.location}</p>
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
        {[...destinations, ...destinations, ...destinations].map((dest, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 bg-black-light border border-pearl/10 rounded-full text-pearl/70 text-sm hover:border-pearl/30 hover:text-pearl transition-colors cursor-pointer"
          >
            {dest}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
