"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/resume";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    // Defer initialization slightly to ensure DOM layout has fully settled
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
          if (!scrollRef.current || !pinRef.current || !containerRef.current) return;

          const scrollContainer = scrollRef.current;
          
          // Pin the inner section and translate the track horizontally, triggering on the outer section container
          gsap.to(scrollContainer, {
            xPercent: -100,
            x: () => window.innerWidth,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=4000",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            }
          });

          // CTA fade in at the end
          gsap.from(".cta-elements", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "+=3000",
              end: "+=4000",
              scrub: true,
            }
          });
        });

        mm.add("(max-width: 767px)", () => {
          if (!containerRef.current) return;
          gsap.from(".mobile-reveal", {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            }
          });
        });
        
        // Force refresh after loading is settled
        ScrollTrigger.refresh();
      }, containerRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="relative z-10 w-full overflow-hidden bg-background"
    >
      <div ref={pinRef} className="h-auto md:h-screen w-full relative flex flex-col md:flex-row items-center overflow-hidden bg-background">
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.05]" />
        </div>

        {/* Horizontal Track */}
        <div 
          ref={scrollRef} 
          className="relative z-10 flex flex-col md:flex-row items-center w-full md:w-max h-full md:px-[50vw] px-6 py-32 md:py-0 gap-8 md:gap-16 whitespace-normal md:whitespace-nowrap"
        >
          {/* Mobile intro (hidden on desktop) */}
          <div className="md:hidden w-full mb-8 mobile-reveal shrink-0">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent] mb-4">
              Let&apos;s Connect
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter mobile-reveal shrink-0 whitespace-nowrap">
            LET&apos;S BUILD
          </h2>

          <div className="bg-violet-accent text-white px-8 md:px-16 py-4 md:py-6 rounded-[3rem] md:-rotate-3 font-[family-name:var(--font-display)] text-5xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter mobile-reveal shadow-[0_0_80px_rgba(124,58,237,0.4)] shrink-0 whitespace-nowrap">
            TOGETHER
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter text-transparent stroke-text mobile-reveal hidden md:block shrink-0 whitespace-nowrap">
            — AVAILABLE FOR WORK —
          </h2>
          
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter mobile-reveal hidden md:block shrink-0 whitespace-nowrap">
            CONTACT —
          </h2>

          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter text-violet-accent mobile-reveal hidden md:block shrink-0 whitespace-nowrap">
            {profile.name.toUpperCase()} —
          </h2>

          {/* Final CTA Frame */}
          <div className="flex flex-col items-start gap-8 md:gap-12 md:ml-16 w-full md:w-auto mobile-reveal shrink-0">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-[9rem] leading-none tracking-tighter cta-elements whitespace-nowrap">
              LET&apos;S CONNECT
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 cta-elements w-full md:w-auto">
              <a
                href={`mailto:${profile.email}`}
                data-cursor-hover
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 md:px-14 md:py-7 rounded-full glass-strong border border-violet-accent/50 hover:border-violet-accent overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_-15px_rgba(124,58,237,0.6)] w-full sm:w-auto text-xl md:text-3xl font-[family-name:var(--font-display)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Mail className="relative z-10 w-6 h-6 md:w-8 md:h-8" />
                <span className="relative z-10 tracking-wide">
                  Send an Email
                </span>
                <ArrowRight className="relative z-10 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              <p className="text-xl md:text-3xl font-[family-name:var(--font-display)] text-[--color-muted] px-4">
                or
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full glass hover:bg-violet-accent hover:text-black transition-all duration-300 border border-[--color-border]/30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full glass hover:bg-violet-accent hover:text-black transition-all duration-300 border border-[--color-border]/30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px var(--color-foreground);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
