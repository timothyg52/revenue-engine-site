"use client";

import * as React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "revenue-engine/strategy-call";

export function CalEmbed() {
  React.useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "strategy-call" });
      const palette = {
        "cal-bg": "#0a0a0b",
        "cal-bg-emphasis": "#16161a",
        "cal-bg-muted": "#111114",
        "cal-text": "#f5f5f7",
        "cal-text-emphasis": "#ffffff",
        "cal-text-muted": "#a1a1aa",
        "cal-border": "#1f1f24",
        "cal-border-emphasis": "#2a2a31",
        "cal-brand": "#e8ff5c",
      };
      cal("ui", {
        cssVarsPerTheme: { dark: palette, light: palette },
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    })();
  }, []);

  return (
    <div
      className="relative w-full overflow-visible rounded-2xl border border-line bg-surface/60"
      style={{ minHeight: 720 }}
    >
      {/* Cal.com's embed wrapper sometimes mounts with visibility:hidden until
          its internal sizer settles. Force visibility for our wrapper + any
          descendant the embed library injects. */}
      <style>{`
        .cal-embed-host,
        .cal-embed-host > div,
        .cal-embed-host iframe,
        [class*="cal-element-embed"] {
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          min-height: 720px !important;
        }
        .cal-embed-host iframe {
          height: 100% !important;
          border: 0 !important;
          background: transparent !important;
        }
      `}</style>
      <div className="cal-embed-host w-full" style={{ minHeight: 720 }}>
        <Cal
          namespace="strategy-call"
          calLink={CAL_LINK}
          style={{ width: "100%", minHeight: 720, border: 0 }}
          config={{ layout: "month_view", theme: "dark" }}
        />
      </div>
    </div>
  );
}
