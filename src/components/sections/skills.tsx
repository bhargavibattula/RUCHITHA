"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Database, Network, Box, Globe, Cpu, Workflow, Search } from "lucide-react";

type Skill = {
  id: string;
  sys: string;
  name: string;
  category: string;
  color: string;
  slug?: string;
  customUrl?: string;
  invertDark?: boolean;
  LucideIcon?: React.ElementType;
};

const skillCards: Skill[] = [
  // AI / ML
  { id: "ID_LLM", sys: "SYS.AI", name: "LLMs / RAG", category: "AI / ML", color: "bg-emerald-400", customUrl: "/openai.svg", invertDark: true },
  { id: "ID_LCH", sys: "SYS.AI", name: "LangChain", category: "AI / ML", color: "bg-green-500", slug: "langchain" },
  { id: "ID_CRW", sys: "SYS.AI", name: "CrewAI", category: "AI / ML", color: "bg-orange-500", LucideIcon: Workflow },
  { id: "ID_PYT", sys: "SYS.ML", name: "PyTorch", category: "AI / ML", color: "bg-red-500", slug: "pytorch" },
  { id: "ID_SCI", sys: "SYS.ML", name: "Scikit-Learn", category: "AI / ML", color: "bg-orange-400", slug: "scikitlearn" },
  
  // LANGUAGES
  { id: "ID_PY", sys: "SYS.LNG", name: "Python", category: "LANGUAGES", color: "bg-yellow-400", slug: "python" },
  { id: "ID_CPP", sys: "SYS.LNG", name: "C++", category: "LANGUAGES", color: "bg-blue-600", slug: "cplusplus" },
  { id: "ID_C", sys: "SYS.LNG", name: "C", category: "LANGUAGES", color: "bg-blue-400", slug: "c" },
  { id: "ID_TS", sys: "SYS.LNG", name: "TypeScript", category: "LANGUAGES", color: "bg-blue-500", slug: "typescript" },
  { id: "ID_SQL", sys: "SYS.LNG", name: "SQL", category: "LANGUAGES", color: "bg-blue-300", slug: "postgresql" },

  // TOOLS
  { id: "ID_GIT", sys: "SYS.TOL", name: "Git", category: "TOOLS", color: "bg-orange-600", slug: "git" },
  { id: "ID_GH", sys: "SYS.TOL", name: "GitHub", category: "TOOLS", color: "bg-gray-400", slug: "github", invertDark: true },
  { id: "ID_DOC", sys: "SYS.TOL", name: "Docker", category: "TOOLS", color: "bg-blue-500", slug: "docker" },
  { id: "ID_API", sys: "SYS.TOL", name: "REST APIs", category: "TOOLS", color: "bg-green-400", LucideIcon: Network },

  // DATABASES
  { id: "ID_SUP", sys: "SYS.DB", name: "Supabase", category: "DATABASES", color: "bg-emerald-500", slug: "supabase" },
  { id: "ID_PAN", sys: "SYS.DB", name: "Pandas", category: "DATABASES", color: "bg-indigo-500", slug: "pandas", invertDark: true },
  { id: "ID_NUM", sys: "SYS.DB", name: "NumPy", category: "DATABASES", color: "bg-cyan-500", slug: "numpy" },
  { id: "ID_CHR", sys: "SYS.DB", name: "ChromaDB", category: "DATABASES", color: "bg-rose-500", LucideIcon: Database },
  
  // CORE CS
  { id: "ID_DSA", sys: "SYS.CS", name: "Algorithms", category: "CORE CS", color: "bg-violet-400", LucideIcon: Cpu },
  { id: "ID_OOP", sys: "SYS.CS", name: "OOP", category: "CORE CS", color: "bg-pink-400", LucideIcon: Box },
  { id: "ID_DBM", sys: "SYS.CS", name: "DBMS", category: "CORE CS", color: "bg-teal-400", LucideIcon: Database },
  { id: "ID_NET", sys: "SYS.CS", name: "Networks", category: "CORE CS", color: "bg-sky-400", LucideIcon: Globe },
];

const categories = ["ALL", "AI / ML", "LANGUAGES", "DATABASES", "TOOLS", "CORE CS"];

export function Skills() {
  const ref = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = skillCards.filter(card => {
    const matchesCategory = activeFilter === "ALL" || card.category === activeFilter;
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.sys.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" ref={ref} className="relative z-10 py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div data-reveal className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm tracking-widest text-[--color-violet-accent]">
              // 03 — Tech Arsenal
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Interactive Skill Deck
          </h2>
          <p className="max-w-2xl text-base text-[--color-muted] leading-relaxed">
            A custom inventory deck of technology cards. Filter the catalog, search for specific tools, and review my core stack across machine learning, software engineering, and infrastructure.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div data-reveal className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[--color-muted]" />
            </div>
            <input
              type="text"
              placeholder="SCAN INVENTORY FOR TECH CARD..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[--color-muted]/5 dark:bg-white/5 border border-[--color-border]/50 rounded-full text-sm font-mono tracking-wide focus:outline-none focus:border-[--color-violet-accent] transition-colors placeholder:text-[--color-muted]/70"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-start w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border",
                  activeFilter === category 
                    ? "bg-violet-primary/20 border-violet-primary text-violet-primary dark:text-violet-300 shadow-[0_0_15px_rgba(124,58,237,0.2)]" 
                    : "bg-transparent border-[--color-border]/50 text-[--color-muted] hover:border-[--color-violet-accent] hover:text-[--color-foreground]"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Deck Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 min-h-[400px] content-start">
          {filteredCards.map((card, i) => (
            <div
              key={card.id}
              data-cursor-hover
              className="group relative flex flex-col justify-between h-48 rounded-2xl glass p-5 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_40px_-12px_rgba(124,58,237,0.25)] border border-[--color-border]/50 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5"
              style={{
                animationDelay: `${i * 50}ms`,
                animation: `fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both`,
              }}
            >
              {/* Top Meta Row */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[--color-muted]/70 tracking-wider">
                <span>{card.sys}</span>
                <span>{card.id}</span>
              </div>

              {/* Status Dot */}
              <div className={cn("absolute top-5 right-5 w-1.5 h-1.5 rounded-full shadow-sm", card.color)} />

              {/* Icon & Title */}
              <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-2">
                <div className={cn(
                  "relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
                  card.invertDark ? "dark:invert" : ""
                )}>
                  {card.LucideIcon ? (
                    <card.LucideIcon className="w-10 h-10 text-[--color-foreground]" strokeWidth={1.5} />
                  ) : (
                    <img
                      src={card.customUrl || `https://cdn.simpleicons.org/${card.slug}`}
                      alt={card.name}
                      className="object-contain w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
                <span className="text-sm font-semibold tracking-wide text-[--color-foreground]">
                  {card.name}
                </span>
              </div>

              {/* Bottom Category Tag */}
              <div className="text-[10px] font-mono tracking-widest text-[--color-muted]/60 uppercase mt-2">
                [{card.category}]
              </div>

              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08), transparent 80%)",
                }}
              />
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="w-full py-20 text-center text-[--color-muted] font-mono">
            NO MODULES FOUND MATCHING QUERY.
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
