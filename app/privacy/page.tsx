import type { Metadata } from "next";
import { LegalPage } from "@/components/common/legal-page";
import { SITE_NAME } from "@/lib/site";

const APP_NAME = "Within Market Trends";
const SUPPORT_EMAIL = "deepak@withinmarket.com";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy policy for ${APP_NAME}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacy Policy — ${APP_NAME}`,
    description: `Privacy policy for ${APP_NAME}.`,
    url: "/privacy",
    siteName: SITE_NAME,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This is the privacy policy page for {APP_NAME}, published by Within Market Technologies. The policy text will
        be published here.
      </p>
      <p>
        Privacy questions can go to{" "}
        <a className="text-foreground underline underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
