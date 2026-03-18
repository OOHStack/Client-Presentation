"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "@/components/deck/slide-container";
import { fadeUp } from "@/lib/motion";

function ProductMock() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.55}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="relative overflow-hidden rounded-lg border border-border/40 bg-card/60 shadow-2xl shadow-cyan/5 backdrop-blur-sm">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/30 px-3 py-2">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-foreground/10" />
            <div className="h-2 w-2 rounded-full bg-foreground/10" />
            <div className="h-2 w-2 rounded-full bg-foreground/10" />
          </div>
          <div className="ml-1 flex-1 rounded bg-secondary/50 px-2 py-0.5">
            <span className="font-mono text-[9px] text-muted-foreground/50">
              yourmediakit.com
            </span>
          </div>
        </div>
        {/* Mock content */}
        <div className="space-y-2.5 p-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-foreground/10" />
            <div className="flex gap-2">
              <div className="h-2 w-10 rounded bg-foreground/8" />
              <div className="h-2 w-10 rounded bg-foreground/8" />
              <div className="h-2 w-10 rounded bg-foreground/8" />
            </div>
          </div>
          <div className="relative h-24 w-full overflow-hidden rounded bg-secondary/40">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(180 40% 40%) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(180 40% 40%) 1px, transparent 1px)
                `,
                backgroundSize: "16px 16px",
              }}
            />
            {[
              { top: "25%", left: "35%" },
              { top: "55%", left: "60%" },
              { top: "40%", left: "75%" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-cyan/50"
                style={pos}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.3 }}
              />
            ))}
          </div>
          <div className="flex justify-between gap-2">
            {[
              { label: "Units", value: "2,847" },
              { label: "Markets", value: "14" },
              { label: "Reach", value: "12.4M" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 rounded bg-secondary/30 px-2 py-1.5 text-center">
                <div className="text-[9px] font-light text-muted-foreground/40">{stat.label}</div>
                <div className="font-mono text-[11px] text-foreground/60">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Slide0Intro() {
  return (
    <SlideContainer>
      <div className="mx-auto flex max-w-3xl flex-col items-center pt-16 text-center sm:pt-20">
        {/* Badge pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className="inline-block rounded-full border border-cyan/40 bg-cyan/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan sm:text-sm">
            Sales Infrastructure for OOH Vendors
          </span>
        </motion.div>

        {/* Hero headline — font-light sans-serif matching oohstack.com */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mt-6 font-light leading-[1.28] text-foreground sm:mt-8 md:mt-10"
          style={{
            fontSize: "clamp(1.55rem, 4.4vw, 2.7rem)",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="whitespace-nowrap">Preserve the value of your OOH inventory</span>
          <br />
          through every handoff to increase clients&apos; likelihood of purchase
        </motion.h1>

        {/* Product mock */}
        <div className="mt-6 w-full sm:mt-8 md:mt-10">
          <ProductMock />
        </div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:mt-8 sm:text-base"
        >
          OOH Stack transforms how out-of-home vendors present, explain, and sell
          their inventory to agencies and brands.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
          className="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
        >
          Interactive experiences that preserve the story behind every location.
        </motion.p>

      </div>
    </SlideContainer>
  );
}
