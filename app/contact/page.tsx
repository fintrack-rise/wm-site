import { submitContact } from "@/app/contact/actions";
import { ButtonLink } from "@/components/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a demo or ask about Within Market for research, advisory, or platform integration.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ thanks?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const thanks = sp.thanks === "1";
  const error = sp.error === "1";

  return (
    <div>
      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Talk to us
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Interested in Within Market for research, advisory workflows, or platform integration? We
            would love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {thanks ? (
          <div
            className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
            role="status"
          >
            Thank you. We received your message and will get back to you soon.
          </div>
        ) : null}
        {error ? (
          <div
            className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            role="alert"
          >
            Please fill in your name and email.
          </div>
        ) : null}

        <form action={submitContact} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-zinc-300">
              Company or role
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-zinc-300">
              Reason for interest
            </label>
            <select
              id="reason"
              name="reason"
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="demo">Request demo</option>
              <option value="early-access">Early access</option>
              <option value="partnership">Partnership / platform</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500/90 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-400"
            >
              Request Demo
            </button>
            <ButtonLink href="/" variant="secondary">
              Back to home
            </ButtonLink>
          </div>
        </form>
      </section>
    </div>
  );
}
