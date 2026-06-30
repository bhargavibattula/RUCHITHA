"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";
import { Counter } from "@/components/ui/counter";
import { profile, stats } from "@/data/resume";

export function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="relative z-10 py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div data-reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent]">
              About
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl">
              Builds things that{" "}
              <span className="gradient-text">ship</span>, not just things
              that demo.
            </h2>

            <div className="mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl glass relative">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-primary/20 via-transparent to-fuchsia-end/20">
                  <span className="font-[family-name:var(--font-display)] text-7xl text-[--color-violet-accent]/40">
                    RG
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <p data-reveal className="text-lg leading-relaxed text-[--color-muted] sm:text-xl">
              {profile.longSummary}
            </p>

            <div data-reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl glass p-5">
                  <div className="font-[family-name:var(--font-display)] text-3xl tracking-tight gradient-text">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs leading-snug text-[--color-muted]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div data-reveal className="flex flex-wrap gap-3 text-sm text-[--color-muted]">
              <span className="rounded-full glass px-4 py-2">📍 {profile.location}</span>
              <span className="rounded-full glass px-4 py-2">🎓 B.Tech CSE — AI &amp; ML</span>
              <span className="rounded-full glass px-4 py-2">🚀 Open to internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
