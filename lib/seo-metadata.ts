import type { Metadata } from "next";
import {
  BUSINESS_DESCRIPTION,
  BUSINESS_TITLE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_NAME,
} from "@/lib/site";

export function homeMetadata(): Metadata {
  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      url: "/",
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
    },
  };
}

export function businessMetadata(): Metadata {
  return {
    title: BUSINESS_TITLE,
    description: BUSINESS_DESCRIPTION,
    alternates: { canonical: "/business" },
    openGraph: {
      title: BUSINESS_TITLE,
      description: BUSINESS_DESCRIPTION,
      url: "/business",
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: BUSINESS_TITLE,
      description: BUSINESS_DESCRIPTION,
    },
  };
}
