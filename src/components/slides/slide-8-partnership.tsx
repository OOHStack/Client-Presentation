"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "@/components/deck/slide-container";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const supportingBullets = [
  "Replaces fragmented tools and disconnected workflows",
  "Improves proposal quality, visibility, and efficiency",
  "Creates a stronger, more premium selling environment",
];

export function Slide8Partnership() {
  return (
    <SlideContainer>
      <div className="mx-auto flex w-full max-w-6xl flex-col pb-4">
        <div className="shrink-0 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block rounded-full border border-cyan/35 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-100"
          >
            Partnership
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="mt-3 font-light leading-[1.25] tracking-tight text-foreground"
            style={{
              fontSize: "clamp(1.75rem, 3.1vw, 2.35rem)",
              letterSpacing: "-0.02em",
            }}
          >
            How the Partnership Works
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6"
        >
          <motion.section
            variants={staggerItem}
            className="rounded-xl border border-border/45 bg-card/35 p-5 backdrop-blur-sm sm:p-7"
          >
            <h3 className="text-lg font-light tracking-tight text-foreground">
              Platform Ownership &amp; Access
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground sm:text-[15px]">
              OOH Stack remains the underlying platform, while each client receives a fully
              customized, branded instance tailored to their inventory and sales process. Your team
              has full access to manage and operate the platform, and all of your data and content
              remain yours.
            </p>
          </motion.section>

          <motion.section
            variants={staggerItem}
            className="rounded-xl border border-border/45 bg-card/35 p-5 backdrop-blur-sm sm:p-7"
          >
            <h3 className="text-lg font-light tracking-tight text-foreground">
              How to Think About the Investment
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground sm:text-[15px]">
              This is not a one-time static build. It is a sales system that evolves alongside your
              business — improving based on how your team, clients, and agency partners actually use
              it.
            </p>
            <ul className="mt-5 space-y-2.5">
              {supportingBullets.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-sm font-light leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/60" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </motion.div>
      </div>
    </SlideContainer>
  );
}
