/**
 * Pure ROI model shared by the calculator slide.
 */

export interface RoiModelInputs {
  setupCost: number;
  monthlyCost: number;
  reps: number;
  proposalsPerRep: number;
  hoursPerProposal: number;
  hourlyCost: number;
  campaignValue: number;
  campaignMargin: number;
  rampDaysReduction: number;
  incrementalDeals: number;
  educationHours: number;
  emailHours: number;
  timeReductionPct: number;
  educationReductionPct: number;
  communicationReductionPct: number;
}

export interface RoiModelResult {
  totalProposals: number;
  hoursSavedPerProposal: number;
  hoursSavedPerMonth: number;
  annualTimeSavings: number;
  eduAnnualSavings: number;
  commAnnualSavings: number;
  revenueImpact: number;
  rampSavingsPerHire: number;
  websiteSavings: number;
  totalAnnualValue: number;
  totalYear1Investment: number;
  netBenefit: number;
  roi: number;
  breakEvenMonths: number;
  valueComponents: Array<{ label: string; value: number; accent: boolean }>;
  maxComponentValue: number;
}

export const ROI_MODEL_DEFAULTS: RoiModelInputs = {
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

export function computeRoiModel(inputs: RoiModelInputs): RoiModelResult {
  const {
    setupCost,
    monthlyCost,
    reps,
    proposalsPerRep,
    hoursPerProposal,
    hourlyCost,
    campaignValue,
    campaignMargin,
    rampDaysReduction,
    incrementalDeals,
    educationHours,
    emailHours,
    timeReductionPct,
    educationReductionPct,
    communicationReductionPct,
  } = inputs;

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

  const rampSavingsPerHire = Math.round(hourlyCost * 8 * rampDaysReduction * (2 / 3));

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

  const maxComponentValue = Math.max(1, ...valueComponents.map((item) => item.value));

  return {
    totalProposals,
    hoursSavedPerProposal,
    hoursSavedPerMonth,
    annualTimeSavings,
    eduAnnualSavings,
    commAnnualSavings,
    revenueImpact,
    rampSavingsPerHire,
    websiteSavings,
    totalAnnualValue,
    totalYear1Investment,
    netBenefit,
    roi,
    breakEvenMonths,
    valueComponents,
    maxComponentValue,
  };
}
