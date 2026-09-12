import SignatureMotion from "@/components/site/SignatureMotion";
import { S } from "@/components/site/signatureStyles";
import Navbar from "@/components/sections/signature/Navbar";
import Hero from "@/components/sections/signature/Hero";
import Marquee from "@/components/sections/signature/Marquee";
import About from "@/components/sections/signature/About";
import Projects from "@/components/sections/signature/Projects";
import Experience from "@/components/sections/signature/Experience";
import Skills from "@/components/sections/signature/Skills";
import Impact from "@/components/sections/signature/Impact";
import Testimonials from "@/components/sections/signature/Testimonials";
import Writing from "@/components/sections/signature/Writing";
import Contact from "@/components/sections/signature/Contact";
import Footer from "@/components/sections/signature/Footer";

export default function SignatureHome() {
  return (
    <div style={{ position: "relative", background: S.bg, color: S.ink, minHeight: "100vh" }}>
      <SignatureMotion />
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
