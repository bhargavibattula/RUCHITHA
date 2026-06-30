"use client";

import { useState } from "react";
import { ChevronDown, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { experience } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Experience() {
  const ref = useScrollReveal();
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" ref={ref} className="relative z-10 py-32">
      <div className="container-px mx-auto max-w-4xl">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent]">
            Experience
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Where the work happened.
          </h2>
        </div>

        <div className="relative pl-10 sm:pl-16">
          <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-gradient-to-b from-violet-primary via-violet-accent to-transparent sm:block" />

          {experience.map((job) => {
            const isOpen = openId === job.id;
            return (
              <div key={job.id} data-reveal className="relative mb-6 sm:pl-16">
                <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full glass-strong sm:flex">
                  <Building2 className="h-5 w-5 text-[--color-violet-accent]" />
                </div>

                <button
                  type="button"
                  data-cursor-hover
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  className="w-full rounded-3xl glass p-6 text-left transition-all duration-300 hover:border-[--color-violet-accent] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{job.role}</h3>
                      <p className="mt-1 text-sm text-[--color-violet-accent]">{job.company}</p>
                      <p className="mt-1 text-xs text-[--color-muted]">
                        {job.location} • {job.period}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 text-[--color-muted] transition-transform duration-300",
                        isOpen && "rotate-180 text-[--color-violet-accent]"
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-500 ease-in-out",
                      isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="min-h-0">
                      <ul className="space-y-3 text-sm leading-relaxed text-[--color-muted]">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-violet-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {job.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-xl bg-violet-accent/5 p-3 text-center">
                            <div className="font-[family-name:var(--font-display)] text-xl gradient-text">
                              {metric.value}
                            </div>
                            <div className="mt-1 text-[10px] leading-tight text-[--color-muted]">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
