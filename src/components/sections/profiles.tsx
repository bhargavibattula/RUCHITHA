"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { profile } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom GitHub SVG Icon
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Custom LinkedIn SVG Icon
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom LeetCode SVG Icon
function LeetcodeIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0-.962-2.35h-3.928a.344.344 0 0 1-.343-.344V1.718a.344.344 0 0 1 .343-.344h3.928c.76 0 1.375-.615 1.375-1.375S14.243 0 13.483 0zm-8.835 15.656a1.375 1.375 0 0 0-1.945 0L.414 17.6a1.375 1.375 0 0 0 0 1.945l9.777 9.778a1.374 1.374 0 0 0 1.945 0l1.945-1.945a1.375 1.375 0 0 0 0-1.945l-9.777-9.778z"/>
    </svg>
  );
}

const codingProfiles = [
  {
    name: "GitHub",
    url: profile.github,
    icon: GithubIcon,
    description: "Open source contributions, projects, and codebase architecture.",
    color: "hover:border-gray-500/50 dark:hover:border-gray-400/30",
    shadow: "hover:shadow-[0_0_30px_-10px_rgba(156,163,175,0.3)]",
    iconColor: "text-foreground/70 group-hover:text-foreground",
  },
  {
    name: "LinkedIn",
    url: profile.linkedin,
    icon: LinkedinIcon,
    description: "Professional network, experience updates, and tech community.",
    color: "hover:border-[#0A66C2]/50 dark:hover:border-[#0A66C2]/30",
    shadow: "hover:shadow-[0_0_30px_-10px_rgba(10,102,194,0.3)]",
    iconColor: "text-[#0A66C2] dark:text-[#3b82f6] opacity-80 group-hover:opacity-100",
  },
  {
    name: "LeetCode",
    url: profile.leetcode,
    icon: LeetcodeIcon,
    description: "Algorithmic problem solving, data structures, and competitive coding.",
    color: "hover:border-[#FFA116]/50 dark:hover:border-[#FFA116]/30",
    shadow: "hover:shadow-[0_0_30px_-10px_rgba(255,161,22,0.3)]",
    iconColor: "text-[#FFA116] opacity-80 group-hover:opacity-100",
  },
];

export function Profiles() {
  const ref = useScrollReveal();

  return (
    <section id="profiles" ref={ref} className="relative z-10 py-24 sm:py-32 overflow-hidden">
      <div className="container-px mx-auto max-w-5xl">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent]">
            Connect & Explore
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Digital Presence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfiles.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                data-reveal
                className={cn(
                  "group relative flex flex-col justify-between h-full p-8 rounded-[2rem] glass transition-all duration-500 hover:-translate-y-2 border border-[--color-border]/50",
                  platform.color,
                  platform.shadow
                )}
                style={{
                  animationDelay: `${i * 100}ms`,
                  animation: `fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms both`,
                }}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center p-3 shadow-sm border border-[--color-border]/30">
                    <Icon className={cn("w-full h-full object-contain transition-transform duration-500 group-hover:scale-110", platform.iconColor)} />
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[--color-muted]/10 group-hover:bg-[--color-foreground] transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[--color-muted] group-hover:text-background transition-colors duration-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-3 group-hover:text-[--color-foreground] transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
