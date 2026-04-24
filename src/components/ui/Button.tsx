import * as React from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: false;
  href?: never;
  trailingIcon?: React.ReactNode;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  href: string;
  trailingIcon?: React.ReactNode;
};

type Props = ButtonProps | AnchorProps;

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:pointer-events-none active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-base hover:bg-accent-hover shadow-[0_0_0_1px_rgba(232,255,92,0.4),0_8px_30px_-8px_rgba(232,255,92,0.45)]",
  ghost:
    "bg-transparent text-fg hover:bg-elevated/70 border border-line",
  outline:
    "bg-transparent text-fg border border-line-strong hover:border-accent/60 hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-base",
};

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    trailingIcon,
    ...rest
  } = props as Props & { className?: string; children?: React.ReactNode };

  const cls = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    return (
      <a className={cls} {...(rest as AnchorProps)}>
        <span>{children}</span>
        {trailingIcon ?? null}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonProps)}>
      <span>{children}</span>
      {trailingIcon ?? null}
    </button>
  );
}

export function ArrowCta({ className }: { className?: string }) {
  return <ArrowRight className={cn("h-4 w-4", className)} aria-hidden />;
}
