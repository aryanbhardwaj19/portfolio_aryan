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
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  DevTo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ct-link-icon">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
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
    href: "https://www.linkedin.com/in/utkarsh-dubey-503a39291/",
    icon: Icons.LinkedIn,
    hover: "Let's build something together →",
  },
  {
    label: "GitHub",
    href: "https://github.com/moneyutkarsh",
    icon: Icons.GitHub,
    hover: "All my code lives here →",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/money_utkarsh/",
    icon: Icons.LeetCode,
    hover: "I grind problems daily →",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Icons.Instagram,
    hover: "Behind the scenes life →",
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
          <a href="mailto:moneyutkarsh@gmail.com" className="ct-info-card" tabIndex={0}>
            <span className="ct-icon-wrap">{Icons.Email}</span>
            <span className="ct-info-label">Email</span>
            <span className="ct-info-value">moneyutkarsh@gmail.com</span>
            <div className="ct-hover-reveal" aria-hidden="true">
              <span className="ct-hover-tagline">100% chance I read it ✉️</span>
              <span className="ct-hover-val">moneyutkarsh@gmail.com</span>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+916394398355" className="ct-info-card" tabIndex={0}>
            <span className="ct-icon-wrap">{Icons.Phone}</span>
            <span className="ct-info-label">Phone</span>
            <span className="ct-info-value">+91 63943 98355</span>
            <div className="ct-hover-reveal" aria-hidden="true">
              <span className="ct-hover-tagline">90% chance I don't pickup 📵</span>
              <span className="ct-hover-val">+91 63943 98355</span>
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
            <span className="ct-info-value">Bengaluru, India</span>
            <div className="ct-hover-reveal" aria-hidden="true">
              <span className="ct-hover-tagline">Yes, it's always hot here 🥵</span>
              <span className="ct-hover-val">GMT+5:30 · Open to remote worldwide 🌏</span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <p className="ct-footer">
        © 2025 Utkarsh Dubey — Built with React, Three.js &amp; GSAP
      </p>
    </section>
  );
};

export default Contact;