"use client";

import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-pearl/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted">
            © 2025 NxGeN. All rights reserved.
          </p>
          
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nxgen.club/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-black-light border border-pearl/10 flex items-center justify-center hover:border-blush/30 transition-all duration-300 group"
            >
              <Instagram size={16} className="text-text-muted group-hover:text-blush transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/company/nxgenclub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-black-light border border-pearl/10 flex items-center justify-center hover:border-blush/30 transition-all duration-300 group"
            >
              <Linkedin size={16} className="text-text-muted group-hover:text-blush transition-colors" />
            </a>
          </div>
          
          <p className="text-xs text-blush tracking-wide">
            NOVEMBER 5–8, 2026 · MIAMI
          </p>
        </div>
      </div>
    </footer>
  );
}
