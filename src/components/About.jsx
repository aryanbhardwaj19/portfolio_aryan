import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const mainTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mask reveal for main text
      gsap.from(mainTextRef.current, {
        clipPath: "inset(100% 0 0 0)",
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "top 80%",
        },
      });

      // Reveal terminal
      gsap.from(".about-terminal", {
        scale: 0.9,
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
        },
      });

      gsap.from(".about-desc", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-desc",
          start: "top 85%",
        },
      });

      gsap.from(".fact-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-facts",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-wrap" id="about" ref={sectionRef}>
      <span className="section-tag">About Me</span>
      <div className="about-grid">
        <div className="about-terminal">
          <div className="terminal-header">
            <div className="terminal-btn red"></div>
            <div className="terminal-btn yellow"></div>
            <div className="terminal-btn green"></div>
            <span className="terminal-title">guest@utkarsh:~</span>
          </div>
          <div className="terminal-body">
            <p className="term-line"><span className="term-prompt">&gt;</span> whoami</p>
            <p className="term-response">Utkarsh Dubey</p>

            <p className="term-line mt"><span className="term-prompt">&gt;</span> sudo get_focus</p>
            <p className="term-response">["Backend", "Cyber_Sec", "System_Design"]</p>

            <p className="term-line mt"><span className="term-prompt">&gt;</span> run --status</p>
            <p className="term-response animate-pulse">Compiling...<span className="term-cursor"></span></p>
          </div>
        </div>
        <div>
          <h2 className="about-main" ref={mainTextRef}>
            CS undergrad focused on backend systems—API security, service architecture, and writing queries that actually work.
          </h2>
          <p className="about-desc">
            Strong in Java and DSA; comfortable across the full stack. I bridge
            the gap between rigorous software engineering and systems-level
            thinking — from compiler scheduling algorithms to JWT-secured API
            gateways.
          </p>
          <p className="about-desc">
            Currently pursuing B.E. in Computer Science & Engineering (Cyber
            Security) at M.S. Ramaiah Institute of Technology, Bengaluru.
          </p>
          <div className="about-facts">
            <div className="fact-item">
              <span>9.12</span>
              <p>GPA / 10.0</p>
            </div>
            <div className="fact-item">
              <span>3+</span>
              <p>Projects Shipped</p>
            </div>
            <div className="fact-item">
              <span>2027</span>
              <p>Graduating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;