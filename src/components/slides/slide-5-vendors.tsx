"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  ChevronLeft,
  ChevronRight,
  Clock3,
  PanelsTopLeft,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SlideContainer } from "@/components/deck/slide-container";
import { SlideHeadline } from "@/components/deck/slide-headline";
import { AudienceChainStrip } from "@/components/deck/audience-chain-strip";
import { MockProductPanel } from "@/components/deck/mock-product-panel";
import { fadeUp } from "@/lib/motion";

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
          <PanelsTopLeft className="h-3 w-3" />
            SOV Planner
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

const vendorPanels = [
  {
    title: "AI Chatbot",
    description: "Respond to planning questions instantly with inventory-aware answers.",
    icon: <Bot className="h-4 w-4" />,
    content: <AIChatbotMock />,
    timeChip: "Time saved: faster buyer/planner responses",
    qualityChip: "Quality lift: more relevant shortlist inputs",
  },
  {
    title: "Campaign Builder",
    description: "Shape pacing and market mix quickly inside an interactive module.",
    icon: <PanelsTopLeft className="h-4 w-4" />,
    content: <CampaignBuilderMock />,
    timeChip: "Time saved: less manual proposal iteration",
    qualityChip: "Quality lift: better budget and SOV tuning",
  },
  {
    title: "Recommendation Cheat Sheet",
    description: "Package best-fit locations into a compelling, ready-to-share view.",
    icon: <Sparkles className="h-4 w-4" />,
    content: <RecommendationCheatSheetMock />,
    timeChip: "Time saved: quicker recommendation packaging",
    qualityChip: "Quality lift: stronger location fit and rationale",
  },
];

export function Slide5Vendors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePanel = vendorPanels[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % vendorPanels.length);
    }, 6800);
    return () => window.clearInterval(intervalId);
  }, []);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + vendorPanels.length) % vendorPanels.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % vendorPanels.length);
  };

  return (
    <SlideContainer>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center space-y-7">
        <SlideHeadline
          headline={
            <>
              How OOH Stack serves
              <br />
              <span className="text-cyan">Vendors and sales teams</span>
            </>
          }
          subheadline="OOH Stack helps vendor teams protect context, communicate value clearly, and sell more effectively through the full buying chain."
          centered
        />

        <AudienceChainStrip highlightedRoles={["Vendor"]} />

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
                  <span>Vendor sales workflow module</span>
                </div>
                {activePanel.content}
              </MockProductPanel>
            </motion.div>
          </AnimatePresence>

          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan/35 bg-cyan/10 px-2 py-1 text-[10px] text-cyan-100">
              <Clock3 className="h-3 w-3" />
              {activePanel.timeChip}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[10px] text-amber-200">
              <TrendingUp className="h-3 w-3" />
              {activePanel.qualityChip}
            </span>
          </div>

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
              {vendorPanels.map((panel, index) => (
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

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="mx-auto max-w-2xl text-center text-sm font-light text-muted-foreground sm:text-base"
        >
          These modules reduce sales-cycle friction and consistently improve how recommendations
          are built and presented.
        </motion.p>
      </div>
    </SlideContainer>
  );
}
