import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── SVG Icons ─────────────────────────────────────────────── */
const Icons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M20.447 20.452H16.89v-5.569c0-1.327-.024-3.036-1.851-3.036-1.853 0-2.137 1.446-2.137 2.94v5.665H9.344V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.979 1.979 0 1 1 0-3.958 1.979 1.979 0 0 1 0 3.958zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  LeetCode: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  ),
  Codeforces: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  Phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
};

/* ─── Link data ──────────────────────────────────────────────── */
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryanbhardwaj19",
    icon: Icons.LinkedIn,
    hover: "Let's connect and build →",
  },
  {
    label: "GitHub",
    href: "https://github.com/aryanbhardwaj19",
    icon: Icons.GitHub,
    hover: "All my code lives here →",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/aryanbh19/",
    icon: Icons.LeetCode,
    hover: "Living the grind →",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/aryanbh_19",
    icon: Icons.Codeforces,
    hover: "Competitive programming →",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading words animate in
      gsap.from(".ct-heading-word", {
        opacity: 0, y: 50, duration: 1, stagger: 0.1, ease: "power4.out",
        scrollTrigger: { trigger: ".ct-heading", start: "top 90%" },
      });

      // Social links stagger in
      gsap.from(".ct-social-card", {
        opacity: 0, x: -24, duration: 0.7, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-social-grid", start: "top 88%" },
      });

      // Info cards
      gsap.from(".ct-info-card", {
        opacity: 0, y: 20, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-info", start: "top 88%" },
      });

      // Footer
      gsap.from(".ct-footer", {
        opacity: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: ".ct-footer", start: "top 97%" },
      });

      // Floating icon animations — each icon gently bobs
      const icons = document.querySelectorAll(".ct-link-icon");
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: -5,
          duration: 1.6 + (i % 3) * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ct-section" id="contact" ref={sectionRef}>

      {/* ── Section header ── */}
      <div className="ct-header-row">
        <p className="ct-eyebrow">Get in touch</p>
        <h2 className="ct-heading" aria-label="Let's Work Together">
          {["Let's", "Work", "Together."].map((w, i) => (
            <span className="ct-heading-word" key={i}>
              {w === "Together." ? <em>{w}</em> : w}
            </span>
          ))}
        </h2>
      </div>

      {/* ── Main layout ── */}
      <div className="ct-layout">

        {/* Social 2×2 grid */}
        <div className="ct-left">
          <div className="ct-social-grid">
            {socialLinks.map(({ label, href, icon, hover }) => (
              <a key={label} href={href} className="ct-social-card"
                target="_blank" rel="noopener noreferrer">
                <span className="ct-icon-wrap">{icon}</span>
                <span className="ct-social-name">{label}</span>
                <span className="ct-social-hover-text">{hover}</span>
                <span className="ct-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Info cards */}
        <div className="ct-info">

          {/* Email */}
          <a href="mailto:aryan.ixp@gmail.com" className="ct-info-card" tabIndex={0}>
            <span className="ct-icon-wrap">{Icons.Email}</span>
            <span className="ct-info-label">Email</span>
            <span className="ct-info-value">aryan.ixp@gmail.com</span>
            <div className="ct-hover-reveal" aria-hidden="true">
              <span className="ct-hover-tagline">100% chance I read it ✉️</span>
              <span className="ct-hover-val">aryan.ixp@gmail.com</span>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+919771995141" className="ct-info-card" tabIndex={0}>
            <span className="ct-icon-wrap">{Icons.Phone}</span>
            <span className="ct-info-label">Phone</span>
            <span className="ct-info-value">+91 97719 95141</span>
            <div className="ct-hover-reveal" aria-hidden="true">
              <span className="ct-hover-tagline">Drop me a text first 📱</span>
              <span className="ct-hover-val">+91 97719 95141</span>
            </div>
          </a>

          {/* Location */}
          <div className="ct-info-card" tabIndex={0}>
            <span className="ct-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </span>
            <span className="ct-info-label">Location</span>
            <span className="ct-info-value">Bangalore, Karnataka</span>
            <div className="ct-hover-reveal" aria-hidden="true">
              <span className="ct-hover-tagline">Garden City vibes 🌿</span>
              <span className="ct-hover-val">GMT+5:30 · Open to remote worldwide 🌏</span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <p className="ct-footer">
        © 2026 Aryan Bhardwaj — Built with React, Three.js &amp; GSAP
      </p>
    </section>
  );
};

export default Contact;