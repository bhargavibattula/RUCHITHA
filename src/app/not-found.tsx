"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 text-center px-6">
      <div className="font-[family-name:var(--font-display)] text-[clamp(6rem,22vw,14rem)] leading-none tracking-tight gradient-text opacity-20 select-none">
        404
      </div>
      <div className="-mt-16">
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
          Page not found.
        </h1>
        <p className="mt-4 text-[--color-muted]">
          This page doesn&apos;t exist. Let&apos;s get you back home.
        </p>
      </div>
      <Button
        variant="primary"
        size="md"
        onClick={() => (window.location.href = "/")}
      >
        <Home className="h-4 w-4" />
        Back to home
      </Button>
    </div>
  );
}
