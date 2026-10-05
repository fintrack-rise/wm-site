import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/common/legal-page";
import { SITE_NAME } from "@/lib/site";

const APP_NAME = "Within Market Trends";
const SUPPORT_EMAIL = "deepak@withinmarket.com";

export const metadata: Metadata = {
  title: `Support — ${APP_NAME}`,
  description: `Get help with ${APP_NAME}. Email ${SUPPORT_EMAIL} for account, notification, and app questions.`,
  alternates: { canonical: "/support" },
  openGraph: {
    title: `Support — ${APP_NAME}`,
    description: `Get help with ${APP_NAME}.`,
    url: "/support",
    siteName: SITE_NAME,
  },
};

export default function SupportPage() {
  return (
    <LegalPage title="Support">
      <p>
        Help for the {APP_NAME} iPhone app, published by Within Market Technologies. This page is public. You do not
        need an account to read it.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl text-foreground">Contact</h2>
        <p>
          Email{" "}
          <a className="text-foreground underline underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>{" "}
          and include the email address you use in the app. We reply to support questions at that address.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl text-foreground">Notifications</h2>
        <p>
          Alerts are turned on from Profile in the app. If the switch turns itself off, open iPhone Settings, tap
          Trends, then Notifications, and turn Allow Notifications on. Return to the app and switch alerts on again.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl text-foreground">Delete your account</h2>
        <p>
          Open {APP_NAME}, go to Profile, and choose Delete account. That removes the account, watchlists, alerts, and
          chat history. Sign out only ends the session on this phone.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl text-foreground">Privacy</h2>
        <p>
          The privacy policy is at{" "}
          <Link className="text-foreground underline underline-offset-4" href="/privacy">
            withinmarket.com/privacy
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}
