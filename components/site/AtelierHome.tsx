import AtelierMotion from "@/components/site/AtelierMotion";
import { ATELIER } from "@/components/site/atelierStyles";
import Navbar from "@/components/sections/atelier/Navbar";
import Hero from "@/components/sections/atelier/Hero";
import Marquee from "@/components/sections/atelier/Marquee";
import About from "@/components/sections/atelier/About";
import Projects from "@/components/sections/atelier/Projects";
import Experience from "@/components/sections/atelier/Experience";
import Skills from "@/components/sections/atelier/Skills";
import Impact from "@/components/sections/atelier/Impact";
import Testimonials from "@/components/sections/atelier/Testimonials";
import Writing from "@/components/sections/atelier/Writing";
import Contact from "@/components/sections/atelier/Contact";
import Footer from "@/components/sections/atelier/Footer";

export default function AtelierHome() {
  return (
    <div style={{ position: "relative", background: ATELIER.bg, color: ATELIER.ink, minHeight: "100vh" }}>
      <AtelierMotion />
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
