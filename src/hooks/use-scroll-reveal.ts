"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
};

/**
 * Attaches a scroll-triggered reveal animation to every direct child
 * carrying [data-reveal] inside the returned ref's element.
 */
export function useScrollReveal(options: RevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const targets = ref.current.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const { y = 36, duration = 0.9, stagger = 0.1, ease = "power3.out" } = options;

    const ctx = gsap.context(() => {
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration,
            ease,
            stagger,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return ref;
}
