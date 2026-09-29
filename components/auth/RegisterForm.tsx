"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { useValidatedForm } from "@/lib/hooks/useValidatedForm";
import {
  validateEmail,
  validateFullName,
  validateNewPassword,
} from "@/lib/validation";

const validators = {
  fullName: validateFullName,
  email: validateEmail,
  password: validateNewPassword,
};

export function RegisterForm() {
  const { values, errors, setValue, validateField, validateAll, reset } =
    useValidatedForm(validators);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
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

  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary-800">Create an Account</p>
          <h1 className="font-heading text-heading-s text-neutral-950 md:text-heading-m">
            Welcome to ByteSpace
          </h1>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col items-end gap-6"
        >
          <TextField
            id="full-name"
            label="Full Name"
            placeholder="Jamie Davis"
            autoComplete="name"
            value={values.fullName}
            error={errors.fullName}
            disabled={isSubmitting}
            onChange={(event) => setValue("fullName", event.target.value)}
            onBlur={() => validateField("fullName")}
          />
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
            autoComplete="new-password"
            value={values.password}
            error={errors.password}
            disabled={isSubmitting}
            onChange={(event) => setValue("password", event.target.value)}
            onBlur={() => validateField("password")}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Please wait..." : "Continue"}
          </Button>
          <p
            role="status"
            aria-live="polite"
            className="w-full text-body-s text-primary-800 empty:hidden"
          >
            {status === "success"
              ? "Account created! This is a demo, so no data was saved."
              : ""}
          </p>
        </form>
      </div>

      <p className="pb-8 text-center text-body-m text-neutral-700 md:pb-12.75">
        Already have an account?{" "}
        <Link
          href="/login"
          className="rounded-sm text-primary-800 hover:underline focus-ring"
        >
          Login
        </Link>
      </p>
    </>
  );
}
