"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { wmTrack } from "@/lib/wm-analytics";

type ContactUsProps = {
  buttonClassName?: string;
  buttonLabel?: string;
};

export function ContactUs({ buttonClassName, buttonLabel = "Contact us" }: ContactUsProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "0cad7e28-1e60-49e6-9991-d8d618e24486");
    formData.append("subject", "New contact from Optimus WM site");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        wmTrack("wm_site_contact_form_submitted", { pathname, button_label: buttonLabel });
        setResult("Thanks! Your message has been sent.");
        event.currentTarget.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (_error) {
      setResult("Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          wmTrack("wm_site_contact_us_click", { pathname, button_label: buttonLabel });
          setIsOpen(true);
        }}
        className={
          buttonClassName ??
          "rounded-full bg-foreground px-6 py-2 text-sm text-background transition hover:bg-foreground/90"
        }
      >
        {buttonLabel}
      </button>

      {isOpen && isMounted
        ? createPortal(
            <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/50 px-4 py-8">
              <div className="flex min-h-full items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-foreground/10 bg-background p-6 shadow-2xl">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Contact us</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Tell us about your use case.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-foreground/5"
                      aria-label="Close contact form"
                    >
                      Close
                    </button>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-foreground/40"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-foreground/40"
                    />
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="What are you looking to build?"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-foreground/40"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-foreground px-4 py-2 text-sm text-background transition hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </form>

                  {result ? <p className="mt-3 text-sm text-muted-foreground">{result}</p> : null}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
