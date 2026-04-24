import * as React from "react";
import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium tracking-wide text-fg-muted backdrop-blur",
        className,
      )}
    >
      {dot ? (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-80 animate-pulse-dot" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
