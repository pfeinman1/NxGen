"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const size = 600;
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.38;

    let rotation = 0;
    let animationId: number;

    // Particle system for orbiting elements
    const particles: Array<{
      angle: number;
      radius: number;
      speed: number;
      size: number;
      orbitTilt: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 8; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: radius + 20 + Math.random() * 60,
        speed: 0.002 + Math.random() * 0.003,
        size: 2 + Math.random() * 3,
        orbitTilt: Math.random() * 0.5 - 0.25,
      });
    }

    // Animated lines
    const lines: Array<{
      startAngle: number;
      length: number;
      radius: number;
      speed: number;
      orbitTilt: number;
    }> = [];

    for (let i = 0; i < 12; i++) {
      lines.push({
        startAngle: Math.random() * Math.PI * 2,
        length: 0.1 + Math.random() * 0.2,
        radius: radius + 30 + Math.random() * 80,
        speed: 0.003 + Math.random() * 0.004,
        orbitTilt: Math.random() * 0.6 - 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Globe color
      const globeColor = "rgba(240, 237, 232, 0.08)";
      const lineColor = "rgba(240, 237, 232, 0.15)";
      const accentColor = "rgba(240, 237, 232, 0.6)";

      // Draw main globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw latitude lines
      for (let i = 1; i < 6; i++) {
        const latRadius = radius * Math.sin((i * Math.PI) / 6);
        const latY = centerY - radius * Math.cos((i * Math.PI) / 6);

        ctx.beginPath();
        ctx.ellipse(centerX, latY, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = globeColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw longitude lines (rotating)
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + rotation;

        ctx.beginPath();
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);

        // Draw ellipse for longitude
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 0.15, radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = globeColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();
      }

      // Draw orbital rings
      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer orbit 1
      ctx.beginPath();
      ctx.ellipse(0, 0, radius + 50, radius * 0.4 + 20, -0.3, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(240, 237, 232, 0.1)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Outer orbit 2
      ctx.beginPath();
      ctx.ellipse(0, 0, radius + 80, radius * 0.5 + 30, 0.4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(240, 237, 232, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();

      // Draw animated particles
      particles.forEach((particle) => {
        particle.angle += particle.speed;

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y =
          centerY +
          Math.sin(particle.angle) * particle.radius * 0.4 +
          Math.sin(particle.angle) * particle.orbitTilt * 50;

        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 3);
        gradient.addColorStop(0, "rgba(240, 237, 232, 0.8)");
        gradient.addColorStop(0.5, "rgba(240, 237, 232, 0.2)");
        gradient.addColorStop(1, "rgba(240, 237, 232, 0)");

        ctx.beginPath();
        ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
      });

      // Draw animated lines
      lines.forEach((line) => {
        line.startAngle += line.speed;

        const startX = centerX + Math.cos(line.startAngle) * line.radius;
        const startY =
          centerY +
          Math.sin(line.startAngle) * line.radius * 0.4 +
          Math.sin(line.startAngle) * line.orbitTilt * 60;

        const endX = centerX + Math.cos(line.startAngle + line.length) * line.radius;
        const endY =
          centerY +
          Math.sin(line.startAngle + line.length) * line.radius * 0.4 +
          Math.sin(line.startAngle + line.length) * line.orbitTilt * 60;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "rgba(240, 237, 232, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw center circle indicator
      const indicatorX = centerX + 80;
      const indicatorY = centerY - 100;

      ctx.beginPath();
      ctx.arc(indicatorX, indicatorY, 20, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(240, 237, 232, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(indicatorX, indicatorY, 4, 0, Math.PI * 2);
      ctx.fillStyle = accentColor;
      ctx.fill();

      rotation += 0.002;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[600px] max-h-[600px]"
        style={{ aspectRatio: "1/1" }}
      />
    </motion.div>
  );
}
