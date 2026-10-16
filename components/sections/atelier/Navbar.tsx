import { ATELIER, SANS, SERIF } from "@/components/site/atelierStyles";

const links = [
  { href: "#at-work", text: "Work" },
  { href: "#at-experience", text: "Experience" },
  { href: "#at-writing", text: "Writing" },
];

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 70, backdropFilter: "blur(14px)", background: "rgba(14,13,12,.82)", borderBottom: `1px solid ${ATELIER.ruleSoft}` }}>
      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#at-top" style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 20, color: ATELIER.ink }}>
          Sathya Rajesh
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px,3vw,44px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.muted }}>
              {l.text}
            </a>
          ))}
          <a href="#at-contact" data-magnetic="1" style={{
            fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase",
            color: ATELIER.ink, border: `1px solid ${ATELIER.gold}`, padding: "10px 22px", borderRadius: 2,
          }}>
            Enquire
          </a>
        </div>
      </nav>
    </header>
  );
}
