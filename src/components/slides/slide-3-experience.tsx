"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  ChevronLeft,
  ChevronRight,
  FileText,
  Map,
  PanelsTopLeft,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { SlideContainer } from "@/components/deck/slide-container";
import { SlideHeadline } from "@/components/deck/slide-headline";
import { AudienceChainStrip } from "@/components/deck/audience-chain-strip";
import { MockProductPanel } from "@/components/deck/mock-product-panel";

function AIChatbotMock() {
  const messages = [
    { text: "Find top Toronto commuter boards", fromUser: true },
    { text: "11 screens found near key commuter routes.", fromUser: false },
    { text: "Show highest weekly impressions", fromUser: true },
  ];

  return (
    <div className="space-y-2.5">
      <div className="space-y-1.5 rounded bg-secondary/30 p-2.5">
        {messages.map((message, i) => (
          <motion.div
            key={message.text}
            className={`max-w-[88%] rounded px-2.5 py-1.5 text-[10px] ${
              message.fromUser
                ? "ml-auto bg-cyan/20 text-foreground/80"
                : "bg-foreground/10 text-muted-foreground"
            }`}
            initial={{ opacity: 0, x: message.fromUser ? 8 : -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75 + i * 0.14, duration: 0.3 }}
          >
            {message.text}
          </motion.div>
        ))}
        <motion.div
          className="inline-flex items-center gap-1 rounded bg-foreground/10 px-2 py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.25 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-1 w-1 rounded-full bg-muted-foreground/70"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ delay: dot * 0.12, duration: 0.9, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {["Audience intent", "Geo filters", "POI context"].map((chip, i) => (
          <motion.span
            key={chip}
            className="rounded border border-border/60 bg-secondary/30 px-2 py-0.5 text-[9px] text-muted-foreground"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.25 }}
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function CampaignBuilderMock() {
  const budgets = [72, 58, 84, 64];

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between rounded bg-secondary/30 px-2.5 py-1.5 text-[10px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <SlidersHorizontal className="h-3 w-3" />
          SOV planner
        </span>
        <span>25%</span>
      </div>
      <div className="space-y-1.5">
        {budgets.map((value, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between text-[9px] text-muted-foreground/70">
              <span>Week {i + 1}</span>
              <span>${(value * 500).toLocaleString()}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded bg-foreground/10">
              <motion.div
                className="h-full rounded bg-cyan/50"
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ delay: 0.85 + i * 0.11, duration: 0.35 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {["2 markets", "13.2M imps", "28 days"].map((stat, i) => (
          <motion.div
            key={stat}
            className="rounded bg-secondary/30 px-2 py-1 text-center text-[9px] text-muted-foreground"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 + i * 0.08, duration: 0.25 }}
          >
            {stat}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RecommendationCheatSheetMock() {
  const boards = [
    "Britannia Rd W s/o Queen St",
    "Dixie Rd S/O Dundas St",
    "Hwy 27 s/o Rutherford Rd",
  ];

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap gap-1.5">
        {["Outlet seekers", "Weekend shoppers", "Commuters"].map((chip, i) => (
          <motion.span
            key={chip}
            className={`rounded-full border px-2 py-0.5 text-[9px] ${
              i === 0
                ? "border-cyan/40 bg-cyan/10 text-cyan"
                : "border-border/60 bg-secondary/20 text-muted-foreground"
            }`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 + i * 0.1, duration: 0.25 }}
          >
            {chip}
          </motion.span>
        ))}
      </div>
      <div className="space-y-1.5">
        {boards.map((board, i) => (
          <motion.div
            key={board}
            className="flex items-center justify-between rounded bg-secondary/25 px-2.5 py-1.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.3 }}
          >
            <div>
              <p className="text-[10px] text-foreground/75">{board}</p>
              <p className="text-[9px] text-muted-foreground/60">Mississauga</p>
            </div>
            <motion.span
              className="text-[10px] font-medium text-foreground/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.12, duration: 0.2 }}
            >
              {[92, 82, 59][i]}K
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function InteractiveMapsMock() {
  const markers = [
    { top: "28%", left: "28%", color: "bg-amber-300/80" },
    { top: "42%", left: "48%", color: "bg-blue-300/80" },
    { top: "54%", left: "36%", color: "bg-amber-300/80" },
    { top: "33%", left: "62%", color: "bg-blue-300/80" },
    { top: "60%", left: "58%", color: "bg-amber-300/80" },
  ];

  return (
    <div className="space-y-2.5">
      <div className="relative h-20 overflow-hidden rounded bg-secondary/35 sm:h-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(hsl(210 20% 45% / 0.45) 1px, transparent 1px),
              linear-gradient(90deg, hsl(210 20% 45% / 0.45) 1px, transparent 1px)
            `,
            backgroundSize: "22px 22px",
          }}
        />

        {markers.map((marker, i) => (
          <motion.div
            key={`${marker.top}-${marker.left}`}
            className="absolute"
            style={{ top: marker.top, left: marker.left }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
          >
            <motion.span
              className={`block h-2.5 w-2.5 rounded-full ${marker.color}`}
              animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15 }}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {["81 locations", "5 markets", "Click markers for details"].map((chip, i) => (
          <motion.span
            key={chip}
            className="rounded border border-border/60 bg-secondary/20 px-2 py-0.5 text-[9px] text-muted-foreground"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 + i * 0.1, duration: 0.25 }}
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function SmartLocationPagesMock() {
  const stats = [
    { label: "Daily reach", value: "105,053" },
    { label: "Median age", value: "39.2" },
    { label: "HH income", value: "$85,200" },
  ];

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-[1.1fr_1fr] gap-1.5">
        <motion.div
          className="relative h-16 overflow-hidden rounded bg-secondary/35 sm:h-20"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <motion.div
            className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
            initial={{ x: 0 }}
            animate={{ x: "360%" }}
            transition={{ duration: 1.9, repeat: Infinity, repeatDelay: 1.1 }}
          />
        </motion.div>
        <div className="space-y-1.5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded bg-secondary/25 px-2 py-1"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
            >
              <p className="text-[9px] text-muted-foreground/70">{stat.label}</p>
              <p className="text-[10px] font-medium text-foreground/75">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded bg-secondary/25 px-2.5 py-1.5 text-[10px] text-muted-foreground">
        <span>Nearby: Pearson Airport, Woodbine Centre</span>
        <motion.span
          className="rounded bg-cyan/15 px-2 py-0.5 text-[9px] text-cyan"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Live data
        </motion.span>
      </div>
    </div>
  );
}

function LiveProposalLinkMock() {
  const metrics = [
    { label: "Investment", value: "$37K" },
    { label: "Impressions", value: "7.8M" },
    { label: "Locations", value: "4" },
    { label: "Markets", value: "1" },
    { label: "Flight", value: "28 days" },
  ];

  return (
    <div className="space-y-2">
      <div className="rounded bg-secondary/25 p-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[9px] uppercase tracking-wide text-muted-foreground/70">
              Campaign summary
            </p>
            <p className="text-[11px] font-medium text-foreground/85">BetMGM · FIFA 2026</p>
          </div>
          <motion.span
            className="rounded border border-cyan/35 bg-cyan/10 px-1.5 py-0.5 text-[9px] text-cyan-100"
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            Live proposal link
          </motion.span>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-1">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.08, duration: 0.25 }}
              className="rounded bg-background/50 px-1.5 py-1"
            >
              <p className="text-[8px] uppercase text-muted-foreground/60">{metric.label}</p>
              <p className="text-[10px] font-medium text-foreground/80">{metric.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {["Buy information", "Flight dates", "Manage locations"].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.25 }}
            className="rounded bg-secondary/20 px-2 py-1.5"
          >
            <p className="text-[9px] text-foreground/80">{title}</p>
            <div className="mt-1.5 space-y-1">
              <div className="h-1.5 rounded bg-foreground/10" />
              <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
              <motion.div
                className="h-1.5 rounded bg-cyan/35"
                initial={{ width: "15%" }}
                animate={{ width: ["15%", "55%", "35%"] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const panels = [
  {
    title: "Live Proposal Link",
    description:
      "Share one interactive proposal URL that agencies can review, edit, and carry forward to the client.",
    icon: <FileText className="h-4 w-4" />,
    content: <LiveProposalLinkMock />,
  },
  {
    title: "Interactive Maps",
    description: "Give buyers a live map layer to explore inventory context by market.",
    icon: <Map className="h-4 w-4" />,
    content: <InteractiveMapsMock />,
  },
  {
    title: "Smart Location Pages",
    description: "Show each board with rich audience and proximity context in one view.",
    icon: <FileText className="h-4 w-4" />,
    content: <SmartLocationPagesMock />,
  },
];

export function Slide3Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePanel = panels[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % panels.length);
    }, 6800);

    return () => window.clearInterval(intervalId);
  }, []);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + panels.length) % panels.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % panels.length);
  };

  return (
    <SlideContainer>
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SlideHeadline
          headline={
            <>
              How OOH Stack serves
              <br />
              <span className="text-cyan">Agencies (buyers and planners)</span>
            </>
          }
          subheadline="A single OOH Stack hyperlink drops into existing agency workflows, so buyers and planners can review market context and board-level detail while preserving full context for the client."
          centered
        />

        <AudienceChainStrip highlightedRoles={["Buyer", "Planner"]} />

        <div className="mx-auto w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
            >
            <MockProductPanel
              title={activePanel.title}
              description={activePanel.description}
              className="h-[220px] sm:h-[240px]"
            >
              <div className="mb-2 inline-flex items-center gap-2 rounded border border-border/50 bg-secondary/30 px-2 py-0.5 text-[9px] uppercase tracking-wide text-muted-foreground">
                {activePanel.icon}
                <span>Hyperlinked workflow module</span>
              </div>
              {activePanel.content}
            </MockProductPanel>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center gap-1.5 rounded border border-border/60 bg-secondary/20 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary/35"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Previous
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {panels.map((panel, index) => (
                <button
                  key={panel.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${panel.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-6 bg-cyan"
                      : "w-2.5 bg-foreground/20 hover:bg-foreground/35"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-1.5 rounded border border-border/60 bg-secondary/20 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary/35"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
