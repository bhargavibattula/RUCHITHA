"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
};

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-violet-deep via-violet-primary to-violet-accent text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.55)] hover:shadow-[0_12px_36px_-6px_rgba(168,85,247,0.6)]",
  secondary:
    "glass text-foreground hover:border-[--color-violet-accent]",
  ghost:
    "bg-transparent text-foreground hover:text-[--color-violet-accent]",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", magnetic = true, children, ...props }, forwardedRef) => {
    const magneticRef = useMagnetic(0.3);

    return (
      <button
        ref={(node) => {
          if (magnetic) (magneticRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-[--color-violet-accent]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
