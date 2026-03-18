"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { slideVariants } from "@/lib/motion";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

export function SlideContainer({ children, className = "" }: SlideContainerProps) {
  return (
    <motion.div
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className={`absolute inset-0 h-[100dvh] w-full overflow-hidden ${className}`}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-start overflow-x-hidden overflow-y-auto px-4 pb-24 pt-20 sm:px-8 sm:pb-24 sm:pt-16 md:justify-center md:px-14 md:pt-12 lg:px-20 lg:pb-24">
        {children}
      </div>
    </motion.div>
  );
}
