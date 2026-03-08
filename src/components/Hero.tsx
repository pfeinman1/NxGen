"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Top border line */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      {/* Subtle animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blush rounded-full blur-[200px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.015, 0.03, 0.015],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-pearl rounded-full blur-[200px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xs tracking-[0.3em] text-pearl-muted mb-16"
        >
          NOVEMBER 5–8, 2026 · MIAMI
        </motion.p>

        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="NxGeN"
            width={800}
            height={224}
            className="h-48 md:h-72 lg:h-96 w-auto mx-auto"
            priority
          />
        </motion.div>

        {/* Horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-16 h-px bg-blush mx-auto mb-12"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl text-pearl-muted mb-8 font-medium"
        >
          Where capital meets culture.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base md:text-lg text-text-soft max-w-2xl mx-auto leading-relaxed mb-16"
        >
          The invitation-only community for next-generation leaders shaping the future of private capital, entrepreneurship, and impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#apply"
            className="px-12 py-4 text-xs tracking-[0.2em] text-black bg-blush rounded-full hover:bg-pearl transition-all duration-500"
          >
            REQUEST AN INVITATION
          </a>
          <a
            href="#thesis"
            className="px-12 py-4 text-xs tracking-[0.2em] text-pearl border border-pearl/30 rounded-full hover:border-pearl/60 transition-all duration-300"
          >
            OUR VISION
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-pearl/50 to-transparent"
        />
      </motion.div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />
    </section>
  );
}
