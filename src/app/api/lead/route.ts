import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getClientIp(req: NextRequest) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const limit = rateLimit({ key: `lead:${ip}`, limit: 5, windowMs: 60_000 });

  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a minute." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)) },
      },
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("[lead] GHL_WEBHOOK_URL not set — payload received:", parsed.data);
    return NextResponse.json({ ok: true, queued: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        source: "revenueengine.ai",
        receivedAt: new Date().toISOString(),
        ip,
      }),
    });

    if (!res.ok) {
      console.error("[lead] webhook returned", res.status);
      return NextResponse.json(
        { error: "Failed to deliver lead. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[lead] webhook error", err);
    return NextResponse.json(
      { error: "Network error reaching webhook." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
