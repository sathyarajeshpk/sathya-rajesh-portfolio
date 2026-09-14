"use client";

import { useState } from "react";
import { EMBER, MONO, GROTESK, shell } from "@/components/site/emberStyles";

const EMAIL = "sathyarajeshpk@gmail.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", boxSizing: "border-box", background: EMBER.panelSoft, border: `1px solid ${EMBER.rule}`,
    borderRadius: 8, padding: "12px 14px", color: EMBER.ink, fontSize: ".95rem", fontFamily: "inherit", outline: "none",
  };
  const labelStyle: React.CSSProperties = { display: "block", margin: "0 0 6px", fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: EMBER.soft };

  return (
    <section id="em-contact" style={{ borderTop: `1px solid ${EMBER.rule}` }}>
      <div style={shell}>
        <p data-reveal="1" style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: EMBER.accent, textAlign: "center" }}>Get In Touch</p>
        <h2 data-reveal="1" style={{ fontFamily: GROTESK, fontWeight: 700, color: EMBER.ink, margin: "16px 0 0", fontSize: "clamp(2rem,4.6vw,3.4rem)", lineHeight: 1.05, textAlign: "center" }}>
          Let&rsquo;s Build Something That Lasts
        </h2>
        <p data-reveal="1" style={{ margin: "14px auto 0", maxWidth: "44ch", textAlign: "center", color: EMBER.muted }}>
          Have a platform in mind? I&rsquo;d love to hear about it. Let&rsquo;s build something reliable together.
        </p>

        <div data-reveal="1" style={{ marginTop: "clamp(36px,5vw,56px)", display: "grid", gridTemplateColumns: "minmax(0,320px) minmax(0,1fr)", gap: "clamp(20px,3vw,32px)" }}>
          <div style={{ border: `1px solid ${EMBER.rule}`, borderRadius: 12, padding: "24px 26px", background: EMBER.panel }}>
            <p style={{ margin: "0 0 18px", fontFamily: GROTESK, fontWeight: 700, fontSize: "1.1rem", color: EMBER.ink }}>Contact Details</p>

            <p style={labelStyle}>Email</p>
            <a href={`mailto:${EMAIL}`} style={{ display: "block", margin: "0 0 18px", color: EMBER.ink, fontSize: ".95rem" }}>{EMAIL}</a>

            <p style={labelStyle}>Location</p>
            <p style={{ margin: "0 0 18px", color: EMBER.ink, fontSize: ".95rem" }}>Chennai, India</p>

            <p style={labelStyle}>Availability</p>
            <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 8, color: EMBER.ink, fontSize: ".95rem" }}>
              <span data-pulse="1" style={{ width: 7, height: 7, borderRadius: "50%", background: EMBER.green }} />
              Open to opportunities
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 24, paddingTop: 20, borderTop: `1px solid ${EMBER.rule}` }}>
              <a href="https://github.com/sathyarajeshpk" target="_blank" rel="noopener noreferrer" style={{ color: EMBER.muted, fontFamily: MONO, fontSize: 11 }}>GitHub</a>
              <a href="https://www.linkedin.com/in/sathyarajeshpk/" target="_blank" rel="noopener noreferrer" style={{ color: EMBER.muted, fontFamily: MONO, fontSize: 11 }}>LinkedIn</a>
              <a href="https://wa.me/919597996996" target="_blank" rel="noopener noreferrer" style={{ color: EMBER.muted, fontFamily: MONO, fontSize: 11 }}>WhatsApp</a>
            </div>
          </div>

          <form onSubmit={submit} style={{ border: `1px solid ${EMBER.rule}`, borderRadius: 12, padding: "24px 26px", background: EMBER.panel, display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={labelStyle} htmlFor="em-name">Name</label>
              <input id="em-name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label style={labelStyle} htmlFor="em-email">Email</label>
              <input id="em-email" type="email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label style={labelStyle} htmlFor="em-message">Message</label>
              <textarea id="em-message" rows={4} style={{ ...inputStyle, resize: "vertical" }} value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button type="submit" data-magnetic="1" style={{
              alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, height: 48, padding: "0 26px",
              borderRadius: 99, background: EMBER.accent, color: "#fff", border: 0, fontFamily: MONO, fontSize: 11,
              letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer",
            }}>
              Send Message <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
