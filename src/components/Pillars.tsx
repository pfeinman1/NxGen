"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Build",
    description:
      "The future of work is being rewritten in real time. As AI reshapes what it means to create, compete, and lead, NxGeN gives you the community, resources, and education to stay ahead - and build with intention, not just speed.",
  },
  {
    number: "02",
    title: "Invest",
    description:
      "The most intentional investors we know invest in two places: themselves and others. NxGeN people cultivate their minds, health, and inner life - and deploy capital with the same care, toward the people, ideas, and futures worth betting on.",
  },
  {
    number: "03",
    title: "Give",
    description:
      "We are, above all, givers. NxGeN people show up for each other with time, access, and real generosity. We carry that same spirit into the world to direct resources and capital toward the people and places that need it most. The most powerful thing you can do with success is multiply it.",
  },
  {
    number: "04",
    title: "Experience",
    description:
      'We only get so much time here. NxGeN is a reminder to actually enjoy it, together. We gather for experiences that are exciting, meaningful, and worth remembering. After all, "Happiness is only real when shared." - Into the Wild',
  },
];

export default function Pillars() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="community" className="relative py-16 lg:py-24 bg-black-light">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
              The People
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-pearl leading-tight mb-6 font-bold">
              Meet your neighbors.
            </h2>
            <p className="text-lg text-text-soft leading-relaxed">
              Every person you&apos;ll meet here is your neighbor - not just in proximity, but in purpose. NxGeN exists for those who see the world as one shared home, and who believe that real progress happens when we turn toward each other, not away.
            </p>
            <div className="mt-8">
              <a
                href="#apply"
                className="inline-block px-8 py-3 text-xs tracking-[0.2em] text-pearl border border-pearl/20 rounded-full hover:border-blush hover:text-blush transition-all duration-300"
              >
                REQUEST AN INVITATION
              </a>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/images/event-photo.jpg"
              alt="NxGeN Community"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-pearl/5 rounded-xl overflow-hidden">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-black-light p-8 cursor-pointer group min-h-[300px]"
            >
              {/* Hover background */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-b from-blush/5 to-transparent"
              />

              <div className="relative z-10">
                <p className="text-blush/50 text-xs tracking-widest mb-6">
                  {pillar.number}
                </p>

                <h4 className="text-2xl md:text-3xl text-pearl font-light mb-6 group-hover:text-blush transition-colors duration-300">
                  {pillar.title}
                </h4>

                <p className="text-sm text-text-soft leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-blush origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
