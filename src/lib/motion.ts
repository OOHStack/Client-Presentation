import { Variants } from "framer-motion";

export const timing = {
  fast: 0.2,
  mid: 0.4,
  slow: 0.6,
  stagger: 0.08,
  staggerSlow: 0.15,
} as const;

type CubicBezier = [number, number, number, number];

export const ease = {
  out: [0.25, 0.1, 0.25, 1] as CubicBezier,
  inOut: [0.42, 0, 0.58, 1] as CubicBezier,
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
};

export const slideVariants: Variants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timing.mid,
      ease: ease.out,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: timing.fast,
      ease: ease.out,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: timing.mid,
      delay,
      ease: ease.out,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: timing.stagger,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timing.mid,
      ease: ease.out,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: timing.mid,
      delay,
      ease: ease.out,
    },
  }),
};

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
