"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Reordered to separate red car images (woman-ferrari, couple-ferrari) and add variety
const galleryImages = [
  { src: "/images/www/marina-sunset.jpg", alt: "Marina at Sunset", title: "Water", category: "water" },
  { src: "/images/www/helicopter-arrival.jpg", alt: "Helicopter Arrival", title: "Wings", category: "wings" },
  { src: "/images/www/woman-ferrari.jpg", alt: "Elegance & Performance", title: "Wheels", category: "wheels" },
  { src: "/images/www/yacht-radiance.jpg", alt: "Yacht Radiance", title: "Water", category: "water" },
  { src: "/images/www/live-performance.jpg", alt: "Live Performance", title: "Entertainment", category: "experience" },
  { src: "/images/www/collector-cars.jpg", alt: "Collector Cars on Tarmac", title: "Wheels", category: "wheels" },
  { src: "/images/www/helicopter-passengers.jpg", alt: "VIP Helicopter Arrival", title: "Wings", category: "wings" },
  { src: "/images/www/couple-ferrari.jpg", alt: "Unforgettable Moments", title: "Experience", category: "experience" },
  { src: "/images/www/classic-speedboat.jpg", alt: "Classic Speedboat", title: "Water", category: "water" },
  { src: "/images/www/bentley-helicopter.jpg", alt: "Bentley & Helicopter", title: "Wings & Wheels", category: "wings" },
  { src: "/images/www/dock-sunset.jpg", alt: "Dock at Golden Hour", title: "Water", category: "water" },
  { src: "/images/www/couple-portrait.jpg", alt: "Connections Made", title: "Community", category: "experience" },
];

const experiences = [
  {
    icon: "✈",
    label: "Wings",
    description: "Private aviation access, aircraft displays, and the most exclusive flight deck conversations you'll ever have.",
  },
  {
    icon: "⊙",
    label: "Wheels",
    description: "A curated lineup of collector and performance vehicles. The kind that gets your wheels turning.",
  },
  {
    icon: "⚓",
    label: "Water",
    description: "Premier yachts and classic boats. An elevated platform for elevated conversations.",
  },
];



export default function WingsWheelsWater() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="www" className="relative bg-black overflow-hidden">
      {/* Content section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pt-12 lg:pb-20">
        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-12">
          {/* Left side - Image reframed to show helicopter */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/images/helicopter-event.jpg"
              alt="Helicopter arriving at Wings Wheels Water event with private jet and vintage vehicles"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          
          {/* Right side - Headline + Wings/Wheels/Water descriptions */}
          <div className="flex flex-col justify-center">
            <p className="text-blush/80 text-[11px] tracking-[0.4em] uppercase mb-8 font-light">
              Wings, Wheels & Water
            </p>
            <p className="text-[1.05rem] text-pearl/50 leading-[1.8] mb-12 font-light max-w-lg">
              Wings, Wheels & Water brings together private aviation, collector automobiles, and world-class yachts — all curated for the next generation of capital and culture. This is not a trade show. It&apos;s the opening act.
            </p>

            {/* Wings/Wheels/Water stacked descriptions */}
            <div className="space-y-8 border-t border-pearl/10 pt-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-5 items-start group"
                >
                  <span className="text-pearl/40 text-xl mt-1 group-hover:text-blush transition-colors">{exp.icon}</span>
                  <div>
                    <h4 className="text-[1.25rem] text-pearl font-serif font-light mb-2 group-hover:text-blush transition-colors">
                      {exp.label}
                    </h4>
                    <p className="text-[0.95rem] text-pearl/40 leading-[1.7] font-light">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scrolling Image Marquee - Slows on hover */}
      <div className="relative overflow-hidden pb-12 group/marquee">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div 
          className="flex gap-4 animate-marquee group-hover/marquee:[animation-duration:80s]"
          style={{
            width: 'max-content',
          }}
        >
          {[...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => {
            // Use object-top for images with people to show their heads
            const needsTopPosition = image.src.includes('live-performance') || 
                                     image.src.includes('couple') || 
                                     image.src.includes('woman-ferrari') ||
                                     image.src.includes('helicopter-passengers');
            return (
            <div
              key={`${image.src}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[350px] relative cursor-pointer group/card"
              onClick={() => setSelectedImage(index % galleryImages.length)}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden transition-transform duration-300 group-hover/card:-translate-y-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover/card:scale-105 ${needsTopPosition ? 'object-top' : ''}`}
                />
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-pearl/60 hover:text-pearl transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 md:left-8 text-pearl/60 hover:text-pearl transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % galleryImages.length);
              }}
              className="absolute right-4 md:right-8 text-pearl/60 hover:text-pearl transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <p className="text-blush text-xs tracking-[0.2em] uppercase mb-2">
                  {galleryImages[selectedImage].title}
                </p>
                <p className="text-pearl text-lg font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="text-pearl/50 text-sm mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
