"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";
import { ReactNode } from "react";

interface MockProductPanelProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function MockProductPanel({
  title,
  description,
  children,
  className = "",
}: MockProductPanelProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm ${className}`}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 border-b border-border/30 px-3 py-1.5">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-foreground/10" />
          <div className="h-2 w-2 rounded-full bg-foreground/10" />
          <div className="h-2 w-2 rounded-full bg-foreground/10" />
        </div>
        <div className="ml-2 flex-1 rounded-sm bg-secondary/50 px-3 py-1">
          <span className="font-mono text-[10px] text-muted-foreground/60">
            yourmediakit.com
          </span>
        </div>
      </div>

      {/* Panel content */}
      <div
        className="min-h-0 flex-1 overflow-y-auto p-3 pr-2 sm:p-3.5 sm:pr-2.5"
        style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(192 20% 24%) transparent" }}
      >
        <h4 className="mb-1 text-xs font-semibold text-foreground sm:text-sm">{title}</h4>
        {description && (
          <p className="mb-2 text-[11px] text-muted-foreground">{description}</p>
        )}
        {children}
      </div>

      {/* Subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{
          background: "radial-gradient(circle at 50% 0%, hsl(210 40% 60% / 0.05) 0%, transparent 60%)"
        }}
      />
    </motion.div>
  );
}
