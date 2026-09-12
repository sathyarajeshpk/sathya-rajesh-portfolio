import { C, MONO } from "@/components/site/profileStyles";

const links = [
  { href: "#work", text: "Work" },
  { href: "#experience", text: "Track" },
  { href: "#writing", text: "Writing" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 70,
        backdropFilter: "blur(14px)", background: "rgba(10,11,13,.72)",
        borderBottom: `1px solid rgba(255,255,255,.07)`,
      }}
    >
      <nav
        style={{
          maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)",
          height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
        }}
      >
        <a href="#top" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.fg }}>
          Sathya Rajesh PK
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.4vw,34px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
               style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9AA2AE" }}>
              {l.text}
            </a>
          ))}
          <a href="#contact" data-magnetic="1"
             style={{
               fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
               color: C.bg, background: C.fg, padding: "11px 20px", borderRadius: 99,
             }}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
