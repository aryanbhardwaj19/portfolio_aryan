import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJupyter,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiRailway,
  SiReact,
  SiRender,
  SiSpringboot,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi, TbSql, TbVectorBezier } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "C++", category: "Languages", icon: SiCplusplus },
  { name: "Python", category: "Languages", icon: SiPython },
  { name: "JavaScript", category: "Languages", icon: SiJavascript },
  { name: "SQL", category: "Languages", icon: TbSql },
  { name: "HTML", category: "Technologies/Frameworks", icon: SiHtml5 },
  { name: "CSS", category: "Technologies/Frameworks", icon: SiCss },
  { name: "React", category: "Technologies/Frameworks", icon: SiReact },
  { name: "Express", category: "Technologies/Frameworks", icon: SiExpress },
  { name: "NodeJS", category: "Technologies/Frameworks", icon: SiNodedotjs },
  { name: "Spring Boot", category: "Technologies/Frameworks", icon: SiSpringboot },
  { name: "REST APIs", category: "Technologies/Frameworks", icon: TbApi },
  { name: "LangChain", category: "Technologies/Frameworks", icon: SiLangchain },
  { name: "MongoDB", category: "Databases", icon: SiMongodb },
  { name: "FAISS", category: "Databases", icon: TbVectorBezier },
  { name: "AWS S3", category: "Databases", icon: FaAws },
  { name: "Git", category: "Developer Tools", icon: SiGit },
  { name: "GitHub", category: "Developer Tools", icon: SiGithub },
  { name: "VS Code", category: "Developer Tools", icon: VscVscode },
  { name: "IntelliJ", category: "Developer Tools", icon: SiIntellijidea },
  { name: "Jupyter", category: "Developer Tools", icon: SiJupyter },
  { name: "Vercel", category: "Deployment", icon: SiVercel },
  { name: "Render", category: "Deployment", icon: SiRender },
  { name: "Firebase", category: "Deployment", icon: SiFirebase },
  { name: "Railway", category: "Deployment", icon: SiRailway },
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
        {skillsData.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-glow"></div>
              <div className="skill-icon-wrap">
                <span className="skill-icon">
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechnicalSkills;
