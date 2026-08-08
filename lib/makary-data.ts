/**
 * Source data for the extrapolation widget.
 *
 * Every figure below is transcribed from Table 1 of:
 *   Makary MA, Daniel M. "Medical error—the third leading cause of death in
 *   the US." BMJ 2016;353:i2139. Published 3 May 2016.
 *
 * Read from the primary PDF on 2026-08-08. See notes/fact-sheet.md.
 *
 * The paper's arithmetic reproduces exactly:
 *   (0.71 + 0.62 + 1.13 + 0.38) / 4 = 0.71
 *   0.0071 x 35,416,020 = 251,453.7 -> 251,454
 */

export interface Study {
  id: string;
  name: string;
  /** Compact label for the table view, which is width-constrained. */
  shortName: string;
  /** Categorical palette slot, 1-indexed. Fixed per study — never reassigned. */
  slot: 1 | 2 | 3 | 4;
  dates: string;
  population: string;
  admissions: number;
  /** Adverse event rate, % of admissions. */
  adverseEventRate: number;
  /** Lethal adverse event rate, % of admissions. */
  lethalRate: number;
  /** % of lethal events deemed preventable. null where the paper reports NR. */
  preventablePct: number | null;
  /** Deaths as reported in the table's "No of deaths" column. */
  deaths: number;
  /** % of admissions with a preventable lethal adverse event — the pooled input. */
  publishedRate: number;
  /** The paper's own extrapolation for this row. */
  publishedExtrapolation: number;
  /** True where the source is a report rather than a peer-reviewed study. */
  isReport: boolean;
  note?: string;
}

export const STUDIES: Study[] = [
  {
    id: "healthgrades",
    name: "HealthGrades",
    shortName: "HealthGrades",
    slot: 1,
    dates: "2000–02",
    population: "Medicare patients",
    admissions: 37_000_000,
    adverseEventRate: 3.1,
    lethalRate: 0.7,
    preventablePct: null,
    deaths: 389_576,
    publishedRate: 0.71,
    publishedExtrapolation: 251_454,
    isReport: true,
    note:
      "A commercial report, not a peer-reviewed study. All lethal adverse events were " +
      "considered preventable. This row does not reconcile internally: 389,576 of " +
      "37,000,000 is 1.05%, but the row reports 0.71%, and the paper's body text says " +
      "HealthGrades found about 195,000 deaths a year. Unresolved.",
  },
  {
    id: "oig",
    name: "HHS Office of Inspector General",
    shortName: "HHS OIG",
    slot: 2,
    dates: "2008",
    population: "Medicare patients",
    admissions: 838,
    adverseEventRate: 13.5,
    lethalRate: 1.4,
    preventablePct: 44,
    deaths: 12,
    publishedRate: 0.62,
    publishedExtrapolation: 219_579,
    isReport: true,
    note: "A government report, not a peer-reviewed study. 12 deaths among 838 admissions.",
  },
  {
    id: "classen",
    name: "Classen et al",
    shortName: "Classen et al",
    slot: 3,
    dates: "2004",
    population: "3 tertiary care hospitals",
    admissions: 795,
    adverseEventRate: 33.2,
    lethalRate: 1.1,
    preventablePct: 100,
    deaths: 9,
    publishedRate: 1.13,
    publishedExtrapolation: 400_201,
    isReport: false,
    note:
      "Every lethal adverse event was judged preventable — 100%. This row yields the " +
      "highest extrapolation of the four and carries a full quarter of the weight.",
  },
  {
    id: "landrigan",
    name: "Landrigan et al",
    shortName: "Landrigan et al",
    slot: 4,
    dates: "2002–07",
    population: "10 hospitals in North Carolina",
    admissions: 2_341,
    adverseEventRate: 18.1,
    lethalRate: 0.6,
    preventablePct: 63,
    deaths: 14,
    publishedRate: 0.38,
    publishedExtrapolation: 134_581,
    isReport: false,
    note: "Published in NEJM. 14 deaths among 2,341 admissions.",
  },
];

/** Total US hospital admissions in 2013, per the American Hospital Association. */
export const US_ADMISSIONS_2013 = 35_416_020;

/** The paper's published point estimate. */
export const PUBLISHED_RATE = 0.71;
export const PUBLISHED_DEATHS = 251_454;

/**
 * CDC leading causes of death, 2013 — the list Makary & Daniel ranked against.
 *
 * TODO [VERIFY]: transcribed from memory of NCHS "Deaths: Final Data for 2013",
 * which is reference 2 in the paper. Confirm against the NCHS report before
 * this widget is published. Tracked in notes/fact-sheet.md.
 */
export const CDC_2013_CAUSES: { name: string; deaths: number }[] = [
  { name: "Heart disease", deaths: 611_105 },
  { name: "Cancer", deaths: 584_881 },
  { name: "Chronic lower respiratory disease", deaths: 149_205 },
  { name: "Accidents", deaths: 130_557 },
  { name: "Stroke", deaths: 128_978 },
  { name: "Alzheimer's disease", deaths: 84_767 },
  { name: "Diabetes", deaths: 75_578 },
  { name: "Influenza and pneumonia", deaths: 56_979 },
];

/** The three chart-review studies supply 35 deaths across 3,974 admissions. */
export const CHART_REVIEW_IDS = ["oig", "classen", "landrigan"];

export type WeightMode = "unweighted" | "bySample";

export function pooledRate(studies: Study[], rates: Record<string, number>, mode: WeightMode) {
  if (studies.length === 0) return 0;
  if (mode === "unweighted") {
    return studies.reduce((acc, s) => acc + rates[s.id], 0) / studies.length;
  }
  const totalAdmissions = studies.reduce((acc, s) => acc + s.admissions, 0);
  if (totalAdmissions === 0) return 0;
  return studies.reduce((acc, s) => acc + rates[s.id] * s.admissions, 0) / totalAdmissions;
}

export function extrapolate(rate: number, denominator: number) {
  return Math.round((rate / 100) * denominator);
}

/** Where a figure would sit in the CDC list. Returns a 1-indexed rank. */
export function rankAmongCauses(deaths: number) {
  let rank = 1;
  for (const cause of CDC_2013_CAUSES) {
    if (deaths >= cause.deaths) break;
    rank += 1;
  }
  return rank;
}

/**
 * Preset states, each chosen to isolate one property of the estimate.
 *
 * The sequence is the argument: the first three are defensible analytic choices
 * that barely move the result, and the fourth — a judgment call, not a data
 * choice — halves it. The estimate is driven by preventability ratings, not by
 * evidence.
 */
export interface Preset {
  id: string;
  label: string;
  /** What the reader should take from the resulting number. */
  lesson: string;
  excluded?: string[];
  rateScale?: number;
  weightMode?: WeightMode;
}

export const PRESETS: Preset[] = [
  {
    id: "published",
    label: "As published",
    lesson:
      "The paper's own figure. A plain average of four percentages, times every US hospital admission in 2013.",
  },
  {
    id: "drop-healthgrades",
    label: "Drop the 37-million report",
    excluded: ["healthgrades"],
    lesson:
      "Removing the commercial report — 99.99% of all the admissions involved — does not change the answer by a single death. The remaining three average to exactly 0.71% as well.",
  },
  {
    id: "peer-reviewed",
    label: "Peer-reviewed studies only",
    excluded: ["healthgrades", "oig"],
    lesson:
      "Keep only the two studies that went through peer review and the estimate gets larger, not smaller. Rigour was not what was holding the number down.",
  },
  {
    id: "half-preventable",
    label: "Halve every preventability call",
    rateScale: 0.5,
    lesson:
      "The one input that actually moves it. Nothing about the data changed — only how confidently a reviewer labelled each death preventable. Classen's row rated 100% of lethal adverse events preventable.",
  },
];

export function ordinal(n: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
