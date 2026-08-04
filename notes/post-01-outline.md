# Post 01 — The 250,000 Deaths That Weren't

**Status:** outline in progress. Nothing here is verified yet.
**Audience:** layered — general reader in the main narrative, clinician detail in expandable asides.
**Stack:** Next.js + React.

> ⚠️ **Every number in this document is from memory and must be checked against
> primary sources before it appears in the published post.** Claims flagged
> `[VERIFY]` are ones I have specific doubts about.

---

## Structural principle

The reader must fully accept the claim as settled institutional truth *before*
they are shown the arithmetic that produced it. If we open with the debunk, the
post reads as an academic quibble. If we open with the claim's authority — the
journals, the agencies, the curricula — then the derivation in Act I §3 lands as
a betrayal.

So: **claim → trajectory → derivation → failures → sociology.**

---

## Act I — How it became true

### §1. Cold open: the claim, in its own words

State it exactly as a reader has encountered it. Not paraphrased — verbatim, from
several sources at once, so the reader recognizes at least one of them. A slide,
an editorial, a hearing transcript, a textbook.

No visual. Just the wall of quotes and the sentence: *this is one of the most
widely repeated facts in modern medicine.*

### §2. The trajectory — **the load-bearing section**

The case that serious people, in serious institutions, took this as established.
Four kinds of evidence, in ascending order of how damning they are:

1. **Volume and venue.** Total citations, and the tier of journal doing the
   citing. Makary & Daniel is among the most-cited papers *BMJ* has published,
   with an Altmetric score in the top handful ever recorded. `[VERIFY — I recall
   the citation count in the low thousands and an exceptionally high Altmetric,
   but both need confirming, along with which high-impact journals cite it and
   in what context.]`
2. **Press amplification.** The 2016 press cycle. Note that the "third leading
   cause of death" framing was engineered for it — that phrasing does not fall
   out of the analysis, it was chosen. `[VERIFY — need the actual BMJ/Johns
   Hopkins press release text.]`
3. **Policy and agency use.** Congressional testimony, federal agency documents,
   CMS/AHRQ materials. Evidence it shaped decisions, not just discourse.
4. **Training materials.** Textbooks, board review, med school and residency
   curricula. The most damning category: it means the claim stopped being
   something physicians evaluate and became something they are *examined on*.

**Honest caveat we must state plainly:** citation is not endorsement. Some of
those citations are critical. If we can hand-code a random sample of citing
papers by stance — endorsing / neutral / critical — we can make a real
quantitative claim instead of implying one. That analysis would be original;
nobody appears to have published it. Worth the effort if it's tractable.

> **Visual (flagship, interactive): the diffusion chart.**
> Cumulative citations over time, 2016 → present, with a second and much flatter
> curve for the published rebuttal literature. The gap between the two curves
> *is* the thesis of the whole post, stated once, early, without argument.
> Annotated with milestone markers — press cycle, first policy citation, first
> textbook appearance — each one clickable to a verbatim receipt with a link to
> source.
>
> Companion component: a **wall of receipts** — verbatim quotes filterable by
> venue type (journal / press / policy / curriculum). Every one sourced.

### §3. Open the box

Only now, the derivation. Four source studies → pooled preventability rate →
multiplied by ~35.4M annual US admissions → 251,454. The shock is how small the
arithmetic is: a few dozen preventable deaths across a few thousand admissions,
scaled up by four orders of magnitude. `[VERIFY — exact death counts, admission
denominators, and the precise pooling method.]`

Also note: this was a *BMJ* "analysis" article, not original research.

> **Visual (flagship, interactive): the extrapolation machine.**
> Four inputs, a rate, a multiplier, an output. Then hand the reader the knobs.
> Moving the preventability rate and the applicable denominator within
> *defensible* ranges should swing the headline figure from roughly 20k to 400k+.
> The point lands without needing to be argued: this is a function of
> assumptions, not an observation.

---

## Act II — The four failures

### §4. The sources don't pool

Harvard Medical Practice Study (1984 New York data), Utah/Colorado (1992), HHS
Inspector General Medicare inpatients (2008), Landrigan North Carolina
(2002–07). Different eras, populations, adverse-event definitions, and
preventability thresholds.

> **Visual:** timeline placing each study against the era of medicine it sampled.
> The 1984 data predates modern ICU practice, hospitalists, and EHRs entirely.

### §5. "Preventable" is a judgment, not a measurement

Retrospective implicit chart review has poor inter-rater agreement, and it is
saturated with hindsight bias — knowing the patient died makes every preceding
decision look worse.

> **Visual (flagship, interactive): "you be the reviewer."**
> Three or four case vignettes. Reader rates preventability on the standard
> 6-point scale, then sees how actual reviewer panels split on comparable cases.
> Converts an abstract kappa statistic into "I was confident, and I was in the
> minority."
>
> **Open problem:** vignettes should be drawn from published case material, and
> the panel-split data must come from a real reliability study rather than being
> asserted. If we can't source both honestly, this widget changes shape.

### §6. The missing counterfactual

"Preventable death" does not mean "would otherwise have lived a full life." Most
of these patients were already dying. Hogan et al. (UK) is the key citation —
weight by remaining life expectancy and the loss shrinks dramatically. `[VERIFY
— Hogan's preventable-death proportion and the life-years figures.]`

Handle carefully: the harm is real. It is simply a different quantity than
advertised.

> **Visual:** switch the y-axis from deaths to life-years and watch the bar
> collapse.

### §7. The ranking is a category error

CDC ranks *underlying* cause of death. Error is a mechanism, not an underlying
cause. The two lists cannot be merged.

> **Visual:** the famous bar chart, then dismantled — applying the same logic
> consistently would require adding obesity, poverty, and others, and the list
> would sum well past 100%.

**Open question:** this is the cleanest logical kill of the four, but it requires
explaining death-certificate coding. Main text with a clinician aside, or aside
with the general reader getting the short version? Undecided.

### §8. So what is the number?

Rodwin et al. (2020) systematic review and others. Honest ranges, honest
uncertainty. Land it: medical error is a serious problem, the true figure is
substantially smaller, and life-years is the better unit. `[VERIFY]`

---

## Act III — Why it survived

The more original half. Physicians are trained in exactly the skills that should
have caught this.

- **Citation laundering.** Almost nobody repeating the figure has opened the four
  underlying studies. The 1999 IOM report's 44k–98k had already done the same
  thing a generation earlier — this is *second-generation* laundering.
  > **Visual (flagship, interactive): the citation network.** Nodes sized by
  > influence, edges showing who actually read whom. The primary sources sit
  > nearly orphaned at the bottom.
- **It arrives as a fact, not a study.** Critical appraisal is a mode you enter
  deliberately. You don't run one on a bullet in someone else's slide deck. The
  claim bypasses the machinery by never presenting itself as evidence.
- **Virtuous belief.** Repeating it signals humility and reform-mindedness.
  Doubting it sounds like guild self-defense. The social cost is asymmetric and
  points one way.
- **No constituency for correction.** Safety organizations need the number.
  Hospitals won't touch it. Media prefers the larger figure. Nobody with a
  platform gains from arguing it down.
- **It worked.** *To Err Is Human* drove real improvement. This deserves fair
  treatment, not a gotcha. The honest question: is a reform movement resting on a
  bad number stable when the number eventually breaks?

### §10. Holding both things

Believing "error is a serious problem" and "250k is wrong" simultaneously. What
better measurement looks like.

### §11. Close

A number too useful to question is a number nobody checks.

---

## Open decisions

- [ ] Does Act III belong here, or is it a second post? It roughly doubles the
      length and shifts genre from debunk to sociology.
- [ ] How rigorous is the §2 citation analysis — stance-coded sample, or volume
      and venue only?
- [ ] §7 placement: main text or clinician aside?
- [ ] Can the §5 vignettes be honestly sourced?

## Visual inventory

| # | Section | Visual | Interactive | Status |
|---|---------|--------|-------------|--------|
| 1 | §2 | Diffusion chart — claim vs. rebuttal curves | yes | not started |
| 2 | §2 | Wall of receipts | filter only | not started |
| 3 | §3 | The extrapolation machine | yes | not started |
| 4 | §4 | Study-era timeline | no | not started |
| 5 | §5 | You be the reviewer | yes | blocked on sourcing |
| 6 | §6 | Deaths → life-years axis switch | light | not started |
| 7 | §7 | CDC ranking, dismantled | light | not started |
| 8 | §9 | Citation network | yes | not started |
