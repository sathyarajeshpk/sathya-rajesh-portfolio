import { S, MONO } from "@/components/site/signatureStyles";

const links = [
  { href: "#sg-work", text: "Work" },
  { href: "#sg-track", text: "Track" },
  { href: "#sg-writing", text: "Writing" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 70,
        backdropFilter: "blur(14px)", background: "rgba(235,238,224,.86)",
        borderBottom: `1px solid ${S.rule}`,
      }}
    >
      <nav
        style={{
          maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)",
          height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
        }}
      >
        <a href="#sg-top" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.ink, fontWeight: 700 }}>
          Sathya Rajesh
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.4vw,34px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
               style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.muted }}>
              {l.text}
            </a>
          ))}
          <a href="#sg-contact" data-gs-magnetic="1"
             style={{
               fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700,
               color: S.ink, background: S.accent, padding: "11px 20px", borderRadius: 99,
             }}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
