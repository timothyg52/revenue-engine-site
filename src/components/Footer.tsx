import { MapPin } from "lucide-react";

const navLinks = [
  { href: "#frameworks", label: "Frameworks" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
  { href: "#book", label: "Book a Call" },
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
              href="#top"
              className="font-display text-2xl text-fg hover:text-accent transition-colors"
            >
              Revenue Engine
            </a>
            <p className="max-w-xs text-pretty text-sm text-fg-muted">
              AI lead generation systems for Nashville service businesses.
            </p>
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
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-fg-dim">
              <MapPin className="h-3 w-3" aria-hidden />
              Built in Nashville, TN
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-fg-dim sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Revenue Engine. All rights reserved.</span>
          <span>Built in Nashville. For Nashville.</span>
        </div>
      </div>
    </footer>
  );
}
