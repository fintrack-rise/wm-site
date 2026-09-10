import posthog from "posthog-js";

type TrackProperties = Record<string, string | number | boolean | null | undefined>;

/** Fire a named marketing-site event (no-op if PostHog is not initialized). */
export function wmTrack(event: string, properties?: TrackProperties): void {
  try {
    posthog.capture(event, {
      product_surface: "wm_site",
      ...properties,
    });
  } catch {
    /* ignore — PostHog may be uninitialized */
  }
}

/** CTA clicks that may open a new tab; flush immediately so the event is not dropped. */
export function wmTrackCta(properties: {
  cta_label: string;
  section: string;
  pathname?: string | null;
  destination?: string;
  [key: string]: string | number | boolean | null | undefined;
}): void {
  try {
    posthog.capture(
      "wm_site_cta_click",
      {
        product_surface: "wm_site",
        ...properties,
      },
      { send_instantly: true }
    );
  } catch {
    /* ignore — PostHog may be uninitialized */
  }
}
