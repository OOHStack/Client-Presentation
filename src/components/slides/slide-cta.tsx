"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, BriefcaseBusiness, ShieldCheck, UserRound } from "lucide-react";
import { SlideContainer } from "@/components/deck/slide-container";
import { fadeUp } from "@/lib/motion";

export function SlideCTA() {
  return (
    <SlideContainer>
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center overflow-y-auto pb-6 pt-20 text-center sm:pt-24">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          href="https://oohstack.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-cyan/35 bg-cyan/10 px-3 py-1 text-xs tracking-wide text-cyan-100 transition-colors hover:border-cyan/60 hover:bg-cyan/15"
        >
          Visit OOH Stack website
        </motion.a>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-4 font-light leading-[1.3] tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Your OOH Stack Advantage
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
        >
          We build custom, bespoke solutions for each vendor&apos;s specific needs while applying
          the same proven OOH Stack method and strategy from proposal to purchase.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="mt-8 grid w-full max-w-4xl gap-3 sm:grid-cols-3"
        >
          <div className="rounded-lg border border-cyan/25 bg-cyan/5 p-4 text-left">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan/15 text-cyan-100">
              <Building2 className="h-4 w-4" />
            </div>
            <p className="text-sm text-foreground/90">Vendor story preserved</p>
            <p className="mt-1 text-xs text-muted-foreground">Context and value stay attached.</p>
          </div>
          <div className="rounded-lg border border-cyan/25 bg-cyan/5 p-4 text-left">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan/15 text-cyan-100">
              <BriefcaseBusiness className="h-4 w-4" />
            </div>
            <p className="text-sm text-foreground/90">Agency workflow compatible</p>
            <p className="mt-1 text-xs text-muted-foreground">Interactive links in existing tools.</p>
          </div>
          <div className="rounded-lg border border-cyan/25 bg-cyan/5 p-4 text-left">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan/15 text-cyan-100">
              <UserRound className="h-4 w-4" />
            </div>
            <p className="text-sm text-foreground/90">Client purchase propensity rises</p>
            <p className="mt-1 text-xs text-muted-foreground">Decisions are made with confidence.</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="mt-6 w-full max-w-4xl rounded-xl border border-cyan/35 bg-cyan/8 p-4 text-left sm:p-5"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan/35 bg-cyan/12 px-3 py-1 text-xs text-cyan-100">
            <ShieldCheck className="h-3.5 w-3.5" />
            Why build this with me
          </div>
          <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
            I&apos;ve spent nearly <span className="text-cyan">10 years in out-of-home</span>,
            working both sides of the table: agency planning and buying, and vendor sales.
            That cross-functional experience lets me identify what gets lost during handoffs and build
            the right solution to preserve value and improve how inventory gets sold.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-cyan/35 bg-cyan/12 px-2.5 py-1 text-cyan-100">
              ~10 years OOH experience
            </span>
            <span className="rounded-full border border-cyan/35 bg-cyan/12 px-2.5 py-1 text-cyan-100">
              Agency planner & buyer background
            </span>
            <span className="rounded-full border border-cyan/35 bg-cyan/12 px-2.5 py-1 text-cyan-100">
              Vendor-side sales execution
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.62}
          className="mt-8 flex w-full max-w-4xl flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#"
            className="group flex w-full items-center justify-center gap-2 rounded-lg border border-cyan/50 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-cyan hover:bg-cyan/5"
          >
            Demo One
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="group flex w-full items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-cyan hover:bg-cyan/5"
          >
            Demo Two
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="group flex w-full items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-cyan hover:bg-cyan/5"
          >
            Demo Three
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="mt-12 font-mono text-xs tracking-wider text-muted-foreground/50"
        >
          OOH Stack Technologies Inc.
        </motion.p>
      </div>
    </SlideContainer>
  );
}
