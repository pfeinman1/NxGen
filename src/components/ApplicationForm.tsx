"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const pillars = ["Build", "Invest", "Give", "Experience"];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkedin: "",
    referredBy: "",
    building: "",
    pillar: "",
    showUp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="relative py-32 bg-black">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-blush/10 flex items-center justify-center mx-auto mb-8">
              <Check className="text-blush" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-pearl mb-6">
              Application Received
            </h2>
            <p className="text-text-soft">
              We&apos;ll be in touch within 5 business days—usually sooner.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-32 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-light/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            Begin Your Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-pearl mb-4">
            Start Your Application
          </h2>
          <p className="text-text-soft text-sm">
            Every application is read by a human.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Name fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-text-muted mb-2">
                First Name
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-text-muted mb-2">
                Last Name
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-text-muted mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm text-text-muted mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              required
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
              className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors"
            />
          </div>

          {/* Referred By */}
          <div>
            <label className="block text-sm text-text-muted mb-2">
              Referred by? (optional)
            </label>
            <input
              type="text"
              value={formData.referredBy}
              onChange={(e) =>
                setFormData({ ...formData, referredBy: e.target.value })
              }
              className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors"
            />
          </div>

          {/* What are you building */}
          <div>
            <label className="block text-sm text-text-muted mb-2">
              What are you building?
            </label>
            <textarea
              required
              rows={3}
              value={formData.building}
              onChange={(e) =>
                setFormData({ ...formData, building: e.target.value })
              }
              className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors resize-none"
            />
          </div>

          {/* Pillar selection */}
          <div>
            <label className="block text-sm text-text-muted mb-4">
              Which pillar resonates most?
            </label>
            <div className="flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <button
                  key={pillar}
                  type="button"
                  onClick={() => setFormData({ ...formData, pillar })}
                  className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                    formData.pillar === pillar
                      ? "bg-blush text-black"
                      : "bg-black-light border border-pearl/10 text-pearl hover:border-pearl/30"
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>
          </div>

          {/* How do you show up */}
          <div>
            <label className="block text-sm text-text-muted mb-2">
              How do you show up for others?
            </label>
            <textarea
              required
              rows={3}
              value={formData.showUp}
              onChange={(e) =>
                setFormData({ ...formData, showUp: e.target.value })
              }
              className="w-full bg-black-light border border-pearl/10 rounded-lg px-4 py-3 text-pearl placeholder-text-muted focus:outline-none focus:border-blush/50 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-pearl text-black font-medium rounded-full hover:bg-blush transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Submit Application</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
