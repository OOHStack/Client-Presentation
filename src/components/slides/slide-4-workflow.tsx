"use client";

import { CheckCircle2, Eye, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import { SlideContainer } from "@/components/deck/slide-container";
import { SlideHeadline } from "@/components/deck/slide-headline";
import { AudienceChainStrip } from "@/components/deck/audience-chain-strip";
import { FeatureCard } from "@/components/deck/feature-card";
import { fadeUp, staggerContainer } from "@/lib/motion";

const clientBenefits = [
  {
    title: "Clearer Decisions",
    description:
      "Clients see the strategy, context, and rationale behind each recommendation before they approve.",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: "More Confidence in Placement Value",
    description:
      "Interactive views make it easier to understand why each board or screen earns budget.",
    icon: <MapPinned className="h-5 w-5" />,
  },
  {
    title: "Higher Likelihood to Purchase",
    description:
      "When context and value are fully retained, clients are more likely to approve and buy inventory with confidence.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

export function Slide4Workflow() {
  return (
    <SlideContainer>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-8">
        <SlideHeadline
          headline={
            <>
              How OOH Stack serves
              <br />
              <span className="text-cyan">the client</span>
            </>
          }
          subheadline={
            <>
              Because all information is retained from vendor to client,{" "}
              <span className="text-cyan">
                purchase propensity increases, and final approvals happen with greater confidence.
              </span>
            </>
          }
          centered
        />

        <AudienceChainStrip highlightedRoles={["Client"]} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid w-full gap-5 sm:grid-cols-3"
        >
          {clientBenefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="max-w-2xl text-center text-sm font-light text-muted-foreground sm:text-base"
        >
          Retaining the full story through every handoff makes clients more confident in the
          recommendation and materially increases the likelihood of purchase.
        </motion.p>
      </div>
    </SlideContainer>
  );
}
