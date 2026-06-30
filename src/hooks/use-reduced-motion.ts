"use client";

import { useEffect, useState } from "react";

/**
 * Returns true if the user has requested reduced motion at the OS level.
 * All animation hooks should check this before running GSAP/Lenis effects.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}
