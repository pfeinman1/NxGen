"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-16 lg:py-24 bg-black overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-blush/80 text-[11px] tracking-[0.4em] uppercase mb-8 font-light">
              Global Community
            </p>

            <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] text-pearl leading-[1.1] mb-10 font-serif font-light tracking-[-0.02em]">
              A community of builders,
              <br />
              <span className="text-pearl/40">givers & investors.</span>
            </h2>

            <p className="text-[1.05rem] text-pearl/50 leading-[1.8] mb-6 font-light">
              NxGeN isn&apos;t a network you attend. It&apos;s a community you belong to. We bring together people who are building the future of their industries, giving generously to lift others up, and investing in the people and ideas that matter most.
            </p>

            <p className="text-[1.05rem] text-pearl/50 leading-[1.8] mb-12 font-light">
              We keep our circles tight so that trust, generosity, and real connection can flourish — across cities, time zones, and industries.
            </p>

            <div>
              <a
                href="#apply"
                className="inline-block px-10 py-4 text-[11px] tracking-[0.2em] text-black bg-pearl hover:bg-blush transition-all duration-300 font-medium rounded-full text-center"
              >
                APPLY FOR MEMBERSHIP
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <motion.div 
            className="relative aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/community-event.jpg"
              alt="NxGeN community members at an exclusive event"
              fill
              className="object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
