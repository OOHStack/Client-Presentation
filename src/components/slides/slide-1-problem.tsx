"use client";

import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, ClipboardList, UserRound } from "lucide-react";
import { SlideContainer } from "@/components/deck/slide-container";
import { SlideHeadline } from "@/components/deck/slide-headline";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const contextStages = [
  {
    role: "Vendor",
    icon: <Building2 className="h-4 w-4" />,
    retained: 100,
    decisionPower: 15,
    contextChips: ["Environment", "Geography", "Audience behavior", "Traffic patterns", "Creative fit"],
  },
  {
    role: "Buyer",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    retained: 65,
    decisionPower: 35,
    contextChips: ["Geography", "Audience behavior", "Creative fit"],
  },
  {
    role: "Planner",
    icon: <ClipboardList className="h-4 w-4" />,
    retained: 35,
    decisionPower: 85,
    contextChips: ["Audience", "Reach"],
  },
  {
    role: "Client",
    icon: <UserRound className="h-4 w-4" />,
    retained: 10,
    decisionPower: 100,
    contextChips: [],
  },
];

const flattenedMetrics = ["CPM", "Impressions", "Cost"];

const realValue = [
  "Environment",
  "Geography",
  "Placement-level differentiators",
  "Audience behavior",
  "Traffic patterns",
  "Strategic relevance",
];

export function Slide1Problem() {
  return (
    <SlideContainer>
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: Copy */}
        <div className="flex flex-col items-center space-y-6 text-center lg:items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-cyan-200"
          >
            The Problem
          </motion.span>

          <SlideHeadline
            headline="OOH inventory loses its value before it reaches the client"
            centered
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
          >
            By the time out-of-home inventory reaches the client, it&apos;s reduced
            to a few numbers:
          </motion.p>

          {/* Flattened metrics */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-2"
          >
            {flattenedMetrics.map((metric) => (
              <motion.span
                key={metric}
                variants={staggerItem}
                className="rounded-md border border-border/60 bg-secondary/60 px-3 py-1.5 font-mono text-xs font-medium text-foreground/80 sm:text-sm"
              >
                {metric}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
          >
            But the real value of a location lives in its context:
          </motion.p>

          {/* Real value list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto grid max-w-md grid-cols-1 gap-y-1.5 text-left sm:max-w-none sm:grid-cols-2 sm:gap-x-6"
          >
            {realValue.map((item) => (
              <motion.span
                key={item}
                variants={staggerItem}
                className="text-sm leading-snug text-foreground/70"
              >
                <span className="mr-2 text-muted-foreground/50">—</span>
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right: Pipeline diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full"
        >
          <div className="space-y-3 rounded-xl border border-border/40 bg-secondary/20 p-4 sm:p-5">
            {contextStages.map((stage, i) => (
              <motion.div
                key={stage.role}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.15, duration: 0.35 }}
                className="rounded-lg border border-border/40 bg-background/50 p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-foreground/90">
                    <span className="text-cyan/80">{stage.icon}</span>
                    <span>{stage.role}</span>
                  </div>
                  <span className="font-mono text-xs text-foreground/60">
                    {stage.retained}% retained
                  </span>
                </div>

                <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-border/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.retained}%` }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.45 }}
                    className={`h-full rounded-full ${i < 2 ? "bg-cyan/70" : i === 2 ? "bg-amber-400/70" : "bg-rose-400/75"}`}
                  />
                </div>

                <div className="mb-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Decision power</span>
                  <span className="font-mono">{stage.decisionPower}%</span>
                </div>
                <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-border/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.decisionPower}%` }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.45 }}
                    className={`h-full rounded-full ${i >= 2 ? "bg-violet-400/80" : "bg-violet-300/50"}`}
                  />
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {stage.contextChips.map((chip) => (
                    <span
                      key={`${stage.role}-context-${chip}`}
                      className="rounded-md bg-cyan/10 px-2 py-1 text-xs text-foreground/70"
                    >
                      {chip}
                    </span>
                  ))}
                  {flattenedMetrics.map((chip) => (
                    <span
                      key={`${stage.role}-flat-${chip}`}
                      className={`rounded-md px-2 py-1 text-xs font-mono ${
                        i === 3 ? "bg-rose-400/20 text-rose-200" : "bg-rose-400/10 text-rose-300"
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.35 }}
            className="mt-3 text-center text-xs text-amber-200/90 sm:text-sm"
          >
            As vendors, we relinquish the power to sell to intermediaries before the pitch ever
            reaches the client.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.35 }}
            className="mt-4 text-center text-xs text-muted-foreground sm:text-sm"
          >
            The richer context gets stripped at each handoff, leaving the client with numbers
            instead of a compelling story while decision-making consolidates with the planner
            and ends at the client.
          </motion.p>
        </motion.div>
      </div>
    </SlideContainer>
  );
}
