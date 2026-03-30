import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "ShieldAPI",
    meta: "Java · Spring Boot · JWT · MongoDB",
    desc: "API Security & Threat Monitoring — OWASP Top 10 coverage via servlet filter chains.",
    link: "https://github.com/moneyutkarsh/ShieldAPI"
  },
  {
    title: "Evenity",
    meta: "React · Node.js · MongoDB · Framer Motion",
    desc: "Event Discovery Platform — compound indexes + server-side TTL cache for third-party feeds.",
    link: "https://github.com/moneyutkarsh/Evenity"
  },
  {
    title: "HealTrip",
    meta: "React · Node.js · FastAPI · MongoDB Atlas · Razorpay",
    desc: "Medical Tourism Platform — hard service boundary split with recommendation engine in <200ms.",
    link: "https://github.com/Naman-1508/HealTrip"
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-row", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-wrap" id="work" ref={sectionRef}>
      <span className="section-tag">Selected Projects</span>
      <div className="projects-list">
        {projects.map((proj, i) => (
          <a key={i} href={proj.link} className="project-row" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div className="project-row-bg" />
            <div className="project-row-inner">
              <div>
                <h2 className="project-row-title">{proj.title}</h2>
                <p className="project-row-meta" style={{ marginTop: 8, maxWidth: 500, fontSize: "0.85rem", opacity: 0.5 }}>
                  {proj.desc}
                </p>
              </div>
              <div style={{ textAlign: "right", display: "flex", alignItems: "center", gap: "16px" }}>
                <span className="project-row-meta">{proj.meta}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaGithub className="project-github-icon" style={{ fontSize: "1.2rem", opacity: 0.6, transition: "all 0.3s" }} />
                  <div className="project-arrow">↗</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;