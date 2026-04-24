type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

export function rateLimit({
  key,
  limit = 5,
  windowMs = 60_000,
}: {
  key: string;
  limit?: number;
  windowMs?: number;
}): { ok: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || bucket.resetAt < now) {
    const fresh: Bucket = { count: 1, resetAt: now + windowMs };
    store.set(key, fresh);
    return { ok: true, remaining: limit - 1, resetAt: fresh.resetAt };
  }

  if (bucket.count >= limit) {
    return { ok: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count, resetAt: bucket.resetAt };
}
