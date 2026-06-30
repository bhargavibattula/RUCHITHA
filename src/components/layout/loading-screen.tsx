"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false);
      return;
    }

    let frame: number;
    const start = performance.now();
    const duration = 1100;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 250);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
      aria-hidden="true"
    >
      <div className="font-[family-name:var(--font-display)] text-3xl tracking-tight gradient-text">
        Ruchitha Gedela
      </div>
      <div className="mt-6 h-px w-40 overflow-hidden bg-[--color-border]">
        <div
          className="h-full bg-gradient-to-r from-violet-primary to-fuchsia-end transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
