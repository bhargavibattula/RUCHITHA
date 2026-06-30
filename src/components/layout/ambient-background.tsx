"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Fixed full-viewport ambient background: floating violet gradient blobs,
 * a faint grid, noise texture, and a radial light that follows the cursor.
 * Sits behind all content at z-0; sections should be relative/z-10+.
 */
export function AmbientBackground() {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    function handleMove(e: MouseEvent) {
      if (!lightRef.current) return;
      lightRef.current.style.transform = `translate(${e.clientX - 320}px, ${e.clientY - 320}px)`;
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden noise" aria-hidden="true">
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Mouse-reactive light */}
      <div
        ref={lightRef}
        className="absolute h-[640px] w-[640px] rounded-full opacity-[0.07] blur-3xl transition-transform duration-300 ease-out will-change-transform"
        style={{
          background:
            "radial-gradient(circle, var(--color-violet-accent), transparent 70%)",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[--color-violet-primary] opacity-[0.10] blur-[100px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[--color-fuchsia-end] opacity-[0.08] blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-[--color-violet-secondary] opacity-[0.09] blur-[110px] animate-float-slow" />
    </div>
  );
}
