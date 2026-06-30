"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes Lenis smooth scrolling for the whole document.
 * Skips entirely if the user prefers reduced motion.
 */
export function useLenis() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    // Set up Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Sync Lenis with any changes in the document body's height (like GSAP pinning spacers)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // Sync ScrollTrigger's refresh to resize Lenis (crucial for layout heights when elements pin)
    const handleScrollTriggerRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", handleScrollTriggerRefresh);

    // Wire GSAP ticker to drive Lenis raf
    const updatePhysics = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updatePhysics);
    gsap.ticker.lagSmoothing(0);

    // Resize Lenis on window load event
    const handleWindowLoad = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleWindowLoad);

    // Periodically resize Lenis during the first few seconds of page lifecycle
    // to account for dynamic content, hydration shifts, or lazy-loaded assets.
    const intervals = [200, 500, 1000, 2000, 4000];
    const timers = intervals.map((delay) =>
      setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, delay)
    );

    return () => {
      gsap.ticker.remove(updatePhysics);
      ScrollTrigger.removeEventListener("refresh", handleScrollTriggerRefresh);
      window.removeEventListener("load", handleWindowLoad);
      resizeObserver.disconnect();
      timers.forEach((t) => clearTimeout(t));
      lenis.destroy();
    };
  }, [reducedMotion]);
}
