"use client";

import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, ClipboardList, UserRound } from "lucide-react";
import { SlideContainer } from "@/components/deck/slide-container";
import { fadeUp } from "@/lib/motion";

const solutionStages = [
  { role: "Vendor", icon: <Building2 className="h-4 w-4" /> },
  { role: "Buyer", icon: <BriefcaseBusiness className="h-4 w-4" /> },
  { role: "Planner", icon: <ClipboardList className="h-4 w-4" /> },
  { role: "Client", icon: <UserRound className="h-4 w-4" /> },
];

const retainedPackage = [
  "Environment",
  "Geography",
  "Audience behavior",
  "Traffic patterns",
  "Strategic fit",
  "CPM",
  "Impressions",
  "Cost",
];

export function Slide2Insight() {
  return (
    <SlideContainer>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-cyan-200"
        >
          The Solution
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mt-4 max-w-4xl font-light leading-[1.25] tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.65rem, 4.6vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          OOH Stack preserves the full story from vendor to client, so context and value survive
          every handoff.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="mt-5 max-w-3xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
        >
          Instead of context being stripped, the same rich information package is carried through
          vendor, buyer, planner, and client.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {solutionStages.map((stage, i) => (
            <motion.div
              key={stage.role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.35 }}
              className="rounded-lg border border-cyan/30 bg-cyan/10 p-3 text-left"
            >
              <div className="flex items-center justify-between text-foreground/90">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-200">{stage.icon}</span>
                  <span>{stage.role}</span>
                </div>
                <span className="rounded-full bg-cyan/20 px-2 py-0.5 text-[10px] font-medium text-cyan-100">
                  100% retained
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border/30">
                <div className="h-full w-full rounded-full bg-cyan/80" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="mt-6 text-xs text-cyan-200/90 sm:text-sm"
        >
          One connected platform keeps the same information package intact at every step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mt-3 flex max-w-4xl flex-wrap justify-center gap-2"
        >
          {retainedPackage.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.04, duration: 0.25 }}
              className={`rounded-md px-2.5 py-1 text-xs ${
                i >= retainedPackage.length - 3
                  ? "bg-rose-400/10 font-mono text-rose-300"
                  : "bg-cyan/10 text-foreground/75"
              }`}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </SlideContainer>
  );
}
