"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { achievements } from "@/data/resume";

export function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" ref={ref} className="relative z-10 py-32">
      <div className="container-px mx-auto max-w-5xl">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent]">
            Achievements
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            By the numbers.
          </h2>
        </div>

        <div data-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <div
              key={item.label}
              data-cursor-hover
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:border-[--color-violet-accent]/60 hover:shadow-[0_0_30px_-8px_rgba(124,58,237,0.3)]"
              style={{
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.08), transparent 60%)" }}
              />
              <p className="text-xs font-medium uppercase tracking-wider text-[--color-muted]">
                {item.label}
              </p>
              <div className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none gradient-text">
                {item.value}
              </div>
              <p className="mt-3 text-sm leading-snug text-[--color-muted]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
