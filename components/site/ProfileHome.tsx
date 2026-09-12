import ProfileMotion from "@/components/site/ProfileMotion";
import Navbar from "@/components/sections/profile/Navbar";
import Hero from "@/components/sections/profile/Hero";
import Marquee from "@/components/sections/profile/Marquee";
import About from "@/components/sections/profile/About";
import Projects from "@/components/sections/profile/Projects";
import Experience from "@/components/sections/profile/Experience";
import Skills from "@/components/sections/profile/Skills";
import Impact from "@/components/sections/profile/Impact";
import Testimonials from "@/components/sections/profile/Testimonials";
import Writing from "@/components/sections/profile/Writing";
import Contact from "@/components/sections/profile/Contact";
import Footer from "@/components/sections/profile/Footer";

export default function ProfileHome() {
  return (
    <div style={{ position: "relative", background: "#0A0B0D", color: "#EEF0F4", minHeight: "100vh", overflow: "hidden" }}>
      <ProfileMotion />
      <Navbar />
      <main id="top" style={{ position: "relative", zIndex: 10 }}>
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
