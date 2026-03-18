"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DeckControlsProps {
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
}

export function DeckControls({ onNext, onPrev, canNext, canPrev }: DeckControlsProps) {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-24 bg-gradient-to-t from-black/65 via-black/25 to-transparent md:hidden" />
      <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
        <AnimatePresence>
          {canPrev && (
            <motion.button
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              onClick={onPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan/20 bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:border-cyan/40 hover:bg-secondary hover:text-foreground"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {canNext && (
            <motion.button
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              onClick={onNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan/20 bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:border-cyan/40 hover:bg-secondary hover:text-foreground"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
    
  );
}
