"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Sparkles,
  GraduationCap,
  Award,
  Mail,
  GitFork,
  Globe,
  FileDown,
} from "lucide-react";
import { profile } from "@/data/resume";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function goTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function openExternal(url: string) {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <Command
        className="w-full max-w-md overflow-hidden rounded-2xl glass-strong shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        label="Command menu"
      >
        <div className="flex items-center gap-2 border-b border-[--color-border] px-4 py-3">
          <span className="text-xs text-[--color-muted]">Jump to</span>
        </div>
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[--color-muted]"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-[--color-muted]">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigate" className="text-xs text-[--color-muted] px-2 py-1.5">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Command.Item
                key={id}
                onSelect={() => goTo(id)}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors data-[selected=true]:bg-violet-accent/10"
              >
                <Icon className="h-4 w-4 text-violet-accent" />
                {label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Links" className="text-xs text-[--color-muted] px-2 py-1.5">
            <Command.Item
              onSelect={() => openExternal(profile.github)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors data-[selected=true]:bg-violet-accent/10"
            >
              <GitFork className="h-4 w-4 text-violet-accent" />
              Open GitHub
            </Command.Item>
            <Command.Item
              onSelect={() => openExternal(profile.linkedin)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors data-[selected=true]:bg-violet-accent/10"
            >
              <Globe className="h-4 w-4 text-violet-accent" />
              Open LinkedIn
            </Command.Item>
            <Command.Item
              onSelect={() => openExternal(profile.resumeFile)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors data-[selected=true]:bg-violet-accent/10"
            >
              <FileDown className="h-4 w-4 text-violet-accent" />
              Download Résumé
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t border-[--color-border] px-4 py-2 text-[10px] text-[--color-muted]">
          <span>↑↓ to navigate</span>
          <span>↵ to select</span>
          <span>esc to close</span>
        </div>
      </Command>
    </div>
  );
}
