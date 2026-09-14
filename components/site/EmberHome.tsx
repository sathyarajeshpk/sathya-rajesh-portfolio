import EmberMotion from "@/components/site/EmberMotion";
import { EMBER } from "@/components/site/emberStyles";
import Navbar from "@/components/sections/ember/Navbar";
import Hero from "@/components/sections/ember/Hero";
import Philosophy from "@/components/sections/ember/Philosophy";
import Projects from "@/components/sections/ember/Projects";
import Experience from "@/components/sections/ember/Experience";
import Contact from "@/components/sections/ember/Contact";
import Footer from "@/components/sections/ember/Footer";

export default function EmberHome() {
  return (
    <div style={{ position: "relative", background: EMBER.bg, color: EMBER.ink, minHeight: "100vh" }}>
      <EmberMotion />
      <Navbar />
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <Philosophy />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
