"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ChatWidget() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="YiL1As6UE6YD390xtPa7"
      strategy="afterInteractive"
    />
  );
}
