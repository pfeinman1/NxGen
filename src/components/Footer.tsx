"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  community: [
    { name: "About NxGeN", href: "#thesis" },
    { name: "Our Pillars", href: "#community" },
    { name: "Events", href: "#miami" },
  ],
  getInvolved: [
    { name: "Apply to Join", href: "#apply" },
    { name: "What's Included", href: "#whatyouget" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "mailto:team@nxgen.club" },
  ],
  media: [
    { name: "NxGeN Podcast", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Press", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/nxgen.club/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/nxgenclub", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 bg-black border-t border-pearl/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="NxGeN"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
            </motion.div>
            <p className="text-text-soft text-sm leading-relaxed max-w-sm mb-8">
              A community of builders, givers, and investors leading the next generation of society - with purpose, generosity, and care.
            </p>

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

          {/* Community links */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
              Community
            </p>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl-muted hover:text-pearl transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved links */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
              Get Involved
            </p>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl-muted hover:text-pearl transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Media links */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
              Media
            </p>
            <ul className="space-y-3">
              {footerLinks.media.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl-muted hover:text-pearl transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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
