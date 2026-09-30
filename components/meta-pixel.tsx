"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackMeta } from "@/lib/meta-pixel";

/** PageView and ViewContent for each marketing page. */
export function MetaPixel() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    trackMeta("PageView", { page: pathname });
    trackMeta("ViewContent", { content_type: "page", content_name: pathname });
  }, [pathname]);

  return null;
}
