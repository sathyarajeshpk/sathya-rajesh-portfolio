const STAGES = ["Landing", "Bronze", "Silver", "Data Cloud"];

/**
 * The Landing → Bronze → Silver → Data Cloud medallion pipeline this site
 * keeps mentioning in prose, drawn instead of just described. Each
 * connector draws in on scroll (via whichever theme's stroke-draw
 * mechanism `strokeAttr` names — see Scribble in kineticStyles.tsx /
 * signatureStyles.tsx for the same pathLength=1 pattern) and then a small
 * packet loops along it forever via native SVG <animateMotion>, so the
 * "flowing data" part needs no JS or per-theme animation wiring at all.
 */
export function MedallionDiagram({
  accent,
  ink,
  muted,
  rule,
  panel,
  mono,
  strokeAttr = "data-stroke",
}: {
  accent: string;
  ink: string;
  muted: string;
  rule: string;
  panel: string;
  mono: string;
  strokeAttr?: "data-stroke" | "data-gs-stroke";
}) {
  const nodeX = [70, 320, 570, 820];
  const y = 70;
  const paths = nodeX.slice(0, -1).map((x, i) => `M${x + 60} ${y} L${nodeX[i + 1] - 60} ${y}`);
  const strokeProps = strokeAttr === "data-gs-stroke"
    ? { "data-gs-stroke": "1" }
    : { "data-stroke": "1" };

  return (
    <svg viewBox="0 0 900 140" role="img" aria-label="Data flows Landing to Bronze to Silver to Data Cloud" style={{ width: "100%", height: "auto", display: "block" }}>
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke={rule} strokeWidth={2} />
          <path d={d} fill="none" stroke={accent} strokeWidth={2} pathLength={1}
                style={{ strokeDasharray: 1, strokeDashoffset: 1 }} {...strokeProps} />
          <circle r={4} fill={accent}>
            <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.5}s`} path={d} />
          </circle>
        </g>
      ))}
      {nodeX.map((x, i) => (
        <g key={STAGES[i]}>
          <rect x={x - 58} y={y - 26} width={116} height={52} rx={6} fill={panel} stroke={rule} strokeWidth={1.5} />
          <text x={x} y={y + 5} textAnchor="middle" fontFamily={mono} fontSize={13} fontWeight={600} fill={ink}>
            {STAGES[i]}
          </text>
        </g>
      ))}
      <text x={0} y={130} fontFamily={mono} fontSize={10} letterSpacing=".1em" fill={muted} style={{ textTransform: "uppercase" }}>
        Databricks · ADLS Gen2 · config-driven onboarding
      </text>
    </svg>
  );
}
