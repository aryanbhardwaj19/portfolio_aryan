import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ticker for ScrollTrigger compatibility
    lenis.on("scroll", () => {
      ScrollTrigger.update();
      // Periodically refresh if needed, or keep it light
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Initial refresh after a small delay to handle lazy/dynamic content
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      lenis.destroy();
      clearTimeout(timeout);
    };
  }, []);

  return null;
};

export default SmoothScroll;