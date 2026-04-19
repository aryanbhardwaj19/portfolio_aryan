import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FoodiesForFoody",
    meta: "Spring Boot, ReactJS, MongoDB, AWS S3",
    desc: "FoodiesForFoody is a full-stack web application designed to manage food items and user interactions for a food delivery or restaurant management system. It provides an admin interface for managing food items and users, along with a backend API for handling data operations.",
    link: "https://github.com/aryanbhardwaj19/FoodiesForFoody"
  },
  {
    title: "FinRisk",
    meta: "Python, LangChain, LangGraph, FAISS, Streamlit",
    desc: "FinRisk is a Streamlit application for querying financial documents (PDF, CSV, TSV, XLS, XLSX) using retrieval-augmented generation.It ingests documents, builds a FAISS index from local sentence-transformer embeddings, and answers questions through a LangGraph pipeline with source citations.",
    link: "https://financerisk.streamlit.app/"
  },
  {
    title: "TaskFlow",
    meta: "ReactJS · NodeJs · ExpressJS · MongoDB · Render · Vercel",
    desc: "Full-stack Kanban-based task management platform with JWT auth, drag-and-drop workflows, and TanStack Query for real-time sync.",
    link: "https://task-flow-eta-wheat.vercel.app/auth"
  },
  {
    title: "Expense Tracker",
    meta: "ReactJS · JavaScript · React Hooks · Tailwind CSS · Git",
    desc: "Responsive expense tracking web app with Chart.js visualization, real-time balance monitoring, and persistent local storage.",
    link: "https://aryanbhardwaj19.github.io/Expense_Tracker/"
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