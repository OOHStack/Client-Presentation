"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TOTAL_SLIDES } from "@/lib/deck-constants";

interface DeckLogoProps {
  currentSlide: number;
}

export function DeckLogo({ currentSlide }: DeckLogoProps) {
  const isCentered = currentSlide === 0 || currentSlide === TOTAL_SLIDES - 1;
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const size = isCentered ? (isMobile ? 56 : 80) : isMobile ? 36 : 48;
  const halfSize = isCentered ? size / 2 : 0;
  const right = isCentered ? `calc(50% - ${halfSize}px)` : isMobile ? "1rem" : "1.5rem";
  const top = isCentered ? (isMobile ? "0.85rem" : "2rem") : isMobile ? "0.75rem" : "1.25rem";

  return (
    <div
      className="pointer-events-none absolute z-50 overflow-hidden rounded-full"
      style={{
        right,
        top,
        width: size,
        height: size,
        opacity: visible ? (isCentered ? 1 : 0.9) : 0,
        willChange: "right, top, width, height, opacity",
        transition:
          "right 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), width 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <Image
        src="/ooh-stack-logo.png"
        alt="OOH Stack"
        width={256}
        height={256}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
