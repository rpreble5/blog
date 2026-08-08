# Fact sheet — medical error death estimates

**Verification pass 1 — 2026-08-04**

## ⚠ Confidence caveat, read this first

The session's egress policy blocked direct access to **govinfo.gov, jamanetwork.com,
ncbi.nlm.nih.gov, journals.lww.com, sciencebasedmedicine.org, apsf.org, and
wikipedia.org**. Everything below comes from **search-result summaries and
secondary sources, not from reading the primary documents.**

Confidence is marked per item:

- **[A]** — direct quotation or figure appeared in a source summary; high confidence
- **[B]** — consistently reported across multiple independent secondary sources
- **[C]** — single secondary source, or a discrepancy exists; must be resolved

**No item below should reach the published post without someone opening the
primary document.** The post's entire argument is that people repeat numbers they
haven't traced. We do not get to do that.

---

## The escalation ("the ratchet")

| Year | Source | Figure | Conf |
|---|---|---|---|
| 1994 | Leape, *JAMA* 272:1851–1857 | ~180,000/yr | **[A]** |
| 1999 | IOM, *To Err Is Human* | 44,000–98,000/yr | **[B]** |
| 2004 | HealthGrades | ~195,000/yr | **[C]** not yet verified |
| 2013 | James, *J Patient Saf* 9:122–128 | 210,000–400,000/yr | **[C]** see discrepancy |
| 2014 | US Senate subcommittee hearing title | >1,000/day (~365,000/yr) | **[A]** |
| 2016 | Makary & Daniel, *BMJ* 353:i2139 | 251,454/yr | **[A]** |

Counter-estimates, same period:

| Year | Source | Figure | Conf |
|---|---|---|---|
| 2001 | Hayward & Hofer, *JAMA* 286(4):415–420 | 0.5% of deaths would have lived ≥3mo in good cognitive health | **[A]** |
| 2019 | Sunshine et al., *JAMA Netw Open* | 123,603 deaths **cumulative 1990–2016** (≈4,600/yr) | **[A]** |
| 2020 | Rodwin et al., *J Gen Intern Med* | 3.1% of hospital deaths preventable → **~22,000/yr** | **[A]** |

These are not converging. The headline figures wander across a **tenfold range**
while the critical literature clusters an order of magnitude lower. A field
actually measuring something gets more precise. This got louder.

---

## 🔑 Finding that changes the story

**The "third leading cause of death" framing predates the paper that supposedly
established it.**

At the **17 July 2014** Senate hearing — two years before Makary & Daniel — the
subcommittee chairman **opened by stating that preventable medical error in
hospitals is the third leading cause of death in the United States**, citing "as
many as 440,000" deaths a year. **[A]**

This inverts the causal story we had. The 2016 *BMJ* paper did not introduce the
claim into policy discourse. It **arrived after** a Senate subcommittee had
already asserted it as settled, and supplied a citable number for a framing that
was in circulation.

That is a materially better Act III thesis: the paper didn't create the belief,
it **ratified** one that institutions already held and wanted evidence for.

---

## Item detail

### Leape 1994 — origin of the aviation analogy **[A]**

*JAMA* 1994;272:1851–1857, "Error in Medicine." Verbatim:

> "180,000 people die each year partly as a result of iatrogenic injury, the
> equivalent of three jumbo-jet crashes every 2 days."

Extrapolated from the Harvard Medical Practice Study's New York data.

**Note the hedge — "partly as a result of."** That qualifier is doing enormous
work, and it disappears in every downstream retelling. Worth its own callout box.

Three jumbo jets / 2 days = 1.5 aircraft/day; 180,000/365 = 493 deaths/day →
~330 per aircraft. Internally consistent.

### Senate hearing, 17 July 2014 **[A]**

- Senate HELP Committee, Subcommittee on Primary Health and Aging
- Chair: Sen. Bernie Sanders (I-VT)
- Title: *"More Than 1,000 Preventable Deaths a Day Is Too Many: The Need to
  Improve Patient Safety"*
- Witnesses included Peter Pronovost, Ashish Jha, Tejal Gandhi, John James
- Transcript: `CHRG-113shrg88894` on govinfo.gov — **blocked this session, must
  be retrieved and quoted directly**

Strongest single receipt for §2: a government body put the number in the title of
an official proceeding.

### Makary & Daniel 2016 — ✅ **VERIFIED FROM PRIMARY SOURCE**

*BMJ* 2016;353:i2139, published 3 May 2016. Read directly from the PDF, 2026-08-08.
All figures below are **[A-primary]** unless noted.

#### Table 1, reconstructed

| Study | Dates | Population | Admissions | AE rate % | Lethal AE rate % | % deemed preventable | Deaths | Preventable lethal AE % | Extrapolated |
|---|---|---|---|---|---|---|---|---|---|
| HealthGrades | 2000–02 | Medicare | 37,000,000 | 3.1 | 0.7\* | NR | 389,576 | **0.71** | 251,454 |
| HHS OIG | 2008 | Medicare | **838** | 13.5 | 1.4 | 44 | **12** | **0.62** | 219,579 |
| Classen et al | 2004 | 3 tertiary hospitals | **795** | 33.2 | 1.1 | **100** | **9** | **1.13** | 400,201 |
| Landrigan et al | 2002–07 | 10 NC hospitals | **2,341** | 18.1 | 0.6 | 63 | **14** | **0.38** | 134,581 |
| **Point estimate** | 2000–08 | — | — | — | — | — | — | **0.71** | **251,454** |

\* "All were considered preventable." † 2013 US admissions = **35,416,020** (AHA).

#### 🔴 The entire derivation, in two steps

**Step 1 — a simple unweighted arithmetic mean of four percentages:**

```
(0.71 + 0.62 + 1.13 + 0.38) / 4  =  2.84 / 4  =  0.71
```

**Step 2 — multiply by total US admissions:**

```
0.0071 × 35,416,020  =  251,453.7  →  251,454
```

Both reproduce **exactly**. That is the whole method.

#### Why this is worse than the critics said

1. **Unweighted.** A study of **795 admissions carries identical weight to one of
   37,000,000.** No sample-size weighting, no confidence interval, no
   heterogeneity test. This is the single cleanest kill in the entire post and it
   requires no statistical background to feel.
2. **The 35 deaths are confirmed.** The three chart-review studies contain
   **12 + 9 + 14 = 35 deaths across 838 + 795 + 2,341 = 3,974 admissions** — and
   they supply **three quarters of the weight** in the average.
3. **The adverse-event rates span more than tenfold** — 3.1%, 13.5%, 33.2%, 18.1%.
   Four studies that disagree by an order of magnitude on how often adverse events
   happen at all are not measuring the same construct. Pooling them is not
   defensible even before the weighting problem.
4. **Classen: 100% of lethal adverse events deemed preventable.** Every one. That
   single row produces the highest extrapolation (400,201) and gets a full quarter
   of the weight.

#### 🔑 The hedge that got stripped — a repeating pattern

The paper's own **Summary points** box reads:

> "**If medical error was a disease**, it would rank as the third leading cause of
> death in the US"

The conditional is *right there*, authored by Makary and Daniel. Medical error is
not a disease, and they knew it — that clause is the category error being
explicitly acknowledged. The world dropped the "if."

This is the **second confirmed instance of the same phenomenon**:

| Source | Original, hedged | What travelled |
|---|---|---|
| Leape 1994 | "die each year **partly as a result of** iatrogenic injury" | 180,000 killed by medical error |
| Makary 2016 | "**If medical error was a disease**, it would rank third" | Medical error is the third leading cause of death |

**Neither author overclaimed in the way they are accused of.** The claim was
inflated *in transmission*, by readers, press, and institutions. That is a far
more interesting and more defensible Act III than "two researchers were sloppy,"
and it's now evidenced twice from primary text.

#### Corrections to earlier assumptions

- **It WAS peer reviewed.** Provenance statement: *"Not commissioned; externally
  peer reviewed."* Our earlier note that it wasn't is wrong and must not survive
  into the post. It was an *Analysis* article — not primary research — but it went
  through external review.
- The authors **explicitly concede** the limitation: *"the assumptions made in
  extrapolating study data to the broader US population may limit the accuracy of
  our figure."* They also state they believe the figure **understates** the truth.
- Two of the four sources are a **commercial report (HealthGrades)** and a
  **government report (HHS OIG)** — not peer-reviewed studies. The critics'
  "never vetted through peer review" charge refers to these, and is fair.

#### ⚠ Unresolved internal inconsistency

The HealthGrades row does not reconcile with itself or with the paper's body text:

- Table: 389,576 deaths / 37,000,000 admissions = **1.05%**, but the row reports **0.71%**
- Body text: HealthGrades "estimated that 575 000 deaths were caused by medical
  error between 2000 and 2002, which is about **195 000 deaths a year**"
- Neither 575,000 nor 195,000/yr obviously produces 389,576 or 0.71%

**Needs the HealthGrades primary report to resolve.** If this is a genuine error in
the table, it affects the row supplying a quarter of the point estimate.

#### Other primary details

- CDC comparison used *Deaths: final data for 2013* (NCHS).
- Cites **Leape 1993** (*Qual Rev Bull* 19:144–9) arguing **78% rather than 51%**
  of 180,000 iatrogenic deaths were preventable → ~140,400.
- Makary is described as "developer of the operating room checklist, the precursor
  to the WHO surgery checklist." Competing interests: none declared.
- The article "arose from discussions about the paucity of funding available to
  support quality and safety research relative to other causes of death." **That is
  a stated motive for the comparison-to-CDC-rankings framing** — worth quoting.

Makary & Daniel also wrote to the CDC requesting that medical error be added to
cause-of-death rankings and that death certificates be changed. **No official
response; no changes made.** **[B]**

### Hayward & Hofer 2001 — the correction that existed 15 years early **[A]**

*JAMA* 2001;286(4):415–420, "Estimating Hospital Deaths Due to Medical Errors:
Preventability Is in the Eye of the Reviewer."

- 22.7% of deaths rated **at least possibly** preventable
- 6.0% rated **probably or definitely** preventable
- **Only 0.5% of patients who died would have lived ≥3 months in good cognitive
  health had care been optimal**

That 0.5% is the counterfactual argument, complete, in *JAMA*, **fifteen years
before Makary**. Act III is not "nobody checked." It is **people checked,
published in a top-five journal, and the number went up anyway.**

### Shojania & Dixon-Woods 2017 **[A]**

*BMJ Qual Saf* 2017;26(5):423–428. Critique: rates were combined without
following quantitative-synthesis guidelines and without statistically accounting
for extrapolation uncertainty; the source studies could not establish whether
detected adverse events actually contributed to death. Argues the inflated figure
**diverts attention from tractable harms** — pressure ulcers, medication safety.

### Rodwin et al. 2020 **[A]**

*J Gen Intern Med*. 16 studies included; 8 pooled covering **12,503 deaths**.
Found **3.1%** of hospital deaths preventable → **~22,000/yr** in the US. Senior
author Craig Gunderson (Yale). Followed by Gunderson 2022 in *J Hosp Med*,
"Overstating inpatient deaths due to medical error erodes trust in healthcare and
the patient safety movement."

### Sunshine et al. 2019 **[A]** — handle carefully

*JAMA Netw Open*, 18 Jan 2019. GBD secondary analysis. **123,603 deaths
cumulative 1990–2016** with adverse effects of medical treatment as *underlying*
cause; rate **fell 21.4%**, 1.46 → 1.15 per 100,000.

**Do not deploy this as a knockout.** It uses underlying-cause death-certificate
coding — precisely the undercounting mechanism Makary complains about. Citing it
as a rival estimate would be its own category error. Its honest use is the
*trend* (falling, not rising) and as an illustration that the two approaches
measure different things.

---

## Open discrepancies to resolve

1. **James 2013: 400,000 or 440,000?** Makary's own text cites James as
   **210,000–400,000** — so 400,000 is the paper's reading. But **440,000** is what
   circulated publicly and what the Senate chairman cited in 2014. If the number
   gained 40,000 in transit, **that is a third documented instance of the post's
   thesis.** Needs the James primary paper.
2. ~~**Makary's 35 deaths.**~~ ✅ **CONFIRMED from Table 1: 12 + 9 + 14 = 35 deaths
   across 3,974 admissions.**
3. **HealthGrades row inconsistency** (see above). Needs the 2004 HealthGrades
   report — the reference in Makary is a providersedge.com PDF.
4. **Earliest use of "third leading cause of death."** Confirmed at July 2014;
   unknown whether it predates that.
5. **Makary paper's Altmetric score / press-cycle extent.** Unverified.
5b. **CDC 2013 leading-cause figures.** The extrapolation widget ranks its live
   number against a list transcribed from memory of NCHS *Deaths: Final Data for
   2013* (Makary's reference 2). **Not verified.** Marked TODO in
   `lib/makary-data.ts` and disclosed in the widget's caption. Must be confirmed
   against the NCHS report before publication.
6. **Did the hedges survive the press release?** We now have two stripped hedges
   (Leape's "partly," Makary's "if"). The Johns Hopkins press release is the
   likely point where Makary's conditional was dropped. **High-value target** —
   if the release itself dropped the "if," that pins the transmission failure to
   a specific document.

## Sources still needed

- `govinfo.gov/content/pkg/CHRG-113shrg88894` — Senate transcript (highest value;
  blocked by egress policy)
- `jamanetwork.com/journals/jama/fullarticle/194039` — Hayward & Hofer (blocked)
- `journals.lww.com` — James 2013 (blocked)
- Johns Hopkins / *BMJ* press release, May 2016 — not yet located
- HealthGrades 2004 report — providersedge.com PDF, per Makary ref 11
- ~~`bmj.com/content/353/bmj.i2139`~~ ✅ **obtained and read 2026-08-08**
