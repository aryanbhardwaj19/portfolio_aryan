import { useState, useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Initial entrance animation for logo and label
    gsap.to(".loader-logo-wrap", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.1
    });

    let current = 0;
    const timer = setInterval(() => {
      current += Math.ceil(Math.random() * 5);
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          const tl = gsap.timeline({
            onComplete: () => setDone(true),
          });
          tl.to(".loader-content", {
            opacity: 0,
            y: -30,
            duration: 0.6,
            ease: "power3.inOut",
          })
          .to(".loader-wrapper", {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          }, "-=0.2");
        }, 600);
      }
      setCount(current);
    }, 45);

    return () => clearInterval(timer);
  }, []);

  if (done) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-content flex flex-col items-center">
        
        {/* UD Logo */}
        <div className="loader-logo-wrap">
          <span className="loader-logo-text">UD<span className="loader-logo-dot">.</span></span>
        </div>

        {/* Loading Percentage */}
        <div className="loader-percent font-black">{count}</div>
        
        {/* Label */}
        <div className="loader-label">Portfolio Upgrading</div>
      </div>
      
      {/* Bottom Progress Bar */}
      <div className="loader-bar" style={{ width: `${count}%` }} />
    </div>
  );
};

export default Loader;