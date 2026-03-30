import { useRef, Suspense, lazy } from "react";
import { useEffect } from "react";
import gsap from "gsap";

const ParticleBackground = lazy(() => import("./ParticleBackground"));

const Hero = () => {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tagRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 });
    tl.to(tagRef.current, { opacity: 0.5, y: 0, duration: 0.8, ease: "power3.out" }, 0)
      .to(".word-inner", {
        y: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      }, 0.2)
      .to(subRef.current, { opacity: 0.6, y: 0, duration: 0.9, ease: "power3.out" }, 0.8)
      .to(hintRef.current, { opacity: 0.4, y: 0, duration: 0.7, ease: "power3.out" }, 1);

    // initial hidden states
    gsap.set(tagRef.current, { opacity: 0, y: 20 });
    gsap.set(".word-inner", { y: "110%" });
    gsap.set(subRef.current, { opacity: 0, y: 30 });
    gsap.set(hintRef.current, { opacity: 0, y: 20 });
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* 3D Background */}
      <div className="hero-canvas">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      </div>

      <div className="hero-logo">UD.</div>

      <div className="hero-nav">
        <a href="#about" className="hero-nav-link">About</a>
        <a href="#work" className="hero-nav-link">Work</a>
        <a href="#contact" className="hero-nav-link">Contact</a>
      </div>

      <div className="hero-content">
        <span className="hero-tag" ref={tagRef}>Utkarsh Dubey </span>

        <h1 className="hero-title" ref={titleRef}>
          <span className="word-line">
            <span className="word-inner">Engineering</span>
          </span>
          <span className="word-line">
            <span className="word-inner hero-accent">Lasting</span>
          </span>
          <span className="word-line">
            <span className="word-inner">Impact</span>
          </span>
        </h1>

        <p className="hero-sub" ref={subRef}>
          CS Undergrad at MSRIT · Samsung R&D Research Intern · <br />
          Specialized in backend security, API design & full-stack systems.
        </p>
      </div>

      <div className="hero-scroll-hint" ref={hintRef}>
        <span className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;