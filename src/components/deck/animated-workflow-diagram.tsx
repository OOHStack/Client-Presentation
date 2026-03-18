"use client";

import { motion } from "framer-motion";
import { timing, ease } from "@/lib/motion";
import { ReactNode } from "react";

export interface WorkflowStep {
  label: string;
  icon?: ReactNode;
  accent?: boolean;
}

interface AnimatedWorkflowDiagramProps {
  steps: WorkflowStep[];
  className?: string;
}

export function AnimatedWorkflowDiagram({
  steps,
  className = "",
}: AnimatedWorkflowDiagramProps) {
  return (
    <div className={`flex flex-col items-center gap-0 ${className}`}>
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Connector line */}
          {i > 0 && (
            <motion.div
              className="h-8 w-px bg-cyan/20 md:h-10"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                delay: i * 0.25 + 0.1,
                duration: timing.mid,
                ease: ease.out,
              }}
              style={{ transformOrigin: "top" }}
            />
          )}
          {/* Step node */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.25 + 0.2,
              duration: timing.mid,
              ease: ease.out,
            }}
            className={`flex items-center gap-3 rounded-lg border px-5 py-3 text-sm font-light transition-colors sm:px-6 sm:py-3.5 sm:text-base ${
              step.accent
                ? "border-cyan/30 bg-cyan/5 text-foreground"
                : "border-border/50 bg-secondary/50 text-muted-foreground"
            }`}
          >
            {step.icon && <span className="shrink-0">{step.icon}</span>}
            {step.label}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
