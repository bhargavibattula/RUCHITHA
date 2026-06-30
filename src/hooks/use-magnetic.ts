"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "./use-reduced-motion";

/**
 * Magnetic hover: the element subtly follows the cursor within its bounds,
 * then springs back on mouse leave. Disabled on touch devices and when
 * reduced motion is requested.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    function handleLeave() {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, reducedMotion]);

  return ref;
}
