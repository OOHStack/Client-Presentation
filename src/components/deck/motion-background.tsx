"use client";

import { motion } from "framer-motion";

export function MotionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Teal glow — top right */}
      <motion.div
        className="absolute -right-[15%] -top-[20%] h-[65vh] w-[65vh] rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, hsl(180 80% 45%) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Teal glow — bottom center */}
      <motion.div
        className="absolute -bottom-[25%] left-1/2 h-[55vh] w-[80vh] -translate-x-1/2 rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(180 100% 50%) 0%, transparent 65%)",
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle teal glow — left edge */}
      <motion.div
        className="absolute -left-[20%] top-[30%] h-[45vh] w-[45vh] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, hsl(185 70% 40%) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle grid overlay — teal tinted */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(180 60% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(180 60% 50%) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
