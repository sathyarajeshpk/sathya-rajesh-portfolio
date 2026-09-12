import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import FAQs from "@/components/sections/FAQs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function ClassicHome() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Blog />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
