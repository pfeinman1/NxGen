"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/event-photo.jpg", alt: "Event experience" },
  { src: "/images/yacht-event.jpg", alt: "Yacht event" },
  { src: "/images/www-hero.png", alt: "Wings Wheels Water" },
  { src: "/images/panel-discussion.jpg", alt: "Panel discussion" },
  { src: "/images/event-photo.jpg", alt: "Event experience" },
  { src: "/images/yacht-event.jpg", alt: "Yacht event" },
  { src: "/images/www-hero.png", alt: "Wings Wheels Water" },
  { src: "/images/panel-discussion.jpg", alt: "Panel discussion" },
];

export default function ImageMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8 bg-black">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Double the images for seamless loop */}
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative w-[400px] h-[300px] rounded-lg overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
