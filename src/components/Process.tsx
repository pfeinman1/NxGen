"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell Us Who You Are",
    description:
      "Share what you're passionate about learning and building, how you give back, where you invest in others, and what kind of community you're looking for. We read every word.",
  },
  {
    number: "02",
    title: "A Real Conversation",
    description:
      "A 30-minute call with someone from our founding circle. No pitch, no pressure - just a genuine conversation to see if the energy is right.",
  },
  {
    number: "03",
    title: "Alignment",
    description:
      "We introduce you to two or three people in our network whose work and values align with yours. Their perspective matters to us.",
  },
  {
    number: "04",
    title: "Welcome",
    description:
      "When the fit is right, you'll receive full access, a personal onboarding call, and a warm welcome to the neighborhood - by name, not by number.",
  },
];

export default function Process() {
  return (
    <section className="relative py-16 lg:py-20 bg-black">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl text-pearl mb-6 font-bold">
            Access is earned, not bought.
          </h2>
          <p className="text-lg text-text-soft max-w-2xl mx-auto">
            We review every application personally. We&apos;re not looking for the most impressive resume in the room. We&apos;re looking for character - people who show up, give generously, and make the people around them better. If that&apos;s you, we want to know.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-blush via-pearl/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                {/* Number circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-black-light border border-pearl/10 flex items-center justify-center relative z-10">
                  <span className="text-blush text-sm tracking-widest">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-xl text-pearl font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-soft leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
