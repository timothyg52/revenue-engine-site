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
      data-widget-id="6a18670796c166bea6959fdb"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
