import { ATELIER, SANS } from "@/components/site/atelierStyles";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${ATELIER.ruleSoft}` }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "28px clamp(20px,4vw,56px)",
        paddingRight: "calc(clamp(20px,4vw,56px) + 76px)",
        display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16,
        fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.soft,
      }}>
        <span>© {new Date().getFullYear()} Sathya Rajesh PK</span>
        <span>Chennai, India</span>
      </div>
    </footer>
  );
}
