"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Thesis() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  return (
    <section
      id="thesis"
      ref={containerRef}
      className="relative py-40 md:py-56 bg-black overflow-hidden"
    >
      {/* Subtle decorative line */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent via-pearl/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div style={{ opacity, y }}>
          {/* Label */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-blush/80 text-[11px] tracking-[0.4em] uppercase mb-16 font-light"
          >
            The Thesis
          </motion.p>

          {/* Main headline - Large editorial serif */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[2.75rem] md:text-[4rem] lg:text-[5rem] text-pearl leading-[1.05] max-w-5xl font-serif font-light tracking-[-0.02em] mb-20"
          >
            The weight of responsibility
            <br />
            <span className="text-pearl/40">is shifting.</span>
          </motion.h2>

          {/* Stat callout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <p className="text-[1.35rem] md:text-[1.75rem] text-pearl/70 leading-[1.6] max-w-3xl font-light">
              <span className="text-blush font-normal">$84 trillion</span> is transferring to Millennials and Gen Z — and at the same moment, AI is creating the greatest wealth-building opportunity in modern history.
            </p>
          </motion.div>

          {/* Conclusion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-pearl font-serif font-light tracking-[-0.02em]">
              It starts in <span className="text-blush">Miami.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
