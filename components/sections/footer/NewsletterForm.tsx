"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // There is no backend yet; the browser validates the email before this runs
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex items-start gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          onChange={() => setIsSubscribed(false)}
          className="h-13 w-94 rounded-full border border-neutral-200 bg-white px-6 text-body-m text-neutral-950 placeholder:text-neutral-950 focus-ring"
        />
        <Button type="submit">Search</Button>
      </div>
      <p className="max-w-126 text-body-xs text-neutral-950">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
      <p
        role="status"
        aria-live="polite"
        className="text-body-xs text-primary-800 empty:hidden"
      >
        {isSubscribed ? "Thanks for subscribing!" : ""}
      </p>
    </form>
  );
}
