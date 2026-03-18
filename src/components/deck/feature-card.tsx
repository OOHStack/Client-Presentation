"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-cyan/30 hover:bg-secondary/30 sm:p-8"
    >
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground transition-colors group-hover:bg-cyan/10 group-hover:text-cyan">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-light text-foreground">{title}</h3>
      <p className="text-sm font-light leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}
