"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { TOTAL_SLIDES, WHEEL_DEBOUNCE_MS, SWIPE_THRESHOLD_PX } from "@/lib/deck-constants";
import { DeckProgressNav } from "./deck-progress-nav";
import { DeckControls } from "./deck-controls";
import { DeckLogo } from "./deck-logo";
import { MotionBackground } from "./motion-background";
import { Slide0Intro } from "@/components/slides/slide-0-intro";
import { Slide1Problem } from "@/components/slides/slide-1-problem";
import { Slide2Insight } from "@/components/slides/slide-2-insight";
import { Slide3Experience } from "@/components/slides/slide-3-experience";
import { Slide4Workflow } from "@/components/slides/slide-4-workflow";
import { Slide5Vendors } from "@/components/slides/slide-5-vendors";
import { Slide6ROI } from "@/components/slides/slide-6-roi";
import { Slide7InvestmentOverview } from "@/components/slides/slide-7-investment-overview";
import { Slide8Partnership } from "@/components/slides/slide-8-partnership";
import { SlideCTA } from "@/components/slides/slide-cta";

const slides = [
  Slide0Intro,
  Slide1Problem,
  Slide2Insight,
  Slide5Vendors,
  Slide3Experience,
  Slide4Workflow,
  Slide6ROI,
  Slide7InvestmentOverview,
  Slide8Partnership,
  SlideCTA,
];

export function DeckShell() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartRef = useRef<{ x: number; y: number; ignoreSwipe: boolean } | null>(null);
  const isTransitioning = useRef(false);

  const hasScrollableParent = useCallback((target: EventTarget | null, root: EventTarget | null) => {
    let node = target instanceof HTMLElement ? target : null;
    const rootEl = root instanceof HTMLElement ? root : null;

    while (node && node !== rootEl) {
      const style = window.getComputedStyle(node);
      const canScrollY =
        (style.overflowY === "auto" || style.overflowY === "scroll") &&
        node.scrollHeight > node.clientHeight;
      if (canScrollY) return true;
      node = node.parentElement;
    }
    return false;
  }, []);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES && !isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentSlide(index);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 500);
    }
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < TOTAL_SLIDES - 1 && !isTransitioning.current) {
        isTransitioning.current = true;
        setTimeout(() => {
          isTransitioning.current = false;
        }, 500);
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0 && !isTransitioning.current) {
        isTransitioning.current = true;
        setTimeout(() => {
          isTransitioning.current = false;
        }, 500);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (wheelTimeoutRef.current) return;
      if (hasScrollableParent(e.target, e.currentTarget)) return;

      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) goNext();
        else goPrev();

        wheelTimeoutRef.current = setTimeout(() => {
          wheelTimeoutRef.current = null;
        }, WHEEL_DEBOUNCE_MS);
      }
    },
    [goNext, goPrev, hasScrollableParent]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        ignoreSwipe: hasScrollableParent(e.target, e.currentTarget),
      };
    },
    [hasScrollableParent]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      if (touchStartRef.current.ignoreSwipe) {
        touchStartRef.current = null;
        return;
      }
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD_PX) {
        if (deltaX < 0) goNext();
        else goPrev();
      } else if (Math.abs(deltaY) > SWIPE_THRESHOLD_PX) {
        if (deltaY < 0) goNext();
        else goPrev();
      }

      touchStartRef.current = null;
    },
    [goNext, goPrev]
  );

  const CurrentSlide = slides[currentSlide];

  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden bg-background"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <MotionBackground />
      <DeckLogo currentSlide={currentSlide} />

      <AnimatePresence mode="wait">
        <CurrentSlide key={currentSlide} />
      </AnimatePresence>

      <DeckProgressNav
        total={TOTAL_SLIDES}
        current={currentSlide}
        onNavigate={goTo}
      />

      <DeckControls
        onNext={goNext}
        onPrev={goPrev}
        canNext={currentSlide < TOTAL_SLIDES - 1}
        canPrev={currentSlide > 0}
      />
    </div>
  );
}
