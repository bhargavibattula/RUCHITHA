import { profile } from "@/data/resume";
import { GitFork, Globe, Mail, Sparkles } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full overflow-hidden bg-background pt-24 pb-24 sm:pb-32">
      <div className="container-px mx-auto max-w-6xl relative z-20">
        
        {/* Footer Card */}
        <div className="rounded-[2.5rem] glass p-8 sm:p-12 md:p-16 shadow-2xl border border-[--color-border]/50 bg-background/50 backdrop-blur-xl relative z-20">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
            
            {/* Left side */}
            <div className="flex flex-col max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-primary to-violet-accent text-white shadow-lg shadow-violet-primary/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[--color-foreground]">
                  Ruchitha
                </span>
              </div>
              <p className="text-sm text-[--color-muted] leading-relaxed mb-8">
                Building production AI systems, RAG pipelines, and full-stack applications. Turning coursework into shipped products.
              </p>
              
              <div className="flex items-center gap-5">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[--color-muted] hover:text-violet-accent transition-colors" aria-label="GitHub">
                  <GitFork className="h-5 w-5" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[--color-muted] hover:text-violet-accent transition-colors" aria-label="LinkedIn">
                  <Globe className="h-5 w-5" />
                </a>
                <a href={`mailto:${profile.email}`} className="text-[--color-muted] hover:text-violet-accent transition-colors" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right side columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-[--color-foreground] mb-2 text-sm tracking-wide">Product</h4>
                <a href="#about" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">About</a>
                <a href="#projects" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">Projects</a>
                <a href="#skills" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">Skills</a>
                <a href="#experience" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">Experience</a>
              </div>
              
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-[--color-foreground] mb-2 text-sm tracking-wide">Resources</h4>
                <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">Resume PDF</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">Source Code</a>
                <a href="https://open-vsx.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">VS Code Ext</a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-[--color-foreground] mb-2 text-sm tracking-wide">Connect</h4>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">LinkedIn</a>
                <a href={`mailto:${profile.email}`} className="text-sm text-[--color-muted] hover:text-violet-accent transition-colors">Email</a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[--color-border]/60 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[--color-muted]">
              © {year} Ruchitha Gedela. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-[--color-muted] hover:text-violet-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-[--color-muted] hover:text-violet-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-[-1%] sm:bottom-[-3%] left-0 right-0 w-full overflow-hidden flex justify-center pointer-events-none z-0">
        <h1 className="text-[13vw] sm:text-[11vw] font-[family-name:var(--font-display)] font-bold leading-[0.8] tracking-tighter whitespace-nowrap select-none bg-gradient-to-b from-foreground/15 dark:from-foreground/10 to-transparent bg-clip-text text-transparent">
          Ruchitha Gedela
        </h1>
      </div>
    </footer>
  );
}
