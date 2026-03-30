import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    text: <>You Miss 100% of the Shots<br className="quote-br" /> You Don't Take.</>,
    author: "Wayne Gretzky",
  },
  {
    text: <>Success usually comes to those who are too busy<br className="quote-br" /> to be looking for it.</>,
    author: "Henry David Thoreau",
  },
  {
    text: <>If something is important enough, even if the odds<br className="quote-br" /> are against you, you should still do it.</>,
    author: "Elon Musk",
  },
];

const Quote = () => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quote-wrapper", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".quote-wrapper", start: "top 88%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="quote-strip" ref={ref} aria-label="Favourite quotes">
      <div className="quote-inner quote-wrapper">
        <span className="quote-mark">"</span>
        <div className="quote-slider-viewport">
          {quotes.map((q, i) => (
            <div 
              key={i} 
              className={`quote-slide ${i === currentIndex ? "active" : ""}`}
            >
              <blockquote className="quote-text">
                {q.text}
              </blockquote>
              <p className="quote-attr">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quote;
