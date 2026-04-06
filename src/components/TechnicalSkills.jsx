import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "C++", category: "Languages", icon: "⚡" },
  { name: "Python", category: "Languages", icon: "🐍" },
  { name: "JavaScript", category: "Languages", icon: "JS" },
  { name: "SQL", category: "Languages", icon: "DB" },
  { name: "React.js", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", category: "Frontend", icon: "TS" },
  { name: "Tailwind", category: "Frontend", icon: "🌊" },
  { name: "HTML/CSS", category: "Frontend", icon: "🎨" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Express.js", category: "Backend", icon: "🚂" },
  { name: "MongoDB", category: "Databases", icon: "🍃" },
  { name: "Firebase", category: "Databases", icon: "🔥" },
  { name: "Git", category: "Tools", icon: "⚙️" },
  { name: "Docker", category: "Tools", icon: "🐳" },
  { name: "Vercel", category: "Tools", icon: "🚀" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "AWS", category: "Tools", icon: "📮" },
];

const TechnicalSkills = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal skills grid smoothly
      gsap.from(".skill-card", {
        y: 40,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-wrap" id="skills" ref={sectionRef}>
      <span className="section-tag">Technical Skills</span>

      <div className="skills-grid" ref={gridRef}>
        {skillsData.map((skill, i) => (
          <div key={i} className="skill-card">
            <div className="skill-card-glow"></div>
            <div className="skill-icon-wrap">
              <span className="skill-icon">{skill.icon}</span>
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
