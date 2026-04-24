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
    <div className="relative h-[640px] w-full overflow-hidden rounded-2xl border border-line bg-surface/60">
      <Cal
        namespace="strategy-call"
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
