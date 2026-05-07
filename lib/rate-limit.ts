/**
 * Lightweight in-memory rate limiter for server actions.
 *
 * Per-instance — Vercel serverless functions are not shared across instances,
 * so this is "good enough" for spam prevention but NOT a hardened limiter.
 * For production hardening, swap to Upstash Redis (durable + global).
 */

type Bucket = number[];

const buckets = new Map<string, Bucket>();

export type RateLimitOptions = {
  /** Max requests per window. Default: 3 */
  max?: number;
  /** Window length in ms. Default: 10 minutes */
  windowMs?: number;
};

/**
 * Returns true if the request is allowed, false if rate-limited.
 * Mutates internal state on every call.
 */
export function checkRateLimit(
  key: string,
  opts: RateLimitOptions = {}
): boolean {
  const max = opts.max ?? 3;
  const windowMs = opts.windowMs ?? 10 * 60 * 1000;
  const now = Date.now();
  const cutoff = now - windowMs;

  const stamps = buckets.get(key) ?? [];
  const recent = stamps.filter((t) => t > cutoff);

  if (recent.length >= max) {
    buckets.set(key, recent);
    return false;
  }

  recent.push(now);
  buckets.set(key, recent);

  // Opportunistic cleanup (1% chance per call)
  if (Math.random() < 0.01) {
    for (const [k, arr] of buckets.entries()) {
      const filtered = arr.filter((t) => t > cutoff);
      if (filtered.length === 0) buckets.delete(k);
      else buckets.set(k, filtered);
    }
  }

  return true;
}

/**
 * Pull a stable client key from request headers.
 * Tries x-forwarded-for, then x-real-ip, then falls back to "unknown".
 */
export function getClientKey(reqHeaders: Headers): string {
  const forwarded = reqHeaders.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]!.trim();
  }
  const realIp = reqHeaders.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
