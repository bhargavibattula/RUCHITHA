"use client";

import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { education, certifications } from "@/data/resume";

export function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" ref={ref} className="relative z-10 py-32">
      <div className="container-px mx-auto max-w-5xl">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[--color-violet-accent]">
            Education &amp; Certifications
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Foundation.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Degree */}
          <div data-reveal className="rounded-3xl glass p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-primary to-violet-accent">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{education.degree}</h3>
                {education.specialization && (
                  <p className="mt-1 text-sm text-[--color-violet-accent]">{education.specialization}</p>
                )}
                <p className="mt-1 text-sm text-[--color-muted]">{education.institution}</p>
                <p className="text-xs text-[--color-muted]">{education.location}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-violet-accent/5 p-4 text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl gradient-text">
                  {education.cgpa}
                </div>
                <div className="mt-1 text-xs text-[--color-muted]">CGPA</div>
              </div>
              <div className="rounded-2xl bg-violet-accent/5 p-4 text-center">
                <div className="font-[family-name:var(--font-display)] text-lg gradient-text leading-snug">
                  2027
                </div>
                <div className="mt-1 text-xs text-[--color-muted]">Expected graduation</div>
              </div>
            </div>

            <p className="mt-4 text-xs text-[--color-muted]">{education.period}</p>
          </div>

          {/* Certifications */}
          <div data-reveal className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Certifications</h3>
            {certifications.map((cert) => (
              <div
                key={cert.credentialId}
                data-cursor-hover
                className="group rounded-2xl glass p-5 transition-all duration-300 hover:border-[--color-violet-accent]/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium leading-snug group-hover:text-[--color-violet-accent] transition-colors">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-sm text-[--color-muted]">{cert.issuer} · {cert.year}</p>
                    <p className="mt-1 font-mono text-[10px] text-[--color-muted]/60">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-violet-accent/10 px-2.5 py-1 text-[10px] font-medium text-violet-accent">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
