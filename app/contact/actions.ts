"use server";

import { redirect } from "next/navigation";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  if (!name || !email) {
    redirect("/contact?error=1");
  }
  // Hook up Resend, Formspree, or your API here. For now we acknowledge submission.
  redirect("/contact?thanks=1");
}
