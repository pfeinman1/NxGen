"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/images/event-photo.jpg", alt: "NxGen Event Experience", title: "The Experience" },
  { src: "/images/yacht-event.jpg", alt: "Yacht Event", title: "Water" },
  { src: "/images/panel-discussion.jpg", alt: "Panel Discussion", title: "Conversations" },
  { src: "/images/www-hero.png", alt: "Wings Wheels Water", title: "Wings" },
  { src: "/images/www-details.png", alt: "Event Details", title: "Details" },
  { src: "/images/www-grid.png", alt: "Gallery", title: "Wheels" },
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="www" className="relative bg-black overflow-hidden">
      {/* Hero section with solid dark background */}
      <div className="relative h-[70vh] min-h-[500px] bg-black-light flex flex-col items-center justify-center text-center px-6">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />

        <div className="relative z-10">
          <p className="text-pearl/60 text-xs tracking-[0.3em] uppercase mb-8">
            Opening Night · Thursday November 5
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-pearl uppercase tracking-wider leading-tight font-bold">
            Wings
            <br />
            Wheels
            <br />
            & Water
          </h2>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        {/* Intro - Two column layout with image on left, copy on right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          {/* Left side - Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/helicopter-event.jpg"
              alt="Helicopter arriving at Wings Wheels Water event with private jet and vintage vehicles"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right side - Copy */}
          <div>
            <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
              Flagship Event
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-pearl leading-tight mb-8 font-bold">
              Three worlds. One extraordinary night.
            </h3>
            <p className="text-lg text-text-soft leading-relaxed">
              Wings, Wheels & Water brings together private aviation, collector automobiles, and world-class yachts - all curated for the next generation of capital and culture. This is not a trade show. It&apos;s the opening act.
            </p>
          </div>
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <span className="text-3xl mb-6 block">{exp.icon}</span>
              <h4 className="text-2xl text-pearl font-medium mb-4 group-hover:text-blush transition-colors">
                {exp.label}
              </h4>
              <p className="text-text-soft leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="#apply"
            className="inline-block px-10 py-4 text-xs tracking-[0.2em] text-black bg-blush rounded-full hover:bg-pearl transition-all duration-300"
          >
            SECURE YOUR PLACE
          </a>
        </div>
      </div>

      {/* Interactive Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">Gallery</p>
          <h3 className="text-2xl md:text-3xl text-pearl font-bold">Moments That Define Us</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative cursor-pointer overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover object-top transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 md:p-6"
                >
                  <div>
                    <p className="text-blush text-xs tracking-[0.2em] uppercase mb-1">{image.title}</p>
                    <p className="text-pearl text-sm md:text-base font-medium">{image.alt}</p>
                  </div>
                </motion.div>
                {/* Subtle border on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border-2 border-blush/50 rounded-lg pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
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
