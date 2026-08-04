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

### §1. Cold open: a plane crashes every day

Do not argue. Do not hedge. **Show the claim at full strength**, in the imagery
its own advocates chose.

> **Visual (flagship, interactive): a year of crashes.**
> A calendar year plays out on a scrubbable timeline. Each day, aircraft
> silhouettes fall and accumulate; a death counter climbs toward 251,454. By
> December the field is dense with 600+ aircraft. The reader can scrub, pause,
> and sit inside the scale.
>
> Design intent: the reader should finish this section *convinced and angry*. If
> they don't feel the weight here, nothing later has anything to push against.

**Then the historical note.** The analogy predates the number. It was coined in
the *To Err Is Human* era against the IOM's 98,000 — about 268 deaths a day,
roughly one fully loaded jumbo jet. When 251,454 arrived in 2016, the imagery was
inherited and quietly rescaled to ~689/day, closer to two aircraft. The rhetoric
survived a wholesale change in the underlying number. `[VERIFY — origin and
earliest attributable use of the aviation comparison; exact IOM-era phrasing.]`

**And the substantive point:** the comparison was never purely rhetorical.
Patient safety consciously modeled itself on aviation — checklists, crew resource
management, root-cause analysis, no-fault incident reporting. Invoking planes was
an argument about which discipline medicine should imitate.

> ### ⚑ Structural keystone — the callback
>
> The analogy smuggles in an assumption: **plane crash victims are healthy people
> with full lives ahead of them.** That assumption is exactly what fails in §6.
>
> So this animation is not decoration — it is a setup we detonate later. In §6 we
> replay the identical visual with each aircraft scaled by *actual life-years
> lost*, and the sky empties out. Cold open and counterfactual argument become
> the same image, seen twice.
>
> **Build these two as one component with a mode flag.** The payoff depends
> entirely on them being visually identical.

### §2. The trajectory — who believed it

The case that serious people, in serious institutions, took this as established.

**Not a citation count.** Raw citation volume is a weak and attackable measure:
much of it is rebuttals citing the paper in order to argue with it. Leading with
a big number invites exactly the dismantling we're performing on someone else.

Instead, evidence of *institutional uptake*. Order is deliberate:

1. **The paper.** Makary & Daniel, *BMJ*, 3 May 2016. The anchor — this is the
   version readers recognize, and it stays the center of gravity.
2. **Press amplification.** The 2016 cycle. The "third leading cause of death"
   framing was engineered — that phrasing doesn't fall out of the analysis, it
   was chosen. `[VERIFY — the BMJ / Johns Hopkins press release text.]`
3. **The Senate hearing.** Introduced here as the depth marker: a US Senate
   subcommittee with the number in the title of an official proceeding, its
   chairman opening by calling medical error the third leading cause of death.

   > ### ⚑ The reversal
   >
   > A reader arriving here assumes the hearing *followed* from the paper. That
   > is the natural causal reading and we should let them hold it for a beat.
   >
   > **Then give the date: 17 July 2014. Two years earlier.**
   >
   > The belief was already institutionalised. The paper didn't create it — it
   > supplied a citation for a conclusion that was waiting for one. Withhold the
   > date until the paragraph turns; the chronology carries the argument without
   > us having to make it.

4. **Named institutional endorsement.** Specific high-impact journals, societies,
   and organizations that repeated it *as fact* in their own editorial voice.
   Named actors beat aggregate counts.
5. **Training materials.** Textbooks, board review, med school and residency
   curricula. The most damning: the claim stopped being something physicians
   evaluate and became something they are *examined on*. Direct handoff to
   Act III — if you were tested on it, of course you never appraised it.

> **Visual: the wall of receipts.** Verbatim quotes, each with source and link,
> filterable by venue type (press / journal / policy / curriculum). Qualitative
> and concrete. The reader should be able to click any one and land on the
> original document.
>
> Possible companion, only if the data supports it honestly: a two-curve chart
> showing how far the *published rebuttals* travelled versus the original. Framed
> as reach, not as endorsement.

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

> ### ⚑ Visual (flagship): **the callback — the sky empties**
>
> Replay the §1 animation, identical framing, but each aircraft now scaled by
> *life-years lost* rather than lives lost. The dense December field thins
> dramatically.
>
> This is the emotional peak of Act II and the reason §1 exists in the form it
> does. Same component as §1 with a mode flag — the two views must be visually
> identical or the payoff evaporates.
>
> **Care required:** the sky must not empty to *nothing*. Real harm remains, and
> overshooting here hands critics a fair objection. The honest endpoint is
> "much smaller and differently shaped," not "imaginary."

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

**Revised thesis after verification pass 1.** This is not "nobody checked."
Hayward & Hofer published the counterfactual argument in *JAMA* in 2001 — fifteen
years before Makary, in a top-five journal — and the headline number went *up*
afterward. And the Senate was asserting the third-leading-cause framing in 2014,
before the paper that supposedly established it.

So the real question is sharper and more uncomfortable: **why does a correct,
prominently published correction fail to move a belief that institutions have
already committed to?** The paper didn't create the belief. It ratified one.

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
| 1 | §1 | **A year of crashes** — the claim at full strength | yes | next up |
| 1b | §6 | **The callback** — same component, life-years mode | yes | same build as #1 |
| 2 | §2 | Wall of receipts | filter only | not started |
| 3 | §3 | The extrapolation machine | yes | not started |
| 4 | §4 | Study-era timeline | no | not started |
| 5 | §5 | You be the reviewer | yes | blocked on sourcing |
| 6 | §7 | CDC ranking, dismantled | light | not started |
| 7 | §9 | Citation network | yes | not started |

Visuals #1 and #1b are **one component with a mode flag**, not two builds.
