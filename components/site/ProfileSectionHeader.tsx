import { C, MONO, label } from "@/components/site/profileStyles";

/** Section eyebrow: "01 — About" rule + index + name. */
export default function ProfileSectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div
      data-reveal="1"
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 18,
        borderTop: `1px solid ${C.rule}`,
        paddingTop: 18,
      }}
    >
      <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: C.accent }}>
        {index}
      </span>
      <span style={label()}>{title}</span>
    </div>
  );
}
