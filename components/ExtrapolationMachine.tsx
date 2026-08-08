"use client";

import { useMemo, useState } from "react";
import styles from "./ExtrapolationMachine.module.css";
import {
  CDC_2013_CAUSES,
  PRESETS,
  PUBLISHED_DEATHS,
  STUDIES,
  US_ADMISSIONS_2013,
  type Preset,
  type WeightMode,
  extrapolate,
  ordinal,
  pooledRate,
  rankAmongCauses,
} from "@/lib/makary-data";

const SERIES_VAR = ["var(--series-1)", "var(--series-2)", "var(--series-3)", "var(--series-4)"];

function seriesColor(slot: number) {
  return SERIES_VAR[slot - 1];
}

const nf = new Intl.NumberFormat("en-US");

const initialRates = Object.fromEntries(
  STUDIES.map((s) => [s.id, s.publishedRate]),
) as Record<string, number>;

const initialIncluded = Object.fromEntries(
  STUDIES.map((s) => [s.id, true]),
) as Record<string, boolean>;

export default function ExtrapolationMachine() {
  const [rates, setRates] = useState<Record<string, number>>(initialRates);
  const [included, setIncluded] = useState<Record<string, boolean>>(initialIncluded);
  const [weightMode, setWeightMode] = useState<WeightMode>("unweighted");
  const [denominator, setDenominator] = useState(US_ADMISSIONS_2013);
  const [showTable, setShowTable] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>("published");

  function applyPreset(preset: Preset) {
    const excluded = preset.excluded ?? [];
    setIncluded(
      Object.fromEntries(STUDIES.map((s) => [s.id, !excluded.includes(s.id)])) as Record<
        string,
        boolean
      >,
    );
    setRates(
      Object.fromEntries(
        STUDIES.map((s) => [s.id, Number((s.publishedRate * (preset.rateScale ?? 1)).toFixed(3))]),
      ) as Record<string, number>,
    );
    setWeightMode(preset.weightMode ?? "unweighted");
    setDenominator(US_ADMISSIONS_2013);
    setActivePreset(preset.id);
  }

  const activeStudies = useMemo(() => STUDIES.filter((s) => included[s.id]), [included]);

  const rate = useMemo(
    () => pooledRate(activeStudies, rates, weightMode),
    [activeStudies, rates, weightMode],
  );

  const deaths = extrapolate(rate, denominator);
  const rank = rankAmongCauses(deaths);
  const isPublished =
    weightMode === "unweighted" &&
    denominator === US_ADMISSIONS_2013 &&
    STUDIES.every((s) => included[s.id] && rates[s.id] === s.publishedRate);

  // Share of the pooled estimate each study is responsible for, and share of the
  // underlying admissions it contributes. The gap between the two is the point.
  const weights = useMemo(() => {
    const totalAdmissions = activeStudies.reduce((acc, s) => acc + s.admissions, 0);
    return STUDIES.map((s) => {
      if (!included[s.id]) return { study: s, weight: 0, sampleShare: 0 };
      return {
        study: s,
        weight: weightMode === "unweighted" ? 1 / activeStudies.length : s.admissions / totalAdmissions,
        sampleShare: totalAdmissions === 0 ? 0 : s.admissions / totalAdmissions,
      };
    });
  }, [activeStudies, included, weightMode]);

  const totalAdmissions = activeStudies.reduce((acc, s) => acc + s.admissions, 0);
  const totalDeaths = activeStudies.reduce((acc, s) => acc + s.deaths, 0);

  function reset() {
    applyPreset(PRESETS[0]);
  }

  const delta = deaths - PUBLISHED_DEATHS;

  return (
    <figure className={styles.root}>
      <p className={styles.eyebrow}>The extrapolation machine</p>

      {/* ---- hero figure ---- */}
      <div className={styles.hero}>
        <div className={styles.heroValue}>{nf.format(deaths)}</div>
        <div className={styles.heroUnit}>deaths per year from medical error</div>
        <div className={styles.heroRank}>
          {rank <= CDC_2013_CAUSES.length ? (
            <>
              Would rank <span className={styles.rankStrong}>{ordinal(rank)}</span> on the CDC&rsquo;s
              2013 list, above {CDC_2013_CAUSES[rank - 1].name.toLowerCase()}
            </>
          ) : (
            <>Would not reach the CDC&rsquo;s top {CDC_2013_CAUSES.length}</>
          )}
        </div>
        <div className={styles.heroDelta}>
          {isPublished
            ? "As published — Makary & Daniel, BMJ 2016"
            : `${delta >= 0 ? "+" : "−"}${nf.format(Math.abs(delta))} vs the published 251,454`}
        </div>
      </div>

      {/* ---- presets: the argument, as a sequence of states ---- */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Try changing one thing</h3>
        <div className={styles.presetRow}>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`${styles.preset} ${activePreset === p.id ? styles.presetActive : ""}`}
              aria-pressed={activePreset === p.id}
              onClick={() => applyPreset(p)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <p className={styles.lesson}>
          {activePreset
            ? PRESETS.find((p) => p.id === activePreset)?.lesson
            : "Custom settings. Any of the presets above will reset the inputs."}
        </p>
      </div>

      {/* ---- the four inputs ---- */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>The four studies</h3>
        <p className={styles.sectionNote}>
          Each contributes one number: the share of admissions with a preventable lethal adverse
          event. Drag any of them.
        </p>

        {STUDIES.map((s) => {
          const on = included[s.id];
          const changed = rates[s.id] !== s.publishedRate;
          return (
            <div key={s.id} className={`${styles.study} ${on ? "" : styles.disabled}`}>
              <span className={styles.swatch} style={{ background: seriesColor(s.slot) }} aria-hidden />
              <div>
                <div className={styles.studyHead}>
                  <span className={styles.studyName}>{s.name}</span>
                  <span className={styles.studyMeta}>
                    {s.dates} · {nf.format(s.admissions)} admissions · {nf.format(s.deaths)} deaths
                    {s.isReport && <> · <span className={styles.tag}>not peer reviewed</span></>}
                  </span>
                </div>

                <div className={styles.sliderRow}>
                  <input
                    className={styles.slider}
                    type="range"
                    min={0}
                    max={2}
                    step={0.01}
                    value={rates[s.id]}
                    disabled={!on}
                    aria-label={`${s.name}: percent of admissions with a preventable lethal adverse event`}
                    onChange={(e) => {
                      setRates((prev) => ({ ...prev, [s.id]: Number(e.target.value) }));
                      setActivePreset(null);
                    }}
                    style={
                      {
                        "--thumb": seriesColor(s.slot),
                        "--fill": `${(rates[s.id] / 2) * 100}%`,
                      } as React.CSSProperties
                    }
                  />
                  <span className={`${styles.rateValue} ${changed ? styles.rateChanged : ""}`}>
                    {rates[s.id].toFixed(2)}%
                  </span>
                </div>

                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={(e) => {
                      setIncluded((prev) => ({ ...prev, [s.id]: e.target.checked }));
                      setActivePreset(null);
                    }}
                  />
                  Include in the average
                </label>

                {s.note && <p className={styles.studyNote}>{s.note}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {/* ---- weighting ---- */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>How the four are combined</h3>
        <p className={styles.sectionNote}>
          The paper takes a plain average — every study counts the same, whatever its size.
        </p>

        <div className={styles.radioRow}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="weight"
              checked={weightMode === "unweighted"}
              onChange={() => {
                setWeightMode("unweighted");
                setActivePreset(null);
              }}
            />
            Unweighted mean (as published)
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="weight"
              checked={weightMode === "bySample"}
              onChange={() => {
                setWeightMode("bySample");
                setActivePreset(null);
              }}
            />
            Weighted by sample size
          </label>
        </div>

        <div className={styles.barBlock}>
          <div className={styles.barLabel}>
            <span>Weight in the pooled estimate</span>
          </div>
          <div className={styles.barTrack}>
            {weights
              .filter((w) => w.weight > 0)
              .map(({ study, weight }) => (
                <div
                  key={study.id}
                  className={styles.segment}
                  style={{
                    flexGrow: weight,
                    flexBasis: 0,
                    background: seriesColor(study.slot),
                    color: study.slot === 1 ? "#ffffff" : "#0b0b0b",
                  }}
                  title={`${study.name}: ${(weight * 100).toFixed(1)}% of the estimate`}
                >
                  {weight > 0.08 ? `${Math.round(weight * 100)}%` : ""}
                </div>
              ))}
          </div>
        </div>

        <div className={styles.barBlock}>
          <div className={styles.barLabel}>
            <span>Share of the underlying admissions</span>
            <span>{nf.format(totalAdmissions)} total</span>
          </div>
          <div className={styles.barTrack}>
            {weights
              .filter((w) => w.sampleShare > 0)
              .map(({ study, sampleShare }) => (
                <div
                  key={study.id}
                  className={styles.segment}
                  style={{
                    flexGrow: sampleShare,
                    flexBasis: 0,
                    background: seriesColor(study.slot),
                    color: study.slot === 1 ? "#ffffff" : "#0b0b0b",
                  }}
                  title={`${study.name}: ${nf.format(study.admissions)} admissions, ${(
                    sampleShare * 100
                  ).toFixed(2)}%`}
                >
                  {sampleShare > 0.08 ? `${(sampleShare * 100).toFixed(1)}%` : ""}
                </div>
              ))}
          </div>
        </div>

        <div className={styles.legend}>
          {STUDIES.map((s) => (
            <span key={s.id} className={styles.legendItem}>
              <span
                className={styles.legendSwatch}
                style={{ background: seriesColor(s.slot) }}
                aria-hidden
              />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* ---- denominator ---- */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Multiplied by every US hospital admission</h3>
        <p className={styles.sectionNote}>
          The pooled rate is applied to all {nf.format(US_ADMISSIONS_2013)} admissions in 2013 —
          including the populations none of the four studies looked at.
        </p>
        <div className={styles.denomRow}>
          <input
            className={styles.slider}
            type="range"
            min={5_000_000}
            max={US_ADMISSIONS_2013}
            step={100_000}
            value={denominator}
            aria-label="US hospital admissions used as the denominator"
            onChange={(e) => {
              setDenominator(Number(e.target.value));
              setActivePreset(null);
            }}
            style={
              {
                "--thumb": "var(--text-secondary)",
                "--fill": `${
                  ((denominator - 5_000_000) / (US_ADMISSIONS_2013 - 5_000_000)) * 100
                }%`,
              } as React.CSSProperties
            }
          />
          <span className={styles.denomValue}>{nf.format(denominator)}</span>
        </div>
      </div>

      {/* ---- footer ---- */}
      <div className={styles.footer}>
        <button className={styles.button} onClick={reset} type="button">
          Reset to published
        </button>
        <button
          className={styles.button}
          onClick={() => setShowTable((v) => !v)}
          type="button"
          aria-expanded={showTable}
        >
          {showTable ? "Hide table" : "Show table"}
        </button>
        <span className={styles.spacer} />
        <span className={styles.formula}>
          {rate.toFixed(2)}% × {nf.format(denominator)} = {nf.format(deaths)}
        </span>
      </div>

      {showTable && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className="sr-only">
              Source data and computed weights for the pooled estimate
            </caption>
            <thead>
              <tr>
                <th scope="col">Study</th>
                <th scope="col">Admissions</th>
                <th scope="col">Deaths</th>
                <th scope="col">AE rate</th>
                <th scope="col">Preventable</th>
                <th scope="col">Rate used</th>
                <th scope="col">Weight</th>
              </tr>
            </thead>
            <tbody>
              {STUDIES.map((s) => {
                const w = weights.find((x) => x.study.id === s.id)!;
                return (
                  <tr key={s.id} className={included[s.id] ? "" : styles.disabled}>
                    <td>{s.shortName}</td>
                    <td>{nf.format(s.admissions)}</td>
                    <td>{nf.format(s.deaths)}</td>
                    <td>{s.adverseEventRate.toFixed(1)}%</td>
                    <td>{s.preventablePct === null ? "not reported" : `${s.preventablePct}%`}</td>
                    <td>{rates[s.id].toFixed(2)}%</td>
                    <td>{included[s.id] ? `${(w.weight * 100).toFixed(1)}%` : "excluded"}</td>
                  </tr>
                );
              })}
              <tr className={styles.tableTotal}>
                <td>Pooled</td>
                <td>{nf.format(totalAdmissions)}</td>
                <td>{nf.format(totalDeaths)}</td>
                <td>—</td>
                <td>—</td>
                <td>{rate.toFixed(2)}%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <figcaption className={styles.studyNote}>
        Source: Makary MA, Daniel M. Medical error—the third leading cause of death in the US.{" "}
        <em>BMJ</em> 2016;353:i2139, Table 1. Rates are the paper&rsquo;s &ldquo;% of admissions
        with a preventable lethal adverse event.&rdquo; CDC ranking figures are provisional and
        pending verification against NCHS <em>Deaths: Final Data for 2013</em>.
      </figcaption>
    </figure>
  );
}
