"use client";

import { motion } from "framer-motion";
import { ArrowRight, Link2 } from "lucide-react";

const ROLES = ["Vendor", "Buyer", "Planner", "Client"] as const;

interface AudienceChainStripProps {
  highlightedRoles: string[];
  className?: string;
}

export function AudienceChainStrip({
  highlightedRoles,
  className = "",
}: AudienceChainStripProps) {
  const highlightSet = new Set(highlightedRoles);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mx-auto grid w-full max-w-5xl grid-cols-1 gap-2 rounded-xl border border-cyan/25 bg-cyan/5 p-2.5 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center ${className}`}
    >
      {ROLES.map((role, index) => {
        const isHighlighted = highlightSet.has(role);

        return (
          <div key={role} className="contents">
            <div
              className={`rounded-lg border px-2.5 py-1.5 text-center transition-colors ${
                isHighlighted
                  ? "border-cyan/45 bg-cyan/12"
                  : "border-border/40 bg-background/35 opacity-55"
              }`}
            >
              <p className={`text-[11px] ${isHighlighted ? "text-foreground" : "text-foreground/70"}`}>
                {role}
              </p>
              <div
                className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] ${
                  isHighlighted
                    ? "bg-cyan/20 text-cyan-100"
                    : "bg-foreground/10 text-muted-foreground"
                }`}
              >
                <Link2 className="h-2.5 w-2.5" />
                Interactive link
              </div>
              <p className="mt-1 text-[9px] text-muted-foreground">100% context retained</p>
            </div>

            {index < ROLES.length - 1 && (
              <div className="hidden justify-center sm:flex">
                <ArrowRight className="h-3.5 w-3.5 text-cyan/60" />
              </div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
