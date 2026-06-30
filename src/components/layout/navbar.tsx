"use client";

import { useEffect, useState } from "react";
import { Command } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-px mx-auto flex max-w-6xl items-center justify-between">
        <nav
          className={cn(
            "flex w-full items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-lg" : "glass"
          )}
        >
          <button
            type="button"
            data-cursor-hover
            onClick={() => scrollTo("home")}
            className="font-[family-name:var(--font-display)] text-lg tracking-tight gradient-text cursor-pointer"
          >
            RG
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                data-cursor-hover
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 cursor-pointer",
                  active === item.id
                    ? "text-[--color-violet-accent]"
                    : "text-[--color-foreground]/70 hover:text-[--color-foreground]"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              data-cursor-hover
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                document.dispatchEvent(event);
              }}
              className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-[--color-muted] glass hover:border-[--color-violet-accent] sm:flex"
              aria-label="Open command menu"
            >
              <Command className="h-3 w-3" />
              <span>K</span>
            </button>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
