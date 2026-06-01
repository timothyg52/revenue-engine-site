import { MapPin, Mail } from "lucide-react";

const navLinks = [
  { href: "/#frameworks", label: "How We Grow Tree Companies" },
  { href: "/#process", label: "Onboarding" },
  { href: "/#results", label: "Founding Clients" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Free Growth Audit" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="relative bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="font-display text-2xl text-fg hover:text-accent transition-colors"
            >
              Tree Revenue Engine
            </a>
            <p className="max-w-xs text-pretty text-sm text-fg-muted">
              The growth partner built only for tree service companies. More
              jobs. More estimates. Fewer missed calls.
            </p>
            <address className="mt-2 flex flex-col gap-1.5 text-sm not-italic text-fg-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-fg-dim" aria-hidden />
                Nashville, TN
              </span>
              <a
                href="mailto:futureceo.52@gmail.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
              >
                <Mail className="h-3.5 w-3.5 text-fg-dim" aria-hidden />
                futureceo.52@gmail.com
              </a>
            </address>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-dim">
              Navigate
            </span>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-dim">
              Legal
            </span>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-fg-dim sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Tree Revenue Engine. All rights reserved.</span>
          <span>Nashville, TN · Serving tree companies nationwide.</span>
        </div>
      </div>
    </footer>
  );
}
