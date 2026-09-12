import { K, MONO } from "@/components/site/kineticStyles";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${K.rule}` }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        padding: "26px clamp(20px,4vw,56px)",
        paddingRight: "calc(clamp(20px,4vw,56px) + 78px)",
        display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16,
        fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft,
      }}>
        <span>© {new Date().getFullYear()} Sathya Rajesh PK</span>
        <span>Chennai, India</span>
      </div>
    </footer>
  );
}
