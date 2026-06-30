"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, GitFork, ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { projects } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(4px)`;
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
      className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-[border-color,box-shadow] duration-300 hover:border-[--color-violet-accent]/60 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]"
      style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease" }}
    >
      {/* Project image */}
      <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-violet-primary/15 via-violet-accent/5 to-fuchsia-end/15">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-[family-name:var(--font-display)] text-5xl text-[--color-violet-accent]/25">
                {project.title.charAt(0)}
              </div>
            </div>
          </div>
        )}
        {/* Spotlight on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.12), transparent 70%)"
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[--color-violet-accent]">
            {project.subtitle}
          </p>
          <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-2xl tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[--color-muted]">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-violet-accent/5 px-3 py-2.5 text-center"
            >
              <div className="font-[family-name:var(--font-display)] text-lg gradient-text">
                {m.value}
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-[--color-muted]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-violet-primary/10 px-3 py-1 text-xs font-medium text-violet-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <button
          type="button"
          data-cursor-hover
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs text-[--color-muted] transition-colors hover:text-[--color-violet-accent]"
        >
          {expanded ? "Less detail" : "More detail"}
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform duration-300", expanded && "rotate-180")}
          />
        </button>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-500 ease-in-out text-sm leading-relaxed text-[--color-muted]",
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0 space-y-3">
            <p>{project.longDescription}</p>
            <ul className="space-y-1.5 mt-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium transition-colors hover:border-[--color-violet-accent] hover:text-[--color-violet-accent]"
          >
            <GitFork className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-primary to-violet-accent px-4 py-2 text-xs font-medium text-white shadow-[0_4px_20px_-6px_rgba(124,58,237,0.4)] transition-shadow hover:shadow-[0_6px_24px_-4px_rgba(168,85,247,0.5)]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {project.links.liveLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="relative z-10 py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent]">
            Projects
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Shipped. Not demoed.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-[--color-muted]">
            Production systems with real users, real metrics, and real constraints.
          </p>
        </div>

        <div data-reveal className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
