import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import SoundToggle from "./components/SoundToggle";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a global parallax overlap effect for sections
      const sections = gsap.utils.toArray("section");
      
      sections.forEach((section, index) => {
        // Skip the last section since nothing overlaps it
        if (index !== sections.length - 1) {
          gsap.to(section, {
            scale: 0.9,
            opacity: 0.3,
            yPercent: -10, // slight parallax
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              scrub: true,
              pinSpacing: false
            }
          });
        }
      });
    });

    // Force a global refresh after everything is mounted and layout shifts have settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);
    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <SmoothScroll />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <Quote />
      <Contact />
      <SoundToggle />
    </>
  );
}

export default App;