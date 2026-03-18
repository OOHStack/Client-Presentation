"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { slideVariants, fadeUp } from "@/lib/motion";

const DEFAULTS = {
  setupCost: 0,
  monthlyCost: 0,
  reps: 4,
  proposalsPerRep: 10,
  hoursPerProposal: 2,
  hourlyCost: 75,
  campaignValue: 25000,
  campaignMargin: 30,
  rampDaysReduction: 30,
  incrementalDeals: 4,
  educationHours: 8,
  emailHours: 12,
  timeReductionPct: 75,
  educationReductionPct: 60,
  communicationReductionPct: 50,
};

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${Math.round(n).toLocaleString()}`;
}

interface SliderInputProps {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
  tone?: "cyan" | "amber" | "violet" | "neutral";
  showNumberInput?: boolean;
  showSlider?: boolean;
}

function SliderInput({
  label,
  hint,
  value,
  min,
  max,
  step,
  onChange,
  format,
  tone = "neutral",
  showNumberInput = false,
  showSlider = true,
}: SliderInputProps) {
  const pct = ((value - min) / (max - min)) * 100;
  const decimals = String(step).includes(".") ? String(step).split(".")[1].length : 0;

  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  const toneClasses = {
    cyan: "border-cyan/25 bg-cyan/5",
    amber: "border-amber-300/25 bg-amber-300/5",
    violet: "border-violet-300/25 bg-violet-300/5",
    neutral: "border-border/35 bg-card/40",
  };

  return (
    <div className={`rounded-md border p-2 ${toneClasses[tone]}`}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[11px] font-light leading-tight text-muted-foreground">
          {label}
          {hint && (
            <span className="ml-1 text-[10px] text-muted-foreground/40">
              {hint}
            </span>
          )}
        </span>
        <div className="flex items-center gap-1.5">
          {showNumberInput && (
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={Number(value.toFixed(decimals))}
              onChange={(e) => {
                const parsed = Number(e.target.value);
                if (!Number.isNaN(parsed)) onChange(clamp(parsed));
              }}
              className="no-number-spinner w-20 rounded border border-border/50 bg-secondary/40 px-1.5 py-0.5 text-right font-mono text-[11px] text-foreground outline-none transition-colors focus:border-cyan/50"
            />
          )}
          {!showNumberInput && (
            <span className="shrink-0 rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-[11px] font-medium text-foreground/80">
              {format ? format(value) : String(value)}
            </span>
          )}
        </div>
      </div>
      {showSlider && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roi-slider mt-1.5 w-full"
          style={{
            background: `linear-gradient(to right, hsl(180 100% 65%) 0%, hsl(180 100% 65%) ${pct}%, hsl(192 20% 15%) ${pct}%, hsl(192 20% 15%) 100%)`,
          }}
        />
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  const toneMap: Record<string, string> = {
    "Platform Pricing": "text-cyan-200",
    "Team & Campaign Inputs": "text-amber-200",
    "Assumption Metrics": "text-violet-200",
    "Advanced Assumptions": "text-foreground/80",
  };

  return (
    <div className="col-span-1 pt-1 text-[10px] font-medium uppercase tracking-widest first:pt-0 sm:col-span-2">
      <span className={`${toneMap[children] ?? "text-cyan/70"}`}>{children}</span>
    </div>
  );
}

function BreakdownRow({
  label,
  value,
  widthPct,
  accent = false,
}: {
  label: string;
  value: string;
  widthPct: number;
  accent?: boolean;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-light text-muted-foreground">{label}</span>
        <span className={`font-mono text-[12px] ${accent ? "text-cyan" : "text-foreground/90"}`}>
          {value}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded bg-foreground/10">
        <div
          className={`h-full rounded ${accent ? "bg-cyan/70" : "bg-foreground/30"}`}
          style={{ width: `${Math.max(8, widthPct)}%` }}
        />
      </div>
    </div>
  );
}

export function Slide6ROI() {
  const [setupCost, setSetupCost] = useState(DEFAULTS.setupCost);
  const [monthlyCost, setMonthlyCost] = useState(DEFAULTS.monthlyCost);
  const [reps, setReps] = useState(DEFAULTS.reps);
  const [proposalsPerRep, setProposalsPerRep] = useState(
    DEFAULTS.proposalsPerRep
  );
  const [hoursPerProposal, setHoursPerProposal] = useState(
    DEFAULTS.hoursPerProposal
  );
  const [hourlyCost, setHourlyCost] = useState(DEFAULTS.hourlyCost);
  const [campaignValue, setCampaignValue] = useState(DEFAULTS.campaignValue);
  const [campaignMargin, setCampaignMargin] = useState(
    DEFAULTS.campaignMargin
  );
  const [rampDays, setRampDays] = useState(DEFAULTS.rampDaysReduction);
  const [incrementalDeals, setIncrementalDeals] = useState(
    DEFAULTS.incrementalDeals
  );
  const [educationHours, setEducationHours] = useState(
    DEFAULTS.educationHours
  );
  const [emailHours, setEmailHours] = useState(DEFAULTS.emailHours);
  const [timeReductionPct, setTimeReductionPct] = useState(
    DEFAULTS.timeReductionPct
  );
  const [educationReductionPct, setEducationReductionPct] = useState(
    DEFAULTS.educationReductionPct
  );
  const [communicationReductionPct, setCommunicationReductionPct] = useState(
    DEFAULTS.communicationReductionPct
  );
  const [showAdvanced, setShowAdvanced] = useState(false);

  // --- calculations ---
  const totalProposals = reps * proposalsPerRep;
  const hoursSavedPerProposal = hoursPerProposal * (timeReductionPct / 100);
  const hoursSavedPerMonth = totalProposals * hoursSavedPerProposal;
  const monthlyTimeSavings = hoursSavedPerMonth * hourlyCost;
  const annualTimeSavings = monthlyTimeSavings * 12;

  const eduHoursSaved = educationHours * (educationReductionPct / 100);
  const eduMonthlySavings = eduHoursSaved * hourlyCost;
  const eduAnnualSavings = eduMonthlySavings * 12;

  const commHoursSaved = emailHours * (communicationReductionPct / 100);
  const commMonthlySavings = commHoursSaved * hourlyCost;
  const commAnnualSavings = commMonthlySavings * 12;

  const avgMargin = campaignValue * (campaignMargin / 100);
  const revenueImpact = incrementalDeals * avgMargin;

  const rampSavingsPerHire = Math.round(
    hourlyCost * 8 * rampDays * (2 / 3)
  );

  const websiteSavings = 0;

  const totalAnnualValue =
    annualTimeSavings +
    eduAnnualSavings +
    commAnnualSavings +
    revenueImpact +
    websiteSavings;

  const totalYear1Investment = setupCost + monthlyCost * 12;
  const netBenefit = totalAnnualValue - totalYear1Investment;
  const roi =
    totalYear1Investment > 0
      ? Math.round((netBenefit / totalYear1Investment) * 100)
      : 0;
  const breakEvenMonths =
    totalYear1Investment > 0 && totalAnnualValue > 0
      ? +(totalYear1Investment / (totalAnnualValue / 12)).toFixed(1)
      : 0;

  const valueComponents = [
    { label: "Time savings", value: annualTimeSavings, accent: true },
    { label: "Education savings", value: eduAnnualSavings, accent: false },
    { label: "Communication savings", value: commAnnualSavings, accent: false },
    { label: "Revenue impact", value: revenueImpact, accent: true },
    { label: "Website replacement", value: websiteSavings, accent: false },
  ].filter((item) => item.value > 0);

  const maxComponentValue = Math.max(
    1,
    ...valueComponents.map((item) => item.value)
  );

  const stopWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
  }, []);

  const stopTouch = useCallback((e: React.TouchEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.div
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 h-[100dvh] w-full overflow-hidden"
    >
      <div
        className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-24 pt-20 sm:px-7 sm:pb-24 sm:pt-16 md:px-10 md:pt-12 lg:px-12"
        onWheel={stopWheel}
        onTouchStart={stopTouch}
        onTouchMove={stopTouch}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="shrink-0 text-center"
        >
          <span className="inline-block rounded-full border border-cyan/35 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-100">
            ROI Calculator
          </span>
          <h2
            className="mt-2 font-light leading-[1.25] tracking-tight text-foreground"
            style={{
              fontSize: "clamp(1.75rem, 3.1vw, 2.2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            What this can be worth for your business
          </h2>
          <p className="mt-1 text-[12px] font-light text-muted-foreground">
            Adjust the assumptions to reflect your team and see the potential first-year impact.
          </p>
        </motion.div>

        <div className="mt-3 grid h-[calc(100dvh-250px)] min-h-0 items-stretch gap-3 lg:h-[calc(100dvh-240px)] lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="h-full overflow-y-auto rounded-xl border border-border/40 bg-card/30 p-3 backdrop-blur-sm"
            style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(192 20% 24%) transparent" }}
          >
            <div className="mb-2 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowAdvanced((prev) => !prev)}
                className="rounded border border-border/50 bg-secondary/30 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-secondary/45"
              >
                {showAdvanced ? "Hide advanced" : "Show advanced"}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-x-2.5 gap-y-1.5 sm:grid-cols-2">
              <SectionLabel>Platform Pricing</SectionLabel>
              <SliderInput
                label="Setup Cost"
                value={setupCost}
                min={0}
                max={50000}
                step={500}
                onChange={setSetupCost}
                format={(v) => fmt(v)}
                tone="cyan"
                showNumberInput
                showSlider={false}
              />
              <SliderInput
                label="Monthly Cost"
                value={monthlyCost}
                min={0}
                max={5000}
                step={50}
                onChange={setMonthlyCost}
                format={(v) => fmt(v)}
                tone="cyan"
                showNumberInput
                showSlider={false}
              />

              <SectionLabel>Team & Campaign Inputs</SectionLabel>
              <SliderInput
                label="Sales Reps"
                value={reps}
                min={1}
                max={20}
                step={1}
                onChange={setReps}
                tone="amber"
                showSlider
              />
              <SliderInput
                label="Proposals / Rep / Month"
                value={proposalsPerRep}
                min={1}
                max={30}
                step={1}
                onChange={setProposalsPerRep}
                tone="amber"
                showSlider
              />
              <SliderInput
                label="Hours per Proposal"
                hint="(typical 1.5-3h)"
                value={hoursPerProposal}
                min={0.5}
                max={5}
                step={0.5}
                onChange={setHoursPerProposal}
                format={(v) => `${v}h`}
                tone="amber"
                showSlider
              />
              <SliderInput
                label="Blended Hourly Cost"
                value={hourlyCost}
                min={25}
                max={200}
                step={5}
                onChange={setHourlyCost}
                format={(v) => `$${v}`}
                tone="amber"
                showSlider
              />
              <SliderInput
                label="Avg Campaign Value"
                value={campaignValue}
                min={5000}
                max={100000}
                step={1000}
                onChange={setCampaignValue}
                format={(v) => `$${(v / 1000).toFixed(0)}K`}
                tone="amber"
                showSlider
              />
              <SliderInput
                label="Campaign Margin"
                hint="(typical 20-40%)"
                value={campaignMargin}
                min={10}
                max={50}
                step={1}
                onChange={setCampaignMargin}
                format={(v) => `${v}%`}
                tone="amber"
                showSlider
              />
              <SectionLabel>Assumption Metrics</SectionLabel>
              <SliderInput
                label="Proposal Time Reduction"
                value={timeReductionPct}
                min={0}
                max={100}
                step={1}
                onChange={setTimeReductionPct}
                format={(v) => `${v}%`}
                tone="violet"
                showSlider
              />
              <SliderInput
                label="Education Reduction"
                value={educationReductionPct}
                min={0}
                max={100}
                step={1}
                onChange={setEducationReductionPct}
                format={(v) => `${v}%`}
                tone="violet"
                showSlider
              />
              <SliderInput
                label="Communication Reduction"
                value={communicationReductionPct}
                min={0}
                max={100}
                step={1}
                onChange={setCommunicationReductionPct}
                format={(v) => `${v}%`}
                tone="violet"
                showSlider
              />
            </div>

            {showAdvanced && (
              <div className="mt-2 grid grid-cols-1 gap-x-2.5 gap-y-1.5 border-t border-border/35 pt-2 sm:grid-cols-2">
                <SectionLabel>Advanced Assumptions</SectionLabel>
                <SliderInput
                  label="Ramp Time Reduction"
                  hint="(days)"
                  value={rampDays}
                  min={0}
                  max={90}
                  step={5}
                  onChange={setRampDays}
                  format={(v) => `${v}d`}
                  tone="neutral"
                  showSlider
                />
                <SliderInput
                  label="Incremental Deals / Year"
                  hint="(total team)"
                  value={incrementalDeals}
                  min={0}
                  max={20}
                  step={1}
                  onChange={setIncrementalDeals}
                  tone="neutral"
                  showSlider
                />
                <SliderInput
                  label="Education Hours / Rep / Month"
                  value={educationHours}
                  min={0}
                  max={20}
                  step={1}
                  onChange={setEducationHours}
                  format={(v) => `${v}h`}
                  tone="neutral"
                  showSlider
                />
                <SliderInput
                  label="Email Hours / Rep / Month"
                  value={emailHours}
                  min={0}
                  max={20}
                  step={1}
                  onChange={setEmailHours}
                  format={(v) => `${v}h`}
                  tone="neutral"
                  showSlider
                />
              </div>
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex h-full min-h-0 flex-col gap-2.5 overflow-y-auto rounded-xl border border-border/40 bg-card/30 p-3 backdrop-blur-sm"
            style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(192 20% 24%) transparent" }}
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-lg border border-cyan/30 bg-cyan/5 px-3 py-2 sm:col-span-2">
                <p className="text-[11px] text-muted-foreground">First Year Net Benefit</p>
                <p className="font-mono text-xl text-cyan">{fmt(netBenefit)}</p>
              </div>
              <div className="rounded-lg border border-border/40 bg-card/45 px-2 py-2 text-center">
                <p className="text-[10px] text-muted-foreground">Annual Value</p>
                <p className="font-mono text-[15px] text-foreground/90">{fmt(totalAnnualValue)}</p>
              </div>
            </div>

            {totalYear1Investment > 0 && (
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-border/50 bg-card/40 px-2.5 py-2 text-center backdrop-blur-sm">
                  <div className="font-mono text-base font-medium text-cyan sm:text-lg">
                    {roi}%
                  </div>
                  <div className="mt-0.5 text-[10px] font-light text-muted-foreground sm:text-[11px]">
                    First Year ROI
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/40 px-2.5 py-2 text-center backdrop-blur-sm">
                  <div className="font-mono text-base font-medium text-cyan sm:text-lg">
                    {breakEvenMonths} mo
                  </div>
                  <div className="mt-0.5 text-[10px] font-light text-muted-foreground sm:text-[11px]">
                    Break-even Period
                  </div>
                </div>
              </div>
            )}

            <div className="rounded-lg border border-border/35 bg-card/25 px-3 py-2">
              <p className="mb-2 text-[11px] uppercase tracking-wide text-cyan/80">
                Value Breakdown
              </p>
              <div className="space-y-1.5">
                {valueComponents.map((item) => (
                  <BreakdownRow
                    key={item.label}
                    label={item.label}
                    value={`${fmt(item.value)}/yr`}
                    widthPct={(item.value / maxComponentValue) * 100}
                    accent={item.accent}
                  />
                ))}

                <BreakdownRow
                  label="Hours saved per month"
                  value={`${Math.round(hoursSavedPerMonth)}h`}
                  widthPct={Math.min(100, (hoursSavedPerMonth / 240) * 100)}
                />

                <BreakdownRow
                  label="Ramp savings per hire"
                  value={fmt(rampSavingsPerHire)}
                  widthPct={Math.min(100, (rampSavingsPerHire / 25000) * 100)}
                />

                {totalYear1Investment > 0 && (
                  <BreakdownRow
                    label="Year 1 investment"
                    value={`-${fmt(totalYear1Investment)}`}
                    widthPct={(totalYear1Investment / Math.max(totalAnnualValue, 1)) * 100}
                  />
                )}
              </div>
            </div>

            <p className="mt-auto text-center text-[10px] font-light text-muted-foreground/45">
              {timeReductionPct}% proposal time reduction &middot; {educationReductionPct}%
              {" "}education reduction &middot; {communicationReductionPct}% communication
              {" "}reduction
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
