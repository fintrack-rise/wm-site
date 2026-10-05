import type { ReactNode } from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/common/legal-page";
import { SITE_NAME } from "@/lib/site";

const OPERATOR = "WithinMarket";
const APP_NAME = "WithinMarket Trends";
const SUPPORT_EMAIL = "deepak@withinmarket.com";
const MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy policy for ${APP_NAME}, operated by ${OPERATOR}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacy Policy — ${APP_NAME}`,
    description: `Privacy policy for ${APP_NAME}, operated by ${OPERATOR}.`,
    url: "/privacy",
    siteName: SITE_NAME,
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium text-foreground">{title}</h3>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function EmailLink() {
  return (
    <a className="text-foreground underline underline-offset-4" href={MAILTO}>
      {SUPPORT_EMAIL}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm">Last updated: October 5, 2026</p>
      <p>
        {OPERATOR} (“{OPERATOR}”, “we”, “us”, or “our”) operates the {APP_NAME} mobile application and related websites
        and services.
      </p>
      <p>This Privacy Policy explains how we collect, use, store, disclose, and protect information when you use {OPERATOR}.</p>
      <p>By using {OPERATOR}, you acknowledge the practices described in this Privacy Policy.</p>

      <Section title="1. Information we collect">
        <p>
          We collect information that you provide directly to us, information generated through your use of the app, and
          information necessary to provide and secure our services.
        </p>
        <Sub title="1.1 Account information">
          <p>When you create or use a {OPERATOR} account, we may collect:</p>
          <Bullets
            items={[
              "Name",
              "Email address",
              "User/account identifier",
              "Authentication information",
              "Sign-in provider information, where applicable",
            ]}
          />
          <p>We use this information to:</p>
          <Bullets
            items={[
              "Create and manage your account",
              "Authenticate you",
              "Provide access to the application",
              "Personalize your experience",
              "Communicate with you about your account and the service",
              "Maintain security and prevent unauthorized access",
            ]}
          />
          <p>
            We use third-party authentication services, including Clerk, to help provide authentication and
            account-management functionality.
          </p>
        </Sub>
      </Section>

      <Section title="2. Investment and portfolio information">
        <p>{OPERATOR} allows users to create and manage investment-related information.</p>
        <p>Depending on the features you use, this may include:</p>
        <Bullets
          items={[
            "Stocks and other assets in your portfolio",
            "Quantities or holdings",
            "Purchase prices, where provided",
            "Watchlists",
            "Investment preferences",
            "Investment interests",
            "Portfolio-related settings",
            "Monitoring criteria and alerts",
            "Notes or other information you choose to save",
            "Other information you voluntarily provide about your investment interests",
          ]}
        />
        <p>This information is used to provide features such as:</p>
        <Bullets
          items={[
            "Portfolio tracking",
            "Watchlists",
            "Personalized market feeds",
            "Stock and company analysis",
            "Investment monitoring",
            "Alerts and notifications",
            "Personalized research",
            "AI-powered analysis and explanations",
          ]}
        />
        <p>
          We do not act as a broker, hold customer funds, or execute securities transactions through the {APP_NAME}{" "}
          application.
        </p>
      </Section>

      <Section title="3. App usage and interaction information">
        <p>We may collect information about how you interact with {OPERATOR}, including:</p>
        <Bullets
          items={[
            "Screens or features viewed",
            "Searches",
            "Watchlist activity",
            "Portfolio activity",
            "Research and content interactions",
            "AI feature usage",
            "Monitoring and alert interactions",
            "App version",
            "Device and operating-system information",
            "Technical information necessary to operate and secure the application",
          ]}
        />
        <p>We use this information to:</p>
        <Bullets
          items={[
            "Operate and improve the application",
            "Understand which features are useful",
            "Diagnose technical problems",
            "Improve performance",
            "Personalize the user experience",
            "Measure product usage",
            "Detect abuse or unauthorized activity",
          ]}
        />
      </Section>

      <Section title="4. Device and push notification information">
        <p>
          If you enable notifications, {OPERATOR} may collect and store a device push-notification token and information
          necessary to deliver notifications to your device.
        </p>
        <p>We use this information to send notifications such as:</p>
        <Bullets
          items={[
            "Portfolio updates",
            "Watchlist alerts",
            "Market alerts",
            "Monitoring notifications",
            "Product notifications",
          ]}
        />
        <p>You can control notification permissions through your device settings.</p>
        <p>We do not use push-notification tokens to identify you for advertising purposes.</p>
      </Section>

      <Section title="5. AI and research features">
        <p>{OPERATOR} provides AI-powered research and analysis features.</p>
        <p>
          When you use these features, information you submit may be processed by {OPERATOR} and, where necessary, by
          third-party technology providers that help us provide AI, search, hosting, storage, or related services.
        </p>
        <p>Depending on the feature, this information may include:</p>
        <Bullets
          items={[
            "Questions you ask",
            "Research queries",
            "Investment-related questions",
            "Content you submit",
            `Information from your ${OPERATOR} account or portfolio that is necessary to answer your request`,
          ]}
        />
        <p>We use this information to provide the requested AI or research functionality and to improve the service.</p>
        <p>We do not represent AI-generated information as personalized financial advice.</p>
      </Section>

      <Section title="6. Financial information">
        <p>{OPERATOR} may process investment and portfolio information that you voluntarily provide.</p>
        <p>We use this information to provide portfolio tracking, analysis, personalization, monitoring, and related features.</p>
        <p>{OPERATOR} does not:</p>
        <Bullets
          items={[
            "Execute stock or securities trades",
            "Hold customer money",
            "Operate a brokerage account",
            "Provide custody of securities",
            "Transfer money on behalf of users",
          ]}
        />
        <p>
          Investment information and analysis provided through {OPERATOR} is for informational and educational purposes
          and should not be considered personalized investment advice.
        </p>
      </Section>

      <Section title="7. Third-party service providers">
        <p>We use third-party service providers to operate and improve {OPERATOR}.</p>
        <p>Depending on the services you use, these providers may include providers for:</p>
        <Bullets
          items={[
            "Authentication and account management",
            "Cloud hosting and infrastructure",
            "Data storage",
            "AI processing",
            "Search and data processing",
            "Push notifications",
            "Analytics",
            "Application security",
            "Error monitoring",
            "Payment processing, where applicable",
          ]}
        />
        <p>These providers may process information on our behalf only as necessary to provide their services to us.</p>
        <p>We require our service providers to handle information appropriately and to maintain reasonable security measures.</p>
        <Sub title="Authentication">
          <p>We use Clerk for account authentication and related identity-management functionality.</p>
        </Sub>
        <Sub title="Advertising and marketing">
          <p>
            If we introduce advertising or advertising-measurement technologies, including Meta technologies, we may share
            certain app activity or device information with those providers for advertising measurement, attribution,
            personalization, or related purposes, subject to applicable permissions and requirements.
          </p>
          <p>
            Where required by Apple, we will request permission through Apple’s App Tracking Transparency framework before
            performing tracking activities.
          </p>
        </Sub>
      </Section>

      <Section title="8. Advertising and tracking">
        <p>
          {OPERATOR} may use advertising or measurement technologies in the future to understand the effectiveness of our
          marketing campaigns.
        </p>
        <p>
          If we use technologies that meet Apple’s definition of tracking, we will comply with Apple’s App Tracking
          Transparency requirements and applicable privacy laws.
        </p>
        <p>Users may control applicable tracking permissions through their device settings.</p>
        <p>We do not sell your personal information to data brokers.</p>
      </Section>

      <Section title="9. Information from third-party content sources">
        <p>
          {OPERATOR} may provide access to or summarize information from publicly available or third-party sources,
          including financial research, news, market information, and other content providers.
        </p>
        <p>
          Your interaction with {OPERATOR} does not necessarily mean that we share your personal information with those
          content providers.
        </p>
        <p>
          Where third-party services are used to provide requested functionality, information may be processed according to
          the applicable third party’s privacy policy and our agreements with that provider.
        </p>
      </Section>

      <Section title="10. How we use your information">
        <p>We may use information we collect to:</p>
        <ol className="list-decimal space-y-2 pl-5">
          {[
            "Create and maintain your account.",
            "Authenticate your identity.",
            `Provide the ${OPERATOR} application and its features.`,
            "Personalize your feed, watchlists, portfolio, and research experience.",
            "Provide portfolio and investment monitoring.",
            "Provide AI-powered research and analysis.",
            "Send notifications and alerts.",
            "Improve our products and services.",
            "Understand application usage and performance.",
            "Detect, investigate, and prevent fraud, abuse, and security incidents.",
            "Communicate with you about the service.",
            "Comply with legal and regulatory obligations.",
            "Enforce our agreements and protect our rights.",
            "Support advertising measurement and marketing where permitted and appropriately disclosed.",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Section>

      <Section title="11. How we share information">
        <p>We do not sell your personal information.</p>
        <p>We may share information with:</p>
        <Sub title="Service providers">
          <p>
            We may share information with companies that provide services to us, such as authentication, hosting, cloud
            infrastructure, AI processing, analytics, notifications, security, and other technical services.
          </p>
        </Sub>
        <Sub title="Advertising and measurement providers">
          <p>
            If advertising or attribution technologies are enabled, certain information may be shared with advertising
            partners for purposes such as campaign measurement, attribution, or advertising personalization, subject to
            applicable permissions.
          </p>
        </Sub>
        <Sub title="Legal requirements">
          <p>We may disclose information when reasonably necessary to:</p>
          <Bullets
            items={[
              "Comply with applicable law",
              "Respond to legal process",
              "Protect users or the public",
              "Investigate fraud or security incidents",
              "Protect our legal rights",
              "Enforce our agreements",
            ]}
          />
        </Sub>
        <Sub title="Business transfers">
          <p>
            If {OPERATOR} or substantially all of its assets are acquired, merged, reorganized, or transferred, user
            information may be transferred as part of that transaction, subject to applicable law.
          </p>
        </Sub>
      </Section>

      <Section title="12. Data retention">
        <p>We retain personal information for as long as reasonably necessary to:</p>
        <Bullets
          items={[
            `Provide the ${OPERATOR} service`,
            "Maintain your account",
            "Provide features you request",
            "Meet legal and regulatory requirements",
            "Resolve disputes",
            "Enforce agreements",
            "Prevent fraud and abuse",
            "Maintain appropriate security records",
          ]}
        />
        <p>
          When information is no longer required, we may delete it, anonymize it, or securely dispose of it, subject to
          legal and legitimate business requirements.
        </p>
      </Section>

      <Section title="13. Deleting your account and data">
        <p>You may request deletion of your {OPERATOR} account and associated personal information.</p>
        <p>In the {APP_NAME} app, open Profile and choose Delete account.</p>
        <p>
          You can also request deletion by email at <EmailLink />. Include the email address associated with your{" "}
          {OPERATOR} account so that we can identify it.
        </p>
        <p>Depending on the request and applicable law, deletion may include:</p>
        <Bullets
          items={[
            "Account information",
            "Profile information",
            "Portfolio information",
            "Watchlists",
            "Preferences",
            "Saved information",
            "Other information associated with your account",
          ]}
        />
        <p>
          Certain information may need to be retained where required by law, necessary to prevent fraud or abuse, or
          required for legitimate security and compliance purposes.
        </p>
      </Section>

      <Section title="14. Security">
        <p>
          We use reasonable technical and organizational measures designed to protect personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>These measures may include:</p>
        <Bullets
          items={[
            "Encryption in transit",
            "Access controls",
            "Authentication mechanisms",
            "Secure cloud infrastructure",
            "Monitoring and security controls",
            "Restricted access to production systems",
          ]}
        />
        <p>No method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
      </Section>

      <Section title="15. International data transfers">
        <p>
          {OPERATOR} and its service providers may process information in countries other than the country where you live.
        </p>
        <p>
          Where information is transferred internationally, we take reasonable steps to ensure that the information receives
          appropriate protection in accordance with applicable privacy laws.
        </p>
      </Section>

      <Section title="16. Children’s privacy">
        <p>{OPERATOR} is not intended for children under the age of 13.</p>
        <p>We do not knowingly collect personal information from children under 13.</p>
        <p>
          If you believe that a child has provided personal information to us, contact us so that we can investigate and take
          appropriate action.
        </p>
      </Section>

      <Section title="17. Your privacy choices">
        <p>Depending on your location and applicable law, you may have rights relating to your personal information, including the right to:</p>
        <Bullets
          items={[
            "Request access to your personal information",
            "Request correction of inaccurate information",
            "Request deletion",
            "Request information about how your information is used",
            "Withdraw certain consents",
            "Object to certain processing",
            "Restrict certain processing",
            "Exercise applicable data portability rights",
          ]}
        />
        <p>You may also control certain permissions through your device settings, including:</p>
        <Bullets items={["Notifications", "Tracking permissions", "Other device-level permissions requested by the application"]} />
        <p>To exercise applicable privacy rights, contact us using the information below.</p>
      </Section>

      <Section title="18. Third-party links and services">
        <p>{OPERATOR} may contain links to third-party websites, services, research, or content.</p>
        <p>We are not responsible for the privacy practices of third-party websites or services that we do not control.</p>
        <p>Review the privacy policies of third-party services before providing them with personal information.</p>
      </Section>

      <Section title="19. Changes to this Privacy Policy">
        <p>We may update this Privacy Policy from time to time.</p>
        <p>When we make changes, we will update the Last updated date at the top of this policy.</p>
        <p>
          If changes materially affect how we use personal information, we may provide additional notice where required by
          applicable law.
        </p>
      </Section>

      <Section title="20. Contact us">
        <p>If you have questions about this Privacy Policy, your personal information, or your privacy rights, contact:</p>
        <p>
          {OPERATOR}
          <br />
          Website:{" "}
          <a className="text-foreground underline underline-offset-4" href="https://www.withinmarket.com">
            https://www.withinmarket.com
          </a>
          <br />
          Email: <EmailLink />
        </p>
      </Section>

      <Section title="21. Investment information disclaimer">
        <p>
          {OPERATOR} provides investment research, market information, educational content, analytical tools, and
          AI-generated explanations.
        </p>
        <p>
          Information provided through {OPERATOR} is for informational and educational purposes only and is not a
          recommendation, solicitation, or personalized investment advice.
        </p>
        <p>Users are responsible for their own investment decisions.</p>
        <p>Past performance does not guarantee future results.</p>
      </Section>
    </LegalPage>
  );
}
