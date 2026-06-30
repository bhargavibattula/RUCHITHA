"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function Counter({ value, suffix = "", duration = 1.6 }: CounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            function tick(now: number) {
              const elapsed = (now - start) / 1000;
              const progress = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, reducedMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
