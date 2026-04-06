import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import ElectricBorder from "./ElectricBorder";

const Experience = () => {

  const sectionRef = useRef(null);
  const lineFillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".exp-header", {
        y: -20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 85%",
        },
      });

      // Timeline Fill
      gsap.to(lineFillRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrap",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Entries reveal
      gsap.from(".timeline-entry", {
        x: -40,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-wrap",
          start: "top 75%",
        },
      });

      gsap.from(".exp-ach-card", {
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-achievements-block",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience-section section-wrap" id="experience" ref={sectionRef}>
      <div className="exp-header">
        <span className="section-tag">Experience</span>
        <span className="exp-count">01 Role</span>
      </div>

      <div className="timeline-wrap">
        <div className="timeline-line"></div>
        <div className="timeline-line-fill" ref={lineFillRef}></div>

        {/* entry 1 */}
        <div className="timeline-entry">
          <div className="timeline-dot">
            <div className="timeline-dot-ring"></div>
          </div>
          <div className="tl-num">01</div>
          <div className="tl-body">
            <h3 className="timeline-company">Samsung R&D Institute</h3>

            <div className="tl-meta-row">
              <span className="timeline-period">Nov 2025 - Present</span>
              <span className="tl-location-chip">Bengaluru, India</span>
            </div>

            <span className="timeline-role">Research Intern</span>

            <p className="timeline-desc">
              Developed a low-latency CNN-based model to detect wake words and classify
              emotions from short audio clips. Built an acoustic feature extraction pipeline
              (MFCC/eGeMAPS) and optimized inference for real-time performance (&lt;100ms).
              <br /><br />
              Evaluated model performance using F1-score and cross-corpus testing, improving
              robustness and accuracy. Project: Emotion-Aware Wake-Word Recognition.
            </p>
          </div>
        </div>

      </div>

      <div className="exp-achievements-block">
        <div className="exp-achievements-label">
          <span className="exp-ach-tag">Honors & Activities</span>
          <div className="exp-ach-line"></div>
        </div>
        <div className="exp-ach-grid">

          <ElectricBorder borderRadius="24px" borderColor="#e15a40" glowColor="#e15a40" duration={3}>
            <div className="exp-ach-card">
              <div className="exp-ach-card-glow"></div>
              <span className="exp-ach-badge">Dec 2024 - Nov 2025</span>
              <h4 className="exp-ach-company">IEEE PES RIT Bangalore</h4>
              <p className="timeline-role" style={{ marginBottom: '16px' }}>Vice Chair — Power & Energy Society</p>
              <p className="exp-ach-desc">
                Led IEEE PES chapter's growth, organizing 5+ events, increasing event participation by 100%.
              </p>
            </div>
          </ElectricBorder>

          <ElectricBorder borderRadius="24px" borderColor="#e15a40" glowColor="#e15a40" duration={3}>
            <div className="exp-ach-card">
              <div className="exp-ach-card-glow"></div>
              <span className="exp-ach-badge">Dec 2024</span>
              <h4 className="exp-ach-company">wHACKiest 2024</h4>
              <p className="timeline-role" style={{ marginBottom: '16px' }}>Top 25/300 Teams</p>
              <p className="exp-ach-desc">
                Delivered a high-impact solution within a 24-hour hackathon, focusing on scalability, efficient backend design, and seamless user experience.
              </p>
            </div>
          </ElectricBorder>

        </div>
      </div>
    </section>
  );
};

export default Experience;
