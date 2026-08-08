import ExtrapolationMachine from "@/components/ExtrapolationMachine";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "64px 20px 96px",
      }}
    >
      <p
        style={{
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          margin: "0 0 10px",
          fontWeight: 600,
        }}
      >
        Prototype · not published
      </p>
      <h1 style={{ fontSize: 34, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
        Where 251,454 comes from
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-secondary)", margin: "0 0 12px" }}>
        Four studies. One of them looked at 795 hospital admissions. Another looked at 37 million.
        In the arithmetic that produced the most repeated statistic in American medicine, they count
        the same.
      </p>
      <p style={{ fontSize: 17, color: "var(--text-secondary)", margin: "0 0 40px" }}>
        Every number below is transcribed from Table 1 of the original paper. Nothing is invented,
        and the published figure reproduces exactly.
      </p>

      <ExtrapolationMachine />
    </main>
  );
}
