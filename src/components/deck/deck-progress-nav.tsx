"use client";

import { motion } from "framer-motion";
import { SLIDE_TITLES } from "@/lib/deck-constants";

interface DeckProgressNavProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}

export function DeckProgressNav({ total, current, onNavigate }: DeckProgressNavProps) {
  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 md:right-6 md:flex lg:right-8"
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group relative flex h-11 w-11 items-center justify-center"
          aria-label={`Go to slide ${i + 1}: ${SLIDE_TITLES[i]}`}
          aria-current={i === current ? "step" : undefined}
        >
          <motion.div
            className={`rounded-full ${i === current ? "bg-cyan" : "bg-foreground/20"}`}
            animate={{
              width: i === current ? 10 : 6,
              height: i === current ? 10 : 6,
              opacity: i === current ? 1 : 0.4,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground opacity-0 transition-opacity group-hover:opacity-100">
            {SLIDE_TITLES[i]}
          </span>
        </button>
      ))}
    </nav>
  );
}
