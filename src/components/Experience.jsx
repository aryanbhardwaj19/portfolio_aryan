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
            <h3 className="timeline-company">Samsung R&D</h3>
            
            <div className="tl-meta-row">
              <span className="timeline-period">Dec 2025 - Present</span>
              <span className="tl-location-chip">Bengaluru, India</span>
            </div>
            
            <span className="timeline-role">Research Intern</span>
            
            <p className="timeline-desc">
              Profiling where multi-core throughput degrades — thread-scheduling overhead, 
              cache-coherence invalidation traffic, inter-core latency — using microbenchmarks 
              that vary one variable at a time to separate architectural bottlenecks from 
              workload-dependent ones.
              <br /><br />
              Results feed directly into compiler and runtime scheduling decisions; isolating the 
              bottleneck type determines whether the fix belongs in chip design or the OS scheduler.
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
              <span className="exp-ach-badge">Jan 2025 - Dec 2025</span>
              <h4 className="exp-ach-company">IEEE RIT Bangalore</h4>
              <p className="timeline-role" style={{marginBottom: '16px'}}>Web Resources Executive</p>
              <p className="exp-ach-desc">
                Manage web presence and publish technical content for 500+ members.
              </p>
            </div>
          </ElectricBorder>

          <ElectricBorder borderRadius="24px" borderColor="#e15a40" glowColor="#e15a40" duration={3}>
            <div className="exp-ach-card">
              <div className="exp-ach-card-glow"></div>
              <span className="exp-ach-badge">Dec 2025</span>
              <h4 className="exp-ach-company">Top 12 Teams</h4>
              <p className="timeline-role" style={{marginBottom: '16px'}}>Whackiest Hackathon '25, Coderit @ MSRIT</p>
              <p className="exp-ach-desc">
                Placed in the top 12 out of 80+ teams; built and shipped a working solution within the time limit.
              </p>
            </div>
          </ElectricBorder>

        </div>
      </div>
    </section>
  );
};

export default Experience;
