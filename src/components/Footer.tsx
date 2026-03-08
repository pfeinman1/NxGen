"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/nxgen.club/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/nxgenclub", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 bg-black border-t border-pearl/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Image
                src="/images/logo.png"
                alt="NxGeN"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
            </motion.div>
            <p className="text-text-soft text-sm leading-relaxed max-w-sm">
              A community of builders, givers, and investors leading the next generation of society.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-black-light border border-pearl/10 flex items-center justify-center hover:border-blush/30 transition-all duration-300 group"
              >
                <social.icon size={16} className="text-text-muted group-hover:text-blush transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-pearl/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © 2025 NxGeN. All rights reserved.
          </p>
          <p className="text-xs text-blush tracking-wide">
            NOVEMBER 5–8, 2026 · MIAMI
          </p>
        </div>
      </div>
    </footer>
  );
}
