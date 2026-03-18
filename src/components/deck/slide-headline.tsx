"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ReactNode } from "react";

interface SlideHeadlineProps {
  headline: string | ReactNode;
  subheadline?: string | ReactNode;
  className?: string;
  centered?: boolean;
}

export function SlideHeadline({
  headline,
  subheadline,
  className = "",
  centered = false,
}: SlideHeadlineProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-3xl font-light leading-[1.3] tracking-tight text-foreground sm:text-4xl md:text-5xl"
        style={{
          fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {headline}
      </motion.h2>
      {subheadline && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className={`mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg md:mt-6 ${centered ? "mx-auto" : ""}`}
        >
          {typeof subheadline === "string" ? <p>{subheadline}</p> : subheadline}
        </motion.div>
      )}
    </div>
  );
}
