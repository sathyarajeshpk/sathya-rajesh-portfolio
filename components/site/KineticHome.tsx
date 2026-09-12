import KineticMotion from "@/components/site/KineticMotion";
import { K } from "@/components/site/kineticStyles";
import Navbar from "@/components/sections/kinetic/Navbar";
import Hero from "@/components/sections/kinetic/Hero";
import Marquee from "@/components/sections/kinetic/Marquee";
import About from "@/components/sections/kinetic/About";
import Projects from "@/components/sections/kinetic/Projects";
import Experience from "@/components/sections/kinetic/Experience";
import Skills from "@/components/sections/kinetic/Skills";
import Impact from "@/components/sections/kinetic/Impact";
import Testimonials from "@/components/sections/kinetic/Testimonials";
import Writing from "@/components/sections/kinetic/Writing";
import Contact from "@/components/sections/kinetic/Contact";
import Footer from "@/components/sections/kinetic/Footer";

export default function KineticHome() {
  return (
    <div style={{ position: "relative", background: K.bg, color: K.ink, minHeight: "100vh" }}>
      <KineticMotion />
      <Navbar />
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Impact />
        <Testimonials />
        <Writing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
