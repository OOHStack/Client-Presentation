"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "@/components/deck/slide-container";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const coreItems = [
  "Platform infrastructure + setup",
  "Inventory/data structuring and onboarding",
  "Custom UI/UX aligned to brand",
  "Interactive mapping",
  "Presentation mode",
  "Smart search functionality",
  "Backend CMS / inventory management",
  "Core analytics + tracking",
  "Platform onboarding guide",
];

type ExpansionLayerItem =
  | string
  | { title: string; subpoints: string[] };

const expansionExamples: ExpansionLayerItem[] = [
  "Campaign Builder",
  "Proposal Workflow",
  "AI Assistant",
  {
    title: "Smart Planning Tools",
    subpoints: [
      "Intelligent Recommendations",
      "Planning Frameworks & Shortcuts",
      "Controlled Rate Access & Scenario Modeling",
    ],
  },
];

const ongoingItems = [
  "Hosting + infrastructure",
  "Maintenance, monitoring, and updates",
  "Core analytics tracking",
  "Up to 4 hours/month of build time",
  "Quarterly strategy + optimization sessions",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5 text-left">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-[13px] font-light leading-relaxed text-muted-foreground sm:text-sm"
        >
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/60" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExpansionLayersList({ items }: { items: ExpansionLayerItem[] }) {
  return (
    <ul className="mt-4 space-y-2.5 text-left">
      {items.map((item) =>
        typeof item === "string" ? (
          <li
            key={item}
            className="flex gap-2 text-[13px] font-light leading-relaxed text-muted-foreground sm:text-sm"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/60" aria-hidden />
            <span>{item}</span>
          </li>
        ) : (
          <li key={item.title} className="text-[13px] font-light leading-relaxed text-muted-foreground sm:text-sm">
            <div className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/60" aria-hidden />
              <div className="min-w-0 flex-1">
                <span className="text-foreground/90">{item.title}</span>
                <ul className="mt-2 space-y-1.5 border-l border-border/35 pl-3 text-[12px] text-muted-foreground sm:text-[13px]">
                  {item.subpoints.map((sub) => (
                    <li key={sub} className="leading-relaxed">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export function Slide7InvestmentOverview() {
  return (
    <SlideContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col pb-4">
        <div className="shrink-0 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block rounded-full border border-cyan/35 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-100"
          >
            Pricing / Investment
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
            Investment Overview
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.16}
            className="mx-auto mt-3 max-w-3xl text-sm font-light leading-relaxed text-muted-foreground sm:text-[15px]"
          >
            OOH Stack is structured as a platform investment designed to improve how vendors present,
            manage, and sell inventory over time.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          <motion.article
            variants={staggerItem}
            className="flex flex-col rounded-xl border border-border/45 bg-card/35 p-5 backdrop-blur-sm sm:p-6"
          >
            <h3 className="text-lg font-light tracking-tight text-foreground">Core Platform</h3>
            <p className="mt-3 font-mono text-xl text-cyan sm:text-2xl">Starting at $16,000</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
              This is the required foundation layer — the base system that becomes your central sales
              platform.
            </p>
            <BulletList items={coreItems} />
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="flex flex-col rounded-xl border border-border/45 bg-card/35 p-5 backdrop-blur-sm sm:p-6"
          >
            <h3 className="text-lg font-light tracking-tight text-foreground">Expansion Layers</h3>
            <p className="mt-3 font-mono text-xl text-cyan sm:text-2xl">$2,000–$4,000 per layer</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
              Additional modules can be introduced in Phase 1 or Phase 2 depending on goals, workflow,
              and scope.
            </p>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-cyan/80">
              Example expansion layers
            </p>
            <ExpansionLayersList items={expansionExamples} />
            <p className="mt-auto pt-4 text-xs font-light leading-relaxed text-muted-foreground/90">
              Most partners launch with Core + 1–2 expansion layers.
            </p>
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="flex flex-col rounded-xl border border-border/45 bg-card/35 p-5 backdrop-blur-sm sm:p-6"
          >
            <h3 className="text-lg font-light tracking-tight text-foreground">
              Ongoing Platform &amp; Optimization
            </h3>
            <p className="mt-3 font-mono text-xl text-cyan sm:text-2xl">Typically $2,000/month</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
              This keeps the platform running smoothly and improving over time as your team uses it.
            </p>
            <BulletList items={ongoingItems} />
          </motion.article>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="mx-auto mt-8 max-w-2xl text-center text-xs font-light leading-relaxed text-muted-foreground/80 sm:text-sm"
        >
          Variable API costs, where applicable, are passed through at cost with no markup.
        </motion.p>
      </div>
    </SlideContainer>
  );
}
