"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowDown, GitFork, Globe, Mail, FileDown, BrainCircuit, Network, Cpu, Database, Bot, Workflow, Binary, GitGraph, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { profile } from "@/data/resume";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  // Animated role switcher
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Hero entrance: character reveal on name, stagger fade on the rest
  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const chars = nameRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.fromTo(
          chars,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.03, delay: 0.2 }
        );
      }

      gsap.fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.9 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const name = profile.name;

  const FloatingIcons = [BrainCircuit, Network, Cpu, Database, Bot, Workflow, Binary, GitGraph, Sparkles, Layers, BrainCircuit, Network, Cpu, Database];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-6 pt-28 text-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-100 dark:opacity-70" />
        
        {/* Floating AI/ML Icons */}
        {FloatingIcons.map((Icon, i) => {
          // Push icons to the left (5-25%) and right (75-95%) edges to avoid the center text
          const isLeft = i % 2 === 0;
          const top = `${10 + (i * 27) % 80}%`;
          const left = isLeft ? `${5 + (i * 17) % 20}%` : `${75 + (i * 17) % 20}%`;
          const animationDelay = `${(i * 1.2) % 5}s`;
          const animationDuration = `${20 + (i % 5) * 5}s`;
          
          return (
            <div
              key={`float-icon-${i}`}
              className="absolute text-[--color-muted] opacity-[0.25] dark:opacity-[0.2]"
              style={{
                top,
                left,
                animation: `float-slow ${animationDuration} ease-in-out ${animationDelay} infinite alternate`,
              }}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <p
          data-hero-fade
          className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-[--color-muted]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-accent" />
          </span>
          Open to AI/ML internships
        </p>

        <h1
          ref={nameRef}
          className="overflow-hidden font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,7.5rem)] leading-[0.95] tracking-tight"
        >
          {name.split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div data-hero-fade className="mt-6 h-9 overflow-hidden">
          <p
            key={roleIndex}
            className="animate-[float_0s] text-xl text-[--color-muted] sm:text-2xl"
            style={{ animation: "fadeSlideIn 0.5s ease forwards" }}
          >
            <span className="gradient-text font-medium">{profile.roles[roleIndex]}</span>
          </p>
        </div>

        <p
          data-hero-fade
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-[--color-muted] sm:text-lg"
        >
          {profile.summary}
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            data-cursor-hover
            onClick={() => window.open(profile.resumeFile, "_blank")}
          >
            <FileDown className="h-4 w-4" />
            Resume
          </Button>
          <Button
            variant="secondary"
            size="md"
            data-cursor-hover
            onClick={() => window.open(profile.github, "_blank", "noopener,noreferrer")}
          >
            <GitFork className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="secondary"
            size="md"
            data-cursor-hover
            onClick={() => window.open(profile.linkedin, "_blank", "noopener,noreferrer")}
          >
            <Globe className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            variant="ghost"
            size="md"
            data-cursor-hover
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="h-4 w-4" />
            Contact
          </Button>
        </div>

        <button
          type="button"
          data-cursor-hover
          aria-label="Scroll to about section"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[--color-muted] transition-colors hover:text-[--color-violet-accent]"
        >
          <ArrowDown className="h-5 w-5" />
        </button>

        <style jsx>{`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float-slow {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(15px, -15px) rotate(45deg); }
            100% { transform: translate(-10px, 10px) rotate(-45deg); }
          }
        `}</style>
      </div>
    </section>
  );
}
