import { K, MONO } from "@/components/site/kineticStyles";

const links = [
  { href: "#kt-work", text: "Work" },
  { href: "#kt-track", text: "Track" },
  { href: "#kt-writing", text: "Writing" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 70,
        backdropFilter: "blur(14px)", background: "rgba(243,241,231,.86)",
        borderBottom: `1px solid ${K.rule}`,
      }}
    >
      <nav
        style={{
          maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)",
          height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
        }}
      >
        <a href="#kt-top" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.ink, fontWeight: 700 }}>
          Sathya Rajesh
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.4vw,34px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
               style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.muted }}>
              {l.text}
            </a>
          ))}
          <a href="#kt-contact" data-magnetic="1"
             style={{
               fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700,
               color: K.ink, background: K.accent, padding: "11px 20px", borderRadius: 99,
             }}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
