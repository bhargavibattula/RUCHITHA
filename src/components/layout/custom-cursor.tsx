"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Replaces the default cursor with a small dot + trailing ring on fine-pointer
 * devices. Expands over interactive elements tagged with [data-cursor-hover].
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("cursor-ready");

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    }

    function handleEnter(e: Event) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        ringRef.current?.classList.add("scale-150", "bg-violet-accent/10");
      }
    }
    function handleLeave(e: Event) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        ringRef.current?.classList.remove("scale-150", "bg-violet-accent/10");
      }
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);
    raf = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-accent"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-accent/50 transition-[transform,background-color] duration-200"
        aria-hidden="true"
      />
    </>
  );
}
