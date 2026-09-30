/** Meta Pixel for the marketing site. No-op until NEXT_PUBLIC_META_PIXEL_ID is set. */

type MetaParams = Record<string, string | number | boolean>;

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: Fbq;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let installed = false;

function pixelId(): string {
  return process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";
}

function installPixel(id: string): void {
  if (typeof window === "undefined" || installed) return;
  installed = true;
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      const self = window.fbq;
      if (!self) return;
      if (self.callMethod) self.callMethod(...args);
      else self.queue.push(args);
    } as Fbq;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.push = fbq;
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const first = document.getElementsByTagName("script")[0];
    if (first?.parentNode) first.parentNode.insertBefore(script, first);
    else document.head.appendChild(script);
  }
  window.fbq("init", id);
}

export function trackMeta(event: "PageView" | "ViewContent", properties?: MetaParams): void {
  const id = pixelId();
  if (!id || typeof window === "undefined") return;
  installPixel(id);
  window.fbq?.("track", event, properties);
}
