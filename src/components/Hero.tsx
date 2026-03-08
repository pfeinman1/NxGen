"use client";

import { motion } from "framer-motion";
import Globe from "./Globe";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black pt-24">
      {/* Top border line */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left side - Globe */}
        <div className="flex-1 relative hidden lg:block">
          <Globe />
        </div>

        {/* Right side - Text */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-[family-name:var(--font-playfair)] leading-[0.95] tracking-tight">
              <span className="text-pearl">The future</span>
              <br />
              <span className="text-pearl">is </span>
              <span className="text-blush italic">written</span>
              <br />
              <span className="text-pearl">together.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-pearl/10">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-1 px-6 lg:px-12 xl:px-20 py-8 border-b md:border-b-0 md:border-r border-pearl/10"
          >
            <p className="text-base md:text-lg text-pearl-muted max-w-md leading-relaxed">
              As AI reshapes what it means to build, NxGen gives you the community, resources, and education to stay ahead — and lead with purpose.
            </p>
          </motion.div>

          {/* Center - Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex-1 flex flex-col items-center justify-center py-8 border-b md:border-b-0 md:border-r border-pearl/10"
          >
            <span className="text-xs tracking-[0.3em] text-pearl-muted mb-4">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-pearl/50 to-transparent"
            />
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex-1 flex items-center justify-end px-6 lg:px-12 xl:px-20 py-8"
          >
            <a
              href="#apply"
              className="group flex items-center gap-4 text-xs tracking-[0.2em] text-pearl hover:text-blush transition-colors"
            >
              BEGIN YOUR APPLICATION
              <span className="w-10 h-10 rounded-full border border-pearl/30 flex items-center justify-center group-hover:border-blush transition-colors">
                <svg
                  className="w-4 h-4 -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
