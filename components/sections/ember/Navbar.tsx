import { EMBER, MONO } from "@/components/site/emberStyles";

const links = [
  { href: "#em-work", text: "Work" },
  { href: "#em-experience", text: "Experience" },
  { href: "#em-contact", text: "Contact" },
];

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 70, backdropFilter: "blur(14px)", background: "rgba(10,10,11,.78)", borderBottom: `1px solid ${EMBER.rule}` }}>
      <nav style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#em-top" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: EMBER.ink, fontWeight: 700 }}>
          Sathya Rajesh
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.4vw,34px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: EMBER.muted }}>
              {l.text}
            </a>
          ))}
          <a href="#em-contact" data-magnetic="1" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700, color: "#fff", background: EMBER.accent, padding: "11px 20px", borderRadius: 99 }}>
            Let&rsquo;s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
