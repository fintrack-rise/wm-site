import posthog from "posthog-js";

/** Marketing site events; same PostHog project as web-ui when env matches. */
export function wmTrack(
  event: string,
  properties?: Record<string, string | number | boolean | null | undefined>
): void {
  if (process.env.NODE_ENV !== "production") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;
  try {
    posthog.capture(event, {
      product_surface: "wm_site",
      ...properties,
    });
  } catch {
    /* ignore */
  }
}
