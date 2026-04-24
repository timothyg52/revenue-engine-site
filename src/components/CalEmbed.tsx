"use client";

import * as React from "react";
import Script from "next/script";

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://links.revenue-engine-ai.com/widget/booking/M6mi5Lfr7JxDsfeqnWy7";

const IFRAME_ID = "revenue-engine-booking";

export function CalEmbed() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface/60"
      style={{ minHeight: 720 }}
    >
      {/* GoHighLevel's form_embed.js posts a `hsFormCallback` message with the
          iframe's natural height so we can resize. We also force visibility on
          the iframe so it's never hidden during mount. */}
      <style>{`
        #${IFRAME_ID} {
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          min-height: 720px !important;
          border: 0 !important;
          background: transparent !important;
          display: block !important;
        }
      `}</style>

      <iframe
        id={IFRAME_ID}
        src={BOOKING_URL}
        title="Book a strategy call with Revenue Engine"
        loading="lazy"
        scrolling="no"
        style={{ width: "100%", minHeight: 720, border: 0 }}
      />

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
