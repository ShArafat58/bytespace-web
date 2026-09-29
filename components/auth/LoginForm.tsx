"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FacebookIcon, GoogleIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { useValidatedForm } from "@/lib/hooks/useValidatedForm";
import { validateEmail, validateExistingPassword } from "@/lib/validation";

const validators = {
  email: validateEmail,
  password: validateExistingPassword,
};

const socialProviders = [
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Google", Icon: GoogleIcon },
];

export function LoginForm() {
  const { values, errors, setValue, validateField, validateAll, reset } =
    useValidatedForm(validators);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "social"
  >("idle");
  const isSubmitting = status === "submitting";

  // No backend yet: simulate a short request, then confirm
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateAll()) return;
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      reset();
    }, 800);
  }

  const statusMessage = {
    idle: "",
    submitting: "",
    success: "Signed in! This is a demo, so no real account was used.",
    social: "Social sign in is not available in this demo.",
  }[status];

  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary-800">Sign In</p>
          <h1 className="font-heading text-heading-s text-neutral-950 md:text-heading-m">
            Welcome Back
          </h1>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col items-end gap-6"
        >
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="designer@example.com"
            autoComplete="email"
            value={values.email}
            error={errors.email}
            disabled={isSubmitting}
            onChange={(event) => setValue("email", event.target.value)}
            onBlur={() => validateField("email")}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            placeholder="********"
            autoComplete="current-password"
            value={values.password}
            error={errors.password}
            disabled={isSubmitting}
            onChange={(event) => setValue("password", event.target.value)}
            onBlur={() => validateField("password")}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Please wait..." : "Sign In"}
          </Button>
          <p
            role="status"
            aria-live="polite"
            className="w-full text-body-s text-primary-800 empty:hidden"
          >
            {statusMessage}
          </p>
        </form>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-2.75">
          <span aria-hidden="true" className="h-px flex-1 bg-black-200" />
          <span className="text-body-l text-black-400">or</span>
          <span aria-hidden="true" className="h-px flex-1 bg-black-200" />
        </div>
        <div className="flex gap-4">
          {socialProviders.map(({ name, Icon }) => (
            <button
              key={name}
              type="button"
              aria-label={`Continue with ${name}`}
              onClick={() => setStatus("social")}
              className="flex size-18 items-center justify-center rounded-3xl border border-black-200 text-black-950 transition-colors hover:bg-neutral-50 focus-ring"
            >
              <Icon aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <p className="pb-8 text-center text-body-m text-black-400 md:pb-10">
        New user?{" "}
        <Link
          href="/signup"
          className="rounded-sm text-primary-800 hover:underline focus-ring"
        >
          Create an account
        </Link>
      </p>
    </>
  );
}
