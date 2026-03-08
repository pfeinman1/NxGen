"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/images/www/marina-sunset.jpg", alt: "Marina at Sunset", title: "Water", category: "water" },
  { src: "/images/www/helicopter-arrival.jpg", alt: "Helicopter Arrival", title: "Wings", category: "wings" },
  { src: "/images/www/collector-cars.jpg", alt: "Collector Cars on Tarmac", title: "Wheels", category: "wheels" },
  { src: "/images/www/yacht-radiance.jpg", alt: "Yacht Radiance", title: "Water", category: "water" },
  { src: "/images/www/helicopter-passengers.jpg", alt: "VIP Helicopter Arrival", title: "Wings", category: "wings" },
  { src: "/images/www/woman-ferrari.jpg", alt: "Elegance & Performance", title: "Wheels", category: "wheels" },
  { src: "/images/www/couple-ferrari.jpg", alt: "Unforgettable Moments", title: "Experience", category: "experience" },
  { src: "/images/www/bentley-helicopter.jpg", alt: "Bentley & Helicopter", title: "Wings & Wheels", category: "wings" },
  { src: "/images/www/classic-speedboat.jpg", alt: "Classic Speedboat", title: "Water", category: "water" },
  { src: "/images/www/live-performance.jpg", alt: "Live Performance", title: "Entertainment", category: "experience" },
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

const categories = [
  { id: "all", label: "All" },
  { id: "wings", label: "Wings" },
  { id: "wheels", label: "Wheels" },
  { id: "water", label: "Water" },
  { id: "experience", label: "Experience" },
];

export default function WingsWheelsWater() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="www" className="relative bg-black overflow-hidden">
      {/* Content section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
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
              Flagship Event
            </p>
            <h3 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-pearl leading-[1.05] mb-8 font-serif font-light tracking-[-0.02em]">
              Three worlds.
              <br />
              <span className="text-pearl/40">One extraordinary night.</span>
            </h3>
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

            {/* CTA */}
            <div className="mt-12">
              <a
                href="#apply"
                className="inline-block px-10 py-4 text-[11px] tracking-[0.2em] text-black bg-blush hover:bg-pearl transition-all duration-300 font-medium"
              >
                SECURE YOUR PLACE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 font-light ${
                activeCategory === cat.id
                  ? "bg-blush text-black"
                  : "bg-transparent text-pearl/50 border border-pearl/10 hover:border-pearl/30 hover:text-pearl"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Clean Grid - No overlap */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative cursor-pointer overflow-hidden group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(galleryImages.indexOf(image))}
              >
                <motion.div 
                  className="relative aspect-[4/5]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      x: hoveredIndex === index ? (index % 2 === 0 ? 4 : -4) : 0,
                      y: hoveredIndex === index ? -4 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                  
                  {/* Subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category label on hover */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-blush/80 text-[10px] tracking-[0.2em] uppercase font-light">{image.title}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
